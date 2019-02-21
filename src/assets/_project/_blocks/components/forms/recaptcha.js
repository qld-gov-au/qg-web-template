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

      grecaptcha.render(subBtn, {
        'sitekey': window.qg.googleRecaptchaApiKey, //this value will be replaced by build tool. from gulp-config/
        'callback': () => {
          var response = grecaptcha.getResponse();
          if (response === '' || response === undefined || response.length === 0) {
            console.log('Invalid recaptcha');
            return false;
          } else {
            form.submit();
          }
        },
      });
      grecaptcha.execute();
    });
  };

  if ($('form[data-recaptcha="true"]').length > 0) {	//enable recaptcha on form submits
    swe.ajaxCall('https://www.google.com/recaptcha/api.js', 'script', onloadRecaptcha, 'Recaptcha unavailable');
  }
}(jQuery, qg.swe));
