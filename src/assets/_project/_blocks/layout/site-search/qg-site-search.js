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

  // Wrap part of the string in bold tags
  function getBoldText (subString, stringToChange) {
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
      initialConcierge.addClass('show');
    } else {
      // Look for suggested results
      qgSiteSearch.fn.checkForSuggestions(inputValue);
    }
  };

  // Handle clicking out of the input field
  qgSiteSearch.fn.onBlur = function (inputValue) {
    var initialConcierge = $('.qg-search-concierge-initial');
    var helpfulConcierge = $('.qg-search-concierge-help');

    // Immediately close both concierge panels
    initialConcierge.addClass('hide').removeClass('show');
    helpfulConcierge.addClass('hide').removeClass('show');

    setTimeout(function () {
      initialConcierge.removeClass('hide');
      helpfulConcierge.removeClass('hide');
    }, 300);
  };

  // Handle input value changes
  qgSiteSearch.fn.onInput = function (inputValue) {
    var initialConcierge = $('.qg-search-concierge-initial');
    var helpfulConcierge = $('.qg-search-concierge-help');

    if (inputValue !== '') {
      // Look for suggested results
      qgSiteSearch.fn.checkForSuggestions(inputValue);
    } else {
      // Remove suggestions and transition reveal initial state
      initialConcierge.addClass('show');
      helpfulConcierge.removeClass('show');
    }
  };

  //
  // Local data
  //

  // Get example suggestions from Funnelback
  qgSiteSearch.fn.getExampleSuggestions = function () {
    var exampleResponse = [{'key': 'cancelled', 'disp': 'cancelled', 'disp_t': 'T', 'wt': '77.44', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancellation', 'disp': 'cancellation', 'disp_t': 'T', 'wt': '72.139', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancel', 'disp': 'cancel', 'disp_t': 'T', 'wt': '69.493', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancelling', 'disp': 'cancelling', 'disp_t': 'T', 'wt': '43.151', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancellations', 'disp': 'cancellations', 'disp_t': 'T', 'wt': '32.28', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancellation of membership', 'disp': 'cancellation of membership', 'disp_t': 'T', 'wt': '2.2', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancellation form', 'disp': 'fill out this cancellation form', 'disp_t': 'T', 'wt': '2', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancel a booking', 'disp': 'cancel a booking', 'disp_t': 'T', 'wt': '1.1', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancel a disability parking permit', 'disp': 'cancel a disability parking permit', 'disp_t': 'T', 'wt': '1', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}, {'key': 'cancelling your registration', 'disp': 'cancelling your registration', 'disp_t': 'T', 'wt': '1', 'cat': '', 'cat_t': '', 'action': '', 'action_t': 'S'}];

    return exampleResponse;
  };

  //
  // Functions
  //

  // Check Funnelback for suggested results
  qgSiteSearch.fn.checkForSuggestions = function (inputValue) {
    var initialConcierge = $('.qg-search-concierge-initial');
    var helpfulConcierge = $('.qg-search-concierge-help');
    var numChars = inputValue.length;

    // Remove initial state
    initialConcierge.removeClass('show');

    // Query Funnelback when three characters are entered
    if (numChars >= 3) {
      // Get suggestions
      qgSiteSearch.fn.getSuggestions(inputValue);

      // Transition reveal suggestions
      helpfulConcierge.addClass('show');
    }
  };

  // Get suggestion keywords
  qgSiteSearch.fn.getSuggestions = function (inputValue) {
    var searchForm = $('#qg-global-search-form');
    var suggestURL = searchForm.attr('data-suggestions');

    if (isDevelopment()) {
      // Demonstrate functionality locally
      var exampleSuggestions = qgSiteSearch.fn.getExampleSuggestions();
      qgSiteSearch.fn.formatSuggestions(exampleSuggestions);
    } else {
      // Query Funnelback
      $.ajax({
        cache: true,
        dataType: 'json',
        url: suggestURL,
        data: {
          partial_query: inputValue
        },
        success: qgSiteSearch.fn.formatSuggestions
      });
    }
  };

  // Format suggestion keywords
  qgSiteSearch.fn.formatSuggestions = function (suggestions) {
    var inputField = $('#qg-search-query');
    var inputValue = inputField.val();
    var suggestionsContainer = $('.qg-search-concierge-group.suggestions');
    var suggestionsHeading = '<h4>Suggestions</h4>';
    var suggestionsHTML = '';

    if (suggestions.length > 0) {
      // Add the heading
      suggestionsHTML += suggestionsHeading;
      suggestionsHTML += '<ul class="list-group">';

      suggestions.forEach(function (item) {
        suggestionsHTML += '<li class="list-group-item">';
        suggestionsHTML += '<button>';
        suggestionsHTML += getBoldText(inputValue, item['disp']);
        suggestionsHTML += '</button>';
        suggestionsHTML += '</li>';
      });

      suggestionsHTML += '</ul>';
    }

    // Update the concierge container
    suggestionsContainer.html(suggestionsHTML);
  };

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
