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
	
	var _mobileNav = __webpack_require__(1);
	
	var _mobileNav2 = _interopRequireDefault(_mobileNav);
	
	var _currentSecondaryNav = __webpack_require__(2);
	
	var _currentSecondaryNav2 = _interopRequireDefault(_currentSecondaryNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function ($) {
	    "use strict";
	
	    _mobileNav2.default.interactions();
	    _currentSecondaryNav2.default.highlightNavItem();
	
	    // getting specific lib using the loader module
	    qg.glue.loader.init(function () {
	        // code to execute after libs are loaded
	    });
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var mobileNav = function () {
	    var $sitenav = $("#qg-site-nav");
	    var $br = $("#qg-breadcrumb>.qg-inner");
	    var $tools = $(".qg-tools");
	
	    function interactions() {
	        $("#qg-show-menu").on("click", function () {
	            $("#qg-breadcrumb>.qg-inner , #qg-site-nav").slideToggle("fast");
	        });
	        $("#qg-show-search").on("click", function () {
	            $(".qg-tools").slideToggle("fast");
	        });
	        $(window).resize(function () {
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
	    }
	    return {
	        interactions: interactions
	    };
	}();
	
	module.exports = mobileNav;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var activeSideNav = function () {
	    var currentFilename = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
	
	    function refineText(text) {
	        return text.toLowerCase().replace(/ /g, '');
	    }
	
	    function getCurrentTitle() {
	        var currentPageTitle = '';
	        if ($('#guide-title').length > 0) {
	            currentPageTitle = $('#guide-title').text();
	        } else if ($('meta[name="DCTERMS.alternative"]').length > 0 && refineText($('meta[name="DCTERMS.alternative"]').eq(0).attr('content')) !== '') {
	            currentPageTitle = $('meta[name="DCTERMS.alternative"]').eq(0).attr('content');
	        } else {
	            var titleClone = $('h1', '#qg-primary-content').eq(0).clone();
	            titleClone.find('.page-number').remove();
	            currentPageTitle = titleClone.text();
	        }
	        return refineText(currentPageTitle);
	    }
	
	    function highlightNavItem() {
	        var currentPageTitle = getCurrentTitle();
	        $(".qg-section-nav ul>li").each(function (index) {
	            if (refineText($(this).text()) === $.trim(currentPageTitle)) {
	                $(this).find("a").addClass("active");
	            }
	        });
	    }
	
	    return {
	        highlightNavItem: highlightNavItem
	    };
	}();
	
	module.exports = activeSideNav;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map