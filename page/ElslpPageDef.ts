/**
* name 
*/
module gameelslp.page {
	export class ElslpPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//俄罗斯轮盘界面
		static PAGE_ELSLP: string = "1";
		//俄罗斯轮盘地图UI
		static PAGE_ELSLP_MAP: string = "2";
		//俄罗斯轮盘开始下注界面
		static PAGE_ELSLP_BEGIN: string = "3";
		//俄罗斯轮盘游戏规则界面
		static PAGE_ELSLP_RULE: string = "101";
		//俄罗斯轮盘停止下注界面
		static PAGE_ELSLP_END: string = "11";
		//俄罗斯轮盘转盘
		static PAGE_ELSLP_DIAL: string = "13";
		//俄罗斯轮盘走势图
		static PAGE_ELSLP_ROAD: string = "14";


		static myinit(str: string) {
			super.myinit(str);
			ElslpClip.init();
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP] = ElslpPage;
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_MAP] = ElslpMapPage;
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_BEGIN] = ElslpBeginPage;
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_RULE] = ElslpRulePage;
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_END] = ElslpEndPage;
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_DIAL] = ElslpDialPage;
			PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_ROAD] = ElslpRoadPage;

			this["__needLoadAsset"] = [
				DatingPath.atlas_dating_ui + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
				Path.custom_atlas_scene + 'chip.atlas',

				Path_game_elslp.ui_elslp + "bg_1.png",
				Path_game_elslp.ui_elslp + "guize_1.png",
				Path_game_elslp.ui_elslp + "guize_2.png",
				Path_game_elslp.ui_elslp + "sk/elszp_0.png",
				Path_game_elslp.ui_elslp + "sk/elszp_1.png",
				Path_game_elslp.ui_elslp + "sk/elszp_2.png",
				Path_game_elslp.ui_elslp + "sk/elszp_3.png",

				Path.map + 'pz_elslp.png',
				Path.map_far + 'bg_elslp.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					// Path_game_elslp.music_elslp + "BGM_1.mp3",
					// Path_game_elslp.music_elslp + "call_start.mp3",
					// Path_game_elslp.music_elslp + "car_bgm.mp3",
					// Path_game_elslp.music_elslp + "dingding_end.mp3",
					// Path_game_elslp.music_elslp + "paoche.mp3",
					// Path_game_elslp.music_elslp + "xiazhu_end.mp3",
					// Path_game_elslp.music_elslp + "xiazhu_start.mp3",
					// Path_game_elslp.music_elslp + "zhuandong.mp3",
				])
			}
		}
	}
}