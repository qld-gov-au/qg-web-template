/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 On Maps Autocomplete
- https://www.qld.gov.au/transport/contacts/centres/_nocache
- https://www.qld.gov.au/law/legal-mediation-and-justice-of-the-peace/about-justice-of-the-peace/search-for-your-nearest-jp-or-cdec
 */

/*global qg, google*/
import { QgLoadGoogleApi } from '../../utils/qg-load-google-api';
const loadGoogleApi = new QgLoadGoogleApi();

export class QgAddressAutocomplete {
  constructor () {
    this.$searchWidget = $('.qg-search-widget');
    this.$inpuField = $('.qg-location-autocomplete');
    this.$inpuFieldContainer = $('.qg-fl');
    this.$latitude = $('.qg-search-widget__latitude');
    this.$longitude = $('.qg-search-widget__longitude');
    this.$form = $('.qg-search-widget-form');
    this.$getCurrentLocIcon = $('.qg-app-geocoding');

    if (this.$searchWidget.length > 0 || this.$inpuField.length > 0){
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
  _setValFromUrlParameters () {
    this.$form.find(':input:not(:checkbox):not(:radio), select, textarea').each(function () {
      let name = $(this).attr('name');
      let getParameterVal = qg.swe.getParameterByName($(this).attr('name'));
      getParameterVal !== false ? $('[name="' + name + '"]').val(getParameterVal) : '';
    }).end().find('input[type=checkbox], input[type=radio]').each(function () {
      let name = $(this).attr('name');
      let getParameterVal = qg.swe.getParameterByName(name);
      getParameterVal !== false ? $('[value="' + getParameterVal + '"]').prop('checked', true) : '';
    });
  }

  /**
   * _resetValue -> reset form values
   * @return {undefined}
   **/
  _resetValue () {
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
  _onBlue () {
    let self = this;
    this.$inpuField.blur(function () {
      console.log('blur');
      if ($(this).val().length === 0) {
        this.$searchWidget.find(self.$latitude).val('')
          .end()
          .find(self.$longitude).val('');
      }
    });
  }

  /**
   * _getCurrentLocation -> get current location
   * @return {undefined}
   **/
  _getCurrentLocation (){
    let self = this;
    if (this.$getCurrentLocIcon.length > 0) {
      $.each(this.$getCurrentLocIcon, (i, ele) => {
        $(ele).on('click', function (event) {
          event.preventDefault();
          if (navigator.geolocation) {
            let showLocation = (position) => {
              // get latitude and longitude
              let latitude = position.coords.latitude;
              let longitude = position.coords.longitude;
              let latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
              let geocoder = new google.maps.Geocoder();
              let locationInput = $(this).parent().find(self.$inpuField);
              // Insert latitude and longitude value to the hidden input fields
              self.$searchWidget.find(self.$latitude).val(latitude)
                .end()
                .find(self.$longitude).val(longitude);
              // get address using latitude and longitude from Google maps api
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
  _addressAutocomplete () {
    let self = this;
    let googleAddressAutocomplete = function (){
      let qldBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-29, 138.0578426),
        new google.maps.LatLng(-9.9339, 153.63831),
      );
      // set events on all autocomplete fields (there can be more than one autocomplete on a same page)
      $.each(self.$inpuField, function () {
        let dataStrictBounds = $(this).data('strictbounds') || true;
        let options = {
          bounds: qldBounds,
          strictBounds: dataStrictBounds,
          types: ['geocode'],
        };
        let autocomplete = new google.maps.places.Autocomplete(this, options);

        // add lat and lng values after a option is selection from the autocomplete options
        autocomplete.addListener('place_changed', function(){
          let place = autocomplete.getPlace();
          if (place.geometry) {
            self.$searchWidget.find(self.$latitude).val(place.geometry.location.lat())
              .end()
              .find(self.$longitude).val(place.geometry.location.lng());
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
  _keypress () {
    let self = this;
    // eslint-disable-next-line no-unused-vars
    let addressSelection = false;
    let reqReady = true;

    self.$inpuField.keypress(function (event) {
      if ($(this).val().length >= 1) {
        if (event.keyCode === 13 || event.keyCode === 9) {
          event.preventDefault();
          // get the value from the autocomplete options
          let itemFull = $('.pac-container .pac-item:first').text();
          let itemQuery = $('.pac-container .pac-item:first .pac-item-query').text();
          let firstResult = itemQuery + ' ' + itemFull.substring(itemQuery.length);
          // check if results are there
          if (firstResult.length > 1 && reqReady === true) {
            self.$inpuField.val(firstResult);
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': firstResult }, function (results, status) {
              if (status === 'OK') {
                reqReady = false;
                if (results) {
                  $('.qg-location-autocomplete').val(results[0].formatted_address);
                  let latitude = results[0].geometry.location.lat();
                  let longitude = results[0].geometry.location.lng();
                  addressSelection = true;
                  self.$searchWidget.find(self.$latitude).val(latitude)
                    .end()
                    .find(self.$longitude).val(longitude);
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
}
