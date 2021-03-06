/**
* name 
*/
module gameelslp.page {
	const enum TYPE_INDEX {
		TYPE_WANFA_JIESHAO = 0,
		TYPE_BEISHU = 1,
	}
	export class ElslpRulePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.eluosizhuanpan.GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.eluosizhuanpan.GuiZeUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			}
			else {
				this._viewUI.btn_tab.selectedIndex = TYPE_INDEX.TYPE_WANFA_JIESHAO;
			}

			this._viewUI.panel_jieshao.vScrollBarSkin = "";
			this._viewUI.panel_jieshao.vScrollBar.autoHide = true;
			this._viewUI.panel_jieshao.vScrollBar.elasticDistance = 100;

			this._viewUI.panel_beishu.vScrollBarSkin = "";
			this._viewUI.panel_beishu.vScrollBar.autoHide = true;
			this._viewUI.panel_beishu.vScrollBar.elasticDistance = 100;
		}

		private selectHandler(index: number): void {
			this._viewUI.panel_jieshao.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_WANFA_JIESHAO;
			this._viewUI.panel_beishu.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_BEISHU;
		}



		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = -1;
			}
			super.close();
		}
	}
}