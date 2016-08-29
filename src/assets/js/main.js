import "./components/autocomplete.js";
import mobileNav from "./sections/nav/mobile-nav.js";
import activeSideNav from './sections/nav/current-secondary-nav';

(function($) {
    "use strict";
    mobileNav.interactions();
    activeSideNav.highlightNavItem();

    // getting specific lib using the loader module
    qg.glue.loader.init(function () {
        // code to execute after libs are loaded
    });
}(jQuery));


