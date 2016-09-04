import './components/autocomplete.js';
import './components/forms.js';
import mobileNav from './sections/nav/mobile-nav.js';
import activeSideNav from './sections/nav/current-secondary-nav';
import utils from './components/utils.js';


(function () {
    'use strict';
    mobileNav.interactions();
    activeSideNav.highlightNavItem();
    utils.showHide();
}());


