var quickExit = {
  el: '.qg-quick-exit',
  init: function () {
    this.methods();
  },
  methods: function () {
    var newloc = 'https://www.google.com.au';
    if ($(this.el).length > 0) {
      // IE 11 fix
      require('../../../../../../node_modules/stickyfilljs').add($(this.el));
      // navigating on pressing Escape key
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
