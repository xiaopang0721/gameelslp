
module ui.nqp.game_ui.eluosizhuanpan.component {
    export class AnNiu1UI extends View {
		public ing_type:Laya.Image;
		public txt_count:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":65,"height":35},"child":[{"type":"Image","props":{"y":1,"x":-1,"var":"ing_type","skin":"elslp_ui/game_ui/eluosizhuanpan/zs_fen.png"}},{"type":"Label","props":{"y":6,"x":8,"width":49,"var":"txt_count","text":"24","height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan.component {
    export class DaoJiShiUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani1_0:Laya.FrameAnimation;
		public txt_time:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"compId":1,"child":[{"type":"Box","props":{"y":68,"x":46,"width":64,"rotation":0,"height":66,"anchorY":0.8,"anchorX":0.5},"compId":2,"child":[{"type":"Image","props":{"y":-6,"x":0,"width":80,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90}},{"type":"Image","props":{"y":30,"x":32,"width":80,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":1,"scaleX":1,"height":90,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":32,"x":32,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi1.png","scaleY":1,"scaleX":1,"rotation":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Text","props":{"y":19,"x":11,"wordWrap":true,"width":43,"var":"txt_time","text":"00","strokeColor":"#ffffff","stroke":2,"leading":6,"height":26,"fontSize":24,"color":"#8e0200","bold":true,"align":"center"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"y","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"y","index":8},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":24}],"x":[{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":0},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":2},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":4},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":6},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":12},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":14},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":16},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":18},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":20},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":22}],"rotation":[{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":0},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":2},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":4},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":6},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":8},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":12},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":14},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":16},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":18},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":20},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":24}]}},{"target":4,"keyframes":{"x":[{"value":32,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"visible","index":1}],"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":24}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":24}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":24}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"blendMode","index":0},{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"blendMode","index":1}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":24}]}},{"target":5,"keyframes":{"y":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"y","index":0},{"value":30,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"y","index":1}],"x":[{"value":32,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"label":null,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"label":null,"key":"visible","index":1}],"scaleY":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleY","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleY","index":24}],"scaleX":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleX","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleX","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleX","index":24}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":24}]}},{"target":1,"keyframes":{"width":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":1,"key":"width","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":1,"key":"width","index":24}],"height":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":1,"key":"height","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":1,"key":"height","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":2,"keyframes":{"x":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":0}]}},{"target":4,"keyframes":{"x":[{"value":32,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0}]}},{"target":5,"keyframes":{"x":[{"value":32,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}]}}],"name":"ani1_0","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.component.DaoJiShiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan.component {
    export class QiuUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":30,"height":30},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gunqiu.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.component.QiuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan.component {
    export class TouXiangUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":64,"x":49,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":3,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":3,"x":-2,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":109,"x":-7,"wordWrap":true,"width":110,"var":"txt_money","text":"0","leading":6,"height":22,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Clip","props":{"y":1,"x":37,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.component.TouXiangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan.component {
    export class TouXiangWzUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_money:laya.display.Text;
		public txt_name:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":62,"x":50,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/general/tu_weizi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":12,"x":3,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":109,"x":-1,"wordWrap":true,"width":99,"var":"txt_money","text":"点击入座","leading":6,"height":21,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Text","props":{"y":2,"x":-2,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Clip","props":{"y":0,"x":36,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class ELuoSiLunPanUI extends View {
		public txt_id:laya.display.Text;
		public area0:Laya.Box;
		public kuang0:Laya.Image;
		public txt_main0:laya.display.Text;
		public area1:Laya.Box;
		public kuang1:Laya.Image;
		public txt_main1:laya.display.Text;
		public area2:Laya.Box;
		public kuang2:Laya.Image;
		public txt_main2:laya.display.Text;
		public area3:Laya.Box;
		public kuang3:Laya.Image;
		public txt_main3:laya.display.Text;
		public area4:Laya.Box;
		public kuang4:Laya.Image;
		public txt_main4:laya.display.Text;
		public area5:Laya.Box;
		public kuang5:Laya.Image;
		public txt_main5:laya.display.Text;
		public area6:Laya.Box;
		public kuang6:Laya.Image;
		public txt_main6:laya.display.Text;
		public area7:Laya.Box;
		public kuang7:Laya.Image;
		public txt_main7:laya.display.Text;
		public area8:Laya.Box;
		public kuang8:Laya.Image;
		public txt_main8:laya.display.Text;
		public area9:Laya.Box;
		public kuang9:Laya.Image;
		public txt_main9:laya.display.Text;
		public area10:Laya.Box;
		public kuang10:Laya.Image;
		public txt_main10:laya.display.Text;
		public area11:Laya.Box;
		public kuang11:Laya.Image;
		public txt_main11:laya.display.Text;
		public area12:Laya.Box;
		public kuang12:Laya.Image;
		public txt_main12:laya.display.Text;
		public area13:Laya.Box;
		public kuang13:Laya.Image;
		public txt_main13:laya.display.Text;
		public area14:Laya.Box;
		public kuang14:Laya.Image;
		public txt_main14:laya.display.Text;
		public area15:Laya.Box;
		public kuang15:Laya.Image;
		public txt_main15:laya.display.Text;
		public area16:Laya.Box;
		public kuang16:Laya.Image;
		public txt_main16:laya.display.Text;
		public area17:Laya.Box;
		public kuang17:Laya.Image;
		public txt_main17:laya.display.Text;
		public area18:Laya.Box;
		public kuang18:Laya.Image;
		public txt_main18:laya.display.Text;
		public area19:Laya.Box;
		public kuang19:Laya.Image;
		public txt_main19:laya.display.Text;
		public area20:Laya.Box;
		public kuang20:Laya.Image;
		public txt_main20:laya.display.Text;
		public area21:Laya.Box;
		public kuang21:Laya.Image;
		public txt_main21:laya.display.Text;
		public area22:Laya.Box;
		public kuang22:Laya.Image;
		public txt_main22:laya.display.Text;
		public area23:Laya.Box;
		public kuang23:Laya.Image;
		public txt_main23:laya.display.Text;
		public area24:Laya.Box;
		public kuang24:Laya.Image;
		public txt_main24:laya.display.Text;
		public area25:Laya.Box;
		public kuang25:Laya.Image;
		public txt_main25:laya.display.Text;
		public area26:Laya.Box;
		public kuang26:Laya.Image;
		public txt_main26:laya.display.Text;
		public area27:Laya.Box;
		public kuang27:Laya.Image;
		public txt_main27:laya.display.Text;
		public area28:Laya.Box;
		public kuang28:Laya.Image;
		public txt_main28:laya.display.Text;
		public area29:Laya.Box;
		public kuang29:Laya.Image;
		public txt_main29:laya.display.Text;
		public area30:Laya.Box;
		public kuang30:Laya.Image;
		public txt_main30:laya.display.Text;
		public area31:Laya.Box;
		public kuang31:Laya.Image;
		public txt_main31:laya.display.Text;
		public area32:Laya.Box;
		public kuang32:Laya.Image;
		public txt_main32:laya.display.Text;
		public area33:Laya.Box;
		public kuang33:Laya.Image;
		public txt_main33:laya.display.Text;
		public area34:Laya.Box;
		public kuang34:Laya.Image;
		public txt_main34:laya.display.Text;
		public area35:Laya.Box;
		public kuang35:Laya.Image;
		public txt_main35:laya.display.Text;
		public area36:Laya.Box;
		public kuang36:Laya.Image;
		public txt_main36:laya.display.Text;
		public area37:Laya.Box;
		public kuang37:Laya.Image;
		public txt_main37:laya.display.Text;
		public area38:Laya.Box;
		public kuang38:Laya.Image;
		public txt_main38:laya.display.Text;
		public area39:Laya.Box;
		public kuang39:Laya.Image;
		public txt_main39:laya.display.Text;
		public area40:Laya.Box;
		public kuang40:Laya.Image;
		public txt_main40:laya.display.Text;
		public area41:Laya.Box;
		public kuang41:Laya.Image;
		public txt_main41:laya.display.Text;
		public area42:Laya.Box;
		public kuang42:Laya.Image;
		public txt_main42:laya.display.Text;
		public area43:Laya.Box;
		public kuang43:Laya.Image;
		public txt_main43:laya.display.Text;
		public area44:Laya.Box;
		public kuang44:Laya.Image;
		public txt_main44:laya.display.Text;
		public area45:Laya.Box;
		public kuang45:Laya.Image;
		public txt_main45:laya.display.Text;
		public area46:Laya.Box;
		public kuang46:Laya.Image;
		public txt_main46:laya.display.Text;
		public area47:Laya.Box;
		public kuang47:Laya.Image;
		public txt_main47:laya.display.Text;
		public area48:Laya.Box;
		public kuang48:Laya.Image;
		public txt_main48:laya.display.Text;
		public seat0:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI;
		public seat1:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI;
		public seat2:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI;
		public seat3:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI;
		public seat4:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI;
		public seat5:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI;
		public btn_chip0:Laya.Button;
		public guang0:Laya.Image;
		public btn_chip1:Laya.Button;
		public guang1:Laya.Image;
		public btn_chip2:Laya.Button;
		public guang2:Laya.Image;
		public btn_chip3:Laya.Button;
		public guang3:Laya.Image;
		public btn_chip4:Laya.Button;
		public guang4:Laya.Image;
		public btn_repeat:Laya.Button;
		public main_player:ui.nqp.game_ui.eluosizhuanpan.component.TouXiangUI;
		public box_tip:Laya.Box;
		public clip_status:Laya.Clip;
		public list_record:Laya.List;
		public btn_record:Laya.Button;
		public box_time:ui.nqp.game_ui.eluosizhuanpan.component.DaoJiShiUI;
		public btn_playerList:Laya.Button;
		public txt_online:laya.display.Text;
		public btn_qifu:Laya.Button;
		public btn_chong:Laya.Button;
		public btn_back:Laya.Button;
		public btn_spread:Laya.Button;
		public box_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_zhanji:Laya.Button;
		public btn_set:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":30,"x":98,"width":314,"var":"txt_id","text":"牌局号：15323156415613212313","leading":6,"height":23,"fontSize":20,"color":"#d4d4d4"}},{"type":"Box","props":{"y":0,"x":0,"width":1141,"height":581},"child":[{"type":"Box","props":{"y":144,"x":234,"var":"area0"},"child":[{"type":"Image","props":{"width":140,"var":"kuang0","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx3.png","height":79}},{"type":"Text","props":{"y":55,"x":25,"width":92,"var":"txt_main0","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":142,"x":371,"var":"area1"},"child":[{"type":"Image","props":{"width":141,"var":"kuang1","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx4.png","height":83}},{"type":"Text","props":{"y":58,"x":25,"width":92,"var":"txt_main1","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":145,"x":509,"width":141,"var":"area2","height":77},"child":[{"type":"Image","props":{"width":141,"var":"kuang2","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx13.png","height":101}},{"type":"Text","props":{"y":55,"x":25,"width":92,"var":"txt_main2","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":145,"x":650,"width":137,"var":"area3","height":77},"child":[{"type":"Image","props":{"x":138,"width":138,"var":"kuang3","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx13.png","scaleX":-1,"height":100}},{"type":"Text","props":{"y":54,"x":25,"width":92,"var":"txt_main3","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":143,"x":785,"var":"area4"},"child":[{"type":"Image","props":{"width":140,"var":"kuang4","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx4.png","height":81}},{"type":"Text","props":{"y":56,"x":25,"width":92,"var":"txt_main4","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":145,"x":922,"width":141,"var":"area5","height":77},"child":[{"type":"Image","props":{"x":141,"width":141,"var":"kuang5","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx3.png","scaleX":-1,"height":77}},{"type":"Text","props":{"y":54,"x":25,"width":92,"var":"txt_main5","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":220,"x":1060,"var":"area6"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":77,"var":"kuang6","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx2.png","height":89}},{"type":"Text","props":{"y":66,"x":6,"width":65,"var":"txt_main6","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":1060,"var":"area7"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":77,"var":"kuang7","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx1.png","height":98}},{"type":"Text","props":{"y":74,"x":6,"width":65,"var":"txt_main7","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":399,"x":1060,"width":78,"var":"area8","height":93},"child":[{"type":"Image","props":{"y":93,"x":0,"width":77,"var":"kuang8","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx2.png","scaleY":-1,"scaleX":1,"height":93}},{"type":"Text","props":{"y":70,"x":6,"width":67,"var":"txt_main8","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":488,"x":785,"var":"area9"},"child":[{"type":"Image","props":{"width":277,"var":"kuang9","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx5.png","height":61}},{"type":"Text","props":{"y":39,"x":80,"width":121,"var":"txt_main9","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":490,"x":508,"width":279,"var":"area10","height":59},"child":[{"type":"Image","props":{"y":-25,"x":0,"width":279,"var":"kuang10","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx6.png","height":109}},{"type":"Text","props":{"y":40,"x":80,"width":121,"var":"txt_main10","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":487,"x":232,"var":"area11"},"child":[{"type":"Image","props":{"width":279,"var":"kuang11","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx5.png","height":61}},{"type":"Text","props":{"y":40,"x":80,"width":121,"var":"txt_main11","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":219,"x":161,"var":"area12"},"child":[{"type":"Image","props":{"width":77,"var":"kuang12","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx7.png","height":273}},{"type":"Text","props":{"y":250,"x":5,"width":66,"var":"txt_main12","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":396,"x":235,"var":"area13"},"child":[{"type":"Image","props":{"width":70,"var":"kuang13","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":73,"x":2,"width":66,"var":"txt_main13","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":304,"x":235,"var":"area14"},"child":[{"type":"Image","props":{"width":70,"var":"kuang14","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main14","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":217,"x":234,"var":"area15"},"child":[{"type":"Image","props":{"width":71,"var":"kuang15","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main15","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":396,"x":302,"var":"area16"},"child":[{"type":"Image","props":{"width":73,"var":"kuang16","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main16","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":304,"x":302,"var":"area17"},"child":[{"type":"Image","props":{"width":73,"var":"kuang17","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main17","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":217,"x":301,"var":"area18"},"child":[{"type":"Image","props":{"width":74,"var":"kuang18","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main18","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":397,"x":372,"var":"area19"},"child":[{"type":"Image","props":{"width":72,"var":"kuang19","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main19","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":372,"var":"area20"},"child":[{"type":"Image","props":{"width":72,"var":"kuang20","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main20","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":218,"x":371,"var":"area21"},"child":[{"type":"Image","props":{"width":73,"var":"kuang21","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main21","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":397,"x":442,"var":"area22"},"child":[{"type":"Image","props":{"width":70,"var":"kuang22","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main22","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":442,"var":"area23"},"child":[{"type":"Image","props":{"width":70,"var":"kuang23","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main23","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":218,"x":441,"var":"area24"},"child":[{"type":"Image","props":{"width":71,"var":"kuang24","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main24","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":397,"x":510,"var":"area25"},"child":[{"type":"Image","props":{"width":70,"var":"kuang25","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main25","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":510,"var":"area26"},"child":[{"type":"Image","props":{"width":70,"var":"kuang26","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main26","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":218,"x":509,"var":"area27"},"child":[{"type":"Image","props":{"width":71,"var":"kuang27","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main27","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":398,"x":578,"width":72,"var":"area28","height":92},"child":[{"type":"Image","props":{"y":92,"x":72,"width":72,"var":"kuang28","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx11.png","scaleY":-1,"scaleX":-1,"height":92}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main28","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":578,"var":"area29"},"child":[{"type":"Image","props":{"width":73,"var":"kuang29","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main29","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":219,"x":578,"width":74,"var":"area30","height":90},"child":[{"type":"Image","props":{"x":74,"width":74,"var":"kuang30","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx11.png","scaleX":-1,"height":90}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main30","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":398,"x":650,"width":69,"var":"area31","height":93},"child":[{"type":"Image","props":{"y":93,"width":69,"var":"kuang31","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx11.png","scaleY":-1,"height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main31","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":651,"var":"area32"},"child":[{"type":"Image","props":{"width":68,"var":"kuang32","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main32","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":220,"x":650,"width":69,"var":"area33","height":89},"child":[{"type":"Image","props":{"width":69,"var":"kuang33","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx11.png","height":89}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main33","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":396,"x":717,"var":"area34"},"child":[{"type":"Image","props":{"width":70,"var":"kuang34","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main34","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":304,"x":717,"var":"area35"},"child":[{"type":"Image","props":{"width":70,"var":"kuang35","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main35","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":217,"x":716,"var":"area36"},"child":[{"type":"Image","props":{"width":71,"var":"kuang36","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main36","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":396,"x":784,"var":"area37"},"child":[{"type":"Image","props":{"width":73,"var":"kuang37","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main37","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":304,"x":784,"var":"area38"},"child":[{"type":"Image","props":{"width":73,"var":"kuang38","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main38","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":217,"x":783,"var":"area39"},"child":[{"type":"Image","props":{"width":74,"var":"kuang39","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main39","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":397,"x":854,"var":"area40"},"child":[{"type":"Image","props":{"width":72,"var":"kuang40","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main40","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":854,"var":"area41"},"child":[{"type":"Image","props":{"width":72,"var":"kuang41","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main41","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":218,"x":853,"var":"area42"},"child":[{"type":"Image","props":{"width":73,"var":"kuang42","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main42","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":397,"x":924,"var":"area43"},"child":[{"type":"Image","props":{"width":70,"var":"kuang43","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main43","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":924,"var":"area44"},"child":[{"type":"Image","props":{"width":70,"var":"kuang44","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main44","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":218,"x":923,"var":"area45"},"child":[{"type":"Image","props":{"width":71,"var":"kuang45","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main45","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":397,"x":992,"var":"area46"},"child":[{"type":"Image","props":{"width":70,"var":"kuang46","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx10.png","height":97}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main46","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":305,"x":992,"var":"area47"},"child":[{"type":"Image","props":{"width":70,"var":"kuang47","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx9.png","height":98}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main47","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]},{"type":"Box","props":{"y":218,"x":991,"var":"area48"},"child":[{"type":"Image","props":{"width":71,"var":"kuang48","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gx8.png","height":93}},{"type":"Text","props":{"y":74,"x":2,"width":66,"var":"txt_main48","text":"0","leading":6,"height":21,"fontSize":18,"color":"#28ff00","align":"center"}}]}]},{"type":"Box","props":{"left":27,"centerY":-20},"child":[{"type":"TouXiangWz","props":{"var":"seat0","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":158,"var":"seat1","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":316,"var":"seat2","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI"}}]},{"type":"Box","props":{"y":120,"x":1156,"right":24,"centerY":-14},"child":[{"type":"TouXiangWz","props":{"var":"seat3","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":158,"var":"seat4","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":316,"var":"seat5","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI"}}]},{"type":"Box","props":{"x":650,"width":948,"height":147,"bottom":1,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-574,"width":679,"height":113,"centerX":-30,"bottom":-20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":54.5,"x":57,"var":"btn_chip0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm1.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"50","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":56,"var":"guang0","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":178,"var":"btn_chip1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm2.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"100","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":56,"var":"guang1","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":300,"var":"btn_chip2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm3.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"200","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":55,"var":"guang2","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":421,"var":"btn_chip3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm4.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"500","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":55,"var":"guang3","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":539,"var":"btn_chip4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm5.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"1000","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":55,"var":"guang4","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":96,"var":"btn_repeat","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_xz.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#42147e","labelStroke":4,"labelSize":28,"labelColors":"#ffffff","labelBold":true,"label":"重复下注","centerX":326,"anchorY":0.5,"anchorX":0.5}},{"type":"TouXiang","props":{"y":0,"x":0,"var":"main_player","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.TouXiangUI"}}]},{"type":"Box","props":{"y":149,"x":538,"width":219,"var":"box_tip","height":33},"child":[{"type":"Image","props":{"y":14.349999999999994,"skin":"tongyong_ui/game_ui/tongyong/general/tu_h.png","scaleY":0.7,"scaleX":0.6,"centerX":3,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Clip","props":{"y":2.3499999999999943,"x":81.10000000000002,"var":"clip_status","skin":"tongyong_ui/game_ui/tongyong/general/clip_zhuangtai0.png","clipY":7}}]},{"type":"List","props":{"y":563,"x":321,"width":660,"var":"list_record","spaceY":20,"spaceX":0,"repeatY":1,"repeatX":10,"height":38},"child":[{"type":"AnNiu1","props":{"y":2,"x":8,"renderType":"render","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI"}}]},{"type":"Button","props":{"y":556,"x":984,"var":"btn_record","stateNum":1,"skin":"elslp_ui/game_ui/eluosizhuanpan/btn_zs1.png"}},{"type":"DaoJiShi","props":{"y":194,"x":602,"var":"box_time","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.DaoJiShiUI"}},{"type":"Button","props":{"y":651,"x":90,"var":"btn_playerList","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qtwj.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":67,"x":-23,"wordWrap":true,"width":132,"var":"txt_online","text":"在线200人","strokeColor":"#3b1211","stroke":4,"leading":6,"height":26,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":158,"x":651,"width":174,"scaleY":0.8,"scaleX":0.8,"height":204,"centerX":11,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":188,"x":87,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan.sk"}}]}]},{"type":"Button","props":{"y":52,"x":1159,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":670,"x":1170,"var":"btn_chong","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":1234,"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":47,"var":"btn_spread","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":180,"var":"box_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":231},"child":[{"type":"Image","props":{"y":80,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":155,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":17,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":92,"x":14,"var":"btn_zhanji","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}},{"type":"Button","props":{"y":164,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI",ui.nqp.game_ui.eluosizhuanpan.component.TouXiangWzUI);
			View.regComponent("ui.nqp.game_ui.eluosizhuanpan.component.TouXiangUI",ui.nqp.game_ui.eluosizhuanpan.component.TouXiangUI);
			View.regComponent("ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI",ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI);
			View.regComponent("ui.nqp.game_ui.eluosizhuanpan.component.DaoJiShiUI",ui.nqp.game_ui.eluosizhuanpan.component.DaoJiShiUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.ELuoSiLunPanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class ELuoSiZguabPan_HUDUI extends View {
		public view_hud:ui.nqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public img_room1:Laya.Image;
		public img_room2:Laya.Image;
		public img_room3:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"elslp_ui/game_ui/eluosizhuanpan/bg_2.jpg","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","runtime":"ui.nqp.game_ui.tongyong.HudUI","centerY":0,"centerX":0}},{"type":"Box","props":{"width":1274,"var":"box_right","right":2,"height":465,"centerY":3,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":60,"var":"img_room0","skin":"elslp_ui/game_ui/eluosizhuanpan/difen_04.png","right":940}},{"type":"Image","props":{"y":65,"var":"img_room1","skin":"elslp_ui/game_ui/eluosizhuanpan/difen_03.png","right":620}},{"type":"Image","props":{"y":59,"var":"img_room2","skin":"elslp_ui/game_ui/eluosizhuanpan/difen_02.png","right":300}},{"type":"Image","props":{"y":60,"var":"img_room3","skin":"elslp_ui/game_ui/eluosizhuanpan/difen_01.png","right":-20}}]},{"type":"Image","props":{"top":12,"skin":"elslp_ui/game_ui/eluosizhuanpan/brnn_title.png","scaleY":1,"scaleX":1,"centerX":158,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.HudUI",ui.nqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.ELuoSiZguabPan_HUDUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":370,"x":650,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":0.1,"scaleX":2,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":305,"x":968,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":360,"x":275,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Image","props":{"y":251,"x":937,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7},{"type":"Image","props":{"y":425,"x":343,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":5,"label":null,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":5,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":48}]}},{"target":6,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":48}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"visible","index":46}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":46}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":650,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":40}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":40}]}},{"target":7,"keyframes":{"x":[{"value":937,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":30}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"label":null,"key":"visible","index":4}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":4}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":30}]}},{"target":8,"keyframes":{"y":[{"value":425,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":30}],"x":[{"value":343,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":30}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"label":null,"key":"visible","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":30}]}},{"target":9,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":9,"label":null,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":9,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.GoUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_jieshao:Laya.Panel;
		public panel_beishu:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":95,"x":255},"child":[{"type":"Image","props":{"y":-21,"x":397,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png"}},{"type":"Image","props":{"y":-21,"x":397,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png","scaleX":-1}},{"type":"Image","props":{"y":43,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":89,"x":15,"width":756,"var":"btn_tab","space":4,"skin":"tongyong_ui/game_ui/tongyong/hud/tab_bq.png","labels":"玩法介绍,游戏倍数","labelSize":20,"labelColors":"#cacaca,#cacaca,#ffffff","height":58}},{"type":"Panel","props":{"y":147,"x":24,"width":740,"var":"panel_jieshao","height":332},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"elslp_ui/game_ui/eluosizhuanpan/guize_2.png","height":1011}}]},{"type":"Panel","props":{"y":149,"x":34,"width":740,"var":"panel_beishu","height":332},"child":[{"type":"Image","props":{"y":0,"x":-14,"skin":"elslp_ui/game_ui/eluosizhuanpan/guize_1.png","height":1011}}]},{"type":"Button","props":{"y":-15,"x":761,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class JieSuanUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":257,"x":623,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","rotation":360,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":317,"width":620,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","height":350}},{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":456,"x":365,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Image","props":{"y":287,"x":532,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d6.png"}},{"type":"Image","props":{"y":287,"x":720,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d6.png"}},{"type":"Image","props":{"y":399,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Image","props":{"y":341,"x":359,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Text","props":{"y":306,"x":362,"wordWrap":true,"width":41,"text":"蓝：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":307,"x":735,"wordWrap":true,"width":41,"text":"红：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":361,"x":362,"wordWrap":true,"width":41,"text":"单：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":361,"x":737,"wordWrap":true,"width":41,"text":"双：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":418,"x":361,"wordWrap":true,"width":41,"text":"大：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":419,"x":736,"wordWrap":true,"width":41,"text":"小：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":479,"x":503,"wordWrap":false,"width":102,"text":"输赢合计：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":304,"x":418,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":306,"x":790,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":298,"x":408,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":300,"x":780,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":357,"x":411,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":356,"x":782,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":412,"x":410,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":410,"x":785,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":473,"x":626,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":362,"x":599,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":363,"x":421,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":362,"x":792,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":418,"x":420,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":416,"x":795,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":479,"x":637,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":367,"x":556,"wordWrap":true,"width":60,"text":"和：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5"}},{"type":"Text","props":{"y":368,"x":610,"wordWrap":true,"width":98,"text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":180,"x":44},"child":[{"type":"Image","props":{"y":170,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-75,"centerX":31,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":10,"x":10,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":330,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_1.png","scaleY":1,"scaleX":1,"centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl.png","centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":348,"x":626,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.JieSuanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class StopUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":0.1,"scaleX":2,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":1000,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":2},{"type":"Image","props":{"y":360,"x":275,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tz0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":937,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":9},{"type":"Image","props":{"y":425,"x":343,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.StopUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class ZhuanPanUI extends View {
		public img_num:Laya.Image;
		public img_qiu:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":4,"x":-2,"skin":"elslp_ui/game_ui/eluosizhuanpan/tu_beijing.png"}},{"type":"Image","props":{"y":13,"x":292,"width":692,"skin":"elslp_ui/game_ui/eluosizhuanpan/tu_zhuanpan4.png","height":692}},{"type":"Image","props":{"y":47,"x":327,"width":616,"skin":"elslp_ui/game_ui/eluosizhuanpan/tu_zhuanpam3.png","height":616}},{"type":"Image","props":{"y":354,"x":636,"width":474,"var":"img_num","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_zhuanpan2.png","pivotY":237,"pivotX":237,"height":475}},{"type":"Image","props":{"y":232,"x":510,"skin":"elslp_ui/game_ui/eluosizhuanpan/tu_zhuanppan1.png"}},{"type":"Image","props":{"y":103,"x":603,"width":65,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","height":44}},{"type":"Image","props":{"y":83,"x":637,"var":"img_qiu","skin":"elslp_ui/game_ui/eluosizhuanpan/tu_gunqiu.png","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.ZhuanPanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.eluosizhuanpan {
    export class ZouShiTuUI extends View {
		public txt_da:Laya.Label;
		public txt_dan:Laya.Label;
		public txt_hong:Laya.Label;
		public txt_xiao:Laya.Label;
		public txt_shuang:Laya.Label;
		public txt_hei:Laya.Label;
		public txt_title0:Laya.Label;
		public txt_title1:Laya.Label;
		public txt_title2:Laya.Label;
		public list_record:Laya.List;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":358,"x":699,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":800,"width":407,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","sizeGrid":"104,51,78,45","scaleX":-1,"height":435}},{"type":"Image","props":{"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","sizeGrid":"92,47,68,97","height":435}},{"type":"Image","props":{"y":36,"x":410,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":4,"x":314,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zst.png"}},{"type":"Box","props":{"y":84,"x":28},"child":[{"type":"Image","props":{"y":4,"x":453,"skin":"tongyong_ui/game_ui/tongyong/general/tu_fu1.png"}},{"type":"Image","props":{"y":4,"x":-2,"skin":"tongyong_ui/game_ui/tongyong/general/tu_sheng.png"}},{"type":"Image","props":{"y":60,"x":452,"skin":"tongyong_ui/game_ui/tongyong/general/tu_fu1.png"}},{"type":"Image","props":{"y":60,"x":-3,"skin":"tongyong_ui/game_ui/tongyong/general/tu_sheng.png"}},{"type":"Image","props":{"y":114,"x":452,"skin":"tongyong_ui/game_ui/tongyong/general/tu_fu1.png"}},{"type":"Image","props":{"y":114,"x":-3,"skin":"tongyong_ui/game_ui/tongyong/general/tu_sheng.png"}},{"type":"Label","props":{"y":5,"x":123,"width":43,"var":"txt_da","text":"60%","height":27,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":124,"width":43,"var":"txt_dan","text":"60%","height":26,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":115,"x":125,"width":43,"var":"txt_hong","text":"60%","height":27,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":5,"x":567,"width":43,"var":"txt_xiao","text":"30%","height":28,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":569,"width":43,"var":"txt_shuang","text":"30%","height":28,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":115,"x":573,"width":43,"var":"txt_hei","text":"30%","height":27,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":3,"x":314,"width":118,"var":"txt_title0","text":"近20局大小","height":27,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":60,"x":314,"width":119,"var":"txt_title1","text":"近20局单双","height":24,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":115,"x":314,"width":119,"var":"txt_title2","text":"近20局红黑","height":26,"fontSize":24,"font":"Bahnschrift","color":"#ffffff"}}]},{"type":"List","props":{"y":293,"x":26,"width":"100","var":"list_record","spaceY":11,"spaceX":11,"repeatY":2,"repeatX":10,"height":"100"},"child":[{"type":"AnNiu1","props":{"renderType":"render","runtime":"ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI"}}]},{"type":"Image","props":{"y":246,"x":16,"width":769,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ditu.png","height":32}},{"type":"Label","props":{"y":247,"x":347,"width":145,"text":"轮盘走势","height":31,"fontSize":25,"color":"#000000"}},{"type":"Button","props":{"y":39,"x":762,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI",ui.nqp.game_ui.eluosizhuanpan.component.AnNiu1UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.eluosizhuanpan.ZouShiTuUI.uiView);
        }
    }
}
