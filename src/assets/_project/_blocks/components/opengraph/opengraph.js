(function ($) {
    'use strict';
    const fields = [
        {property: $('meta[property="og:title"]'), content: 'document.title'},
        {property: $('meta[property="og:description"]'), content: $('meta[name="DCTERMS.description"]').attr('content')},
        {property: $('meta[property="og:url"]'), content: 'window.location.href'}
    ];
    const openGraph = {
        init: function () {
            $(fields).each(function (val) {
                if ($(val.property).length && $(val.property).attr('content') === '') {
                    $(val.property).attr(val.content);
                }
            });
        }
    };
    openGraph.init();
  }(jQuery));