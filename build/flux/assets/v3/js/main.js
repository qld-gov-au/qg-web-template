/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var mobileNav = __webpack_require__(1);
	var activeSideNav = __webpack_require__(2);
	
	(function ($) {
	    "use strict";
	
	    mobileNav();
	    activeSideNav.init();
	
	    // getting specific lib using the loader module
	    qg.glue.loader.init(function () {
	        // code to execute after libs are loaded
	    });
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var nav = function nav() {
	
	    $(".alert").hide();
	    $("#cart").on("click", function () {
	        $(".alert").slideToggle("fast");
	    });
	
	    $("#qg-show-menu").on("click", function () {
	        $("#qg-breadcrumb, #qg-site-nav").slideToggle("fast");
	    });
	    $("#qg-show-search").on("click", function () {
	        $("#qg-search-form").slideToggle("fast");
	    });
	
	    $(window).resize(function () {
	        var $sitenav = $("#qg-site-nav");
	        var $br = $("#qg-breadcrumb");
	        var $tools = $("#qg-search-form");
	        if ($(window).width() < 768) {} else if ($(window).width() >= 768 && $(window).width() <= 992) {
	            if ($tools.is(":visible")) {
	                $tools.hide("fast");
	            }
	        } else {
	            if ($sitenav.is(":hidden")) {
	                $sitenav.slideToggle("fast");
	                $br.slideToggle("fast");
	            }
	            if ($tools.is(":hidden")) {
	                $tools.slideToggle("fast");
	            }
	        }
	    });
	};
	
	module.exports = nav;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var activeSideNav = {
	    init: function init() {
	        var currentFilename = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
	        this.highlightNavItem();
	    },
	    getCurrentTitle: function getCurrentTitle() {
	        var currentPageTitle = '';
	        if ($('#guide-title').length > 0) {
	            currentPageTitle = $('#guide-title').text();
	        } else if ($('meta[name="DCTERMS.alternative"]').length > 0 && $('meta[name="DCTERMS.alternative"]').eq(0).attr('content') !== '') {
	            currentPageTitle = $('meta[name="DCTERMS.alternative"]').eq(0).attr('content');
	        } else {
	            var titleClone = $('h1', '#qg-primary-content').eq(0).clone();
	            titleClone.find('.page-number').remove();
	            currentPageTitle = titleClone.text();
	        }
	        return currentPageTitle;
	    },
	    highlightNavItem: function highlightNavItem() {
	        var currentPageTitle = this.getCurrentTitle();
	        $(".qg-section-nav ul>li").each(function (index) {
	            if ($.trim($(this).text()) === $.trim(currentPageTitle)) {
	                $(this).find("a").addClass("active");
	            }
	        });
	    }
	};
	
	module.exports = activeSideNav;
	
	// Highlight current area in TOC
	// if (document.getElementById('toc') !== null) {
	//     // mark current page in guide
	//     $('a[href="' + currentFilename + '"]', '#toc').parent().addClass('current');
	//     $('.link-text', '#toc').filter(function () {
	//         return $.trim($(this).text()) === $('h2', '#content').eq(0).text();
	//     }).closest('li').addClass('current');
	//
	//     // Embed progress menu for pages that contain it (don't do this for the business franchise)
	//     $('.current-page', '#nav-section')
	//         .addClass('has-submenu')
	//         .append($('#toc ol').clone());
	// }
	// // Highlight current area in progress bar
	// if ($('#guide-progress').length > 0) {
	//     $('a[href="' + currentFilename + '"]', '#guide-progress').parent().addClass('current');
	// }

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map