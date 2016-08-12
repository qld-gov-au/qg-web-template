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
	
	var _currentSecondaryNav = __webpack_require__(3);
	
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _helpers = __webpack_require__(2);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mobileNav = function () {
	    var $sitenav = $("#qg-site-nav");
	    var $br = $("#qg-breadcrumb");
	    var $tools = $(".qg-tools");
	
	    function interactions() {
	        $("#qg-show-menu").on("click", function () {
	            $br.add($sitenav).slideToggle(200);
	        });
	        $("#qg-show-search").on("click", function () {
	            $("#qg-search-form").toggleClass("qg-visually-hidden-md", 1500);
	        });
	        $(window).resize(function () {
	            if ($(window).width() < _helpers2.default.breakpoints.bsSm) {} else if ($(window).width() >= _helpers2.default.breakpoints.bsSm && $(window).width() <= _helpers2.default.breakpoints.bsMd) {
	                if ($tools.is(":visible")) {
	                    $tools.hide(1);
	                }
	            } else {
	                if ($sitenav.is(":hidden")) {
	                    $sitenav.slideToggle(1);
	                    $br.slideToggle(1);
	                }
	                if ($tools.is(":hidden")) {
	                    $tools.slideToggle(1);
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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var helpers = function () {
	    var breakpoints = {
	        bsXs: 480,
	        bsSm: 768,
	        bsMd: 992,
	        bsLg: 1200
	    };
	    return {
	        breakpoints: breakpoints
	    };
	}();
	
	exports.default = helpers;

/***/ },
/* 3 */
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