/**
 * 加载
 */
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        this.init();
        this.initView();
        this.loadResource();
    },

    init(){
        require('Http');
        require('assets/Script/User');
    },

    initView() {
        this.loading_pb = cc.find('loading_pb', this.node).getComponent(cc.ProgressBar);
        this.percent_l = cc.find('percent_l', this.node).getComponent(cc.Label);
    },

    loadResource(){
        cc.loader.loadResDir('textures', this.onLoadProgress.bind(this), this.onLoadComplete.bind(this));
    },

    onLoadProgress(completedCount, totalCount){
        let progress = Math.floor(100 * completedCount/ totalCount);
        this.percent_l.string = `${progress}%`;
        this.loading_pb.progress = progress;
    },

    onLoadComplete(){
        cc.director.loadScene('StartScene');
    }

});
