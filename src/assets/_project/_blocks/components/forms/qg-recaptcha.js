/*globals grecaptcha, qg*/
import keys from '../../../data/qg-google-keys';

(function ($, swe) {
  'use strict';
  /**
   * Google recaptcha for SWE global footer feedback which uses AJAX to communicate with the submission handler.
   **/
  var qgGlobalFooterRecaptcha = {
    config: {
      $feedbackForm: $('#qg-page-feedback-form'),
      $recaptchaOnPage: $('form[data-recaptcha="true"]'),
    },
    googleRecaptchaApiKey: function() {
      return this.isProd() ? keys.defGoogleRecaptcha.prod : keys.defGoogleRecaptcha.uat;
    },
    footerFeedbackGoogleRecaptchaApiKey: function() {
      return this.isProd() ? keys.defFeedbackGoogleRecaptcha.prod : keys.defFeedbackGoogleRecaptcha.uat;
    },
    isProd: function() {
      return window.location.hostname.search(/dev|test|localhost|github|\buat\b/) === -1;
    },
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
        this.footerFeedbackRecaptcha();
      }
    },
    footerFeedbackRecaptcha: function() {
      var selfObj = this;
      this.hideCaptchaBanner();
      /**
       * call recaptcha api to load script with the key on .qg-feedback-toggle click
       **/
      $('.qg-feedback-toggle').one('click', function(){
        swe.ajaxCall(
          'https://www.google.com/recaptcha/api.js?render=' + selfObj.footerFeedbackGoogleRecaptchaApiKey(),
          'script',
          onReady,
          'Recaptcha unavailable',
        );
      });
      /**
       * onReady function is executed after calling recaptcha api in the above code
       * This function creates a submit event
       * Call submission handler api
       * Get and display success message
       * @return {undefined}
       **/
      let onReady = function (){
        grecaptcha.ready(function () {
          $('#qg-page-feedback-form').submit(function (event) {
            var self = $(this);
            event.preventDefault();
            if ($('#qg-page-feedback-form li.invalid').length <= 0) {
              var greptcha = selfObj.config.$feedbackForm.find('input[name="g-recaptcha-response"]');
              var postUrl = self.attr('action');
              var requestMethod = self.attr('method');
              var $successMsgContainer = $('.thankyou');
              grecaptcha.execute(selfObj.footerFeedbackGoogleRecaptchaApiKey(), {action: 'feedback'})
                .then(function (token) {
                  if (greptcha.length > 0) {
                    greptcha.val(token);
                    var formData = self.serialize();
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
      };
    },
    /**
     * If all forms have captchaPrivacyTerms, we can hide reCAPTCHA Badge
     * @return {undefined}
     **/
    hideCaptchaBanner: function (){
      if ($('p[class="captchaPrivacyTerms"]').length === $('form[data-recaptcha="true"]').length) {
        var hidegrecaptchaBadge = '.grecaptcha-badge { visibility: hidden; }';
        var styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = hidegrecaptchaBadge;
        document.head.appendChild(styleSheet);
      }
    },
  };
  qgGlobalFooterRecaptcha.init();
})(jQuery, qg.swe);
