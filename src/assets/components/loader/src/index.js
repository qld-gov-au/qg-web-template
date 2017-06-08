var componentsLoader = (function ($) {
  function loadFiles () {
    if (('.qg-slider').length > 0) {
      console.log('Found slider content');
      asyncJS('/assets/v3/components/misc/misc.js').done(function (script, textStatus) {
        console.log(`Loaded misc.js`);
        asyncJS('/assets/v3/components/slider/slider.js').done(function (script, textStatus) {
          console.log(textStatus);
        });
      });
    }
  }
  // load css and then js function
  /*function loadFiles () {
    if (('.qg-xml-content').length > 0) {
      console.log('xml content is there in the page');
      asyncCSS(['/assets/v3/js/qg-main.js'], () => {
        console.log('all css loaded');
        asyncJS('/assets/v3/js/qg-main.js').done(function (script, textStatus) {
          console.log(textStatus);
        });
      }, true);
    }
  }*/
  function asyncJS (url, options) {
    options = $.extend(options || {}, {
      dataType: 'script',
      cache: true,
      url: url,
    });
    return jQuery.ajax(options);
  }
  function asyncCSS (urls, callback, nocache) {
    if (typeof nocache === 'undefined') nocache = false;
    $.when.apply($,
      $.map(urls, function (url) {
        if (nocache) url += '?_ts=' + new Date().getTime();
        return $.get(url, function () {
          $('<link>', {rel: 'stylesheet', type: 'text/css', 'href': url}).appendTo('head');
        });
      })
    ).then(function () {
      if (typeof callback === 'function') callback();
    });
  }

  return {
    loadFiles: loadFiles,
  };
})(jQuery);

componentsLoader.loadFiles();
