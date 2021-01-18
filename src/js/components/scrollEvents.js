import $ from "jquery"
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


export default function() {

    const controller = new ScrollMagic.Controller();

    $(".aos").each(function() {
        const scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: "onEnter",
                offset: "200"
            })
            .setClassToggle(this, "is-visible")
            .addTo(controller)
            // .addIndicators()
    })

}