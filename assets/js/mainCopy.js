(() => {
    let yOffset = 0;
    let prevScrollHeight = 0;

    const mainAnimation = [
        {
            // main
            type : 'sticky',
            heightNum : 2,
            scrollHeight : 0,
            objs : {
                container : document.querySelector('#main_title'),
                backLight01 : document.querySelector('.back_light01'),
                backLight02 : document.querySelector('.back_light02'),
                moon : document.querySelector('.moon'),
                river : document.querySelector('.river'),
                moutainBack01: document.querySelector('.moutain_back01'),
                moutainBack02 : document.querySelector('.moutain_back02'),
                moutainFront : document.querySelector('.moutain_front01'),
                moutainBlack : document.querySelector('.moutain_black'),
                bgStar : document.querySelector('.bg_star'),
                bgTop : document.querySelector('.bg_top')
            },
            values : {
                moutainBlack_translateY_in : [0, -100, {start:0, end: 0.5}],
                moutainBlack_scale : [1, 2, {start:0.1, end: 0.5}],
            }
        }
    ];

    function setLayout(){
        if(mainAnimation[0].type === 'sticky'){
            mainAnimation[0].scrollHeight = mainAnimation[0].heightNum * window.innerHeight;
            mainAnimation[0].objs.container.style.height = `${mainAnimation[0].scrollHeight}px`;
        }
    }

    function calcValues(values, currentYOffset){
        let rv;
        //현재 씬 (스크롤섹션)에서 스크롤된 범위를 비율로 구하기
        const scrollHeight = mainAnimation[0].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        if (values.length === 3){
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end = scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd){
                rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            }else if (currentYOffset < partScrollStart) {
                rv = values[0];
            }else if (currentYOffset > partScrollEnd){
                rv = values[1];
            }
        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }

        return rv;
    }

    function playAnimation(){
        const objs = mainAnimation[0].objs;
        const values = mainAnimation[0].values;
        const currentYOffset = yOffset - prevScrollHeight;
        const scrollHeight = mainAnimation[0].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

            if (scrollRatio <= 1) {
                objs.moutainBlack.style.transform = `scale(${calcValues(values.moutainBlack_scale, currentYOffset)})`+`translateY(${calcValues(values.moutainBlack_translateY_in, currentYOffset)}%)`;
                // objs.moutainBlack.style.transform = `scale(${calcValues(values.moutainBlack_scale, currentYOffset)})`;
                console.log(scrollRatio);
            }
        }
    window.addEventListener('load', () => {
        document.body.classList.remove("before-load");
        document.querySelector(".load").addEventListener("transitionend", (e) => {
            document.body.removeChild(e.currentTarget);
        });
        setLayout();
        
        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;
            playAnimation();
        });
    });

})();