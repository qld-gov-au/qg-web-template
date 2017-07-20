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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
 data: API for loading data from CKAN (data.qld.gov.au)

 possible API ideas:
 .getDataFromCKAN()
 -- SQL statement (?)
 -- fields to get (array) SELECT, default *
 -- dataset to get from (multiple?)
 -- success callback (use promises)
 -- text filter (#query in SCD)
 -- custom filters (array) prop=value
 -- sort? (ORDER BY?)
 -- cache: true/false

 (different types of filtering... e.g. A or B, rather than A and B)
 */

/*global qg*/
(function (qg) {
	'use strict';

	// get data
	qg = qg || {};
	qg.data = qg.data || {};

	// TODO make this a promise
	qg.data.get = function (domain, sql, options) {
		var errorCallback;

		if ($.isFunction(options)) {
			options = {
				successCallback: options,
				cache: false
			};
		} else {
			options = $.extend({cache: false}, options);
		}

		errorCallback = function () {
			$(document).status('show', {
				status: 'fail',
				lightbox: true,
				title: 'Error loading data',
				closeButtonImage: options.modalCloseButtonImage || 'images/close.png',
				body: '<p>We were unable to retrieve data.</p><p>Please try again later.</p>'
			});
		};

		$.jsonp({
			url: 'https://' + domain + '/api/action/datastore_search_sql',
			data: { sql: sql },
			callbackParameter: 'callback',
			success: options.successCallback,
			error: errorCallback,
			pageCache: options.cache
		});
	};
}(qg));


/***/ })
/******/ ]);