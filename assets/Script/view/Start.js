/**
 * 登陆
 */
cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        this.walk_anim = cc.find('walk_ani', this.node).getComponent(cc.Animation);
        this.walk_anim.play();
    },

    onBtnClick(event, eventName) {
        cc.director.loadScene(`${eventName}Scene`);
    }
});
