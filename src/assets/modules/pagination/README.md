# pagination
## Quick Summary
A jQuery plugin for paginating through any number of DOM elements

## Dependencies
 - jquery
## Usage
Following script would paginate the selected element
```
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
```
```item_container_id``` = id or class of list (ol/ul) that needs to be paginated
```items_per_page``` = number of items per page
```num_page_links_to_display``` = number of page links to display between previous and next
```show_first_last``` = boolean value to show/hide page links to first page and last page
```slideTransition``` = boolean value to enable/disable page transition animation
```nav_label_prev``` = display name for page link to previous page
```nav_label_next``` = display name for page link to next page
