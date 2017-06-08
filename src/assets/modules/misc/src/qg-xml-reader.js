/*globals qg*/
(function ($, qg) {
  'use strict';
  qg.modules.processXML = function (url, methodType, callback) {
    return $.ajax({
      url: url,
      method: methodType,
      contentType: 'text/xml',
      dataType: 'text',
    });
  };
}(jQuery, qg));
