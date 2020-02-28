$(function () {
  'use strict';

  // Keep location dropdown open the elements inside of the dropdown are clicked
  $('.header-location .dropdown-menu').click(function (e) {
    var eventTarget = event['target'];
    var targetElement = eventTarget['tagName'].toLowerCase();

    if (targetElement !== 'button') {
      e.stopPropagation();
    }
  });

  // Except for these button
  $('.clear-location, .set-location').click(function (e) {
    $('.header-location').dropdown('toggle');
  });

  $('.header-location-close').click(function (e) {
    $('.header-location .dropdown-menu').addClass('closed');
    $('.header-location').dropdown('toggle');
    setTimeout(function () { $('.header-location .dropdown-menu').removeClass('closed'); }, 300);
  });

  //
  // Namespace
  //

  var qgLocation = {
    'fn': {},
    'vars': {
      'cookie_name': 'qg-location',
      'event_location_set': 'qgLocationSet',
      'event_location_found': 'qgLocationFound',
      'location_allowed': false,
      'error_message': ''
    }
  };

  //
  // Helpers
  //

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

  // Handle custom events
  function customEventHandler (event, eventName) {
    switch (eventName) {
      case qgLocation['vars']['event_location_set']:
        qgLocation.fn.getLocality();
        break;
      case qgLocation['vars']['event_location_found']:
        qgLocation.fn.setLocationName();
        break;
    }
  }

  //
  // Functions
  //

  // Initialiser
  qgLocation.fn.init = function () {
    // Check for saved data
    qgLocation.fn.getStoredLocation();
  };

  // Check for saved location
  qgLocation.fn.getStoredLocation = function () {
    var cookieName = qgLocation['vars']['cookie_name'];
    var storedData = getCookie(cookieName);

    if (storedData !== '') {
      var locationData = JSON.parse(storedData);
      return locationData;
    }
  };

  // Prompt the browser to access inbuilt geolocation functionality
  qgLocation.fn.getDeviceLocation = function (event) {
    event.stopPropagation();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(qgLocation.fn.success, qgLocation.fn.failure);
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
    var locationSet = qgLocation['vars']['event_location_set'];
    $('body').trigger('custom', [locationSet]);
  };

  // Save data to the location cookie
  qgLocation.fn.saveLocationCookie = function (cookieData) {
    var cookieName = qgLocation['vars']['cookie_name'];
    var cookieValue = JSON.stringify(cookieData);
    var daysActive = 7;

    setCookie(cookieName, cookieValue, daysActive);
  };

  // Clear position data from browser
  qgLocation.fn.deletePositionData = function () {
    var cookieName = qgLocation['vars']['cookie_name'];

    deleteCookie(cookieName);
  };

  // Get local example of Google Maps API
  qgLocation.fn.getExampleLocation = function () {
    var exampleResponse = { 'results': [ { 'address_components': [ { 'long_name': 'Browning St near Boundary Rd, stop 5', 'short_name': 'Browning St near Boundary Rd, stop 5', 'types': [ 'establishment', 'point_of_interest', 'transit_station' ] }, { 'long_name': 'South Brisbane', 'short_name': 'South Brisbane', 'types': [ 'locality', 'political' ] }, { 'long_name': 'Brisbane City', 'short_name': 'Brisbane', 'types': [ 'administrative_area_level_2', 'political' ] }, { 'long_name': 'Queensland', 'short_name': 'QLD', 'types': [ 'administrative_area_level_1', 'political' ] }, { 'long_name': 'Australia', 'short_name': 'AU', 'types': [ 'country', 'political' ] }, { 'long_name': '4101', 'short_name': '4101', 'types': [ 'postal_code' ] } ], 'formatted_address': 'Browning St near Boundary Rd, stop 5, South Brisbane QLD 4101, Australia', 'geometry': { 'location': { 'lat': -27.477727, 'lng': 153.01314 }, 'location_type': 'GEOMETRIC_CENTER', 'viewport': { 'northeast': { 'lat': -27.4763780197085, 'lng': 153.0144889802915 }, 'southwest': { 'lat': -27.4790759802915, 'lng': 153.0117910197085 } } }, 'place_id': 'ChIJufdIyqBQkWsRlnW4qQxzN94', 'types': [ 'establishment', 'point_of_interest', 'transit_station' ] } ], 'status': 'OK' };

    return JSON.stringify(exampleResponse);
  };

  // Get the locality from Google Maps API
  qgLocation.fn.getLocality = function () {
    var storedData = qgLocation.fn.getStoredLocation();
    var exampleData = qgLocation.fn.getExampleLocation();

    qgLocation.fn.processLocality(exampleData);
    console.log(storedData);
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
      var locationFound = qgLocation['vars']['event_location_found'];
      $('body').trigger('custom', [locationFound]);
    }
  };

  // Visually set the location data
  qgLocation.fn.setLocationName = function () {
    var storedData = qgLocation.fn.getStoredLocation();
    var locality = storedData['locality'];

    // Update header
    $('.header-location .location-name').text(locality);

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
  //$('body').on('click', '.qg-location-setter .detect-location', qgLocation.fn.deletePositionData);
});