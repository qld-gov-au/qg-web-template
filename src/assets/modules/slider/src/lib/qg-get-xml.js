const processXML = function (url) {
  return $.ajax({
    url: url,
    method: 'GET',
  });
};

module.exports = {
  processXML: processXML,
};
