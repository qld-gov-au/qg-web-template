/* eslint-disable */
let qgInitAutocompleteAddress;
/* eslint-enable */

(function ($, qg) {
  'use strict';

  const el = {
    $searchWidget: $('#qg-search-widget'),
    $autoComplete: $('.qg-location-autocomplete'),
    $latitude: $('#latitude'),
    $longitude: $('#longitude'),
    $form: $('#qg-search-widget-form'),
    $geo: $('.qg-app-geocoding'),
    $errors: $('div.error-handler'),
    $result: $('.qg-result-title h2'),
  };

  let qgInitAutocompleteAddress;
  let addressSelection = false;
  let formContainer = $('.qg-fl');
  let errorMessage = $('<p class="text-danger font-italic pt-2 pl-2">No result found</p>');
  let errorHandler = $('<div class="error-handler"></div>');
  let itemFull = $('.pac-container .pac-item:first').text();
  let itemQuery = $('.pac-container .pac-item:first .pac-item-query').text();
  let firstResult = itemQuery + ' ' + itemFull.substring(itemQuery.length);

  // getting and setting input fields value using query parameter
  let setsValue = function () {
    el.$form
      .find(':input:not(:checkbox):not(:radio), select, textarea').each(function () {
        let name = $(this).attr('name');
        let getParameterVal = qg.swe.getParameterByName($(this).attr('name'));
        getParameterVal !== false
          ? $('[name="' + name + '"]').val(getParameterVal)
          : '';
      })
      .end()
      .find('input[type=checkbox], input[type=radio]')
      .each(function () {
        let name = $(this).attr('name');
        let getParameterVal = qg.swe.getParameterByName(name);
        getParameterVal !== false
          ? $('[value="' + getParameterVal + '"]').prop('checked', true)
          : '';
      });
  };
  setsValue();

  // removing hidden fields value on reset
  el.$searchWidget.find('button[type="reset"]').click(function (evt) {
    evt.preventDefault();
    el.$form
      .find(':input:not(:checkbox):not(:radio), select, textarea')
      .each(function () {
        $(this).val('');
      })
      .end()
      .find('input[type=checkbox], input[type=radio]')
      .each(function () {
        $(this).prop('checked', false);
      });
  });

  // on autoComplete blur removing hidden fields values
  el.$autoComplete.blur(function () {
    let itemFull = $('.pac-container .pac-item:first').text();
    let itemQuery = $('.pac-container .pac-item:first .pac-item-query').text();
    let firstResult = itemQuery + ' ' + itemFull.substring(itemQuery.length);
    if ($(this).val().length === 0) {
      el.$searchWidget
        .find(el.$latitude)
        .val('')
        .end()
        .find(el.$longitude)
        .val('');
    }
    if (firstResult.length > 1) {
      console.log(firstResult);
      el.$autoComplete.val(firstResult);
    } else {
      console.log(firstResult);
    }
  });
  if (el.$autoComplete.length > 0) {
    let getLocationEle = el.$geo;
    qgInitAutocompleteAddress = () => {
      /* eslint-disable */
      let qldBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-29, 138.0578426),
        new google.maps.LatLng(-9.9339, 153.63831),
        /* eslint-enable */
      );
      let inputLocationEle = el.$autoComplete;
      $.each(inputLocationEle, function () {
        let dataStrictBounds = $(this).data('strictbounds') || true;
        let options = {
          bounds: qldBounds,
          strictBounds: dataStrictBounds,
          types: ['geocode'],
        };
        /* eslint-disable */
        let autocomplete = new google.maps.places.Autocomplete(this, options);
        /* eslint-enable */
        let form = el.$form;
        //if address form exists fill the selection
        if (form.length > 0) {
          let formFields = {
            street_number: { dataType: 'street', name: 'short_name' },
            route: { dataType: 'street', name: 'long_name' },
            locality: { dataType: 'city', name: 'long_name' },
            administrative_area_level_1: {
              dataType: 'state',
              name: 'short_name',
            },
            country: { dataType: 'country', name: 'long_name' },
            postal_code: { dataType: 'zip', name: 'short_name' },
          };
          let fillInAddress = () => {
            let loc = autocomplete.getPlace();
            if (el.$errors.length > 0) {
              el.$errors.html('');
            }
            //clear form
            $.each(formFields, (i, v) => {
              form.find('input[data-type="' + v.dataType + '"]').val('');
            });
            for (let i = 0; i < loc.address_components.length; i++) {
              let type = loc.address_components[i].types[0];
              if (
                formFields[type] !== undefined &&
                formFields[type].dataType !== undefined
              ) {
                let inputEle = form.find(
                  'input[data-type="' + formFields[type].dataType + '"]',
                );
                if (inputEle.length > 0) {
                  let val =
                    inputEle.val() +
                    ' ' +
                    loc.address_components[i][formFields[type].name];
                  inputEle.val(val);
                  inputEle.change();
                }
              }
            }
          };
          autocomplete.addListener('place_changed', fillInAddress);
        } else {
          let fillInAddress = () => {
            let place = autocomplete.getPlace();
            if (el.$errors.length > 0 && el.$errors.val()) {
              el.$errors.html('');
            }
            el.$result.append(
              `near '<strong><em>${place.formatted_address}'</em></strong>`,
            );
            if (place.geometry) {
              el.$searchWidget
                .find(el.$latitude)
                .val(place.geometry.location.lat())
                .end()
                .find(el.$longitude)
                .val(place.geometry.location.lng());
            }
          };
          autocomplete.addListener('place_changed', fillInAddress);
        }
        el.$autoComplete.keydown(function (e) {
          if (addressSelection === false && $(this).val().length > 1) {
            if (e.keyCode === 13 || e.keyCode === 9) {
              e.preventDefault();
            }
          }
        });
        el.$autoComplete.keyup(function (e) {
          if ($(this).val().length > 1) {
            let reqReady = true;
            if (el.$errors.length > 0) {
              errorHandler.insertAfter(formContainer);
            }
            if (e.keyCode === 13 || e.keyCode === 9) {
              e.preventDefault();
              if (firstResult.length > 1 && reqReady === true) {
                console.log('found', firstResult);
                el.$autoComplete.val(firstResult);
                /* eslint-disable */
                let geocoder = new google.maps.Geocoder();
                /* eslint-enable */
                geocoder.geocode({ address: firstResult }, function (
                  results,
                  status,
                ) {
                  if (status === 'OK') {
                    reqReady = false;
                    if (results) {
                      el.$autoComplete.val(results[0].formatted_address);
                      let latitude = results[0].geometry.location.lat();
                      let longitude = results[0].geometry.location.lng();
                      el.$errors.html('');
                      addressSelection = true;
                      el.$searchWidget
                        .find(el.$latitude)
                        .val(latitude)
                        .end()
                        .find(el.$longitude)
                        .val(longitude);
                      setTimeout(function () {
                        reqReady = true;
                      }, 1000);
                    } else {
                      reqReady = true;
                      el.$errors.html(errorMessage);
                    }
                  } else {
                    reqReady = true;
                    if (
                      status === 'ZERO_RESULTS' ||
                      status === 'OVER_QUERY_LIMIT' ||
                      status === undefined
                    ) {
                      el.$errors.html(errorMessage);
                    }
                  }
                });
              }
            }
          } else {
            addressSelection = false;
          }
        });
      });

      //Get current location
      if (getLocationEle.length > 0) {
        $.each(getLocationEle, (i, ele) => {
          $(ele).on('click', function (event) {
            event.preventDefault();
            if (navigator.geolocation) {
              let showLocation = position => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let latlng = {
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude),
                };
                /* eslint-disable */
                let geocoder = new google.maps.Geocoder();
                /* eslint-enable */
                let locationInput = el.$autoComplete;
                el.$searchWidget
                  .find(el.$latitude)
                  .val(latitude)
                  .end()
                  .find(el.$longitude)
                  .val(longitude);
                if (locationInput.length > 0) {
                  geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === 'OK') {
                      if (el.$errors.length > 0) {
                        el.$errors.html('');
                      }
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
              let errorHandler = err => {
                if (err.code === 1) {
                  alert('Error: Access is denied!');
                } else if (err.code === 2) {
                  alert('Error: Position is unavailable!');
                }
              };
              let options = { timeout: 60000 };
              navigator.geolocation.getCurrentPosition(
                showLocation,
                errorHandler,
                options,
              );
            } else {
              // Browser doesn't support Geolocation
              window.alert('Your browser does not support Geolocation');
            }
          });
        });
      }
    };
    qg.loadGoogle(qgInitAutocompleteAddress);
  }
/* eslint-disable */
}(jQuery, qg));
/* eslint-enable */