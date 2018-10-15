cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {
    },

    onBtnClick(event, eventName){
        switch (eventName) {
            case 'Share':           // 分享
                break;
            case 'Close':
                cc.director.loadScene('StartScene');
                break;
        }
    }
});
