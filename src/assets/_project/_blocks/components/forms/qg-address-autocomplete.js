/*global qg, google*/
console.log('%c inside qg address automcomplete V1', 'background: #222; color: #bada55');

export class QgAddressAutocomplete {
  constructor () {
    this.$searchWidget = $('.qg-search-widget');
    this.$inpuField = $('.qg-location-autocomplete');
    this.$latitude = $('.qg-search-widget__latitude');
    this.$longitude = $('.qg-search-widget__longitude');
    this.$form = $('.qg-search-widget-form');
    this.$getCurrentLocIcon = $('.qg-app-geocoding');

    this._setValFromUrlParameters();
    this._resetValue();
    this._onBlue();
    this._getCurrentLocation();
    this._addressAutocomplete();
  }

  /**
   * onbtnClick -> clicking quick exit button a page
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
   * onbtnClick -> clicking quick exit button a page
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
   * onbtnClick -> clicking quick exit button a page
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
   * onbtnClick -> clicking quick exit button a page
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
              console.log(self, 'inside click function');
              // fill latitude and longitude value
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
   * onbtnClick -> clicking quick exit button a page
   * @return {undefined}
   **/
  _addressAutocomplete () {
    let self = this;
    let googleAddressAutocomplete = function (){
      let qldBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-29, 138.0578426),
        new google.maps.LatLng(-9.9339, 153.63831),
      );
      $.each(self.$inpuField, function () {
        let dataStrictBounds = $(this).data('strictbounds') || true;
        let options = {
          bounds: qldBounds,
          strictBounds: dataStrictBounds,
          types: ['geocode'],
        };
        // eslint-disable-next-line no-new
        new google.maps.places.Autocomplete(this, options);
      });
    };
    // load google api with a valid key
    qg.loadGoogle(googleAddressAutocomplete);
  }
}
