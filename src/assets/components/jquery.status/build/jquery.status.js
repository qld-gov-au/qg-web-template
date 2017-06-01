/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/***
 Copyright 2007 Chris Hoffman
 
 This software is dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.
***/

/******************************
  Commonly used variable names

  args - an array of function arguments
  attr - an attribute name
  el   - a DOM element
  i    - an array index
  jq   - a jQuery object
  val  - a value
 ******************************/

(function( $, window ) {
	"use strict";

var document = window.document,

ariaStatesNS = "http://www.w3.org/2005/07/aaa",

xhtmlRoles = [
	"main",
	"secondary",
	"navigation",
	"banner",
	"contentinfo",
	"statements",
	"note",
	"seealso",
	"search"
],

xhtmlRolesRegex = new RegExp("^" + xhtmlRoles.join("|") + "$"),

focusableRoles = [
	"button",
	"checkbox",
	"columnheader",
	"combobox",
	"grid",
	"gridcell",
	"group",
	"listbox",
	"listitem",
	"menu",
	"menubar",
	"menuitem",
	"menuitemcheckbox",
	"menuitemradio",
	"option",
	"radio",
	"radiogroup",
	"row",
	"rowheader",
	"slider",
	"spinbutton",
	"tab",
	"tabpanel",
	"textbox",
	"toolbar",
	"tree",
	"treegrid",
	"treeitem"
],

focusableRolesRegex = new RegExp("^(wairole:)?" + focusableRoles.join("|") + "$"),

ariaStateAttr = (function() {
	// Use the aria- attribute form.
	return function(jq, attr, val) {
		if (typeof val !== "undefined") {
			jq.each(function(i, el) {
				$(el).attr("aria-" + attr, val);
			});
		} else {
			return jq.attr("aria-" + attr);
		}
	};
}())

;
  
$.fn.extend({  
	ariaRole : function(role){
		var jq = this;
		if (role) {

			// Add the role: prefix, unless it's one of the XHTML Role Module roles

			role = xhtmlRolesRegex.test(role) ? role : role;

			jq.each(function(i, el) {
				$(el).attr("role", role);
				
				if (focusableRolesRegex.test(role) && el.tabIndex < 0) {
					el.tabIndex = 0;
				}
			});
			return jq;
		} else {
			role = jq.eq(0).attr("role");
			if (role) {
				role = role.replace(/^wairole:/, "");
			}
			return role;
		}
	},

	ariaState : function() {
		var args = arguments,
			jq = this;
		if (args.length === 2) {

			// State and value were given as separate arguments.

			jq.each(function(i, el) {
				ariaStateAttr($(el), args[0], args[1]);
			});
			return jq;
		} else {
			if (typeof args[0] === "string") {

				// Just a state was supplied, so return a value.

				return ariaStateAttr(jq.eq(0), args[0]);
			} else {

				// An object was supplied. Set states and values based on the keys/values.

				jq.each(function(i, el){
					$.each(args[0], function(state, val) {
						$(el).ariaState(state, val);
					});
				});
				return jq;
			}
			}
		},
		
		ariaParse : function() {
		// Parse classnames for ARIA info.
		
		var jq = this;
		jq.find("*").filter(".axs").each(function(i, el){
			var classNames = $(el).attr("className").split(/\s+/),
				parsingAria = false,
				roleSet = false;
 
			$.each(classNames, function(i, className) {
				if (className === "axs") {
					parsingAria = true;
					return true;
				}
				if (parsingAria) {
					if (roleSet) {
						var state = className.split(/-/);
						$(el).ariaState(state[0], state[1] || "true");
					} else {
						$(el).ariaRole(className);
						roleSet = true;
					}
				}
			});
		});
		jq.trigger("ariaready");
		return jq;
	}
});

// Add :ariaRole(role) and :ariaState(state[=value]) filters.

$.extend($.expr[':'], {
	// a is the element being tested, m[3] is the argument to the selector.

	ariaRole : "jQuery(a).ariaRole()===m[3]",
	ariaState : "jQuery(a).ariaState(m[3].split(/=/)[0])===(/=/.test(m[3])?m[3].split(/=/)[1]:'true')"
});

$(document).ready(function(){
	$(document).ariaParse();
});

}( jQuery, window ));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dep__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_dep__);

(function ($) {
	// var depFlag = [];
	const jqueryStatus = function () {
		/*
			jquery status plugin

			displays a "status" box

			<div class="status info">
				<h2>Title<h2>
				body
			</div>

			requires jquery
			requires jquery.butterfly
			requires jquery.generateId

		*/
		'use strict';
		console.log('inside status');

		var methods = {

			// $( element ).status( 'show', options )
			// shows status box
			// options are:
			// status - info | warn | fail |success - class of status to show
			// lightbox - true | false - display status box in a lightbox, false displays nothing (TODO)
			// title - text/html - contents for the <h2>
			// body - text/html - contents of the lightbox (after the h2)
			show: function (options) {
				var html,
					link,
					callback;

				// butterfly options
				options = $.extend({}, {
					status: 'info',
					lightbox: false,
					title: 'Status message',
					body: ''
				}, options);

				// show status in a lightbox
				if (options.lightbox === true) {
					// create dummy status box
					html = $(
							'<div class="status ' + options.status + '">' +
								'<h2>' + options.title + '</h2>' + options.body +
							'</div>'
						)
						// give it an id for lightbox
						.generateId(options.status)
					;

					link = $('<a>' + options.title + '</a>').attr('href', '#' + html[ 0 ].id);

					// add dummy html to page
					html
						.wrap('<div style="display: none"/>')
						.parent()
							.append(link)
							.appendTo(document.body)
					;

					// hardcoded butterfly options
					callback = options.callbackPostOpen;
					$.extend(options, {

						// prevent status lightbox from going in browser history
						storeState: false,

						callbackPostOpen: function () {
							// cleanup DOM after lightbox opened
							html.parent().remove();
							// support callback
							if (typeof callback === 'function') {
								callback.apply(this);
							}
						}
					});

					// find the status box link
					link
						// set us up a lightbox
						.butterfly(options)
						// activate it
						.click()
					;
				}

				// chaining
				return this;
			},

			// init - does nothing
			init: function () {
				return this;
			}
		};

		$.fn.status = function (method) {
			// Method calling logic
			// http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
			if (methods[method]) {
				return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.status');
			}
		};
	};

	//Check dependencies are all available
	if ($.fn.generateId === undefined || window.ResizeEvents === undefined || $.butterfly === undefined) {
		console.log('missing dependency');
		var d1 = $.Deferred(),
			d2 = $.Deferred(),
			d3 = $.Deferred();
		if ($.fn.generateId === undefined) {
			$.getScript('https://rawgit.com/qld-gov-au/glue-template/working/src/assets/components/autocomplete/src/lib/generate-id.js').done(function () { console.log('generate id loaded'); d1.resolve(); });
		}
		if (window.ResizeEvents === undefined || $.butterfly === undefined) {
			if (window.ResizeEvents === undefined) {
				$.getScript('https://rawgit.com/qld-gov-au/glue-template/Feature/QOL-1101-Maps-JS-Transfer/src/assets/components/jquery.resize-events/build/jquery.resize-events.js').done(function () { console.log('resize loaded'); d2.resolve(); });
			} else {
				d2.resolve();
			}
			$.when(d2).done(function () {
				$.getScript('https://rawgit.com/qld-gov-au/glue-template/working/src/assets/_project/lib/ext/butterfly/jquery.butterfly.js').done(function () { console.log('butterfly loaded'); d3.resolve(); });
			});
		}
		$.when(d1, d2, d3).then(function (v1, v2, v3) {
		    jqueryStatus();
		});
	} else {
		jqueryStatus();
	}
})(jQuery);


/***/ })
/******/ ]);