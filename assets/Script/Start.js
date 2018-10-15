/**
 * 登陆
 */
cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        this.walk_anim = cc.find('Canvas/walk_ani').getComponent(cc.Animation);
        this.walk_anim.play();
    },

    onBtnClick(event, eventName) {
        switch (eventName) {
            case 'Statr':
                cc.loader.load('GameScene');
                break;
            case 'Rank':
                break;
            case 'Introduction':
                break;
            case 'Help':
                break;
        }
    }
});
