/*global qg, jQuery, google*/

let qgInitAutocompleteAddress;

/**
 * Gets parameter value
 * @param {string} name - parameter name
 * @param {string} url - url where searching needs to be performed
 * @returns {*} - returns the parameter value
 */
function getParameterByName (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  let results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * Checks value if exist on URL parameter then sets the value
 * @param {string } name - name of the parameter
 * @param {string} id  - id of the parameter in HTML
 */
function setValue (name, id) {
  if (getParameterByName(name)) {
    if ($('#' + id + '').is('select')) {
      $('#' + id + '').add('option[value="' + getParameterByName(name) + '"]').attr('selected', 'selected');
    } else {
      $('#' + id + '').val(getParameterByName(name));
    }
  }
}

(function (qg, $) {
  'use strict';
  let inputLocationId = 'qg-location-autocomplete';
  const el = {
    $searchWidget: $('.qg-search-widget'),
    $autoComplete: $('#qg-location-autocomplete'),
    $latitude: $('#lat'),
    $longitude: $('#lng'),
  };

  // getting and setting input fields value using query parameter
  setValue('location', 'qg-location-autocomplete');
  setValue('latitude', 'lat');
  setValue('longitude', 'lng');
  setValue('distance', 'distance');

  // removing hidden fields value on reset
  el.$searchWidget.find('button[type="reset"]').click(function (evt) {
    evt.preventDefault();
    el.$searchWidget.find($('#distance option:selected')).removeAttr('selected');
    el.$searchWidget.find('#lat').val('');
    el.$searchWidget.find('#lng').val('');
    el.$searchWidget.find('#search-widget-form').get(0).reset();
  });

  // on autoComplete blur removing hidden fields values
  el.$autoComplete.blur(function () {
    if ($(this).val().length === 0) {
      el.$searchWidget.find(el.$latitude).val('');
      el.$searchWidget.find(el.$longitude).val('');
    }
  });

  if ($('.' + inputLocationId).length > 0) {
    let getLocationEle = $('.qg-app-geocoding');
    qgInitAutocompleteAddress = () => {
      let qldBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-29, 138.0578426),
        new google.maps.LatLng(-9.9339, 153.63831));
      let inputLocationEle = document.getElementsByClassName(inputLocationId);
      let addressFormId = 'qg-address-autocomplete';

      $.each(inputLocationEle, function () {
        let dataStrictBounds = $(this).data('strictbounds') || true;
        let options = {
          bounds: qldBounds,
          strictBounds: dataStrictBounds,
          types: ['geocode'],
        };
        let autocomplete = new google.maps.places.Autocomplete(this, options);

        //if address form exists fill the selection
        let form = $(this).siblings('.' + addressFormId);
        if (form.length > 0) {
          let formFields = {
            street_number: {dataType: 'street', name: 'short_name'},
            route: {dataType: 'street', name: 'long_name'},
            locality: {dataType: 'city', name: 'long_name'},
            administrative_area_level_1: {dataType: 'state', name: 'short_name'},
            country: {dataType: 'country', name: 'long_name'},
            postal_code: {dataType: 'zip', name: 'short_name'},
          };
          let fillInAddress = () => {
            let loc = autocomplete.getPlace();
            //clear form
            $.each(formFields, (i, v) => {
              form.find('input[data-type="' + v.dataType + '"]').val('');
            });

            for (let i = 0; i < loc.address_components.length; i++) {
              let type = loc.address_components[i].types[0];
              if (formFields[type] !== undefined && formFields[type].dataType !== undefined) {
                let inputEle = form.find('input[data-type="' + formFields[type].dataType + '"]');
                if (inputEle.length > 0) {
                  let val = inputEle.val() + ' ' + loc.address_components[i][formFields[type].name];
                  inputEle.val(val);
                  inputEle.change();
                }
              }
            }
          };
          autocomplete.addListener('place_changed', fillInAddress);
          // $(this).on('change', google.maps.event.trigger(autocomplete, 'place_changed'))
        } else {
          let fillInAddress = () => {
            var place = autocomplete.getPlace();
            el.$searchWidget.find(el.$latitude).val(place.geometry.location.lat());
            el.$searchWidget.find(el.$longitude).val(place.geometry.location.lng());
          };
          autocomplete.addListener('place_changed', fillInAddress);
        }
      });

      //Get current location
      if (getLocationEle.length > 0) {
        $.each(getLocationEle, (i, ele) => {
          $(ele).on('click', function (event) {
            event.preventDefault();
            if (navigator.geolocation) {
              let showLocation = (position) => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
                let geocoder = new google.maps.Geocoder();
                let locationInput = $(this).siblings('.' + inputLocationId);
                el.$searchWidget.find(el.$latitude).val(latitude);
                el.$searchWidget.find(el.$longitude).val(longitude);
                if (locationInput.length > 0) {
                  geocoder.geocode({'location': latlng}, (results, status) => {
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
                }
              };
              let errorHandler = (err) => {
                if (err.code === 1) {
                  alert('Error: Access is denied!');
                } else if (err.code === 2) {
                  alert('Error: Position is unavailable!');
                }
              };
              let options = {timeout: 60000};

              navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            } else {
              // Browser doesn't support Geolocation
              window.alert('Your browser doesnot support Geolocation');
            }
          });
        });
      }
    };
    qg.loadGoogle(qgInitAutocompleteAddress);
  }
}(qg, jQuery));
