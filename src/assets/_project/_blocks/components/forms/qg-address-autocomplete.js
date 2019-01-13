/*global qg, jQuery, google*/
let qgInitAutocompleteAddress;

(function (qg, $) {
  'use strict';
  let inputLocationId = 'qg-location-autocomplete';
  let locationSelectionInProgress = true;
  let geolocate, locationBounds;

  const el = {
    $searchWidget: $('#qg-search-widget'),
    $autoComplete: $('.qg-location-autocomplete'),
    $form: $('#qg-search-widget-form'),
    $latitude: $('.latitude'),
    $longitude: $('.longitude'),
    $subpremise: $('.qg-app-subpremise'),
    $streetnumber: $('.qg-app-street_number'),
    $addressline1: $('.qg-app-address_line1'),
    $city: $('.qg-app-city'),
    $suburb: $('.qg-app-suburb'),
    $postcode: $('.qg-app-postcode'),
    $state: $('.qg-app-state'),
  };

  // getting and setting input fields value using query parameter
  var setsValue = function () {
    el.$form.find(':input:not(:checkbox):not(:radio), select, textarea').each(function () {
      let name = $(this).attr('name');
      let getParameterVal = qg.swe.getParameterByName($(this).attr('name'));
      getParameterVal !== false ? $('[name="' + name + '"]').val(getParameterVal) : '';
    }).end().find('input[type=checkbox], input[type=radio]').each(function () {
      let name = $(this).attr('name');
      let getParameterVal = qg.swe.getParameterByName(name);
      getParameterVal !== false ? $('[value="' + getParameterVal + '"]').prop('checked', true) : '';
    });
  };
  setsValue();

  el.$autoComplete.keydown(function (e) {
    if (event.keyCode === 13 && locationSelectionInProgress) {
      e.preventDefault();
      e.stopPropagation();
      //el.$autoComplete.trigger('place_changed');
    }
    /** else if (event.keyCode === 13 || event.keyCode === 9) {
      if (!locationSelectionInProgress) {
        e.preventDefault();
        setTimeout(
          function() {
            //el.$form.submit();
          }, 500);
        }
      } **/
  });

  el.$autoComplete.keyup(function () {
    if ($(this).val().length > 3) {
      //Need clarification
      //console.log('API request');
    }
  });

  // removing hidden fields value on reset
  el.$searchWidget.find('button[type="reset"]').click(function (evt) {
    evt.preventDefault();
    el.$form.find(':input:not(:checkbox):not(:radio), select, textarea').each(function () {
      $(this).val('');
    }).end().find('input[type=checkbox], input[type=radio]').each(function () {
      $(this).prop('checked', false);
    });
  });

  // on autoComplete blur removing hidden fields values
  el.$autoComplete.blur(function () {
    if ($(this).val().length === 0) {
      el.$searchWidget.find(el.$latitude).val('')
        .end()
        .find(el.$longitude).val('');
    }
  });

  if (el.$autoComplete.length > 0) {
    let getLocationEle = $('.qg-app-geocoding');
    if (getLocationEle) {
        if (navigator.geolocation) {
          console.log('true!');
          navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {lat: position.coords.latitude, lng: position.coords.longitude};
            console.log(geolocation);
            locationBounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(geolocate.lat),
              new google.maps.LatLng(geolocation.lng));
              let dataStrictBounds = $(this).data('strictbounds') || true;
              let options = {
                bounds: locationBounds,
                strictBounds: dataStrictBounds,
                types: ['geocode'],
              };
              el.$searchWidget.find(el.$latitude).val(geolocation.lat)
                  .end()
                  .find(el.$longitude).val(geolocation.lng);
              var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
              });
              el.$autoComplete.setBounds(circle.getBounds());
              //let autocomplete = new google.maps.places.Autocomplete(this, options);
              //autocomplete.addListener('place_changed', fillInAddress);
            });
          } else {
            locationBounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(-29, 138.0578426),
              new google.maps.LatLng(-9.9339, 153.63831));
          }
    }

    qgInitAutocompleteAddress = () => {
      let inputLocationEle = $('.' + inputLocationId);
      let addressFormId = 'qg-address-autocomplete';

      $.each(inputLocationEle, function () {
        let dataStrictBounds = $(this).data('strictbounds') || true;
        let options = {
          bounds: locationBounds,
          strictBounds: dataStrictBounds,
          types: ['geocode'],
        };

        let formFields = {
          street_number: { dataType: 'street', name: 'short_name' },
          route: { dataType: 'street', name: 'long_name' },
          locality: { dataType: 'city', name: 'long_name' },
          administrative_area_level_1: { dataType: 'state', name: 'short_name' },
          country: { dataType: 'country', name: 'long_name' },
          postal_code: { dataType: 'zip', name: 'short_name' },
        };

        var componentForm = {
          street_number: 'short_name',
          route: 'long_name',
          locality: 'long_name',
          administrative_area_level_1: 'short_name',
          country: 'long_name',
          postal_code: 'short_name'
        };

        let autocomplete = new google.maps.places.Autocomplete(this, options);

        let form = $(this).siblings('.' + addressFormId);
        if (form.length > 0) {
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
            locationSelectionInProgress = false;
            var place = autocomplete.getPlace();
            console.log(place);
            $('.qg-result-title h2').append(`near '<strong><em>${place.formatted_address}'</em></strong>`);
            if (place.geometry) {
              //Lat/Long
              el.$searchWidget.find(el.$latitude).val(place.geometry.location.lat())
                .end()
                .find(el.$longitude).val(place.geometry.location.lng());
            }
            if (place.address_components) {
              //Format sub premise address
              let formattedAddressValArray = [];
              let ADDRESS_SUBPREMISE_REGEX = /^([0-9]+\/)[0-9]+\s.*/;
              let addressSubpremiseMatch = $('.' + inputLocationId).val().match(ADDRESS_SUBPREMISE_REGEX);

              let addressSubpremisePart = '';

              // should get a length of two if matched. The full match, followed by the subpremise prefix
              if (addressSubpremiseMatch != null && addressSubpremiseMatch.length === 2) {
                addressSubpremisePart = addressSubpremiseMatch[1];
              }

              // Get each component of the address from the place details and fill the corresponding field on the form.
              for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];
                var componentsVal = place.address_components[i][componentForm[addressType]];
                switch (addressType) {
                  case 'street_number':
                    if (el.$form.find(el.$streetnumber)) {
                      el.$streetnumber.val(componentsVal);
                    }
                    formattedAddressValArray[i] = addressSubpremisePart + componentsVal;
                    break;
                  case 'route':
                    if (el.$form.find(el.$addressline1)) {
                      el.$addressline1.val(componentsVal);
                    }
                    formattedAddressValArray[i] = componentsVal + ',';
                    break;
                  case 'locality':
                    if (el.$form.find(el.$suburb)) {
                      el.$suburb.val(componentsVal);
                    }
                    formattedAddressValArray[i] = componentsVal;
                    break;
                  case 'administrative_area_level_1':
                    if (el.$form.find(el.$state)) {
                      el.$state.val(componentsVal);
                    }
                    formattedAddressValArray[i] = componentsVal;
                    break;
                  case 'administrative_area_level_2':
                    if (el.$form.find(el.$city)) {
                      el.$city.val(componentsVal);
                    }
                    console.log(componentsVal);
                    formattedAddressValArray[i] = componentsVal;
                    break;
                  case 'postal_code':
                    if (el.$form.find(el.$postcode)) {
                      el.$postcode.val(componentsVal);
                    }
                    formattedAddressValArray[i] = componentsVal;
                    break;
                  default:
                    break;
                }
              }
              //Set subpremise number
              if (addressSubpremisePart.indexOf('/')) {
                addressSubpremisePart = addressSubpremisePart.replace('/', '');
                el.$subpremise.val(addressSubpremisePart);
              } else {
                el.$subpremise.val(addressSubpremisePart);
              }
              // update selected address to our manipulated address for consistency
              console.log(formattedAddressValArray);
              $(el.$autoComplete).val(formattedAddressValArray.join(' '));
            }
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
                let latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
                let geocoder = new google.maps.Geocoder();
                let locationInput = $(this).siblings('.' + inputLocationId);
                el.$searchWidget.find(el.$latitude).val(latitude)
                  .end()
                  .find(el.$longitude).val(longitude);
                if (locationInput.length > 0) {
                  geocoder.geocode({ 'location': latlng }, (results, status) => {
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
              let options = { timeout: 60000 };

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
