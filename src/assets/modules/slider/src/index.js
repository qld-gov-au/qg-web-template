//plugin
import './lib/unslider/unslider-min';
import './lib/unslider/unslider.css';

//slider custom styling
import './styles/slider.scss';

const qgSlider = {
  el: '.banner',
  init: function (delay = 6000) {
    let self = this;
    $('.banner ').each(function () {
      let $this = $(this);
      $this.unslider(self.options(delay));
    });
  },
  options: function (delay) {
    return {
      autoplay: true,
      delay: delay,
      arrows: {
        prev: '<a class="unslider-arrow prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>',
        next: '<a class="unslider-arrow next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
        stop: '<a class="unslider-action unslider-pause"><i class="fa fa-pause" aria-hidden="true"></i></a>',
        start: '<a class="unslider-action unslider-play"><i class="fa fa-play" aria-hidden="true"></i></a>',
      },
    };
  },
  methods: {
    playPause: function () {
      $(document).on('click', '.unslider-action', function (e) {
        if ($(e.currentTarget).hasClass('unslider-pause')) {
          $(this).removeClass('show').addClass('hide');
          $('.unslider-play').removeClass('hide').addClass('show');
        } else if ($(e.currentTarget).hasClass('unslider-play')) {
          $(this).removeClass('show').addClass('hide');
          $('.unslider-pause').removeClass('hide').addClass('show');
        }
      });
    },
  },
};
/*global qg*/
(function generateSlider (jQuery, qg) {
  // prepare url to fetch data source
  const prepareUrl = function (loc) {
    let path = window.location.pathname.replace(/\/$/, '');
    let pathArr = path.split('/').filter(function (e) {
      return e;
    });
    return '/' + pathArr[pathArr.length - 1] + loc;
  };

  // date format
  const convertDate =  function (inputFormat) {
    let dateObj = new Date(inputFormat);
    return [ dateObj.getDate(), dateObj.toString().slice(4, 7), dateObj.getFullYear() ].join(' ');
  };

  if ($('[data-role="qg-slider"]').length) {
    qg.modules.processXML($('[data-role="qg-slider"]').data('options').src, 'GET').then(function (result) {
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
        $(container).find('ul').append('<li> <a href="' + entry.url + '" class=""> <img src="' + entry.imgSrc + '" alt=""> </a> <h3>' + entry.title + '</h3> <div class="news-content"> <dl class="meta"> <dt class="date-posted">Posted</dt> <dd class="date-posted">' + convertDate(entry.posted) + '</dd> </dl> <p>' + entry.desc + '</p> <p class="more"> <a href="' + entry.url + '" title="Read more about: ' + entry.title + '">More…</a> </p> </div> </li>');
      });
      $('[data-role="qg-slider"]').replaceWith(container);
      // slider
      qgSlider.init();
    }, function (reason) {
      console.log('error in processing your request', reason);
    });
  } else {
    qgSlider.init();
  }
})(jQuery, qg);

