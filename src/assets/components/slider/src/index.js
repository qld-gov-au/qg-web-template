// NOTE - DEV START and DEV END are for importing other modules locally for testing components independently and the code inside these tags is stripped when we run gulp build-components because loader loads scripts dynamically in the build version

/* DEV-START */
import '../../misc/src/qg-xml-reader.js';
/* DEV-END */

//plugin
import './lib/unslider/unslider-min';
import './lib/unslider/unslider.css';

//slider custom styling
import './styles/slider.scss';

/*globals qg*/
$(function ($, qg) {
  var prepareUrl = function (loc) {
    var path = window.location.pathname.replace(/\/$/, '');
    var pathArr = path.split('/').filter(function (e) {
      return e;
    });
    return '/' + pathArr[pathArr.length - 1] + loc;
  };

  // date format
  var convertDate =  function (inputFormat) {
    var dateObj = new Date(inputFormat);
    return [ dateObj.getDate(), dateObj.toString().slice(4, 7), dateObj.getFullYear() ].join(' ');
  };

  qg.components.processXML($('[data-role="qg-slider"]').data('options').src, 'GET').then(function (result) {
    var container = $('<div class="banner"><ul></ul></div>');
    $(result).find('entry').each(function (index) {
      var $this = $(this);
      var entry = {
        title: $this.find('title').text(),
        imgSrc: $this.find('summary').find('div').find('img').attr('src'),
        desc: $this.find('summary').find('p').text(),
        posted: $this.find('updated').text(),
        url: $this.find('id').eq(0).text(),
      };
      $(container).find('ul').append('<li> <a href="' + entry.url + '" class=""> <img src="' + entry.imgSrc + '" alt=""> </a> <h3>' + entry.title + '</h3> <div class="news-content"> <dl class="meta"> <dt class="date-posted">Posted</dt> <dd class="date-posted">' + convertDate(entry.posted) + '</dd> </dl> <p>' + entry.desc + '</p> <p class="more"> <a href="' + entry.url + '" title="Read more about: ' + entry.title + '">More…</a> </p> </div> </li>');
    });
    $('[data-role="qg-slider"]').replaceWith(container);
    $('.banner').unslider();
  }, function (reason) {
    console.log('error in processing your request', reason);
  });
}(jQuery, qg));
