// NOTE - DEV START and DEV END are for importing other modules locally for testing components independently and the code inside these tags is stripped when we run gulp build-components because loader loads scripts dynamically in the build version

/* DEV-START */
import '../../misc/src/includes/qg-xml-reader.js';
/* DEV-END */

//plugin
import './lib/unslider/unslider-min';
import './lib/unslider/unslider.css';

//slider custom styling
import './styles/slider.scss';

// slider config function

// slider config function

const generateSlider = {
  el: '.banner',
  init: function (delay = 6000) {
    $(this.el).each(function () {
      $(this.el).unslider(this.options(delay));
    });
    this.methods.playPause();
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

// reading xml and creating a slider using the xml data
/!*globals qg*!/;
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
  //generateSlider.init();
  if ($('[data-role="qg-slider"]').length) {
    qg.modules.processXML($('[data-role="qg-slider"]').data('options').src, 'GET').then(function (result) {
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
      $('[data-role="qg-slider"]').append(container);
    // slider
      $('.banner ').each(function () {
        var $this = $(this);
        $this.unslider({
          autoplay: true,
          delay: 3000,
          arrows: {
            prev: '<a class="unslider-arrow prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>',
            next: '<a class="unslider-arrow next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
            stop: '<a class="unslider-action unslider-pause"><i class="fa fa-pause" aria-hidden="true"></i></a>',
            start: '<a class="unslider-action unslider-play"><i class="fa fa-play" aria-hidden="true"></i></a>',
          },
        }).find('.unslider-arrow').click(function (event) {
          event.preventDefault();
          if ($(this).hasClass('next')) {
            $this.data('unslider').next();
          } else {
            $this.data('unslider').prev();
          }
        });
      });
    }, function (reason) {
      console.log('error in processing your request', reason);
    });
  } else {
    $('.banner ').each(function () {
      var $this = $(this);
      $this.unslider({
        autoplay: true,
        delay: 3000,
        arrows: {
          prev: '<a class="unslider-arrow prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>',
          next: '<a class="unslider-arrow next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
          stop: '<a class="unslider-action unslider-pause"><i class="fa fa-pause" aria-hidden="true"></i></a>',
          start: '<a class="unslider-action unslider-play"><i class="fa fa-play" aria-hidden="true"></i></a>',
        },
      }).find('.unslider-arrow').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('next')) {
          $this.data('unslider').next();
        } else {
          $this.data('unslider').prev();
        }
      });
    });
  }
}(jQuery, qg));

