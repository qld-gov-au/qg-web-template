/*
 * Imports Javascript components for the GLUE
 */

// env initialization
import qg from './utils/qg-env';
import './utils/qg-misc';
import './utils/qg-ajax-call';
import './utils/qg-load-google-api';

// import '../../../../../node_modules/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js'; // Removed due to accessibility issues (ironically)

// Utils

/*This 2 modules (breakpoints, parentwidth) are to be initialize where we are using these or If we make one common function for small utilities then we can initialize here in the main file.*/
/*import breakpoints        from './utils/breakpoints'; */

// Components
import './utils/parent-width';
import './legacy/forms/forms';
/*import './legacy/bootstrap-accessibility.js';*/
/*import '../lib/ext/generate-id.js';*/ // For site-search-autocomplete
import './legacy/site-search-autocomplete.js';

import './components/lightbox/qg-lightbox.js';
import './components/qg-social-media';
import './components/progressive-reveal';
import './components/license';
import './components/carousel/carousel';
import './components/quick-exit/quick-exit';
import './components/accordion/accordion';
import accessibility      from './components/accessibility/accessibility';

import './layout/footer/footer-legals';
import './components/forms/recaptcha';
import './components/forms/qg-address-autocomplete';

// Layout
import activeSideNav      from './layout/section-nav/section-nav';
import stepNav      from './layout/section-nav/step-nav';
import shareLinks         from './layout/content/share-links';
import './layout/content/content';
import './layout/content/content-types/figure-credits-toggle';
import feedbackForm       from './layout/footer/feedback-form';

import './utils/qg-init';
(function () {
  'use strict';
  let franchiseTitle = qg && qg.swe && qg.swe.franchiseTitle;
  activeSideNav.highlightNavItem();
  stepNav.init();
  feedbackForm.init(franchiseTitle);
  shareLinks.init();
  accessibility.init();
}());

