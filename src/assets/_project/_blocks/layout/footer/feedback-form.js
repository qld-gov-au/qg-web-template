var feedbackForm = {
  init: function(franchiseTitle) {
    $('.no-js').removeClass('no-js');
    /**
     * Check franchise title is present on the page else get it from the URL
     **/
    let franchise;
    if (franchiseTitle) {
      franchise = franchiseTitle;
    } else {
      franchise = location.pathname.split('/')[1];
    }
    /**
     * Add hidden inputs
     **/
    const hiddenInputs = {
      'franchise': franchise,
      'page-title': $(document).find('title').text(),
      'page-url': window.location.href,
      'page-referer': document.referrer,
      'rspUsrAgent': navigator.userAgent,
      'browserName': this.predictBrowserName().name + ' ' + this.predictBrowserName().version,
      'OS': navigator.platform,
      'g-recaptcha-response': '',
    };
    for (const prop in hiddenInputs) {
      this.addHiddenInput(`${prop}`, `${hiddenInputs[prop]}`);
    }
    /**
     * events to show/hide feedback component
     **/
    $('.qg-footer-feedback__close').on('click', function (e) {
      e.preventDefault();
      $('.qg-feedback-toggle').removeClass('d-none');
    });

    $('.qg-feedback-toggle').on('click', function (e) {
      e.preventDefault();
      if ($('#qg-page-feedback-form').hasClass('d-none')) {
        $(this).addClass('d-none');
      }
    });
  },
  /**
   * @return {undefined}
   * @param {string} str - string to sanitize
   * Sanitize string (remove tags to avoid XSS attack)
   **/
  sanitize: function (str) {
    if (!str) {
      return false;
    }
    return str.replace(/</g, '&lt;') // strip <
      .replace(/>/g, '&gt;') // strip >
      .replace(/\+/g, '&#43;') // strip +
      .replace(/\\/g, '&#92;') // strip \
      .replace(/\(/g, '&#40;') // strip (
      .replace(/\)/g, '&#41;') // strip )
      .replace(/{/g, '&#123;') // strip (
      .replace(/}/g, '&#124;'); // strip )
  },
  /**
   * @return {Object}
   * Predict user browser (this function only predicts based on certain browser values and may not work with all the browsers)
   **/
  predictBrowserName: function () {
    var navigatorUserAgent = navigator.userAgent;
    var predictVersion;
    var matchBrowser = navigatorUserAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(matchBrowser[1])){
      predictVersion = /\brv[ :]+(\d+)/g.exec(navigatorUserAgent) || [];
      return {name: 'IE', version: (predictVersion[1] || '')};
    }
    if (matchBrowser[1] === 'Chrome'){
      predictVersion = navigatorUserAgent.match(/\bOPR|Edge\/(\d+)/);
      if (predictVersion != null) { return {name: 'Edge', version: predictVersion[1]}; }
    }
    matchBrowser = matchBrowser[2] ? [matchBrowser[1], matchBrowser[2]] : [navigator.appName, navigator.appVersion, '-?'];
    predictVersion = navigatorUserAgent.match(/version\/(\d+)/i);
    if (predictVersion != null) { matchBrowser.splice(1, 1, predictVersion[1]); }
    return {
      name: matchBrowser[0],
      version: matchBrowser[1],
    };
  },
  /**
   * @return {undefined}
   * @param {string} key - name of the hidden input
   * @param {string} val - value of the hidden input
   **/
  addHiddenInput: function (key, val) {
    var newHiddenInput = $('<input type="hidden"/>');
    newHiddenInput.attr('name', key);
    newHiddenInput.attr('value', this.sanitize(val));
    $('#feedback-hidden-inputs').append(newHiddenInput);
  },
  /**
   * This function reset the value of feedback form on page load.
   * @return {undefined}
   **/
  resetForm: function () {
    function resetForm () {
      $('#qg-page-feedback-form :input:not(:checkbox):not(:hidden):not(:button):not(:radio):not(:submit)').each(function () {
        $(this).val('');
      });
      $('#qg-page-feedback-form :input:checkbox, #qg-page-feedback-form :input:radio').each(function (element) {
        $(this).prop('checked', false);
      });
    }
    window.addEventListener('load', function (event) {
      resetForm();
    }, false);
  },
};
module.exports = feedbackForm;
