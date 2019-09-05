/*
* Any form with form attribute data-recaptcha="true", will run and validate with Google invisible recaptcha
* The site key, will be replaced
*   - Local - by test key in build process (gulp/gulp-config.js, gulp/common-tasks/js.js)
*   - Dev, Test, Staging, Beta - in bamboo deployment plan - https://servicesmadesimpler.govnet.qld.gov.au/bitbucket/projects/CDN/repos/static-qld_cloudformation/browse/deployment_swev3.yml
* */
/*globals grecaptcha, qg*/
(function ($, swe) {
  let onloadRecaptcha = () => { // eslint-disable-line
    $('form[data-recaptcha="true"]').find('input[type="submit"], button[type="submit"]').on('click', (e) => {
      e.preventDefault();
      let subBtn = e.target;
      let form = $(subBtn).parents('form');
      grecaptcha.execute(window.qg.googleRecaptchaApiKey, { action: 'contact' }).then(function (token) {
        var greptchaKey = $('<input type="hidden"/>');
        greptchaKey.attr('name', 'greptchaToken');
        greptchaKey.attr('value', token);
        form.append(greptchaKey);
        if (greptchaKey.attr('value').length > 0) {
          form.submit();
        }
      });
    });
  };
  if ($('form[data-recaptcha="true"]').length > 0) {
    swe.ajaxCall('https://www.google.com/recaptcha/api.js?render=' + window.qg.googleRecaptchaApiKey + '', 'script', onloadRecaptcha, 'Recaptcha unavailable');
  }
}(jQuery, qg.swe));
