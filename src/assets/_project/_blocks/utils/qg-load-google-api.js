/**
 * When using functionality related to google libraries, this fuction comes handy to check if libraries already exists and then execute custom function
 */
/* globals qg */
import keys from '../qg-google-keys';

(function (qg, $) {
  'use strict';
  window.qg.googleKey = window.location.hostname.search(/\bdev\b|\btest\b|\blocalhost\b|\buat\b/) !== -1 ? keys.defGoogle.uat : keys.defGoogle.prod;
  window.qg.googleRecaptchaApiKey = window.location.hostname.search(/\bdev\b|\btest\b|\blocalhost\b|\buat\b/) !== -1 ? keys.defGoogleRecaptcha.uat : keys.defGoogleRecaptcha.prod;

  var findFranchiseName = function () {
    var path = window.location.pathname.replace(/\/$/, '');
    var pathArr = path.split('/').filter(function (e) {
      return e;
    });
    return pathArr[0].toLowerCase();
  };

  keys.franchises.forEach(function (franchise) {
    if (findFranchiseName() === franchise.name) {
      window.qg.franchise = {
        name: franchise.name,
        apiKey: franchise.apiKey,
      };
    }
  });

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
      let googleApiKey = window.qg.franchise && window.qg.franchise.apiKey ? window.qg.franchise.apiKey : window.qg.googleKey;
      let s = document.createElement('script');
      let u = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&region=AU&libraries=places`;
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
