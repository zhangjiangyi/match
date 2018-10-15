//var URL = "http://192.168.92.64:9000";
// var URL = "http://192.168.92.12:80";
// var URL = "http://118.31.185.43:19000";
// var URL = "http://qinger.plagame.cn:11010";
// var URL = "http://118.31.185.43:11010";
var URL = "http://192.168.94.56:39000";
// var URL = "http://192.168.92.115:39000";
cc.VERSION = 20161227;
var HTTP = cc.Class({
    extends: cc.Component,

    statics: {
        sessionId: 0,
        userid: 0,
        master_url: URL,
        url: URL,
        sendRequest: function (path, data, success, error, extraUrl) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.timeout = 10 * 1000;
            var str = "?";
            for (var k in data) {
                if (str != "?") {
                    str += "&";
                }
                str += k + "=" + data[k];
            }
            if (extraUrl == null) {
                extraUrl = HTTP.url;
            }
            var requestURL = extraUrl + path + encodeURI(str);
            xhr.open("GET", requestURL, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status < 300)) {
                        var ret = JSON.parse(xhr.responseText);
                        if (success !== null) {
                            success(ret);
                        }
                    } else {
                        if (error) {
                            error();
                        }
                    }

                }
            };

            // if(cc.vv && cc.vv.AlertWatting){
            //     cc.vv.AlertWatting.showAlertWatting();
            // }
            xhr.send();
            return xhr;
        },


        /**
         * xhr.readyState
         * (0)初始化,值为0表示对象已经存在，否则浏览器会报错－－对象不存在
         * (1)载入,值为1表示正在向服务端发送请求
         * (2)载入完成,值为2表示已经接收完全部响应数据
         * (3)交互,状态3表示正在解析数据
         * (4)完成,值为4表示数据解析完毕，可以通过XMLHttpRequest对象的相应属性取得数据
         */
        sendRequestWithPost : function(path,data,handler,extraUrl){
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.timeout = 5000;
            if(extraUrl == null){
                extraUrl = HTTP.url;
            }
            var requestURL = extraUrl + path;
            console.log("anysdk------requestURL-----"+requestURL);
            xhr.open("POST",requestURL, true);
            if (cc.sys.isNative){
                xhr.setRequestHeader("Accept-Encoding","gzip,deflate","text/html;charset=UTF-8");
            }

            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                    console.log("http post-res("+ xhr.responseText.length + "):" + xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        if(handler !== null){
                            handler(ret);
                        }
                    } catch (e) {
                        console.log("err:" + e);
                        //handler(null);
                    }
                    finally{
                    }
                }

            };
            xhr.send(data);
            return xhr;

        },
    },
});
if (!window.HTTP){
    window.HTTP = HTTP;
}
