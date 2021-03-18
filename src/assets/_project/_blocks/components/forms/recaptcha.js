/*
* Any form with form attribute data-recaptcha="true", will run and validate with Google invisible recaptcha
* The site key, will be replaced
*   - Local - by test key in build process (gulp/gulp-config.js, gulp/common-tasks/js.js)
*   - Dev, Test, Staging, Beta - in bamboo deployment plan - https://servicesmadesimpler.govnet.qld.gov.au/bitbucket/projects/CDN/repos/static-qld_cloudformation/browse/deployment_swev3.yml
* */

/*globals grecaptcha, qg*/
import keys from '../../data/qg-google-keys';

(function ($, swe) {
  'use strict';
  /**
   * Google recaptcha
   **/
  var qgRecaptcha = {
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
        if (!this.isProd()) {
          var testUrl = $feedbackForm.attr('action').replace('www.smartservice.qld.gov.au', 'test.smartservice.qld.gov.au');
          $feedbackForm.attr('action', testUrl);
        }
        // if data-recaptcha attribute is not present then insert it
        if ($feedbackForm.attr('data-recaptcha') === undefined) {
          $feedbackForm.attr('data-recaptcha', 'true');
        }
        this.footerFeedbackRecaptcha();
      }
    },
    // recaptcha version 2
    v2Captcha: (form, subBtn, key) => {
      try {
        //console.log('v2 key: ' + key);
        grecaptcha.render(subBtn, {
          sitekey: key,
          callback: function() {
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
    // recaptcha version 3
    v3Captcha: (form, greptcha, key, action) => {
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
    footerFeedbackRecaptcha: function() {
      var selfObj = this;
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
       * @return {undefined}
       * On ready function is executed after calling recaptcha api in the above code
       * This function creates a submit event
       * Call submission handler api
       * Get and display success message
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
  };
  qgRecaptcha.init();
})(jQuery, qg.swe);
