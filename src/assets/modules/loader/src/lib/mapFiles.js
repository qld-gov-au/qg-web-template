import loadJS from '../lib/script';
import { loadCSS } from '../lib/loadCSS';

export function modulesLoader () {
  function dynamicLoading (modulesPath, filesMap) {
    $.each(filesMap, function (key, value) {
      function handleJs () {
        //TODO - Any number of files in sequence
        loadJS(value.js[0], function () {
          if (value.js[1]) {
            loadJS(value.js[1], function () {
              if (value.js[2]) {
                loadJS(value.js[2], function () {
                  if (value.js[3]) { loadJS(value.js[3]); }
                });
              }
            });
          }
        });
      }
      if ($(value.identifier).length > 0 || $("[data-role='" + value.identifier + "']").length > 0) {
        if (value.css) {
          let stylesheet = loadCSS(value.css);
          onloadCSS(stylesheet, function () { handleJs(); });
        } else {
          handleJs();
        }
      }
    });
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
    dynamicLoading: dynamicLoading,
    onloadCSS: onloadCSS,
  };
}

