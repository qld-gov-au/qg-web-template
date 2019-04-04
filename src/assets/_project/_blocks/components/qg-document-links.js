(function ($) {
  'use strict';

  // Use uppercase here, as not all uses are case sensitive
  var documentTypes = 'PDF|DOC|DOCX|XLS|XLSX|RTF';
  // onready
  $(document).ready(function () {
    $('a', '#qg-primary-content, #qg-secondary-content').each(function () {
      var $this = $(this);
      var linkText = $this.text();
      var dtRegex = new RegExp(documentTypes, 'i');
      if (dtRegex.test($this.attr('href'))) {
        if (dtRegex.test(linkText)) {
          if (/\.\d*?/.test(linkText) && /KB/.test(linkText)) {
            var extractSize = new RegExp('\\((?:' + documentTypes + '),?\\s+[0-9\\.]+\\s*[KM]B\\)', 'i');
            $(this).find('.meta').empty().append(linkText.match(extractSize)[0].replace(/(\.\d*)/gi, ''));
          }
        } else {
          linkText = $this.attr('href').replace(/^.*\.(.+)$/, '$1').toUpperCase();
          $this.append(' <span class="meta">(' + linkText + ')</span>');
        }
      }
    });
  });
}(jQuery));
