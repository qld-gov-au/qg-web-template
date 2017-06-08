/* plugins to have a better cross compatible loading script in a more robust way from IE7+ onwards, if the support for IE7 and IE8 is discontinued at some point then promise based custom script can be used with some polyfills to support IE9+.*/
import loadJS from './lib/script.js';
import { loadCSS } from './lib/loadCSS.js';

/*TODO Automate loading process*/
/*TODO files loading inline documentation */
/*const buildPath = '/assets/v3/components/';

 const mapTo = {
 slider: {
 identifier: '.qg-slider',
 css: [`${buildPath}+slider/styles/slider.css`],
 js: [`${buildPath}+misc/misc.js`, `${buildPath}+slider/slider.js`],
 },
 };

 $.each(mapTo, function (key, value) {
 console.log(key[value]);
 });*/

var componentsLoader = (function ($) {
  function check () {
    if ($('[data-role="qg-slider"]').length > 0) {
      var stylesheet = loadCSS('/assets/v3/components/slider/styles/slider.css');
      onloadCSS(stylesheet, function () {
        loadJS('/assets/v3/components/misc/misc.js', function () {
          loadJS('/assets/v3/components/slider/slider.js');
        });
      });
    }
    if ($('[data-role="qg-social-feed"]').length > 0) {
      loadJS('/assets/v3/components/social-feed/social-feed.js');
    }
  }
  function onloadCSS (ss, callback) {
    var called;
    function newcb () {
      if (!called && callback) {
        called = true;
        callback.call(ss);
      }
    }
    if (ss.addEventListener) {
      ss.addEventListener('load', newcb);
    }
    if (ss.attachEvent) {
      ss.attachEvent('onload', newcb);
    }
    if ('isApplicationInstalled' in navigator && 'onloadcssdefined' in ss) {
      ss.onloadcssdefined(newcb);
    }
  }
  return {
    check: check,
  };
})(jQuery);

componentsLoader.check();

