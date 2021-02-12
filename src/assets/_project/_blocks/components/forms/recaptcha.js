/*
* Any form with form attribute data-recaptcha="true", will run and validate with Google invisible recaptcha
* The site key, will be replaced
*   - Local - by test key in build process (gulp/gulp-config.js, gulp/common-tasks/js.js)
*   - Dev, Test, Staging, Beta - in bamboo deployment plan - https://servicesmadesimpler.govnet.qld.gov.au/bitbucket/projects/CDN/repos/static-qld_cloudformation/browse/deployment_swev3.yml
* */
/*globals grecaptcha, qg*/
import keys from '../../data/qg-google-keys';

(function ($, swe) {
  // let checkEnv = window.location.hostname.search(/\bdev\b|test|localhost|github|\buat\b/);
  /*
   * isProd function checks if keywords 'dev|test|localhost|github|uat' are not in the hostname then the environment is PROD.
   * This may not work in all the cases.
  */
  let isProd = function () {
    return window.location.hostname.search(/dev|test|localhost|github|\buat\b/) === -1;
  };
  let $feedbackForm = $('#qg-page-feedback-form');
  let hideCaptchaBadge = function (){
    // If all forms have captchaPrivacyTerms, we can hide reCAPTCHA Badge
    if ($('p[class="captchaPrivacyTerms"]').length > 0) {
      var hidegrecaptchaBadge = '.grecaptcha-badge { visibility: hidden; }';
      var styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = hidegrecaptchaBadge;
      document.head.appendChild(styleSheet);
    }
  };

  if ($feedbackForm.length > 0) {
    let setUrlEnableCaptcha = () => {
      // if environment is not PROD then use test submission handler link
      if (!isProd()) {
        var testUrl = $feedbackForm.attr('action').replace('www.smartservice.qld.gov.au', 'test.smartservice.qld.gov.au');
        $feedbackForm.attr('action', testUrl);
      }
      // if data-recaptcha attribute is not present then insert it
      if ($feedbackForm.attr('data-recaptcha') === undefined) {
        $feedbackForm.attr('data-recaptcha', 'true');
      }
    };
    setUrlEnableCaptcha();
  }

  let googleRecaptchaApiKey = isProd()
    ? keys.defGoogleRecaptcha.prod
    : keys.defGoogleRecaptcha.uat;//This is a v2 key
  let footerFeedbackGoogleRecaptchaApiKey = isProd()
    ? keys.defFeedbackGoogleRecaptcha.prod
    : keys.defFeedbackGoogleRecaptcha.uat;//This is a v3 key

  let ajaxMethod = function () {
    swe.ajaxCall(
      'https://www.google.com/recaptcha/api.js?render=' + footerFeedbackGoogleRecaptchaApiKey,
      'script',
      onloadRecaptchaAjax,
      'Recaptcha unavailable',
    );
    hideCaptchaBadge();
  };

  //v3 Captcha, can have multiples
  let v3Captcha = (form, greptcha, key, action) => {
    //console.log('v3 key: ' + key);
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
  };

  //v2 Captcha, usually is singular
  let v2Captcha = (form, subBtn, key) => {
    try {
      //console.log('v2 key: ' + key);
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
  };

  let loadedRecaptcha = false;
  let onloadRecaptchaAjax = () => {
    grecaptcha.ready(function () {
      $('#qg-page-feedback-form').submit(function (event) {
        var self = $(this);
        event.preventDefault();
        if ($('#qg-page-feedback-form li.invalid').length <= 0) {
          var greptcha = $feedbackForm.find('input[name="g-recaptcha-response"]');
          var postUrl = self.attr('action');
          var requestMethod = self.attr('method');
          var $successMsgContainer = $('.thankyou');
          grecaptcha.execute(footerFeedbackGoogleRecaptchaApiKey, {action: 'feedback'})
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
  let onloadRecaptcha = () => {
    grecaptcha.ready(function () {
      // eslint-disable-line
      //v2 Forms
      if (!loadedRecaptcha) {
        $('form[data-recaptcha="true"]')
          .find('input[type="submit"], button[type="submit"]')
          .on('click', e => {
            e.preventDefault();
            let subBtn = e.target;
            let form = $(subBtn).parents('form');
            var greptcha = form.find('input[name="g-recaptcha-response"]');
            let manualSitekey = form.attr('data-sitekey');
            let manualAction = form.attr('data-action');
            if (form.attr('id') === 'qg-page-feedback-form') { //Footer feedback
              v3Captcha(form, greptcha, footerFeedbackGoogleRecaptchaApiKey, 'feedback');
            } else if (manualSitekey !== undefined && manualAction !== undefined) { //v3 manual form
              v3Captcha(form, greptcha, manualSitekey, manualAction);
            } else if (manualAction !== undefined) { //v3 manual with feedback key but differnt action
              v3Captcha(form, greptcha, footerFeedbackGoogleRecaptchaApiKey, manualAction);
            } else if (manualSitekey !== undefined && manualAction === undefined) { //v2 manual (no action in v2)
              v2Captcha(form, subBtn, manualSitekey);
            } else { //default v2 with default key
              v2Captcha(form, subBtn, googleRecaptchaApiKey);
            }
          });
        loadedRecaptcha = true;
      }
    });
  };
  //https://github.com/google/recaptcha/issues/279
  //https://github.com/google/recaptcha/issues/281
  //https://www.hackviking.com/development/multiple-recaptcha-on-the-same-page/
  //Setup recaptcha if on the page
  let loadFooter = false;
  if ($('form[data-recaptcha="true"]').length > 0) {
    //enable recaptcha on form submits, load latest v3 version of recaptcha
    let v2Loaded = false;
    $('form[data-recaptcha="true"]').each(function () {
      let manualSitekey = $(this).attr('data-sitekey');
      let manualAction = $(this).attr('data-action');
      if ($(this).attr('id') === 'qg-page-feedback-form') { //Footer feedback
        //Only load if the feedback button is clicked
        loadFooter = true;
      } else if (manualSitekey !== undefined && manualAction !== undefined) { //v3 manual form
        swe.ajaxCall(
          'https://www.google.com/recaptcha/api.js?render=' + manualSitekey,
          'script',
          onloadRecaptcha,
          'Recaptcha unavailable',
        );
        hideCaptchaBadge();
      } else {
        if (!v2Loaded) {
          swe.ajaxCall(
            'https://www.google.com/recaptcha/api.js',
            'script',
            onloadRecaptcha,
            'Recaptcha unavailable',
          );
          v2Loaded = true;
        }
      }
    });
    //As v3 key is used in footer and could also be used on the page with a differnt action, we need to ensure we only load it once
    if (loadFooter) {
      //Only load if the feedback button is clicked
      $('.qg-feedback-toggle').one('click', ajaxMethod);
    }
  }
})(jQuery, qg.swe);
