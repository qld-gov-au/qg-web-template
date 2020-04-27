
// import keys from '../../data/qg-google-keys';

/**
* AJAX feedback form submission
**/
// const successTemplate = require('../contact-us/thank-you.html');
$('.no-js').removeClass('no-js');
// let checkEnv = window.location.hostname.search(/\bdev\b|\btestcircleci\b|\blocalhost\b|\bgithub\b|\buat\b/);
// let footerFeedbackGoogleRecaptchaApiKey = checkEnv !== -1
//   ? keys.defFeedbackGoogleRecaptcha.uat
//   : keys.defFeedbackGoogleRecaptcha.prod;//This is a v3 key

// $(function () {
//   grecaptcha.ready(function () {
/*
grecaptcha.ready(function () {
  $('#qg-page-feedback-form').submit(function (event) {
    console.log('clicked');
    var $feedbackForm = $(this);
    var $successMsgContainer = $('.thankyou');
    event.preventDefault();
    if ($('#qg-page-feedback-form li.invalid').length <= 0) {
      console.log('inside st');
      $.getScript('https://www.google.com/recaptcha/api.js?render=' + footerFeedbackGoogleRecaptchaApiKey)
        .done(function (script, textStatus) {
          var greptcha = $feedbackForm.find('input[name="g-recaptcha-response"]');
          var formFeedback = $('#qg-page-feedback-form');
          var postUrl = formFeedback.attr('action');
          var requestMethod = formFeedback.attr('method');
          console.log('grecaptcha: ' + grecaptcha);
          grecaptcha.execute(footerFeedbackGoogleRecaptchaApiKey, {action: 'feedback'})
            .then(function (token) {
              console.log('inside grecaptcha.execute function');
              if (greptcha.length > 0) {
                if (
                  greptcha.attr('value') !== '' ||
                  greptcha.attr('value').length !== 0 ||
                  greptcha.attr('value') !== undefined) {
                  greptcha.val(token);
                  console.log('formData: ' + formFeedback.serialize());
                  var formData = formFeedback.serialize();
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
                    $successMsgContainer.append(successTemplate);
                  });
                  return true;
                }
              }
              return false;
            });
        })
        .fail(function (jqxhr, settings, exception) {
          $('div.log').text('Triggered ajaxError handler.');
        });
    }
  });
});
*/

$('.qg-footer-feedback__close').click(function () {
  $('.qg-feedback-toggle').removeClass('d-none');
});

$('.qg-feedback-toggle').click(function () {
  if ($('#qg-page-feedback-form').hasClass('d-none')) {
    $(this).addClass('d-none');
  }
});

/**
* Adds page and user details to hidden inputs on the feedback form
**/

function sanitize (str) {
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
}
// the script try to predict browser name from the User-Agent
let browserName = (function () {
  let ua = navigator.userAgent;
  let tem;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

function addHiddenInput (key, val) {
  var newHiddenInput = $('<input type="hidden"/>');
  newHiddenInput.attr('name', key);
  newHiddenInput.attr('value', sanitize(val));
  $('#feedback-hidden-inputs').append(newHiddenInput);
}
function init (franchiseTitle) {
  var franchise;
  if (franchiseTitle) {
    franchise = franchiseTitle;
  } else {
    franchise = location.pathname.split('/')[1];
  }
  addHiddenInput('franchise', franchise);
  addHiddenInput('page-title', $(document).find('title').text());
  addHiddenInput('page-url', window.location.href);
  addHiddenInput('page-referer', document.referrer);
  addHiddenInput('rspUsrAgent', navigator.userAgent);
  addHiddenInput('browserName', browserName);
  addHiddenInput('OS', navigator.platform);
  addHiddenInput('g-recaptcha-response', '');
}

module.exports = { init: init };
