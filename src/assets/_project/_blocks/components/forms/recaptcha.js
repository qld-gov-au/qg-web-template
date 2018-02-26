/*globals grecaptcha, qg, onloadRecaptcha*/
(function ($, swe) {
  let onloadRecaptcha = () => { // eslint-disable-line
    $('form[data-recaptcha="true"]').find('input[type="submit"], button[type="submit"]').on('click', (e) => {
      e.preventDefault();
      let subBtn = e.target;
      let form = $(subBtn).parents('form');

      let renderRecaptcha = (res) => {
        grecaptcha.render(subBtn, {
          'sitekey': res.key,
          'callback': () => { form.submit(); }
        });
        grecaptcha.execute();
      };
      //Get recaptcha key
      swe.ajaxCall(window.qg.cdn + window.qg.swe.assets + 'config/recaptcha.json', 'json', renderRecaptcha, 'Recaptcha config unavailable');
    });
  };

  if ($('form[data-recaptcha="true"]').length > 0) {	//enable recaptcha on form submits
    swe.ajaxCall('https://www.google.com/recaptcha/api.js', 'script', onloadRecaptcha, 'Recaptcha unavailable');
  }
}(jQuery, qg.swe));
