/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 Quick exit function to exit from a page on 'Esc' key or 'Close this site' button click
- https://www.qld.gov.au/law/crime-and-police/abuse-family-matters-and-protection-orders/apply-for-a-protection-order
 */

var Stickyfill = require('stickyfill');
var stickyfill = Stickyfill();

export class QgQuickExit {
  constructor () {
    this.$quickExit = $('.qg-quick-exit');
    this.quickExitButton = document.querySelector('.qg-quick-exit__button');
    this.escapeSite = 'https://www.google.com.au/';
    this.hotkey = 27;
  }

  /**
  * Initialise QgQuickExit
  * @return {undefined}
  **/
  init() {
    if (this.$quickExit.length > 0 && typeof (this.quickExitButton) !== 'undefined' && this.quickExitButton != null) {
      this.onbtnClick();
      this.ieFix();
      this.onKeyDown();
    }
  }

  /**
  * quickExit function redirects a user on click and Esc key down
  * @param {string} site - site to replace on initiating the 'quick exit' ('Esc' key or clicking 'Close this site' button) function
  * @return {undefined}
  **/
  quickExit(site) {
    // then redirect to a non-sensitive site
    window.open(site, '_blank');
    window.location.replace(site);
    // remove as much info from URL as possible
    if (window.history) {
      try {
        window.history.replaceState({}, '', '/');
      } catch (e){
      }
    }
    // disable default event handling
    return false;
  }

  /**
  * onbtnClick -> clicking quick exit button a page
  * @return {undefined}
  **/
  onbtnClick () {
    let self = this;
    this.quickExitButton.onclick = function (e) {
      return self.quickExit(self.escapeSite);
    };
  }

  /**
  * onKeyDown -> escape keydown event
  * @return {undefined}
  **/
  onKeyDown (){
    let self = this;
    // add hotkey trigger
    document.addEventListener('keydown', function (e) {
      if (e.keyCode === self.hotkey) {
        self.quickExit(self.escapeSite);
        if (e) {
          // stop escape from cancelling redirect
          e.preventDefault();
          // early IEs don't have preventDefault
          e.returnValue = false;
        }
        return false;
      }
    });
  }

  /**
  * ieFix -> stickyfill lib to provide support for position:sticky.
  * @return {undefined}
  **/
  ieFix() {
    // load a plugin only on IE browser to support position:sticky
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
      stickyfill.add($('.qg-quick-exit')[0]);
    }
  }
}
