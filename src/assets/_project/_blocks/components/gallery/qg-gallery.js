import load from 'loadjs';
if ($('.qg-image-gallery')) {
  load(['{{CDN}}/assets/v3.1/latest/lib/ext/fancybox/jquery.fancybox.min.css', '{{CDN}}/assets/v3.1/latest/lib/ext/fancybox/jquery.fancybox.min.js'], function () {
    $('[data-fancybox^="gallery"]').fancybox({
      buttons: ['thumbs', 'close'],
      baseTpl: `
        <div class="fancybox-container" role="dialog" tabindex="-1">
          <div class="fancybox-bg"></div>
          <div class="fancybox-inner">
                <div class="fancybox-infobar"><button data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left" title="Previous"><div><span class="font-awesome fa-2x fa-caret-left"></span></div></button><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span><button data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right" title="Next"><div><span class="font-awesome fa-2x fa-caret-right"></span></div></button></div>
                <div class="fancybox-toolbar">{{buttons}}</div>
                <div class="fancybox-navigation">{{arrows}}</div>
                <div class="fancybox-stage"></div>
                <div class="fancybox-caption"></div>
          </div>
        </div>
      `,
      btnTpl: {
        arrowLeft: `
          <button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">
            <div><span class="font-awesome fa-2x fa-caret-left"></span></div>
          </button>
        `,
        arrowRight: `
           <button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">
             <div><span class="font-awesome fa-2x fa-caret-right"></span></div>
          </button>
        `,
      },
      caption: function (instance, item) {
        var caption = $(this).data('caption') || '';

        if (item.type === 'image') {
          caption = '<div class="fancybox-border">' + (caption.length ? caption : '') + '</div>';
        }
        return caption;
      },
    });
  });
}

