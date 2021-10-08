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
        tl.fromTo(parent + ' h1', .3, { x: -50 }, { x: 0 });
        tl.to(parent + ' h1', .3, { opacity: 1 }, '-=.3');
        tl.to('.showslide', .3, { opacity: 1 }, '-=.3');
        tl.fromTo(parent + ' p', .3, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.2');
        tl.fromTo(parent + ' ul', .3, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.1');
        tl.fromTo(parent + ' a', .3, { x: -50, opacity: 0 }, {
            x: 0, opacity: 1, onComplete: function () {
                document.querySelector('.slide').style.pointerEvents = "auto";
            }
        }, '-=.2');
        lastslide = slide;
        tl.reversed() ? tl.play() : console.log();
    } else {
        if (slide != lastslide) {
            $(".paginate > div").removeClass("active");
            $(".paginate > .page" + slide).addClass("active");
            tl.reverse();
            setTimeout(function () {
                updateSliderInfo(slide);
                tl = gsap.timeline({ paused: true, reversed: true });
                const parent = '.slider .showslide .textbox';
                tl.fromTo(parent + ' h1', .3, { x: -50 }, { x: 0 });
                tl.to(parent + ' h1', .3, { opacity: 1 }, '-=.3');
                tl.to('.showslide', .3, { opacity: 1 }, '-=.3');
                tl.fromTo(parent + ' p', .3, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.2');
                tl.fromTo(parent + ' ul', .3, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, '-=.1');
                tl.fromTo(parent + ' a', .3, { x: -50, opacity: 0 }, {
                    x: 0, opacity: 1, onComplete: function () {
                        document.querySelector('.slide').style.pointerEvents = "auto";
                    }
                }, '-=.2');
                lastslide = slide;
                tl.reversed() ? tl.play() : console.log();
            }, tl.time() * 1000);

        }
    }
}

function updateSliderInfo(slide) {
    $('.slider .showslide').html($('.slider .slide' + slide).html());
}

$(document).ready(function () {
    slideTo(1);
});

$('.menuitem').hover(function () {
    menutl = gsap.timeline({ paused: true, reversed: true });
    myItem = jQuery(this).find("span");
    menutl.fromTo(myItem, .3, { width: 0, left: '50%' }, { width: '100%', left: 0 });
    lastItem = this;
    menutl.reversed() ? menutl.play() : console.log();
}, function () {
    menutl.reversed() ? menutl.play() : menutl.reverse();
});

$('.page').hover(function () {
    menutl = gsap.timeline({ paused: true, reversed: true });
    myItem = jQuery(this).find("span");
    menutl.fromTo(myItem, .3, { width: 0, height: 0, left: '50%', top: '50%' }, { width: '200%', height: '200%', left: '-50%', top: '-50%' });
    lastItem = this;
    menutl.reversed() ? menutl.play() : console.log();
}, function () {
    menutl.reversed() ? menutl.play() : menutl.reverse();
});

