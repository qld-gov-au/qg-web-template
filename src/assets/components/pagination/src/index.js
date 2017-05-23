//plugin
import './lib/jquery.pajinate';


// init code
$(function () { 
  	$('#search-results-container').pajinate({
            item_container_id: '#search-results',
            nav_panel_id: '.pagination',
            items_per_page: 10,
            num_page_links_to_display: 5,
            show_first_last: !1,
            slideTransition: !0,
            nav_label_prev: 'Previous',
            nav_label_next: 'Next'
        });
});
