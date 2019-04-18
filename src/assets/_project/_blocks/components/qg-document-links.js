(function ($) {
  'use strict';
  let linkType = '.PDF$|.DOC$|.DOCX$|.XLS$|.XLSX$|.RTF$';
  let contentType = 'PDF|DOC|DOCX|XLS|XLSX|RTF';
  // onready
  $(document).ready(function () {
    $('a', '#qg-primary-content, #qg-secondary-content').each(function () {
      let $this = $(this);
      let linkRegex = new RegExp(linkType, 'i');
      let contentRegex = new RegExp(contentType, 'i');
      if (linkRegex.test($this.attr('href'))) {
        let linkText = $this.text();
        if (contentRegex.test(linkText)) {
          if (/\.\d*?/.test(linkText) && /KB/.test(linkText)) {
            let extractSize = new RegExp('\\((?:' + contentType.toUpperCase() + '),?\\s+[0-9\\.]+\\s*[KM]B\\)', 'i');
            linkText.match(extractSize) ? $(this).find('.meta').empty().append(linkText.match(extractSize)[0].toUpperCase().replace(/(\.\d*)/gi, '')) : '';
          }
        } else {
          linkText = $this.attr('href').replace(/^.*\.(.+)$/, '$1').toUpperCase();
          $this.append(' <span class="meta">(' + linkText + ')</span>');
        }
      }
    });
  });
}(jQuery));

