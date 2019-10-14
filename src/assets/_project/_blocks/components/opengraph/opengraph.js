(function ($) {
    'use strict';
    const fields = [
        {property: 'meta[property="og:title"]'},
        {property: 'meta[property="og:description"]'},
        {property: 'meta[property="og:url"]'},
        {property: 'meta[name="twitter:card"]'},
        {property: 'meta[name="twitter:site"]'},
        {property: 'meta[name="twitter:creator"]'}
    ];
    const openGraph = {
        init: function () {
            $.each(fields, function (key, val) {
                let itemObj = $(val.property);
                if (itemObj.length > 0) {
                    if (itemObj.attr('content') === '' || itemObj.attr('content') === undefined) {
                        if (itemObj.attr('property') === 'og:title') {
                            itemObj.attr('content', document.title);
                            return true;
                        }
                        if (itemObj.attr('property') === 'og:url') {
                            itemObj.attr('content', window.location.href);
                            return true;
                        }
                        if (itemObj.attr('property') === 'og:description') {
                            let descriptionMeta = $('meta[name="DCTERMS.description"]').attr('content');
                            itemObj.attr('content', descriptionMeta);
                            return true;
                        }
                    }
                }
            });
        }
    };
    openGraph.init();
})(jQuery);