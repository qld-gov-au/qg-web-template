import '../../../node_modules/bootstrap/dist/js/bootstrap.js';
import './components/global/bootstrap-accessibility.js';

import './components/autocomplete.js';
import './components/forms.js';
// import mobileNav from './components/nav/mobile-nav.js'
import activeSideNav from './components/nav/current-secondary-nav';
import utils from './components/global/utils.js';
import feedbackForm from './components/feedback-form';

(function () {
  'use strict';
  // mobileNav.interactions()
  activeSideNav.highlightNavItem();
  feedbackForm.init(window.qg && window.qg.franchiseName);

// utils.showHide()
}());
