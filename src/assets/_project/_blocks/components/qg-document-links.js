(function ($) {
  'use strict';

  // Use uppercase here, as not all uses are case sensitive
  var documentTypes = 'PDF|DOC|DOCX|XLS|XLSX|RTF';

  // onready
  $(document).ready(function () {
    // find links in content and asides that are missing metadata markup
    $('a', '#qg-primary-content, #qg-secondary-content').filter(function () {
      var documentLink = new RegExp('\\.(' + documentTypes + ')$', 'i').test(this.href);

      if (documentLink) {
        // add document link class
        // has meta markup?
        return $(this).addClass('download').find('.meta').length === 0;
      }

      return false;
    }).each(function () {
      var $this = $(this),
        linkText = $this.text(),
        title,
        meta
        ;

      // has metadata without markup?
      if (new RegExp('\\((?:' + documentTypes + '),?\\s+[0-9\\.]+\\s*[KM]B\\)$', 'i').test(linkText)) {
        meta = $('<span class="meta">' + linkText.replace(new RegExp('^.*\\((' + documentTypes + '),?\\s+([0-9\\.]+)\\s*([KM]B)\\)$'), '($1, $2$3)') + '</span>');
        title = $this.contents().eq(-1);
        title[ 0 ].data = title[ 0 ].data.replace(new RegExp('\\s+\\((?:' + documentTypes + '),?\\s+[0-9\\.]+\\s*[KM]B\\)$'), '');
        $this.wrapInner('<span class="title"/>');
        $this.append(' ');
        $this.append(meta);
      } else {
        // get file type from extension
        linkText = $this.attr('href').replace(/^.*\.(.+)$/, '$1').toUpperCase();
        $this.wrapInner('<span class="title"/>').append(' <span class="meta">(' + linkText + ')</span>');
      }
    });
  });
}(jQuery));
