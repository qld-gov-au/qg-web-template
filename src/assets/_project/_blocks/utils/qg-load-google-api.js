/**
 * When using functionality related to google libraries, this fuction comes handy to check if libraries already exists and then execute custom function
 */
/* globals qg */
(function (qg, $) {
  'use strict';
  // lazy load a script
  function lazyScript (url) {
    $('head').append('<script type="text/javascript" src="' + url + '"></script>');
  }
  //load Google APi
  qg.loadGoogle = function (callback) {
    let next = () => {
      if (typeof callback === 'function') {
        callback();
      } else {
        lazyScript(callback);
      }
    };
    if ($('#googleapi').length <= 0) {
      let s = document.createElement('script');
      let u = `https://maps.googleapis.com/maps/api/js?key=${window.qg.googleKey}&region=AU&libraries=places`;
      s.type = 'text/javascript';
      s.id = 'googleapi';
      s.src = u;
      document.getElementsByTagName('head')[0].appendChild(s);
      s.onreadystatechange = function () { //trigger for IE
        if (this.readyState === 'complete') {
          next();
        }
      };
      s.onload = function () {
        next();
      };
    } else { //if script is already created but either loading or loaded
      if (document.readyState === 'loading') {
        document.onreadystatechange = function () {
          if (this.readyState === 'complete') {
            next();
          }
        };
      } else {
        next();
      }
    }
  };
}(qg, jQuery));
