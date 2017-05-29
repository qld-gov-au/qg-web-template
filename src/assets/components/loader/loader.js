var componentsLoader = (function ($) {
  function loadFiles () {
    if (('.qg-slider').length > 0) {
      asyncCSS(['node_modules/slick-carousel/slick/slick.css'], () => {
        console.log('all css loaded');
        asyncJS('src/index.js').done(function (script, textStatus) {
          console.log(textStatus);
        });
      }, true);
    }
  }
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
