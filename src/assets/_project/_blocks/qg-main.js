// env initialization
import './utils/qg-env';
// utils import
import './utils/qg-util';

// legacy module imports
import './legacy/forms/forms';

// components import
import './components/qg-components';

// Layout imports
import './layout/footer/footer-legals';
import activeSideNav from './layout/section-nav/qg-section-nav';
import stepNav from './layout/section-nav/qg-step-nav';
import './layout/content/share-links';
import './layout/breadcrumbs/breadcrumbs';
import './layout/content/content';
import './layout/content/content-types/figure-credits-toggle';
import feedbackForm from './layout/footer/feedback-form';

(function () {
  'use strict';
  let franchiseTitle = window.qg.swe.franchiseTitle;
  activeSideNav.highlightNavItem();
  stepNav.init();
  feedbackForm.init(franchiseTitle);
})();

if ($("#qg-quick-exit__input").length > 0) {
  $("body").addClass("private-content");
}
