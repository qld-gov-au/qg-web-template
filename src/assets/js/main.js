import './components/autocomplete.js';
import './components/forms.js';
//import mobileNav from './components/nav/mobile-nav.js';
import activeSideNav from './components/nav/current-secondary-nav';
import utils from './components/global/utils.js';


(function () {
    'use strict';
    //mobileNav.interactions();
    activeSideNav.highlightNavItem();
    utils.showHide();
}());


