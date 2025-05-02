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
    this.$inputField = $('.qg-location-autocomplete');
    this.$inpuFieldContainer = $('.qg-fl');
    this.$latitude = $('.qg-search-widget__latitude');
    this.$longitude = $('.qg-search-widget__longitude');
    this.$form = $('.qg-search-widget-form');
    this.$getCurrentLocIcon = $('.qg-app-geocoding');
    this.apiKey = 'qldonline'; // TODO: sort out PLSPlus API keys

    if (this.$searchWidget.length > 0 || this.$inputField.length > 0){
      console.log('Hello, world!');
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
      const name = $(this).attr('name');
      const getParameterVal = qg.swe.getParameterByName($(this).attr('name'));
      if (getParameterVal) {
        $('[name="' + name + '"]').val(getParameterVal);
      }
    }).end().find('input[type=checkbox], input[type=radio]').each(function () {
      const name = $(this).attr('name');
      const getParameterVal = qg.swe.getParameterByName(name);
      if (getParameterVal) {
        $('[value="' + getParameterVal + '"]').prop('checked', true);
      }
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
    const self = this;
    this.$inputField.blur(function () {
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
    const self = this;
    if (this.$getCurrentLocIcon.length > 0) {
      $.each(this.$getCurrentLocIcon, (i, ele) => {
        $(ele).on('click', function (event) {
          event.preventDefault();
          if (navigator.geolocation) {
            const showLocation = (position) => {
              // get latitude and longitude
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              const latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
              const geocoder = new google.maps.Geocoder();
              const locationInput = $(this).parent().find(self.$inputField);
              // Insert latitude and longitude value to the hidden input fields
              self.$searchWidget.find(self.$latitude).val(latitude)
                .end()
                .find(self.$longitude).val(longitude);
              // get address using latitude and longitude from Google maps api
              geocoder.geocode({ location: latlng }, (results, status) => {
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
            const errorHandler = (err) => {
              if (err.code === 1) {
                alert('Error: Access is denied!');
              } else if (err.code === 2) {
                alert('Error: Position is unavailable!');
              }
            };
            const options = { timeout: 60000 };
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
   *
   * @param query
   * @return {Promise<*>}
   */
  async _queryAutocomplete(query) {
    let url = `https://www.data.qld.gov.au/api/3/action/datastore_search_sql?sql=${encodeURIComponent(`SELECT * from \"53537486-245a-4e4a-b7cd-7b2bdacdd896\" where postcode='${query.toUpperCase()}' or locality='${query.toUpperCase()}'`)}&_=1737522535876`;
    let response = await fetch(url);
    let data = await response.json();
    const ckanResults = data.result?.records
      .filter((result) => result?.postcode.toString()[0] !== '9')
      .map((result) => {
        return {
          result: `${result.locality} ${result.state_code} ${result.postcode}`,
          longitude: result.longitude,
          latitude: result.latitude,
        };
      })
      .sort((a, b) => {
        if (a.result.includes('QLD') && !b.result.includes('QLD')) {
          return -1;
        } else if (!a.result.includes('QLD') && b.result.includes('QLD')) {
          return 1;
        } else {
          return a.result.localeCompare(b.result);
        }
      });

    if (!this.apiKey_) {
      return ckanResults;
    } else {
      url = `https://www.address.services.qld.gov.au/pls-plus-qg/AutoCompleteAddress?query=${encodeURIComponent(query)}&apiKey=${this.apiKey}`;
      response = await fetch(url);
      data = await response.json();
      let plsPlusResults = data.AutoCompleteAddressResponse?.AutoCompleteAddressResult?.string;
      plsPlusResults = Array.isArray(plsPlusResults) ? plsPlusResults : [plsPlusResults];
      plsPlusResults = plsPlusResults
        .filter((result) => !!result)
        .map((result) => {
          return {
            result,
            longitude: '',
            latitude: '',
          };
        });

      return ckanResults.concat(plsPlusResults);
    }
  }

  /**
   *
   * @param query
   * @return {Promise<{lng: string, lat: string}|{lng: *, lat: *}>}
   */
  async _parseAddress(query) {
    if (!this.apiKey) {
      return { lng: '153.0251227', lat: '-27.46977074' };
    }

    const url = `https://www.address.services.qld.gov.au/pls-plus-qg/ParseAddress?query=${encodeURIComponent(query)}&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.ParseAddressResponse.ParseAddressResult.Results.Result) {
      let record = data.ParseAddressResponse.ParseAddressResult.Results.Result;
      if (Array.isArray(record)) {
        record = record[0];
      }
      return { lng: record.Geocode.Longitude, lat: record.Geocode.Latitude };
    } else {
      console.log('Address not found');
      return { lng: '153.0251227', lat: '-27.46977074' };
    }
  }

  /**
   *
   * @param node
   */
  _autocompleteItemSelected(node) {
    const selectedAddress = $(node).text();
    const searchBox = $(node).closest(this.$searchWidget).find(this.$inputField);
    const autocompleteBox = $(node).closest(this.$searchWidget).find('.qg-location-autocomplete-results');
    const longitude = $(node).closest(this.$searchWidget).find(this.$longitude);
    const latitude = $(node).closest(this.$searchWidget).find(this.$latitude);
    searchBox.val(selectedAddress);
    autocompleteBox.hide();

    if ($(node).attr('longitude') && $(node).attr('latitude')) {
      longitude.val($(node).attr('longitude'));
      latitude.val($(node).attr('latitude'));
    } else {
      const { lng, lat } = this._parseAddress(selectedAddress);
      longitude.val(lng);
      latitude.val(lat);
    }
  }

  /**
   * _addressAutocomplete -> sets up autocomplete
   * @return {undefined}
   **/
  _addressAutocomplete () {
    const self = this;
    $.each(self.$inputField, () => {
      const autocompleteBox = $('.qg-location-autocomplete-results');
      autocompleteBox.insertAfter(this);

      $(this).on('keypress', async () => {
        const query = $(this).val();
        if (query.length < 3) {
          autocompleteBox.hide();
          return;
        }

        const suggestions = await self._queryAutocomplete(query);
        if (suggestions.length > 0) {
          autocompleteBox.empty();
          suggestions.forEach(suggestion => {
            if (suggestion) {
              autocompleteBox.append(`<div class="qg-location-autocomplete-item" longitude="${suggestion.longitude}" latitude="${suggestion.latitude}">${suggestion.result}</div>`);
              autocompleteBox.show();
            }
          });
        } else {
          autocompleteBox.hide();
        }
      });
    });

    $(document).on('click', '.qg-location-autocomplete-item', () => {
      self._autocompleteItemSelected(this);
    });

    // Close autocomplete when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest(self.$inputField).length && !$(e.target).closest('.qg-location-autocomplete-results').length) {
        $('.qg-location-autocomplete-results').each(() => {
          $(this).hide();
        });
      }
    });

    /*
    const self = this;
    const googleAddressAutocomplete = function (){
      const qldBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-29, 138.0578426),
        new google.maps.LatLng(-9.9339, 153.63831),
      );
      // set events on all autocomplete fields (there can be more than one autocomplete on a same page)
      $.each(self.$inpuField, function () {
        const dataStrictBounds = $(this).data('strictbounds') || true;
        const options = {
          bounds: qldBounds,
          strictBounds: dataStrictBounds,
          types: ['geocode'],
        };
        const autocomplete = new google.maps.places.Autocomplete(this, options);

        // add lat and lng values after a option is selection from the autocomplete options
        autocomplete.addListener('place_changed', function(){
          const place = autocomplete.getPlace();
          if (place.geometry) {
            self.$searchWidget.find(self.$latitude).val(place.geometry.location.lat())
              .end()
              .find(self.$longitude).val(place.geometry.location.lng());
          }
        });
      });
    };
     */
    // load google api with a valid key
    loadGoogleApi._loadGoogleApi(googleAddressAutocomplete);
  }

  /**
   * _keypress -> keypress event track any enter or tab on input field
   * If there is a enter or tab press then it takes the first result
   * @return {undefined}
   **/
  _keypress () {
    const self = this;

    self.$inputField.on('keydown', async function(event) {
      if (event.key === 'Enter' || event.key === 'Tab') {
        event.preventDefault();
        const autocompleteResults = $(this).closest(self.$searchWidget).find('.qg-location-autocomplete-results');
        self._autocompleteItemSelected(autocompleteResults.children()[0]);
      }
    });

    /*
    // eslint-disable-next-line no-unused-vars
    let addressSelection = false;
    let reqReady = true;

    self.$inpuField.keypress(function (event) {
      if ($(this).val().length >= 1) {
        if (event.keyCode === 13 || event.keyCode === 9) {
          event.preventDefault();
          // get the value from the autocomplete options
          const itemFull = $('.pac-container .pac-item:first').text();
          const itemQuery = $('.pac-container .pac-item:first .pac-item-query').text();
          const firstResult = itemQuery + ' ' + itemFull.substring(itemQuery.length);
          // check if results are there
          if (firstResult.length > 1 && reqReady === true) {
            self.$inpuField.val(firstResult);
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: firstResult }, function (results, status) {
              if (status === 'OK') {
                reqReady = false;
                if (results) {
                  $('.qg-location-autocomplete').val(results[0].formatted_address);
                  const latitude = results[0].geometry.location.lat();
                  const longitude = results[0].geometry.location.lng();
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
     */
  }
}
