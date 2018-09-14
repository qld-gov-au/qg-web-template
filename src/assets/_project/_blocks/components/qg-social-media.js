/*global jQuery*/
(function ($) {
  'use strict';
  var twitter = {
    ele: $('.qg-twitter-updates') || '',
    init: function () {
      if (twitter.ele.length > 0) {
        twitter.loadScript();
      }
    },
    loadScript: function () {
      return !(function (d, s, id) {
        var js;
        var fjs = d.getElementsByTagName(s)[0];
        var p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = p + '://platform.twitter.com/widgets.js';
          fjs.parentNode.insertBefore(js, fjs);
        }
      }(document, 'script', 'twitter-wjs'));
    },

  };
  twitter.init();
}(jQuery));
