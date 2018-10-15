/**
 * 加载
 */
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        this.initView();
    },

    initView() {
        this.loading_pb = cc.find('Canvas/loading_pb').getComponent(cc.ProgressBar);
        this.percent_l = cc.find('Canvas/percent_l').getComponent(cc.Label);

        setTimeout(() => {
            cc.loader.load('LoginScene');
        }, 2000);
    }
});
