/*
* Imports Javascript components for the GLUE
*/

// env initialization
import qg from './utils/qg-env';

import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
// import '../../../../../node_modules/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js'; // Removed due to accessibility issues (ironically)

// Utils

/*This 2 modules (breakpoints, parentwidth) are to be initialize where we are using these or If we make one common function for small utilities then we can initialize here in the main file.*/
/*import breakpoints        from './utils/breakpoints'; */

// Components
import './utils/parent-width';
import './legacy/forms/forms';
import './legacy/bootstrap-accessibility.js';
/*import '../lib/ext/generate-id.js';*/ // For site-search-autocomplete
/*import './legacy/site-search-autocomplete.js';*/

import './components/lightbox/qg-lightbox.js';
import './components/progressive-reveal';
import './components/license';
import accessibility      from './components/accessibility/accessibility';

// Layout
import './layout/footer/language-scroller';
import activeSideNav      from './layout/section-nav/section-nav';
import shareLinks         from './layout/content/share-links';
import feedbackForm       from './layout/footer/feedback-form';

import './utils/qg-init';
(function () {
  'use strict';
  var franchiseTitle = qg && qg.swe && qg.swe.franchiseTitle;
  activeSideNav.highlightNavItem();
  feedbackForm.init(franchiseTitle);
  shareLinks.init();
  accessibility.init();
}());
