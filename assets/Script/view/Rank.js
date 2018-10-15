cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {
    },

    onBtnClick(event, eventName){
        switch (eventName) {
            case 'Rank':        // 世界排名
                break;
            case 'Last':        // 上一页
                break;
            case 'Next':        // 下一页
                break;
            case 'Close':
                cc.director.loadScene('StartScene');
                break;
        }
    }
});
