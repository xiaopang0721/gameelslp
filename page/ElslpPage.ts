/**
* 俄罗斯轮盘
*/
module gameelslp.page {
	export class ElslpPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.eluosizhuanpan.ELuoSiZguabPan_HUDUI;
		private _player: any;
		private _leastTmep: any = [5000, 8000, 25000, 50000];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_elslp.ui_elslp + "sk/elszp_0.png",
				Path_game_elslp.ui_elslp + "sk/elszp_1.png",
				Path_game_elslp.ui_elslp + "sk/elszp_2.png",
				Path_game_elslp.ui_elslp + "sk/elszp_3.png",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.eluosizhuanpan.ELuoSiZguabPan_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path_game_elslp.music_elslp + "BGM_1.mp3");

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, ElslpPageDef.GAME_NAME);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}

			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			switch (target) {
				case this._viewUI.img_room0:
					this._game.sceneObjectMgr.intoStory(ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_1).toString(), true);
					break;
				case this._viewUI.img_room1:
					this._game.sceneObjectMgr.intoStory(ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_2).toString(), true);
					break;
				case this._viewUI.img_room2:
					this._game.sceneObjectMgr.intoStory(ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_3).toString(), true);
					break;
				case this._viewUI.img_room3:
					this._game.sceneObjectMgr.intoStory(ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_4).toString(), true);
					break;
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, true, TongyongPageDef.TIPS_SKIN_STR['cz']);
		}

		private initPlayerInfo(): void {
			// for (let index = 0; index < 4; index++) {
			// 	this._viewUI["lab_least" + index].text = "限红: " + this._leastTmep[index];
			// this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
			// }
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
					Laya.timer.clearAll(this._viewUI.box_right._childs[index]);
				}
				this._player = null;
				this._game.stopMusic();
			}

			super.close();
		}
	}
}