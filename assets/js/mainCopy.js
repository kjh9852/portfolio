$(function () {
    // var excuted = false;
    let yOffset = 0;
    var circle = $('.circle');

    var menu_btn = $(".nav > ul > li");
    var NmenuBtn = $('#mNav-menu > ul > li');
    function navTab(current){
        current.click(function (e) {
            e.preventDefault();
            var target = $(this);
            var index = target.index() + 1;
            var section = $("section").eq(index);
            var offset = section.offset().top;
            $("html,body").animate({ scrollTop: offset }, 1500, "easeInOutExpo");
        });
    }

    document.querySelector('.mobile').addEventListener('click', (e) => {
        e.preventDefault();
        mobileBtn = document.querySelector('.mobile');
        mNavMenu = document.querySelector('#mNav-menu');
        mNavMenu.classList.add('active');
        mobileBtn.style.opacity = 0;
    });

    document.querySelector('.mNav-closeBtn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#mNav-menu').classList.remove('active');
        mobileBtn.style.opacity = 1;
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

    const sec05 = document.querySelector('.sec5');
    const aniItem = document.querySelector('.animation_item');
    let aniItemHeight = 0;
    
    /*  SCENE 1 */
function startAnimation() {
    gsap.fromTo(".bg_top", { y: -2000, scale: 1 }, { y: 0, scale: 1, ease: "power2.out", duration: 3 })
    gsap.fromTo(".bg_star", { y: -500, scale: 1 }, { y: 0, scale: 1, ease: "power2.out", duration: 3 })
    gsap.fromTo(".moutain_back01", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 3 })
    gsap.fromTo(".moutain_back02", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 3, delay: 0.3 }, 2)
    gsap.fromTo(".back_light01", { opacity: 0 }, { opacity: 0.08, ease: "expo.out", duration: 4, delay: 1.7 })
    gsap.fromTo(".back_light02", { opacity: 0 }, { opacity: 0.05, ease: "expo.out", duration: 4, delay: 1.7 }, 0)
    gsap.fromTo(".moutain_front01", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 1.7, delay: 1 })
    gsap.fromTo(".moon", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 1.7, delay: 1.5 })
    gsap.fromTo(".river", { y: 1000, scale: 1 }, { y: 0, scale: 1, ease: "expo.out", duration: 3, delay: 0.3 })
    gsap.fromTo(".moutain_black", { y: 1000, scale: 1, }, { y: 0, scale: 1, ease: "back.out(2)", duration: 1, delay: 1 })
}
    //
    function scrollAnimation() {

        function sec05Height() {
            aniItemHeight += aniItem.scrollWidth + (window.innerHeight*1.5) ;
            sec05.style.height = `${aniItemHeight}px`;
            // console.log(aniItemHeight);
        }
        sec05Height();

        var black = $('.moutain_black');
        var blackTop = black.offset().top;
        
        var about = $('#about');
        var aboutOST = about.offset().top;

        var work = $('#work');
        var workOST = work.offset().top;

        var animation = $('#animation');
        var animationOST = animation.offset().top;

        const script = document.querySelector('#script');
        var scriptOST = script.offsetTop - window.innerHeight;

        var contact = $("#contact");
        var contactOST = contact.offset().top - 200;

        var title = $('.sec2 > .right > .title');
        var text = $('.sec2 > .right > .text');
        var charts = $('.skil_info');
        var chart = $('.chart');
        var chartOST = chart.offset().top - 1000;

        var sec5 = $(".sec5");
        var animationItem = $(".animation_item");
        var index = 0;
        var water = $('.water');
        let wSize = $(window).width();

    function scrollTrigger(){
        gsap.registerPlugin(ScrollTrigger);
        let speed = 100;
        ScrollTrigger.matchMedia({
            "(min-width: 800px)": function () {
                let scene1 = gsap.timeline();
                ScrollTrigger.create({
                    animation: scene1,
                    reversed: true,
                    paused: true,
                    trigger: "#main_title",
                    start: "5% top",
                    end: "50% 10%",
                    scrub: 5,
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
    };
        $(window).scroll(function () {
            let wScroll = $(window).scrollTop();
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
                                chart.eq(i).css({ animationDelay: + index + 's' })
                            });
                        }
                    }, 2100);
                    // excuted = true;
                }
            }
            scrollAni(workBox);
            scrollAni(workTitle);
            scrollAni(workTab);
            //animateChart

            // if(wScroll >= aboutOST + 800) {
            //     $('#main_title').css({"position":"relative"})
            // } else {
            //     $('#main_title').css({"position":"fixed"})
            // }

            if (wScroll >= 100) {
                gsap.to(black, { fill: "#8edccd"});
                setTimeout(function () {
                    $(".title_ani").css("background", "#8edccd");
                }, 500);
            }else {
                gsap.to(black, { fill: "#00181c"});
                setTimeout(function () {
                    $(".title_ani").css("background", "#d5eadb");
                }, 500);
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
            if (wScroll >= contactOST) {
                $(".nav li a").removeClass("active");
                $(".nav li a:eq(4)").addClass("active");
            }
            console.log(wScroll,contactOST);
            //nav scroll event

            if (wScroll >= aboutOST - 200) {
                title.css({ "transform": "translateX(0px)", "opacity": "1" })
                text.css({ "transform": "translateX(0px)", "opacity": "1" })
                $('#main_title').css({"zIndex" : 5})
            }else {
                $('#main_title').css({"zIndex" : 6})
            }
            if (wScroll >= animationOST) {
                sec5.addClass("active");
                $(".animation_bg").addClass("active");
                $('#main_title').css({"opacity": 0});
            } 
            else {
                sec5.removeClass("active");
                $(".animation_bg").removeClass("active");
                $('#main_title').css({"opacity": 1});
            }
            // console.log(wScroll,animationOST);


            let offsetLeft = (wScroll - animation.offset().top)
            // console.log(offsetLeft);
            // console.log(animation.offset().top);

            if (wScroll >= animation.offset().top + 1000) {
                $(".sec5").find(".animation_item").css("left", + -offsetLeft + 1000 + "px")
            }

            else {
                $(".sec5").find(".animation_item").css("left", + 0 + "px")
            }

            if (yOffset >= scriptOST) {
                $("body").css("background", "#0d173c");
            } else {
                $("body").css("background", "#34488f");
            }
            console.log(yOffset,scriptOST);

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
        scrollTrigger();
    }
    $(document).ready(function ($) {
        gsap.to($(this).find("em.text_split span"), 0.5, { scale: 1, y: 0, stagger: { from: "start", each: 0.08 }, opacity: 1, ease: Power4.out });
    });
    const workTitle = document.querySelector('.sec4 > h2');

    const workBox = document.querySelector('.work_box');
    const workList = document.querySelectorAll('.work_box > div > ul');
    const workTab = document.querySelector('.work_wrap > ul');
    const workBtn = document.querySelectorAll('.work_wrap > ul > li');
    const workItem = document.querySelectorAll('.work_box > div');
    const previewItem = document.querySelector('.work_preview');
    const previewClose = document.querySelectorAll('.work_preview .close');

    const standardsBtn = document.querySelectorAll('.work_box .standards');
    const responsiveBtn = document.querySelectorAll('.work_box .responsive');
    const megaBtn = document.querySelectorAll('.work_box .mega');
    const ediyaBtn = document.querySelectorAll('.work_box .ediya');
    const tliBtn = document.querySelectorAll('.work_box .tli');
    const appleBtn = document.querySelectorAll('.work_box .apple');
    const rudycellBtn = document.querySelectorAll('.work_box .rudycell');
    const dutyfreeBtn = document.querySelectorAll('.work_box .dutyfree');

    const standardsView = document.querySelector('.work_preview .standards');
    const responsiveView = document.querySelector('.work_preview .responsive');
    const megaView = document.querySelector('.work_preview .mega');
    const ediyaView = document.querySelector('.work_preview .ediya');
    const tliView = document.querySelector('.work_preview .tli');
    const appleView = document.querySelector('.work_preview .apple');
    const rudycellView = document.querySelector('.work_preview .rudycell');
    const dutyfreeView = document.querySelector('.work_preview .dutyfree');

    function preView(index,indexView,close,preview){
        for(let i = 0; i < index.length; i++){
            index[i].addEventListener('click', (e) => {
                e.preventDefault();
                indexView.classList.add('active');
                preview.classList.add('active');
            });
        }
        for (let i = 0; i < close.length; i++){
            close[i].addEventListener('click',(e) => {
                e.preventDefault();
                indexView.classList.remove('active');
                preview.classList.remove('active');
            });
        }
    }

    function scrollAni(current){
        yOffset = window.pageYOffset;
        let currentYOffset = current.offsetTop - window.innerHeight;
         if(current.length >= 2) {
            for(let i = 0; i < current.length; i++){
                currentYOffset = current[i].getBoundingClientRect().top + (yOffset - window.innerHeight);
                if(yOffset >= currentYOffset) {
                    current[i].classList.add('active');
                }
            }
        }
        if(currentYOffset < 0) {
            currentYOffset = current.getBoundingClientRect().top + (yOffset - window.innerHeight);
            if(yOffset >= currentYOffset){
                current.classList.add('active');
            }
        }
    }

    function tabBtn(){
        for (let i = 0; i < workBtn.length; i++){
            workBtn[i].addEventListener('click', (e) => {
                for (let j = 0; j < workBtn.length; j++) {
                    workBtn[j].classList.remove('active');
                    workItem[j].classList.remove('active');
                }
                e.preventDefault();
                workBtn[i].classList.add('active');
                workItem[i].classList.add('active');
            });
        }
    }

    window.addEventListener('load', () => {
        document.body.classList.add('start');
        document.body.classList.remove("before-load");
        document.querySelector(".load").addEventListener("transitionend", (e) => {
            document.body.removeChild(e.currentTarget);
        });

        if (!$("body").hasClass("before-load")) {
            setTimeout(() => {
                scrollTo(0, 0);
                startAnimation();
            }, 300);

            setTimeout(() => {
                document.body.classList.remove('start');
            }, 3000);
        }
        preView(standardsBtn,standardsView,previewClose,previewItem);
        preView(responsiveBtn,responsiveView,previewClose,previewItem);
        preView(megaBtn,megaView,previewClose,previewItem);
        preView(ediyaBtn,ediyaView,previewClose,previewItem);
        preView(tliBtn,tliView,previewClose,previewItem);
        preView(appleBtn,appleView,previewClose,previewItem);
        preView(rudycellBtn,rudycellView,previewClose,previewItem);
        preView(dutyfreeBtn,dutyfreeView,previewClose,previewItem);
        tabBtn();
        scrollAnimation();
        navTab(menu_btn);
        navTab(NmenuBtn);
        window.addEventListener('orientationchange', () => {
            window.location.reload();
        });

    });


});