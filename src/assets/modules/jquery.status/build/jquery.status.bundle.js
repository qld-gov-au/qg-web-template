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

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};__webpack_require__(0);

(function ($) {
	/*
               	jquery status  plugin
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

	var methods = {

		// $( element ).status( 'show', options )
		// shows status box
		// options are:
		// status - info | warn | fail |success - class of status to show
		// lightbox - true | false - display status box in a lightbox, false displays nothing (TODO)
		// title - text/html - contents for the <h2>
		// body - text/html - contents of the lightbox (after the h2)
		show: function show(options) {
			var html,
			link,
			callback;

			// butterfly options
			options = $.extend({}, {
				status: 'info',
				lightbox: false,
				title: 'Status message',
				body: '' },
			options);

			// show status in a lightbox
			if (options.lightbox === true) {
				// create dummy status box
				html = $(
				'<div class="status ' + options.status + '">' +
				'<h2>' + options.title + '</h2>' + options.body +
				'</div>')

				// give it an id for lightbox
				.generateId(options.status);


				link = $('<a>' + options.title + '</a>').attr('href', '#' + html[0].id);

				// add dummy html to page
				html.
				wrap('<div style="display: none"/>').
				parent().
				append(link).
				appendTo(document.body);


				// hardcoded butterfly options
				callback = options.callbackPostOpen;
				$.extend(options, {

					// prevent status lightbox from going in browser history
					storeState: false,

					callbackPostOpen: function callbackPostOpen() {
						// cleanup DOM after lightbox opened
						html.parent().remove();
						// support callback
						if (typeof callback === 'function') {
							callback.apply(this);
						}
					} });


				// find the status box link
				link
				// set us up a lightbox
				.butterfly(options)
				// activate it
				.click();

			}

			// chaining
			return this;
		},

		// init - does nothing
		init: function init() {
			return this;
		} };


	$.fn.status = function (method) {
		// Method calling logic
		// http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.status');
		}
	};
})(jQuery);

/***/ })
/******/ ]);