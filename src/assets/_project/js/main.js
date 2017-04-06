/*
* Imports Javascript components for the GLUE
*/

import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
// import '../../../../../node_modules/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js'; // Removed due to accessibility issues (ironically)
import './legacy/bootstrap-accessibility.js';

import '../../../../node_modules/generate-id/dist/generate-id.min.js'; // For site-search-autocomplete
import './legacy/site-search-autocomplete.js';
import './fragments/qg-lightbox.js';
import './legacy/forms.js';

import './fragments/progressive-reveal';
import './fragments/language-scroller';

// import mobileNav from './components/nav/mobile-nav.js'
import activeSideNav      from './modules/section-nav';
import breakpoints        from './modules/breakpoints';
// import qgBsExtend    from './legacy/bootstrap-extensions.js';
import feedbackForm       from './modules/feedback-form';
import shareLinks         from './modules/share-links';
import parentWidth        from './modules/parent-width';
import accessibility      from './modules/accessibility';

(function () {
  'use strict';

  var qg = qg || {};
  var franchiseTitle = qg && qg.swe && qg.swe.franchiseTitle;

  activeSideNav.highlightNavItem();
  feedbackForm.init(franchiseTitle);
  shareLinks.init();

  accessibility.init();
}());
