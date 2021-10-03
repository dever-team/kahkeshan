$("#homelink, #companylink, #softwarelink, #featureslink, #blogslink, #blogslink, #contactlink").click(function (event) {
    event.preventDefault();
    $(".menuitem").removeClass("active");
    this.parentElement.classList.add("active");
    var offset = $($(this).attr("href")).offset();
    var sT = offset.top - $("header").outerHeight(true);
    window.scrollTo(0, sT);
});

function slideTo(slide) {
    if (typeof lastslide === 'undefined') {
        updateSliderInfo(slide);
        $(".paginate > div").removeClass("active");
        $(".paginate > .page" + slide).addClass("active");
        tl = gsap.timeline({ paused: true, reversed: true });
        const parent = '.slider .showslide .textbox';
        tl.fromTo(parent + ' h1', .5, { x: -50 }, { x: 0 });
        tl.to(parent + ' h1', .5, { opacity: 1 }, '-=.5');
        tl.to('.showslide', .5, { opacity: 1 }, '-=.5');
        tl.fromTo(parent + ' p', .5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.4');
        tl.fromTo(parent + ' ul', .5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.3');
        tl.fromTo(parent + ' a', .5, { x: -50, opacity: 0 }, {
            x: 0, opacity: 1, onComplete: function () {
                document.querySelector('.slide').style.pointerEvents = "auto";
            }
        }, '-=.4');
        lastslide = slide;
        tl.reversed() ? tl.play() : console.log();
    } else {
        if (slide != lastslide) {
            tl.reverse();
            setTimeout(function () {
                updateSliderInfo(slide);
                $(".paginate > div").removeClass("active");
                $(".paginate > .page" + slide).addClass("active");
                tl = gsap.timeline({ paused: true, reversed: true });
                const parent = '.slider .showslide .textbox';
                tl.fromTo(parent + ' h1', .5, { x: -50 }, { x: 0 });
                tl.to(parent + ' h1', .5, { opacity: 1 }, '-=.5');
                tl.to('.showslide', .5, { opacity: 1 }, '-=.5');
                tl.fromTo(parent + ' p', .5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.4');
                tl.fromTo(parent + ' ul', .5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.3');
                tl.fromTo(parent + ' a', .5, { x: -50, opacity: 0 }, {
                    x: 0, opacity: 1, onComplete: function () {
                        document.querySelector('.slide').style.pointerEvents = "auto";
                    }
                }, '-=.4');
                lastslide = slide;
                tl.reversed() ? tl.play() : console.log();
            }, tl.time() * 1000);

        }
    }
}

function updateSliderInfo(slide) {
    $('.slider .showslide').html($('.slider .slide' + slide).html());
}