function randomShare(_name,is){
    var text = [];
    var sex = '他';
    if(is == 1){
        sex = '他';
    }else{
        sex = '她';
    }
    text.push(_name+'可能会在20分钟之内无法回你微信，请一定要原谅'+sex);
    text.push(_name+'可能会在1小时之内无法回你微信，请一定要原谅'+sex);
    text.push('如果'+_name+'在半小时内没有回你微信，那是因为'+sex+'在.....');
    text.push('如果'+_name+'在1小时内没有回你微信，那是因为'+sex+'在.....');
    text.push('如果'+_name+'在2小时内没有回你微信，那是因为'+sex+'在.....');
    var length = text.length;
    var ran = Math.random()*5|0;

    return text[ran];
}

milo.ready(function() {
    $(function() {
        if (/micromessenger/.test(navigator.userAgent.toLocaleLowerCase())) {
            $("#ptLoginBtn").attr("style", "display:none");
            $("#wxloginBtn").attr("style", "display:block");
            need("biz.login", function(LoginManager) {
                LoginManager.init({
                    appConfig: {
                        "WxAppId": "wxa48b72952218d214",
                        "AppName": "up2017", //业务的中文名称
                        "scope": "snsapi_login", //默认是 snsapi_base 静默授权，如果游戏无静默权限，就需要手动改成 snsapi_userinfo
                    }
                });
                setTimeout(function(){
                    if(!LoginManager.isLogin()){
                        document.getElementById('wxloginBtn').click();
                    }else{

                    }
                },1000);
                LoginManager.checkLogin(function(user) {
                    if (milo.cookie.get("acctype") == "wx") {
                        LoginManager.getUserInfoByWxOpenId({
                            "openid": milo.cookie.get("openid"),
                            "access_token": milo.cookie.get("access_token")
                        }, function(wxuser) {
                            // $('.test').html(1111);
                            // $('.test').html(milo.xss.filter(JSON.stringify(wxuser)));
                            var nick = wxuser.nickname;
                            var txt = nick.replace(/(.*)<span.*/,'$1');
                            TGMobileShare({
                                shareTitle:randomShare(txt,wxuser.sex),
                                shareDesc:'来玩点耐心吧',
                                shareImgUrl:'http://game.gtimg.cn/images/up/act/a20170329upm/img/shareicon.png',
                                shareLink:'http://up.qq.com/act/a20170329upm/index.htm',
                                actName:'a20170329upm.mobile.page',
                                onInit:function(tgms){

                                },
                                onShare:{

                                }
                             });
                        });
                    }
                }, function() {

                });
            });
        }else{
            TGMobileShare({
                shareTitle:randomShare('我',1),
                shareDesc:'来玩点耐心吧',
                shareImgUrl:'http://game.gtimg.cn/images/up/act/a20170329upm/img/shareicon.png',
                shareLink:'http://up.qq.com/act/a20170329upm/index.htm',
                actName:'a20170329upm.mobile.page',
                onInit:function(tgms){

                },
                onShare:{

                }
             });
        }
    });
});
