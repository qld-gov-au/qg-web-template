if ($("script[src*='jquery.fancybox']").length === 0) {
  if ($('.qg-image-gallery').length > 0 || $('.qg-lightbox').length > 0 || $('.image-gallery').length > 0 || $('.cut-in').length > 0) {
    $('head').append($("<link rel='stylesheet' href='{{CDN}}/latest/lib/ext/fancybox/jquery.fancybox.min.css' type='text/css' media='screen' />"));
    $.getScript('{{CDN}}/latest/lib/ext/fancybox/jquery.fancybox.min.js', function () {
      // image gallery
      $('.qg-image-gallery, .image-gallery').each(function (index) {
        $(this).find('a').each(function () {
          if (!$(this).is('[data-fancybox]')) {
            $(this).attr('data-fancybox', `gallery-${index}`);
          }
          if (!$(this).is('[data-caption]')) {
            $(this).attr('data-caption', $(this).attr('title'));
          }
        });
      });
      // cut in images caption
      var cutInLink = $('.cut-in .caption a');
      $(cutInLink).attr('data-fancybox', 'images');

      $('[data-fancybox^="gallery"]').fancybox({
        buttons: ['thumbs', 'close'],
        mobile: {
          preventCaptionOverlap: false,
          idleTime: false,
          clickSlide: function (current, event) {
            return current.type === 'image' ? 'close' : 'close';
          },
        },
        baseTpl: `
        <div class="fancybox-container" role="dialog" tabindex="-1">
          <div class="fancybox-bg"></div>
          <div class="fancybox-inner">
                <div class="fancybox-infobar"><button data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left p-0" title="Previous"><span class="font-awesome fa-2x fa-caret-left"></span></button><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span><button data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right p-0" title="Next"><span class="font-awesome fa-2x fa-caret-right"></span></button></div>
                <div class="fancybox-toolbar">{{buttons}}</div>
                <div class="fancybox-navigation">{{arrows}}</div>
                <div class="fancybox-stage"></div>
                <div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>
          </div>
        </div>
      `,
        btnTpl: {
          arrowLeft: `
          <button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left p-0" title="{{PREV}}">
            <span class="font-awesome fa-2x fa-caret-left"></span>
          </button>
        `,
          arrowRight: `
           <button data-fancybox-next class="fancybox-button fancybox-button--arrow_right p-0" title="{{NEXT}}">
            <span class="font-awesome fa-2x fa-caret-right"></span>
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
}
