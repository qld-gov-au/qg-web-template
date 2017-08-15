const processXML = function (url, methodType, callback) {
  console.log('url', url);
  console.log('methodtype', methodType);
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
