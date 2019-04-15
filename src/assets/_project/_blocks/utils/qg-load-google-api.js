/**
 * When using functionality related to google libraries, this fuction comes handy to check if libraries already exists and then execute custom function
 */
/* globals qg */
import keys from '../data/qg-google-keys';

(function (qg, $) {
  'use strict';
  let googleApiKey;
  let $mapImg = $('.qg-static-map');
  window.qg.googleKey = window.location.hostname.search(/\bdev\b|\btest\b|\blocalhost\b|\buat\b/) !== -1 ? keys.defGoogle.uat : keys.defGoogle.prod;
  window.qg.googleRecaptchaApiKey = window.location.hostname.search(/\bdev\b|\btest\b|\blocalhost\b|\buat\b/) !== -1 ? keys.defGoogleRecaptcha.uat : keys.defGoogleRecaptcha.prod;

  let findFranchiseName = function () {
    let path = window.location.pathname.replace(/\/$/, '');
    let pathArr = path.split('/').filter(function (e) {
      return e;
    });
    return pathArr[0].toLowerCase();
  };
  let franchise = findFranchiseName();
  if (franchise) {
    keys.franchises.forEach(function (e) {
      if (franchise === e.name) {
        window.qg.franchise = {
          name: e.name,
          apiKey: e.apiKey,
        };
      }
    });
  }
  googleApiKey = window.qg.franchise && window.qg.franchise.apiKey ? window.qg.franchise.apiKey : window.qg.googleKey;

  function generateStaticMapImg (ele) {
    let lat = ele.attr('data-lat') || -27.4673;
    let lon = ele.attr('data-long') || 153.0233;
    let zoom = ele.attr('data-zoom') || 17;
    let height = ele.attr('data-height') || 189;
    return 'https://maps.googleapis.com/maps/api/staticmap?size=373x' + height + '&maptype=roadmap&markers=' + lat + '%2C' + lon + '&key=' + googleApiKey + '&sensor=false&zoom=' + zoom;
  }

  if ($mapImg.length > 0) {
    var htmlInsert = $('<div>');
    $mapImg.each(function () {
      let $this = $(this);
      $this.find('img').attr('src', generateStaticMapImg($this.find('img')));
      htmlInsert.append($this);
    });
    $('aside').prepend(htmlInsert);
    $('a.qg-static-map').wrap("<div class='qg-aside st-map-static'>");
    $('.st-map-static').eq(0).prepend("<h2><i class='fa fa-compass' aria-hidden='true'></i>Maps</h2>");
  }
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
