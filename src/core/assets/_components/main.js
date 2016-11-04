/*
* Imports Javascript components for the GLUE
*/

var src = {
		core: '../../../core/assets/_components/',
		node_modules: '../../../../node_modules/'
	};

import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';

// TODO: Find a new bootstrap accessibility plugin, build one, or figure out how to get  this one working properly
// Disabled because it creates accessibility errors (strangely enough)
// import './components/global/bootstrap-accessibility.js';

import './general/autocomplete.js';

import './forms/forms.js';
// import mobileNav from './components/nav/mobile-nav.js'
import activeSideNav 	from './includes/nav-section/nav-section.js';
import breakpoints		from './includes/breakpoints.js';
import qgBsExtend 		from './bootstrap-extensions/bootstrap-extensions.js';
import feedbackForm 	from './general/feedback-form';
import shareLinks 		from './general/share-links';

(function () {
    'use strict';
    var qg = qg || {};
    var franchiseTitle = qg && qg.swe && qg.swe.franchiseTitle;

    activeSideNav.highlightNavItem();
    feedbackForm.init(franchiseTitle);
    shareLinks.init();
}());
