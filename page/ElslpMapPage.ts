/**
* 俄罗斯轮盘
*/
module gameelslp.page {
    import TextFieldU = utils.TextFieldU;
    const enum MAP_STATUS {
        PLAY_STATUS_NONE = 0, // 准备阶段
        PLAY_STATUS_GAMESTART = 1, // 游戏开始
        PLAY_STATUS_BET = 2,// 下注阶段
        PLAY_STATUS_STOP_BET = 3,// 停止下注阶段
        PLAY_STATUS_SHOW = 4, // 开奖阶段
        PLAY_STATUS_SETTLE = 5, // 结算阶段
        PLAY_STATUS_SHOW_INFO = 6, // 显示结算框阶段
        PLAY_STATUS_RELAX = 7, // 休息阶段
    }
    const ALL_GAME_ROOM_CONFIG_ID = [232, 233, 234, 235];// 可进入的maplv
    const MAX_POS = 49;   //共有49个下注区域
    const MONEY_LIMIT_CONFIG = {
        "232": [5000, 2000, 5000],    //新手(上庄限制，入座限制，投注限额)
        "233": [20000, 5000, 8000],  //小资(上庄限制，入座限制，投注限额)
        "234": [50000, 10000, 25000],  //老板(上庄限制，入座限制，投注限额)
        "235": [100000, 20000, 50000],    //富豪(上庄限制，入座限制，投注限额)
    };
    const ROOM_CHIP_CONFIG = {
        "232": [1, 10, 50, 100, 1000],     //新手
        "233": [10, 50, 100, 500, 1000],   //小资
        "234": [50, 100, 500, 1000, 5000],  //老板
        "235": [100, 500, 1000, 5000, 10000],  //富豪
    };
    const ROBOT_NUM_CONFIG = {
        "232": [100, 150, 200, 300],     //新手
        "233": [70, 100, 130, 200],   //小资
        "234": [30, 60, 100, 150],  //老板
        "235": [10, 30, 60, 90],  //富豪
    };
    export class ElslpMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.eluosizhuanpan.ELuoSiLunPanUI;
        private _elslpStory: ElslpStory;
        private _elslpMapInfo: ElslpMapInfo;
        private _lottery: string = "";//中奖区域
        private _mainPlayerBenefit: number = 0;//玩家收益
        private _areaList: Array<any> = [];//下注区域UI集合
        private _areaKuangUIList: Array<any> = [];//下注区域边框集合
        private _txtBetUIList: Array<any> = [];//下注文本UI集合
        private _seatUIList: Array<any> = [];//座位UI集合
        private _chipUIList: Array<Button> = [];//筹码UI集合
        private _chipGuangUIList: Array<LImage> = [];//筹码光效UI集合
        private _chipArr: Array<number> = [];//筹码大小类型
        private _clipList: Array<ElslpClip> = [];//飘字集合
        private _robotConfig: any;//机器人配置
        private _szlimit: number;//上庄金币
        private _seatlimit: number;//入座金币
        private _betlimit: number;//投注限额
        private _curStatus: number;//当前地图状态
        private _countDown: number;//倒计时时间戳
        private _curChip: number;//当前选择筹码
        private _curChipY: number;//当前选择筹码y轴位置
        private _chipSortScore: number = 0;//筹码层级
        private _unitSeated: Array<any> = [];//入座精灵信息集合
        private _chipTotalList: Array<any> = [];//区域绘制筹码集合
        private _betTotalList: Array<any> = [];//区域下注总额集合（所有玩家）
        private _betMainList: Array<any> = [];//区域下注总额集合（主玩家）
        private _rebetList: Array<number> = [];//重复下注列表(49个区域)
        private _mainHeadPos: any = [[0, 0], [0, -10]];//主玩家座位头像初始位置
        private _headStartPos: any = [[0, 0], [0, 158], [0, 316], [0, 0], [0, 158], [0, 316]];//座位头像初始位置
        private _headEndPos: any = [[10, 0], [10, 158], [10, 316], [-10, 0], [-10, 158], [-10, 316]];//座位头像移动位置
        private _htmlText: laya.html.dom.HTMLDivElement;
        private _htmlTextArr: Array<laya.html.dom.HTMLDivElement>;
        private _isFirstOpen: boolean = false;
        private _betWinArea: Array<number> = [];
        private _betAllTotal: number = 0;
        private _betMainTotal: number = 0;
        private _curGameDice: string[];
        private _rewardNumber: string;  //中奖号码

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._asset = [
                Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.eluosizhuanpan.ELuoSiLunPanUI');
            this.addChild(this._viewUI);
            this.initView();
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("ElslpMapPage");//额外界面控制器
            }
            this._elslpStory = this._game.sceneObjectMgr.story as ElslpStory;
            if (this._elslpStory) {
                this.onUpdateMapInfo();
            }

            this._viewUI.mouseThrough = true;
            this._game.playMusic(Path_game_elslp.music_elslp + "toubao_bgm.mp3");
            this._viewUI.btn_spread.left = this._game.isFullScreen ? 25 : 10;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onClickHandle);

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
            this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_BET_WIN_AREA, this, this.onUpdateBetWin);//本局中奖区域
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

            this.onUpdateStatus();
            this.onUpdateBattle();
            this.onUpdateGameNo();
            this.onUpdateCountDown();
            this.onUpdateRecord();
            this.onUpdateSeatedList();
            this.onUpdateBetWin();
            this.onUpdateUnitOffline();
            this.onUpdateSeatedList();
        }

        //帧间隔心跳
        deltaUpdate() {
            if (!this._viewUI) return;
            let bool = this._curStatus == MAP_STATUS.PLAY_STATUS_BET;
            if (!bool) {
                this._viewUI.box_time.visible = false;
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime);
            this._viewUI.box_time.ani1.gotoAndStop(24);
            this._viewUI.box_time.visible = time > 0;
            this._viewUI.box_time.txt_time.text = time.toString();
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_BET) {
                if (time <= 3 && !this._viewUI.box_time.ani1.isPlaying) {
                    this._viewUI.box_time.ani1.play(1, true);
                }
                if (time > 3) {
                    this._viewUI.box_time.ani1.gotoAndStop(24);
                }

                if (time == 1) {
                    this._game.playSound(PathGameTongyong.music_tongyong + "time2.mp3", false);
                } else if (time == 2 || time == 3) {
                    this._game.playSound(PathGameTongyong.music_tongyong + "time1.mp3", false);
                }
            }
        }

        //玩家进来了
        private onUnitAdd(u: Unit) {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
        }

        private onUpdateResult(): void {
            for (let i = 0; i < MAX_POS; i++) {
                for (let j = 0; j < this._betWinArea.length; j++) {
                    if (i + 1 == this._betWinArea[j]) {
                        this.kuangShanShuo(i);
                        break;
                    }
                }
            }
        }

        private kuangShanShuo(index): void {
            this._areaKuangUIList[index].visible = true;
            Laya.timer.once(3000, this, () => {
                this._areaKuangUIList[index].visible = false;
            });
        }

        private onUpdateMapInfo(): void {
            let mapinfo = this._game.sceneObjectMgr.mapInfo;
            this._elslpMapInfo = mapinfo as ElslpMapInfo;
            if (mapinfo) {
                this.initRoomConfig();
                this.onUpdateCountDown();
                this.onUpdateBattle();
                this.onUpdateStatus();
                this.onUpdateRecord();
                this.updateOnline();
                this.onUpdateChipGrey();
            }
        }

        private onUpdateUnitOffline() {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
            this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
            if (mainPlayerInfo.headimg) {
                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
            }
            let money = EnumToString.getPointBackNum(mainPlayerInfo.money, 2).toString();
            this._viewUI.main_player.txt_money.text = money.toString();
            this._viewUI.main_player.img_qifu.visible = mainPlayerInfo.qifu_endtime > this._game.sync.serverTimeBys;
            if (this._viewUI.main_player.img_qifu.visible) {
                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
            }
            this._viewUI.main_player.img_txk.visible = mainPlayerInfo.vip_level > 0;
            if (this._viewUI.main_player.img_txk.visible) {
                this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayerInfo.vip_level + ".png";
            }
        }

        private onUpdateUnit(qifu_index?: number) {
            if (!this._elslpMapInfo) return;
            let battleInfoMgr = this._elslpMapInfo.battleInfoMgr;
            //主玩家的座位
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let headImg = mainUnit.GetHeadImg();
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                if (headImg) {
                    this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                }
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
                this._viewUI.main_player.txt_money.text = money.toString();
                let mainIdx = mainUnit.GetIndex();
                this._viewUI.main_player.img_txk.visible = mainUnit.GetVipLevel() > 0;
                if (this._viewUI.main_player.img_txk.visible) {
                    this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainUnit.GetVipLevel() + ".png";
                }
                //祈福成功 头像上就有动画
                if (qifu_index && mainIdx == qifu_index) {
                    this._viewUI.main_player.qifu_type.visible = true;
                    this._viewUI.main_player.qifu_type.skin = this._qifuTypeImgUrl;
                    this.playTween(this._viewUI.main_player.qifu_type, qifu_index);
                }
                //时间戳变化 才加上祈福标志
                if (mainUnit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                    if (qifu_index && mainIdx == qifu_index) {
                        Laya.timer.once(2500, this, () => {
                            this._viewUI.main_player.img_qifu.visible = true;
                            if (mainUnit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        })
                    } else {
                        this._viewUI.main_player.img_qifu.visible = true;
                        if (mainUnit.GetQiFuType()) {
                            let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                        }
                    }
                } else {
                    this._viewUI.main_player.img_qifu.visible = false;
                }
            }
            this.onUpdateChipGrey();
            this.onUpdateSeatedList(qifu_index);
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }
        private _timeList1: { [key: number]: number } = {};
        private _firstList1: { [key: number]: number } = {};
        private playTween1(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList1[index]) {
                this._timeList1[index] = 0;
            }
            if (this._timeList1[index] >= 2500) {
                this._timeList1[index] = 0;
                this._firstList1[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween1, [img, index, !isTween]), this._firstList1[index] ? this._diff : 0);
            this._timeList1[index] += this._diff;
            this._firstList1[index] = 1;
        }

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        // let dataInfo = JSON.parse(msg.data);
                        // //打开祈福动画界面
                        // this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                        //     page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        // });
                        // //相对应的玩家精灵做出反应
                        // this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        // this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
        }

        private updateOnline(): void {
            if (!this._robotConfig) return;
            let onlineNum = 0;
            for (let key in this._game.sceneObjectMgr.unitDic) {
                if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                    let unit = this._game.sceneObjectMgr.unitDic[key];
                    if (unit) {
                        onlineNum++;
                    }
                }
            }
            let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
            let index = curHour >= 1 && curHour < 7 ? 0 : curHour >= 7 && curHour < 13 ? 1 : curHour >= 13 && curHour < 19 ? 2 : 3;
            let innerHtml = StringU.substitute("在线<span style='color:#18ff00'>{0}</span>人", onlineNum + this._robotConfig[index]);
            this._htmlText.innerHTML = innerHtml;
        }

        private updateMoney(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
                this._viewUI.main_player.txt_money.text = money.toString();
            }
        }

        //战斗结构体更新
        private _battleIndex: number = -1;
        private onUpdateBattle() {
            if (!this._elslpMapInfo) return;
            let battleInfoMgr = this._elslpMapInfo.battleInfoMgr;
            if (!battleInfoMgr) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let info = battleInfoMgr.info[i];

                if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleBet(info, i);
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoSettle) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleSettle(info);
                    }
                }
                if (info instanceof gamecomponent.object.BattleLogCardsResult) {//中奖区域
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleResult(info);
                    }
                }
            }
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_SHOW_INFO && this._betAllTotal > 0) {
                this.showSettleInfo();
            }
        }
        //战斗日志来更新桌面上的筹码
        private onBattleBet(info: any, index: number): void {
            //主玩家的座位
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let startIdx: number;
            let targetIdx: number;
            let isMainPlayer: boolean = info.SeatIndex == mainIdx;
            if (isMainPlayer) {//主玩家
                startIdx = 0;
                this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
            } else {//其他玩家
                startIdx = 1;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit && info.SeatIndex == unitIndex) {
                        this.moveHead(this._seatUIList[i], this._headStartPos[i][0], this._headStartPos[i][1], this._headEndPos[i][0], this._headEndPos[i][1]);
                        startIdx = 3 + i;
                    }
                }
                if (startIdx == 1) {
                    this.moveHead(this._viewUI.btn_playerList, 70, 657, 80, 647);
                }
            }
            targetIdx = info.BetIndex;
            let type = this._chipArr.indexOf(info.BetVal) + 1;
            this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
            this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
        }

        //头像出筹码动态效果
        private moveHead(view, startX, startY, endX, endY): void {
            Laya.Tween.clearAll(view);
            Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, () => {
                Laya.Tween.to(view, { x: startX, y: startY }, 150);
            }))
        }

        private updateChipOnTable(index: number, bet: number, isMainPlayer: boolean) {
            if (isMainPlayer) {
                this._betMainList[index] += bet;
                this._betMainTotal += bet;
            }
            this._betTotalList[index] += bet;
            this._betAllTotal += bet;
            this.updateBetNum();
        }

        private updateBetNum(): void {
            for (let i = 0; i < MAX_POS; i++) {
                this._txtBetUIList[i].text = this._betMainList[i] > 0 ? this._betMainList[i].toString() : "";
            }
        }

        //创建筹码
        private createChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ElslpChip) as ElslpChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._chipTotalList[targetIdx - 1].push(chip);
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                chip.drawChip();
            }
            else {
                Laya.timer.once(350, this, () => {
                    chip.sendChip();
                    this._game.playSound(Path_game_elslp.music_elslp + "chouma.mp3", false);
                })
            }
            this._chipSortScore = index;//存下来最后一个筹码层级
        }

        //庄家飞筹码去输的区域
        private bankerFlyChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ElslpChip) as ElslpChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._chipTotalList[targetIdx - 1].push(chip);
            Laya.timer.once(350, this, () => {
                chip.sendChip();
            })
        }

        private onBattleSettle(info: any): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                this._mainPlayerBenefit = parseFloat(info.SettleVal);
            }
            if (info.SettleVal == 0) return;
            this.addMoneyClip(info.SeatIndex, info.SettleVal);
        }

        private areaName = {
            89: "第三打",
            90: "第二打",
            91: "第一打",
            92: "第三列",
            93: "第二列",
            94: "第一列",
            95: "双",
            96: "单",
            97: "黑",
            98: "红",
            99: "小",
            100: "大",
        };
        private onBattleResult(info: any): void {
            for (let i = 0; i < info.Results.length; i++) {
                let idx = info.Results[i];
                let str: string;
                if (idx < 89) {
                    str = idx + "点";
                    this._rewardNumber = idx;
                } else {
                    str = this.areaName[idx]
                }
                if (!this._lottery)
                    this._lottery = str;
                else
                    this._lottery += " , " + str;
            }
        }

        //结算飘筹码
        private flyChipEffect(): void {
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_SETTLE) return;
            let resultList: Array<number> = [];
            for (let i = 0; i < MAX_POS; i++) {
                for (let j = 0; j < this._betWinArea.length; j++) {
                    if (i + 1 == this._betWinArea[j] && this._betTotalList[i]) {
                        resultList[i] = 0;
                        break;
                    } else {
                        resultList[i] = 1;
                    }
                }
            }

            for (let i = 0; i < this._chipTotalList.length; i++) {
                let chipArr = this._chipTotalList[i] || [];
                if (resultList[i] == 1) {
                    this._game.playSound(Path_game_elslp.music_elslp + "piaoqian.mp3", false);
                    for (let j = 0; j < chipArr.length; j++) {
                        let chip: ElslpChip = chipArr[j];
                        chip.flyChip(2, false, j, this._game);//庄家先收筹码
                    }
                } else {
                    Laya.timer.once(800, this, () => {
                        this._game.playSound(Path_game_elslp.music_elslp + "piaoqian.mp3", false);
                        for (let j = 0; j < 20; j++) {
                            let ranType = MathU.randomRange(0, 4);
                            let ranVal = this._chipArr[ranType];
                            this._chipSortScore++;
                            this.bankerFlyChip(2, i + 1, ranType, ranVal, this._chipSortScore, -1);
                        }
                    })
                    Laya.timer.once(2000, this, () => {
                        this._game.playSound(Path_game_elslp.music_elslp + "piaoqian.mp3", false);
                        for (let j = 0; j < chipArr.length; j++) {
                            let chip: ElslpChip = chipArr[j];
                            let mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                            if (chip._seatIndex == mainIndex) {
                                chip.flyChip(0, false, j, this._game);//主玩家收筹码
                            } else {
                                let isSeat: boolean = false;
                                for (let k = 0; k < this._unitSeated.length; k++) {
                                    let seatInfo = this._unitSeated[k];
                                    if (seatInfo && seatInfo[0] == chip._seatIndex) {
                                        chip.flyChip(3 + k, false, j, this._game);//入座玩家收筹码
                                        isSeat = true;
                                        break;
                                    }
                                }
                                if (!isSeat) {
                                    chip.flyChip(1, false, j, this._game);//其他玩家收筹码
                                }
                            }
                        }

                    })
                }

            }
        }

        //金币变化 飘字clip
        public addMoneyClip(index: number, value: number): void {
            let valueClip = value >= 0 ? new ElslpClip(ElslpClip.ADD_MONEY_FONT) : new ElslpClip(ElslpClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            valueClip.setText(Math.abs(value), true, false, preSkin);
            let playerIcon: any;
            if (index == this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                playerIcon = this._viewUI.main_player;
            } else {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                if (!unit) return;
                let seatIndex = unit.GetSeat();
                let bool = false;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    if (index == unitIndex) {
                        bool = true;
                    }
                }
                if (!seatIndex) return;
                if (!bool) return;
                playerIcon = this._seatUIList[seatIndex - 1];
            }
            valueClip.x = playerIcon.clip_money.x;
            valueClip.y = playerIcon.clip_money.y;
            playerIcon.clip_money.parent.addChild(valueClip);
            this._clipList.push(valueClip);
            playerIcon.clip_money.visible = false;
            Laya.Tween.clearAll(valueClip);
            Laya.Tween.to(valueClip, { y: valueClip.y - 25 }, 1500);
        }

        //清理飘字clip
        private clearClips(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._clipList = [];
        }

        //更新地图状态
        private onUpdateStatus() {
            if (!this._elslpMapInfo) return;
            this.initRoomConfig();
            let mapStatus = this._elslpMapInfo.GetMapState()
            if (this._curStatus == mapStatus) return;
            this._curStatus = mapStatus;
            this._viewUI.btn_repeat.disabled = this._curStatus != MAP_STATUS.PLAY_STATUS_BET;
            this._viewUI.box_tip.visible = false;
            switch (this._curStatus) {
                case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
                    this.resetAll();
                    break;
                case MAP_STATUS.PLAY_STATUS_GAMESTART:// 游戏开始
                    this.updateOnline();
                    this.resetAll();
                    break;
                case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
                    if (Math.floor(this._elslpMapInfo.GetCountDown() - this._game.sync.serverTimeBys) < 13) {
                        this.onUpdateSeatedList();
                        this._viewUI.clip_status.index = 0;
                        let bool = false;
                        for (let i = 0; i < this._rebetList.length; i++) {
                            if (this._rebetList[i] > 0) {
                                bool = true;
                                break;
                            }
                        }
                        this._viewUI.btn_repeat.disabled = !bool;
                    } else {
                        this._pageHandle.pushOpen({ id: ElslpPageDef.PAGE_ELSLP_BEGIN, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_elslp.music_elslp + "dingding_start.mp3");
                        this._game.playSound(Path_game_elslp.music_elslp + "xiazhu_start.mp3");
                        this.onUpdateSeatedList();
                        let bool = false;
                        for (let i = 0; i < this._rebetList.length; i++) {
                            if (this._rebetList[i] > 0) {
                                bool = true;
                                break;
                            }
                        }
                        this._viewUI.btn_repeat.disabled = !bool;


                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注阶段
                    for (let i: number = 0; i < this._areaKuangUIList.length; i++) {
                        this._areaKuangUIList[i].visible = false;
                    }
                    this._pageHandle.pushClose({ id: ElslpPageDef.PAGE_ELSLP_BEGIN, parent: this._game.uiRoot.HUD });
                    this._pageHandle.pushOpen({ id: ElslpPageDef.PAGE_ELSLP_END, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_elslp.music_elslp + "dingding_end.mp3");
                    this._game.playSound(Path_game_elslp.music_elslp + "xiazhu_end.mp3");
                    this._viewUI.clip_status.index = 1;
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW: //开奖
                    this._pageHandle.pushOpen({ id: ElslpPageDef.PAGE_ELSLP_DIAL, parent: this._game.uiRoot.HUD, dataSource: this._rewardNumber });
                    let betAllTotal = 0;
                    for (let i = 0; i < this._betMainList.length; i++) {
                        betAllTotal += this._betMainList[i];
                    }
                    if (betAllTotal > 0) {
                        for (let i = 0; i < this._betMainList.length; i++) {
                            this._rebetList[i] = this._betMainList[i];
                        }
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
                    this._pageHandle.pushClose({ id: ElslpPageDef.PAGE_ELSLP_DIAL, parent: this._game.uiRoot.HUD });
                    this.onUpdateResult();
                    this._viewUI.clip_status.index = 2;
                    this._pageHandle.pushClose({ id: ElslpPageDef.PAGE_ELSLP_END, parent: this._game.uiRoot.HUD });
                    this.onUpdateSeatedList();
                    this.flyChipEffect();
                    Laya.timer.once(1000, this, () => {
                        if (this._mainPlayerBenefit >= 0) {
                            let rand = MathU.randomRange(1, 3);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                        } else if (this._mainPlayerBenefit < 0) {
                            let rand = MathU.randomRange(1, 4);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                        }
                    });
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_INFO:// 显示结算信息阶段
                    this.showSettleInfo();
                    this._viewUI.clip_status.index = 2;
                    if (this._viewUI.box_menu.y >= 0) {//每局重新开始把菜单收起来
                        this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                        this._viewUI.box_menu.visible = false;
                        this._viewUI.btn_spread.visible = true;
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                    this.resetAll();
                    break;

            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        //点击事件
        protected onClickHandle(e: LEvent): void {
            //玩家列表
            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_PLAYER_LIST);
        }

        //按钮缓动回调
        protected onBtnTweenEnd(e: any, target: any): void {
            switch (target) {
                case this._viewUI.btn_spread://菜单
                    this.showMenu(true);
                    break;
                case this._viewUI.btn_record://走势图
                    this._game.uiRoot.general.open(ElslpPageDef.PAGE_ELSLP_ROAD);
                    break;
                case this._viewUI.btn_chong://充值
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                case this._viewUI.btn_rule://规则
                    this._game.uiRoot.general.open(ElslpPageDef.PAGE_ELSLP_RULE);
                    break;
                case this._viewUI.btn_set://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING)
                    break;
                // case this._viewUI.btn_qifu://设置
                //     this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU)
                //     break;
                case this._viewUI.btn_zhanji://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = ElslpPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_repeat://重复下注
                    this.repeatBet();
                    break;
                case this._viewUI.btn_back://返回
                    let totalBet = 0;
                    for (let i = 0; i < this._betMainList.length; i++) {
                        totalBet += this._betMainList[i];
                    }
                    if (totalBet && this._elslpMapInfo && this._elslpMapInfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }

                    break;
                default:
                    break;
            }
        }

        //确定退出回调
        private onClickCancle(): void {
            this._game.sceneObjectMgr.leaveStory(true);
        }

        //重复下注
        private repeatBet(): void {
            if (this._betWait) return;//投注间隔
            let betArr = [];
            let total = 0;
            for (let i = 0; i < this._rebetList.length; i++) {
                if (this._rebetList[i] + this._betMainList[i] > this._betlimit) {
                    this._game.uiRoot.topUnder.showTips(StringU.substitute("投注点限红{0}哦~", this._betlimit));
                    return;
                }
            }
            for (let i = 0; i < this._rebetList.length; i++) {
                if (this._betMainList[0] > 0) {//小
                    if (this._betMainList[5] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                        return;
                    }
                }
                if (this._betMainList[5] > 0) {//大
                    if (this._betMainList[0] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                        return;
                    }
                }
                if (this._betMainList[1] > 0) {//单
                    if (this._betMainList[4] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                        return;
                    }
                }
                if (this._betMainList[4] > 0) {//双
                    if (this._betMainList[1] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                        return;
                    }
                }
                if (this._betMainList[2] > 0) {//红
                    if (this._betMainList[3] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                        return;
                    }
                }
                if (this._betMainList[3] > 0) {//黑
                    if (this._betMainList[2] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                        return;
                    }
                }
                total += this._rebetList[i];
            }
            if (total > this._game.sceneObjectMgr.mainUnit.GetMoney()) {
                this._game.uiRoot.topUnder.showTips("老板,您的金币不够重复下注啦~");
                return;
            }
            for (let i = 0; i < this._rebetList.length; i++) {
                let antes = this._rebetList[i]//之前区域i下注总额
                if (antes) {
                    //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                    for (let j = this._chipArr.length - 1; j >= 0; j--) {
                        if (!antes) break;
                        let num = Math.floor(antes / this._chipArr[j]);
                        if (num) {
                            antes = antes - this._chipArr[j] * num;
                            for (let k = 0; k < num; k++) {
                                // this._game.network.call_eluosilunpan_bet(this._chipArr[j], i + 1);
                            }
                        }
                    }
                }
            }
            this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
            this._betWait = true;
            Laya.timer.once(100, this, () => {
                this._betWait = false;
            })
        }

        //区域下注
        private _betWait: boolean = false;
        private onAreaBetClick(index: number, e: LEvent): void {
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                return;
            }
            if (this._betWait) return;//投注间隔
            let total = this._betMainList[index];
            if (this._curChip + total > this._betlimit) {
                this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                return;
            }
            if (index == 0) {//小
                if (this._betMainList[5] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                    return;
                }
            }
            if (index == 5) {//大
                if (this._betMainList[0] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                    return;
                }
            }
            if (index == 1) {//单
                if (this._betMainList[4] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                    return;
                }
            }
            if (index == 4) {//双
                if (this._betMainList[1] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                    return;
                }
            }
            if (index == 2) {//红
                if (this._betMainList[3] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                    return;
                }
            }
            if (index == 3) {//黑
                if (this._betMainList[2] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                    return;
                }
            }
            let money = this._game.sceneObjectMgr.mainUnit.GetMoney();
            let betBefore = 0;
            for (let i = 0; i < this._betMainList.length; i++) {
                betBefore += this._betMainList[i];
            }
            if (!this._curChip || this._curChip > money || this._curChip == -1) {
                TongyongPageDef.ins.alertRecharge("老板，您的金币不足哦~\n补充点金币去大杀四方吧~", () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR['cz']);
                return;
            }
            if (this._curChip > money) {
                this._game.uiRoot.topUnder.showTips("老板，您的金币不足哦~");
                return;
            }
            this._betWait = true;
            Laya.timer.once(100, this, () => {
                this._betWait = false;
            })
            this._rebetList[index] += this._curChip;
            // this._game.network.call_eluosilunpan_bet(this._curChip, index + 1)
        }

        private onUpdateChipGrey() {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let money: number = this._game.sceneObjectMgr.mainUnit.GetMoney();
            for (let i = 0; i < this._chipUIList.length; i++) {
                let index = this._chipUIList.length - 1 - i;
                if (money < this._chipArr[index]) {
                    this._chipUIList[index].disabled = true;
                    this._chipUIList[index].y = this._curChipY;
                    this._chipGuangUIList[index].visible = false;
                } else {
                    this._chipUIList[index].disabled = false;
                }
            }
        }

        //选择筹码
        private onSelectChip(index: number): void {
            this._curChip = this._chipArr[index];
            for (let i: number = 0; i < this._chipUIList.length; i++) {
                this._chipGuangUIList[i].visible = i == index;
                this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
            }
        }

        //选择座位入座
        private onSelectSeat(index: number): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;

            if (mainUnit.GetMoney() < this._seatlimit) {
                this._game.uiRoot.topUnder.showTips("金币不足");
                return;
            }
            // this._game.network.call_eluosilunpan_seated(index + 1);
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_spread) {
                this.showMenu(false);
            }

        }

        showMenu(isShow: boolean) {
            if (isShow) {
                this._viewUI.box_menu.visible = true;
                this._viewUI.btn_spread.visible = false;
                this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn)
            } else {
                if (this._viewUI.box_menu.y >= 0) {
                    Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, () => {
                        this._viewUI.btn_spread.visible = true;
                        this._viewUI.box_menu.visible = false;
                    }));
                }
            }
        }

        private resetAll(): void {
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
            this.clearClips();
            this.resetUI();
            this.resetData();
            this._game.sceneObjectMgr.clearOfflineObject();
            Laya.timer.clear(this, this.kuangShanShuo);
        }

        private onUpdateGameNo(): void {
            let gameNo = this._elslpMapInfo.GetGameNo();
            if (gameNo) {
                this._viewUI.txt_id.visible = true;
                this._viewUI.txt_id.text = "牌局号：" + gameNo;
            }
        }

        private onUpdateCountDown(): void {
            if (!this._elslpMapInfo) return;
            this._countDown = this._elslpMapInfo.GetCountDown();
        }

        private onUpdateRecord(): void {
            if (!this._elslpMapInfo) return;
            let recordArr = [];
            let newRecordArr = [];
            let gameRecord = this._elslpMapInfo.GetGameRecord();
            if (gameRecord != "") {
                recordArr = JSON.parse(gameRecord);
            }
            if (recordArr.length > 10) {
                for (let i = recordArr.length - 10; i < recordArr.length; i++) {
                    newRecordArr.push(recordArr[i] + 1);
                }
            } else {
                for (let i = 0; i < recordArr.length; i++) {
                    newRecordArr.push(recordArr[i] + 1);
                }
            }
            this._viewUI.list_record.dataSource = newRecordArr;
        }


        private onUpdateBetWin(): void {
            if (!this._elslpMapInfo) return;
            let roadRecord = this._elslpMapInfo.GetRoadRecord();
            if (roadRecord != "") {
                this._betWinArea = JSON.parse(roadRecord);
            }
        }

        private onUpdateSeatedList(qifu_index?: number): void {
            if (!this._elslpMapInfo) return;
            let seatedList = this._elslpMapInfo.GetSeatedList();
            if (seatedList != "") {
                this._unitSeated = JSON.parse(seatedList);
            }
            if (!this._unitSeated.length) {
                return;
            }
            for (let i = 0; i < this._seatUIList.length; i++) {
                let unitIndex = this._unitSeated[i][0];
                let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                if (unit) {
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).txt_name.text = getMainPlayerName(unit.GetName());
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).txt_name.fontSize = 15;
                    let unitHeadImg = unit.GetHeadImg();
                    if (unitHeadImg) {
                        (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                    }
                    this._seatUIList[i].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._seatUIList[i].img_txk.visible) {
                        this._seatUIList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && unitIndex == qifu_index) {
                        this._seatUIList[i].qifu_type.visible = true;
                        this._seatUIList[i].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween1(this._seatUIList[i].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                        if (qifu_index && unitIndex == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._seatUIList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    let qifuImgUrl = this._nameStrInfo[unit.GetQiFuType() - 1];
                                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            })
                        } else {
                            this._seatUIList[i].img_qifu.visible = true;
                            if (unit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[unit.GetQiFuType() - 1];
                                (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        }
                    } else {
                        this._seatUIList[i].img_qifu.visible = false;
                    }
                } else {
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).txt_name.text = "";
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).txt_money.text = "点击入座";
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).txt_name.fontSize = 20;
                    (this._seatUIList[i] as ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                    this._seatUIList[i].img_qifu.visible = false;
                    this._seatUIList[i].qifu_type.visible = false;
                    this._seatUIList[i].img_txk.visible = false;
                }
            }
        }

        //显示结算界面
        private showSettleInfo(): void {
            let myBet = this._betMainTotal;
            let allBet = this._betAllTotal;
            let myBenefit = this._mainPlayerBenefit;
            let bankerBenefit = this._elslpMapInfo.GetBankerBenefit();
            this._pageHandle.pushOpen({
                id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                dataSource: { myBet: myBet, myBenefit: myBenefit, lottery: this._lottery },
                parent: this._game.uiRoot.HUD
            });
        }

        //初始化UI界面
        private initView(): void {
            this._viewUI.box_menu.y = -290;
            this._viewUI.box_menu.zOrder = 99;
            this._viewUI.box_menu.visible = false;
            this._areaList = [];
            this._chipUIList = [];
            this._seatUIList = [];
            this._chipGuangUIList = [];
            this._areaKuangUIList = [];
            this._txtBetUIList = [];
            this._htmlTextArr = [];
            for (let i: number = 0; i < MAX_POS; i++) {
                this._areaList.push(this._viewUI["area" + i]);
                this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                this._areaKuangUIList.push(this._viewUI["kuang" + i]);
                this._txtBetUIList.push(this._viewUI["txt_main" + i]);
                this._txtBetUIList[i].text = "";
                this._areaKuangUIList[i].visible = false;

                this._chipTotalList[i] = [];
                this._betMainList[i] = 0;
                this._betTotalList[i] = 0;
            }

            for (let i: number = 0; i < 5; i++) {
                this._chipUIList.push(this._viewUI["btn_chip" + i]);
                this._chipUIList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
                this._chipGuangUIList.push(this._viewUI["guang" + i]);
                if (i == 0) {
                    this._curChipY = this._chipUIList[i].y;
                    this._chipGuangUIList[i].visible = true;
                } else {
                    this._chipGuangUIList[i].visible = false;
                }
            }
            for (let i: number = 0; i < 6; i++) {
                this._seatUIList.push(this._viewUI["seat" + i]);
                this._seatUIList[i].clip_money.visible = false;
                this._seatUIList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
                this._seatUIList[i].effWin.visible = false;
                this._seatUIList[i].img_qifu.visible = false;
                this._seatUIList[i].img_vip.visible = false;
            }
            this._viewUI.list_record.itemRender = this.createChildren("game_ui.eluosizhuanpan.component.AnNiu1UI", MapRecordRender);
            this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
            this._viewUI.list_record.dataSource = [];
            if (!this._htmlText) {
                this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
            }
            //主玩家UI
            this._viewUI.main_player.clip_money.visible = false;
            //界面UI
            this._viewUI.txt_id.visible = false;
            this._viewUI.box_time.visible = false;
            this._viewUI.btn_repeat.disabled = true;
        }

        private renderHandler(cell: MapRecordRender, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }

        private initRoomConfig(): void {
            let maplv = this._elslpMapInfo.GetMapLevel();
            if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                this._chipArr = ROOM_CHIP_CONFIG[maplv];
                this._robotConfig = ROBOT_NUM_CONFIG[maplv];
                this._seatlimit = MONEY_LIMIT_CONFIG[maplv][1];
                this._betlimit = MONEY_LIMIT_CONFIG[maplv][2];

                if (this._robotConfig) {
                    this.updateOnline();
                }
                if (!this._chipArr) return;
                for (let i = 0; i < this._chipArr.length; i++) {
                    this._chipUIList[i].label = EnumToString.sampleChipNum(this._chipArr[i]);
                }
                if (!this._curChip) this.onSelectChip(0);
            }
        }

        //重置UI
        private resetUI(): void {
            //主玩家UI
            this._viewUI.main_player.clip_money.visible = false;
            //界面UI
            for (let i = 0; i < MAX_POS; i++) {
                this._txtBetUIList[i].text = "";
            }
        }

        private resetData(): void {
            this._battleIndex = -1;
            for (let i = 0; i < MAX_POS; i++) {
                this._chipTotalList[i] = [];
                this._betMainList[i] = 0;
                this._betTotalList[i] = 0;
            }
            this._betMainTotal = 0;
            this._betAllTotal = 0;
            this._mainPlayerBenefit = 0;
            this._lottery = "";
            this._rewardNumber = "";
        }

        private clearMapInfoListen(): void {
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
            this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BET_WIN_AREA, this, this.onUpdateBetWin);//本局中奖区域
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chong.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onClickHandle);
                for (let i: number = 0; i < this._areaList.length; i++) {
                    this._areaList[i] && this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                }
                this._areaList = [];
                for (let i: number = 0; i < this._chipUIList.length; i++) {
                    this._chipUIList[i] && this._chipUIList[i].off(LEvent.CLICK, this, this.onSelectChip);
                }
                this._chipUIList = [];
                for (let i: number = 0; i < this._seatUIList.length; i++) {
                    this._seatUIList[i] && this._seatUIList[i].off(LEvent.CLICK, this, this.onSelectSeat, [i]);
                }
                this._seatUIList = [];
                this._chipTotalList = [];

                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BET_WIN_AREA, this, this.onUpdateBetWin);//本局中奖区域
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

                this._game.uiRoot.HUD.close(ElslpPageDef.PAGE_ELSLP_BEGIN);
                this._game.uiRoot.HUD.close(ElslpPageDef.PAGE_ELSLP_END);
                this.resetAll();
                this._elslpStory && this._elslpStory.clear();
                this._game.stopAllSound();
                this._game.stopMusic();
            }

            super.close();
        }
    }

    //按钮颜色
    const NUMBER_SKIN: string[] = ["zs_lv", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui",
        "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen",
        "zs_hui", "zs_fen", "zs_hui", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen"];
    class MapRecordRender extends ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI {
        private _game: Game;
        private _data: any;

        constructor() {
            super();
        }
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            if (!this._data) {
                this.visible = false;
                return;
            }
            this.visible = true;
            let count = this._data - 1;
            this.txt_count.text = count.toString();
            this.ing_type.skin = Path_game_elslp.ui_elslp + NUMBER_SKIN[count] + ".png";
        }
        destroy() {
            super.destroy();
        }
    }
}