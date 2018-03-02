/*globals grecaptcha, qg*/
(function ($, swe) {
  let onloadRecaptcha = () => { // eslint-disable-line
    $('form[data-recaptcha="true"]').find('input[type="submit"], button[type="submit"]').on('click', (e) => {
      e.preventDefault();
      let subBtn = e.target;
      let form = $(subBtn).parents('form');

      grecaptcha.render(subBtn, {
        'sitekey': 'googleRecaptchaApi', //this value will be replaced by build tool. from gulp-config/
        'callback': () => { form.submit(); }
      });
      grecaptcha.execute();
    });
  };

  if ($('form[data-recaptcha="true"]').length > 0) {	//enable recaptcha on form submits
    swe.ajaxCall('https://www.google.com/recaptcha/api.js', 'script', onloadRecaptcha, 'Recaptcha unavailable');
  }
}(jQuery, qg.swe));
