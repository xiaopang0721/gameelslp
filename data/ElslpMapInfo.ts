/**
* name 
*/
module gameelslp.data {
	const CHE_NAME: string[] = [
		"大兰博基尼", "大保时捷", "大奔驰", "大宝马",
		"小兰博基尼", "小保时捷", "小奔驰", "小宝马"
	]
	export class ElslpMapInfo extends gamecomponent.object.MapInfoT<gamecomponent.object.MapInfoLogObject> {
		//地图状态变更
		static EVENT_STATUS_CHECK: string = "ElslpMapInfo.EVENT_STATUS_CHECK";
		//战斗体更新
		static EVENT_BATTLE_CHECK: string = "ElslpMapInfo.EVENT_BATTLE_CHECK";
		//继续游戏状态
		static EVENT_STATUS_CONTINUE: string = "ElslpMapInfo.EVENT_STATUS_CONTINUE";
		//牌局号
		static EVENT_GAME_NO: string = "ElslpMapInfo.EVENT_GAME_NO";
		//倒计时时间戳更新
		static EVENT_COUNT_DOWN: string = "ElslpMapInfo.EVENT_COUNT_DOWN";
		//游戏记录更新
		static EVENT_GAME_RECORD: string = "ElslpMapInfo.EVENT_GAME_RECORD";
		//入座列表更新
		static EVENT_SEATED_LIST: string = "ElslpMapInfo.EVENT_SEATED_LIST";
		//本局中奖区域更新
		static EVENT_BET_WIN_AREA: string = "ElslpMapInfo.EVENT_BET_WIN_AREA";

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new gamecomponent.object.MapInfoLogObject() });

		}

		//当对象更新发生时
		protected onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_STATUS_CONTINUE);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_COUNT_DOWN);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_GAME_NO);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_GAME_RECORD);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_SEATED_LIST);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
				this._sceneObjectMgr.event(ElslpMapInfo.EVENT_BET_WIN_AREA);
			}
		}

		public getBattleInfoToString(): string {
			let playerArr: any[] = this._battleInfoMgr.users;
			if (!playerArr) return "";
			let selfSeat: number = -1;
			for (let i: number = 0; i < playerArr.length; i++) {
				let player = playerArr[i];
				if (player && this._sceneObjectMgr.mainPlayer.GetAccount() == player.account) {
					//找到自己了
					selfSeat = i + 1;
					break;
				}
			}
			if (selfSeat == -1) return "";
			let infoArr: gamecomponent.object.BattleInfoBase[] = this._battleInfoMgr.info;
			if (!infoArr) return "";

			let totalStr: string = "";
			let betArr: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
			let lotteryStr: string = "";
			let settleStr: string = "";
			for (let i: number = 0; i < infoArr.length; i++) {
				let info = infoArr[i];
				if (info.SeatIndex == selfSeat) {
					//自己的战斗日志
					if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
						//下注信息
						betArr[info.BetIndex - 1] += info.BetVal;
					} else if (info instanceof gamecomponent.object.BattleInfoSettle) {
						//结算
						settleStr = info.SettleVal > 0 ? "+" + EnumToString.getPointBackNum(info.SettleVal, 2) : "" + EnumToString.getPointBackNum(info.SettleVal, 2);
						//结算信息都出来了，就不再继续找了
						break;
					}

				} else if (info instanceof gamecomponent.object.BattleInfoBCBMLottery) {
					//开奖信息
					lotteryStr = CHE_NAME[info.lotteryIndex - 1];
				}

			}

			let betStrArr: string[] = [];
			for (let i: number = 0; i < betArr.length; i++) {
				if (betArr[i] > 0) {
					betStrArr.push(CHE_NAME[i] + "(" + betArr[i] + ")");
				}
			}


			//开奖信息
			totalStr += "开　　奖：|" + lotteryStr + "#";
			//中奖信息
			totalStr += "中　　奖：|" + lotteryStr + "#";
			//下注信息
			let betStr: string = this.getBattleStrByArr(betStrArr, "玩家下注：", 3);
			totalStr += betStr;
			//结算信息
			totalStr += "玩家盈利：|" + settleStr;

			return totalStr;
		}

		private getBattleStrByArr(arr: string[], title: string, num: number = 3): string {
			let str: string = "";
			let len: number = Math.ceil(arr.length / num);
			for (let i: number = 0; i < len; i++) {
				if (i == 0) {
					str += title + "|";
				} else {
					str += "   |";
				}
				for (let j: number = 0; j < num; j++) {
					let index: number = i * num + j;
					if (index < arr.length) {
						str += arr[index] + " , ";
					}
				}
				str = str.substr(0, str.length - 3);
				str += "#";
			}
			return str;
		}
	}
}