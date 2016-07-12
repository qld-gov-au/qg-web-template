var mobileNav = require("./sections/nav/mobile-nav.js");
var activeSideNav = require("./sections/nav/current-secondary-nav.js");


(function($) {
    "use strict";

    mobileNav();
    activeSideNav();
    
    // getting specific lib using the loader module
    qg.glue.loader.init(function () {
        // code to execute after libs are loaded
    });
    
}(jQuery));
