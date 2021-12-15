/**
 * This will handle functionalities like
 * - Expand all / Collapse all link
 * - Ability to direct link to each section and expand the linked section
 * - Handles aria-expanded values
 * - Open an accordion panel if it finds #title-Of-Accordion or #id-panel-section in the url
 */
export class QgAccordion {
  constructor () {
    this.$accordion = $('.qg-accordion');
    this.$accordion_v2 = $('.qg-accordion-v2');
    this.$accHeading = $('.acc-heading');
    this.urlHashVal = window.location.hash;

    if (this.$accordion.length > 0) {
      this.accordionPanelClick();
      this.collapseAll();
      this.expandAll();
      // check and enable hashtrigger function
      if (this.urlHashVal){
        this.hashTrigger();
      }
      // enable GA tracking
      this.gaTracking();
      // legacyAccordion is to support SWE2 accordion
      this.legacyAccordion();
    }
  }

  /**
   * filterSpecialChar
   * @param {string} value - value to filter
   * @return {undefined}
   **/
  filterSpecialChar(value){
    return decodeURI(value.toLowerCase().replace(/[^a-zA-Z0-9/]/g, ''));
  }

  /**
   * hashTrigger function open matching accordion if it finds #title-Of-Accordion or #id-panel-section in the url
   * function trims down the hash value, and then it matches with the titles of the accordion, and if there is a matching title, then it open that panel
   * @return {undefined}
   **/
  hashTrigger(){
    let self = this;
    let hashValTrimmed = this.filterSpecialChar(self.urlHashVal);
    let hashValueIdMatch = self.urlHashVal.replace('#', '');
    if (hashValTrimmed.length > 0) {
      // supports ID match
      self.$accordion.find('.collapsing-section').each(function (index, titleEl){
        if ($(this).attr('id') === hashValueIdMatch){
          $(this).parent('article').find(self.$accHeading).trigger('click');
        }
      });

      // supports title match
      // check if any panel already open that worked with ID matching
      if ($('.qg-accordion--open').length <= 0){
        self.$accordion.find('.title').each(function (index, titleEl){
          if (self.filterSpecialChar($(titleEl).text()) === hashValTrimmed){
            $(this).parents(self.$accHeading).trigger('click');
          }
        });
      }
    }
  }

  /**
   * toggleOpenCloseClass function toggle the class and 'aria-expanded' value according to the accordion state
   * @param {selector} curr - target selector
   * @return {undefined}
   **/
  toggleOpenCloseClass(curr){
    if (curr.hasClass('qg-accordion--open')){
      curr.removeClass('qg-accordion--open').addClass('qg-accordion--closed');
      curr.attr('aria-expanded', 'false');
    } else {
      curr.removeClass('qg-accordion--closed').addClass('qg-accordion--open');
      curr.attr('aria-expanded', 'true');
    }
  }

  /**
   * accordionClick -> click on an accordion
   * @return {undefined}
   **/
  accordionPanelClick(){
    let self = this;
    let accHeading = self.$accordion_v2.find(self.$accHeading);
    accHeading.on('click', function (event) {
      self.toggleOpenCloseClass($(this));
    });
  }

  /**
   * keyboardAccessibility -> accordion to work with keyboard
   * @param {string} event -> click , keypress etc
   * @return {undefined}
   **/
  keyboardAccessibility(event){
    if (event.type === 'click') {
      return true;
    } else if (event.type === 'keypress') {
      var code = event.charCode || event.keyCode;
      if ((code === 32) || (code === 13)) {
        return true;
      }
    } else {
      return false;
    }
  }

  /**
   * collapseAll -> collapse all accordion on a page on clicking 'Collapse all' button
   * @return {undefined}
   **/
  collapseAll(){
    let self = this;
    // collapse all click
    // label selector is to provide backward compatibility in case projects are using old markup
    $('.qg-acc-controls .collapse, label[for=\'collapse\']').on('click keypress', function (event) {
      if (self.keyboardAccessibility(event) === true) {
        $(this).parents('.qg-accordion').find('.acc-heading').removeClass('qg-accordion--open').addClass('qg-accordion--closed');
        // backward compatible code to support SWE2 accordion
        $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', false);
        event.preventDefault();
      }
    });
  }

  /**
   * expandAll -> expand all accordion on a page on clicking 'Expand all' button
   * @return {undefined}
   **/
  expandAll(){
    let self = this;
    //expand all click
    // label selector is to provide backward compatibility in case projects are using old markup
    $('.qg-acc-controls .expand, label[for=\'expand\']').on('click keypress', function (event) {
      if (self.keyboardAccessibility(event) === true) {
        $(this).parents('.qg-accordion').find('.acc-heading').removeClass('qg-accordion--closed').addClass('qg-accordion--open');
        // backward compatible code to support SWE2 accordion
        $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', true);
        event.preventDefault();
      }
    });
  }

  /**
   * gaTracking -> enable tracking on accordion, this function adds an attribute 'data-analytics-link-group' with a acc title
   * @return {undefined}
   **/
  gaTracking(){
    this.$accordion.find('.qg-accordion--ga').each(function(){
      let title = 'accordion title - ' + $(this).find($('.title')).text();
      $(this).attr('data-analytics-link-group', title);
    });
  }

  /**
   * legacyAccordion function supports swe2 accordion in use at some places
   * @return {undefined}
   **/
  legacyAccordion(){
    let self = this;
    let accItem = $('.qg-accordion:not(.qg-accordion-v2)').find('article');
    accItem.find('.acc-heading').on('keypress', function (event) {
      if (event.target === event.currentTarget) {
        event.preventDefault();
        if (self.keyboardAccessibility(event) === true) {
          let parent = $(this).parent();
          if (parent.find('input[name="tabs"]:checked').length > 0) {
            parent.find('input[name="tabs"]').prop('checked', false);
          } else {
            parent.find('input[name="tabs"]').prop('checked', true);
          }
        }
      }
    });

    // focus heading on click
    $('input[name=tabs]').click(function () {
      $(this).parent('article').find('.acc-heading').focus();
    });

    // highlight title on hover
    accItem.hover(function () {
      accItem.find('.title').removeClass('ht');
      $(this).find('.title').addClass('ht');
    }, function () {
      accItem.find('.title').removeClass('ht');
    });
  }
}
