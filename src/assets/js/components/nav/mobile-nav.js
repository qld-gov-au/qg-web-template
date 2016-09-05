'use strict';

import utils from '../global/utils.js';

// TODO - remove specific show hide function and make it use the general show hide in utils
var mobileNav = (function () {
    var $sitenav = $('#qg-site-nav'),
        $br = $('#qg-breadcrumb'),
        $tools = $('.qg-tools');

    function interactions() {
        $('#qg-show-menu').on('click', function () {
            $br.add($sitenav).slideToggle(200);
        });
        $('#qg-show-search').on('click', function () {
            $('#qg-search-form').toggleClass('qg-visually-hidden-md', 1500);
        });
        $(window).resize(function () {
            if ($(window).width() < utils.breakpoints.bsSm) {
                // any code
            } else if ($(window).width() >= utils.breakpoints.bsSm && $(window).width() <= utils.breakpoints.bsMd) {
                if ($tools.is(':visible')) {
                    $tools.hide(1);
                }
            } else {
                if ($sitenav.is(':hidden')) {
                    $sitenav.slideToggle(1);
                    $br.slideToggle(1);
                }
                if ($tools.is(':hidden')) {
                    $tools.slideToggle(1);
                }
            }
        });
    }
    return {
        interactions: interactions
    };
})();

module.exports = mobileNav;