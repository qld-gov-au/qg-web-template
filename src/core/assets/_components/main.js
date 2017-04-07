/*
* Imports Javascript components for the GLUE
*/

var src = {
		core: '../../../core/assets/_components/',
		node_modules: '../../../../node_modules/'
	};

import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../../../node_modules/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js';

import './general/autocomplete.js';
import './general/lightbox.js';
import './forms/forms.js';

import './includes/footer/language-scroller.js';

// import mobileNav from './components/nav/mobile-nav.js'
import progressiveReveal 	from './general/progressive-reveal.js';
import activeSideNav 		from './includes/nav-section/nav-section.js';
import breakpoints			from './breakpoints.js';
// import qgBsExtend 		from './bootstrap-extensions/bootstrap-extensions.js';
import feedbackForm 		from './general/feedback-form';
import shareLinks 			from './general/share-links';
import resizeEvents			from '../lib/ext/butterfly/jquery.resize-events';
import history 					from '../lib/ext/butterfly/jquery.history';
import lightbox 				from '../lib/ext/butterfly/jquery.butterfly';

(function () {
    'use strict';
    var qg = qg || {};
    var franchiseTitle = qg && qg.swe && qg.swe.franchiseTitle;

    activeSideNav.highlightNavItem();
    feedbackForm.init(franchiseTitle);
    shareLinks.init();
}());
