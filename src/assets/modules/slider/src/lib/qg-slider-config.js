const sliderConfig = {
  el: '.banner',
  init: function (delay = 6000) {
    let self = this;
    $('.banner ').each(function () {
      let $this = $(this);
      $this.unslider(self.options(delay));
    });
  },
  convertDate: function (inputFormat) {
    let dateObj = new Date(inputFormat);
    return [ dateObj.getDate(), dateObj.toString().slice(4, 7), dateObj.getFullYear() ].join(' ');
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

module.exports = {
  sliderConfig: sliderConfig,
};
