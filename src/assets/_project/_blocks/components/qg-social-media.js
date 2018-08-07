/*global jQuery*/
(function ($) {
  'use strict';

  var twitter = {
    ele: $('.qg-twitter-updates') || '',
    init: function () {
      if (twitter.ele.length > 0) {
        var account = twitter.ele.data('account') || '';
        var list = twitter.ele.data('list') || '';
        var widgetid = twitter.ele.data('widgetid') || '';
        var num = twitter.ele.data('num') || 5;

        if (account.length > 0 && widgetid.length > 0) {
          twitter.generateIframe(account, list, widgetid, num);
        } else {
          console.log('data-account/data-widgetid attribute is empty');
        }
      }
    },
    generateIframe: function (account, list, widgetid, num) {
      var html = '<div><a class="twitter-timeline" href="https://twitter.com/' + account + (list.length > 0 ? '/' + list : '') + '" data-widget-id="' + widgetid + '" data-tweet-limit="' + num + '" data-chrome="transparent noheader noborders nofooter" data-link-color="#546A9A">Tweets from @' + account + (list.length > 0 ? '/' + list : '') + '</a></div>';
      twitter.ele.append(html);
      twitter.runScript();
    },
    runScript: function () {
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
