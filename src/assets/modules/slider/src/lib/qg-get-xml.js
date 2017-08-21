const processXML = function (url, callback) {
  return $.ajax({
    url: url,
    method: 'GET',
    contentType: 'text/xml',
    dataType: 'text',
  });
};

module.exports = {
  processXML: processXML,
};
