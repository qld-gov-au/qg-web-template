
(function () {
  var $quickExit = $('.qg-quick-exit');
  if ($quickExit.length > 0 && $('.qg-quick-exit__button').length > 0) {
    var quickExitInit = function () {
      var button = document.querySelector('.qg-quick-exit__button');
      var escapeSite = 'https://www.google.com.au/';
      var hotkey = 27;

      // add click handler
      button.onclick = function (e) {
        /*globals quickExit*/
        return quickExit(escapeSite);
      };

      // load a plugin only on IE browser to support position:sticky
      if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        $.getScript('{{CDN}}/latest/lib/ext/stickyfilljs/dist/stickyfill.min.js', function () {
          /*global Stickyfill*/
          console.log('loaded stickyfill');
          Stickyfill.add($quickExit);
        });
      }

      // add hotkey trigger
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === hotkey) {
          quickExit(escapeSite);

          if (e) {
            // stop escape from cancelling redirect
            e.preventDefault();

            // early IEs don't have preventDefault
            e.returnValue = false;
          }

          return false;
        }
      });
    };
    window.quickExit = function (site) {
      // then redirect to a non-sensitive site
      window.open(site, '_blank');
      window.location.replace(site);

      // remove as much info from URL as possible
      if (window.history) {
        try {
          window.history.replaceState({}, '', '/');
        } catch (e) {

        }
      }

      // disable default event handling
      return false;
    };
    quickExitInit();
  }
})();
