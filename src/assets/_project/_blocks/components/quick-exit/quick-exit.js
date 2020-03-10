var quickExit = {
  el: '.qg-quick-exit',
  init: function () {
    this.methods();
  },
  methods: function () {
    var newloc = 'https://www.google.com.au';
    var el = $(this.el);
    if (el.length > 0) {
      $.getScript('{{CDN}}/latest/lib/ext/stickyfill.min.js', function () {
        // IE 11 fix
        /*global Stickyfill*/
        Stickyfill.add(el);
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
      });
    }
  },
};
quickExit.init();
