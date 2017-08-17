const processXML = function (url, methodType, callback) {
  return $.ajax({
    url: url,
    method: methodType,
    contentType: 'text/xml',
    dataType: 'text',
  });
};

module.exports = {
  processXML: processXML,
};
