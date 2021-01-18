import $ from "jquery"
import counterup from "counterup2"
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
// import 'script-loader!ScrollMagic';



export default function() {
    const controller = new ScrollMagic.Controller();
    const $counters = $('.counter__number')

    if (document.querySelector("#counter")) {
        const locationsScene = new ScrollMagic.Scene({
                triggerElement: "#counter",
                triggerHook: "onEnter",
                offset: "200"
            })
            .addTo(controller);

        locationsScene.on("enter", function() {
            console.log("ENTERED")
            $counters.each(function(ignore, counter) {
                counterup(counter, {
                    duration: 1000,
                    delay: 16,
                    beginAt: 0
                });
            });
        })
    }


}