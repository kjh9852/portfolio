$(function () {
    // var excuted = false;
    var circle = $('.circle');

    var menu_btn = $(".nav > ul > li");
    menu_btn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index() + 1;
        var section = $("section").eq(index);
        var offset = section.offset().top;
        $("html,body").animate({ scrollTop: offset }, 1500, "easeInOutExpo");
    });

    circle.find(".water").each(function () {
        var item = $(this).parent();
        console.log(item);
        var skilbg = $(".skil_bg");
        var about = $('#about');
        var workbg = $('.work_bg');
        var dataColor = $(this).attr('data-color');
        var dataClass = $(this).attr('data-class');
        console.log(dataColor);
        console.log(dataClass);
        item.mouseover(function () {
            skilbg.attr("id", dataClass);
        });
        item.mouseleave(function () {
            skilbg.removeAttr("id", dataClass);
        });
    });

    // text split
    $(".text_split").each(function () {
        let txt = $(this).text();
        let split = txt.split("").join("</span><span aria-hidden='true'>")
        split = "<span aria-hidden='true'>" + split + "</span>"
        $(this).html(split).attr("aira-label", txt);
    });

    gsap.registerPlugin(ScrollTrigger);
    let speed = 100;

    /*  SCENE 1 */
    function scrollTrigger() {
        ScrollTrigger.matchMedia({
            "(min-width: 800px)": function () {
                let scene1 = gsap.timeline();
                ScrollTrigger.create({
                    animation: scene1,
                    reversed: true,
                    paused: true,
                    trigger: "#main_title",
                    start: "5% top",
                    end: "50% 20%",
                    scrub: 3,
                    // markers: true
                });
                scene1.to(".bg_top", { y: -25 * speed, scale: 1, ease: "power1.in" }, 0)
                scene1.to(".bg_star", { y: -50 * speed, scale: 1, ease: "power1.in" }, 0)
                scene1.to(".moutain_back01", { y: 100 * speed, scale: 1, ease: "power1.in" }, 0.01)
                scene1.to(".moutain_back02", { y: 30 * speed, scale: 1, ease: "power1.in" }, 0.01)
                scene1.to(".back_light01", { y: 150 * speed, scale: 1, ease: "power1.in" }, 0)
                scene1.to(".back_light02", { y: 150 * speed, scale: 1, ease: "power1.in" }, 0)
                scene1.to(".moutain_front01", { y: 100 * speed, scale: 0, ease: "power1.in" }, 0)
                scene1.to(".river", { y: 30 * speed, scale: 1, ease: "power1.in" }, 0.01)
                scene1.to(".moon", { y: 100 * speed, scale: 0.1, ease: "power1.in" }, 0.01)
                scene1.to(".moutain_black", { y: -10 * speed, scale: 3, ease: "power1.in", transformOrigin: "center" }, 0)
                scene1.to(".tit", { y: 10 * speed }, 0)
            },
            "(max-width: 799px)": function () {
                let mobile_scene = gsap.timeline();
                ScrollTrigger.create({
                    animation: mobile_scene,
                    reversed: true,
                    paused: true,
                    trigger: "#main_title",
                    start: "5% top",
                    end: "60% 20%",
                    // markers: true,
                    scrub: 3
                });
                mobile_scene.to(".moutain_black", { scale: 10, ease: "power1.in", transformOrigin: "center 20%" }, 0)
                mobile_scene.to(".tit", { y: 500 }, 0)
            },
            "all": function () {

            }
        });
        
        gsap.fromTo(".bg_top", { y: -2000, scale: 1 }, { y: 0, scale: 1, ease: "power2.out", duration: 3 })
        gsap.fromTo(".bg_star", { y: -500, scale: 1 }, { y: 0, scale: 1, ease: "power2.out", duration: 3 })
        gsap.fromTo(".moutain_back01", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 3 })
        gsap.fromTo(".moutain_back02", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 3, delay: 0.3 }, 2)
        gsap.fromTo(".back_light01", { opacity: 0 }, { opacity: 0.08, ease: "expo.out", duration: 4, delay: 1.7 })
        gsap.fromTo(".back_light02", { opacity: 0 }, { opacity: 0.05, ease: "expo.out", duration: 4, delay: 1.7 }, 0)
        gsap.fromTo(".moutain_front01", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 1.7, delay: 1 })
        gsap.fromTo(".moon", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 1.7, delay: 1.5 })
        gsap.fromTo(".river", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 3, delay: 0.3 })
        gsap.fromTo(".moutain_black", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "back.out(2)", duration: 1, delay: 1 })
    }

    //

    function scrollAnimation() {
        var black = $('.moutain_black');
        var blackTop = black.offset().top;
        var about = $('#about');
        var aboutOST = about.offset().top;
        var work = $('#work');
        var workOST = work.offset().top;
        var animation = $('#animation');
        var animationOST = animation.offset().top;
        var script = $("#script");
        var scriptOST = script.offset().top;
        var title = $('.sec2 > .right > .title');
        var text = $('.sec2 > .right > .text');
        var charts = $('.skil_info');
        var chart = $('.chart');
        var chartOST = chart.offset().top - 1000;

        var siteWrap1 = $('.site_wrap:nth-child(1)');
        var siteWrap1OST = siteWrap1.offset().top;
        var siteWrap2 = $('.site_wrap:nth-child(2)');
        var siteWrap2OST = siteWrap2.offset().top;
        var siteWrap3 = $('.site_wrap:nth-child(3)');
        var siteWrap3OST = siteWrap3.offset().top;
        var siteWrap4 = $('.site_wrap:nth-child(4)');
        var siteWrap4OST = siteWrap4.offset().top;
        var siteWrap5 = $('.site_wrap:nth-child(5)');
        var siteWrap5OST = siteWrap5.offset().top;
        var siteWrap6 = $('.site_wrap:nth-child(6)');
        var siteWrap6OST = siteWrap6.offset().top;

        var siteWrap1 = $('.site_wrap');
        var sec5 = $(".sec5");
        var animationItem = $(".animation_item");
        var index = 0;
        var water = $('.water');
        let wSize = $(window).width();

        $(window).scroll(function () {
            let wScroll = $(this).scrollTop();
            if (wScroll >= chartOST) {
                if (!charts.hasClass('active')) {
                    animateChart();
                    animateHide();
                    charts.addClass('active');
                    setTimeout(function () {
                        if (!chart.hasClass('moveup')) {
                            chart.addClass('moveup');
                            chart.each(function (i) {
                                index += i;
                                chart.eq(i).css({ animationDelay: +index + 's' })
                            });
                        }
                    }, 2100);
                    // excuted = true;
                }
            }
            //animateChart

            // if(wScroll >= aboutOST + 800) {
            //     $('#main_title').css({"position":"relative"})
            // } else {
            //     $('#main_title').css({"position":"fixed"})
            // }

            if (wScroll >= blackTop + 200) {
                $('.tit').css({ "display": "none" });
            }

            if (wScroll <= blackTop && $('.tit').css("display") == "none") {
                setTimeout(function () {
                    $('.tit').css({ "display": "flex" });
                }, 700);
            }

            if (wSize > 980 && wScroll >= blackTop + 20) {
                gsap.to(black, { fill: "#8edccd", delay: 0.3 });
                setTimeout(function () {
                    $(".title_ani").css("background", "#8edccd");
                }, 500);
                console.log(wScroll);

            }
            if (wSize > 980 && wScroll < blackTop + 20) {
                gsap.to(black, { fill: "#00181c", delay: 0.3 });
                setTimeout(function () {
                    $(".title_ani").css("background", "#d5eadb");
                }, 500);
            }

            if (wSize <= 980 && wScroll >= blackTop - 200) {
                gsap.to(black, { fill: "#8edccd", delay: 0.5 });
                setTimeout(function () {
                    $(".title_ani").css("background", "#8edccd");
                }, 300);

            }

            if (wSize <= 980 && wScroll < blackTop - 200) {
                gsap.to(black, { fill: "#00181c", delay: 0.5 });
                setTimeout(function () {
                    $(".title_ani").css("background", "#d5eadb");
                }, 300);
            }

            // else if(wSize >= 480 && wScroll < blackTop - 100) {   
            //     gsap.to(black, {fill:"#00181c",delay:0.5});
            //     $(".title_ani").css("background", "#d5eadb");
            // }

            // console.log(wScroll);
            // console.log(blackTop);

            if (wScroll >= aboutOST) {
                $(".nav li a").removeClass("active");
                $(".nav li a:eq(0)").addClass("active");
            } else {
                $(".nav li a").removeClass("active");
            }
            if (wScroll >= workOST) {
                $(".nav li a").removeClass("active");
                $(".nav li a:eq(1)").addClass("active");
            }
            if (wScroll >= animationOST) {
                $(".nav li a").removeClass("active");
                $(".nav li a:eq(2)").addClass("active");
            }
            if (wScroll >= scriptOST) {
                $(".nav li a").removeClass("active");
                $(".nav li a:eq(3)").addClass("active");
            }
            //nav scroll event

            if (wScroll >= aboutOST - 200) {
                title.css({ "transform": "translateX(0px)", "opacity": "1" })
                text.css({ "transform": "translateX(0px)", "opacity": "1" })
            }

            if (wScroll >= siteWrap1OST -200) {
                $('.site_wrap:nth-of-type(1) > .site_desc').css({ "transform": "translateX(0px)", "opacity": "1" });
            } else {
                $('.site_wrap:nth-of-type(1) > .site_desc').css({ "transform": "translateX(-500px)", "opacity": "0" });
            }
            if (wScroll >= siteWrap2OST - 200) {
                $('.site_wrap:nth-of-type(2) > .site_desc').css({ "transform": "translateX(0px)", "opacity": "1" });
            } else {
                $('.site_wrap:nth-of-type(2) > .site_desc').css({ "transform": "translateX(500px)", "opacity": "0" });
            }
            if (wScroll >= siteWrap3OST - 200) {
                $('.site_wrap:nth-of-type(3) > .site_desc').css({ "transform": "translateX(0px)", "opacity": "1" });
            } else {
                $('.site_wrap:nth-of-type(3) > .site_desc').css({ "transform": "translateX(-500px)", "opacity": "0" });
            }
            if (wScroll >= siteWrap4OST - 600) {
                $('.site_wrap:nth-of-type(4) > .site_desc').css({ "transform": "translateX(0px)", "opacity": "1" });
            } else {
                $('.site_wrap:nth-of-type(4) > .site_desc').css({ "transform": "translateX(500px)", "opacity": "0" });
            }
            if (wScroll >= siteWrap5OST - 600) {
                $('.site_wrap:nth-of-type(5) > .site_desc').css({ "transform": "translateX(0px)", "opacity": "1" });
            } else {
                $('.site_wrap:nth-of-type(5) > .site_desc').css({ "transform": "translateX(-500px)", "opacity": "0" });
            }
            if (wScroll >= siteWrap6OST - 600) {
                $('.site_wrap:nth-of-type(6) > .site_desc').css({ "transform": "translateX(0px)", "opacity": "1" });
            } else {
                $('.site_wrap:nth-of-type(6) > .site_desc').css({ "transform": "translateX(500px)", "opacity": "0" });
            }

            if (wScroll >= animationOST - 50) {
                sec5.addClass("active");
                $(".animation_bg").addClass("active");
            }
            else {
                sec5.removeClass("active");
                $(".animation_bg").removeClass("active");
            }


            let offsetLeft = (wScroll - animation.offset().top)
            // console.log(offsetLeft);
            // console.log(animation.offset().top);

            if (wScroll >= animation.offset().top + 1000) {
                $(".sec5").find(".animation_item").css("left", + -offsetLeft + 1000 + "px")
            }

            else {
                $(".sec5").find(".animation_item").css("left", + 0 + "px")
            }

            if (wScroll >= scriptOST - 450) {
                $("body").css("background", "#0d173c");
            } else {
                $("body").css("background", "#34488f");
            }
            // console.log(wScroll);

            function animateChart() {
                chart.each(function () {
                    var item = $(this);
                    var title = item.find('strong');
                    var targetNum = title.attr('data-num');
                    var water = item.find('.water');
                    setTimeout(function () {
                        $({ rate: 0 }).animate({ rate: targetNum },
                            {
                                duration: 1500,
                                easing: 'easeOutSine',
                                progress: function () {
                                    var now = this.rate;
                                    var amount = 110 - now;
                                    // console.log(now);
                                    title.text(Math.floor(now));
                                    water.css({ "transform": "translate(0px," + amount + "%)" })
                                }
                            });
                    }, 600);
                }); //chart each
            }

            // animateHide
            function animateHide() {
                chart.each(function () {
                    var item = $(this);
                    setTimeout(function () {
                        item.animate({ top: "0px", opacity: "1" }, { duration: 2000, easing: 'easeOutBack' })
                    });
                });
            }

        });
    }

    $(document).ready(function ($) {
        gsap.to($(this).find("em.text_split span"), 0.5, { scale: 1, y: 0, stagger: { from: "start", each: 0.08 }, opacity: 1, ease: Power4.out });
    });

    window.addEventListener('load', () => {
        document.body.classList.remove("before-load");
        document.querySelector(".load").addEventListener("transitionend", (e) => {
            document.body.removeChild(e.currentTarget);
        });

        if (!$("body").hasClass("before-load")) {
            setTimeout(() => {
                scrollTo(0, 0);
                scrollTrigger();
            }, 300);
        }
        scrollAnimation();
    });

    // $(window).resize(function(){
    //     let wSize = $(window).width();
    //     if(wSize <= 1280){
    //         $(".moutain_back01").css("bottom",wSize/42 +"%");
    //         $(".moutain_back02").css("bottom",wSize/42 +"%");
    //         $(".moutain_front01").css("bottom",wSize/42 +"%");
    //         $(".moon").css("bottom",wSize/42 +"%");
    //         $(".river").css("bottom",wSize/42 +"%");
    //     }
    //     if (wSize <= 960) {
    //         $(".moutain_black").css("bottom",-113 +"%");
    //     }
    //     else {
    //         $(".moutain_back01").css("bottom",0);
    //         $(".moutain_back02").css("bottom",0);
    //         $(".moutain_front01").css("bottom",0);
    //         $(".moon").css("bottom",0);
    //         $(".river").css("bottom",0);
    //     }
    // });
});

