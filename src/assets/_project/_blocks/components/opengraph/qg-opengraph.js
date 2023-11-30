(function ($) {
  'use strict';
  const fields = [
    { property: 'meta[property="og:title"]' },
    { property: 'meta[property="og:description"]' },
    { property: 'meta[property="og:url"]' },
    { property: 'meta[property="og:type"]' },
    { property: 'meta[property="og:image"]' },
    { property: 'meta[name="twitter:card"]' },
    { property: 'meta[name="twitter:title"]' },
    { property: 'meta[name="twitter:description"]' },
    { property: 'meta[name="twitter:image"]' },
  ];
  const openGraph = {
    init: function () {
      const graphImg = '/assets/v4/latest/images/coat-of-arms/coa-thumbnail.png';
      const descriptionMeta = $('meta[name="DCTERMS.description"]').attr('content', '');
      $.each(fields, function (key, val) {
        const itemObj = $(val.property);
        if (itemObj.length > 0) {
          //check if template not already populated by Matrix or authorer
          if (itemObj.attr('content') === '' || itemObj.attr('content') === undefined) {
            if (itemObj.attr('property') === 'og:title' || itemObj.attr('name') === 'twitter:title') {
              itemObj.attr('content', document.title);
            }
            if (itemObj.attr('property') === 'og:description' || itemObj.attr('name') === 'twitter:description') {
              if (descriptionMeta.length > 0) {
                itemObj.attr('content', descriptionMeta);
              }
            }
            if (itemObj.attr('property') === 'og:image' || itemObj.attr('name') === 'twitter:image') {
              itemObj.attr('content', graphImg);
            }
            if (itemObj.attr('property') === 'og:url') {
              itemObj.attr('content', window.location.href);
            }
            if (itemObj.attr('property') === 'og:type') {
              itemObj.attr('content', 'article');
            }
            if (itemObj.attr('name') === 'twitter:card') {
              itemObj.attr('content', 'summary');
            }
          }
        } else {
          const head = $('head');
          head.append(itemObj);
        }
      });
    },
  };
  openGraph.init();
})(jQuery);
