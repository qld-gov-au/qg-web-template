/*
'use strict';

import utils from '../global/utils.js';

// TODO - remove specific show hide function and make it use the general show hide in utils

var mobileNav = (function () {
  var siteNav = '#qg-site-nav',
    br = '#qg-breadcrumb',
    tools = '.qg-tools';

  function interactions () {
    $(document).on('click', '#qg-show-menu', function () {
      $(br).add($(siteNav)).slideToggle(200);
    });
    $(document).on('click', '#qg-show-search', function () {
      $('#qg-search-form').toggleClass('qg-visually-hidden-md', 1500);
    });
    $(window).resize(function () {
      if ($(window).width() < utils.breakpoints.bsSm) {
        // any code
      } else if ($(window).width() >= utils.breakpoints.bsSm && $(window).width() <= utils.breakpoints.bsMd) {
        if ($(tools).is(':visible')) {
          $(tools).hide(1);
        }
      } else {
        if ($(siteNav).is(':hidden')) {
          $(siteNav).slideToggle(1);
          $(br).slideToggle(1);
        }
        if ($(tools).is(':hidden')) {
          $(tools).slideToggle(1);
        }
      }
    });
  }
  return {
    interactions: interactions
  };
})();

module.exports = mobileNav;
*/