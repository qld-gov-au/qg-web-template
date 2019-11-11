/*
* Any form with form attribute data-recaptcha='true', will run and validate with Google invisible recaptcha
* The site key, will be replaced
*   - Local - by test key in build process (gulp/gulp-config.js, gulp/common-tasks/js.js)
*   - Dev, Test, Staging, Beta - in bamboo deployment plan - https://servicesmadesimpler.govnet.qld.gov.au/bitbucket/projects/CDN/repos/static-qld_cloudformation/browse/deployment_swev3.yml
* */

/*globals grecaptcha, qg*/
import keys from '../../data/qg-google-keys';

(function($, swe) {
  let googleRecaptchaApiKey =
    window.location.hostname.search(
      /\bdev\b|\btest\b|\blocalhost\b|\buat\b/
    ) !== -1
      ? keys.defGoogleRecaptcha.uat
      : keys.defGoogleRecaptcha.prod;
  let onloadRecaptcha = () => {
    // eslint-disable-line
    grecaptcha.ready(function() {
      grecaptcha
        .execute(googleRecaptchaApiKey, { action: 'homepage' })
        .then(function(token) {
          $('form[data-recaptcha="true"]')
            .find('input[type="submit"], button[type="submit"]')
            .on('click', e => {
              e.preventDefault();
              let subBtn = e.target;
              let form = $(subBtn).parents('form');
              var greptcha = form.find(
                'input[name="g-recaptcha-response"]'
              );
              if (greptcha.length > 0) {
                greptcha.val(token);
              } else {
                var gKey = $('<input type="hidden"/>');
                gKey.attr('name', 'g-recaptcha-response');
                gKey.val(token);
                form.append(gKey);
              }
              form.submit();
            });
      });
    });
  };
  if ($('form[data-recaptcha="true"]').length > 0) {
    //enable recaptcha on form submits
    swe.ajaxCall(
      'https://www.google.com/recaptcha/api.js?render=' + googleRecaptchaApiKey,
      'script',
      onloadRecaptcha,
      'Recaptcha unavailable'
    );
  }
})(jQuery, qg.swe);
