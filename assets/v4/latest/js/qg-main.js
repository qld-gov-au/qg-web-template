/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/_project/_blocks/components/accessibility/qg-accessibility.js":
/*!**********************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/accessibility/qg-accessibility.js ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
/* ========================================================================
* Accessibility helpers
* ======================================================================== */



function opensInNewWindow() {
  var $target = $('a[target=_blank]');
  if (!$target.hasClass('qg-accessibility-off') &&
  // Legacy
  $target.attr('data-access-extlink') !== false &&
  // Legacy
  $target.attr('data-access-new-window') !== false && $target.attr('href') !== undefined) {
    if ($.contains('.qg-blank-notice', $target) === false) {
      $target.append(' <span class="qg-blank-notice sr-only">(Opens in new window)</span> ');
    }
    if ($target.attr('title') === undefined) {
      $target.attr('title', 'Opens in new window');
    }
  }
}
function addCorrectIncorrect() {
  var ext = ':not(:has(.qg-blank-notice))';
  var $correct = $(".qg-correct".concat(ext, ", table.qg-correct-incorrect td:nth-child(odd)").concat(ext));
  var $incorrect = $(".qg-incorrect".concat(ext, ", table.qg-correct-incorrect td:nth-child(even)").concat(ext));
  $correct.prepend('<span class="qg-blank-notice sr-only">Correct.</span> ');
  $incorrect.prepend('<span class="qg-blank-notice sr-only">Incorrect.</span> ');
}
function init() {
  if ($('body').attr('data-qg-accessibility') !== false) {
    opensInNewWindow();
    addCorrectIncorrect();
  }
}
module.exports = {
  init: init
};

/***/ }),

/***/ "./src/assets/_project/_blocks/components/accordion/qg-accordion.js":
/*!**************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/accordion/qg-accordion.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgAccordion: () => (/* binding */ QgAccordion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


/**
 * This handles functionalities like
 * - Expand all / Collapse all link
 * - Ability to direct link to each section and expand the linked section
 * - Handles aria-expanded values
 * - Open an accordion panel if it finds #title-Of-Accordion or #id-panel-section in the url
 */
var QgAccordion = /*#__PURE__*/function () {
  function QgAccordion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QgAccordion);
    this.$accordion = $('.qg-accordion');
    this.$accordion_v2 = $('.qg-accordion-v2');
    this.$accHeading = $('.acc-heading');
    this.urlHashVal = window.location.hash;
    if (this.$accordion.length > 0) {
      this.accordionPanelClick();
      this.collapseAll();
      this.expandAll();
      // check and enable hashtrigger function
      if (this.urlHashVal) {
        this.hashTrigger();
      }
      // enable GA tracking
      this.gaTracking();
      // legacyAccordion is to support SWE2 accordion
      this.legacyAccordion();
    }
  }

  /**
   * filterSpecialChar
   * @param {string} value - value to filter
   * @return {undefined}
   **/
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QgAccordion, [{
    key: "filterSpecialChar",
    value: function filterSpecialChar(value) {
      return decodeURI(value.toLowerCase().replace(/[^a-zA-Z0-9/]/g, ''));
    }

    /**
     * hashTrigger function open matching accordion if it finds #title-Of-Accordion or #id-panel-section in the url
     * function trims down the hash value, and then it matches with the titles of the accordion, and if there is a matching title, then it open that panel
     * @return {undefined}
     **/
  }, {
    key: "hashTrigger",
    value: function hashTrigger() {
      var self = this;
      var hashValTrimmed = this.filterSpecialChar(self.urlHashVal);
      var hashValueIdMatch = self.urlHashVal.replace('#', '');
      if (hashValTrimmed.length > 0) {
        // supports ID match
        self.$accordion.find('.collapsing-section').each(function (index, titleEl) {
          if ($(this).attr('id') === hashValueIdMatch) {
            $(this).parent('article').find(self.$accHeading).trigger('click');
          }
        });

        // supports title match
        // check if any panel is already open that worked with the ID matching function
        if ($('.qg-accordion--open').length <= 0) {
          self.$accordion.find('.title').each(function (index, titleEl) {
            if (self.filterSpecialChar($(titleEl).text()) === hashValTrimmed) {
              $(this).parents(self.$accHeading).trigger('click');
            }
          });
        }
      }
    }

    /**
     * toggleOpenCloseClass function toggle the class and 'aria-expanded' value according to the accordion state
     * @param {selector} curr - target selector
     * @return {undefined}
     **/
  }, {
    key: "toggleOpenCloseClass",
    value: function toggleOpenCloseClass(curr) {
      if (curr.hasClass('qg-accordion--open')) {
        curr.removeClass('qg-accordion--open').addClass('qg-accordion--closed');
        curr.attr('aria-expanded', 'false');
      } else {
        curr.removeClass('qg-accordion--closed').addClass('qg-accordion--open');
        curr.attr('aria-expanded', 'true');
      }
    }

    /**
     * accordionClick -> click on an accordion
     * @return {undefined}
     **/
  }, {
    key: "accordionPanelClick",
    value: function accordionPanelClick() {
      var self = this;
      var accHeading = self.$accordion_v2.find(self.$accHeading);
      accHeading.on('click', function (event) {
        self.toggleOpenCloseClass($(this));
      });
    }

    /**
     * keyboardAccessibility -> accordion to work with keyboard
     * @param {string} event -> click , keypress etc
     * @return {undefined}
     **/
  }, {
    key: "keyboardAccessibility",
    value: function keyboardAccessibility(event) {
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        var code = event.charCode || event.keyCode;
        if (code === 32 || code === 13) {
          return true;
        }
      } else {
        return false;
      }
    }

    /**
     * collapseAll -> collapse all accordion on a page on clicking 'Collapse all' button
     * @return {undefined}
     **/
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var self = this;
      // collapse all click
      // label selector is to provide backward compatibility in case projects are using old markup
      $('.qg-acc-controls .collapse, label[for=\'collapse\']').on('click keypress', function (event) {
        if (self.keyboardAccessibility(event) === true) {
          $(this).parents('.qg-accordion').find('.acc-heading').removeClass('qg-accordion--open').addClass('qg-accordion--closed');
          // backward compatible code to support SWE2 accordion
          $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', false);
          event.preventDefault();
        }
      });
    }

    /**
     * expandAll -> expand all accordion on a page on clicking 'Expand all' button
     * @return {undefined}
     **/
  }, {
    key: "expandAll",
    value: function expandAll() {
      var self = this;
      //expand all click
      // label selector is to provide backward compatibility in case projects are using old markup
      $('.qg-acc-controls .expand, label[for=\'expand\']').on('click keypress', function (event) {
        if (self.keyboardAccessibility(event) === true) {
          $(this).parents('.qg-accordion').find('.acc-heading').removeClass('qg-accordion--closed').addClass('qg-accordion--open');
          // backward compatible code to support SWE2 accordion
          $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', true);
          event.preventDefault();
        }
      });
    }

    /**
     * gaTracking -> enable tracking on accordion, this function adds an attribute 'data-analytics-link-group' with a acc title
     * @return {undefined}
     **/
  }, {
    key: "gaTracking",
    value: function gaTracking() {
      this.$accordion.find('.qg-accordion--ga').each(function () {
        var title = 'accordion title - ' + $(this).find($('.title')).text();
        $(this).attr('data-analytics-link-group', title);
      });
    }

    /**
     * legacyAccordion function supports swe2 accordion in use at some places
     * @return {undefined}
     **/
  }, {
    key: "legacyAccordion",
    value: function legacyAccordion() {
      var self = this;
      var accItem = $('.qg-accordion:not(.qg-accordion-v2)').find('article');
      accItem.find('.acc-heading').on('keypress', function (event) {
        if (event.target === event.currentTarget) {
          event.preventDefault();
          if (self.keyboardAccessibility(event) === true) {
            var parent = $(this).parent();
            if (parent.find('input[name="tabs"]:checked').length > 0) {
              parent.find('input[name="tabs"]').prop('checked', false);
            } else {
              parent.find('input[name="tabs"]').prop('checked', true);
            }
          }
        }
      });

      // focus heading on click
      $('input[name=tabs]').click(function () {
        $(this).parent('article').find('.acc-heading').focus();
      });

      // highlight title on hover
      accItem.hover(function () {
        accItem.find('.title').removeClass('ht');
        $(this).find('.title').addClass('ht');
      }, function () {
        accItem.find('.title').removeClass('ht');
      });
    }
  }]);
  return QgAccordion;
}();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/carousel/qg-carousel.js":
/*!************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/carousel/qg-carousel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*aside carousel play and pause feature*/


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
(function ($) {
  var carousels = [];
  var eqHeight = function eqHeight(carousels) {
    //For each carousel on the page...
    carousels.forEach(function (carousel) {
      //Get the height of each carousel slide in the carousel...
      var slides = $('#' + carousel).find('.carousel-item');

      //Each slides height into an array...
      var slideHeights = slides.map(function (e, slide) {
        return $(slide).height();
      });

      //Assign the tallest value to every slide
      slideHeights.map(function (e, slide) {
        $(slide).css('min-height', Math.max.apply(Math, _toConsumableArray(slideHeights)) + 'px');
      });
    });
  };
  $('.qg-featured .carousel.slide').each(function (int, element) {
    var carouselID = $(element).attr('id');
    carousels.push(carouselID);

    //Start all slides to cycle by default
    $(this).attr('data-state', 'cycle');

    //Bind click/tap event
    $('#' + carouselID).find('.toggleCarousel').on('click', function (e) {
      e.preventDefault();
      var parentCarousel = $(this).parents('div.carousel.slide');
      var currentState = parentCarousel.attr('data-state');
      switch (currentState) {
        //If paused, switch to cycling state
        case 'pause':
          parentCarousel.attr('data-state', 'cycle').carousel('cycle');
          $(this).find('i, span').not('.button-title').removeClass('fa-sync fa-pause').addClass('fa-pause');
          break;
        case 'cycle':
          //If cycling, switch to a paused state
          parentCarousel.attr('data-state', 'pause').carousel('pause');
          $(this).find('i, span').not('.button-title').removeClass('fa-sync fa-pause').addClass('fa-sync');
          break;
      }
    });
  });

  //Equal height each carousel slide
  window.onload = function () {
    eqHeight(carousels);
  };
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/components/forms/qg-address-autocomplete.js":
/*!*********************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/forms/qg-address-autocomplete.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgAddressAutocomplete: () => (/* binding */ QgAddressAutocomplete)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_qg_load_google_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/qg-load-google-api */ "./src/assets/_project/_blocks/utils/qg-load-google-api.js");


/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 On Maps Autocomplete
- https://www.qld.gov.au/transport/contacts/centres/_nocache
- https://www.qld.gov.au/law/legal-mediation-and-justice-of-the-peace/about-justice-of-the-peace/search-for-your-nearest-jp-or-cdec
 */

/*global qg, google*/

var loadGoogleApi = new _utils_qg_load_google_api__WEBPACK_IMPORTED_MODULE_2__.QgLoadGoogleApi();
var QgAddressAutocomplete = /*#__PURE__*/function () {
  function QgAddressAutocomplete() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QgAddressAutocomplete);
    this.$searchWidget = $('.qg-search-widget');
    this.$inpuField = $('.qg-location-autocomplete');
    this.$inpuFieldContainer = $('.qg-fl');
    this.$latitude = $('.qg-search-widget__latitude');
    this.$longitude = $('.qg-search-widget__longitude');
    this.$form = $('.qg-search-widget-form');
    this.$getCurrentLocIcon = $('.qg-app-geocoding');
    if (this.$searchWidget.length > 0 || this.$inpuField.length > 0) {
      this._setValFromUrlParameters();
      this._resetValue();
      this._keypress();
      this._onBlue();
      this._getCurrentLocation();
      this._addressAutocomplete();
    }
  }

  /**
   * _setValFromUrlParameters -> set value of the input fields from the URL
   * @return {undefined}
   **/
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QgAddressAutocomplete, [{
    key: "_setValFromUrlParameters",
    value: function _setValFromUrlParameters() {
      this.$form.find(':input:not(:checkbox):not(:radio), select, textarea').each(function () {
        var name = $(this).attr('name');
        var getParameterVal = qg.swe.getParameterByName($(this).attr('name'));
        if (getParameterVal === false) {
          getParameterVal = '';
        } else {
          getParameterVal = $('[name="' + name + '"]').val(getParameterVal);
        }
      }).end().find('input[type=checkbox], input[type=radio]').each(function () {
        var name = $(this).attr('name');
        var getParameterVal = qg.swe.getParameterByName(name);
        if (getParameterVal === false) {
          getParameterVal = '';
        } else {
          getParameterVal = $('[value="' + getParameterVal + '"]').prop('checked', true);
        }
      });
    }

    /**
     * _resetValue -> reset form values
     * @return {undefined}
     **/
  }, {
    key: "_resetValue",
    value: function _resetValue() {
      this.$searchWidget.find('button[type="reset"]').click(function (evt) {
        evt.preventDefault();
        $(this).parent(this.$form).find(':input:not(:checkbox):not(:radio), select, textarea').each(function () {
          $(this).val('');
        }).end().find('input[type=checkbox], input[type=radio]').each(function () {
          $(this).prop('checked', false);
        });
      });
    }

    /**
     * _onBlue -> reset hidden field values if a user move focus out of the search box
     * @return {undefined}
     **/
  }, {
    key: "_onBlue",
    value: function _onBlue() {
      var self = this;
      this.$inpuField.blur(function () {
        console.log('blur');
        if ($(this).val().length === 0) {
          this.$searchWidget.find(self.$latitude).val('').end().find(self.$longitude).val('');
        }
      });
    }

    /**
     * _getCurrentLocation -> get current location
     * @return {undefined}
     **/
  }, {
    key: "_getCurrentLocation",
    value: function _getCurrentLocation() {
      var self = this;
      if (this.$getCurrentLocIcon.length > 0) {
        $.each(this.$getCurrentLocIcon, function (i, ele) {
          $(ele).on('click', function (event) {
            var _this = this;
            event.preventDefault();
            if (navigator.geolocation) {
              var showLocation = function showLocation(position) {
                // get latitude and longitude
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var latlng = {
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude)
                };
                var geocoder = new google.maps.Geocoder();
                var locationInput = $(_this).parent().find(self.$inpuField);
                // Insert latitude and longitude value to the hidden input fields
                self.$searchWidget.find(self.$latitude).val(latitude).end().find(self.$longitude).val(longitude);
                // get address using latitude and longitude from Google maps api
                geocoder.geocode({
                  location: latlng
                }, function (results, status) {
                  if (status === 'OK') {
                    if (results[1]) {
                      locationInput.val(results[1].formatted_address);
                      locationInput.trigger('place_changed');
                    } else {
                      window.alert('No results found');
                    }
                  } else {
                    window.alert('Geocoder failed due to: ' + status);
                  }
                });
              };
              var errorHandler = function errorHandler(err) {
                if (err.code === 1) {
                  alert('Error: Access is denied!');
                } else if (err.code === 2) {
                  alert('Error: Position is unavailable!');
                }
              };
              var options = {
                timeout: 60000
              };
              navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            } else {
              // Browser doesn't support Geolocation
              window.alert('Your browser does not support Geolocation');
            }
          });
        });
      }
    }

    /**
     * _addressAutocomplete -> handles autocomplete using Google API
     * @return {undefined}
     **/
  }, {
    key: "_addressAutocomplete",
    value: function _addressAutocomplete() {
      var self = this;
      var googleAddressAutocomplete = function googleAddressAutocomplete() {
        var qldBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-29, 138.0578426), new google.maps.LatLng(-9.9339, 153.63831));
        // set events on all autocomplete fields (there can be more than one autocomplete on a same page)
        $.each(self.$inpuField, function () {
          var dataStrictBounds = $(this).data('strictbounds') || true;
          var options = {
            bounds: qldBounds,
            strictBounds: dataStrictBounds,
            types: ['geocode']
          };
          var autocomplete = new google.maps.places.Autocomplete(this, options);

          // add lat and lng values after a option is selection from the autocomplete options
          autocomplete.addListener('place_changed', function () {
            var place = autocomplete.getPlace();
            if (place.geometry) {
              self.$searchWidget.find(self.$latitude).val(place.geometry.location.lat()).end().find(self.$longitude).val(place.geometry.location.lng());
            }
          });
        });
      };
      // load google api with a valid key
      loadGoogleApi._loadGoogleApi(googleAddressAutocomplete);
    }

    /**
     * _keypress -> keypress event track any enter or tab on input field
     * If there is a enter or tab press then it takes the first result
     * @return {undefined}
     **/
  }, {
    key: "_keypress",
    value: function _keypress() {
      var self = this;
      // eslint-disable-next-line no-unused-vars
      var addressSelection = false;
      var reqReady = true;
      self.$inpuField.keypress(function (event) {
        if ($(this).val().length >= 1) {
          if (event.keyCode === 13 || event.keyCode === 9) {
            event.preventDefault();
            // get the value from the autocomplete options
            var itemFull = $('.pac-container .pac-item:first').text();
            var itemQuery = $('.pac-container .pac-item:first .pac-item-query').text();
            var firstResult = itemQuery + ' ' + itemFull.substring(itemQuery.length);
            // check if results are there
            if (firstResult.length > 1 && reqReady === true) {
              self.$inpuField.val(firstResult);
              var geocoder = new google.maps.Geocoder();
              geocoder.geocode({
                address: firstResult
              }, function (results, status) {
                if (status === 'OK') {
                  reqReady = false;
                  if (results) {
                    $('.qg-location-autocomplete').val(results[0].formatted_address);
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    addressSelection = true;
                    self.$searchWidget.find(self.$latitude).val(latitude).end().find(self.$longitude).val(longitude);
                    setTimeout(function () {
                      reqReady = true;
                    }, 1000);
                  } else {
                    reqReady = true;
                  }
                } else {
                  reqReady = true;
                  if (status === 'ZERO_RESULTS' || status === 'OVER_QUERY_LIMIT' || status === undefined) {
                    console.error(status);
                  }
                }
              });
            }
          }
        }
      });
    }
  }]);
  return QgAddressAutocomplete;
}();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/forms/qg-forms.js":
/*!******************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/forms/qg-forms.js ***!
  \******************************************************************/
/***/ (() => {

(function ($) {
  'use strict';

  /**
   * This adds a pattern for radio button and checkbox , more info https://qld-gov-au.github.io/web-template-release/forms.html#radio-button-and-checkbox-pattern
   **/
  var $rcTheme = $('.rc-theme');
  function toggleFocus(e) {
    if (e.type === 'focus') {
      $(this).parents('li').addClass('rc-theme__focus');
    } else {
      $(this).parents('li').removeClass('rc-theme__focus');
    }
  }
  if ($rcTheme.length > 0) {
    var $fr = $('input[type="radio"]');
    var $fc = $('input[type="checkbox"]');
    $rcTheme.find($fr).on('change', function () {
      if ($(this).is(':checked')) {
        $(this).parents('.rc-theme').find('li').removeClass('rc-theme__active');
        $(this).parents('li').addClass('rc-theme__active');
      } else {
        $(this).parents('li').removeClass('rc-theme__active');
      }
    });
    $rcTheme.find($fc).on('change', function () {
      if ($(this).is(':checked')) {
        $(this).parents('li').addClass('rc-theme__active');
      } else {
        $(this).parents('li').removeClass('rc-theme__active');
      }
    });
    $rcTheme.find($fc).on('focus blur', toggleFocus);
    $rcTheme.find($fr).on('focus blur', toggleFocus);
  }
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/components/forms/qg-recaptcha.js":
/*!**********************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/forms/qg-recaptcha.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/qg-google-keys */ "./src/assets/_project/_blocks/data/qg-google-keys.json");
/*globals grecaptcha, qg*/
/*
* Any form with form attribute data-recaptcha="true", will run and validate with Google invisible recaptcha
*/

(function ($, swe) {
  'use strict';

  var qgRecaptcha = {
    config: {
      $feedbackForm: $('#qg-page-feedback-form'),
      $recaptchaOnPage: $('form[data-recaptcha="true"]'),
      $grecaptchaBadge: $('.grecaptcha-badge'),
      loadedRecaptcha: false
    },
    /**
     * Initialise qgRecaptcha
     * @return {undefined}
     **/
    init: function init() {
      var $feedbackForm = this.config.$feedbackForm;
      // let loadedRecaptcha = false;
      if ($feedbackForm.length > 0) {
        /**
         * check if env is not the prod env then change submission handler url to test.smartservice.qld.gov.au
         **/
        if (!this.isProd()) {
          var testUrl = $feedbackForm.attr('action').replace('www.smartservice.qld.gov.au', 'test.smartservice.qld.gov.au');
          $feedbackForm.attr('action', testUrl);
        }
        /**
         * if data-recaptcha attribute is not present then insert it
         **/
        if ($feedbackForm.attr('data-recaptcha') === undefined) {
          $feedbackForm.attr('data-recaptcha', 'true');
        }
        // load google recaptcha lib
        this.loadRecaptchaLib();
        // If all forms have captchaPrivacyTerms, we can hide reCAPTCHA Badge
        this.hideCaptchaBanner();
      }
    },
    /**
     * check hostname and determine environment
     * @return {undefined}
     **/
    isProd: function isProd() {
      return window.location.hostname.search(/dev|test|localhost|github|\buat\b/) === -1;
    },
    /**
     * googleRecaptchaApiKey -> check environment and return a key accordingly
     * @return {undefined}
     **/
    googleRecaptchaApiKey: function googleRecaptchaApiKey() {
      return this.isProd() ? _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_0__.defGoogleRecaptcha.prod : _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_0__.defGoogleRecaptcha.uat;
    },
    /**
     * footerFeedbackGoogleRecaptchaApiKey -> check environment and return a key accordingly for footer feedback form
     * @return {undefined}
     **/
    feedbackGoogleRecaptchaApiKey: function feedbackGoogleRecaptchaApiKey() {
      return this.isProd() ? _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_0__.defFeedbackGoogleRecaptcha.prod : _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_0__.defFeedbackGoogleRecaptcha.uat;
    },
    /**
     * from swe4 onwards footer feedback is ajax based
     * footerFeedbackSubmitWithRecaptchaCheck function handles recaptcha on ajax based form.
     * This function creates a submit event
     * Call submission handler api
     * Get and display success message
     * @return {undefined}
     **/
    footerFeedbackSubmitWithRecaptchaCheck: function footerFeedbackSubmitWithRecaptchaCheck() {
      var self = this;
      grecaptcha.ready(function () {
        $('#qg-page-feedback-form').submit(function (event) {
          var targetFormSubmit = $(this);
          event.preventDefault();
          if ($('#qg-page-feedback-form li.invalid').length <= 0) {
            var $inputRecaptchaResponseElem = self.config.$feedbackForm.find('input[name="g-recaptcha-response"]');
            var postUrl = targetFormSubmit.attr('action');
            var requestMethod = targetFormSubmit.attr('method');
            var $successMsgContainer = $('.thankyou');
            grecaptcha.execute(self.feedbackGoogleRecaptchaApiKey(), {
              action: 'feedback'
            }).then(function (token) {
              if ($inputRecaptchaResponseElem.length > 0) {
                $inputRecaptchaResponseElem.val(token);
                var formData = targetFormSubmit.serialize();
                $.ajax({
                  url: postUrl,
                  type: requestMethod,
                  data: formData,
                  contentType: 'application/x-www-form-urlencoded',
                  cache: false,
                  processData: false
                }).done(function (response) {
                  $successMsgContainer.removeClass('d-none');
                  $('#qg-page-feedback-form, .qg-feedback-toggle').addClass('d-none');
                  $successMsgContainer.append($.parseHTML(JSON.parse(response).message));
                }).fail(function () {
                  $successMsgContainer.append('<p>Request failed, please try again</p>');
                });
                return true;
              }
            });
          }
        });
      });
    },
    /**
     * If all forms have captchaPrivacyTerms, we can hide reCAPTCHA Badge
     * @return {undefined}
     **/
    hideCaptchaBanner: function hideCaptchaBanner() {
      if ($('p.captchaPrivacyTerms').length === $('form[data-recaptcha="true"]').length && this.config.$grecaptchaBadge.css('visibility') !== 'hidden') {
        var hidegrecaptchaBadge = '.grecaptcha-badge { visibility: hidden; }';
        var styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = hidegrecaptchaBadge;
        document.head.appendChild(styleSheet);
      }
    },
    /**
     * Google recaptcha v2 (Version 2)
     * @return {undefined}
     * @param {string} form - form selector
     * @param {string} subBtn - form submit button selector
     * @param {string} key - Google recaptcha key
     **/
    v2Captcha: function v2Captcha(form, subBtn, key) {
      try {
        grecaptcha.render(subBtn, {
          sitekey: key,
          callback: function callback() {
            var response = grecaptcha.getResponse();
            if (response === '' || response === undefined || response.length === 0) {
              console.log('Invalid recaptcha');
              return false;
            } else {
              form.submit();
            }
          }
        });
      } catch (e) {
        console.log(e);
        grecaptcha.reset();
        return false;
      }
      grecaptcha.execute();
    },
    /**
     * Google recaptcha v3 (Version 3)
     * @return {undefined}
     * @param {string} form - form selector
     * @param {string} greptcha - hidden input field for the retrieved token (g-recaptcha-response)
     * @param {string} key - Google recaptcha ket
     * @param {string} action - event to trigger after execution
     **/
    v3Captcha: function v3Captcha(form, greptcha, key, action) {
      // console.log('v3 key: ' + key);
      try {
        grecaptcha.execute(key, {
          action: action
        }).then(function (token) {
          if (greptcha.length > 0) {
            if (greptcha.attr('value') !== '' || greptcha.attr('value').length !== 0 || greptcha.attr('value') !== undefined) {
              greptcha.val(token);
              form.submit();
              return true;
            }
          }
          return false;
        });
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    /**
     * loadRecaptchaLib load google recaptcha lib based on some conditions
     *  @return {undefined}
     **/
    loadRecaptchaLib: function loadRecaptchaLib() {
      var self = this;
      /**
       * handles footer feedback recaptcha load
       **/
      $('.qg-feedback-toggle').one('click', function () {
        $.getScript('https://www.google.com/recaptcha/api.js?render=' + self.feedbackGoogleRecaptchaApiKey(), function () {
          self.footerFeedbackSubmitWithRecaptchaCheck();
        });
      });
      /**
       * handles all other forms
       **/
      setTimeout(function () {
        if ($('#qg-primary-content').find('form[data-recaptcha="true"]').length > 0) {
          //enable recaptcha on form submits, load latest v3 version of recaptcha
          var v2Loaded = false;
          $('form[data-recaptcha="true"]').each(function () {
            var manualSitekey = $(this).attr('data-sitekey');
            var manualAction = $(this).attr('data-action');
            if (manualSitekey !== undefined && manualAction !== undefined) {
              //v3 manual form
              $.getScript('https://www.google.com/recaptcha/api.js?render=' + manualSitekey, function () {
                self.onloadRecaptcha();
              });
            } else if (manualAction !== undefined) {
              $.getScript('https://www.google.com/recaptcha/api.js?render=' + self.feedbackGoogleRecaptchaApiKey(), function () {
                self.onloadRecaptcha();
              });
            } else {
              if (!v2Loaded) {
                $.getScript('https://www.google.com/recaptcha/api.js', function () {
                  self.onloadRecaptcha();
                });
                v2Loaded = true;
              }
            }
          });
        }
      }, 200);
    },
    /**
     * onloadRecaptcha is loaded after recpatcha lib is loaded , it is passed as a callback function
     * @return {undefined}
     **/
    onloadRecaptcha: function onloadRecaptcha() {
      var self = this;
      grecaptcha.ready(function () {
        //v2 Forms
        if (!self.config.loadedRecaptcha) {
          $('[data-recaptcha="true"]:not(#qg-page-feedback-form)').find('input[type="submit"], button[type="submit"]').on('click', function (e) {
            e.preventDefault();
            var subBtn = e.target;
            var form = $(subBtn).parents('form');
            var $inputRecaptchaResponseElem = form.find('input[name="g-recaptcha-response"]');
            var manualSitekey = form.attr('data-sitekey');
            var manualAction = form.attr('data-action');
            if (manualSitekey !== undefined && manualAction !== undefined) {
              //v3 manual form
              self.v3Captcha(form, $inputRecaptchaResponseElem, manualSitekey, manualAction);
            } else if (manualAction !== undefined) {
              //v3 manual with feedback key but differnt action
              self.v3Captcha(form, $inputRecaptchaResponseElem, self.feedbackGoogleRecaptchaApiKey(), manualAction);
            } else if (manualSitekey !== undefined) {
              //v2 manual (no action in v2)
              self.v2Captcha(form, subBtn, manualSitekey);
            } else {
              //default v2 with default key
              self.v2Captcha(form, subBtn, self.googleRecaptchaApiKey());
            }
          });
          self.config.loadedRecaptcha = true;
        }
      });
    }
  };
  qgRecaptcha.init();
})(jQuery, qg.swe);

/***/ }),

/***/ "./src/assets/_project/_blocks/components/gallery/qg-gallery.js":
/*!**********************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/gallery/qg-gallery.js ***!
  \**********************************************************************/
/***/ (() => {

if ($("script[src*='jquery.fancybox']").length === 0) {
  // load scripts and styles only if any of the selectors are present on the page
  if ($('[data-fancybox]').length > 0 || $('.qg-image-gallery').length > 0 || $('.qg-lightbox').length > 0 || $('.image-gallery').length > 0 || $('[class*="cut-in"]').length > 0) {
    // append style
    $('head').append($("<link rel='stylesheet' href='/assets/v4/latest/lib/ext/fancybox/jquery.fancybox.min.css' type='text/css' media='screen' />"));
    // load script
    $.getScript('/assets/v4/latest/lib/ext/fancybox/jquery.fancybox.min.js', function () {
      // image gallery
      $('.qg-image-gallery, .image-gallery').each(function (index) {
        $(this).find('a').each(function () {
          if (!$(this).is('[data-fancybox]')) {
            $(this).attr('data-fancybox', "gallery-".concat(index));
          }
          if (!$(this).is('[data-caption]')) {
            $(this).attr('data-caption', $(this).attr('title'));
          }
        });
      });
      // cut in images caption
      var cutInLink = $('.cut-in .caption a');
      $(cutInLink).attr('data-fancybox', 'images');

      // initialize fancybox , please check fancybox plugin doc for more details regarding the config http://fancyapps.com/fancybox/
      $('[data-fancybox^="gallery"]').fancybox({
        buttons: ['thumbs', 'close'],
        mobile: {
          preventCaptionOverlap: false,
          idleTime: false,
          clickSlide: function clickSlide(current, event) {
            return current.type === 'image' ? 'close' : 'close';
          }
        },
        baseTpl: "\n        <div class=\"fancybox-container\" role=\"dialog\" tabindex=\"-1\">\n          <div class=\"fancybox-bg\"></div>\n          <div class=\"fancybox-inner\">\n                <div class=\"fancybox-infobar\"><button data-fancybox-prev=\"\" class=\"fancybox-button fancybox-button--arrow_left p-0\" title=\"Previous\"><span class=\"font-awesome fa-2x fa-caret-left\"></span></button><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span><button data-fancybox-next=\"\" class=\"fancybox-button fancybox-button--arrow_right p-0\" title=\"Next\"><span class=\"font-awesome fa-2x fa-caret-right\"></span></button></div>\n                <div class=\"fancybox-toolbar\">{{buttons}}</div>\n                <div class=\"fancybox-navigation\">{{arrows}}</div>\n                <div class=\"fancybox-stage\"></div>\n                <div class=\"fancybox-caption\"><div class=\"\"fancybox-caption__body\"></div></div>\n          </div>\n        </div>\n      ",
        btnTpl: {
          arrowLeft: "\n          <button data-fancybox-prev class=\"fancybox-button fancybox-button--arrow_left p-0\" title=\"{{PREV}}\">\n            <span class=\"font-awesome fa-2x fa-caret-left\"></span>\n          </button>\n        ",
          arrowRight: "\n           <button data-fancybox-next class=\"fancybox-button fancybox-button--arrow_right p-0\" title=\"{{NEXT}}\">\n            <span class=\"font-awesome fa-2x fa-caret-right\"></span>\n          </button>\n        "
        },
        caption: function caption(instance, item) {
          var caption = $(this).data('caption') || '';
          if (item.type === 'image') {
            caption = '<div class="fancybox-border">' + (caption.length ? caption : '') + '</div>';
          }
          return caption;
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/assets/_project/_blocks/components/misc/qg-document-links.js":
/*!**************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/misc/qg-document-links.js ***!
  \**************************************************************************/
/***/ (() => {

// This function looks for file summary strings on a page and reformats values for consistency and readability.
// It is an update a previous SWE function with the same behaviour.
// It has been converted from jQuery to vanilla JS and it now rounds up filesize values. The previous function stripped all values after the decimal point.

// 1. looks for this file summary pattern: for example "(PDF, 1.3 MB) or (DOCX 23.5KB)" on all links (A tags) in the DOM
// 2. checks the HREF of the link ends in .PDF, .RTF etc
// 3. reformats the file summary for consistency (PDF 517 KB)
// 4. Rounds UP the file size value to the nearest whole integer
// 5. Assumes a bias for over inflated sizes. e.g. 1.3 MB will round up to 2 MB

document.addEventListener('DOMContentLoaded', function () {
  var filePattern = /\.(?:PDF|DOC|DOCX|XLS|XLSX|RTF)$/i;
  var summaryPattern = /\((PDF|DOC|DOCX|XLS|XLSX|RTF)\s*,?\s*([\d.]+)\s*(KB|MB|GB)\)/i;
  var elements = document.querySelectorAll('#qg-primary-content a, #qg-secondary-content a');
  elements.forEach(function (element) {
    var fileMatch = element.href.match(filePattern);
    var summaryMatch = element.text.match(summaryPattern);
    if (fileMatch && summaryMatch) {
      var originalSummary = summaryMatch[0]; // "(PDF 1.56MB)"
      var contentType = summaryMatch[1].toUpperCase(); // "PDF"
      var fileSize = Math.ceil(parseFloat(summaryMatch[2])); // 1.56
      var fileSizeUnit = summaryMatch[3].toUpperCase(); // "MB"

      var newSummary = "<span class=\"meta\">(".concat(contentType, ", ").concat(fileSize, " ").concat(fileSizeUnit, ")</span>");
      element.innerHTML = element.textContent.replace(originalSummary, newSummary); //(PDF 1.6 MB)
    }
  });
});

/***/ }),

/***/ "./src/assets/_project/_blocks/components/misc/qg-header.js":
/*!******************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/misc/qg-header.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

$(function () {
  'use strict';

  // Polyfill for position: sticky;
  var Stickyfill = __webpack_require__(/*! stickyfill */ "./node_modules/stickyfill/index.js");
  var stickyfill = Stickyfill();
  stickyfill.add($('.sticky')[0]);

  // Mobile menu & Search events to prevent both of them opening at the same time
  var $qgContent = $('#qg-content');
  var $qgNav = $('.qg-navigation');
  $('.qg-show-menu, .qg-show-search').on('click', function () {
    var otherMenu = $(this).hasClass('qg-show-menu') ? $('#qg-global-search-form') : $qgNav;
    if (!$qgContent.is(':hidden') || !otherMenu.is(':hidden')) {
      $qgContent.hide();
    } else {
      $qgContent.show();
    }
    if ($(this).attr('aria-expanded') === 'false') {
      $('body').addClass('header-active');
    } else {
      $('body').removeClass('header-active');
    }
    if ($(this).hasClass('qg-show-menu')) {
      $('.qg-search-form').collapse('hide');
    } else {
      setTimeout(function () {
        $('.qg-search-form .input-group input[type=text]').focus();
      }, 300);
      $qgNav.collapse('hide');
    }
  });
  function reorderContent() {
    if (window.innerHeight < 991) {
      $qgContent.show();
    }
  }
  function reorderTabbing() {
    if (window.innerWidth > 991) {
      $('.qg-portal-links button, .qg-portal-links a').attr('tabindex', '2');
    } else {
      $('.qg-portal-links button, .qg-portal-links a').attr('tabindex', '0');
    }
  }
  reorderTabbing();
  window.addEventListener('resize', function () {
    reorderContent();
    reorderTabbing();
  });
});

/***/ }),

/***/ "./src/assets/_project/_blocks/components/misc/qg-license.js":
/*!*******************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/misc/qg-license.js ***!
  \*******************************************************************/
/***/ (() => {

/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 This function checks meta tag [name="DCTERMS.license] and then insert markup on the bottom of the content section. There is an option to enable this using Matrix metadata.
- https://www.qld.gov.au/transport/contacts/centres
 */

/*globals qg*/
(function ($, qg) {
  'use strict';

  var licenceOptions = {
    url: '//creativecommons.org/licenses/',
    imgSrc: '/assets/v4/latest/images/licences/',
    types: {
      by: {
        name: 'Attribution',
        imgName: 'by-80x15.png',
        versions: {
          '3.0': {
            title: '3.0 Australia (CC BY 3.0 AU)',
            urlPath: 'by/3.0/au/'
          },
          '4.0': {
            title: '4.0 International (CC BY 4.0)',
            urlPath: 'by/4.0/'
          }
        }
      },
      'by-sa': {
        name: 'Attribution-ShareAlike',
        imgName: 'by-sa-80x15.png',
        versions: {
          '3.0': {
            title: '3.0 Australia (CC BY-SA 3.0 AU)',
            urlPath: 'by-sa/3.0/au'
          },
          '4.0': {
            title: '4.0 International (CC BY-SA 4.0)',
            urlPath: 'by-sa/4.0/'
          }
        }
      },
      'by-nd': {
        name: 'Attribution-NoDerivatives',
        imgName: 'by-nd-80x15.png',
        versions: {
          '3.0': {
            title: '3.0 Australia (CC BY-ND 3.0 AU))',
            urlPath: 'by-nd/3.0/au/'
          },
          '4.0': {
            title: '4.0 International (CC BY-ND 4.0)',
            urlPath: 'by-nd/4.0/'
          }
        }
      },
      'by-nc': {
        name: 'Attribution-NonCommercial',
        imgName: 'by-nc-80x15.png',
        versions: {
          '3.0': {
            title: '3.0 Australia (CC BY-NC 3.0 AU)',
            urlPath: 'by-nc/3.0/au/'
          },
          '4.0': {
            title: '4.0 International (CC BY-NC 4.0)',
            urlPath: 'by-nc/4.0/'
          }
        }
      },
      'by-nc-sa': {
        name: 'Attribution-NonCommercial-ShareAlike',
        imgName: 'by-nc-sa-80x15.png',
        versions: {
          '3.0': {
            title: '3.0 Australia (CC BY-NC-SA 3.0 AU)',
            urlPath: 'by-nc-sa/3.0/au/'
          },
          '4.0': {
            title: '4.0 International (CC BY-NC-SA 4.0)',
            urlPath: 'by-nc-sa/4.0/'
          }
        }
      },
      'by-nc-nd': {
        name: 'Attribution-NonCommercial-NoDerivatives',
        imgName: 'by-nc-nd-80x15.png',
        versions: {
          '3.0': {
            title: '3.0 Australia (CC BY-NC-ND 3.0 AU)',
            urlPath: 'by-nc-nd/3.0/au/'
          },
          '4.0': {
            title: '4.0 International (CC BY-NC-ND 4.0)',
            urlPath: 'by-nc-nd/4.0/'
          }
        }
      }
    }
  };
  var getLicenseVal = function getLicenseVal(url) {
    var urlArr = /\/licenses\/([a-zA-Z0-9-/.]+)/g.exec(url)[1].split('/').filter(function (e) {
      return e;
    });
    var abbreviation = urlArr[0];
    var version = urlArr[1];
    return {
      name: licenceOptions.types[abbreviation].name,
      url: licenceOptions.url,
      imgPath: licenceOptions.imgSrc + licenceOptions.types[abbreviation].imgName,
      version: licenceOptions.types[abbreviation].versions[version]
    };
  };

  // add licence if not present
  if (!document.getElementById('document-licence')) {
    // get licence URL from metadata
    $('meta').filter('[name="DCTERMS.license"]').filter(function () {
      return new RegExp('https?://creativecommons.org/licenses/[a-zA-Z0-9\\-\\/\\.]+').test(this.content);
    }).eq(0).each(function () {
      var url = this.content;
      var licence = getLicenseVal(url);
      // if we have licence details…
      if (licence) {
        $('.qg-content-footer').append('<p id="document-licence">' + '<a rel="license" href="' + licence.url + licence.version.urlPath + '" title="Text available under Creative Commons ' + licence.name + ' ' + licence.version.title + ' licence">' + '<img src="' + licence.imgPath + '" alt="Creative Commons ' + licence.name + ' ' + licence.version.title + '" />' + '</a>' + '</p>');
      }
    });
  }
})(jQuery, qg);

/***/ }),

/***/ "./src/assets/_project/_blocks/components/misc/qg-progressive-reveal.js":
/*!******************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/misc/qg-progressive-reveal.js ***!
  \******************************************************************************/
/***/ (() => {

"use strict";
/**
 ************************
 ** Progressive Reveal **
 ************************
 *
 * Version: 1.2
 * Developed by: Nimrod Evans for DSITIA > OSSIO
 *
 * A progressive reveal function to show the next form element once a previous element has been selected.
 * Designed for forms, though technically it will work on any element.
 *
 * Requires:
 * - JQuery
 *
 * How to use:
 * ===========
 * Attach the following classes / attributes to your objects:
 * data-qg-pr - Set on the trgr element for revealing the next section to activate progressive reveal
 * data-target - On the trgr, the target for the reveal action (eg. ".option2")
 *
 * Optional:
 * data-parent - On the trgr, sets the group this trgr belongs to for toggling other elements on/off
 * data-qg-pr-parent - On the parent group object, defines the parent / group element instead of using 'data-parent' on each trgr
 *
 * Version Control:
 * ================
 * 1.2    - 10/1 -Re-factored, modularised, closure, changed class requirements to data targets (as they do not add styling),
 *          added QG prefix, removed button custom functionality.
 * 1.1    - 29/4 - Added 'NOT' functionality, hack fix 'stutter' on init
 * 1.0.1  - 28/4 - Fixed minor bugs for robustness
 * 1.0    - First full version
**/



(function () {
  var defaultSettings = {
    toggle: 'false',
    hideOthers: 'true'
  };
  var settingsAttr = {
    toggle: 'data-toggle',
    hideOthers: 'data-hide-others'
  };
  // For parent / group
  var parentAttr = 'data-qg-pr-parent'; // Optional
  // For trigger
  var trgrAttr = 'data-qg-pr';
  var trgrTargetAttr = 'data-target';
  var trgrParentAttr = 'data-parent'; // Optional
  var trgrActiveDataName = 'qgProgressiveRevealActive';
  function saveAttr(target, $parent, setting) {
    var aVal = settingsAttr[setting];
    if (!$(target).attr(aVal)) {
      if ($parent.attr(aVal)) {
        $(target).attr(aVal, $parent.attr(aVal));
      } else {
        $(target).attr(aVal, defaultSettings[setting]);
      }
    }
  }
  function handleNonActiveElements(trgr, $parent) {
    if ($(trgr).attr(settingsAttr.hideOthers) !== 'false') {
      $parent.find("*[".concat(trgrAttr, "]")).each(function () {
        if ($(this).data(trgrActiveDataName) !== true && $($(this).attr(trgrTargetAttr)).is(':visible')) {
          $($(this).attr(trgrTargetAttr)).slideUp();
        }
      });
    }
  }

  // Set up targets
  $("*[".concat(trgrAttr, "]")).each(function () {
    // Find parent
    var $parent = $('body');
    if (!$(this).attr(trgrParentAttr) && $($(this).attr(trgrTargetAttr)).closest("*[".concat(parentAttr, "]"))) {
      $(this).attr(trgrParentAttr, "*[".concat(parentAttr, "]"));
    }
    $parent = $(this).closest($(this).attr(trgrParentAttr));
    // Save settings
    saveAttr(this, $parent, 'toggle');
    saveAttr(this, $parent, 'hideOthers');
  });

  // Trigger action
  $("*[".concat(trgrAttr, "]")).on('click', function () {
    // Set target (should reduce file size)
    var $tgt = $($(this).attr(trgrTargetAttr));
    $(this).data(trgrActiveDataName, true);
    $(this).toggleClass('toggle-active');

    // Handle other active elements
    if ($(this).attr(trgrParentAttr)) {
      var $parent = $(this).closest($(this).attr(trgrParentAttr));
      if ($parent.length) {
        handleNonActiveElements(this, $parent);
      }
    }
    // Handle this element action
    if ($(this).attr(settingsAttr.toggle) === 'true') {
      $tgt.slideToggle();
    } else if (!$tgt.is(':visible')) {
      $tgt.slideDown();
    }
    $(this).removeData(trgrActiveDataName);
  });
})();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/opengraph/qg-opengraph.js":
/*!**************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/opengraph/qg-opengraph.js ***!
  \**************************************************************************/
/***/ (() => {

(function ($) {
  'use strict';

  var fields = [{
    property: 'meta[property="og:title"]'
  }, {
    property: 'meta[property="og:description"]'
  }, {
    property: 'meta[property="og:url"]'
  }, {
    property: 'meta[property="og:type"]'
  }, {
    property: 'meta[property="og:image"]'
  }, {
    property: 'meta[name="twitter:card"]'
  }, {
    property: 'meta[name="twitter:title"]'
  }, {
    property: 'meta[name="twitter:description"]'
  }, {
    property: 'meta[name="twitter:image"]'
  }];
  var openGraph = {
    init: function init() {
      var graphImg = '/assets/v4/latest/images/coat-of-arms/coa-thumbnail.png';
      var descriptionMeta = $('meta[name="DCTERMS.description"]').attr('content', '');
      $.each(fields, function (key, val) {
        var itemObj = $(val.property);
        if (itemObj.length > 0) {
          //check if template not already populated by Matrix or authorer
          if (itemObj.attr('content') === '' || itemObj.attr('content') === undefined) {
            if (itemObj.attr('property') === 'og:title' || itemObj.attr('name') === 'twitter:title') {
              itemObj.attr('content', document.title);
            }
            if (itemObj.attr('property') === 'og:description' || itemObj.attr('name') === 'twitter:description') {
              if (descriptionMeta.length > 0) {
                itemObj.attr('content', descriptionMeta);
              }
            }
            if (itemObj.attr('property') === 'og:image' || itemObj.attr('name') === 'twitter:image') {
              itemObj.attr('content', graphImg);
            }
            if (itemObj.attr('property') === 'og:url') {
              itemObj.attr('content', window.location.href);
            }
            if (itemObj.attr('property') === 'og:type') {
              itemObj.attr('content', 'article');
            }
            if (itemObj.attr('name') === 'twitter:card') {
              itemObj.attr('content', 'summary');
            }
          }
        } else {
          var head = $('head');
          head.append(itemObj);
        }
      });
    }
  };
  openGraph.init();
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/components/print/qg-print.js":
/*!******************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/print/qg-print.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgPrint: () => (/* binding */ QgPrint)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 Print button in the content section and the guide pages, there is an option in the Matrix Metadata to enable this on a page. Functions are triggered if a particular ID and a class is present on a page.
Example - https://www.qld.gov.au/recreation/activities/areas-facilities/centres/sunshine-coast-recreation-centre
 */

var QgPrint = /*#__PURE__*/function () {
  function QgPrint() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QgPrint);
    this.$pageLinks = $('#toc.qg-print-guide ol li a');
    this.$contentContainer = $('#qg-content');
    this.$printContentLink = $('.print-content-link');
    this.$printguideLink = $('#printguide');
    this.$content = this.$contentContainer.find('#qg-primary-content');
    this.new_content = '';
    this.current_content = '';
    if (this.$printguideLink.length > 0 || this.$printContentLink.length > 0) {
      this.onClickContentBtn();
      this.onClickGuidePageBtn();
    }
  }

  /**
  * onClickContent function register a event to print content using a button with the 'print-content-link' class
  * @return {undefined}
  **/
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QgPrint, [{
    key: "onClickContentBtn",
    value: function onClickContentBtn() {
      var self = this;
      if (self.$printContentLink.length > 0) {
        $(document).on('click', '.print-content-link', function (event) {
          event.preventDefault();
          window.print();
        });
      }
    }

    /**
     onClickGuidePageBtn function register a event to print guide page content using a button with the 'printguide' id.
    * @return {undefined}
    **/
  }, {
    key: "onClickGuidePageBtn",
    value: function onClickGuidePageBtn() {
      var self = this;
      var numImagesLoaded = 0;

      // store content present inside the 'qg-primary-content' container
      self.current_content = self.$content.html();

      // attach a event on the print guide link/button
      $('body').on('click', '#printguide', function (event) {
        event.preventDefault();
        var pageList = [];
        // grab all the links in the guide page list
        pageList = self.$pageLinks.map(function () {
          return this.href;
        }).get();
        // grab the content using Ajax of all the links
        $.each(pageList, function (index, pageContent) {
          self.getRemotePages(pageContent);
        });
        // replace the content in the current content with the ajax fetched content
        self.$content.append(self.new_content);
        // check all images are there on the page or not (large images takes more time to load also depends on the network connection speed)
        var imageList = self.$content.find('img');
        var totalImages = imageList.length;
        // filter out the content and make it ready for print
        self.$content.find('h1').not(':first').remove();
        self.$content.find('.qg-print-guide p:contains("In this guide")').parent().remove();
        self.$content.find('ul.pagination').remove();
        self.$content.find('.qg-content-footer').remove();
        if (totalImages === 0) {
          window.print();
          self.$content.empty().append(self.current_content);
        } else {
          imageList.map(function () {
            var tempSrc = this.src;
            this.onload = function () {
              numImagesLoaded++;
              if (numImagesLoaded >= totalImages) {
                window.print(); // if all images loaded then print the page
                self.$content.empty().append(self.current_content);
              }
            };
            this.src = tempSrc;
          });
        }
      });
    }

    /**
     * getRemotePages -> clicking quick exit button a page
     * @param {string} pageContent - site to replace on initiating the 'quick exit' ('Esc' key or clicking 'Close this site' button) function
     * @return {undefined}
     **/
  }, {
    key: "getRemotePages",
    value: function getRemotePages(pageContent) {
      var self = this;
      $.ajax({
        url: pageContent,
        data: {},
        success: function success(data) {
          // Add the content and asides divs of each page to what will be printed
          self.new_content += '<div id="qg-primary-content" class="d-none d-print-block">' + $(data).find('#qg-primary-content').html() + '</div>';
          self.new_content += '<hr />';
        },
        dataType: 'html',
        async: false
      });
    }
  }]);
  return QgPrint;
}();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/qg-components.js":
/*!*****************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/qg-components.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_media_qg_social_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media/qg-social-media */ "./src/assets/_project/_blocks/components/social-media/qg-social-media.js");
/* harmony import */ var _social_media_qg_social_media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_social_media_qg_social_media__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_qg_progressive_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/qg-progressive-reveal */ "./src/assets/_project/_blocks/components/misc/qg-progressive-reveal.js");
/* harmony import */ var _misc_qg_progressive_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_misc_qg_progressive_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_qg_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/qg-header */ "./src/assets/_project/_blocks/components/misc/qg-header.js");
/* harmony import */ var _misc_qg_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_misc_qg_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_location_qg_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/location/qg-location */ "./src/assets/_project/_blocks/layout/location/qg-location.js");
/* harmony import */ var _layout_location_qg_location__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_location_qg_location__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _misc_qg_license__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc/qg-license */ "./src/assets/_project/_blocks/components/misc/qg-license.js");
/* harmony import */ var _misc_qg_license__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_misc_qg_license__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _carousel_qg_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/qg-carousel */ "./src/assets/_project/_blocks/components/carousel/qg-carousel.js");
/* harmony import */ var _carousel_qg_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carousel_qg_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _quick_exit_qg_quick_exit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-exit/qg-quick-exit */ "./src/assets/_project/_blocks/components/quick-exit/qg-quick-exit.js");
/* harmony import */ var _print_qg_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print/qg-print */ "./src/assets/_project/_blocks/components/print/qg-print.js");
/* harmony import */ var _accordion_qg_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion/qg-accordion */ "./src/assets/_project/_blocks/components/accordion/qg-accordion.js");
/* harmony import */ var _forms_qg_address_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/qg-address-autocomplete */ "./src/assets/_project/_blocks/components/forms/qg-address-autocomplete.js");
/* harmony import */ var _site_search_qg_search_minimize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site-search/qg-search-minimize */ "./src/assets/_project/_blocks/components/site-search/qg-search-minimize.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tables */ "./src/assets/_project/_blocks/components/tables/index.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tables__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _forms_qg_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/qg-recaptcha */ "./src/assets/_project/_blocks/components/forms/qg-recaptcha.js");
/* harmony import */ var _forms_qg_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/qg-forms */ "./src/assets/_project/_blocks/components/forms/qg-forms.js");
/* harmony import */ var _forms_qg_forms__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_forms_qg_forms__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _misc_qg_document_links__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./misc/qg-document-links */ "./src/assets/_project/_blocks/components/misc/qg-document-links.js");
/* harmony import */ var _misc_qg_document_links__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_misc_qg_document_links__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _gallery_qg_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gallery/qg-gallery */ "./src/assets/_project/_blocks/components/gallery/qg-gallery.js");
/* harmony import */ var _gallery_qg_gallery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_gallery_qg_gallery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _opengraph_qg_opengraph__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./opengraph/qg-opengraph */ "./src/assets/_project/_blocks/components/opengraph/qg-opengraph.js");
/* harmony import */ var _opengraph_qg_opengraph__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_opengraph_qg_opengraph__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _site_search_qg_site_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./site-search/qg-site-search */ "./src/assets/_project/_blocks/components/site-search/qg-site-search.js");
/* harmony import */ var _site_search_qg_site_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_site_search_qg_site_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _accessibility_qg_accessibility__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./accessibility/qg-accessibility */ "./src/assets/_project/_blocks/components/accessibility/qg-accessibility.js");
/* harmony import */ var _accessibility_qg_accessibility__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_accessibility_qg_accessibility__WEBPACK_IMPORTED_MODULE_18__);



















_accessibility_qg_accessibility__WEBPACK_IMPORTED_MODULE_18___default().init();

// QG quick exit
var quickExit = new _quick_exit_qg_quick_exit__WEBPACK_IMPORTED_MODULE_6__.QgQuickExit();
quickExit.init();

// QG autocomplete
// eslint-disable-next-line no-unused-vars
var qgAddressAutocomplete = new _forms_qg_address_autocomplete__WEBPACK_IMPORTED_MODULE_9__.QgAddressAutocomplete();

// QG print
// eslint-disable-next-line no-unused-vars
var qgPrint = new _print_qg_print__WEBPACK_IMPORTED_MODULE_7__.QgPrint();

// QG accordion
// eslint-disable-next-line no-unused-vars
var qgAccordion = new _accordion_qg_accordion__WEBPACK_IMPORTED_MODULE_8__.QgAccordion();

// QG Search minimize
// check and initialize class if required
if (document.querySelector('.qg-site-search__multiple-forms')) {
  var qgSearchMinimize = new _site_search_qg_search_minimize__WEBPACK_IMPORTED_MODULE_10__.QgSearchMinimize();
  qgSearchMinimize.init();
}

/***/ }),

/***/ "./src/assets/_project/_blocks/components/quick-exit/qg-quick-exit.js":
/*!****************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/quick-exit/qg-quick-exit.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgQuickExit: () => (/* binding */ QgQuickExit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 Quick exit function to exit from a page on 'Esc' key or 'Close this site' button click
- https://www.qld.gov.au/law/crime-and-police/abuse-family-matters-and-protection-orders/apply-for-a-protection-order
 */

var Stickyfill = __webpack_require__(/*! stickyfill */ "./node_modules/stickyfill/index.js");
var stickyfill = Stickyfill();
var QgQuickExit = /*#__PURE__*/function () {
  function QgQuickExit() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QgQuickExit);
    this.$quickExit = $('.qg-quick-exit');
    this.quickExitButton = document.querySelector('.qg-quick-exit__button');
    this.escapeSite = 'https://www.google.com.au/';
    this.hotkey = 27;
  }

  /**
  * Initialise QgQuickExit
  * @return {undefined}
  **/
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QgQuickExit, [{
    key: "init",
    value: function init() {
      if (this.$quickExit.length > 0 && typeof this.quickExitButton !== 'undefined' && this.quickExitButton != null) {
        this.onbtnClick();
        this.ieFix();
        this.onKeyDown();
      }
    }

    /**
    * quickExit function redirects a user on click and Esc key down
    * @param {string} site - site to replace on initiating the 'quick exit' ('Esc' key or clicking 'Close this site' button) function
    * @return {undefined}
    **/
  }, {
    key: "quickExit",
    value: function quickExit(site) {
      // then redirect to a non-sensitive site
      window.open(site, '_blank');
      window.location.replace(site);
      // remove as much info from URL as possible
      if (window.history) {
        try {
          window.history.replaceState({}, '', '/');
        } catch (e) {}
      }
      // disable default event handling
      return false;
    }

    /**
    * onbtnClick -> clicking quick exit button a page
    * @return {undefined}
    **/
  }, {
    key: "onbtnClick",
    value: function onbtnClick() {
      var self = this;
      this.quickExitButton.onclick = function (e) {
        return self.quickExit(self.escapeSite);
      };
    }

    /**
    * onKeyDown -> escape keydown event
    * @return {undefined}
    **/
  }, {
    key: "onKeyDown",
    value: function onKeyDown() {
      var self = this;
      // add hotkey trigger
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === self.hotkey) {
          self.quickExit(self.escapeSite);
          if (e) {
            // stop escape from cancelling redirect
            e.preventDefault();
            // early IEs don't have preventDefault
            e.returnValue = false;
          }
          return false;
        }
      });
    }

    /**
    * ieFix -> stickyfill lib to provide support for position:sticky.
    * @return {undefined}
    **/
  }, {
    key: "ieFix",
    value: function ieFix() {
      // load a plugin only on IE browser to support position:sticky
      if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        stickyfill.add($('.qg-quick-exit')[0]);
      }
    }
  }]);
  return QgQuickExit;
}();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/site-search/qg-funnelback-v16-refs.js":
/*!**************************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/site-search/qg-funnelback-v16-refs.js ***!
  \**************************************************************************************/
/***/ (() => {

(function () {
  var replacements = [['find.search.qld.gov.au', 'discover.search.qld.gov.au'], ['qld-gov', 'qgov~sp-search'], ['qgov-content', 'qgov~sp-content'], ['services-web', 'qgov~sp-services']];
  function updateRefs(originalValue) {
    var newValue = originalValue;
    replacements.forEach(function (pair) {
      newValue = newValue.replace(new RegExp(pair[0], 'g'), pair[1]);
      if (originalValue.includes(pair[0])) {
        var depReference = pair[1].includes('qgov~') ? "\"".concat(pair[0], "\" collection,") : "\"".concat(pair[0], "\"");
        console.log("SWE/Funnelback notice:\nThis application contains a reference to ".concat(depReference, " which is deprecated. It must be replaced with \"").concat(pair[1], "\".\n"));
      }
    });
    return newValue;
  }
  document.querySelectorAll('form[data-suggestions], form[data-results-url], div[data-centres], input[name=collection]').forEach(function (element) {
    if (element.hasAttribute('data-suggestions')) {
      var currentValue = element.getAttribute('data-suggestions');
      element.setAttribute('data-suggestions', updateRefs(currentValue));
    }
    if (element.hasAttribute('data-results-url')) {
      var _currentValue = element.getAttribute('data-results-url');
      element.setAttribute('data-results-url', updateRefs(_currentValue));
    }
    if (element.hasAttribute('data-centres')) {
      var _currentValue2 = element.getAttribute('data-centres');
      element.setAttribute('data-centres', updateRefs(_currentValue2));
    }
    if (element.getAttribute('name') === 'collection') {
      var _currentValue3 = element.getAttribute('value');
      element.setAttribute('value', updateRefs(_currentValue3));
    }
  });
})();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/site-search/qg-search-minimize.js":
/*!**********************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/site-search/qg-search-minimize.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgSearchMinimize: () => (/* binding */ QgSearchMinimize)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 On pages with multiple global search, this class minimizes one search at a time in order to enhance the user experience.
- https://www.qld.gov.au/services
- https://www.qld.gov.au/search
 */

var QgSearchMinimize = /*#__PURE__*/function () {
  function QgSearchMinimize() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QgSearchMinimize);
    this.smBreakPoint = 992;
    this.searchStateContainer = 'qg-search-state__container';
    this.$globalSearchForm = $('#qg-global-search-form');
    this.$siteSearchInput = $('.qg-search-site__input');
    this.$multipleForms = $('.qg-site-search__multiple-forms');
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QgSearchMinimize, [{
    key: "init",
    value: function init() {
      this.onResize();
      // trigger resize on page load
      $(window).trigger('resize');
    }
  }, {
    key: "addSearchToggleMarkup",
    value: function addSearchToggleMarkup() {
      var self = this;
      if ($('.' + self.searchStateContainer).length <= 0) {
        // 'Search all information & services' markup which on click show the global search form
        var searchStateContainerMarkup = "<div class=\"qg-search-state__container  align-self-center row\"> <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n<p class=\"ml-2 mb-0\">Search all information and services</p> </div>";
        $(searchStateContainerMarkup).insertBefore(self.$globalSearchForm);
        // hide global search form on page load
        self.$globalSearchForm.hide();
      }
    }
  }, {
    key: "onServiceFinderSearchClick",
    value: function onServiceFinderSearchClick() {
      var self = this;
      // toggle global search on interacting with the service finder search
      self.$multipleForms.find(self.$siteSearchInput).click(function () {
        if ($(window).width() >= self.smBreakPoint) {
          self.$globalSearchForm.hide();
          $('.' + self.searchStateContainer).show();
        }
      });
    }
  }, {
    key: "onSearchStateContainerClick",
    value: function onSearchStateContainerClick() {
      var self = this;
      // toggle global search form on click
      $('.' + self.searchStateContainer).on('click', function () {
        $(this).hide();
        self.$globalSearchForm.show('fast');
      });
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var self = this;
      var resizeTimer;
      $(window).resize(function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          if ($(this).width() >= self.smBreakPoint) {
            self.$globalSearchForm.hide();
            if ($('#qg-search-query').is(':hidden')) {
              $('.' + self.searchStateContainer).show();
            }
            self.addSearchToggleMarkup();
            self.onServiceFinderSearchClick();
            self.onSearchStateContainerClick();
          } else {
            self.$globalSearchForm.removeAttr('style').removeClass('show');
            $('.' + self.searchStateContainer).hide();
          }
        }, 0);
      });
    }
  }]);
  return QgSearchMinimize;
}();

/***/ }),

/***/ "./src/assets/_project/_blocks/components/site-search/qg-site-search.js":
/*!******************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/site-search/qg-site-search.js ***!
  \******************************************************************************/
/***/ (() => {

$(function () {
  'use strict';

  //
  // Namespace
  //
  var qgSiteSearch = {
    fn: {},
    vars: {}
  };

  //
  // Helpers
  //

  // for backward compatibility with ID qg-global-search-form and qg-search-query and no class attribute
  // changed to class based so that we can have more than one site search on a same page
  // check if class is present, if not then add qg-search-site__input
  if (!$('#qg-search-query').hasClass('qg-search-site__input')) {
    $('#qg-search-query').addClass('qg-search-site__input');
  }
  if (!$('#qg-global-search-form').hasClass('qg-site-search__form')) {
    $('#qg-global-search-form').addClass('qg-site-search__form');
  }

  // Event debouncer
  function debouncer(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Wrap part of the string in bold tags
  function getBoldText(subString, stringToChange) {
    var targetIndex = stringToChange.indexOf(subString.toLowerCase());
    var targetString = stringToChange.substr(targetIndex, subString.length);

    // Wrap the text in bold tags
    var formattedString = '<b>';
    formattedString += targetString;
    formattedString += '</b>';
    return stringToChange.replace(targetString, formattedString);
  }

  //
  // Events
  //

  // Handle multiple events
  qgSiteSearch.fn.inputEventHandler = function (event) {
    var eventType = event.type;
    var targetInput = $(event.target);
    var keyCode = event.keyCode;
    var inputValue = targetInput.val();
    switch (eventType) {
      case 'focus':
        qgSiteSearch.fn.onFocus(inputValue, targetInput);
        break;
      case 'blur':
        qgSiteSearch.fn.onBlur(inputValue, targetInput);
        break;
      case 'keydown':
        qgSiteSearch.fn.onKeydown(inputValue, keyCode, targetInput);
        break;
    }
  };

  // Handle clicking into the input field
  qgSiteSearch.fn.onFocus = function (inputValue, targetInput) {
    var initialConcierge = targetInput.parent().find($('.qg-search-concierge-initial'));
    // Toggle aria-expanded for the search input
    targetInput.attr('aria-expanded', 'true');
    if (inputValue === '') {
      // Transition reveal initial state
      initialConcierge.addClass('show');
    } else {
      qgSiteSearch.fn.checkForSuggestions(inputValue, targetInput);
    }
  };

  // Handle clicking out of the input field
  qgSiteSearch.fn.onBlur = function (inputValue, targetInput) {
    var clearButton = targetInput.parent().find($('.qg-search-close-concierge'));
    // Remove the clear button
    clearButton.addClass('hide');

    // Close the concierge panels
    qgSiteSearch.fn.closeConciergePanels(targetInput);
  };

  // Handle input value changes
  qgSiteSearch.fn.onKeydown = function (inputValue, keyCode, targetInput) {
    var initialConcierge = targetInput.parent().find($('.qg-search-concierge-initial'));
    var helpfulConcierge = targetInput.parent().find($('.qg-search-concierge-help'));
    var clearButton = targetInput.parent().find($('.qg-search-close-concierge'));
    if (keyCode === 40) {
      targetInput.parents($('.qg-site-search__form')).attr('data-navindex', '0');
      setTimeout($('.qg-search-concierge.show').find('a, button')[0].focus(), 300);
    } else if (inputValue !== '') {
      // Reveal the clear button
      clearButton.removeClass('hide');
      // Look for suggested results
      qgSiteSearch.fn.checkForSuggestions(inputValue, targetInput);
    } else {
      // Remove the clear button
      clearButton.addClass('hide');

      // Remove suggestions and transition reveal initial state
      initialConcierge.addClass('show');
      helpfulConcierge.removeClass('show');
    }
    if (initialConcierge.hasClass('show') || helpfulConcierge.hasClass('show')) {
      targetInput.attr('aria-expanded', 'true');
    } else {
      targetInput.attr('aria-expanded', 'false');
    }
  };
  qgSiteSearch.fn.keyboardNavigation = function (event) {
    var self = $(this);
    var keyCode = event.keyCode;
    var focusableList = self.parents('.qg-site-search__form').find($('.qg-search-concierge.show')).find('a, button');
    var currentIndex = self.parents('.qg-site-search__form').attr('data-navindex');
    if (keyCode === 40 && focusableList.length > currentIndex - 1) {
      currentIndex++;
      focusableList[currentIndex].focus();
      self.parents('.qg-site-search__form').attr('data-navindex', currentIndex);
    } else if (keyCode === 38) {
      if (currentIndex > 0) {
        currentIndex--;
        focusableList[currentIndex].focus();
        self.parents('.qg-site-search__form').attr('data-navindex', currentIndex);
      } else {
        self.parents('.qg-site-search__form').find($('input[type=text].form-control')).focus();
      }
    }
  };

  // Handle clearing the input field via button
  qgSiteSearch.fn.clearInputField = function (event) {
    var inputTarget = event.target;
    var clearButton = $(this).parent().find($('.qg-search-close-concierge'));
    var searchInput = $(this).parent().find($('.qg-search-site__input'));
    searchInput.val('');

    // Remove the button
    clearButton.addClass('hide');

    // Close the concierge panels
    qgSiteSearch.fn.closeConciergePanels(inputTarget);
  };

  // Handle selecting a suggestion
  qgSiteSearch.fn.searchSuggestionClick = function (event) {
    var targetElement = $(event.currentTarget);
    var suggestionValue = targetElement.text();
    var searchInput = $('.qg-search-site__input');

    // Add suggestion to input value
    searchInput.val(suggestionValue);
  };

  // Handle background click to close concierge
  qgSiteSearch.fn.handleBodyClick = function (event, targetInput) {
    var self = event.target;
    var targetSelector = '#qg-global-search-form';
    if ($(event.target).closest(targetSelector).length === 0) {
      // Close the concierge panels
      qgSiteSearch.fn.closeConciergePanels(self);
    }
  };
  qgSiteSearch.fn.handleFocus = function (event) {
    qgSiteSearch.fn.closeConciergePanels(event.target);
  };

  // Handle search form submission
  qgSiteSearch.fn.searchSubmitHandler = function (event) {
    // Close the concierge panels
    qgSiteSearch.fn.closeConciergePanels(event.target);
  };

  //
  // Local data
  //

  // Get example suggestions from Funnelback
  qgSiteSearch.fn.getExampleSuggestions = function (inputValue) {
    var exampleResponse = [{
      key: 'cancelled',
      disp: 'cancelled',
      disp_t: 'T',
      wt: '77.44',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancellation',
      disp: 'cancellation',
      disp_t: 'T',
      wt: '72.139',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancel',
      disp: 'cancel',
      disp_t: 'T',
      wt: '69.493',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancelling',
      disp: 'cancelling',
      disp_t: 'T',
      wt: '43.151',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancellations',
      disp: 'cancellations',
      disp_t: 'T',
      wt: '32.28',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancellation of membership',
      disp: 'cancellation of membership',
      disp_t: 'T',
      wt: '2.2',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancellation form',
      disp: 'fill out this cancellation form',
      disp_t: 'T',
      wt: '2',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancel a booking',
      disp: 'cancel a booking',
      disp_t: 'T',
      wt: '1.1',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancel a disability parking permit',
      disp: 'cancel a disability parking permit',
      disp_t: 'T',
      wt: '1',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }, {
      key: 'cancelling your registration',
      disp: 'cancelling your registration',
      disp_t: 'T',
      wt: '1',
      cat: '',
      cat_t: '',
      action: '',
      action_t: 'S'
    }];
    var filteredResponse = exampleResponse.filter(function (suggestion) {
      return suggestion.disp.indexOf(inputValue.toLowerCase()) !== -1;
    });
    return filteredResponse;
  };

  // Get example service results from Funnelback
  qgSiteSearch.fn.getExampleServices = function () {
    var exampleResponse = {
      response: {
        resultPacket: {
          query: 'grants',
          results: [{
            rank: 1,
            title: 'Grants and funding | Environment, land and water | Queensland Government',
            collection: 'qgov-web',
            metaData: {
              license: 'https://creativecommons.org/licenses/by/4.0/',
              r: 'all',
              c: 'Grants and funding are available to support environmental programs in Queensland. This includes koala and marine life conservation, and nature refuges.',
              C: 'Grants and funding are available to support environmental programs in Queensland. This includes koala and marine life conservation, and nature refuges.',
              s: 'Grant; funding; nature assist; koala; Everyones environment; Indigenous sea rangers; research; NatureAssist; Indigenous Sea Country Management Grants Program; Koala Rescue and Rehabilitation Grants Program; Koala Research Grant Program; koala',
              d: '2019-07-31',
              t: 'Grants and funding | Environment, land and water | Queensland Government;Grants and funding | Environment and pollution management',
              e: 'Text',
              f: 'guidelines',
              j: 'https://www.qld.gov.au/environment/pollution/funding'
            },
            liveUrl: 'https://www.qld.gov.au/environment/pollution/funding',
            clickTrackingUrl: '/s/redirect?collection=qld-gov&url=https%3A%2F%2Fwww.qld.gov.au%2Fenvironment%2Fpollution%2Ffunding&index_url=https%3A%2F%2Fwww.qld.gov.au%2Fenvironment%2Fpollution%2Ffunding&auth=qzUXw9sTwPwOdKvslCPbog&profile=qld_preview&rank=1&query=grants',
            explain: null,
            indexUrl: 'https://www.qld.gov.au/environment/pollution/funding'
          }, {
            rank: 2,
            title: 'Funding and grants | Recreation, sport and arts | Queensland Government',
            collection: 'qgov-web',
            metaData: {
              c: 'Find what funding and grants are available for young athletes and for clubs to upgrade sport and recreation facilities or equipment.',
              C: 'Find what funding and grants are available for young athletes and for clubs to upgrade sport and recreation facilities or equipment.',
              sprequired: 'yes',
              d: '2019-07-19',
              e: 'Collection',
              f: 'index',
              stype: 'apply-for-it',
              j: 'https://www.qld.gov.au/recreation/sports/funding',
              sid: 'P001085',
              sfinder: 'yes',
              license: 'https://creativecommons.org/licenses/by/4.0/',
              scategory: 'recreation-sports-and-arts',
              r: 'all',
              s: 'Funding and grants; funding for young athletes; grants for young athletes; athlete scholarships; funding for kids and young people; funding for clubs and organisations; grants for clubs and organisations; funding to upgrade sport and recreation',
              t: 'Funding and grants | Recreation, sport and arts | Queensland Government;Funding and grants | Sport',
              skioskonly: 'no'
            },
            liveUrl: 'https://www.qld.gov.au/recreation/sports/funding',
            clickTrackingUrl: '/s/redirect?collection=qld-gov&url=https%3A%2F%2Fwww.qld.gov.au%2Frecreation%2Fsports%2Ffunding&index_url=https%3A%2F%2Fwww.qld.gov.au%2Frecreation%2Fsports%2Ffunding&auth=cM3gwHE6wlGI5UzFw2iszA&profile=qld_preview&rank=2&query=grants',
            explain: null,
            indexUrl: 'https://www.qld.gov.au/recreation/sports/funding'
          }, {
            rank: 3,
            title: 'Everyones Environment grants program | Environment, land and water | Queensland Government',
            collection: 'qgov-web',
            metaData: {
              c: 'This program provides funding for Queensland community groups with projects aimed at delivering practical actions for local environmental improvements.',
              C: 'This program provides funding for Queensland community groups with projects aimed at delivering practical actions for local environmental improvements.',
              sprequired: 'no',
              d: '2015-03-23',
              e: 'Text',
              f: 'guidelines',
              stype: 'find-it',
              j: 'https://www.qld.gov.au/environment/pollution/funding/everyones',
              sid: 'P000369',
              sfinder: 'yes',
              license: 'https://creativecommons.org/licenses/by/4.0/',
              scategory: 'environment-land-and-water',
              r: 'all',
              s: 'Grants; everyone; environment; heritage; Queensland; funding',
              t: 'Everyones Environment grants program | Environment, land and water | Queensland Government;Everyones Environment grants program | Grants and funding',
              skioskonly: 'no'
            },
            liveUrl: 'https://www.qld.gov.au/environment/pollution/funding/everyones',
            clickTrackingUrl: '/s/redirect?collection=qld-gov&url=https%3A%2F%2Fwww.qld.gov.au%2Fenvironment%2Fpollution%2Ffunding%2Feveryones&index_url=https%3A%2F%2Fwww.qld.gov.au%2Fenvironment%2Fpollution%2Ffunding%2Feveryones&auth=QaZNQYwacyhU7xtVcs%2FPbg&profile=qld_preview&rank=3&query=grants',
            explain: null,
            indexUrl: 'https://www.qld.gov.au/environment/pollution/funding/everyones'
          }],
          error: null
        },
        curator: {
          exhibits: [{
            titleHtml: 'Queensland Government Grants Finder',
            displayUrl: 'https://www.grants.services.qld.gov.au/#/',
            linkUrl: '/s/redirect?collection=qld-gov&url=https%3A%2F%2Fwww.grants.services.qld.gov.au%2F%23%2F&index_url=https%3A%2F%2Fwww.grants.services.qld.gov.au%2F%23%2F&auth=wEzza0HDD%2BGN4WIzBUq0%2Fg&profile=qld_preview&type=FP',
            descriptionHtml: 'The Queensland Government Grants Finder is a comprehensive list of our grants and funding programs.',
            additionalProperties: {
              icon: 'fa-car fa-motorcycle fa-address-card',
              buttonText: 'Find out more',
              service: 'yes'
            },
            category: ''
          }, {
            titleHtml: 'North Queensland flood assistance',
            displayUrl: 'https://www.qld.gov.au/community/disasters-emergencies/queensland-disasters/fnq-monsoonal-trough',
            linkUrl: '/s/redirect?collection=qld-gov&url=https%3A%2F%2Fwww.qld.gov.au%2Fcommunity%2Fdisasters-emergencies%2Fqueensland-disasters%2Ffnq-monsoonal-trough&index_url=https%3A%2F%2Fwww.qld.gov.au%2Fcommunity%2Fdisasters-emergencies%2Fqueensland-disasters%2Ffnq-monsoonal-trough&auth=qbavFamsPcqvWK5M3INRmA&profile=qld_preview&type=FP',
            descriptionHtml: 'Personal hardship financial assistance has been activated for some communities at this time.',
            additionalProperties: {},
            category: ''
          }, {
            titleHtml: 'Change of address',
            displayUrl: 'https://www.change-of-address.services.qld.gov.au/',
            linkUrl: '/s/redirect?collection=qld-gov&url=https%3A%2F%2Fwww.change-of-address.services.qld.gov.au%2F&index_url=https%3A%2F%2Fwww.change-of-address.services.qld.gov.au%2F&auth=RrjhEMq01%2B%2BZwQhpwXAjPg&profile=qld_preview&type=FP',
            descriptionHtml: 'Use this online form to change your home and/or postal address online, rather than contacting multiple Queensland Government departments/services.',
            additionalProperties: {
              icon: 'fa-car fa-motorcycle fa-address-card',
              service: 'yes'
            },
            category: ''
          }]
        }
      }
    };
    return exampleResponse;
  };

  //
  // Functions
  //

  // Close the concierge menus
  qgSiteSearch.fn.closeConciergePanels = function () {
    var initialConcierge = $('.qg-search-concierge-initial');
    var helpfulConcierge = $('.qg-search-concierge-help');
    var targetInput = $('.qg-search-site__input');

    // Immediately close both concierge panels
    initialConcierge.addClass('hide').removeClass('show');
    helpfulConcierge.addClass('hide').removeClass('show');

    // Toggle aria-expanded for the search input
    targetInput.attr('aria-expanded', 'false');
    setTimeout(function () {
      initialConcierge.removeClass('hide');
      helpfulConcierge.removeClass('hide');
    }, 300);
  };

  // Check Funnelback for suggested results
  qgSiteSearch.fn.checkForSuggestions = function (inputValue, targetInput) {
    var initialConcierge = targetInput.parent().find($('.qg-search-concierge-initial'));
    var helpfulConcierge = targetInput.parent().find($('.qg-search-concierge-help'));
    var numChars = inputValue.length;

    // Remove initial state
    initialConcierge.removeClass('show');

    // Query Funnelback when three characters are entered
    if (numChars >= 3) {
      // Get suggestions
      qgSiteSearch.fn.getSuggestions(inputValue, targetInput);

      // Get services
      qgSiteSearch.fn.getServices(inputValue, targetInput);

      // Transition reveal suggestions
      helpfulConcierge.addClass('show');
    }
  };

  //
  // Suggestion Keywords
  //

  // Get suggestion keywords
  qgSiteSearch.fn.getSuggestions = function (inputValue, targetInput) {
    var suggestURL = targetInput.parents('.qg-site-search__form').attr('data-suggestions');
    // var suggestURL = searchForm.attr('data-suggestions');

    $.ajax({
      cache: true,
      dataType: 'json',
      url: suggestURL,
      data: {
        partial_query: inputValue
      },
      success: function success(suggestions) {
        qgSiteSearch.fn.formatSuggestions(suggestions, targetInput);
      }
    });
  };

  // Format suggestion keywords
  qgSiteSearch.fn.formatSuggestions = function (suggestions, targetInput) {
    var inputField = targetInput.parent().find($('.qg-search-site__input'));
    var inputValue = inputField.val();
    var suggestionsContainer = targetInput.parent().find($('.qg-search-concierge-help .qg-search-concierge-group.suggestions'));
    var suggestionsHeading = '<h4>Suggestions</h4>';
    var suggestionsHTML = '';
    var maxSuggestions = 3;
    if (suggestions.length > 0) {
      targetInput.parent().find($('.qg-search-concierge-help')).show();
      // Reduce count to maximum limit
      suggestions = suggestions.slice(0, maxSuggestions);

      // Start the HTML for suggestions listing
      suggestionsHTML += '<div class="qg-search-concierge-content">';

      // Add the heading
      suggestionsHTML += suggestionsHeading;
      suggestionsHTML += '<ul class="list-group">';
      suggestions.forEach(function (item) {
        suggestionsHTML += '<li class="list-group-item">';
        suggestionsHTML += '<button tabindex="-1" data-analytics-link-group="qg-global-search-suggestion">';
        suggestionsHTML += getBoldText(inputValue, item.disp);
        suggestionsHTML += '</button>';
        suggestionsHTML += '</li>';
      });
      suggestionsHTML += '</ul>';
      suggestionsHTML += '</div>';
    } else {
      targetInput.parent().find($('.qg-search-concierge-help')).hide();
      targetInput.attr('aria-expanded', 'false');
    }
    // Update the concierge container
    suggestionsContainer.html(suggestionsHTML);
  };

  //
  // Related Services
  //

  // Get suggested services
  qgSiteSearch.fn.getServices = function (inputValue) {
    var searchForm = $('#qg-global-search-form');
    var resultsURL = searchForm.attr('data-results-url');
    $.ajax({
      cache: true,
      dataType: 'json',
      url: resultsURL,
      data: {
        query: inputValue
      },
      success: qgSiteSearch.fn.processServices
    });
  };

  // Process suggested services and filter out bad results
  qgSiteSearch.fn.processServices = function (services) {
    var allResults = services.response.resultPacket.results;
    var serviceResults = [];
    var featuredService = null;
    var curatorIndex = services.response.curator;

    // Look for curated results
    if (typeof curatorIndex !== 'undefined') {
      var allCuratedResults = curatorIndex.exhibits;
      if (typeof allCuratedResults !== 'undefined') {
        if (allCuratedResults.length > 0) {
          // The first result is always featured
          featuredService = allCuratedResults[0];

          // Process any additional exhibits
          for (var index = 1; index < allCuratedResults.length; index++) {
            var result = allCuratedResults[index];
            var additionalProperties = result.additionalProperties;
            if (additionalProperties.service === 'yes') {
              serviceResults.push(result);
            }
          }
        }
      }
    }

    // Look for services in standard results
    if (allResults.length > 0) {
      var filteredResults = allResults.filter(function (result) {
        if (result.listMetadata != null && result.listMetadata.sfinder != null) {
          return result.listMetadata.sfinder[0] === 'yes';
        } else {
          return false;
        }
      });
      serviceResults = serviceResults.concat(filteredResults);
      if (serviceResults.length > 3) {
        serviceResults = serviceResults.slice(0, 3);
      }
    }

    // Format the featured suggested service
    qgSiteSearch.fn.formatFeaturedService(featuredService);

    // Format the related services
    qgSiteSearch.fn.formatServices(serviceResults);
  };

  // Format featured service
  qgSiteSearch.fn.formatFeaturedService = function (featuredService) {
    var featuredServiceContainer = $('.qg-search-concierge-help .qg-search-concierge-group.highlight');
    var serviceHTML = '';
    if (featuredService) {
      var title = featuredService.titleHtml;
      var linkURL = featuredService.displayUrl;
      var description = featuredService.descriptionHtml;
      var additionalProperties = featuredService.additionalProperties;
      serviceHTML = '<div class="qg-search-concierge-content">';
      serviceHTML += '<div class="d-flex justify-content-between align-content-center flex-wrap">';
      serviceHTML += '<h4>' + title + '</h4>';

      // Check for icons
      if (typeof additionalProperties.icon !== 'undefined') {
        var allIcons = additionalProperties.icon.split(' ');
        var iconHTML = allIcons.map(function (icon) {
          return '<span class="fa ' + icon + '"></span>';
        });
        serviceHTML += '<div>' + iconHTML.join('') + '</div>';
      }
      serviceHTML += '</div>';
      serviceHTML += '<p>' + description + '</p>';
      if (linkURL) {
        if (additionalProperties.buttonText) {
          serviceHTML += '<a href="' + linkURL + '"  tabindex="-1" data-analytics-link-group="qg-global-search-feature" class="btn btn-global-primary-white">' + additionalProperties.buttonText + '</a>';
        } else {
          serviceHTML += '<a href="' + linkURL + '"  tabindex="-1" data-analytics-link-group="qg-global-search-feature" class="btn btn-global-primary-white">Continue</a>';
        }
      }
      serviceHTML += '</div>';
    }
    featuredServiceContainer.html(serviceHTML);
  };

  // Format suggested services
  qgSiteSearch.fn.formatServices = function (serviceResults) {
    var servicesContainer = $('.qg-search-concierge-help .qg-search-concierge-group.helper');
    var servicesHeading = '<h4>Related services</h4>';
    var serviceHTML = '';
    if (serviceResults.length > 0) {
      serviceHTML = '<div class="qg-search-concierge-content">';
      serviceHTML += servicesHeading;
      serviceHTML += '<ul class="list-group">';
      serviceResults.forEach(function (service) {
        var serviceName = service.title;
        var serviceLink = service.liveUrl;
        if (typeof serviceName !== 'undefined') {
          serviceName = serviceName.split('|')[0].trim();
        } else {
          serviceName = service.titleHtml;
        }
        if (typeof serviceLink === 'undefined') {
          serviceLink = service.displayUrl;
        }
        serviceHTML += '<li class="list-group-item">';
        serviceHTML += '<a href="' + serviceLink + '" tabindex="-1" data-analytics-link-group="qg-global-search-related-service">' + serviceName + '</a>';
        serviceHTML += '</li>';
      });
      serviceHTML += '</ul>';
      serviceHTML += '</div>';
    }
    servicesContainer.html(serviceHTML);
  };

  //
  // Ready
  //

  $(document).ready(function () {
    var searchInput = $('.qg-search-site__input');
    // Set up events
    searchInput.on('focus keydown', debouncer(qgSiteSearch.fn.inputEventHandler, 200));
  });

  // Binds
  $('body').on('focusin', '.qg-navigation .nav-link, .qg-service-finder__popular-apps a, .qg-coat-of-arms a', qgSiteSearch.fn.handleFocus);
  $('body').on('click', qgSiteSearch.fn.handleBodyClick);
  $('body').on('click', '.qg-search-close-concierge', qgSiteSearch.fn.clearInputField);
  $('body').on('click', '.qg-search-concierge-group.suggestions button', qgSiteSearch.fn.searchSuggestionClick);
  $('body').on('submit', '#qg-global-search-form', qgSiteSearch.fn.searchSubmitHandler);
  $('body').on('keydown', '.qg-search-concierge-group a, .qg-search-concierge-group button', qgSiteSearch.fn.keyboardNavigation);
});

/***/ }),

/***/ "./src/assets/_project/_blocks/components/social-media/qg-social-media.js":
/*!********************************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/social-media/qg-social-media.js ***!
  \********************************************************************************/
/***/ (() => {

(function ($) {
  'use strict';

  var qgSocialMedia = {
    config: {
      $twitterEl: $('.qg-twitter-updates'),
      $facebookEl: $('.qg-facebook-updates')
    },
    init: function init() {
      // twitter and facebook SDK scripts
      var twitterSdkScript = 'platform.twitter.com/widgets.js';
      var facebookSdkScript = 'connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0';
      // check if twitter SDK script is not already on the page then load
      if (this.config.$twitterEl.length > 0 && $('script[src*="' + twitterSdkScript + '"]').length <= 0) {
        this.loadScript('script', 'twitter-wjs', twitterSdkScript);
      }
      // check if facebook SDK script is not already on the page then load
      if (this.config.$facebookEl.length > 0 && $('script[src*="' + facebookSdkScript + '"]').length <= 0) {
        this.config.$facebookEl.each(function () {
          var curr = $(this);
          var fbUrl = curr.attr('data-href');
          var fbhtml = '<div class="fb-page" data-href="' + fbUrl + '" data-tabs="timeline" data-small-header="true" data-width="10000"  data-adapt-container-width="true" data-show-facepile="false"></div>';
          curr.append(fbhtml);
        });
        this.loadScript('script', 'facebook-wjs', facebookSdkScript);
      }
    },
    // load script function creates a tag and append on the page
    // tag -> passed element
    // sdkUrl -> URL of the element
    loadScript: function loadScript(tag, id, sdkUrl) {
      var createEl;
      var fjs = document.getElementsByTagName(tag)[0];
      var p = /^http:/.test(document.location) ? 'http' : 'https';
      if (!document.getElementById(id)) {
        createEl = document.createElement(tag);
        createEl.id = id;
        createEl.src = "".concat(p, "://").concat(sdkUrl);
        fjs.parentNode.insertBefore(createEl, fjs);
      }
    }
  };
  // initialize the social media
  qgSocialMedia.init();
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/components/tables/index.js":
/*!****************************************************************!*\
  !*** ./src/assets/_project/_blocks/components/tables/index.js ***!
  \****************************************************************/
/***/ (() => {

(function ($) {
  'use strict';

  function onPrint(callback) {
    window.matchMedia('print').addListener(function (query) {
      return query.matches ? callback() : null;
    });
    window.addEventListener('beforeprint', function () {
      return callback();
    });
  }
  // tables scrollable based on width
  function tablesscrollable() {
    var $contentTable = $('#qg-primary-content table');
    if ($contentTable.width() > $('#qg-primary-content').width()) {
      $contentTable.wrap('<div class="scrollable"><div class="inner"></div></div>');
    }
  }
  tablesscrollable();
  if ($('.scrollable').length > 0) {
    $('.scrollable').addClass('scrollable-table');
    onPrint(function () {
      $('.scrollable-table').removeClass('scrollable');
    });
    window.onafterprint = function (e) {
      setTimeout(function () {
        $('.scrollable-table').addClass('scrollable');
      }, 100);
    };
  }
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/breadcrumbs/breadcrumbs.js":
/*!***********************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/breadcrumbs/breadcrumbs.js ***!
  \***********************************************************************/
/***/ (() => {

(function () {
  $('.qg-global-breadcrumb .qg-breadcrumb-list').each(function () {
    var breadcrumbLength = $(this).find('.qg-breadcrumb-list-item').length;
    if (breadcrumbLength > 4) {
      for (var i = 0; i < breadcrumbLength; i++) {
        if (i > 1 && i < breadcrumbLength - 2) {
          $(this).find('.qg-breadcrumb-list-item').eq(i).addClass('shortened');
          $(this).find('.qg-breadcrumb-list-item').eq(i).find('.qg-breadcrumb-list-item__link').attr('tabindex', '-1');
          $(this).find('.qg-breadcrumb-list-item').eq(i).find('.qg-breadcrumb-list-item__link').attr('data-analytics-link-group', 'qg-breadcrumb-revealed-link');
        } else {
          $(this).find('.qg-breadcrumb-list-item').eq(i).find('.qg-breadcrumb-list-item__link').attr('data-analytics-link-group', 'qg-breadcrumb-link');
        }
      }
      $(this).find('.qg-breadcrumb-list-item').eq(1).after("<li class='qg-breadcrumb-list-item shorten'><button class='qg-breadcrumb-toggle' aria-label='Expand the breadcrumbs' data-analytics-link-group='qg-breadcrumb-ellipsis'>[...]</button></li>");
    }
    $('.qg-breadcrumb-toggle').on('click', function () {
      $('.qg-breadcrumb-list-item').removeClass('shortened');
      $('.qg-breadcrumb-list-item__link').attr('tabindex', '0');
      $('.qg-breadcrumb-list').addClass('expanded');
    });
  });
})();

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/content/content-types/figure-credits-toggle.js":
/*!*******************************************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/content/content-types/figure-credits-toggle.js ***!
  \*******************************************************************************************/
/***/ (() => {

/**
 * Figures
 *
 * Show/hide credits for figures
 *
 * @requires jQuery
 *
 * Figure has been restructure in `/src/docs/components/images.html`
 * .qg-cut-in, .qg-cut-in-alt need to be decommissioned in SWE (already decommissioned in Squiz Matrix)
 */

$(function () {
  'use strict';

  var figureElement = '.qg-cut-in, .qg-cut-in-alt';
  $('#qg-content .figure-credits-toggle').on('click', function () {
    $(this).closest(figureElement).find('.figure-credits').toggle(500).focus().end();
  });

  // decommission qg-cut-in warning
  if ($(figureElement).length) {
    console.warn('".qg-cut-in" and ".qg-cut-in-alt" is going to be deprecated in SWE library. Please replace ".qg-cut-in" or ".qg-cut-in-alt" with ".qg-fig". Please refer to https://qld-gov-au.github.io/web-template-release/components/images.html for more details.');
  }
});

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/content/content.js":
/*!***************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/content/content.js ***!
  \***************************************************************/
/***/ (() => {

(function () {
  $('.qg-index-item').each(function () {
    if ($(this).find('img').length <= 0) {
      $(this).addClass('content-only');
    }
  });
})();

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/content/share-links.js":
/*!*******************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/content/share-links.js ***!
  \*******************************************************************/
/***/ (() => {

(function ($) {
  $('.qg-share-link').each(function () {
    var from = window.location.href;
    var domain = window.location.hostname;
    if ($(this).hasClass('qg-share-facebook')) {
      $(this).attr('href', "http://www.facebook.com/share.php?u=".concat(from));
    } else if ($(this).hasClass('qg-share-twitter')) {
      $(this).attr('href', "http://twitter.com/share?url=".concat(from));
    } else if ($(this).hasClass('qg-share-linkedin')) {
      $(this).attr('href', "http://www.linkedin.com/shareArticle?mini=true&url=".concat(from, "&source=").concat(domain));
    }
  });
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/footer/feedback-form.js":
/*!********************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/footer/feedback-form.js ***!
  \********************************************************************/
/***/ ((module) => {

var feedbackForm = {
  /**
   * Initialise feedbackForm
   * @param {string} franchiseTitle - Franchise title if any present on a page
   * @return {undefined}
   **/
  init: function init(franchiseTitle) {
    $('.no-js').removeClass('no-js');
    /**
     * Check franchise title is present on the page else get it from the URL
     **/
    var franchise;
    if (franchiseTitle) {
      franchise = franchiseTitle;
    } else {
      franchise = location.pathname.split('/')[1];
    }
    /**
     * Add hidden inputs on a page
     **/
    var hiddenInputs = {
      franchise: franchise,
      'page-title': $(document).find('title').text(),
      'page-url': window.location.href,
      'page-referer': document.referrer,
      rspUsrAgent: navigator.userAgent,
      browserName: this.predictBrowserName().name + ' ' + this.predictBrowserName().version,
      OS: navigator.platform,
      'g-recaptcha-response': ''
    };
    for (var prop in hiddenInputs) {
      this.addHiddenInput("".concat(prop), "".concat(hiddenInputs[prop]));
    }
    /**
     * events to show/hide feedback component
     **/
    $('.qg-footer-feedback__close').on('click', function (e) {
      e.preventDefault();
      $('.qg-feedback-toggle').removeClass('d-none');
    });
    $('.qg-feedback-toggle').on('click', function (e) {
      e.preventDefault();
      if ($('#qg-page-feedback-form').hasClass('d-none')) {
        $(this).addClass('d-none');
      }
    });
  },
  /**
   * Sanitize string (remove tags to avoid XSS attack)
   * @return {undefined}
   * @param {string} str - string to sanitize
   **/
  sanitize: function sanitize(str) {
    if (!str) {
      return false;
    }
    return str.replace(/</g, '&lt;') // strip <
    .replace(/>/g, '&gt;') // strip >
    .replace(/\+/g, '&#43;') // strip +
    .replace(/\\/g, '&#92;') // strip \
    .replace(/\(/g, '&#40;') // strip (
    .replace(/\)/g, '&#41;') // strip )
    .replace(/{/g, '&#123;') // strip (
    .replace(/}/g, '&#124;'); // strip )
  },
  /**
   * Predict user browser (this function only predicts based on certain browser values and may not work with all the browsers)
   * @return {Object}
   **/
  predictBrowserName: function predictBrowserName() {
    var navigatorUserAgent = navigator.userAgent;
    var predictVersion;
    var matchBrowser = navigatorUserAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(matchBrowser[1])) {
      predictVersion = /\brv[ :]+(\d+)/g.exec(navigatorUserAgent) || [];
      return {
        name: 'IE',
        version: predictVersion[1] || ''
      };
    }
    if (matchBrowser[1] === 'Chrome') {
      predictVersion = navigatorUserAgent.match(/\bOPR|Edge\/(\d+)/);
      if (predictVersion != null) {
        return {
          name: 'Edge',
          version: predictVersion[1]
        };
      }
    }
    matchBrowser = matchBrowser[2] ? [matchBrowser[1], matchBrowser[2]] : [navigator.appName, navigator.appVersion, '-?'];
    predictVersion = navigatorUserAgent.match(/version\/(\d+)/i);
    if (predictVersion != null) {
      matchBrowser.splice(1, 1, predictVersion[1]);
    }
    return {
      name: matchBrowser[0],
      version: matchBrowser[1]
    };
  },
  /**
   * Add hidden inputs function
   * @return {undefined}
   * @param {string} key - name of the hidden input
   * @param {string} val - value of the hidden input
   **/
  addHiddenInput: function addHiddenInput(key, val) {
    var newHiddenInput = $('<input type="hidden"/>');
    newHiddenInput.attr('name', key);
    newHiddenInput.attr('value', this.sanitize(val));
    $('#feedback-hidden-inputs').append(newHiddenInput);
  },
  /**
   * This function reset the value of feedback form on page load.
   * @return {undefined}
   **/
  resetForm: function resetForm() {
    function resetForm() {
      $('#qg-page-feedback-form :input:not(:checkbox):not(:hidden):not(:button):not(:radio):not(:submit)').each(function () {
        $(this).val('');
      });
      $('#qg-page-feedback-form :input:checkbox, #qg-page-feedback-form :input:radio').each(function (element) {
        $(this).prop('checked', false);
      });
    }
    window.addEventListener('load', function (event) {
      resetForm();
    }, false);
  }
};
module.exports = feedbackForm;

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/footer/footer-legals.js":
/*!********************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/footer/footer-legals.js ***!
  \********************************************************************/
/***/ (() => {

(function ($) {
  //Copyrights update to current year
  if ($('#qg-copyright-daterange').length > 0) {
    $('#qg-copyright-daterange').html('1995&ndash;' + new Date().getFullYear());
  }
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/location/qg-location.js":
/*!********************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/location/qg-location.js ***!
  \********************************************************************/
/***/ (() => {

// Helper to pass linting with google APIs
/* eslint-disable no-undef */

$(function () {
  'use strict';

  //
  // Namespace
  //
  var qgLocation = {
    fn: {},
    vars: {
      cookie_name: 'qg-location',
      event_coordinates_set: 'qgLocationCoordsSet',
      event_locality_set: 'qgLocationLocalitySet',
      event_location_found: 'qgLocationFound',
      event_location_cleared: 'qgLocationCleared',
      error_message: '',
      suburb_input: ''
    }
  };

  //
  // Helpers
  //

  // Check if we're on a local environment
  // function isDevelopment () {
  //   var location = window['location']['hostname'];
  //
  //   if (location === 'localhost') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // Create a cookie
  function setCookie(cookieName, cookieValue, daysActive) {
    var cookieEntry = cookieName + '=' + encodeURIComponent(cookieValue) + ';';

    // Timed cookie
    var rightNow = new Date();
    rightNow.setTime(rightNow.getTime() + daysActive * 24 * 60 * 60 * 1000);
    var expiryTime = 'expires=' + rightNow.toUTCString();
    document.cookie = cookieEntry + expiryTime + '; path=/;';
  }

  // Get a cookie by name
  function getCookie(cookieName) {
    var target = cookieName + '=';
    var cookieJar = decodeURIComponent(document.cookie).split(';');
    var filteredJar = cookieJar.filter(function (cookie, index) {
      var current = cookie.trim();
      var matchIndex = current.indexOf(target);
      if (matchIndex === 0) {
        return true;
      }
    });
    if (filteredJar.length > 0) {
      var chosenCookie = filteredJar[0].trim();
      return chosenCookie.substring(target.length, chosenCookie.length);
    } else {
      return '';
    }
  }

  // Delete a cookie by name
  function deleteCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  // Hide the dropdown as the native dropdown() function doesn't work
  function closeDropdown() {
    $('.header-location').removeClass('show');
    $('.header-location .dropdown-toggle').attr('aria-expanded', 'false');
    $('.header-location .qg-location-setter').removeClass('show');
  }

  // Handle custom events
  function customEventHandler(event, eventName) {
    switch (eventName) {
      case qgLocation['vars']['event_coordinates_set']:
        qgLocation.fn.getLocality();
        break;
      case qgLocation['vars']['event_locality_set']:
        qgLocation.fn.getCoordinates();
        break;
      case qgLocation['vars']['event_location_found']:
        qgLocation.fn.setLocationName();
        qgLocation.fn.initServiceCentre();
        break;
      case qgLocation['vars']['event_location_cleared']:
        qgLocation.fn.resetLocationContainers();
        break;
    }
  }

  // Event debouncer
  function debouncer(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Convert to title case
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    // Directly return the joined string
    return splitStr.join(' ');
  }

  // Wrap part of a string in bold tags
  function getBoldText(subString, stringToChange) {
    var targetString = stringToChange.substr(0, subString.length);

    // Wrap the text in bold tags
    var formattedString = '<b>';
    formattedString += targetString;
    formattedString += '</b>';
    return stringToChange.replace(targetString, formattedString);
  }

  //
  // Events
  //

  // Keep location dropdown open the elements inside of the dropdown are clicked
  $('.header-location .dropdown-menu').click(function (e) {
    var eventTarget = event['target'];
    var targetElement = eventTarget['tagName'].toLowerCase();

    // Close suburb list if clicking outside
    if (event['keyCode'] !== 40 && event['keyCode'] !== 38) {
      qgLocation.fn.closeSuburbsIfOutside(e);
    }
    if (targetElement !== 'button') {
      e.stopPropagation();
    }
  });

  // Prompt the browser to access inbuilt geolocation functionality
  qgLocation.fn.getDeviceLocation = function (event) {
    event.stopPropagation();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(qgLocation.fn.processPositionData, qgLocation.fn.failure);
    }
  };

  // Clear position data from browser
  qgLocation.fn.deletePositionData = function (event) {
    event.stopPropagation();
    var cookieName = qgLocation['vars']['cookie_name'];
    deleteCookie(cookieName);

    // Notify the rest of the page
    $('body').trigger('custom', qgLocation['vars']['event_location_cleared']);
  };

  // Close the popup
  qgLocation.fn.closeLocationPopup = function (event) {
    event.stopPropagation();

    // Manually close the dropdown
    closeDropdown();

    // Add class to give immediate effect instead of transition
    $('.header-location .dropdown-menu').addClass('closed');

    // Remove this class after dropdown has closed
    setTimeout(function () {
      $('.header-location .dropdown-menu').removeClass('closed');
    }, 300);
  };

  // Manually search for location
  qgLocation.fn.initManualSearch = function (event) {
    var inputField = event['target'];
    var keyCode = event['keyCode'];
    var inputValue = inputField['value'].toLowerCase();
    var numChars = inputValue.length;
    $('.qg-location-setter-form input[type=text]').removeClass('error');
    if (keyCode === 40) {
      if ($('.qg-location-setter-autocomplete button').length) {
        $('.qg-location-setter-autocomplete button')[0].focus();
        $('.qg-location-setter-form input[type=text]').attr('data-navindex', '0');
      }
    } else if (numChars >= 3) {
      // Save the manual suburb input value
      qgLocation['vars']['suburb_input'] = inputValue;

      // Query the suburbs API
      qgLocation.fn.querySuburbsAPI();
    } else {
      $('.qg-location-setter-autocomplete').addClass('hide');
    }
  };
  qgLocation.fn.keyboardNavigation = function (event) {
    var navIndex = parseInt($('.qg-location-setter-form input[type=text]').attr('data-navindex'));
    if (event['keyCode'] === 40) {
      navIndex++;
      $('.qg-location-setter-autocomplete button')[navIndex].focus();
    } else if (event['keyCode'] === 38) {
      if (navIndex > 0) {
        navIndex--;
        $('.qg-location-setter-autocomplete button')[navIndex].focus();
      } else {
        $('.qg-location-setter-form input[type=text]').focus();
      }
    }
    $('.qg-location-setter-form input[type=text]').attr('data-navindex', navIndex);
  };

  // Get suburb from suggestion click
  qgLocation.fn.getManualSuburbName = function (event) {
    event.stopPropagation();
    var suburbButton = event['target'];
    var suburbName = suburbButton.getAttribute('data-location');
    var suburbFullArea = $(suburbButton).text();

    // Update the input field
    var inputField = $('.qg-location-setter-form input[type=text]');
    inputField.attr('data-choice', suburbName);
    inputField.attr('data-choice-full', suburbFullArea);
    inputField.val(suburbFullArea);

    // Hide the suggestions
    $('.qg-location-setter-autocomplete').addClass('hide');
  };

  // Save manually selected suburb
  qgLocation.fn.setManualSuburb = function (event) {
    event.stopPropagation();
    var inputField = $('.qg-location-setter-form input[type=text]');
    var inputError = $('.qg-location-setter-error');
    if (inputField.val().length > 2) {
      inputError.addClass('hide');

      // Get manual suburb selection
      var savedSuburb = inputField.attr('data-choice');
      var savedSuburbFull = inputField.attr('data-choice-full');
      if (savedSuburb === '') {
        inputField.addClass('error');
        inputError.removeClass('hide');
      } else {
        // Manually close the dropdown
        closeDropdown();
        qgLocation.fn.saveLocality(savedSuburb, savedSuburbFull);
      }
    } else {
      inputField.addClass('error');
      inputError.removeClass('hide');
    }
  };

  // Prevent form from performing a submission
  qgLocation.fn.locationSubmitHandler = function (event) {
    event.preventDefault();
  };

  // Close popup if clicking outside
  qgLocation.fn.closePopupIfOutside = function (e) {
    if (!$(e.target).closest('#qg-location-dropdown').length && !$(e.target).is('#qg-location-dropdown') && !$(e.target).is('.dropdown-toggle') && $('.header-location .qg-location-setter').hasClass('show')) {
      // Manually close the dropdown
      closeDropdown();

      // Add class to give immediate effect instead of transition
      $('.header-location .dropdown-menu').addClass('closed');

      // Remove this class after dropdown has closed
      setTimeout(function () {
        $('.header-location .dropdown-menu').removeClass('closed');
      }, 300);
    }
  };

  // Close suburb list if clicking outside
  qgLocation.fn.closeSuburbsIfOutside = function (event) {
    if (!$(event['target']).closest('.qg-location-setter-form').length && event['view'] !== undefined) {
      $('.qg-location-setter-autocomplete').addClass('hide');
    }
  };

  //
  // Local data
  //

  // Get local example of Google Maps API
  qgLocation.fn.getExampleLocation = function () {
    var exampleResponse = [{
      address_components: [{
        long_name: 'Browning St near Boundary Rd, stop 5',
        short_name: 'Browning St near Boundary Rd, stop 5',
        types: ['establishment', 'point_of_interest', 'transit_station']
      }, {
        long_name: 'South Brisbane',
        short_name: 'South Brisbane',
        types: ['locality', 'political']
      }, {
        long_name: 'Brisbane City',
        short_name: 'Brisbane',
        types: ['administrative_area_level_2', 'political']
      }, {
        long_name: 'Queensland',
        short_name: 'QLD',
        types: ['administrative_area_level_1', 'political']
      }, {
        long_name: 'Australia',
        short_name: 'AU',
        types: ['country', 'political']
      }, {
        long_name: '4101',
        short_name: '4101',
        types: ['postal_code']
      }],
      formatted_address: 'Browning St near Boundary Rd, stop 5, South Brisbane QLD 4101, Australia',
      geometry: {
        location: {
          lat: -27.477727,
          lng: 153.01314
        },
        location_type: 'GEOMETRIC_CENTER',
        viewport: {
          northeast: {
            lat: -27.4763780197085,
            lng: 153.0144889802915
          },
          southwest: {
            lat: -27.4790759802915,
            lng: 153.0117910197085
          }
        }
      },
      place_id: 'ChIJufdIyqBQkWsRlnW4qQxzN94',
      types: ['establishment', 'point_of_interest', 'transit_station']
    }];
    return exampleResponse;
  };

  // Get local example of service centres
  qgLocation.fn.getExampleServiceCentres = function () {
    var exampleCentres = {
      question: {
        rawInputParameters: {
          origin: ['-27.477413799999997;153.01329099999998']
        }
      },
      response: {
        resultPacket: {
          results: [{
            rank: 1,
            title: 'Asif AMin Justices of the Peace Branch',
            kmFromOrigin: 0.2,
            metaData: {
              area: 'Brisbane City',
              hours: 'Monday to Friday, 10am-2pm|Mon,Mon,Tues,Tues,Wednes,Wednes,Thurs,Thurs,Fri,Fri,',
              agency: 'DJAG',
              address2: 'Level 6, 154 Melbourne Street',
              address1: 'See reception',
              viewpageassetid: '21806',
              postcode: '4101',
              type: 'Service',
              s: 'Volunteer Justice of the Peace or Commissioner for Declarations',
              t: 'Justices of the Peace Branch',
              phone: '1300 301 147',
              datasource: 'JP',
              suburb: 'SOUTH BRISBANE',
              location: '-27.4761712;153.0149019',
              id: '92'
            }
          }, {
            rank: 2,
            title: 'Family Court Brisbane',
            kmFromOrigin: 1.2,
            metaData: {
              area: 'Brisbane City',
              hours: 'Monday, Thursday and Friday 9am-2pm Note this service is for Family Court matters only. Hours of service may vary daily.|Mon,Mon,Thurs,Thurs,Fri,Fri,',
              agency: 'DJAG',
              address2: '(Entrance via Tank Street)',
              address1: 'Corner North Quay and Tank Streets',
              viewpageassetid: '21806',
              postcode: '4000',
              type: 'Service',
              s: 'Hours of service vary daily, please phone before attending. Volunteer Justice of the Peace or Commissioner for Declarations',
              t: 'Family Court Brisbane',
              datasource: 'JP',
              suburb: 'BRISBANE',
              location: '-27.468426;153.019921',
              id: '62'
            }
          }]
        }
      }
    };
    return exampleCentres;
  };

  //
  // Google Maps API Handlers
  //

  // Contact Google Maps API with query and callback
  qgLocation.fn.queryLocationAPI = function (geocoderQuery, successCallback) {
    var geocoderLookup = new google.maps.Geocoder();
    geocoderLookup.geocode(geocoderQuery, function (results, status) {
      if (status === 'OK') {
        successCallback(results);
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  };

  // Get the locality from Google Maps API
  qgLocation.fn.getLocality = function () {
    var storedData = qgLocation.fn.getStoredLocation();

    // Get location coordinates from storage
    var geocoderQuery = {
      location: {
        lat: parseFloat(storedData['latitude']),
        lng: parseFloat(storedData['longitude'])
      }
    };

    // Query the Google Maps API with location coordinates
    qgLocation.fn.queryLocationAPI(geocoderQuery, qgLocation.fn.processLocality);
  };

  // Process the Google Maps API data for a suburb
  qgLocation.fn.processLocality = function (jsonResponse) {
    var targetType = 'locality';
    var locality = 'unknown';

    // Check over all address matches
    for (var index = 0; index < jsonResponse.length; index++) {
      var address = jsonResponse[index];
      var addressComponents = address['address_components'];

      // Break out of the loop if a locality is found
      if (locality !== 'unknown') {
        break;
      }

      // Check over all address components
      for (var componentIndex = 0; componentIndex < addressComponents.length; componentIndex++) {
        var component = addressComponents[componentIndex];
        var componentTypes = component['types'];

        // Find the locality component
        if (componentTypes.indexOf(targetType) !== -1) {
          locality = component['short_name'];
          break;
        }
      }
    }

    // Proceed if an address is found
    if (locality !== 'unknown') {
      qgLocation.fn.saveLocality(locality);
    }
  };

  // Find coordinates based on address
  qgLocation.fn.getCoordinates = function () {
    var storedData = qgLocation.fn.getStoredLocation();
    if (typeof storedData['latitude'] === 'undefined') {
      var address = storedData['address'];
      if (address) {
        // Get location coordinates from storage
        var geocoderQuery = {
          address: storedData['address']
        };

        // Query the Google Maps API with location coordinates
        qgLocation.fn.queryLocationAPI(geocoderQuery, qgLocation.fn.processCoordinates);
      }
    } else {
      // Notify the rest of the page
      $('body').trigger('custom', qgLocation['vars']['event_location_found']);
    }
  };

  // Process the Google Maps API data for coordinates
  qgLocation.fn.processCoordinates = function (jsonResponse) {
    var coordinates = null;

    // Check over all address matches
    for (var index = 0; index < jsonResponse.length; index++) {
      var address = jsonResponse[index];
      var geometry = address['geometry'];
      if (typeof geometry !== 'undefined') {
        coordinates = geometry['location'];
        if (typeof coordinates !== 'undefined') {
          break;
        }
      }
    }

    // Proceed if coordinates are found
    if (coordinates !== null) {
      qgLocation.fn.saveCoordinates(coordinates);
    }
  };

  //
  // ArcGIS API Handlers
  //

  // Check the ArcGIS API
  qgLocation.fn.querySuburbsAPI = function () {
    var suburbsURL = 'https://gisservices.information.qld.gov.au/arcgis/rest/services/PlanningCadastre/LandParcelPropertyFramework/MapServer/19/query';
    var suburbsParams = {
      f: 'json',
      where: 'ADMINAREANAME+%3C%3E+%27Null%27',
      returnGeometry: 'false',
      spatialRel: 'esriSpatialRelIntersects',
      outFields: 'ADMINAREANAME',
      orderByFields: 'ADMINAREANAME%20ASC'
    };

    // Construct query params from data
    var suburbsQuery = '?';
    suburbsQuery += Object.keys(suburbsParams).map(function (key) {
      return key + '=' + suburbsParams[key];
    }).join('&');

    // Query the endpoint
    $.ajax({
      cache: true,
      dataType: 'json',
      url: suburbsURL + suburbsQuery,
      success: qgLocation.fn.processSuburbsData
    });
  };

  // Check the ArcGIS API
  qgLocation.fn.processSuburbsData = function (jsonResponse) {
    var locationList = [];
    var userSuburb = qgLocation['vars']['suburb_input'];
    if (Object.prototype.hasOwnProperty.call(jsonResponse, 'features')) {
      // Add each suburb to the location list
      jsonResponse['features'].forEach(function (object) {
        var sourceName = object['attributes']['ADMINAREANAME'] || object['attributes']['adminareaname'];
        sourceName = sourceName.toLowerCase();
        var suburbLGA = titleCase(sourceName);
        var suburbObject = {
          name: sourceName,
          name_friendly: suburbLGA,
          name_formatted: suburbLGA,
          suburb: suburbLGA.split(',')[0]
        };

        // Filter out the suburb if user input exists
        if (userSuburb !== '') {
          // Compare values
          if (sourceName.indexOf(userSuburb) === 0) {
            suburbObject['name_formatted'] = getBoldText(userSuburb, suburbLGA);
            locationList.push(suburbObject);
          }
        } else {
          locationList.push(suburbObject);
        }
      });
    }
    qgLocation.fn.displaySuburbSuggestions(locationList);
  };

  //
  // Functions
  //

  // Script loader
  qgLocation.fn.initScript = function () {
    var scriptID = 'googleapi';
    if ($('#' + scriptID).length === 0) {
      //console.log('Maps not loaded');
      // Maps not loaded
      // Create script tag
      var apiKey = 'AIzaSyDvR5MCDqi0HtcjkehKqbKhyoCxt4Khqac';
      var scriptURL = 'https://maps.googleapis.com/maps/api/js?callback=qg_location_init&key=' + apiKey;
      var scriptElement = document.createElement('script');

      // Populate tag
      scriptElement['type'] = 'text/javascript';
      scriptElement['src'] = scriptURL;
      scriptElement['id'] = scriptID;

      // Insert into the DOM
      document.querySelector('body').appendChild(scriptElement);
      window.qg_location_init = function () {};
      scriptElement.onload = function () {
        qgLocation.fn.init();
      };
    } else {
      //console.log('Maps already loaded on page');
      // Maps already loaded on page
      // Initialise location module
      qgLocation.fn.init();
    }
  };

  // Initialiser
  qgLocation.fn.init = function () {
    // Set up events
    qgLocation.fn.setUpListeners();

    // Check for saved data
    var storedData = qgLocation.fn.getStoredLocation();
    if (storedData) {
      var dataEvent = '';

      // Check for coordinates
      if (typeof storedData['latitude'] !== 'undefined') {
        if (storedData['locality'] !== 'unknown') {
          // All location data found, update the page
          dataEvent = qgLocation['vars']['event_locality_set'];
        } else {
          // Coordinates exist, find locality
          dataEvent = qgLocation['vars']['event_coordinates_set'];
        }
      }

      // Notify the rest of the page
      $('body').trigger('custom', dataEvent);
    }
  };

  // Set up input field listeners
  qgLocation.fn.setUpListeners = function () {
    var suburbInputField = $('.qg-location-setter-form input[type=text]');
    suburbInputField.on('keyup', debouncer(qgLocation.fn.initManualSearch, 200));
  };

  // Check for saved location
  qgLocation.fn.getStoredLocation = function () {
    var cookieName = qgLocation['vars']['cookie_name'];
    var storedData = getCookie(cookieName);
    if (storedData !== '') {
      var locationData = JSON.parse(storedData);
      return locationData;
    } else {
      return null;
    }
  };

  // The user has allowed geolocation
  qgLocation.fn.processPositionData = function (response) {
    var positionData = response.coords;
    qgLocation.fn.setPositionData(positionData);
    closeDropdown();
  };

  // The user has blocked geolocation
  qgLocation.fn.failure = function (response) {
    var responseMessage = response['message'];
    qgLocation['vars']['error_message'] = responseMessage;
  };

  // Save the position data to the browser
  qgLocation.fn.setPositionData = function (positionData) {
    var location = {
      latitude: positionData.latitude,
      longitude: positionData.longitude,
      locality: 'unknown'
    };

    // Save to cookie
    qgLocation.fn.saveLocationCookie(location);

    // Notify the rest of the page
    $('body').trigger('custom', qgLocation['vars']['event_coordinates_set']);
  };

  // Save data to the location cookie
  qgLocation.fn.saveLocationCookie = function (cookieData) {
    var cookieName = qgLocation['vars']['cookie_name'];
    var cookieValue = JSON.stringify(cookieData);
    var daysActive = 7;
    setCookie(cookieName, cookieValue, daysActive);
  };

  // Save the target locality
  qgLocation.fn.saveLocality = function (locality, address) {
    var storedData = qgLocation.fn.getStoredLocation();

    // Handle no cookie present
    if (storedData === null) {
      storedData = {
        locality: 'unknown'
      };
    }

    // Handle optional address value
    if (address) {
      storedData['address'] = address;
    }
    storedData['locality'] = locality;

    // Save to cookie
    qgLocation.fn.saveLocationCookie(storedData);

    // Notify the rest of the page
    $('body').trigger('custom', qgLocation['vars']['event_locality_set']);
  };

  // Save the suburb coordinates
  qgLocation.fn.saveCoordinates = function (coordinates) {
    var storedData = qgLocation.fn.getStoredLocation();

    // Handle no cookie present
    if (storedData === null) {
      storedData = {};
    }

    // Data is processed differently depending on environment
    storedData['latitude'] = coordinates.lat();
    storedData['longitude'] = coordinates.lng();

    // Save to cookie
    qgLocation.fn.saveLocationCookie(storedData);

    // Notify the rest of the page
    $('body').trigger('custom', qgLocation.vars.event_location_found);
  };

  // Populate the suburb suggestion list
  qgLocation.fn.displaySuburbSuggestions = function (allSuburbs) {
    var targetContainer = $('.qg-location-setter.show .qg-location-setter-form');
    var suggestionHTML = '';
    if (targetContainer) {
      var suggestionList = targetContainer.find('.qg-location-setter-autocomplete');

      // Check for returned data
      if (allSuburbs.length > 0) {
        suggestionHTML = '<ul>';
        allSuburbs.forEach(function (suburbData) {
          var suburbName = suburbData['suburb'];
          var suburbHTML = suburbData['name_formatted'];
          suggestionHTML += '<li><button class="qg-location-manual" tabindex="-1" data-location="' + suburbName + '">' + suburbHTML + '</button></li>';
        });
        suggestionHTML += '</ul>';
        suggestionList.removeClass('hide');
      }
      suggestionList.html(suggestionHTML);
    }
  };

  // Visually set the location data
  qgLocation.fn.setLocationName = function () {
    var storedData = qgLocation.fn.getStoredLocation();
    var locality = storedData['locality'];

    // Update header
    $('.header-location .dropdown-toggle').attr('aria-label', 'Your location is ' + locality);
    $('.header-location .location-name').text(locality);

    // Update all location containers
    setTimeout(function () {
      $('.qg-location-default').addClass('hide');
      $('.qg-location-set').removeClass('hide');
    }, 300);
  };

  // Initialise functions for finding the nearest service centre
  qgLocation.fn.initServiceCentre = function () {
    var serviceCentreModule = $('.qg-service-centre__wrapper');
    if (serviceCentreModule.length > 0) {
      var storedData = qgLocation.fn.getStoredLocation();
      var centreTypes = serviceCentreModule.attr('data-types').split('; ');
      var noneIndex = centreTypes.indexOf('None');

      // Remove "None" from centre types
      if (noneIndex !== -1) {
        centreTypes.splice(noneIndex, 1);
      }

      // Query Funnelback with location and service centre types
      var locationOrigin = storedData['latitude'] + ',' + storedData['longitude'];
      var targetURL = serviceCentreModule.attr('data-centres');
      var queryMetadata = centreTypes.join('+');
      $.ajax({
        cache: true,
        dataType: 'json',
        url: targetURL,
        data: '&origin=' + locationOrigin + '&meta_datasource_orsand=' + queryMetadata,
        success: qgLocation.fn.findServiceCentre
      });
    }
  };

  // Process the service centre response
  qgLocation.fn.findServiceCentre = function (jsonResponse) {
    var results = jsonResponse['response']['resultPacket']['results'];
    var centreData = null;
    var centreContainer = $('.qg-service-centre__results');
    var centreHTML = '';
    if (results.length > 0) {
      centreData = results[0];
    }
    if (centreData && centreData['listMetadata']) {
      var centreName = centreData['listMetadata']['t'];
      var centreID = centreData['listMetadata']['id'];
      var centreDistance = centreData['kmFromOrigin'];
      var centreAddress1 = centreData['listMetadata']['address1'];
      var centreAddress2 = centreData['listMetadata']['address2'];

      // Build URL
      var centreType = centreData['listMetadata']['datasource'];
      if (centreType !== undefined) {
        centreType = centreType[0].toLowerCase();
      }
      var centreURL = centreContainer.attr('data-' + centreType);

      // Handle special cases
      switch (centreType) {
        case 'hsc':
          centreURL += 'id=' + centreID + '&title=' + centreName;
          break;
        default:
          centreURL += centreName;
      }

      // Build HTML
      centreHTML += '<a href="' + centreURL + '" class="qg-service-centre__link" data-analytics-link-group="qg-nearest-service-centre-details">' + centreName + '</a>';
      centreHTML += '<ul class="qg-service-centre-list">';
      centreHTML += '<li class="qg-service-centre-list-item service-info">';
      centreHTML += '<a href="' + centreURL + '" data-analytics-link-group="qg-nearest-service-centre-services">Services available</a>';
      centreHTML += '</li>';
      if (centreDistance !== null) {
        centreHTML += '<li class="qg-service-centre-list-item centre-distance">' + centreDistance + ' km away</li>';
      }
      centreHTML += '<li class="qg-service-centre-list-item">';
      if (centreAddress1 !== undefined) {
        centreHTML += '<span class="qg-service-centre__address">' + centreAddress1 + '</span>';
      }
      if (centreAddress2 !== undefined) {
        centreHTML += '<span class="qg-service-centre__address">' + centreAddress2 + '</span>';
      }
      centreHTML += '</li>';
      centreHTML += '</ul>';
    } else {
      centreHTML += '<p>Browse all service centre locations to find the nearest one to you.</p>';
    }
    centreContainer.html(centreHTML);
  };

  // Restore location containers to default state after location cleared
  qgLocation.fn.resetLocationContainers = function () {
    var defaultLocation = 'unknown';
    var inputField = $('.qg-location-setter-form input[type=text]');

    // Update header
    closeDropdown();
    $('.header-location .dropdown-toggle').attr('arisa-label', 'Your location is ' + defaultLocation);
    $('.header-location .location-name').text(defaultLocation);

    // Update suburb section
    $('.qg-location-setter-error').addClass('hide');
    $('.qg-location-setter-form input[type=text]').removeClass('error');
    inputField.attr('data-choice', '');
    inputField.attr('data-choice-full', '');
    inputField.val('');

    // Update all location containers
    setTimeout(function () {
      $('.qg-location-default').removeClass('hide');
      $('.qg-location-set').addClass('hide');
    }, 300);
  };

  // Close service centre collapsible
  qgLocation.fn.closeServiceCentre = function () {
    $('#qg-service-centre-location-setter').collapse('hide');
  };
  $('.qg-location-setter .set-location').on('focus', function () {
    $('.qg-location-setter-autocomplete').addClass('hide');
  });

  //
  // Ready
  //

  $(document).ready(function () {
    var locationID = '.header-location';
    if ($(locationID).length > 0) {
      qgLocation.fn.initScript();
    }
  });

  // Binds
  $('body').on('custom', customEventHandler);
  $('body').on('click', '.qg-location-setter .detect-location', qgLocation.fn.getDeviceLocation);
  $('body').on('click', '.qg-location-setter .clear-location', qgLocation.fn.deletePositionData);
  $('body').on('click', '.qg-location-setter .qg-location-manual', qgLocation.fn.getManualSuburbName);
  $('body').on('click', '.qg-location-setter .set-location', qgLocation.fn.setManualSuburb);
  $('body').on('click', '.qg-location-setter .qg-location-setter-close', qgLocation.fn.closeLocationPopup);
  $('body').on('submit', '.qg-location-setter .qg-location-setter-form', qgLocation.fn.locationSubmitHandler);
  $('body').on('click', qgLocation.fn.closePopupIfOutside);
  $('body').on('click', qgLocation.fn.closeSuburbsIfOutside);
  $('body').on('click', '.qg-location-setter-close', qgLocation.fn.closeServiceCentre);
  $('body').on('keydown', '.qg-location-setter-autocomplete button', qgLocation.fn.keyboardNavigation);
});

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/section-nav/qg-section-nav.js":
/*!**************************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/section-nav/qg-section-nav.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


/**
     * activeSideNav function if text of a page heading match with a side nav text then adds a 'active' class.
     * @return {undefined}
 **/
var activeSideNav = function () {
  function refineText(text) {
    return text.toLowerCase().replace(/ /g, '');
  }
  /**
     * getCurrentTitle function get heading by checking page meta attributes and H1 text.
     * @return {undefined}
  **/
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
  /**
     * highlightNavItem function if text of a page heading match with the side nav text then adds a 'active' class.
     * @return {undefined}
  **/
  function highlightNavItem() {
    var currentPageTitle = getCurrentTitle();
    if ($('.guide-sub-nav').length > 0) {
      // In case of Guide Navigation, sub heading are in H2 tags.
      var contentHeading = $.trim($('h2', '#qg-primary-content').eq(0).text());
      $('.guide-sub-nav >li').each(function () {
        var guideNavHeading = $(this).clone().find('.page-number').remove().end().text().trim();
        if (refineText(guideNavHeading) === refineText(contentHeading)) {
          $(this).find('a').addClass('active').removeAttr('href');
        }
      });
    } else {
      $('.qg-section-nav ul>li, #qg-section-nav ul>li').each(function () {
        if ($.trim(refineText($(this).text())) === $.trim(currentPageTitle)) {
          $(this).find('a').addClass('active').removeAttr('href');
        }
      });
    }
  }
  return {
    highlightNavItem: highlightNavItem
  };
}();
module.exports = activeSideNav;

/***/ }),

/***/ "./src/assets/_project/_blocks/layout/section-nav/qg-step-nav.js":
/*!***********************************************************************!*\
  !*** ./src/assets/_project/_blocks/layout/section-nav/qg-step-nav.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/breakpoints.js */ "./src/assets/_project/_blocks/utils/breakpoints.js");

var stepNav = {
  config: {
    $guideSubNav: $('.qg-section-nav .guide-sub-nav'),
    $qgSectionNav: $('.qg-section-nav', '.qg-section-nav'),
    $qgSectionNavListItems: $('.qg-section-nav .guide-sub-nav li'),
    $stepNav: $('#step-nav'),
    $heading: $('#qg-primary-content h1')
  },
  init: function init() {
    var _this = this;
    if (this.config.$guideSubNav.length) {
      this.createStepNav();
      $(window).resize(function () {
        return _this.createStepNav();
      });
    }
  },
  getActiveNav: function getActiveNav() {
    var activeNav = 0;
    this.config.$qgSectionNavListItems.each(function (index) {
      if ($(this).find('a').hasClass('active')) {
        activeNav = index;
      }
    });
    return activeNav + 1;
  },
  countListItems: function countListItems() {
    return this.config.$qgSectionNavListItems.length;
  },
  view: function view(getActiveNav, countListItems) {
    return "<section id=\"step-nav\">\n               <ul>\n                 <li>\n                    <a class=\"dropdown\">Step ".concat(getActiveNav, " of ").concat(countListItems, "</a>\n                 </li>\n               </ul>\n            </section>");
  },
  createStepNav: function createStepNav() {
    var block;
    if ($(window).width() < _utils_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__["default"].bsMd) {
      if ($('#step-nav .guide-sub-nav').length === 0) {
        this.config.$heading.after(this.view(this.getActiveNav(), this.countListItems()));
        var $getSubNav = this.config.$guideSubNav.clone();
        $('#step-nav li').append($getSubNav);
      }
      $('#step-nav').hover(function () {
        block = setTimeout(function () {
          $('#step-nav .guide-sub-nav').stop(true, true).fadeIn({
            duration: '100',
            queue: false
          }).css('display', 'none').slideDown('fast');
        }, 200);
      }, function () {
        clearTimeout(block);
        $('#step-nav .guide-sub-nav').stop(true, true).fadeOut({
          duration: '100',
          queue: false
        }).slideUp('fast');
      });
    } else {
      $(document).find($('#step-nav')).remove();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stepNav);

/***/ }),

/***/ "./src/assets/_project/_blocks/legacy/forms/forms.js":
/*!***********************************************************!*\
  !*** ./src/assets/_project/_blocks/legacy/forms/forms.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/*! Form validation - v1.1.1 - 2014-04-09
 * https://github.com/bboyle/form-validation
 * Copyright (c) 2014 Ben Boyle; Licensed MIT */
(function ($) {
  'use strict';

  var validationErrorMessage = 'Please check your answers';
  var SUBMIT_TOLERANCE = 10000;
  var DEFAULT_STATUS_HTML = "<div class=\"alert alert-warning mt-4\" id=\"qg-forms__validation-errors\" role=\"alert\"><div class=\"inner\"><h2><span class=\"fa fa-exclamation-triangle\"></span>".concat(validationErrorMessage, "</h2><ol></ol></div></div>");
  // fields that validate
  var candidateForValidation = 'input, select, textarea';

  // invalidFilter
  var invalidFilter = function invalidFilter() {
    return !(this.disabled || this.validity.valid);
  };

  // follow plugin conventions for storing plugin data
  // http://docs.jquery.com/Plugins/Authoring#Data
  var pluginDataKey = 'formValidation';
  var pluginData = function pluginData(key, value) {
    var dataHash = this.data(pluginDataKey) || this.data(pluginDataKey, {}).data(pluginDataKey);
    if (typeof key !== 'undefined') {
      if (typeof value !== 'undefined') {
        dataHash[key] = value;
        return value;
      } else if (typeof dataHash[key] !== 'undefined') {
        return dataHash[key];
      }
      return null;
    }
    return dataHash;
  };

  // helper for .label, .hint and .alert
  var getLabelComponent = function getLabelComponent(component, options) {
    return this.map(function (index, domElement) {
      var $element = $(domElement);
      var labelElement = null;
      var foundElement = null;
      if (_typeof(options) === 'object' && options.level === 'group') {
        foundElement = $element.formValidation('group').find(component)[0];
      } else if ($element.is(':radio, :checkbox')) {
        foundElement = $element.closest('fieldset').find(component)[0];
      } else {
        labelElement = $element.closest('form').find('label[for="' + domElement.id + '"]');
        foundElement = labelElement.children(component)[0];
        if (!foundElement) {
          if (component === '.hint') {
            labelElement.append('<small class="hint"></small>');
            foundElement = labelElement.children(component)[0];
          }
        }
      }
      return foundElement;
    });
  };
  var changeValidityCheck = function changeValidityCheck() {
    var $this = $(this);
    var alertElement = $this.formValidation('alert');
    var alertLevel;
    var invalidContainers;

    // is this control valid?
    if (this.validity.valid) {
      // is it part of a group that contain other invalid controls?
      if ($this.formValidation('question').find('.alert').filter(alertElement).length > 0) {
        alertElement.remove();
      } else {
        // update message from first invalid field in group
        invalidContainers = $this.formValidation('group').find(candidateForValidation).filter(invalidFilter);
        if (invalidContainers.length > 0) {
          alertElement.text(invalidContainers.formValidation('getValidationMessage'));
        } else {
          // all fields valid
          alertElement.remove();
        }
      }

      // remove invalid class from ancestors that do not contain invalid fields
      $this.parentsUntil('form', '.invalid').filter(function () {
        return $(this).find(candidateForValidation).filter(invalidFilter).length === 0;
      })
      // remove .invalid class
      .removeClass('invalid')
      // remove old alerts (change handler should have already done this)
      .find($(".alert:contains(".concat(validationErrorMessage, ")"))).remove();
    } else {
      // does alert exist?
      if (alertElement.length === 0) {
        alertElement = $('<em class="alert"/>');
      }
      // show message
      alertElement.text($this.formValidation('getValidationMessage'));
      // append to form
      if ($this.formValidation('group').hasClass('atomic')) {
        alertLevel = {
          level: 'group'
        };
      }
      $this.formValidation('label', alertLevel).parent().find('.label, abbr[title="(required)"]').eq(-1).after(alertElement);

      // NOTE we don't flag the question as .invalid now
      // .invalid only happens on submit, to soften inline validation errors
    }
  };

  // checks for invalid elements
  // returns number of invalid elements
  var submitValidityCheck = function submitValidityCheck() {
    // form object
    var form = $(this).closest('form');

    // invalid fields
    var invalid = form.find(candidateForValidation).filter(function invalidFields() {
      // skip disabled
      if (this.disabled) {
        return false;
      }

      // only check radio button groups once (skip individual radio button)
      if (this.type === 'radio') {
        if (!invalidFields.cache) {
          invalidFields.cache = {};
        } else if (invalidFields.cache[this.name] === true) {
          return false;
        }
        invalidFields.cache[this.name] = true;
      }
      return this.validity && !this.validity.valid;
    });

    // alert container
    var alert = pluginData.call(form, 'summaryElement') || pluginData.call(form, 'summaryElement', $(DEFAULT_STATUS_HTML));

    // messages within alert
    var messages = alert.find('ol');

    // track groups
    var lastGroupSeen = true;
    if (invalid.length > 0) {
      // remove old messages
      messages.find('li').remove();

      // add new messages
      invalid.each(function () {
        // get field
        var $this = $(this);
        // get group (if exists)
        var group = $this.formValidation('group');
        // get label or group label
        var label = $this.formValidation('label', {
          level: group.length > 0 ? 'group' : null
        });
        var labelId;
        var item;

        // get the label id
        if (label.length > 0) {
          labelId = label[0].id || label.generateId('label-' + this.id)[0].id;
        } else {
          labelId = this.name;
        }

        // get alert item
        item = pluginData.call($this, 'summaryElement') || pluginData.call($this, 'summaryElement', $('<li><a href="#' + labelId + '"></a></li>'));
        if (group.length === 0 || group[0] !== lastGroupSeen) {
          // update last group seen
          lastGroupSeen = group[0];

          // create error message with link to label
          item.find('a').text(label.text().replace(/\?$/, '') + ': ' + $this.formValidation('getValidationMessage')).end().appendTo(messages);
        } else {
          // remove from DOM
          item.remove();
        }
      });
    }
    return invalid.length;
  };
  var submitValidationHandler = function submitValidationHandler(event) {
    // validate form
    var count = submitValidityCheck.call(this);
    var form = $(this);

    // remove invalid class from questions that do not contain invalid fields
    form.find('.invalid').filter(function () {
      return $(this).find(candidateForValidation).filter(invalidFilter).length === 0;
    })
    // remove .invalid class
    .removeClass('invalid')
    // remove old alerts (change handler should have already done this)
    .find($(".alert:contains(".concat(validationErrorMessage, ")"))).remove();

    // anything invalid?
    if (count > 0) {
      // cancel submit
      event.stopImmediatePropagation();
      event.preventDefault();

      // show the error summary
      (function (form) {
        var summary = pluginData.call(form, 'summaryElement');
        // hide any previous status blocks
        form.prev(".alert:contains(".concat(validationErrorMessage, ")")).not(summary).remove();
        // show the new summary
        form.before(summary.fadeIn());
        // focus/scroll summary element
        if (window.innerWidth < 992) {
          $(window).scrollTop(summary.offset().top - $('.qg-site-header').height());
        } else {
          $(window).scrollTop(summary.offset().top);
        }
      })(form);

      // find all the invalid fields
      form.find(candidateForValidation).filter(invalidFilter).each(function () {
        // update inline alerts
        changeValidityCheck.call(this);
      })
      // set .invalid on ancestor LI elements
      .parentsUntil('form', '.questions > li')
      // but not sections
      .not('.section, .compact').addClass('invalid');

      // trigger x-invalid
      form.trigger('x-invalid');

      // cancel submit
      return false;
    }
  };

  // bind this AFTER the validation handler
  // only invoked if validation did not prevent submit
  // This will softlock submit if form submit passes this function with in SUBMIT_TOLERANCE timerange
  var submitDoneHandler = function submitDoneHandler(event) {
    // use event.timeStamp when available and $.now() otherwise
    var timeStamp = event.timeStamp || $.now();
    var form = $(this);
    var summaryElement = pluginData.call(form, 'summaryElement');
    var lastSubmitTimeStamp;

    // remove summary element from DOM on successful submit
    if (summaryElement) {
      summaryElement.remove();
    }

    // is this submit event too soon after the last one?
    lastSubmitTimeStamp = pluginData.call(form, 'lastSubmitTimeStamp');
    if (lastSubmitTimeStamp && timeStamp - lastSubmitTimeStamp < SUBMIT_TOLERANCE) {
      // cancel the submit event
      event.stopImmediatePropagation();
      event.preventDefault();
      return false;
    } else {
      // store the timestamp
      pluginData.call(form, 'lastSubmitTimeStamp', timeStamp);
    }
  };

  // plugin methods
  var methods = {
    // $( x ).formValidation( 'alert' ) -- get
    // get alert text
    alert: function alert() {
      return this.map(function (index, domElement) {
        var $element = $(domElement);
        var group;
        if ($element.is(':radio, :checkbox') === true) {
          return $element.closest('fieldset').find('legend > .alert')[0];
        } else {
          // atomic groups
          group = $element.formValidation('group').filter('.atomic');
          if (group.length > 0) {
            return group.find('legend > .alert')[0];
          } else {
            return $('label[for="' + domElement.id + '"] > .alert')[0];
          }
        }
      });
    },
    // $( x ).formValidation( 'label' )
    // $( x ).formValidation( 'label', { level : group })
    // return .label associated with element or containing group
    label: function label(options) {
      return getLabelComponent.call(this, '.label', options);
    },
    // $( x ).formValidation( 'hint' )
    // $( x ).formValidation( 'hint', { level : group })
    // return .hint associated with element or containing group
    hint: function hint(options) {
      return getLabelComponent.call(this, '.hint', options);
    },
    // $( x ).formValidation( 'question' )
    // return question element for item
    question: function question(options) {
      // looking for group?
      if (_typeof(options) === 'object' && options.level === 'group') {
        // return the group
        return this.formValidation('group');
      }

      // not looking for group
      return this.map(function (index, domElement) {
        return $(domElement).parentsUntil('form', '.questions > li')[0];
      });
    },
    // $( x ).formValidation( 'group' )
    // return group element for item
    group: function group() {
      return this.map(function (index, domElement) {
        return $(domElement).parentsUntil('form', '.group').filter(function () {
          // ignore groups that do not contain fieldsets
          return $(this).children('fieldset').length > 0;
        })[0];
      });
    },
    // $( x ).formValidation( 'validate' )
    // binds validation handler functions
    // sets @novalidate on form to disable built-in validation
    // TODO allow this to be called multiple times without binding additional handlers!
    validate: function validate() {
      return this.each(function () {
        $(this).closest('form')
        // turn off native validation
        .attr('novalidate', true)
        // unbind and rebind handlers
        .off('submit', submitDoneHandler).off('submit', submitValidationHandler)
        // validate this form
        .on('submit', submitValidationHandler)
        // if validation did not cancel submit…
        .on('submit', submitDoneHandler)
        // bind inline validation handlers to form elements
        .find(candidateForValidation).off('change', changeValidityCheck).on('change', changeValidityCheck);
      });
    },
    // jQuery("div.alert.alert-warning").remove(); //as this function only add's to it. submitDoneHandler did the removal on success.
    // $( x ).formValidation( 'validate', event )
    // validates the form it is attached too
    // return false if invalid
    // var fakeEvent = jQuery.Event( "click" );
    // $("form#myForm").formValidation("validateNow", fakeEvent);
    // The fakeEvent captures the .stopImmediatePropagation() .preventDefault()
    // and to allow you to check with:
    //isDefaultPrevented, isImmediatePropagationStopped
    validateNow: function validateNow(event) {
      return submitValidationHandler.call(this, event);
    },
    // $( x ).formValidation( 'getValidationMessage' )
    // return String validation message, e.g. "Must be completed"
    getValidationMessage: function getValidationMessage() {
      var validityState = this[0].validity;
      if (typeof validityState === 'undefined' || validityState.valid === true) {
        return '';
      } else if (validityState.valueMissing) {
        return 'Must be completed';
      } else if (validityState.customError) {
        return this[0].validationMessage;
      } else if (validityState.typeMismatch) {
        return 'Must be an email address';
      } else if (validityState.patternMismatch) {
        return 'Must use the format shown';
      } else {
        return 'Must be a valid answer';
      }
    }
  };
  $.fn.formValidation = function (method) {
    // Method calling logic
    // http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.formValidation');
    }
  };

  // legacy API
  $.fn.forcesForms = $.fn.formValidation;
})(jQuery);
/*! Generate ID - v1.0.3 - 2014-09-18
 * https://github.com/bboyle/Generate-ID
 * Copyright (c) 2014 Ben Boyle; Licensed MIT */
(function ($) {
  'use strict';

  /**
   * Assigns a unique value to `@id` unless hasAttribute( 'id' ) is true
   *
   * @param preferredId string to use for id value
   *
   * @return jquery object (chaining supported)
   */
  $.fn.generateId = function (preferredId) {
    var i = 1;
    if (!preferredId) {
      preferredId = 'id';
    } else {
      preferredId = $.trim(preferredId.toLowerCase().replace(/[^a-z0-9_]+/g, ' ')).replace(/\s+/g, '-');
    }
    return this.each(function () {
      var id;
      if (!this.getAttribute('id')) {
        id = preferredId;
        while (document.getElementById(id)) {
          id = preferredId + String(i);
          i++;
        }
        this.setAttribute('id', id);
      }
    });
  };
})(jQuery);
/*! HTML5 constraintValidationAPI - v1.0.7 - 2015-02-19
 * https://github.com/bboyle/html5-constraint-validation-API
 * Copyright (c) 2015 Ben Boyle; Licensed MIT */
/*exported initConstraintValidationAPI*/
if (jQuery !== 'undefined') {
  (function ($) {
    'use strict';

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    // 1*( atext / "." ) "@" ldh-str 1*( "." ldh-str )
    var REXP_EMAIL = /^[A-Za-z0-9!#$%&'*+\-\/=\?\^_`\{\|\}~\.]+@[A-Za-z0-9\-]+(\.[A-Za-z0-9\-]+)*$/;

    // fields that validate
    var candidateForValidation = 'input, select, textarea';

    // for feature detection
    var input = $('<input>').get(0);

    // polyfill test
    var polyfill = _typeof(input.validity) !== 'object';

    // radio button bug (google earth internal browser)
    var radioButtonBug = !polyfill && $('<input type="radio" required checked>').get(0).validity.valueMissing === true;
    var validateBuggyRadioButtons;

    // invalid fields filter
    var isInvalid = function isInvalid() {
      return !(this.disabled || this.validity.valid);
    };

    // get all radio buttons
    var getRadioButtonsInGroup = function getRadioButtonsInGroup(radio) {
      return $(radio.form.elements[radio.name]).filter('[name="' + radio.name + '"]');
    };

    // manage validity state object
    var validityState = function validityState(typeMismatch, valueMissing, customError, message, patternMismatch) {
      if (typeof message === 'string') {
        customError = !!message;
      }
      return {
        customError: customError,
        typeMismatch: !!typeMismatch,
        patternMismatch: !!patternMismatch,
        valueMissing: !!valueMissing,
        valid: !valueMissing && !customError && !typeMismatch && !patternMismatch
      };
    };
    var validateField = function validateField(message) {
      var $this = $(this);
      var required = !!$this.attr('required');
      var radio = this.type === 'radio' && getRadioButtonsInGroup(this);
      var valueMissing;
      var invalidEmail = this.getAttribute('type') === 'email' && !!this.value && !REXP_EMAIL.test(this.value);
      var patternMismatch;
      var pattern;
      var newValidityState;

      // radio buttons are required if any single radio button is flagged as required
      if (radio && !required) {
        required = radio.filter('[required]').length > 0;
      }
      // if required, check for missing value
      if (required) {
        if (/^select$/i.test(this.nodeName)) {
          valueMissing = this.selectedIndex === 0 && this.options[0].value === '';
        } else if (radio) {
          valueMissing = radio.filter(':checked').length === 0;
        } else if (this.type === 'checkbox') {
          valueMissing = !this.checked;
        } else {
          valueMissing = !this.value;
        }
      }
      if (this.getAttribute('pattern')) {
        if (this.value.length > 0) {
          // http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#compiled-pattern-regular-expression
          pattern = new RegExp('^(?:' + this.getAttribute('pattern') + ')$');
          patternMismatch = !pattern.test(this.value);
        } else {
          patternMismatch = false;
        }
      }

      // set .validityState
      newValidityState = validityState(invalidEmail, valueMissing, this.validity.customError || false, message, patternMismatch);
      if (radio) {
        getRadioButtonsInGroup(this).each(function () {
          this.validity = newValidityState;
        });
      } else {
        this.validity = newValidityState;
      }

      // set .validationMessage
      if (this.validity.valid) {
        this.validationMessage = '';
      } else if (this.validity.customError) {
        if (typeof message === 'string') {
          this.validationMessage = message;
        }
      } else if (this.validity.valueMissing) {
        this.validationMessage = 'Please answer this question';
      } else if (this.validity.typeMismatch) {
        this.validationMessage = 'Please type an email address';
      } else if (this.validity.patternMismatch) {
        this.validationMessage = 'Please use the format shown';
      } else {
        this.validationMessage = 'Please answer the question correctly';
      }
      return this.disabled || this.validity.valid;
    };
    var changeHandler = function changeHandler(event) {
      var target = event.target;
      validateField.call(target);
      if (target.type === 'radio') {
        getRadioButtonsInGroup(target).each(function () {
          this.validity = target.validity;
          this.validationMessage = target.validationMessage;
        });
      }
    };
    var submitHandler = function submitHandler(event) {
      var form = $(this);
      var novalidate = !!form.attr('novalidate');
      var invalid = false;

      // polyfill validation?
      if (polyfill) {
        // check fields
        form.find(candidateForValidation).each(function () {
          invalid = !validateField.call(this);

          // unless @novalidate
          if (!novalidate) {
            // if invalid
            if (invalid) {
              // use triggerHandler because invalid does not bubble
              $(this).triggerHandler('invalid');
            }
          }
        });
      }

      // NOTE all the code below runs in all browsers to polyfill implementation bugs

      // required radio button check
      if (radioButtonBug) {
        validateBuggyRadioButtons(this);
      }

      // Opera 11 on OSX fires submit event even when fields are invalid
      // correct implementations will not invoke this submit handler until all fields are valid

      // unless @novalidate
      // if there are invalid fields
      if (!novalidate && form.find(candidateForValidation).filter(isInvalid).length > 0) {
        // abort submit
        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
      }
    };
    var initConstraintValidationAPI = function initConstraintValidationAPI() {
      var candidates = $(candidateForValidation);

      // INPUT validityState
      if (polyfill) {
        // set us up the API
        candidates.filter(function () {
          return _typeof(this.validity) !== 'object';
        }).each(function () {
          this.validity = validityState(false, false, false, '', false);
          this.validationMessage = '';
        });

        // check validity on change
        candidates.off('change.constraintValidationAPI').on('change.constraintValidationAPI', changeHandler);
      }

      // INPUT validitationMessage
      if (typeof input.validationMessage !== 'string') {
        // set us up the API
        candidates.filter(function () {
          return typeof this.validationMessage !== 'string';
        }).each(function () {
          this.validationMessage = '';
        });
      }

      // INPUT checkValidity
      if (typeof input.checkValidity !== 'function') {
        // set us up the API
        candidates.filter(function () {
          return typeof this.checkValidity !== 'function';
        }).each(function () {
          var domElement = this;
          this.checkValidity = function () {
            var valid = validateField.call(domElement);

            // if invalid, and unless novalidate
            if (!valid && !this.form.getAttribute('novalidate')) {
              // use triggerHandler because invalid does not bubble
              $(domElement).triggerHandler('invalid');
            }
            return valid;
          };
        });
      }

      // INPUT setCustomValidity
      if (typeof input.setCustomValidity !== 'function') {
        // set us up the API
        candidates.filter(function () {
          return typeof this.setCustomValidity !== 'function';
        }).each(function () {
          var that = this;
          this.setCustomValidity = function (message) {
            validateField.call(that, message);
          };
        });
      }

      // check for required radio button bug (google earth internal browser)
      if (radioButtonBug) {
        validateBuggyRadioButtons = function validateBuggyRadioButtons(form) {
          var seen = {};
          var radio, valueMissing;

          // check every required radio button
          $('input', form).filter(':radio').filter('[required],[aria-required="true"]').each(function () {
            if (typeof seen[this.name] === 'undefined') {
              seen[this.name] = true;
              radio = getRadioButtonsInGroup(this);
              valueMissing = radio.filter(':checked').length === 0;
              if (valueMissing) {
                // make sure @required is set to use validation API
                radio.attr('required', 'required');
              } else {
                // using @aria-required=true so we can track this control
                // removing @required here to bypass validation bug
                radio.attr('aria-required', true).removeAttr('required');
              }
            }
          });
        };

        // initial validity
        $('form').each(validateBuggyRadioButtons);

        // watch changes
        if (!polyfill) {
          candidates.filter(':radio').off('change.constraintValidationAPI').on('change.constraintValidationAPI', function () {
            validateBuggyRadioButtons(this.form);
          });
        }
      }

      // check validity on submit
      // this should be bound before all other submit handlers bound to the same form
      // otherwise they will execute before this handler can cancel submit (oninvalid)
      $('form').off('submit.constraintValidationAPI').on('submit.constraintValidationAPI', submitHandler);
    };

    // run immediately and ondocumentready
    initConstraintValidationAPI();
    $(initConstraintValidationAPI);

    // expose init function
    window.initConstraintValidationAPI = initConstraintValidationAPI;
  })(jQuery);
}
/*
 * jQuery Simply Countable plugin
 * Provides a character counter for any text input or textarea
 *
 * @version  0.4.2
 * @homepage http://github.com/aaronrussell/jquery-simply-countable/
 * @author   Aaron Russell (http://www.aaronrussell.co.uk)
 *
 * Copyright (c) 2009-2010 Aaron Russell (aaron@gc4.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

(function ($) {
  $.fn.simplyCountable = function (options) {
    options = $.extend({
      counter: '#counter',
      countType: 'characters',
      maxCount: 140,
      strictMax: false,
      countDirection: 'down',
      safeClass: 'safe',
      overClass: 'over',
      thousandSeparator: ',',
      onOverCount: function onOverCount() {},
      onSafeCount: function onSafeCount() {},
      onMaxCount: function onMaxCount() {}
    }, options);
    var navKeys = [33, 34, 35, 36, 37, 38, 39, 40];
    return $(this).each(function () {
      var countable = $(this);
      var counter = $(options.counter);
      if (!counter.length) {
        return false;
      }
      var countCheck = function countCheck() {
        var count;
        var revCount;
        var reverseCount = function reverseCount(ct) {
          return ct - ct * 2 + options.maxCount;
        };
        var countInt = function countInt() {
          return options.countDirection === 'up' ? revCount : count;
        };
        var numberFormat = function numberFormat(ct) {
          var prefix = '';
          if (options.thousandSeparator) {
            ct = ct.toString();
            // Handle large negative numbers
            if (ct.match(/^-/)) {
              ct = ct.substr(1);
              prefix = '-';
            }
            for (var i = ct.length - 3; i > 0; i -= 3) {
              ct = ct.substr(0, i) + options.thousandSeparator + ct.substr(i);
            }
          }
          return prefix + ct;
        };
        var changeCountableValue = function changeCountableValue(val) {
          countable.val(val).trigger('change');
        };

        /* Calculates count for either words or characters */
        if (options.countType === 'words') {
          count = options.maxCount - $.trim(countable.val()).split(/\s+/).length;
          if (countable.val() === '') {
            count += 1;
          }
        } else {
          count = options.maxCount - countable.val().length;
        }
        revCount = reverseCount(count);

        /* If strictMax set restrict further characters */
        if (options.strictMax && count <= 0) {
          var content = countable.val();
          if (count < 0) {
            options.onMaxCount(countInt(), countable, counter);
          }
          if (options.countType === 'words') {
            var allowedText = content.match(new RegExp('\\s?(\\S+\\s+){' + options.maxCount + '}'));
            if (allowedText) {
              changeCountableValue(allowedText[0]);
            }
          } else {
            changeCountableValue(content.substring(0, options.maxCount));
          }
          count = 0, revCount = options.maxCount;
        }
        counter.text(numberFormat(countInt()));

        /* Set CSS class rules and API callbacks */
        if (!counter.hasClass(options.safeClass) && !counter.hasClass(options.overClass)) {
          if (count < 0) {
            counter.addClass(options.overClass);
          } else {
            counter.addClass(options.safeClass);
          }
        } else if (count < 0 && counter.hasClass(options.safeClass)) {
          counter.removeClass(options.safeClass).addClass(options.overClass);
          options.onOverCount(countInt(), countable, counter);
        } else if (count >= 0 && counter.hasClass(options.overClass)) {
          counter.removeClass(options.overClass).addClass(options.safeClass);
          options.onSafeCount(countInt(), countable, counter);
        }
      };
      countCheck();
      countable.on('keyup blur paste', function (e) {
        switch (e.type) {
          case 'keyup':
            // Skip navigational key presses
            if ($.inArray(e.which, navKeys) < 0) {
              countCheck();
            }
            break;
          case 'paste':
            // Wait a few miliseconds if a paste event
            setTimeout(countCheck, e.type === 'paste' ? 5 : 0);
            break;
          default:
            countCheck();
            break;
        }
      });
    });
  };
})(jQuery); /*! relevance - v2.1.0 - 2015-03-04
            * https://github.com/bboyle/relevance
            * Copyright (c) 2015 Ben Boyle; Licensed MIT */
if (jQuery !== 'undefined') {
  (function ($) {
    'use strict';

    var relevantEvent = 'relevant';
    var irrelevantEvent = 'irrelevant';
    var elementsToDisable = 'button, input, select, textarea';
    var polyfillHidden = function () {
      var hidden = $('<div hidden></div>');
      var hiddenSupported = hidden.appendTo('body').is(':hidden');
      hidden.remove();
      return !hiddenSupported;
    }();
    var formElementsByName = function formElementsByName(form, name) {
      // filter out the @id matching of HTMLFormElement.elements[]
      return $(form.elements[name]).filter('[name="' + name + '"]');
    };
    var filterRelevant = function filterRelevant() {
      return $(this).closest('[hidden]').length === 0;
    };
    var filterIrrelevant = function filterIrrelevant() {
      return $(this).closest('[hidden]').length > 0;
    };
    var valueMap = function valueMap(element) {
      return element.value;
    };
    var valueInArray = function valueInArray(possibleValues, actualValues) {
      var i;
      if (_typeof(possibleValues) !== 'object') {
        possibleValues = [possibleValues];
      }
      for (i = 0; i < actualValues.length; i++) {
        if ($.inArray(actualValues[i], possibleValues) !== -1) {
          return true;
        }
      }
      return false;
    };

    // when changing a control that alters relevance of other elements…
    var recalculateRelevance = function recalculateRelevance() {
      // assume dependency map exists
      var map = $(this.form).data('relevance').dependencyMap[this.name];
      var values = $.map(formElementsByName(this.form, this.name).filter('select,:checked').filter(':visible'), valueMap);
      $.each(map, function (index, config) {
        config.items.relevance('relevant', valueInArray(config.values, values) !== config.negate);
      });
    };

    // when an element changes relevance, check descendent controls that alter relevance in turn…
    var recalculateDependents = function recalculateDependents(isRelevant) {
      var form, dependencyMap, targets;

      // any change to relevant toggles?
      form = this.closest('form');
      if (form.length) {
        dependencyMap = form.data('relevance');
        if (_typeof(dependencyMap) === 'object') {
          dependencyMap = dependencyMap.dependencyMap;
          if (_typeof(dependencyMap) === 'object') {
            // get descendent-or-self select, radio and checkbox
            targets = this.add(this.find('select,input')).filter('select,:radio,:checkbox');
            // get unique @name for select, radio and checkbox
            targets = $.unique($.map(targets, function (elementOfArray) {
              return elementOfArray.name;
            }));
            $.each(targets, function (index, name) {
              var map = dependencyMap[name];
              var values;
              if (_typeof(map) === 'object') {
                $.each(map, function (index, config) {
                  if (isRelevant === false) {
                    config.items.relevance('relevant', false);
                  } else {
                    values = $.map(formElementsByName(form[0], name).filter('select,:checked').filter(':visible'), valueMap);
                    config.items.relevance('relevant', valueInArray(config.values, values) !== config.negate);
                  }
                });
              }
            });
          }
        }
      }
    };
    var methods = {
      // $( x ).relevance( 'relevant', true )
      // if the element is hidden, fire a 'relevant' event
      // $( x ).relevance( 'relevant', false )
      // if the element is visible, fire an "irrelevant" event
      relevant: function relevant(makeRelevant) {
        var targets;
        if (makeRelevant) {
          targets = this.filter(filterIrrelevant).trigger(relevantEvent);
        } else {
          targets = this.filter(filterRelevant).trigger(irrelevantEvent);
        }
        if (targets.length) {
          recalculateDependents.call(targets, makeRelevant);
        }
        return this;
      },
      // $( x ).relevance( 'show' )
      // shows the element (does not check if element is already visible)
      // triggers 'relevant-done' after showing is complete
      show: function show() {
        // enable elements before they are shown
        this.add(this.find(elementsToDisable))
        // but not any controls that will remain irrelevant
        .not(this.find('[hidden]').find(elementsToDisable)).each(function () {
          this.removeAttribute('disabled');
        });

        // stop animation, remove @hidden and @aria-hidden, start showing
        if (polyfillHidden) {
          this.stop(true, true).slideDown();
        }
        return this.removeAttr('hidden').removeAttr('aria-hidden');
      },
      // $( x ).relevance( 'hide' )
      // hides the element (does not check if element is already hidden)
      hide: function hide() {
        this.attr({
          hidden: 'hidden',
          'aria-hidden': 'true'
        });
        if (polyfillHidden) {
          this.stop(true, true).hide(0, function () {
            var $this = $(this);
            // disable elements (including self if appropriate)
            $this.filter(elementsToDisable).add($this.find(elementsToDisable)).each(function () {
              this.setAttribute('disabled', 'disabled');
            });
          });
        } else {
          this.filter(elementsToDisable).add(this.find(elementsToDisable)).each(function () {
            this.setAttribute('disabled', 'disabled');
          });
        }
        return this;
      },
      // $( x ).relevance( 'relevantWhen', { name: radio/checkbox/select, value: requiredValue, negate: false | true })
      // sets up dependent relevance
      // example: $( '#red' ).relevance( 'relevantWhen', { name: 'rgb', value: 'red' })
      // example: $( '#red' ).relevance( 'relevantWhen', { id: 'rgb-red', value: 'red' })
      // #red will be shown/hidden when '@name=rgb' value changes.
      relevantWhen: function relevantWhen(config) {
        var form, data, name, values;
        values = config.values || [config.value];
        if (config.name) {
          name = config.name;
        } else if (config.id) {
          name = document.getElementById(config.id).name;
        } else if (config.container) {
          name = $(config.container).find('select,:radio,:checkbox').attr('name');
        }
        config.negate = config.negate === true;

        // find the form that has this control
        form = this.closest('form');
        // get dependency map (create it if needed)
        data = form.data('relevance');
        if (_typeof(data) !== 'object') {
          data = {};
          form.data('relevance', data);
        }
        if (_typeof(data.dependencyMap) !== 'object') {
          data.dependencyMap = {};
        }
        if (_typeof(data.dependencyMap[name]) !== 'object') {
          data.dependencyMap[name] = [];
          // setup event handlers for name
          formElementsByName(form[0], name).filter(':radio,:checkbox').on('click', recalculateRelevance).end().filter('select').on('change', recalculateRelevance);
        }
        // add or update relevance rule
        data.dependencyMap[name].push({
          items: this,
          values: values,
          negate: config.negate
        });

        // initial relevance
        this.relevance('relevant', valueInArray(values, $.map(formElementsByName(form[0], name).filter('select,:checked').filter(':visible'), valueMap)) !== config.negate);
        return this;
      },
      // $( x ).relevance( 'instructions', options )
      // sets up relevance handling based on text instructions
      // options ::= { instructions: '.relevance', questions: '.questions > li' }
      instructions: function instructions(options) {
        options = $.extend({
          instructionSelector: '.relevance',
          questionSelector: '.questions > li'
        }, options);
        this.find(options.instructionSelector).each(function () {
          var $this = $(this);
          var value = $this.text();
          var question = $this.closest(options.questionSelector);
          var toggle = question.prevAll(options.questionSelector);
          var i;
          var answers;
          var nestedToggles;
          var match = false;
          var negate = false;

          // pattern: (If different to <PREVIOUS QUESTION>)
          if (/If different to/.test(value)) {
            // assume previous 'li' is the toggle
            match = true;
            toggle = toggle.eq(0);
            value = toggle.find(':checkbox').val();
            negate = true;
          } else {
            value = value.replace(/^.*chose\s+\S([^'"’]+)\S\s+above.*$/, '$1');
            // which of the previous questions is the toggle?
            i = 0;
            while (i < toggle.length) {
              // does this item have the answer we need?
              answers = $.map(toggle.eq(i).find('option,:radio,:checkbox'), valueMap);
              if (valueInArray(value, answers)) {
                nestedToggles = toggle.eq(i).find(options.questionSelector);
                if (nestedToggles.length) {
                  toggle = $(nestedToggles.get().reverse());
                  i = 0;
                } else {
                  match = true;
                  toggle = toggle.eq(i); // toggle.length becomes 1, loop will exit
                  i = 1; // exit loop
                }
              } else {
                i++;
              }
            }
          }
          if (match) {
            toggle = toggle.add(toggle.find('select,input')).filter('select,:radio,:checkbox');
            question.relevance('relevantWhen', {
              name: toggle.attr('name'),
              value: value,
              negate: negate
            });
          }
        });
        return this;
      }
    };
    // fallback (default) event handling
    $(document).on('relevant irrelevant', function (event) {
      var target = $(event.target);
      if (event.type === 'relevant') {
        target.relevance('show');
      } else {
        target.relevance('hide');
      }
    });
    $.fn.relevance = function (method) {
      // Method calling logic
      // http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (_typeof(method) === 'object' || !method) {
        // return methods.init.apply( this, arguments );
        return this;
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.relevance');
      }
    };
  })(jQuery);
}
(function ($) {
  'use strict';

  // window.console.log( 'file-size-validation.js' );
  var displayFileSize;

  // bail out if no file API support
  if (_typeof($('<input type="file">')[0].files) !== 'object') {
    // duplicate fsize instruction before submit button
    $('.max-fsize').each(function () {
      var fsize = $(this);
      var form;
      form = fsize.closest('.preamble').nextAll('form').eq(0);
      form.find('.actions').before('<p>' + fsize.parent().html() + '</p>');
    });
    return;
  }

  // display file size
  displayFileSize = function displayFileSize(input) {
    input.nextAll('.fsize').remove();
    if (input[0].files.length > 0) {
      var filesize = input[0].files[0].size / 1024;
      if (filesize >= 1024) {
        filesize = filesize / 1024;
        input.after('<span class="fsize">File size: ' + Math.round(filesize * 10) / 10 + 'MB' + '</span>');
      } else {
        input.after('<span class="fsize">File size: ' + Math.round(filesize * 10) / 10 + 'KB' + '</span>');
      }
    }
  };

  // forms with max file size
  $('.max-fsize').each(function () {
    var fsize = $(this);
    var form;
    var maxFileSize;

    // read fsize, assume MB
    maxFileSize = parseInt(fsize.text().replace(/\D+/g, ''), 10) * 1024 * 1024;
    // window.console.log( 'found max fsize', maxFileSize );

    // get form (closest form after the preamble)
    form = fsize.closest('.preamble').nextAll('form').eq(0);
    form.find(':file').on('change', function () {
      var input = $(this);
      displayFileSize(input);

      // recalculate file sizes
      var total = 0;
      var valid;
      $(':file', this.form).each(function (index, element) {
        var size = element.files.length ? element.files[0].size : 0;
        total += size; // total = total + size;
      });

      // is everything valid or invalid?
      valid = total <= maxFileSize;

      // window.console.info( 'file size validation:', total, '<', maxFileSize, total < maxFileSize );

      $(':file', this.form)
      // update validity for :file inputs with values
      .filter(function () {
        return !!this.value;
      }).each(function (index, element) {
        element.setCustomValidity(valid ? '' : 'Attachments are too large');
      })
      // blank :file inputs should not have a custom error
      .filter(function () {
        return !this.value;
      }).each(function (index, element) {
        element.setCustomValidity('');
      });
    });
  });
})(jQuery);
(function ($) {
  'use strict';

  var xorConstraintSubmitHandler = function xorConstraintSubmitHandler(event) {
    // has one of the required fields been answered?
    var xorFields = event.data[0];
    var validationMessage = event.data[1];
    var xorConstraintMet = xorFields.filter(function () {
      return this.value.length > 1;
    }).length > 0;
    xorFields.each(function () {
      this.setCustomValidity(xorConstraintMet ? '' : validationMessage);
    });
  };
  var xorConstraintChangeHandler = function xorConstraintChangeHandler(event, validationUiRefreshOnly) {
    if (validationUiRefreshOnly === true) {
      // pass through to other change handlers
      return;
    }
    var xorFields = event.data[0];

    // constraint validity check
    xorConstraintSubmitHandler(event);

    // trigger validation UI  on other fields?
    if (event.type === 'change') {
      xorFields.not(event.target).triggerHandler('change', true);
    }
  };

  // plugin
  $.fn.initXorConstraint = function (validationMessage) {
    // custom validation for XOR options
    this.closest('form').on('submit', [this, validationMessage], xorConstraintSubmitHandler);
    this.on('change', [this, validationMessage], xorConstraintChangeHandler);
  };
})(jQuery);
(function ($) {
  'use strict';

  /* detect required field markers for IE6 */
  $('abbr[title*="required"]').addClass('required');

  // show/hide entire 'question' when fields become irrelevant
  $('.questions > li').not('.section').on('relevant', function (event) {
    $(this).relevance('show');
    event.stopImmediatePropagation();
  }).on('irrelevant', function (event) {
    $(this).relevance('hide');
    event.stopImmediatePropagation();
  });

  // click the table cell to click on a matrix option
  $('.matrix').delegate('td', 'click', function (evt) {
    $(evt.target).find('input').trigger('click').trigger('change');
  });
})(jQuery);

/**
 * This file initialises forms
 */
(function ($) {
  /* start closure */
  'use strict';

  var initValidation = function initValidation() {
    window.initConstraintValidationAPI();
    $('form').formValidation('validate');
  };
  // now: hookup form validation
  initValidation();
  // document ready: hookup form validation
  $(initValidation);
  // instruction based relevance
  if ($('.relevance', 'form').length > 0) {
    $('#qg-primary-content form').relevance('instructions');
  }
})(jQuery); /* end closure */
(function ($) {
  'use strict';

  // extend jquery to 'toggle required'
  $.fn.toggleRequired = function (required) {
    return this.each(function () {
      var controls = $(this.form.elements[this.name]);
      var question = $(this).closest('.questions > li');
      if (required) {
        if (question.find('abbr[title="(required)"]').length === 0) {
          question.find('.label').after(
          // create ABBR shiv for IE6
          $(document.createElement('abbr')).attr('title', '(required)').text('*').addClass('required'));
        }
        controls.attr('required', 'required');
      } else {
        controls.removeAttr('required');
        question.find('abbr[title="(required)"]').remove();
      }
    });
  };
})(jQuery);
/*globals qg*/
// globals
var qg = {
  oldIE: false
};
qg.date = function () {
  'use strict';

  var datePackage = {};

  // Public holiday dates for 2010-2014 (viewed 2012-09-28)
  // http://www.justice.qld.gov.au/fair-and-safe-work/industrial-relations/public-holidays/dates
  var qldHolidays = {
    // 2010
    '2010-01-01': 'New Year’s Day',
    '2010-01-26': 'Australia Day',
    '2010-04-02': 'Good Friday',
    '2010-04-03': 'Easter Saturday',
    '2010-04-05': 'Easter Monday',
    '2010-04-26': 'Anzac Day',
    '2010-05-03': 'Labour Day',
    '2010-06-14': 'Queen’s Birthday',
    '2010-12-25': 'Christmas Day',
    '2010-12-27': 'Boxing Day',
    '2010-12-28': 'Christmas Day holiday',
    // 2011
    '2011-01-01': 'New Year’s Day',
    '2011-01-03': 'New Year’s Day holiday',
    '2011-02-26': 'Australia Day',
    '2011-04-22': 'Good Friday',
    '2011-04-23': 'Easter Saturday',
    '2011-04-25': 'Anzac Day',
    '2011-04-26': 'Easter Monday',
    '2011-05-02': 'Labour Day',
    '2011-06-13': 'Queen’s Birthday',
    '2011-12-25': 'Christmas Day',
    '2011-12-26': 'Boxing Day',
    '2011-12-27': 'Christmas Day holiday',
    // 2012
    '2012-01-01': 'New Year’s Day',
    '2012-01-02': 'New Year’s Day holiday',
    '2012-02-26': 'Australia Day',
    '2012-04-06': 'Good Friday',
    '2012-04-07': 'Easter Saturday',
    '2012-04-09': 'Easter Monday',
    '2012-04-25': 'Anzac Day',
    '2012-05-07': 'Labour Day',
    '2012-06-11': 'Queen’s Diamond Jubilee',
    '2012-10-01': 'Queen’s Birthday',
    '2012-12-25': 'Christmas Day',
    '2012-12-26': 'Boxing Day',
    // 2013
    '2013-01-01': 'New Year’s Day',
    '2013-01-28': 'Australia Day holiday',
    '2013-03-29': 'Good Friday',
    '2013-03-30': 'Easter Saturday',
    '2013-04-01': 'Easter Monday',
    '2013-04-25': 'Anzac Day',
    '2013-06-10': 'Queen’s Birthday',
    '2013-10-07': 'Labour Day',
    '2013-12-25': 'Christmas Day',
    '2013-12-26': 'Boxing Day',
    // 2014
    '2014-01-01': 'New Year’s Day',
    '2014-01-27': 'Australia Day holiday',
    '2014-04-18': 'Good Friday',
    '2014-04-19': 'Easter Saturday',
    '2014-04-21': 'Easter Monday',
    '2014-04-25': 'Anzac Day',
    '2014-06-09': 'Queen’s Birthday',
    '2014-10-06': 'Labour Day',
    '2014-12-25': 'Christmas Day',
    '2014-12-26': 'Boxing Day',
    // 2015
    '2015-01-01': 'New Year’s Day',
    '2015-01-26': 'Australia Day holiday',
    '2015-04-03': 'Good Friday',
    '2015-04-04': 'Easter Saturday',
    '2015-04-06': 'Easter Monday',
    '2015-04-25': 'Anzac Day',
    '2015-06-08': 'Queen’s Birthday',
    '2015-10-05': 'Labour Day',
    '2015-12-25': 'Christmas Day',
    '2015-12-26': 'Boxing Day',
    '2015-12-28': 'Boxing Day holiday',
    // 2016
    '2016-01-01': 'New Year’s Day',
    '2016-01-26': 'Australia Day holiday',
    '2016-03-25': 'Good Friday',
    '2016-03-26': 'Easter Saturday',
    '2016-03-28': 'Easter Monday',
    '2016-04-25': 'Anzac Day',
    '2016-06-13': 'Queen’s Birthday',
    '2016-10-03': 'Labour Day',
    '2016-12-25': 'Christmas Day',
    '2016-12-27': 'Christmas Day holiday',
    '2016-12-26': 'Boxing Day',
    // 2017
    '2017-01-01': 'New Year’s Day',
    '2017-01-02': 'New Year’s Day holiday',
    '2017-01-26': 'Australia Day holiday',
    '2017-04-14': 'Good Friday',
    '2017-04-15': 'Easter Saturday',
    '2017-04-17': 'Easter Monday',
    '2017-04-25': 'Anzac Day',
    '2017-06-12': 'Queen’s Birthday',
    '2017-10-02': 'Labour Day',
    '2017-12-25': 'Christmas Day',
    '2017-12-26': 'Boxing Day',
    // 2018
    '2018-01-01': 'New Year’s Day',
    '2018-01-26': 'Australia Day holiday',
    '2018-03-30': 'Good Friday',
    '2018-03-31': 'Easter Saturday',
    '2018-04-02': 'Easter Monday',
    '2018-04-25': 'Anzac Day',
    '2018-05-07': 'Labour Day',
    '2018-10-01': 'Queen’s Birthday',
    '2018-12-25': 'Christmas Day',
    '2018-12-26': 'Boxing Day'
  };

  // is a public holiday
  datePackage.isPublicHoliday = function (date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = String(date.getFullYear());
    var dateString = y + (m < 10 ? '-0' : '-') + m + (d < 10 ? '-0' : '-') + d;

    // return true, date is a public holiday
    // TODO, if not a state-wide public holiday and given a latlong, check if it is a show holiday
    // return false, date is not a public holiday
    // TODO
    // return undefined, it is not known if the date is a public holiday (beyond 2 years in the future?)

    return !!qldHolidays[dateString];
  };
  return datePackage;
}();
(function ($) {
  'use strict';

  // find any textareas with a word count
  $('.hint').filter(function () {
    return /Maximum:\s+\d+\s+words/.test($(this).text());
  }).each(function () {
    var hint = $(this);
    var max = parseInt(hint.text().replace(/Maximum:\s+(\d+)\s+words/, '$1'), 10);
    var textField = hint.closest('label').nextAll('textarea');
    var counter;

    // add counter
    counter = $('<span></span>').generateId('word-count');
    //eg. Maximum: 50 words (50 remaining)
    hint.append(' (', counter, ' remaining)');
    textField.simplyCountable({
      counter: '#' + counter[0].id,
      countType: 'words',
      countDirection: 'down',
      maxCount: max,
      onOverCount: function onOverCount() {
        textField[0].setCustomValidity('Too many words');
      },
      onSafeCount: function onSafeCount() {
        textField[0].setCustomValidity('');
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/breakpoints.js":
/*!**********************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/breakpoints.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var breakpoints = function () {
  return {
    bsXs: 480,
    bsSm: 768,
    bsMd: 992,
    bsLg: 1200
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breakpoints);

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/parent-width.js":
/*!***********************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/parent-width.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
/* ========================================================================
* Set element to parent width
* [TODO: Write about what this is for, to make it easier for future
* developers to know what to put into it, and what not to.]
* ======================================================================== */



// FIXME: Reports linting error as it's defined as a module, but never used
//If this is not in use then we can can delete?
var parentWidth = function ($) {
  var $target = $('*[data-parent-width=true], *[data-parent-width=1]');
  $target.outerWidth($target.parent().width());
}(jQuery);
module.exports = parentWidth;

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-ajax-call.js":
/*!***********************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-ajax-call.js ***!
  \***********************************************************/
/***/ (() => {

/*globals qg*/
/*
* Utility to handle ajax calls
* Usage: swe.ajaxCall('https://www.google.com/recaptcha/api.js', 'script', onloadRecaptcha, 'Recaptcha unavailable');
* */
(function ($, swe) {
  swe.ajaxCall = function (url, dataType, callback, errorMsg) {
    $.ajax({
      url: url,
      dataType: dataType,
      crossDomain: true,
      success: callback,
      error: function error() {
        console.log(errorMsg);
      }
    });
  };
})(jQuery, qg.swe);

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-datatables.js":
/*!************************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-datatables.js ***!
  \************************************************************/
/***/ (() => {

var addQGButtonClass = function addQGButtonClass() {
  $('.dataTables_wrapper a.paginate_button').addClass('qg-btn');
};
$('.dataTable').each(function () {
  if (!$.fn.DataTable.isDataTable(this)) {
    $(this).DataTable({
      drawCallback: addQGButtonClass
    });
  }
});

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-datepicker.js":
/*!************************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-datepicker.js ***!
  \************************************************************/
/***/ (() => {

// this function checks date input field is supported in a browser or not
function browserSupportsDateInput() {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}
// if the date input field is not supported it loads a polyfill
if (!browserSupportsDateInput() && $('input[type=\'date\']').length > 0) {
  $.getScript('/assets/v4/latest/lib/ext/nodep-date-input-polyfill/nodep-date-input-polyfill.dist.js', function () {
    console.log('date polyfill loaded');
  });
}
var handleDatePicker = function handleDatePicker() {
  if ($("input[class*='qg-date-input']").length > 0) {
    // hasDatepicker class has to be removed from the input when the page is loaded. jquery-ui.min.js will add the
    // calendar widget when the class does not exist on the input. Then hasDatepicker will be dynamically added to the input.
    // This needs to be done when the page is loaded
    $('.qg-date-input').removeClass('hasDatepicker');
    $('.qg-date-input').datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: true,
      changeMonth: true
    });
    $('.qg-date-input').attr('placeholder', 'dd/mm/yyyy');
  }
};
// 'qg-date-input' adds a jquery ui datepicker
if ($("input[class*='qg-date-input']").length > 0) {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', function () {
    $('head').append($("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css' type='text/css' crossorigin='anonymous' media='screen' />"));
  });
}
handleDatePicker();
$(window).on('load', handleDatePicker);

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-env.js":
/*!*****************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-env.js ***!
  \*****************************************************/
/***/ ((module) => {

var env = function () {
  // All the environment related SWE3 code
  window.qg = window.qg || {};
  window.qg.swe = window.qg.swe || {};
}();
module.exports = env;

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-load-google-api.js":
/*!*****************************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-load-google-api.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgLoadGoogleApi: () => (/* binding */ QgLoadGoogleApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/qg-google-keys */ "./src/assets/_project/_blocks/data/qg-google-keys.json");


/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 This class determine the franchise (if available) and the environment using the hostname and then loads Google Maps API using that key
  - Key is loaded using the qg-google-keys.json file
 */

var QgLoadGoogleApi = /*#__PURE__*/function () {
  function QgLoadGoogleApi() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QgLoadGoogleApi);
    this.firstFolderPath = location.pathname.split('/')[1];
    this._staticMaps();
  }

  /**
   * onbtnClick -> clicking quick exit button a page
   * @return {undefined}
   **/
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QgLoadGoogleApi, [{
    key: "_isProd",
    value: function _isProd() {
      return window.location.hostname.search(/dev|test|localhost|github|\buat\b/) === -1;
    }

    /**
     * onbtnClick -> clicking quick exit button a page
     * @return {undefined}
     **/
  }, {
    key: "_checkEnvAndSetKey",
    value: function _checkEnvAndSetKey() {
      var googleApiKey;
      var self = this;
      // if no franchise name identified then use the default key according to the environment
      if (window.location.hostname.search(/\bgithub\b/) !== -1) {
        googleApiKey = _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_2__.defGoogle.docs;
      } else if (!this._isProd()) {
        googleApiKey = _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_2__.defGoogle.test;
      } else {
        googleApiKey = _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_2__.defGoogle.prod;
      }
      // check if a particular franchise key is required by checking the folder path in the URL
      if (self.firstFolderPath) {
        _data_qg_google_keys__WEBPACK_IMPORTED_MODULE_2__.franchises.forEach(function (e) {
          if (self.firstFolderPath === e.name) {
            googleApiKey = e.apiKey;
          }
        });
      }
      return googleApiKey;
    }

    /**
     * TODO trasnfer to Matrix plateform as this is only valid with Matrix Map component
     * _staticMaps -> static maps on description pages
     * @return {undefined}
     **/
  }, {
    key: "_staticMaps",
    value: function _staticMaps() {
      var googleApiKey = this._checkEnvAndSetKey();
      var $mapImg = $('.qg-static-map');
      function generateStaticMapImg(ele) {
        var lat = ele.attr('data-lat') || -27.4673;
        var lon = ele.attr('data-long') || 153.0233;
        var zoom = ele.attr('data-zoom') || 17;
        var height = ele.attr('data-height') || 189;
        return 'https://maps.googleapis.com/maps/api/staticmap?size=373x' + height + '&maptype=roadmap&markers=' + lat + '%2C' + lon + '&key=' + googleApiKey + '&sensor=false&zoom=' + zoom;
      }
      // append static image on the maps description page
      if ($mapImg.length > 0) {
        var htmlInsert = $('<div>');
        $mapImg.each(function () {
          var $this = $(this);
          $this.find('img').attr('src', generateStaticMapImg($this.find('img')));
          htmlInsert.append($this);
        });
        $('aside').prepend(htmlInsert);
        $('a.qg-static-map').wrap("<div class='qg-aside st-map-static'>");
        $('.st-map-static').eq(0).prepend("<h2><span class='fa fa-compass' aria-hidden='true'></span>Maps</h2>");
      }
    }

    /**
     * onbtnClick -> clicking quick exit button a page
     * @param {function} callback - execute after successful loading of a key
     * @return {undefined}
     **/
  }, {
    key: "_loadGoogleApi",
    value: function _loadGoogleApi(callback) {
      var googleApiKey = this._checkEnvAndSetKey();
      var appendScript = function appendScript(url) {
        $('head').append('<script type="text/javascript" src="' + url + '"></script>');
      };
      var next = function next() {
        if (typeof callback === 'function') {
          callback();
        } else {
          appendScript(callback);
        }
      };
      if ($('#googleapi').length <= 0) {
        var s = document.createElement('script');
        var u = "https://maps.googleapis.com/maps/api/js?key=".concat(googleApiKey, "&region=AU&libraries=places");
        s.type = 'text/javascript';
        s.id = 'googleapi';
        s.src = u;
        document.getElementsByTagName('head')[0].appendChild(s);
        s.onreadystatechange = function () {
          //trigger for IE
          if (this.readyState === 'complete') {
            next();
          }
        };
        s.onload = function () {
          next();
        };
      } else {
        //if script is already created but either loading or loaded
        if (document.readyState === 'loading') {
          document.onreadystatechange = function () {
            if (this.readyState === 'complete') {
              next();
            }
          };
        } else {
          next();
        }
      }
    }
  }]);
  return QgLoadGoogleApi;
}();

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-misc.js":
/*!******************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-misc.js ***!
  \******************************************************/
/***/ (() => {

/*globals qg*/

(function ($, swe) {
  /**
   * Gets parameter value
   * @param {string} name - parameter name
   * @param {string} url - url where searching needs to be performed
   * @returns {*} - returns the parameter value
   */
  // TODO - feature addition to sanitize data
  swe.getParameterByName = function (name, url) {
    if (name == null) return false;
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results || !results[2]) return false;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  // Maps view full screen customization code (TODO move this to Matrix assets as this is related with Matrix Map component)
  $('.map-modal').butterfly({
    contentDefaultWidth: '90%',
    contentDefaultHeight: '90%',
    reuseFragment: true
  });
  // this function equals the height of the cards in a group, if it finds a class '.qg-cards__equal-height'.
  function setHeight() {
    var equalHeightCards = document.querySelectorAll('.qg-cards__equal-height');
    if (equalHeightCards.length > 0) {
      equalHeightCards.forEach(function (cardBlock) {
        var maxHeight = 0;
        var cards = cardBlock.querySelectorAll('.qg-card .details');
        cards.forEach(function (card) {
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        cards.forEach(function (card) {
          card.style.height = "".concat(maxHeight, "px");
        });
      });
    }
  }
  setHeight();
  $(window).on('resize', function () {
    var $windowSize = $(window).width();
    if ($windowSize < 767) {
      $('.cards__equal-height').find('.details').removeAttr('style');
    } else {
      setHeight();
    }
  });
  // check if a view is loaded in an iframe , this is to detect Squiz Matrix preview mode
  // and insert a class so that additional styles can be applied
  var frameAttr = window.frameElement && window.frameElement.getAttribute('Name');
  if (frameAttr && frameAttr === 'ees_modePreviewFrame') {
    $('.container-fluid').addClass('qg-edit-plus-styles');
  }

  // temporary warning for fa icon that using `i` instead of `span` element
  var deprecationWarnings = [{
    selector: '.qg-callout__box .qg-callout__icon i.fa',
    label: 'Callout box'
  }, {
    selector: '.alert h2 i.fa',
    label: 'Alert'
  }];
  // setTimeout is just a temporary solution for display the warning message in SPA as elements are created on the fly
  setTimeout(function () {
    deprecationWarnings.forEach(function (_ref) {
      var selector = _ref.selector,
        label = _ref.label;
      if ($(selector).length) {
        console.warn("Please change the font awesome element in ".concat(label, " from i to span, we'll be removing the css in this element before 22nd june 2022. Please refer to the https://github.com/qld-gov-au/qg-web-template/pull/391 for more details."));
      }
    });
  }, 5000);
})(jQuery, qg.swe);

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-quickexit.js":
/*!***********************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-quickexit.js ***!
  \***********************************************************/
/***/ (() => {

var handleQuickExit = function handleQuickExit(e) {
  var $el = $('.qg-quick-exit');
  if (document.documentElement.clientWidth > 992) {
    if ($(this).scrollTop() > 200) {
      $el.css({
        position: 'fixed',
        top: '0px'
      });
    }
    if ($(this).scrollTop() < 200) {
      $el.css({
        position: 'sticky',
        top: '0px'
      });
    }
  } else {
    $el.css({
      position: 'fixed',
      top: 'auto'
    });
  }
};
$(window).on('scroll', handleQuickExit);
window.addEventListener('resize', handleQuickExit, true);

/***/ }),

/***/ "./src/assets/_project/_blocks/utils/qg-util.js":
/*!******************************************************!*\
  !*** ./src/assets/_project/_blocks/utils/qg-util.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qg_misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qg-misc */ "./src/assets/_project/_blocks/utils/qg-misc.js");
/* harmony import */ var _qg_misc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_qg_misc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _qg_ajax_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qg-ajax-call */ "./src/assets/_project/_blocks/utils/qg-ajax-call.js");
/* harmony import */ var _qg_ajax_call__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_qg_ajax_call__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _qg_load_google_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qg-load-google-api */ "./src/assets/_project/_blocks/utils/qg-load-google-api.js");
/* harmony import */ var _parent_width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent-width */ "./src/assets/_project/_blocks/utils/parent-width.js");
/* harmony import */ var _parent_width__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parent_width__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _qg_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qg-datepicker */ "./src/assets/_project/_blocks/utils/qg-datepicker.js");
/* harmony import */ var _qg_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_qg_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _qg_quickexit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qg-quickexit */ "./src/assets/_project/_blocks/utils/qg-quickexit.js");
/* harmony import */ var _qg_quickexit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_qg_quickexit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _qg_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qg-datatables */ "./src/assets/_project/_blocks/utils/qg-datatables.js");
/* harmony import */ var _qg_datatables__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_qg_datatables__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./node_modules/stickyfill/index.js":
/*!******************************************!*\
  !*** ./node_modules/stickyfill/index.js ***!
  \******************************************/
/***/ ((module) => {

/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.1 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */

module.exports = (function(doc, win) {
    if (!doc) {
        doc = document;
    }

    if (!win) {
        win = window;
    }
    
    var watchArray = [],
        scroll,
        initialized = false,
        html = doc.documentElement,
        noop = function() {},
        checkTimer,

        //visibility API strings
        hiddenPropertyName = 'hidden',
        visibilityChangeEventName = 'visibilitychange';

    //fallback to prefixed names in old webkit browsers
    if (doc.webkitHidden !== undefined) {
        hiddenPropertyName = 'webkitHidden';
        visibilityChangeEventName = 'webkitvisibilitychange';
    }

    //test getComputedStyle
    if (!win.getComputedStyle) {
        seppuku();
    }

    //test for native support
    var prefixes = ['', '-webkit-', '-moz-', '-ms-'],
        block = document.createElement('div');

    for (var i = prefixes.length - 1; i >= 0; i--) {
        try {
            block.style.position = prefixes[i] + 'sticky';
        }
        catch(e) {}
        if (block.style.position != '') {
            seppuku();
        }
    }

    updateScrollPos();

    //commit seppuku!
    function seppuku() {
        init = add = rebuild = pause = stop = kill = noop;
    }

    function mergeObjects(targetObj, sourceObject) {
        for (key in sourceObject) {
            if (sourceObject.hasOwnProperty(key)) {
                targetObj[key] = sourceObject[key];
            }
        }
    }

    function parseNumeric(val) {
        return parseFloat(val) || 0;
    }

    function updateScrollPos() {
        scroll = {
            top: win.pageYOffset,
            left: win.pageXOffset
        };
    }

    function onScroll() {
        if (win.pageXOffset != scroll.left) {
            updateScrollPos();
            rebuild();
            return;
        }
        
        if (win.pageYOffset != scroll.top) {
            updateScrollPos();
            recalcAllPos();
        }
    }

    //fixes flickering
    function onWheel(event) {
        setTimeout(function() {
            if (win.pageYOffset != scroll.top) {
                scroll.top = win.pageYOffset;
                recalcAllPos();
            }
        }, 0);
    }

    function recalcAllPos() {
        for (var i = watchArray.length - 1; i >= 0; i--) {
            recalcElementPos(watchArray[i]);
        }
    }

    function recalcElementPos(el) {
        if (!el.inited) return;

        var currentMode = (scroll.top <= el.limit.start? 0: scroll.top >= el.limit.end? 2: 1);

        if (el.mode != currentMode) {
            switchElementMode(el, currentMode);
        }
    }

    //checks whether stickies start or stop positions have changed
    function fastCheck() {
        for (var i = watchArray.length - 1; i >= 0; i--) {
            if (!watchArray[i].inited) continue;

            var deltaTop = Math.abs(getDocOffsetTop(watchArray[i].clone) - watchArray[i].docOffsetTop),
                deltaHeight = Math.abs(watchArray[i].parent.node.offsetHeight - watchArray[i].parent.height);

            if (deltaTop >= 2 || deltaHeight >= 2) return false;
        }
        return true;
    }

    function initElement(el) {
        if (isNaN(parseFloat(el.computed.top)) || el.isCell) return;

        el.inited = true;

        if (!el.clone) clone(el);
        if (el.parent.computed.position != 'absolute' &&
            el.parent.computed.position != 'relative') el.parent.node.style.position = 'relative';

        recalcElementPos(el);

        el.parent.height = el.parent.node.offsetHeight;
        el.docOffsetTop = getDocOffsetTop(el.clone);
    }

    function deinitElement(el) {
        var deinitParent = true;

        el.clone && killClone(el);
        mergeObjects(el.node.style, el.css);

        //check whether element's parent is used by other stickies
        for (var i = watchArray.length - 1; i >= 0; i--) {
            if (watchArray[i].node !== el.node && watchArray[i].parent.node === el.parent.node) {
                deinitParent = false;
                break;
            }
        };

        if (deinitParent) el.parent.node.style.position = el.parent.css.position;
        el.mode = -1;
    }

    function initAll() {
        for (var i = watchArray.length - 1; i >= 0; i--) {
            initElement(watchArray[i]);
        }
    }

    function deinitAll() {
        for (var i = watchArray.length - 1; i >= 0; i--) {
            deinitElement(watchArray[i]);
        }
    }

    function switchElementMode(el, mode) {
        var nodeStyle = el.node.style;

        switch (mode) {
            case 0:
                nodeStyle.position = 'absolute';
                nodeStyle.left = el.offset.left + 'px';
                nodeStyle.right = el.offset.right + 'px';
                nodeStyle.top = el.offset.top + 'px';
                nodeStyle.bottom = 'auto';
                nodeStyle.width = 'auto';
                nodeStyle.marginLeft = 0;
                nodeStyle.marginRight = 0;
                nodeStyle.marginTop = 0;
                break;

            case 1:
                nodeStyle.position = 'fixed';
                nodeStyle.left = el.box.left + 'px';
                nodeStyle.right = el.box.right + 'px';
                nodeStyle.top = el.css.top;
                nodeStyle.bottom = 'auto';
                nodeStyle.width = 'auto';
                nodeStyle.marginLeft = 0;
                nodeStyle.marginRight = 0;
                nodeStyle.marginTop = 0;
                break;

            case 2:
                nodeStyle.position = 'absolute';
                nodeStyle.left = el.offset.left + 'px';
                nodeStyle.right = el.offset.right + 'px';
                nodeStyle.top = 'auto';
                nodeStyle.bottom = 0;
                nodeStyle.width = 'auto';
                nodeStyle.marginLeft = 0;
                nodeStyle.marginRight = 0;
                break;
        }

        el.mode = mode;
    }

    function clone(el) {
        el.clone = document.createElement('div');

        var refElement = el.node.nextSibling || el.node,
            cloneStyle = el.clone.style;

        cloneStyle.height = el.height + 'px';
        cloneStyle.width = el.width + 'px';
        cloneStyle.marginTop = el.computed.marginTop;
        cloneStyle.marginBottom = el.computed.marginBottom;
        cloneStyle.marginLeft = el.computed.marginLeft;
        cloneStyle.marginRight = el.computed.marginRight;
        cloneStyle.padding = cloneStyle.border = cloneStyle.borderSpacing = 0;
        cloneStyle.fontSize = '1em';
        cloneStyle.position = 'static';
        cloneStyle.cssFloat = el.computed.cssFloat;

        el.node.parentNode.insertBefore(el.clone, refElement);
    }

    function killClone(el) {
        el.clone.parentNode.removeChild(el.clone);
        el.clone = undefined;
    }

    function getElementParams(node) {
        var computedStyle = getComputedStyle(node),
            parentNode = node.parentNode,
            parentComputedStyle = getComputedStyle(parentNode),
            cachedPosition = node.style.position;

        node.style.position = 'relative';

        var computed = {
                top: computedStyle.top,
                marginTop: computedStyle.marginTop,
                marginBottom: computedStyle.marginBottom,
                marginLeft: computedStyle.marginLeft,
                marginRight: computedStyle.marginRight,
                cssFloat: computedStyle.cssFloat
            },
            numeric = {
                top: parseNumeric(computedStyle.top),
                marginBottom: parseNumeric(computedStyle.marginBottom),
                paddingLeft: parseNumeric(computedStyle.paddingLeft),
                paddingRight: parseNumeric(computedStyle.paddingRight),
                borderLeftWidth: parseNumeric(computedStyle.borderLeftWidth),
                borderRightWidth: parseNumeric(computedStyle.borderRightWidth)
            };

        node.style.position = cachedPosition;

        var css = {
                position: node.style.position,
                top: node.style.top,
                bottom: node.style.bottom,
                left: node.style.left,
                right: node.style.right,
                width: node.style.width,
                marginTop: node.style.marginTop,
                marginLeft: node.style.marginLeft,
                marginRight: node.style.marginRight
            },
            nodeOffset = getElementOffset(node),
            parentOffset = getElementOffset(parentNode),
            
            parent = {
                node: parentNode,
                css: {
                    position: parentNode.style.position
                },
                computed: {
                    position: parentComputedStyle.position
                },
                numeric: {
                    borderLeftWidth: parseNumeric(parentComputedStyle.borderLeftWidth),
                    borderRightWidth: parseNumeric(parentComputedStyle.borderRightWidth),
                    borderTopWidth: parseNumeric(parentComputedStyle.borderTopWidth),
                    borderBottomWidth: parseNumeric(parentComputedStyle.borderBottomWidth)
                }
            },

            el = {
                node: node,
                box: {
                    left: nodeOffset.win.left,
                    right: html.clientWidth - nodeOffset.win.right
                },
                offset: {
                    top: nodeOffset.win.top - parentOffset.win.top - parent.numeric.borderTopWidth,
                    left: nodeOffset.win.left - parentOffset.win.left - parent.numeric.borderLeftWidth,
                    right: -nodeOffset.win.right + parentOffset.win.right - parent.numeric.borderRightWidth
                },
                css: css,
                isCell: computedStyle.display == 'table-cell',
                computed: computed,
                numeric: numeric,
                width: nodeOffset.win.right - nodeOffset.win.left,
                height: nodeOffset.win.bottom - nodeOffset.win.top,
                mode: -1,
                inited: false,
                parent: parent,
                limit: {
                    start: nodeOffset.doc.top - numeric.top,
                    end: parentOffset.doc.top + parentNode.offsetHeight - parent.numeric.borderBottomWidth -
                        node.offsetHeight - numeric.top - numeric.marginBottom
                }
            };

        return el;
    }

    function getDocOffsetTop(node) {
        var docOffsetTop = 0;

        while (node) {
            docOffsetTop += node.offsetTop;
            node = node.offsetParent;
        }

        return docOffsetTop;
    }

    function getElementOffset(node) {
        var box = node.getBoundingClientRect();

            return {
                doc: {
                    top: box.top + win.pageYOffset,
                    left: box.left + win.pageXOffset
                },
                win: box
            };
    }

    function startFastCheckTimer() {
        checkTimer = setInterval(function() {
            !fastCheck() && rebuild();
        }, 500);
    }

    function stopFastCheckTimer() {
        clearInterval(checkTimer);
    }

    function handlePageVisibilityChange() {
        if (!initialized) return;

        if (document[hiddenPropertyName]) {
            stopFastCheckTimer();
        }
        else {
            startFastCheckTimer();
        }
    }

    function init() {
        if (initialized) return;

        updateScrollPos();
        initAll();

        win.addEventListener('scroll', onScroll);
        win.addEventListener('wheel', onWheel);

        //watch for width changes
        win.addEventListener('resize', rebuild);
        win.addEventListener('orientationchange', rebuild);

        //watch for page visibility
        doc.addEventListener(visibilityChangeEventName, handlePageVisibilityChange);

        startFastCheckTimer();

        initialized = true;
    }

    function rebuild() {
        if (!initialized) return;

        deinitAll();
        
        for (var i = watchArray.length - 1; i >= 0; i--) {
            watchArray[i] = getElementParams(watchArray[i].node);
        }
        
        initAll();
    }

    function pause() {
        win.removeEventListener('scroll', onScroll);
        win.removeEventListener('wheel', onWheel);
        win.removeEventListener('resize', rebuild);
        win.removeEventListener('orientationchange', rebuild);
        doc.removeEventListener(visibilityChangeEventName, handlePageVisibilityChange);

        stopFastCheckTimer();

        initialized = false;
    }

    function stop() {
        pause();
        deinitAll(); 
    }

    function kill() {
        stop();

        //empty the array without loosing the references,
        //the most performant method according to http://jsperf.com/empty-javascript-array
        while (watchArray.length) {
            watchArray.pop();
        }
    }

    function add(node) {
        //check if Stickyfill is already applied to the node
        for (var i = watchArray.length - 1; i >= 0; i--) {
            if (watchArray[i].node === node) return;
        };

        var el = getElementParams(node);

        watchArray.push(el);

        if (!initialized) {
            init();
        }
        else {
            initElement(el);
        }
    }

    function remove(node) {
        for (var i = watchArray.length - 1; i >= 0; i--) {
            if (watchArray[i].node === node) {
                deinitElement(watchArray[i]);
                watchArray.splice(i, 1);
            }
        };
    }

    //expose Stickyfill
    return {
        stickies: watchArray,
        add: add,
        remove: remove,
        init: init,
        rebuild: rebuild,
        pause: pause,
        stop: stop,
        kill: kill
    };
})

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : String(i);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./src/assets/_project/_blocks/data/qg-google-keys.json":
/*!**************************************************************!*\
  !*** ./src/assets/_project/_blocks/data/qg-google-keys.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"defGoogle":{"test":"AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE","docs":"AIzaSyBE95_qL90MT9loY1roLnHJ3uaBYbleYeM","prod":"AIzaSyANZv-2WcXRzkBqtgEcLTZq7zVy-9eNWgw"},"defGoogleRecaptcha":{"uat":"6LeNGSwUAAAAAD6o-P5UTM0FNpKjYB71Kh70F-Ud","prod":"6LcoIywUAAAAAN-1rq22G-bP3yxl1bBq_5nHJ6s9"},"defFeedbackGoogleRecaptcha":{"uat":"6Lf3uLEUAAAAAKbnWYc0iXtctL8TeFC26l43Qyt2","prod":"6LcTNMIUAAAAAHiGXUnaO1xlELzXgpWujzEJbFjS"},"franchises":[{"name":"about","apiKey":"AIzaSyBi-T3vrvcYwouFPqPI5IgLoQxl2hz6Ogs"},{"name":"atsi","apiKey":"AIzaSyB2mTTDd1CcLEYrLHJJHlzX60vQ68snyko"},{"name":"community","apiKey":"AIzaSyCJwNeGu0XT1lvhg-2cm7S27BQo9k7Jd9E"},{"name":"disability","apiKey":"AIzaSyC-KQFfBhoGle7kJJhY1Pf_GvR_qC5jzN4"},{"name":"education","apiKey":"AIzaSyDeeYKKOyQCYkpVWXRLLxyNjfy2dhyWVls"},{"name":"emergency","apiKey":"AIzaSyD1xT_2Dh2EZ7Iy6SLodeH8CJzbXlp6vgE"},{"name":"environment","apiKey":"AIzaSyAZJjfwIKDPlQs-S3id-CGp8U_S4U7idFI"},{"name":"families","apiKey":"AIzaSyBucRn0YhJhQ-ELSS-MM7JvYb19-I1bqqI"},{"name":"health","apiKey":"AIzaSyD_Xzvr6nBm5PlpANw2UZ2df3-U5eeOlvY"},{"name":"housing","apiKey":"AIzaSyCgMKJlbP1SRIf3xCMFDbBImNkF_BCubvk"},{"name":"jobs","apiKey":"AIzaSyBXmI1DZvPFVQ_h-E1TNsPNdlNuqDd7MVo"},{"name":"law","apiKey":"AIzaSyBeij584IMIZqpftyhMCt_lZ_hBK_h8hMc"},{"name":"recreation","apiKey":"AIzaSyDJmfdqYI3eyV8-ivwPWVIIHxBzqo5_v2I"},{"name":"seniors","apiKey":"AIzaSyA3PDnd30Twv3Zr3JKqiAUYNO1983ZDBe0"},{"name":"transport","apiKey":"AIzaSyARzyCPigCt9cW1F6ua0_U3NVLdRbxwLyg"},{"name":"youth","apiKey":"AIzaSyCe7FYHy28So2Uio_OEQje0o0Pr23s7gt0"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ./src/assets/_project/_blocks/qg-main.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_qg_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/qg-env */ "./src/assets/_project/_blocks/utils/qg-env.js");
/* harmony import */ var _utils_qg_env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_qg_env__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_qg_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/qg-util */ "./src/assets/_project/_blocks/utils/qg-util.js");
/* harmony import */ var _legacy_forms_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy/forms/forms */ "./src/assets/_project/_blocks/legacy/forms/forms.js");
/* harmony import */ var _legacy_forms_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_legacy_forms_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_qg_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/qg-components */ "./src/assets/_project/_blocks/components/qg-components.js");
/* harmony import */ var _layout_footer_footer_legals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer/footer-legals */ "./src/assets/_project/_blocks/layout/footer/footer-legals.js");
/* harmony import */ var _layout_footer_footer_legals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_footer_footer_legals__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_section_nav_qg_section_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/section-nav/qg-section-nav */ "./src/assets/_project/_blocks/layout/section-nav/qg-section-nav.js");
/* harmony import */ var _layout_section_nav_qg_section_nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_section_nav_qg_section_nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_section_nav_qg_step_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/section-nav/qg-step-nav */ "./src/assets/_project/_blocks/layout/section-nav/qg-step-nav.js");
/* harmony import */ var _layout_content_share_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/content/share-links */ "./src/assets/_project/_blocks/layout/content/share-links.js");
/* harmony import */ var _layout_content_share_links__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_content_share_links__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/breadcrumbs/breadcrumbs */ "./src/assets/_project/_blocks/layout/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _layout_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_content_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/content/content */ "./src/assets/_project/_blocks/layout/content/content.js");
/* harmony import */ var _layout_content_content__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_layout_content_content__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layout_content_content_types_figure_credits_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/content/content-types/figure-credits-toggle */ "./src/assets/_project/_blocks/layout/content/content-types/figure-credits-toggle.js");
/* harmony import */ var _layout_content_content_types_figure_credits_toggle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_layout_content_content_types_figure_credits_toggle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layout_footer_feedback_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/footer/feedback-form */ "./src/assets/_project/_blocks/layout/footer/feedback-form.js");
/* harmony import */ var _layout_footer_feedback_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_layout_footer_feedback_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_site_search_qg_funnelback_v16_refs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/site-search/qg-funnelback-v16-refs */ "./src/assets/_project/_blocks/components/site-search/qg-funnelback-v16-refs.js");
/* harmony import */ var _components_site_search_qg_funnelback_v16_refs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_site_search_qg_funnelback_v16_refs__WEBPACK_IMPORTED_MODULE_12__);
// env initialization

// utils import


// legacy module imports


// components import


// Layout imports









//Funnelback refs

(function () {
  'use strict';

  var franchiseTitle = window.qg.swe.franchiseTitle;
  _layout_section_nav_qg_section_nav__WEBPACK_IMPORTED_MODULE_5___default().highlightNavItem();
  _layout_section_nav_qg_step_nav__WEBPACK_IMPORTED_MODULE_6__["default"].init();
  _layout_footer_feedback_form__WEBPACK_IMPORTED_MODULE_11___default().init(franchiseTitle);
})();
$(function () {
  if ($('#qg-quick-exit__input').length > 0) {
    $('body').addClass('qg-private-content');
  }
});
})();

/******/ })()
;
//# sourceMappingURL=qg-main.js.map