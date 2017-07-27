/* globals qg */
$(window).on('load', function () {
  //Trigger for pagination
  $('#paginate-container').pajinate({
    item_container_id: '#paginate-body',
    nav_panel_id: '.pagination',
    items_per_page: 5,
    num_page_links_to_display: 5,
    show_first_last: false,
    slideTransition: true,
    nav_label_prev: 'Previous',
    nav_label_next: 'Next',

  });

  //Trigger for Data
  var dataTrigger = function () {
    $('.data').on('click', function () {
      var lim = $(this).attr('data-value');
      $('.search-result').html('loading...');
      qg.data.get('data.qld.gov.au', 'Select * from "0647759d-9f68-44f9-bd7e-eb96d37d11e4" LIMIT ' + lim, {
        cache: !0,
        modalCloseButtonImage: 'assets/images/close.png',
        successCallback: function (data) {
          if (data.result.records.length > 0) {
            $('.search-result').html('');
            $.each(data.result.records, function (k, v) {
              $('.search-result').append(v.Title + '<br>');
            });
          } else {
            $('.search-result').html('No records found');
          }
        },
      });
    });
  };
  dataTrigger();

  //Trigger to show status box
  var statusTrigger = function () {
    $('.status-btn').on('click', function () {
      $(document).status('show', {
        status: 'fail',
        lightbox: true,
        title: 'Error loading data',
        body: '<p>We were unable to retrieve data.</p>Please try again later.',
        closeButtonImage: 'assets/images/close.png'
      });
    });
  };
  statusTrigger();
});
