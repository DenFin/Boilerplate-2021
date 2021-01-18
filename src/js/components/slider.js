import $ from "jquery"
import slick from "slick-carousel"

export default function(){

    const $sliderAdvantages = $(".slick-slider--advantages")
    const $sliderCenterMode = $(".slick-slider--center-mode")
    const $sliderReasons = $(".slick-slider--reasons")
    const $sliderReasonsTabs = $(".slick-slider--reasons-tabs")
    const $sliderPartners = $(".slick-slider--partners")
    const $sliderPrinciplesTabs = $(".slick-slider--principles-tabs")
    const $sliderPrinciples = $(".slick-slider--principles")
    const $sliderCases = $(".slick-slider--cases")

    /**
     * SLIDER ADVANTAGES
     */
    $sliderAdvantages.slick({
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
            }
        ]
    })

    $sliderCases.slick({
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                    arrows: false,
                }
            }
        ]
    })

    // $sliderAdvantages.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     $sliderAdvantages.slick('slickSetOption','adaptiveHeight', true, true);
    // })

    // $sliderCases.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     $sliderAdvantages.slick('slickSetOption','adaptiveHeight', true, true);
    // })


    /**
     * SLIDER CENTERMODE
     */
    $sliderCenterMode.slick({

        speed: 450,
        arrows: false,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '300px',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    })

    $sliderCenterMode.on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");
        if ($sliderCenterMode.slick('slickCurrentSlide') !== index) {
            $sliderCenterMode.slick('slickGoTo', index);
        }
      });

    $sliderCenterMode.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        const $originalSlides = $(".slick-slider--center-mode .slick-slide")
        const slideCount = $originalSlides.length - 1
        const nextSlideIsFirst = currentSlide === slideCount
        const nextSlideIsLast  = nextSlide === slideCount
        const $activeSlide = $('.slick-slide.slick-active')
        if (nextSlideIsFirst) {
          $activeSlide.next('.slick-slide').addClass('slick-clone-current');
        }
        if (nextSlideIsLast) {
          $activeSlide.prev('.slick-slide').addClass('slick-clone-current');
        }
        $sliderCenterMode.slick('slickSetOption','adaptiveHeight', true, true);
    })
      
    // Remove your custom active class active slide finished
    $sliderCenterMode.on('afterChange', function(e, slick, currentSlide, nextSlide) {
        $('.slick-clone-current').removeClass('slick-clone-current');
    })
   

    /**
     * REASONS CAROUSEL
     */
    $sliderReasonsTabs.slick({
        asNavFor: ".slick-slider--reasons",
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            }
        ]
    })

    $(window).on('resize', function(){
        $sliderReasonsTabs.slick('resize')
    })

    $sliderReasons.slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                    arrows: false,
                }
            }
        ]
    })

    // Sync carousel and nav
    $sliderReasons.on('afterChange', function(event, slick, currentSlide) {
        $sliderReasonsTabs.slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slick-slider--reasons-tabs .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slick-slider--reasons-tabs .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $sliderReasonsTabs.on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $sliderReasons.slick('slickGoTo', goToSingleSlide);
    });


    /**
     * SLIDER PARTNERS
     */
    $sliderPartners.slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })


    /**
     * SLIDER PRINCIPLES
     */
    $sliderPrinciplesTabs.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: ".slick-slider--principles",
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                    arrows: false,
            }
        }]
    })

    $sliderPrinciples.slick({
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                    arrows: false,
                    } 
            }
        ]
    })


}