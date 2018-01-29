milo.ready(function(){
    $(function(){
            if(/micromessenger/.test(navigator.userAgent.toLocaleLowerCase())){
                                $("#ptLoginBtn").attr("style", "display:none");
                                $("#wxloginBtn").attr("style", "display:block");
                            }
             
              $("#content").html(navigator.userAgent);
              
              need("biz.login",function(LoginManager){
                    LoginManager.init({
                        appConfig:{
                            "WxAppId":"wxa48b72952218d214",  
                            "AppName":"up2017",  //业务的中文名称
                            "scope":"snsapi_login",   //默认是 snsapi_base 静默授权，如果游戏无静默权限，就需要手动改成 snsapi_userinfo
                        }
                    });
                    
                    
                    LoginManager.checkLogin(function(user){
                        console.log(user);         
                        //如果是微信登陆的，显示微信头像
                        if (milo.cookie.get("acctype")=="wx"){
                            LoginManager.getUserInfoByWxOpenId({
                                "openid":milo.cookie.get("openid"),
                                "access_token":milo.cookie.get("access_token")
                            },function(wxuser){
                                console.log(JSON.stringify(wxuser));
                                $("#content2").html( milo.xss.filter(JSON.stringify(wxuser)) );
                                $("#content3").html("<img src=\""+wxuser.headimgurl+"/96\" />");
                            });
                        }
                        
                        
                        
                    },function(){
                        console.log("未登陆");
                        //wxloginBtn
                            if(/micromessenger/.test(navigator.userAgent.toLocaleLowerCase())){
                                $("#ptLoginBtn").attr("style", "display:none");
                                $("#wxloginBtn").attr("style", "display:block");
                            }
                        
                    });
              });
              
              
             
    });


});
