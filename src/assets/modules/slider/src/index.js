//plugin
import './lib/unslider/unslider-min';
import './lib/unslider/unslider.css';

//slider custom styling
import './styles/slider.scss';

//slider config
import {sliderConfig} from './lib/qg-slider-config';
import {processXML} from './lib/qg-get-xml';

/*global qg*/
(function generateSlider (jQuery, qg) {
  if ($('[data-role="qg-slider"]').length) {
    processXML($('[data-role="qg-slider"]').data('options').src, 'GET').then(function (result) {
      let container = $('<div class="banner"><ul></ul></div>');
      $(result).find('entry').each(function (index) {
        let $this = $(this);
        let entry = {
          title: $this.find('title').text(),
          imgSrc: $this.find('summary').find('div').find('img').attr('src'),
          desc: $this.find('summary').find('p').text(),
          posted: $this.find('updated').text(),
          url: $this.find('id').eq(0).text(),
        };
        $(container).find('ul').append('<li> <a href="' + entry.url + '" class=""> <img src="' + entry.imgSrc + '" alt=""> </a> <h3>' + entry.title + '</h3> <div class="news-content"> <dl class="meta"> <dt class="date-posted">Posted</dt> <dd class="date-posted">' + sliderConfig.convertDate(entry.posted) + '</dd> </dl> <p>' + entry.desc + '</p> <p class="more"> <a href="' + entry.url + '" title="Read more about: ' + entry.title + '">More…</a> </p> </div> </li>');
      });
      $('[data-role="qg-slider"]').replaceWith(container);
      // slider
      sliderConfig.init();
    }, function (reason) {
      console.log('error in processing your request', reason);
    });
  } else {
    sliderConfig.init();
  }
})(jQuery, qg);

