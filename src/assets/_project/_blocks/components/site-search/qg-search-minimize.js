/*
FAQ -
Q1 Where is this class in use, and what it does ?
A1 On pages with multiple global search, this class minimizes one search at a time in order to enhance the user experience.
- https://www.qld.gov.au/services
- https://www.qld.gov.au/search
 */

export class QgSearchMinimize {
  constructor () {
    this.smBreakPoint = 992;
    this.searchStateContainer = 'qg-search-state__container';
    this.$globalSearchForm = $('#qg-global-search-form');
    this.$siteSearchInput = $('.qg-search-site__input');
    this.$multipleForms = $('.qg-site-search__multiple-forms');
  }

  init() {
    this.onResize();
    // trigger resize on page load
    $(window).trigger('resize');
  }

  addSearchToggleMarkup() {
    let self = this;
    if ($('.' + self.searchStateContainer).length <= 0){
      // 'Search all information & services' markup which on click show the global search form
      var searchStateContainerMarkup = `<div class="qg-search-state__container  align-self-center row"> <i class="fa fa-search" aria-hidden="true"></i>
<p class="ml-2 mb-0">Search all information and services</p> </div>`;

      $(searchStateContainerMarkup).insertBefore(self.$globalSearchForm);
      // hide global search form on page load
      self.$globalSearchForm.hide();
    }
  }

  onServiceFinderSearchClick () {
    let self = this;
    // toggle global search on interacting with the service finder search
    self.$multipleForms.find(self.$siteSearchInput).click(function() {
      if ($(window).width() >= self.smBreakPoint) {
        self.$globalSearchForm.hide();
        $('.' + self.searchStateContainer).show();
      }
    });
  }

  onSearchStateContainerClick (){
    let self = this;
    // toggle global search form on click
    $('.' + self.searchStateContainer).on('click', function (){
      $(this).hide();
      self.$globalSearchForm.show('fast');
    });
  }

  onResize() {
    let self = this;
    let resizeTimer;
    $(window).resize(function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function (){
        if ($(this).width() >= self.smBreakPoint) {
          self.$globalSearchForm.hide();
          if ($('#qg-search-query').is(':hidden')){
            $('.' + self.searchStateContainer).show();
          }
          self.addSearchToggleMarkup();
          self.onServiceFinderSearchClick();
          self.onSearchStateContainerClick();
        } else {
          self.$globalSearchForm.removeAttr('style').removeClass('show');
          $('.' + self.searchStateContainer).hide();
        }
      }, 0);
    });
  }
}

