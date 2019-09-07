/**
* name 
*/
module gameelslp.page {
	const HONG_NUMBER = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];	//红的数字
	const HEI_NUMBER = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];	//黑的数字
	export class ElslpRoadPage extends game.gui.base.Page {
		private _viewUI: ui.game_ui.eluosizhuanpan.ZouShiTuUI;
		private _isShenQing: boolean = false;
		private _mapinfo: ElslpMapInfo;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
			];
		}

		protected init(): void {
			this._viewUI = this.createView('game_ui.eluosizhuanpan.ZouShiTuUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_record.itemRender = this.createChildren("game_ui.eluosizhuanpan.component.AnNiu1UI", MapRecordRender);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
			this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
			this.onUpdateMapInfo();
			this.onUpdateRecord();

		}

		private onUpdateMapInfo() {
			this._mapinfo = this._game.sceneObjectMgr.mapInfo as ElslpMapInfo;
			if (this._mapinfo) {
				this._mapinfo.on(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
				this.onUpdateRecord();
			}
		}

		private renderHandler(cell: MapRecordRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		//最近游戏记录
		private onUpdateRecord(): void {
			if (!this._mapinfo) return;
			let recordArr = [];
			if (this._mapinfo.GetGameRecord() != "") {
				let data = JSON.parse(this._mapinfo.GetGameRecord());
				for (let i = 0; i < data.length; i++) {
					recordArr.push(data[i] + 1)
				}
			}
			this._viewUI.list_record.dataSource = recordArr;

			let gameNum = 20;//recordArr.length
			this._viewUI.txt_title0.text = StringU.substitute("近{0}局大小", gameNum);
			this._viewUI.txt_title1.text = StringU.substitute("近{0}局单双", gameNum);
			this._viewUI.txt_title2.text = StringU.substitute("近{0}局红黑", gameNum);
			//计算最近20场胜负
			let resultArr = [];
			let xiaoWin = 0;
			let daWin = 0;
			let danWin = 0;
			let shuangWin = 0;
			let hongWin = 0;
			let heiWin = 0;
			for (let i = 0; i < recordArr.length; i++) {
				let count = recordArr[i] - 1;
				//大小
				if (count >= 1 && count <= 18) {
					xiaoWin++;
				} else if (count >= 19 && count <= 36) {
					daWin++;
				}
				//单双
				if (count > 0) {
					if (count % 2 == 1) {
						danWin++;
					} else {
						shuangWin++;
					}
				}
				//红黑
				if (HONG_NUMBER.indexOf(count) >= 0) {
					hongWin++;
				} else if (HEI_NUMBER.indexOf(count) >= 0) {
					heiWin++;
				}
			}
			this._viewUI.txt_xiao.text = Math.round(xiaoWin * 100 / gameNum) + "%";
			this._viewUI.txt_da.text = Math.round(daWin * 100 / gameNum) + "%";
			this._viewUI.txt_dan.text = Math.round(danWin * 100 / gameNum) + "%";
			this._viewUI.txt_shuang.text = Math.round(shuangWin * 100 / gameNum) + "%";
			this._viewUI.txt_hong.text = Math.round(hongWin * 100 / gameNum) + "%";
			this._viewUI.txt_hei.text = Math.round(heiWin * 100 / gameNum) + "%";
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.list_record.hScrollBarSkin = null;
			}
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
			this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
			super.close();
		}
	}

	//按钮颜色
	const NUMBER_SKIN: string[] = ["zs_lv", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui",
		"zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen",
		"zs_hui", "zs_fen", "zs_hui", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen"];
	class MapRecordRender extends ui.game_ui.eluosizhuanpan.component.AnNiu1UI {
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