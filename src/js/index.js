import "./../sass/style.sass";
import 'lazysizes';
import counter from "./components/counter";
// import misc from "./components/misc"
// import navToggle from "./components/navToggle"
// import slider from "./components/slider"
// import scrollspy from "./components/scrollspy"
import scrollEvents from "./components/scrollEvents"

(function() {
    scrollEvents();
    counter();
    // navToggle();
    // counter();
    // slider();
    // misc();
    // scrollspy();
})()