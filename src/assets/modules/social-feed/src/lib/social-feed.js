/*global jQuery*/
'use strict';
const twitter = {
  ele: $('.twitter-updates') || '',
  init: function () {
    if (twitter.ele.length > 0) {
      const account = twitter.ele.data('account') || '';
      const list = twitter.ele.data('list') || '';
      const widgetid = twitter.ele.data('widgetid') || '';
      const num = twitter.ele.data('num') || 5;

      if (account.length > 0 && widgetid.length > 0) {
        twitter.generateIframe(account, list, widgetid, num);
      } else {
        console.log('data-account/data-widgetid attribute is empty');
      }
    }
  },
  generateIframe: function (account, list, widgetid, num) {
    const html = '<div style="padding: 1em 1em 0"><a class="twitter-timeline" href="https://twitter.com/' + account + (list.length > 0 ? '/' + list : '') + '" data-widget-id="' + widgetid + '" data-tweet-limit="' + num + '" data-chrome="transparent noheader noborders nofooter" data-link-color="#546A9A">Tweets from @' + account + (list.length > 0 ? '/' + list : '') + '</a></div>';
    twitter.ele.append(html);
    twitter.runScript();
  },
  runScript: function () {
    return !(function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      const p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs'));
  },

};

const facebook = {
  ele: $('.facebook-updates'),
  init: function () {
    if (!document.getElementById('facebook-jssdk') && this.ele.length > 0) {
      console.log('facebook-updates');
      let fbUrl = this.ele.attr('data-href');
      this.ele.append('<div class=\'fb-page\' data-href=' + fbUrl + ' data-tabs=\'timeline\' data-small-header=\'true\' data-width=\'10000\'  data-adapt-container-width=\'true\' data-show-facepile=\'false\'></div>');
      this.facebookSdkScript();
      this.adjustWidth();
    }
  },
  facebookSdkScript: function () {
    let createScript;
    const fjs = document.getElementsByTagName('script')[0];
    createScript = document.createElement('script');
    createScript.id = 'facebook-jssdk';
    createScript.src = '//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8';
    fjs.parentNode.insertBefore(createScript, fjs);
  },
  adjustWidth: function () {
    let timeVar;
    $(window).on('resize', function () {
      clearTimeout(timeVar);
      timeVar = setTimeout(doneResizing, 200);
    });
    const doneResizing = function () {
      $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
      window.FB.XFBML.parse();
    };
  },
};

module.exports = {
  twitter: twitter,
  facebook: facebook,
};
