(function ($) {
    'use strict';
    const fields = {
        $ogTitle: $('meta[property="og:title"]'),
        $ogDescrip: $('meta[property="og:description"]'),
        $ogUrl: $('meta[property="og:url"]')
    };
    const openGraph = {
        init: function () {
            if (fields.$ogTitle.length && fields.$ogDescrip.length && fields.$ogUrl.length) {
                fields.$ogTitle.attr('content', document.title);
                fields.$ogDescrip.attr('content', $('meta[name="DCTERMS.description"]').attr('content'));
                fields.$ogUrl.attr('content', window.location.href);
            }
        }
    };
    openGraph.init();
  }(jQuery));