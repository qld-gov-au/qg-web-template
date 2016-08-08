"use strict";

import helpers from "../helpers.js";

var mobileNav = (function () {
    var $sitenav = $("#qg-site-nav");
    var $br = $("#qg-breadcrumb>.qg-inner");
    var $tools = $(".qg-tools");

    function interactions() {
        $("#qg-show-menu").on("click" , function () {
            $("#qg-breadcrumb>.qg-inner , #qg-site-nav").slideToggle(200);
        });
        $("#qg-show-search").on("click" , function () {
            $("#qg-search-form").toggleClass("qg-visually-hidden-md", 1500);
        });
        $(window).resize(function () {
            if ($(window).width() < helpers.breakpoints.bsSm) {}
            else if ($(window).width() >= helpers.breakpoints.bsSm &&  $(window).width() <= helpers.breakpoints.bsMd) {
                if($tools.is(":visible")){
                    $tools.hide(1);
                }
            }
            else  {
                if($sitenav.is(":hidden")){
                    $sitenav.slideToggle(1);
                    $br.slideToggle(1);
                }
                if($tools.is(":hidden")){
                    $tools.slideToggle(1);
                }
            }
        });
    }
    return {
        interactions : interactions
    }
})();

module.exports = mobileNav;