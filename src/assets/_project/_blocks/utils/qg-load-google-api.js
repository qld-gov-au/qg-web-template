/*
FAQ -
Q1 What this class do ?
A1 This class determine the franchise (if available) and the environment using the hostname and then loads Google Maps API using that key
  - Key is loaded using the qg-google-keys.json file
 */
import keys from '../data/qg-google-keys';

export class QgLoadGoogleApi {
  constructor() {
    this.firstFolderPath = location.pathname.split('/')[1];
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
    // check if a particular franchise key is required by checking the folder path in the URL
    if (self.firstFolderPath) {
      console.log(self.firstFolderPath);
      keys.franchises.forEach(function (e) {
        if (self.firstFolderPath === e.name) {
          googleApiKey = e.apiKey;
        }
      });
    }
    // if no franchise name identified then use the default key according to the environment
    if (window.location.hostname.search(/\bgithub\b/) !== -1) {
      googleApiKey = keys.defGoogle.docs;
    } else if (!this._isProd()) {
      console.log('not prod');
      googleApiKey = keys.defGoogle.test;
    } else {
      googleApiKey = keys.defGoogle.prod;
    }

    console.log(googleApiKey);
    return googleApiKey;
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
