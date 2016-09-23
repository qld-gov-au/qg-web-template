/*
* Imports Javascript components for the GLUE
*/

import '../../../node_modules/bootstrap/dist/js/bootstrap.js';

// TODO: Find a new bootstrap accessibility plugin, build one, or figure out how to get  this one working properly
// Disabled because it creates accessibility errors (strangely enough)
// import './components/global/bootstrap-accessibility.js';

import './components/autocomplete.js';
import './components/forms.js';
// import mobileNav from './components/nav/mobile-nav.js'
import activeSideNav from './components/nav/current-secondary-nav';
import utils from './components/global/utils.js';
import qgBsExtend from './components/global/bootstrap-extensions.js';
import feedbackForm from './components/feedback-form';

(function () {
    'use strict';
    // mobileNav.interactions()
    activeSideNav.highlightNavItem();
    var qg = qg || {};
    var franchiseTitle = qg && qg.swe && qg.swe.franchiseTitle;
    feedbackForm.init(franchiseTitle);
}());
