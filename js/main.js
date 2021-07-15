$(function () {
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
            $('.header__box-wrapp').toggleClass('header__box-wrapp__active'),
            $('body').toggleClass('look'),
            $('.header').toggleClass('header__active')
    });

    $('.services__slaider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    let $status = $('.pagingInfo');
    let $slickElement = $('.about__slaider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        var test = slick.slideCount;

        $status.text(i + ' /' + test);
    });

    $('.about__slaider').slick({
        arrows: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.help__slaider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 753,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.pay__slaider-link').magnificPopup({
        type: 'inline',
        focus: '#name'
    });

    $('.services__content-btn').magnificPopup({
        type: 'inline',
        focus: '#name'
    });



    window.addEventListener("resize", function () {
        if (window.innerWidth <= 620) {
            $('.pay__wrapp-slaider').not('.slick-initialized').slick({
                infinite: true,
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } else {
            $('.pay__wrapp-slaider').filter('.slick-initialized').slick('unslick');
        }
    });



});