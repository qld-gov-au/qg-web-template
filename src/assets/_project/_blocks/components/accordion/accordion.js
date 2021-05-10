/**
 * This will handle functionalities like
 * - Expand all / Collapse all link
 * - Ability to direct link to each section and expand the linked section
 * - Handles aria-expanded values
 */

(function ($) {
  var qgAccordion = {
    config: {
      $accordion: $('.qg-accordion'),
      // qg-accordion-v2 adds accessibility enhancement to the exiting accordion. The reason for creating a new selector is to maintain backward compatibility with the existing accordion (swe2 accordion).
      $accordion_v2: $('.qg-accordion-v2'),
      $accHeading: $('.acc-heading'),
    },
    /**
     * Initialise qgAccordion
     * @return {undefined}
     **/
    init: function () {
      if (this.config.$accordion.length > 0) {
        this.accordionClick();
        this.collapseAll();
        this.expandAll();
        this.hashTrigger();
        // enable GA tracking
        this.gaTracking();
        // legacyAccordion is to support SWE2 accordion
        this.legacyAccordion();
      }
    },
    urlHash: function () {
      return decodeURI(window.location.hash.replace(/\/|#|{|}|\+|\\/g, ''));
    },
    /**
     * hashTrigger function open matching accordion if it finds #title-Of-Accordion in the url
     * @return {undefined}
     **/
    hashTrigger: function () {
      let hashVal = this.urlHash();
      if (hashVal.length > 0) {
        let findHashVal = this.config.$accordion.find('#' + hashVal + '');
        console.log(findHashVal);
        findHashVal.click();
        findHashVal.parent('article').find('.acc-heading').focus();
      }
    },
    toggleOpenCloseClass: function (curr) {
      if (curr.hasClass('qg-accordion--open')) {
        curr.removeClass('qg-accordion--open').addClass('qg-accordion--closed');
        curr.attr('aria-expanded', 'false');
      } else {
        curr.removeClass('qg-accordion--closed').addClass('qg-accordion--open');
        curr.attr('aria-expanded', 'true');
      }
    },
    /**
     * accordionClick -> click on an accordion
     * @return {undefined}
     **/
    accordionClick: function () {
      let self = this;
      let accHeading = this.config.$accordion_v2.find(this.config.$accHeading);
      accHeading.on('click', function (event) {
        self.toggleOpenCloseClass($(this));
      });
    },
    /**
     * keyboardAccessibility -> accordion to work with keyboard
     * @param {string} event -> click , keypress etc
     * @return {undefined}
     **/
    keyboardAccessibility: function (event) {
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
    },
    /**
     * collapseAll -> collapse all accordion on a page
     * @return {undefined}
     **/
    collapseAll: function () {
      var self = this;
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
    },
    /**
     * expandAll -> expand all accordion on a page
     * @return {undefined}
     **/
    expandAll: function () {
      var self = this;
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
    },
    /**
     * gaTracking -> enable tracking on accordion, this function adds an attribute 'data-analytics-link-group' with a acc title
     * @return {undefined}
     **/
    gaTracking: function () {
      this.config.$accordion.find('.qg-accordion--ga').each(function () {
        let title = 'accordion title - ' + $(this).find($('.title')).text();
        $(this).attr('data-analytics-link-group', title);
      });
    },
    /**
     * legacyAccordion function supports swe2 accordion in use at some places
     * @return {undefined}
     **/
    legacyAccordion: function () {
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
    },
  };
  qgAccordion.init();
}(jQuery));
