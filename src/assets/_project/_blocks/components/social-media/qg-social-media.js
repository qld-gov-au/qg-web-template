(function ($) {
  'use strict';

  var qgSocialMedia = {
    config: {
      $twitterEl: $('.qg-twitter-updates'),
      $facebookEl: $('.qg-facebook-updates'),
    },
    init: function () {
      // twitter and facebook SDK scripts
      let twitterSdkScript = 'platform.twitter.com/widgets.js';
      let facebookSdkScript = 'connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0';
      // check if twitter SDK script is not already on the page then load
      if (this.config.$twitterEl.length > 0 && $('script[src*="' + twitterSdkScript + '"]').length <= 0) {
        this.loadScript('script', 'twitter-wjs', twitterSdkScript);
      }
      // check if facebook SDK script is not already on the page then load
      if (this.config.$facebookEl.length > 0 && $('script[src*="' + facebookSdkScript + '"]').length <= 0) {
        this.config.$facebookEl.each(function () {
          var curr = $(this);
          var fbUrl = curr.attr('data-href');
          var fbhtml = '<div class="fb-page" data-href="' + fbUrl + '" data-tabs="timeline" data-small-header="true" data-width="10000"  data-adapt-container-width="true" data-show-facepile="false"></div>';
          curr.append(fbhtml);
        });
        this.loadScript('script', 'facebook-wjs', facebookSdkScript);
      }
    },
    // load script function creates a tag and append on the page
    // tag -> passed element
    // sdkUrl -> URL of the element
    loadScript: function (tag, id, sdkUrl) {
      var createEl;
      var fjs = document.getElementsByTagName(tag)[0];
      var p = /^http:/.test(document.location) ? 'http' : 'https';
      if (!document.getElementById(id)) {
        createEl = document.createElement(tag);
        createEl.id = id;
        createEl.src = `${p}://${sdkUrl}`;
        fjs.parentNode.insertBefore(createEl, fjs);
      }
    },
  };
  // initialize the social media
  qgSocialMedia.init();
}(jQuery));

