import $ from "jquery"
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'


export default function(){
    const $header = $(".header")
    const $hideOnScroll = $(".hide-on-scroll")
    const $stage = $(".stage")
    const $hamburger = $(".hamburger")
    const $secondaryNav = $(".nav--secondary")
    const $main = $("main")
    const $footer = $("footer")

    let duration = 0
    let lastScrollTop = 0;

    /**
     * HAMBURGER
     */

    $hamburger.on("click", () => {
        console.log("CLICK")
        $hamburger.toggleClass("is-active")
        $secondaryNav.toggleClass("is-active")
        $main.toggleClass("nav-is-active")
        $footer.toggleClass("nav-is-active")
    })

    /**
     * HEADER ON SCROLL
     */
    $(window).on("scroll", () => {
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
            if(st + 100 > lastScrollTop){
                $header.addClass("is-shrinked")
                $hideOnScroll.fadeOut()
            }
        } else {
            $header.removeClass("is-shrinked")
            $hideOnScroll.fadeIn()
        }
        lastScrollTop = st;
    })

    if($stage.length != 0){
        duration = $("body").height() - $(".stage").offset().top
    } else{
        duration = $("body").height()
    }



    /**
     * SCROLLMAGIC CONTROLLER
     */
    const controller = new ScrollMagic.Controller()



    /**
     * BLUR BODY BACKGROUND IMAGE ON SCROLL
     */
    if(document.body.classList.contains("page--home")){
        new ScrollMagic.Scene({
            triggerElement: "#why-ynfinite",
            duration: `${duration}px`,
            offset: "0"
        })
            // .setTween(fadeIn)
            .addTo(controller)
            .setClassToggle(".image--blurry", "animate")
            
    } else if(document.body.classList.contains("page--company")){
        console.log("COMPANY PAGE")
        new ScrollMagic.Scene({
            triggerElement: ".section-our-mission",
            duration: `${duration}px`,
            offset: "0"
        })
            .addTo(controller)
            .setClassToggle(".image--blurry", "animate")
    }






    const pricingBoxes = document.querySelectorAll("#pricing .box, .section-cta .box")
    const heights = []


    if(pricingBoxes){
        
        Array.prototype.slice.call(pricingBoxes).map( box => {
            heights.push(box.clientHeight)
        })
    
        if(heights.length > 0){
            const largest = heights.reduce( (x,y) => {
                return (x > y) ? x : y;
            })
        
            pricingBoxes.forEach( box => {
                box.style.height = `${largest}px`
            })
        }
    }
    
    


}