/*global jQuery*/
(function ($) {
  'use strict';

  var twitter = {
    ele: $('.twitter-updates') || '',
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
  var facebook = {
    ele: $('.facebook-updates'),
    init: function () {
      if (this.ele.length > 0) {
        var fbUrl = this.ele.attr('data-href');
        var fbhtml = '<div class="fb-page" data-href="' + fbUrl + '" data-tabs="timeline" data-small-header="true" data-width="10000"  data-adapt-container-width="true" data-show-facepile="false"></div>';
        this.ele.append(fbhtml);
        this.facebookSdkScript();
        this.adjustWidth();
      }
    },
    facebookSdkScript: function () {
      var createScript;
      var fjs = document.getElementsByTagName('script')[0];
      createScript = document.createElement('script');
      createScript.id = 'facebook-jssdk';
      createScript.src = '//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8';
      fjs.parentNode.insertBefore(createScript, fjs);
    },
    adjustWidth: function () {
      var timeVar;
      $(window).on('resize', function () {
        clearTimeout(timeVar);
        timeVar = setTimeout(doneResizing, 200);
      });
      var doneResizing = function () {
        $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
        window.FB.XFBML.parse();
      };
    },
  };
  var instagram = {
    ele: $('.instagram-updates'),
    init: function () {
      if (this.ele.length > 0) {
        var self = this;
        var accountUrl = 'https://www.instagram.com/' + this.ele.attr('data-username');
        var num = this.ele.attr('data-num') || 4;
        $.getJSON('https://query.yahooapis.com/v1/public/yql', {
          q: 'select * from json where url="' + accountUrl + '/?__a=1"',
          format: 'json',
        }, function (data) {
          if (data.query.results) {
            var items = data.query.results.json.user.media.nodes;
            self.ele.append('<ul class="group"></ul>');
            items.slice(0, num).forEach(function (item) {
              var html = '<li class="instagram-feed"><a class="lightbox" href="' + item.display_src + '" title="' + item.caption + '"><img src="' + item.thumbnail_src + '" alt=""></a></li>';
              self.ele.find('ul').append(html);
            });
            $('a.lightbox').butterfly({
              contentDefaultWidth: '100%',
              contentDefaultHeight: '100%',
              mediaMaxWidth: '100%',
              mediaMaxHeight: '100%',
            });
          }
        });
      }
    },
  };
  twitter.init();
  facebook.init();
  instagram.init();
}(jQuery));
