$(function () {
  'use strict';

  //
  // Namespace
  //

  var qgLocation = {
    'fn': {},
    'vars': {
      'cookie_name': 'qg-location',
      'event_location_set': 'qgLocationSet',
      'event_location_found': 'qgLocationFound',
      'event_location_cleared': 'qgLocationCleared',
      'panel_id': '',
      'error_message': ''
    }
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

  // Create a cookie
  function setCookie (cookieName, cookieValue, daysActive) {
    var cookieEntry = cookieName + '=' + encodeURIComponent(cookieValue) + ';';

    // Timed cookie
    var rightNow = new Date();
    rightNow.setTime(rightNow.getTime() + daysActive * 24 * 60 * 60 * 1000);

    var expiryTime = 'expires=' + rightNow.toUTCString();
    document.cookie = cookieEntry + expiryTime + '; path=/;';
  }

  // Get a cookie by name
  function getCookie (cookieName) {
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
  function deleteCookie (cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  // Hide the dropdown as the native dropdown() function doesn't work
  function closeDropdown () {
    $('.header-location').removeClass('show');
    $('.header-location > .dropdown-toggle').attr('aria-expanded', 'false');
    $('.header-location .qg-location-setter').removeClass('show');
  }

  // Handle custom events
  function customEventHandler (event, eventName) {
    switch (eventName) {
      case qgLocation['vars']['event_location_set']:
        qgLocation.fn.getLocality();
        break;
      case qgLocation['vars']['event_location_found']:
        qgLocation.fn.setLocationName();
        break;
      case qgLocation['vars']['event_location_cleared']:
        qgLocation.fn.resetLocationContainers();
        break;
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

  // Keep location dropdown open the elements inside of the dropdown are clicked
  $('.header-location .dropdown-menu').click(function (e) {
    var eventTarget = event['target'];
    var targetElement = eventTarget['tagName'].toLowerCase();

    if (targetElement !== 'button') {
      e.stopPropagation();
    }
  });

  // Prompt the browser to access inbuilt geolocation functionality
  qgLocation.fn.getDeviceLocation = function (event) {
    event.stopPropagation();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(qgLocation.fn.success, qgLocation.fn.failure);
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
    var inputValue = inputField['value'];
    var numChars = inputValue.length;

    if (numChars >= 3) {
      if (isDevelopment()) {
        // Demonstrate functionality locally
        var exampleData = qgLocation.fn.revealExampleLocations();
        qgLocation.fn.displaySuburbSuggestions(exampleData);
      } else {
        // Query the ArcGIS API with location
        var targetURL = inputField.getAttribute('data-suburbs');

        $.ajax({
          cache: true,
          dataType: 'json',
          url: targetURL,
          data: {
            suburb: inputValue
          },
          success: qgLocation.fn.displaySuburbSuggestions
        });
      }
    }
  };

  //
  // Local data
  //

  // Get local example of Google Maps API
  qgLocation.fn.getExampleLocation = function () {
    var exampleResponse = { 'results': [ { 'address_components': [ { 'long_name': 'Browning St near Boundary Rd, stop 5', 'short_name': 'Browning St near Boundary Rd, stop 5', 'types': [ 'establishment', 'point_of_interest', 'transit_station' ] }, { 'long_name': 'South Brisbane', 'short_name': 'South Brisbane', 'types': [ 'locality', 'political' ] }, { 'long_name': 'Brisbane City', 'short_name': 'Brisbane', 'types': [ 'administrative_area_level_2', 'political' ] }, { 'long_name': 'Queensland', 'short_name': 'QLD', 'types': [ 'administrative_area_level_1', 'political' ] }, { 'long_name': 'Australia', 'short_name': 'AU', 'types': [ 'country', 'political' ] }, { 'long_name': '4101', 'short_name': '4101', 'types': [ 'postal_code' ] } ], 'formatted_address': 'Browning St near Boundary Rd, stop 5, South Brisbane QLD 4101, Australia', 'geometry': { 'location': { 'lat': -27.477727, 'lng': 153.01314 }, 'location_type': 'GEOMETRIC_CENTER', 'viewport': { 'northeast': { 'lat': -27.4763780197085, 'lng': 153.0144889802915 }, 'southwest': { 'lat': -27.4790759802915, 'lng': 153.0117910197085 } } }, 'place_id': 'ChIJufdIyqBQkWsRlnW4qQxzN94', 'types': [ 'establishment', 'point_of_interest', 'transit_station' ] } ], 'status': 'OK' };

    return JSON.stringify(exampleResponse);
  };

  // Get local example of suburb lists
  qgLocation.fn.revealExampleLocations = function () {
    var exampleSuburbs = [{'name': 'coolabine, sunshine coast regional', 'name_friendly': 'Coolabine, Sunshine Coast Regional', 'name_formatted': '<b>Coola</b>bine, Sunshine Coast Regional'}, {'name': 'coolabunia, south burnett regional', 'name_friendly': 'Coolabunia, South Burnett Regional', 'name_formatted': '<b>Coola</b>bunia, South Burnett Regional'}, {'name': 'cooladdi, murweh shire', 'name_friendly': 'Cooladdi, Murweh Shire', 'name_formatted': '<b>Coola</b>ddi, Murweh Shire'}, {'name': 'coolana, somerset regional', 'name_friendly': 'Coolana, Somerset Regional', 'name_formatted': '<b>Coola</b>na, Somerset Regional'}, {'name': 'coolangatta, gold coast city', 'name_friendly': 'Coolangatta, Gold Coast City', 'name_formatted': '<b>Coola</b>ngatta, Gold Coast City'}];

    return JSON.stringify(exampleSuburbs);
  };

  //
  // Functions
  //

  // Initialiser
  qgLocation.fn.init = function () {
    // Set up events
    qgLocation.fn.setUpListeners();

    // Check for saved data
    var storedData = qgLocation.fn.getStoredLocation();

    if (storedData) {
      var dataEvent = '';

      if (storedData['locality'] !== '') {
        // Coordinates exist, find locality
        dataEvent = qgLocation['vars']['event_location_found'];
      } else {
        // Locality exists, update page
        dataEvent = qgLocation['vars']['event_location_set'];
      }

      // Notify the rest of the page
      $('body').trigger('custom', dataEvent);
    }
  };

  // Set up input field listeners
  qgLocation.fn.setUpListeners = function () {
    var headerInputField = $('.header-location .qg-location-setter-form input[type=text]');
    headerInputField.on('keyup', debouncer(qgLocation.fn.initManualSearch, 200));
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
  qgLocation.fn.success = function (response) {
    var positionData = response['coords'];

    qgLocation.fn.setPositionData(positionData);
  };

  // The user has blocked geolocation
  qgLocation.fn.failure = function (response) {
    var responseMessage = response['message'];

    qgLocation['vars']['error_message'] = responseMessage;
  };

  // Save the position data to the browser
  qgLocation.fn.setPositionData = function (positionData) {
    var location = {
      'latitude': positionData['latitude'],
      'longitude': positionData['longitude'],
      'locality': 'unknown'
    };

    // Save to cookie
    qgLocation.fn.saveLocationCookie(location);

    // Notify the rest of the page
    $('body').trigger('custom', qgLocation['vars']['event_location_set']);
  };

  // Save data to the location cookie
  qgLocation.fn.saveLocationCookie = function (cookieData) {
    var cookieName = qgLocation['vars']['cookie_name'];
    var cookieValue = JSON.stringify(cookieData);
    var daysActive = 7;

    setCookie(cookieName, cookieValue, daysActive);
  };

  // Get the locality from Google Maps API
  qgLocation.fn.getLocality = function () {
    var storedData = qgLocation.fn.getStoredLocation();

    if (isDevelopment()) {
      // Demonstrate functionality locally
      var exampleData = qgLocation.fn.getExampleLocation();
      qgLocation.fn.processLocality(exampleData);
    } else {
      // Query the Google Maps API with location
      var targetURL = $('.qg-location-default').attr('data-geolocation');
      var locationOrigin = storedData['latitude'] + ',' + storedData['longitude'];

      $.ajax({
        cache: true,
        dataType: 'json',
        url: targetURL,
        data: {
          address: locationOrigin
        },
        success: qgLocation.fn.processLocality
      });
    }
  };

  // Process the Google Maps API data
  qgLocation.fn.processLocality = function (response) {
    var jsonResponse = JSON.parse(response);
    var allAddresses = jsonResponse['results'];
    var targetType = 'locality';
    var locality = '';

    // Check over all address matches
    for (var index = 0; index < allAddresses.length; index++) {
      var address = allAddresses[index];
      var addressComponents = address['address_components'];

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
    if (locality !== '') {
      var storedData = qgLocation.fn.getStoredLocation();
      storedData['locality'] = locality;

      // Save to cookie
      qgLocation.fn.saveLocationCookie(storedData);

      // Notify the rest of the page
      $('body').trigger('custom', qgLocation['vars']['event_location_found']);
    }
  };

  // Populate the suburb suggestion list
  qgLocation.fn.displaySuburbSuggestions = function (response) {
    var suburbData = JSON.parse(response);
    var targetContainer = $('.qg-location-setter.show .qg-location-setter-form');

    if (targetContainer) {
      // Check for returned data
      if (suburbData.length > 0) {
        var suggestionHTML = '<ul>';

        suburbData.forEach(function (suburb) {
          var suburbHTML = suburb['name_formatted'];
          suggestionHTML += '<li><button>' + suburbHTML + '</button></li>';
        });

        suggestionHTML += '</ul>';

        var suggestionList = targetContainer.find('.qg-location-setter-autocomplete');
        suggestionList.removeClass('hide');
        suggestionList.html(suggestionHTML);
      }
    }
  };

  // Visually set the location data
  qgLocation.fn.setLocationName = function () {
    var storedData = qgLocation.fn.getStoredLocation();
    var locality = storedData['locality'];

    // Update header
    $('.header-location .location-name').text(locality);
    $('.header-location .qg-location-default').addClass('hide');
    $('.header-location .qg-location-set').removeClass('hide');

    // Update service centre
  };

  // Restore location containers to default state after location cleared
  qgLocation.fn.resetLocationContainers = function () {
    var defaultLocation = 'unknown';

    // Update header
    closeDropdown();
    $('.header-location .location-name').text(defaultLocation);

    setTimeout(function () {
      $('.header-location .qg-location-default').removeClass('hide');
      $('.header-location .qg-location-set').addClass('hide');
    }, 300);

    // Update service centre
  };

  //
  // Ready
  //

  $(document).ready(function () {
    var locationID = '.header-location';

    if ($(locationID).length > 0) {
      qgLocation.fn.init();
    }
  });

  // Binds
  $('body').on('custom', customEventHandler);
  $('body').on('click', '.qg-location-setter .detect-location', qgLocation.fn.getDeviceLocation);
  $('body').on('click', '.qg-location-setter .clear-location', qgLocation.fn.deletePositionData);
  $('body').on('click', '.qg-location-setter .qg-location-setter-close', qgLocation.fn.closeLocationPopup);
});