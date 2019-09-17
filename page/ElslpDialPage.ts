/**
* 转盘
*/
module gameelslp.page {
    const CENTER_X: number = 640; //球转动中心X坐标
    const CENTER_Y: number = 360; //球转动中心Y坐标
    const WAI_RADIUS: number = 300;  //外圈半径
    const NEI_RADIUS: number = 180;    //内圈半径
    const END_RADIUS: number = 120;   //最后停止半径
    const BALL_INWARD_TIME: number = 40;  //球往内滑动需要的时间(帧)
    const NUMBER_POS: number[] = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1,
        20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];    //0-37数字的位置(index就是该数字位置)
    export class ElslpDialPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.eluosizhuanpan.ZhuanPanUI;
        private _subVal: number = 0;    //转盘递减的角度值
        private _ballSubVal: number = 0;//小球递减角度
        private _ballAngle: number = 0; //球的角度
        private _subRadius: number = 0;     //半径减小值
        private _rotationVal: number = -20; //转盘每帧转动角度
        private _rotationBall: number = 20; //球每帧转动角度
        private _criticalNum: number = 0;   //向内滚动的临界值
        private _ballRadius: number = 0;    //向内滚动时球转动半径
        private _ballEndRadius: number = 0; //小球向卡槽滚动时的半径
        private _subEndRadius: number = 0;  //小球向卡槽滚动时的速度
        private _averageAngle: number = 0;   //每个格子的角度
        private _rewardNumber: number;  //奖励数字
        private _rewardInitialAngle: number;   //奖励数字初始角度
        private _rewardEndAngle: number;   //奖励数字最终角度

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.eluosizhuanpan.ZhuanPanUI');
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this.turnDial();
        }

        set dataSource(val: string) {
            this._rewardNumber = parseInt(val);
        }

        //转起来
        private turnDial(): void {
            //每个格子平均角度
            this._averageAngle = 360 / 37;
            //奖励数字初始角度
            this._rewardInitialAngle = NUMBER_POS.indexOf(this._rewardNumber) * this._averageAngle;
            //随机下转盘转动减缓速度
            this._subVal = MathU.randomRange(1000, 1500) / 10000;
            //球的向内滚动的速度，改半径
            this._subRadius = (WAI_RADIUS - NEI_RADIUS) / BALL_INWARD_TIME;
            //球滚到卡槽内的速度
            this._subEndRadius = END_RADIUS / BALL_INWARD_TIME;
        }
        update() {
            //转动小球
            if (this._rotationBall > 0) {
                //球转速开始变慢
                this._rotationBall -= this._ballSubVal;
                //看看是不是该滚进去了
                if (this._rotationBall > this._criticalNum) {
                    this.turnBall();
                } else {
                    this.ballInward();
                }
            } else {    //小球静止后，滚到卡槽
                if (this._ballEndRadius <= NEI_RADIUS - END_RADIUS) {
                    this.ballToEndPos();
                }
            }
            //转盘转动
            this._viewUI.img_num.pivot(237, 237);
            if (this._rotationVal < 0) {
                this._viewUI.img_num.rotation -= this._rotationVal;
                //转盘越转越慢
                this._rotationVal += this._subVal;
                this._rewardEndAngle = (this._viewUI.img_num.rotation + this._rewardInitialAngle) % 360;
            } else {
                if (this._ballSubVal == 0) {
                    //根据球停止时所在的角度，算出递减值，即每帧要减多少
                    let angle = (360 - this._ballAngle % 360) + this._rewardEndAngle - this._averageAngle * 7;
                    this._ballSubVal = this._rotationBall / (2 * angle / this._rotationBall - 1);
                    //球在哪开始往内圈滚
                    this._criticalNum = this._ballSubVal * BALL_INWARD_TIME;
                }
            }
        }

        //小球转动
        private turnBall(): void {
            this._viewUI.img_qiu.x = CENTER_X + Math.cos(this._ballAngle * Math.PI / 180) * WAI_RADIUS;
            this._viewUI.img_qiu.y = CENTER_Y + Math.sin(this._ballAngle * Math.PI / 180) * WAI_RADIUS;
            this._ballAngle += this._rotationBall;
        }

        //小球往内滚动，改变半径就可以
        private ballInward(): void {
            this._ballRadius += this._subRadius;
            let radius = WAI_RADIUS - this._ballRadius;
            this._viewUI.img_qiu.x = CENTER_X + Math.cos(this._ballAngle * Math.PI / 180) * radius;
            this._viewUI.img_qiu.y = CENTER_Y + Math.sin(this._ballAngle * Math.PI / 180) * radius;
            this._ballAngle += this._rotationBall;
        }

        //小球到卡槽里
        private ballToEndPos(): void {
            this._ballEndRadius += this._subEndRadius;
            let radius = NEI_RADIUS - this._ballEndRadius;
            this._viewUI.img_qiu.x = CENTER_X + Math.cos(this._ballAngle * Math.PI / 180) * radius;
            this._viewUI.img_qiu.y = CENTER_Y + Math.sin(this._ballAngle * Math.PI / 180) * radius;
        }

        private onPlayComplte(): void {
            this.close();
        }

        public close(): void {
            super.close();
        }
    }
}