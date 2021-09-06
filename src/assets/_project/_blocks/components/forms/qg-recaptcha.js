/*globals grecaptcha, qg*/
/*
* Any form with form attribute data-recaptcha="true", will run and validate with Google invisible recaptcha
*/
import keys from '../../data/qg-google-keys';
(function ($, swe) {
  'use strict';
  var qgRecaptcha = {
    config: {
      $feedbackForm: $('#qg-page-feedback-form'),
      $recaptchaOnPage: $('form[data-recaptcha="true"]'),
      $grecaptchaBadge: $('.grecaptcha-badge'),
    },

    /**
     * Initialise qgRecaptcha
     * @return {undefined}
     **/
    init: function() {
      let $feedbackForm = this.config.$feedbackForm;
      if ($feedbackForm.length > 0) {
        /**
         * check if env is not the prod env then change submission handler url to test.smartservice.qld.gov.au
         **/
        if (!this.isProd()) {
          var testUrl = $feedbackForm.attr('action').replace('www.smartservice.qld.gov.au', 'test.smartservice.qld.gov.au');
          $feedbackForm.attr('action', testUrl);
        }
        /**
         * if data-recaptcha attribute is not present then insert it
         **/
        if ($feedbackForm.attr('data-recaptcha') === undefined) {
          $feedbackForm.attr('data-recaptcha', 'true');
        }
        // load google recaptcha lib
        this.loadRecaptchaLib();
        // If all forms have captchaPrivacyTerms, we can hide reCAPTCHA Badge
        this.hideCaptchaBanner();
      }
    },

    /**
     * check hostname and determine environment
     * @return {undefined}
     **/
    isProd: function() {
      return window.location.hostname.search(/dev|test|localhost|github|\buat\b/) === -1;
    },

    /**
     * googleRecaptchaApiKey -> check environment and return a key accordingly
     * @return {undefined}
     **/
    googleRecaptchaApiKey: function() {
      return this.isProd() ? keys.defGoogleRecaptcha.prod : keys.defGoogleRecaptcha.uat;
    },

    /**
     * footerFeedbackGoogleRecaptchaApiKey -> check environment and return a key accordingly for footer feedback form
     * @return {undefined}
     **/
    footerFeedbackGoogleRecaptchaApiKey: function() {
      return this.isProd() ? keys.defFeedbackGoogleRecaptcha.prod : keys.defFeedbackGoogleRecaptcha.uat;
    },

    /**
     * from swe4 onwards footer feedback is ajax based
     * footerFeedbackRecaptcha function handles recaptcha on ajax based form.
     * This function creates a submit event
     * Call submission handler api
     * Get and display success message
     * @return {undefined}
     **/
    footerFeedbackRecaptcha: function() {
      var self = this;
      grecaptcha.ready(() => {
        $('#qg-page-feedback-form').submit(function (event) {
          var targetFormSubmit = $(this);
          event.preventDefault();
          if ($('#qg-page-feedback-form li.invalid').length <= 0) {
            var greptcha = self.config.$feedbackForm.find('input[name="g-recaptcha-response"]');
            var postUrl = targetFormSubmit.attr('action');
            var requestMethod = targetFormSubmit.attr('method');
            var $successMsgContainer = $('.thankyou');
            grecaptcha.execute(self.footerFeedbackGoogleRecaptchaApiKey(), {action: 'feedback'})
              .then(function (token) {
                if (greptcha.length > 0) {
                  greptcha.val(token);
                  var formData = targetFormSubmit.serialize();
                  $.ajax({
                    url: postUrl,
                    type: requestMethod,
                    data: formData,
                    contentType: 'application/x-www-form-urlencoded',
                    cache: false,
                    processData: false,
                  }).done(function (response) {
                    $successMsgContainer.removeClass('d-none');
                    $('#qg-page-feedback-form, .qg-feedback-toggle').addClass('d-none');
                    $successMsgContainer.append($.parseHTML(JSON.parse(response).message));
                  }).fail(function () {
                    $successMsgContainer.append('<p>Request failed, please try again</p>');
                  });
                  return true;
                }
              });
          }
        });
      });
    },

    /**
     * If all forms have captchaPrivacyTerms, we can hide reCAPTCHA Badge
     * @return {undefined}
     **/
    hideCaptchaBanner: function (){
      if (($('p[class="captchaPrivacyTerms"]').length === $('form[data-recaptcha="true"]').length) && (this.config.$grecaptchaBadge.css('visibility') !== 'hidden')) {
        var hidegrecaptchaBadge = '.grecaptcha-badge { visibility: hidden; }';
        var styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = hidegrecaptchaBadge;
        document.head.appendChild(styleSheet);
      }
    },

    /**
     * Google recaptcha v2 (Version 2)
     * @return {undefined}
     * @param {string} form - form selector
     * @param {string} subBtn - form submit button selector
     * @param {string} key - Google recaptcha key
     **/
    v2Captcha: function (form, subBtn, key){
      try {
        // console.log('v2 key: ' + key);
        grecaptcha.render(subBtn, {
          sitekey: key,
          callback: () => {
            var response = grecaptcha.getResponse();
            if (
              response === '' ||
              response === undefined ||
              response.length === 0
            ) {
              console.log('Invalid recaptcha');
              return false;
            } else {
              form.submit();
            }
          },
        });
      } catch (e) {
        grecaptcha.reset();
        return false;
      }
      grecaptcha.execute();
    },

    /**
     * Google recaptcha v3 (Version 3)
     * @return {undefined}
     * @param {string} form - form selector
     * @param {string} greptcha - hidden input field for the retrieved token (g-recaptcha-response)
     * @param {string} key - Google recaptcha ket
     * @param {string} action - event to trigger after execution
     **/
    v3Captcha: function (form, greptcha, key, action){
      // console.log('v3 key: ' + key);
      try {
        grecaptcha.execute(key, {action: action})
          .then(function (token) {
            if (greptcha.length > 0) {
              if (
                greptcha.attr('value') !== '' ||
                greptcha.attr('value').length !== 0 ||
                greptcha.attr('value') !== undefined) {
                greptcha.val(token);
                form.submit();
                return true;
              }
            }
            return false;
          });
      } catch (e) {
        return false;
      }
    },
    /**
     * loadRecaptchaLib load google recaptcha lib based on some conditions
     *  @return {undefined}
     **/
    loadRecaptchaLib: function (){
      let self = this;
      /**
       * handles footer feedback recaptcha load
       **/
      $('.qg-feedback-toggle').one('click', function(){
        $.getScript('https://www.google.com/recaptcha/api.js?render=' + self.footerFeedbackGoogleRecaptchaApiKey(), function (){
          self.footerFeedbackRecaptcha();
        });
      });
      /**
       * handles all other forms
       **/
      setTimeout(function (){
        if ($('#qg-primary-content').find('form[data-recaptcha="true"]').length > 0) {
          //enable recaptcha on form submits, load latest v3 version of recaptcha
          let v2Loaded = false;
          $('form[data-recaptcha="true"]').each(function () {
            let manualSitekey = $(this).attr('data-sitekey');
            let manualAction = $(this).attr('data-action');
            if (manualSitekey !== undefined && manualAction !== undefined) { //v3 manual form
              $.getScript('https://www.google.com/recaptcha/api.js?render=' + manualSitekey, function (){
                self.onloadRecaptcha();
              });
            } else {
              if (!v2Loaded) {
                $.getScript('https://www.google.com/recaptcha/api.js', function (){
                  self.onloadRecaptcha();
                });
                v2Loaded = true;
              }
            }
          });
        }
      }, 200);
    },
    /**
     * onloadRecaptcha is loaded after recpatcha lib is loaded , it is passed as a callback function
     * @return {undefined}
     **/
    onloadRecaptcha: function(){
      let self = qgRecaptcha;
      let loadedRecaptcha = false;
      grecaptcha.ready(function () {
        //v2 Forms
        if (!loadedRecaptcha) {
          $('[data-recaptcha="true"]:not(#qg-page-feedback-form)')
            .find('input[type="submit"], button[type="submit"]')
            .on('click', e => {
              e.preventDefault();
              let subBtn = e.target;
              let form = $(subBtn).parents('form');
              let greptcha = form.find('input[name="g-recaptcha-response"]');
              let manualSitekey = form.attr('data-sitekey');
              let manualAction = form.attr('data-action');
              if (manualSitekey !== undefined && manualAction !== undefined) { //v3 manual form
                self.v3Captcha(form, greptcha, manualSitekey, manualAction);
              } else if (manualAction !== undefined) { //v3 manual with feedback key but differnt action
                self.v3Captcha(form, greptcha, self.footerFeedbackGoogleRecaptchaApiKey(), manualAction);
              } else if (manualSitekey !== undefined) { //v2 manual (no action in v2)
                self.v2Captcha(form, subBtn, manualSitekey);
              } else { //default v2 with default key
                self.v2Captcha(form, subBtn, self.googleRecaptchaApiKey());
              }
            });
          loadedRecaptcha = true;
        }
      });
    },
  };
  qgRecaptcha.init();
})(jQuery, qg.swe);
