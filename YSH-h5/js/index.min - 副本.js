var h5stop = false;
var aniDone = false;
var perAni = false;
var tool = {
    getCanvas: function (a) {
        return {
            dom: "none", canvas: document.getElementById(a), context: function (b) {
                return this.canvas.getContext("2d")
            }
        }
    }
};
var main = {
    init: function () {
        /*this.drawLineChart("line1");
        this.drawLineChart("line2");
        this.drawLineChart("line3");
        this.drawLineChart("line4");*/
        this.loadImage();
        this.landscape();
        //this.pc();
        this.skip()
    },
    drawLineChart: function (c) {
        var b = document.getElementById(c);
        var a = b.getContext("2d");
        a.lineWidth = 1;
        a.strokeStyle = "rgba(255,255,255,0.5)";
        function d(e, f) {
            a.clearRect(10 * e, 0, 10, 200);
            a.beginPath();
            a.rect(10 * e + 2.5, 100 - ((f * 5) / 2), 1, (f * 5) + 10);
            a.closePath();
            a.stroke()
        }

        setInterval(function () {
            var g = 0;
            var e;
            for (var f = 0; f < 29; f++) {
                e = Math.random() * 10 | 0;
                d(f, e)
            }
        }, 300)
    },
    loadingLogo: function (a) {
        var e = $("#loading-shadow");
        //var c = -e.position().top;
        var c = 20;
        var b = this;
        var d = setInterval(function () {
            if (c >= 60) {
                clearInterval(d);
                d = null;
                $(".loadpage").hide();
                $("#shupin").show();
                b.Orienter()
                //$("#fullpage").css("opacity", "1");
                //pgvSendClick({hottag: "a20170329upm.mobile.load.success"})
            }
            if (c < a) {
                c++;
                e.css("top", -c + "px");
                $(".loading-num").html((c * 1.66 | 0) + "%")
            }
        }, 60)
    },
    loadImage: function () {
        var e = ["img/loading-logo.png"];
        var g = "http://game.gtimg.cn/images/up/act/a20170329upm/";
        var b = 0;
        var a = e.length;
        var c = 0;
        var d = this;

        function f(i) {
            var h = new Image();
            h.onload = function () {
                b++;
                c = (b / a) * 100;
                if (b == a) {
                    //d.music()
                }
                d.loadingLogo(c)
            };
            h.src = i
        }

        e.forEach(function (h) {
            f(g + h)
        })
    },
    skip: function () {
        $(".skip").on("click", function () {
            h5stop = true;
           // $.fn.fullpage.moveTo(5);
            var a = document.getElementById("music");
            a.src = "http://game.gtimg.cn/images/up/act/a20170329upm/music/play.mp3";
            a.play();
            perAni = true
        })
    },
    music: function () {
        var c = document.getElementById("music");
        //pgvSendClick({hottag: "a20170329upm.mobile.music"});
        c.src = "http://game.gtimg.cn/images/up/act/a20170329upm/music/music.mp3";
        c.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            if (typeof WeixinJSBridge == "object") {
                WeixinJSBridge.invoke("getNetworkType", {}, function (j) {
                    c.play()
                })
            }
        });
        var e = false, d = false;
        var g = 0;
        var b = 0;

        function i() {
            setInterval(function () {
                g++
            }, 1000)
        }

        var h = 0;
        var f = true;
        $(".music1").on("click", function () {
            if (f) {
                f = false;
                $(".music1").removeClass("rotate-in-center");
                c.pause()
            } else {
                f = true;
                $(".music1").addClass("rotate-in-center");
                c.play()
            }
        });
        var a = setInterval(function () {
            if (h5stop) {
                clearTimeout(l);
                l = null;
                return
            }
            if (perAni) {
                clearTimeout(l);
                l = null;
                return
            }
            var j = 0;
            if (c.currentTime > 0 && b == 0) {
                i();
                b = 1
            }
            if (f) {
                h = c.currentTime | 0
            } else {
                h = g
            }
            switch (h) {
                case 1:
                    if (!e) {
                        //var k = $(".img1").offset().top + $(".img1").height() * 0.17;
                        var k = 30;
                        $(".img .progress").css({"top": k + "px"});
                        var l = setInterval(function () {
                            e = true;
                            j++;
                            $("#pageOnePer").text(j + "%");
                            if (j == 60) {
                                clearInterval(l)
                            }
                        }, 15);
                        $("#pageOneBar").find("i").animate({width: "60%"}, 1000)
                    }
                    break;
                case 2:
                    $("#section1").find(".t1").addClass("show");
                    break;
                case 4:
                    $("#section1").find(".t2").siblings("p").removeClass("show");
                    setTimeout(function () {
                        $("#section1").find(".t2").addClass("show")
                    }, 2000);
                    break;
                case 11:
                    $("#section1").find(".t-nai").addClass("bounceIn");
                    setTimeout(function () {
                        $("#section1").find(".t-xin").addClass("bounceIn")
                    }, 500);
                    break;
                case 13:
                    //$.fn.fullpage.moveTo(2);
                    break;
                case 28:
                    //$.fn.fullpage.moveTo(3);
                    break;
                case 40:
                   // $.fn.fullpage.moveTo(4);
                    break;
                case 59:
                   // $.fn.fullpage.moveTo(5);
                    c.src = "http://game.gtimg.cn/images/up/act/a20170329upm/music/play.mp3";
                    c.play();
                    perAni = true;
                    break;
                default:
            }
        }, 50)
    },
    playbg: function () {
        var a = document.getElementById("musicbg");
        var b = $(".music2");
        a.src = "http://game.gtimg.cn/images/up/act/a20170329upm/music/play.mp3";
        a.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            if (typeof WeixinJSBridge == "object") {
                WeixinJSBridge.invoke("getNetworkType", {}, function (c) {
                    a.play()
                })
            }
        });
        $(".music1").hide();
        b.show();
        b.on("click", function () {
            if (open) {
                open = false;
                b.removeClass("rotate-in-center");
                a.pause()
            } else {
                open = true;
                b.addClass("rotate-in-center");
                a.play()
            }
        })
    },
    start: 0,
    resetAni: function () {
        $svgGroup.css({"transform": "translate3d(0,0,0)"});
        $("#svgs svg").css({"opacity": 0})
    },
    Orienter: function () {
        var g = this;
        var h = new Orienter();
        var a;
        var d = 0;
        var f = 0;
        var b = 0;
        var c = 4;

        function e(j) {
            var i = setInterval(function () {
                if (c > 0) {
                    c = c - 1;
                    $(".begin").html(c)
                }
                if (c <= 0) {
                    clearInterval(i)
                }
            }, 1000)
        }

        h.onOrient = function (i) {

            //$(".test").html(i.lat);
            if (i.lat > -20 && i.lat < 20 && g.start == 0) {
                if (g.start == 0 && f == 0) {
                    //alert('开始')
                    f = 1;
                    $("#shupin").hide();
                    $("#begin").show();
                    e();
                    //$("#seed").show();
                    a = setTimeout(function () {
                        //$(".co3").hide();
                        $("#begin").hide();
                        //Timer.Timer.toggle();
                        //$(".timebar").css("opacity", 1)
                        g.start = 1;
                        $("#ani").show();
                       // sumAni();
                        /*var j = $(window).height() / 2;
                        $("#seed").css({
                            "transform": "translate3d(-50%," + j + "px,0) scale(0.7)",
                            "transition": "transform 2000ms"
                        });
                        $("#seed").animate({"opacity": 0,}, 1500, function () {
                            $(this).css({"transform": "translate3d(-50%,-100%,0)"});
                            $(this).hide();
                            sumAni();
                            //aniStart()
                        });*/
                        //$(".timebar").css("opacity", 1)
                    }, 3800)
                }
            }
            if ((i.lat < -20 && g.start == 0) || (i.lat > 20 && g.start == 0)) {
                //$("#ani").hide();
                $("#begin").hide();
                $("#shupin").show();
                Timer.resetStopwatch();
                //$(".co1").show();
               // $(".co3").hide();
                if (f == 1) {
                    f = 0
                }
                c = 4;
                $(".countdown").html(3);
                clearTimeout(a)
            }
            if ((i.lat < -20 && g.start == 1) || (i.lat > 20 && g.start == 1)) {
                if (d == 0 && aniDone != true) {
                    //alert('结束')
                    //curAni.stop();
                    $("#endpage").show();
                    $(".endtime").html($(".count").clone().html());
                    Timer.resetStopwatch();
                    d = 1;
                    //$(".timebar").css("opacity", 0);
                    g.resetAni()
                }
            }
        };
        h.init();
        $(".btn_again").on("click", function () {
            g.start = 0;
            f = 0;
            d = 0;
            $(".countdown").html(3);
            $("#endpage").hide();
            $("#shupin").show();
            h.Orienter();
            //$("#begin").show();
            //pgvSendClick({hottag: "a20170329upm.mobile.fullpage.again"})
        });
        $("#saveBtn").on("click", function () {
            $("#imgPop").show();
            var k = $("#imgResult").data("name");
            var j = $("#imgPop img");
            if (j && j.data("name") == k) {
                $("#imgPop").show()
            } else {
                var i = new Image();
                i.onload = function () {
                    $("#imgPop .tip").hide();
                    $("#imgPop").append($(i)).append('<p class="save-tip">长按图片<br />可保存到手机</p>');
                    $(i).data("name", k)
                };
                i.src = "http://game.gtimg.cn/images/up/act/a20170329upm/img/" + k + "-tree.jpg"
            }
           // pgvSendClick({hottag: "a20170329upm.mobile.fullpage.saveBtn"})
        });
        $("#imgPop .close").on("click", function () {
            $("#imgPop").hide()
        })
    },
    landscape: function () {
        function a() {
            var i = localStorage;
            var f = i.getItem("J-recordOrientX");
            var b = document.documentElement.clientWidth, d = document.documentElement.clientHeight;
            var e = 0, c = 0;
            if (!f) {
                e = window.screen.width;
                c = window.screen.height;
                i.setItem("J-recordOrientX", e + "," + c)
            } else {
                var g = f.split(",");
                e = g[0];
                c = g[1]
            }
            if (b == e) {
                $("#Shine_landscape").hide();
                return
            }
            if (b == c) {
                $("#Shine_landscape").show();
                return
            }
        }

        a();
        window.addEventListener("resize", a)
    },
    pc: function () {
        new K_PCPrompt({
            url: "http://up.qq.com/act/a20170329upm/index.htm",
            title: "来玩点耐心吧-2017 up 发布会",
            description: "2017 up 发布会",
            preview: "http://game.gtimg.cn/images/up/act/a20170329upm/img/pctips.png"
        })
    }
};
main.init();
var Timer = new (function () {
    var e, c = 70, b = 0, a = function () {
        e.html(formatTime(b));
        console.log(b)
        if(b>1000){
            $("#ani").hide();
            $("#result").show();
        }
        b += c / 10
    }, d = function () {
        e = $(".count");
        Timer.Timer = $.timer(a, c, true)
    };
    this.resetStopwatch = function () {
        b = 0;
        this.Timer.stop().once()
    };
    $(d)
});
function pad(b, a) {
    var c = "" + b;
    while (c.length < a) {
        c = "0" + c
    }
    return c
}
function formatTime(d) {
    var b = parseInt(d / 6000), c = parseInt(d / 100) - (b * 60), a = pad(d - (c * 100) - (b * 6000), 2);
    return (b > 0 ? pad(b, 2) : "00") + ":" + pad(c, 2) + ":" + a
}
function resize() {
    setTimeout(function () {
        if ($(window).height() > $(window).width()) {
            $("html").css("font-size", $("body").width() / 640 * 100 + "px")
        } else {
            $("html").css("font-size", $("body").height() / 1136 * 100 + "px")
        }
        $(".wrap").css("opacity", 1)
    }, 50)
}
window.onload = function () {
    resize()
};
$("body").css("opacity", "1")
//main.Orienter();

/*$("#fullpage").fullpage({
    scrollingSpeed: 300, afterRender: function () {
        $.fn.fullpage.setAllowScrolling(false);
        setTimeout(function () {
            Timer.resetStopwatch();
            $("body").css("opacity", "1")
        }, 1000);
        //pgvSendClick({hottag: "a20170329upm.mobile.fullpage.load"})
    }, afterLoad: function (c, a) {
        var b;
        switch (a) {
            case 1:
                //pgvSendClick({hottag: "a20170329upm.mobile.fullpage.page1"});
                break;
            case 2:
               // pgvSendClick({hottag: "a20170329upm.mobile.fullpage.page2"});
                b = $("#section2");
                b.find(".t1").addClass("show");
                b.find(".img1").addClass("show");
                setTimeout(function () {
                    b.find(".t2").siblings("p").removeClass("show");
                    b.find(".img1").removeClass("show").addClass("hidden")
                }, 5000);
                setTimeout(function () {
                    b.find(".t2").addClass("show")
                }, 7000);
                setTimeout(function () {
                    b.find(".img2").addClass("show")
                }, 9000);
                setTimeout(function () {
                    b.find(".img3").addClass("show")
                }, 13000);
                break;
            case 3:
               // pgvSendClick({hottag: "a20170329upm.mobile.fullpage.page3"});
                b = $("#section3");
                b.find(".t1").addClass("show");
                setTimeout(function () {
                    b.find(".t2").siblings("p").removeClass("show");
                    b.find(".img1").addClass("hidden")
                }, 4000);
                setTimeout(function () {
                    b.find(".t2").addClass("show");
                    b.find(".img2").addClass("show")
                }, 6000);
                setTimeout(function () {
                    b.find(".img3").addClass("show")
                }, 8500);
                break;
            case 4:
               // pgvSendClick({hottag: "a20170329upm.mobile.fullpage.page4"});
                b = $("#section4");
                b.find(".t1").addClass("show");
                b.find(".img1").addClass("show");
                setTimeout(function () {
                    b.find(".img2").addClass("bounceIn")
                }, 6000);
                setTimeout(function () {
                    b.find(".t2").siblings("p").removeClass("show")
                }, 7000);
                setTimeout(function () {
                    b.find(".t2").addClass("show")
                }, 9000);
                setTimeout(function () {
                    b.find(".img3").addClass("bounceIn")
                }, 11000);
                setTimeout(function () {
                    b.find(".img3").hide();
                    b.find(".img2").hide();
                    b.find(".img1").addClass("shake")
                }, 15000);
                setTimeout(function () {
                    b.find(".img4").addClass("show");
                    b.find(".t3").siblings("p").removeClass("show")
                }, 16000);
                setTimeout(function () {
                    b.find(".t3").addClass("show");
                    b.find(".img1").hide();
                    b.find(".img").css("overflow", "visible");
                    b.find(".img4").removeClass("show").animate({"top": "145%"}, 1000)
                }, 17000);
                break;
            case 5:
               // pgvSendClick({hottag: "a20170329upm.mobile.fullpage.page5"});
                main.Orienter();
                break
        }
    }
});*/
var winW = $(window).width();
var winH = $(window).height();
var toX = 0, toY = 0, wpScale = 2;
var arr = [["s14", "s0", "s1", "s2", "s3", "s18", "s4", "s6", "s17", "s7", "s5", "s16", "s15", "s13", "s8", "s9", "s10", "s12", "s11"], ["s15", "s13", "s8", "s9", "s10", "s12", "s11", "s14", "s0", "s1", "s2", "s3", "s18", "s4", "s6", "s17", "s7", "s5", "s16"], ["s5", "s7", "s17", "s6", "s4", "s18", "s14", "s0", "s3", "s1", "s2", "s15", "s16", "s13", "s8", "s10", "s12", "s11", "s9"]];
var svgIdArr = ["s14", "s0"], curAni, curIndex, $curSvg, $svgGroup = $("#svgGroup");
$svgGroup.css({left: (winW - $svgGroup.width()) / 2, top: (winH - $svgGroup.height()) / 2,});
function getRandomizer(a, b) {
    return function () {
        return Math.floor(Math.random() * (1 + b - a)) + a
    }
}
function svgAni(a) {
    $curSvg = $("#" + svgIdArr[a]).css("opacity", 1);
    curIndex = a;
    curAni = new Vivus(svgIdArr[a], {
        duration: 1000, type: "oneByOne", forceRender: false, onReady: function (b) {
            followAni($curSvg, 5000, function () {
                b.play()
            })
        }
    }, function () {
        if (svgIdArr[a + 1]) {
            a++;
            addSvg(a)
        } else {
            aniComplete()
        }
    })
}
function addSvg(b) {
    var a = svgIdArr[b];
    $("#" + a + "-wp").load("cross-domain/" + a + ".svg", function () {
        svgAni(b)
    })
}

function sumAni(){
    setTimeout(function(){
       alert("动画完成")
    },3000)
}

function aniStart() {
    var a = getRandomizer(0, 2);
    $(".svg-wp").each(function () {
        $(this).html("")
    });
    svgIdArr = arr[a()];
    addSvg(0);
    aniDone = false;
    pgvTime(5);
    pgvTime(10);
    pgvTime(20);
    pgvTime(30);
    pgvTime(60);
    pgvTime(90);
    pgvTime(120);
    pgvTime(150);
    pgvTime(180);
    pgvTime(240);
    pgvTime(300);
    pgvTime(360);
    pgvTime(420);
    pgvTime(480);
    pgvTime(600);
    pgvTime(720);
    pgvTime(840);
    pgvTime(900);
    pgvTime(1200);
    pgvTime(1800)
}
function pgvTime(a) {
    setTimeout(function () {
        if (!aniDone) {
            pgvSendClick({hottag: "a20170329upm.mobile.fullpage.time" + a + "s"})
        }
    }, a * 1000)
}
var imgResultArr = ["r1", "r2", "r3"];
function aniComplete() {
    aniDone = true;
    pgvSendClick({hottag: "a20170329upm.mobile.fullpage.complete"});
    $("#dots").hide();
    $(".timebar,.music2,.music1").hide();
    document.getElementById("musicbg").pause();
    $svgGroup.css({"transform": "translate3d(0,0,0)", "transition": "transform 2000ms"});
    $("#imgGroup").animate({opacity: 1}, 400, function () {
        var b = $(this);
        var a = document.createElement("img");
        var c = getRandomizer(0, 2)();
        a.onload = function () {
            $("#svgs").animate({opacity: 0}, 2000);
            b.animate({opacity: 0}, 2000);
            $("#imgResult").append($(a));
            $("#imgResult").data("name", imgResultArr[c]);
            var d = $(window).width() / $(a).width();
            $("#imgResult img").animate({opacity: 1}, 3000, function () {
                var e = $(this);
                var f = 5 + (winH - $svgGroup.height()) / 2 + ($("#imgResult").height() - e.height() * d) / 2;
                console.log(f / d);
                $(this).css({
                    "-webkit-transform": "scale(" + d + ") translate3d(0,-" + f / d + "px,0)",
                    "-webkit-transition": "transform  2000ms"
                });
                setTimeout(function () {
                    var g = e.offset().top + e.height() * d;
                    $("#resultLogo").show().css("top", g + "px").animate({opacity: 1}, 500);
                    $("#sec-btns").show().delay(500).animate({opacity: 1}, 500)
                }, 2000)
            })
        };
        a.src = "http://game.gtimg.cn/images/up/act/a20170329upm/img/" + imgResultArr[c] + ".jpg"
    })
}
function followAni(f, d, h) {
    var a = $("#cen").offset().left, j = $("#cen").offset().top, i = f.offset().left + f.width() / 2, g = f.offset().top + f.height() / 2, e = a - i, c = j - g, b = curIndex == 0 ? 0 : d;
    toX += e;
    toY += c;
    $svgGroup.css({
        "-webkit-transform": "translate3d(" + toX + "px," + toY + "px,0)",
        "-webkit-transition": "transform " + b + "ms"
    });
    if (h && typeof(h) == "function") {
        h()
    }
};