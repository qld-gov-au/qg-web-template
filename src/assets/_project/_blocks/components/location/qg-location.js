$(function () {
    'use strict';

    // Keep location dropdown open the elements inside of the dropdown are clicked
    $('.header-location .dropdown-menu').click(function(e) {
        var event_target = event['target'];
        var target_element = event_target['tagName'].toLowerCase();

        if(target_element !== 'button') {
            e.stopPropagation();
        }
    });

    // Except for these button
    $('.clear-location, .set-location').click(function(e) {
        $('.header-location').dropdown('toggle');
    });

    $('.header-location-close').click(function(e) {
        $('.header-location .dropdown-menu').addClass('closed');
        $('.header-location').dropdown('toggle');
        setTimeout(function(){ $('.header-location .dropdown-menu').removeClass('closed'); }, 300);
    });


    // 
    // Imports
    //




    //
    // Namespace
    //

    var qg_location = {
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
    function setCookie(cookie_name, cookie_value, days_active) {
        var cookie_entry = cookie_name + '=' + encodeURIComponent(cookie_value) + ';';
        
        // Timed cookie
        var right_now = new Date();
        right_now.setTime(right_now.getTime() + days_active * 24 * 60 * 60 * 1000);
    
        var expiry_time = 'expires=' + right_now.toUTCString();
        document.cookie = cookie_entry + expiry_time + '; path=/;';
    };

    // Get a cookie by name
    function getCookie(cookie_name) {
        var target = cookie_name + '=';
        var cookie_jar = decodeURIComponent(document.cookie).split(';');
    
        var filtered_jar = cookie_jar.filter(function (cookie, index) {
            var current = cookie.trim();
            var match_index = current.indexOf(target);
    
            if(match_index === 0) {
                return true;
            }
        });
    
        if(filtered_jar.length > 0) {
            var chosen_cookie = filtered_jar[0].trim();
            return chosen_cookie.substring(target.length, chosen_cookie.length);
        } else {
            return '';
        }
    };

    // Delete a cookie by name
    function deleteCookie(cookie_name) {
        document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    };

    // Handle custom events
    function customEventHandler(event, event_name) {
        var location_set = qg_location['vars']['event_location_set'];
        var location_found = qg_location['vars']['event_location_found'];

        switch(event_name) {
            case location_set:
                qg_location.fn.getLocality();
                break;
            case location_found:
                qg_location.fn.setLocationName();
                break;
        }
    }


    //
    // Functions
    //

    // Initialiser
    qg_location.fn.init = function() {
        // Check for saved data
        qg_location.fn.getStoredLocation();
    };

    // Check for saved location
    qg_location.fn.getStoredLocation = function() {
        var cookie_name = qg_location['vars']['cookie_name'];
        var stored_data = getCookie(cookie_name);

        if(stored_data !== '') {
            var location_data = JSON.parse(stored_data);
            return location_data;
        }
    };

    // Prompt the browser to access inbuilt geolocation functionality
    qg_location.fn.getDeviceLocation = function(event) {
        event.stopPropagation();

        console.log('get clicker')

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(qg_location.fn.success, qg_location.fn.failure);
        }
    };

    // The user has allowed geolocation
    qg_location.fn.success = function(response) {
        var position_data = response['coords'];
        
        qg_location.fn.setPositionData(position_data);
    };

    // The user has blocked geolocation
    qg_location.fn.failure = function(response) {
        var response_message = response['message'];

        qg_location['vars']['error_message'] = response_message;
    };

    // Save the position data to the browser
    qg_location.fn.setPositionData = function(position_data) {
        var location = {
            'latitude': position_data['latitude'],
            'longitude': position_data['longitude'],
            'locality': 'unknown'
        };
        
        // Save to cookie
        qg_location.fn.saveLocationCookie(location);
        
        // Notify the rest of the page
        var location_set = qg_location['vars']['event_location_set'];
        $('body').trigger('custom', [location_set]);
    };

    // Save data to the location cookie
    qg_location.fn.saveLocationCookie = function(cookie_data) {
        var cookie_name = qg_location['vars']['cookie_name'];
        var cookie_value = JSON.stringify(cookie_data);
        var days_active = 7;

        setCookie(cookie_name, cookie_value, days_active);
    };

    // Clear position data from browser
    qg_location.fn.deletePositionData = function() {
        var cookie_name = qg_location['vars']['cookie_name'];

        deleteCookie(cookie_name);
    };

    // Get local example of Google Maps API
    qg_location.fn.getExampleLocation = function() {
        var example_response = { "results" : [ { "address_components" : [ { "long_name" : "Browning St near Boundary Rd, stop 5", "short_name" : "Browning St near Boundary Rd, stop 5", "types" : [ "establishment", "point_of_interest", "transit_station" ] }, { "long_name" : "South Brisbane", "short_name" : "South Brisbane", "types" : [ "locality", "political" ] }, { "long_name" : "Brisbane City", "short_name" : "Brisbane", "types" : [ "administrative_area_level_2", "political" ] }, { "long_name" : "Queensland", "short_name" : "QLD", "types" : [ "administrative_area_level_1", "political" ] }, { "long_name" : "Australia", "short_name" : "AU", "types" : [ "country", "political" ] }, { "long_name" : "4101", "short_name" : "4101", "types" : [ "postal_code" ] } ], "formatted_address" : "Browning St near Boundary Rd, stop 5, South Brisbane QLD 4101, Australia", "geometry" : { "location" : { "lat" : -27.477727, "lng" : 153.01314 }, "location_type" : "GEOMETRIC_CENTER", "viewport" : { "northeast" : { "lat" : -27.4763780197085, "lng" : 153.0144889802915 }, "southwest" : { "lat" : -27.4790759802915, "lng" : 153.0117910197085 } } }, "place_id" : "ChIJufdIyqBQkWsRlnW4qQxzN94", "types" : [ "establishment", "point_of_interest", "transit_station" ] } ], "status" : "OK" };

        return JSON.stringify(example_response);
    }

    // Get the locality from Google Maps API
    qg_location.fn.getLocality = function() {
        var stored_data = qg_location.fn.getStoredLocation();
        var example_data = qg_location.fn.getExampleLocation();

        qg_location.fn.processLocality(example_data);
    }

    // Process the Google Maps API data
    qg_location.fn.processLocality = function(response) {
        var json_response = JSON.parse(response);
        var all_addresses = json_response['results'];
        var target_type = "locality";
        var locality = '';

        // Check over all address matches
        for(var index = 0; index < all_addresses.length; index++) {
            var address = all_addresses[index];
            var address_components = address['address_components'];

            // Check over all address components
            for(var component_index = 0; component_index < address_components.length; component_index++) {
                var component = address_components[component_index];
                var component_types = component["types"];

                // Find the locality component
                if(component_types.indexOf(target_type) !== -1) {
                    locality = component['short_name'];
                    break; 
                }
            }
        }

        // Proceed if an address is found
        if(locality !== "") {
            var stored_data = qg_location.fn.getStoredLocation();
            stored_data['locality'] = locality;

            // Save to cookie
            qg_location.fn.saveLocationCookie(stored_data);
            
            // Notify the rest of the page
            var location_found = qg_location['vars']['event_location_found'];
            $('body').trigger('custom', [location_found]);
        }
    }

    // Visually set the location data
    qg_location.fn.setLocationName = function() {
        var stored_data = qg_location.fn.getStoredLocation();
        var locality = stored_data['locality'];

        // Update header
        $('.header-location .location-name').text(locality);
    }

    //
    // Ready
    //

    $(document).ready(function(){
        var location_id = '.header-location';

        if($(location_id).length > 0) {
            qg_location.fn.init();
        }
    });

    // Binds
    $('body').on('custom', customEventHandler);
    $('body').on('click', '.qg-location-setter .detect-location', qg_location.fn.getDeviceLocation);
    //$('body').on('click', '.qg-location-setter .detect-location', qg_location.fn.deletePositionData);
});