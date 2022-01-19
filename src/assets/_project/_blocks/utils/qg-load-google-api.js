/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 This class determine the franchise (if available) and the environment using the hostname and then loads Google Maps API using that key
  - Key is loaded using the qg-google-keys.json file
 */
import keys from '../data/qg-google-keys';

export class QgLoadGoogleApi {
  constructor() {
    this.firstFolderPath = location.pathname.split('/')[1];
    this._staticMaps();
  }

  /**
   * onbtnClick -> clicking quick exit button a page
   * @return {undefined}
   **/
  _isProd () {
    return window.location.hostname.search(/dev|test|localhost|github|\buat\b/) === -1;
  }

  /**
   * onbtnClick -> clicking quick exit button a page
   * @return {undefined}
   **/
  _checkEnvAndSetKey () {
    let googleApiKey;
    let self = this;
    // if no franchise name identified then use the default key according to the environment
    if (window.location.hostname.search(/\bgithub\b/) !== -1) {
      googleApiKey = keys.defGoogle.docs;
    } else if (!this._isProd()) {
      googleApiKey = keys.defGoogle.test;
    } else {
      googleApiKey = keys.defGoogle.prod;
    }
    // check if a particular franchise key is required by checking the folder path in the URL
    if (self.firstFolderPath) {
      keys.franchises.forEach(function (e) {
        if (self.firstFolderPath === e.name) {
          googleApiKey = e.apiKey;
        }
      });
    }
    return googleApiKey;
  }

  /**
   * TODO trasnfer to Matrix plateform as this is only valid with Matrix Map component
   * _staticMaps -> static maps on description pages
   * @return {undefined}
   **/
  _staticMaps () {
    let googleApiKey = this._checkEnvAndSetKey();
    var $mapImg = $('.qg-static-map');
    function generateStaticMapImg (ele) {
      let lat = ele.attr('data-lat') || -27.4673;
      let lon = ele.attr('data-long') || 153.0233;
      let zoom = ele.attr('data-zoom') || 17;
      let height = ele.attr('data-height') || 189;
      return 'https://maps.googleapis.com/maps/api/staticmap?size=373x' + height + '&maptype=roadmap&markers=' + lat + '%2C' + lon + '&key=' + googleApiKey + '&sensor=false&zoom=' + zoom;
    }
    // append static image on the maps description page
    if ($mapImg.length > 0) {
      var htmlInsert = $('<div>');
      $mapImg.each(function () {
        let $this = $(this);
        $this.find('img').attr('src', generateStaticMapImg($this.find('img')));
        htmlInsert.append($this);
      });
      $('aside').prepend(htmlInsert);
      $('a.qg-static-map').wrap("<div class='qg-aside st-map-static'>");
      $('.st-map-static').eq(0).prepend("<h2><span class='fa fa-compass' aria-hidden='true'></span>Maps</h2>");
    }
  }

  /**
   * onbtnClick -> clicking quick exit button a page
   * @param {function} callback - execute after successful loading of a key
   * @return {undefined}
   **/
  _loadGoogleApi (callback) {
    let googleApiKey = this._checkEnvAndSetKey();
    let appendScript = url => {
      $('head').append('<script type="text/javascript" src="' + url + '"></script>');
    };
    let next = () => {
      if (typeof callback === 'function') {
        callback();
      } else {
        appendScript(callback);
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
  }
}
