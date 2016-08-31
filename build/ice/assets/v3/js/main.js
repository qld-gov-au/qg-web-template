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
	
	__webpack_require__(1);
	
	var _mobileNav = __webpack_require__(3);
	
	var _mobileNav2 = _interopRequireDefault(_mobileNav);
	
	var _currentSecondaryNav = __webpack_require__(5);
	
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

	'use strict';
	
	__webpack_require__(2);
	
	// onready
	$(function () {
	    'use strict';
	
	    // until pan.search supports https, we cannot use suggest feature on https domains
	
	    if (/^https/.test(window.location.protocol)) {
	        return;
	    }
	
	    var MAX_SUGGESTIONS = 7;
	
	    // TODO refactor this so functions are not created for every search form found on the page
	
	    // setup for each form
	    // TODO hardcoded to pan.search.qld.gov.au
	    $('form').filter('[action*="//pan.search.qld.gov.au/"]').each(function () {
	        var form = this;
	        var searchField = $(form.elements.query).filter('[name="query"]');
	        var lastSearch = searchField.val();
	        var userTyped = '';
	
	        // ARIA
	        searchField.attr('role', 'combobox').attr('autocomplete', 'off')
	        // both? or list? http://www.w3.org/TR/2011/CR-wai-aria-20110118/states_and_properties#aria-autocomplete
	        .attr('aria-autocomplete', 'both');
	
	        // make the search box wider on focus
	        // keep it wide while interacting with the search form (box, button, autosuggest list)
	
	        // create the suggestion box
	        var suggestions = $('<ul role="listbox" class="listbox"/>').generateId('suggestbox');
	        searchField.after(suggestions);
	        searchField.attr('aria-owns', suggestions.attr('id'));
	
	        function closeSuggestions() {
	            suggestions.empty();
	        }
	
	        function prefillInput(value) {
	            searchField[0].value = value;
	            // console.log( 'prefilling', value, userTyped );
	            // http://stackoverflow.com/questions/12047648/setselectionrange-with-on-click-in-chrome-does-not-select-on-second-click
	            setTimeout(function () {
	                searchField[0].setSelectionRange(userTyped.length, searchField[0].value.length);
	            }, 0);
	        }
	
	        function moveFocus(n) {
	            var a = suggestions.find('a');
	            var focus = a.filter('.focus');
	            if (focus.length > 0) {
	                n = (a.index(focus) + n) % a.length;
	                focus.removeClass('focus');
	            } else {
	                n = n > -1 ? 0 : -1;
	            }
	            a = a.eq(n);
	            a.addClass('focus');
	            prefillInput(a.text());
	        }
	
	        // TODO how can we run this on both search forms (content and header) but show suggestions in the appropriate place?
	
	        suggestions.on('click', 'a', function (event) {
	            // should this submit? no. see ARIA instructions
	            event.preventDefault();
	
	            searchField.val($(this).text()).get(0).focus();
	            closeSuggestions();
	        });
	
	        var KEYS = {
	            alt: 18,
	            backspace: 8,
	            'delete': 46,
	            down: 40,
	            enter: 13,
	            escape: 27,
	            left: 37,
	            right: 39,
	            tab: 9,
	            up: 38
	        };
	
	        // clicking outside the field closes suggestions
	        $(document).on('click', function (event) {
	            if (searchField.is(event.target)) {
	                event.stopImmediatePropagation();
	            } else {
	                closeSuggestions();
	            }
	        });
	
	        // handle loss of focus due to TAB
	        // need to run this onblur, but NOT when focus remains in the suggestions box
	        // can we check focus in a parent element!? maybe a custom element
	        // <combobox><input><ul></combobox> ??
	        searchField.on('keydown', function (event) {
	            switch (event.which) {
	                case KEYS.up:
	                case KEYS.down:
	                    moveFocus(event.which === KEYS.down ? 1 : -1);
	                    break;
	                case KEYS.tab:
	                    closeSuggestions();
	            }
	        });
	        searchField.on('keyup', function (event) {
	            switch (event.which) {
	                case KEYS.escape:
	                case KEYS.enter:
	                    closeSuggestions();
	            }
	
	            // delete
	            // console.log( event.which );
	        });
	
	        searchField.on('input', function () {
	            userTyped = this.value;
	            if (userTyped.length < 3) {
	                closeSuggestions();
	                return;
	            }
	
	            // console.log( 'fetch suggestions for ', userTyped );
	
	            $.ajax({
	                // cache! (the URL will be change with the search text)
	                cache: true,
	                dataType: 'jsonp',
	                url: 'http://pan.search.qld.gov.au/s/suggest.json?',
	                data: {
	                    // TODO read these from search form
	                    collection: $(form.elements.collection).filter('[name="collection"]').val() || 'qld-gov',
	                    profile: $(form.elements.profile).filter('[name="profile"]').val() || 'qld_preview',
	                    show: MAX_SUGGESTIONS,
	                    partial_query: userTyped
	                }
	            }).done(function (data) {
	                if (data.length < 1) {
	                    closeSuggestions();
	                    return;
	                }
	                // TODO if the user has typed more, filter the matches in this array
	                // should we retreive more than 4 so there is a bit of slack here?
	                // what if ajax repsonses arrive out of sequence? track last match?
	                // console.log( 'suggestions for ', userTyped, data, 'user has typed', searchField.val() );
	                var match = new RegExp(userTyped.replace(/([.+*?\[^\]$(){}=!<>|:-\\,])/g, '\\$1'), 'g');
	                var safeInput = userTyped.replace(/</g, '&lt;');
	                suggestions.html($.map(data, function (value) {
	                    var htmlValue = value.replace(/</g, '&lt;').replace(match, '<mark>' + safeInput + '</mark>');
	                    // use form.action + default params
	                    return '<li><a href="http://pan.search.qld.gov.au/s/search.html?collection=qld-gov&profile=qld&query=' + encodeURIComponent(value) + '">' + htmlValue + '</a></li>';
	                }).join('\n'));
	
	                // issue #3: issues with typing over selected suggestion
	                // https://github.com/qld-gov-au/jquery.autocomplete/issues/3
	                // check length is increasing (if not, user is deleting input)
	                // if ( searchField[0].value.length > lastSearch.length ) {
	                // 	// set the value to the best answer and select the untyped portion of the text
	                // 	prefillInput( data[0] );
	                // }
	                lastSearch = searchField.val();
	            });
	
	            // show suggestions box
	            // click on suggestion = fill in form and submit
	            // hover over selection = update 'placeholder' style text
	        });
	    });
	}); // onready

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*! Generate ID - v1.0.3 - 2014-09-18
	* https://github.com/bboyle/Generate-ID
	* Copyright (c) 2014 Ben Boyle; Licensed MIT */
	!function(a){"use strict";a.fn.generateId=function(b){var c=1;return b=b?a.trim(b.toLowerCase().replace(/[^a-z0-9_]+/g," ")).replace(/\s+/g,"-"):"id",this.each(function(){var a;if(!this.getAttribute("id")){for(a=b;document.getElementById(a);)a=b+String(c),c++;this.setAttribute("id",a)}})}}(jQuery);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _helpers = __webpack_require__(4);
	
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
/* 4 */
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
/* 5 */
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
	        $("#qg-section-nav ul>li").each(function (index) {
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