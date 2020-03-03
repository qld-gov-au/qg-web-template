$(function () {
  'use strict';

  //
  // Namespace
  //

  var qgSiteSearch = {
    'fn': {},
    'vars': {}
  };

  //
  // Helpers
  //

  // Check if we're on a local environment
  function isDevelopment () {
    var location = window['location']['hostname'];

    if (location === 'localhost') {
      return true;
    } else {
      return false;
    }
  }

  // Event debouncer
  function debouncer (func, wait, immediate) {
    var timeout;

    return function executedFunction () {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
  }

  //
  // Events
  //

  // Handle multiple events
  qgSiteSearch.fn.inputEventHandler = function (event) {
    var eventType = event['type'];
    var targetInput = $(event['target']);
    var inputValue = targetInput.val();

    switch (eventType) {
      case 'focus':
        qgSiteSearch.fn.onFocus(inputValue);
        break;
      case 'blur':
        qgSiteSearch.fn.onBlur(inputValue);
        break;
      case 'input':
        qgSiteSearch.fn.onInput(inputValue);
        break;
    }
  };

  // Handle clicking into the input field
  qgSiteSearch.fn.onFocus = function (inputValue) {
    var initialConcierge = $('.qg-search-concierge-initial');

    if (inputValue === '') {
      // Transition reveal initial state
      initialConcierge.removeClass('hide');
    } else {
      // Immediately close the concierge
      initialConcierge.addClass('hide');
    }
  };

  // Handle clicking out of the input field
  qgSiteSearch.fn.onBlur = function (inputValue) {
    var initialConcierge = $('.qg-search-concierge-initial');
    var helpfulConcierge = $('.qg-search-concierge-help');

    // Immediately close both concierge panels
    initialConcierge.addClass('hide');
    helpfulConcierge.addClass('hide');
  };

  // Handle input value changes
  qgSiteSearch.fn.onInput = function (inputValue) {
    var initialConcierge = $('.qg-search-concierge-initial');
    var helpfulConcierge = $('.qg-search-concierge-help');

    if (inputValue !== '') {
      // Remove initial state and transition reveal suggestions
      initialConcierge.addClass('hide');
      helpfulConcierge.removeClass('hide');
    } else {
      // Remove suggestions and transition reveal initial state
      initialConcierge.removeClass('hide');
      helpfulConcierge.addClass('hide');
    }
  };

  //
  // Local data
  //

  // Get local example of Google Maps API
  qgSiteSearch.fn.getExampleSuggestions = function () {
    var exampleResponse = {};

    return exampleResponse;
  };

  //
  // Functions
  //

  //
  // Ready
  //

  $(document).ready(function () {
    var searchInput = $('#qg-search-query');

    // Set up events
    searchInput.on('focus blur input', debouncer(qgSiteSearch.fn.inputEventHandler, 200));

    if (isDevelopment()) {
      console.log('development');
    }
  });

  // Binds
});
