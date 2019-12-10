(function ($) {
  'use strict';
  var quickExit = {
    el: '.qg-quick-exit',
    init: function () {
      this.methods();
    },
    methods: function () {
      var newloc = 'https://www.google.com.au';
      // action on esc key press

      if ($(this.el).length > 0) {
        $(document).keydown(function (e) {
          if (e.keyCode === 27) {
            window.open(newloc, '_blank', '');
            window.location.replace(newloc);
            return false;
          }
        });

        // clicking on the quick exit button
        $('body').on('click', '.qg-quick-exit__button', function () {
          window.open(newloc, '_blank', '');
          window.location.replace(newloc);
        });
      }
    },
  };
  quickExit.init();
}(jQuery));
