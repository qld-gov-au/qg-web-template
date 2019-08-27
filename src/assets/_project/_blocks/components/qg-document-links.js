(function ($) {
  'use strict';
  let linkType = '.PDF$|.DOC$|.DOCX$|.XLS$|.XLSX$|.RTF$';
  let contentType = 'PDF|DOC|DOCX|XLS|XLSX|RTF';
  // onready
  $(document).ready(function () {
    $('a', '#qg-primary-content, #qg-secondary-content').each(function () {
      let $this = $(this);
      let linkRegex = new RegExp(linkType, 'i');
      let contentRegex = new RegExp(contentType);
      let currContent = $this.text();
      if (linkRegex.test($this.attr('href'))) {
        if (/\.\d*?/.test(currContent)) {
          console.log('found dcimals', currContent);
          let extractSize = new RegExp('\\((?:' + contentType.toUpperCase() + '),?\\s+[0-9\\.]+\\s*[KM]B\\)', 'i');
          currContent.match(extractSize) ? $(this).find('.meta').empty().append(currContent.match(extractSize)[0].toUpperCase().replace(/(\.\d*)/gi, '')) : '';
        } else if (!contentRegex.test(currContent)) {
          let linkText = $this.attr('href').replace(/^.*\.(.+)$/, '$1').toUpperCase();
          $this.append(' <span class="meta">(' + linkText + ')</span>');
        }
      }
    });
  });
}(jQuery));

