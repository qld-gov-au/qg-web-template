import breakpoints from '../../utils/breakpoints.js';
let stepNav = {
  config: {
    $guideSubNav: $('#qg-section-nav .guide-sub-nav'),
    $qgSectionNav: $('#qg-section-nav'),
    $qgSectionNavListItems: $('#qg-section-nav .guide-sub-nav li'),
    $stepNav: $('#step-nav'),
    $heading: $('#qg-primary-content h1'),
  },
  init () {
    if (this.config.$guideSubNav.length > 0) {
      this.createStepNav();
      $(window).resize(() => this.createStepNav());
    }
  },
  getActiveNav () {
    let activeNav = 0;
    this.config.$qgSectionNavListItems.each(function (index) {
      if ($(this).find('a').hasClass('active')) {
        activeNav = index;
      }
    });
    return activeNav + 1;
  },
  countListItems () {
    return this.config.$qgSectionNavListItems.length;
  },
  view (getActiveNav, countListItems) {
    return `<section id="step-nav">
               <ul>
                 <li>
                    <a class="dropdown">Step ${getActiveNav} of ${countListItems}</a>
                 </li>
               </ul>
            </section>`;
  },
  createStepNav () {
    let block;
    if (($(window).width() < breakpoints.bsMd)) {
      if ($('#step-nav .guide-sub-nav').length === 0) {
        this.config.$heading.after(this.view(this.getActiveNav(), this.countListItems()));
        let $getSubNav = this.config.$guideSubNav.clone();
        $('#step-nav li').append($getSubNav);
      }
      $('#step-nav').hover(() => {
        block = setTimeout(function () {
          $('#step-nav .guide-sub-nav').stop(true, true).fadeIn({ duration: '100', queue: false }).css('display', 'none').slideDown('fast');
        }, 200);
      }, function () {
        clearTimeout(block);
        $('#step-nav .guide-sub-nav').stop(true, true).fadeOut({ duration: '100', queue: false }).slideUp('fast');
      });
    } else {
      $(document).find($('#step-nav')).remove();
    }
  },
};

export default stepNav;
