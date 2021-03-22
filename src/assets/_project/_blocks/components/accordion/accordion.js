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
      $accHeading: $('.acc-heading'),
    },
    init: function() {
      if (this.config.$accordion.length > 0) {
        this.accordionClick();
        this.collapseAll();
        this.expandAll();
        this.hashTrigger();
        // legacyAccordion is to support SWE2 accordion
        this.legacyAccordion();
      }
    },
    urlHash: function (){
      return decodeURI(window.location.hash.replace(/\/|#|{|}|\+|\\/g, ''));
    },
    /**
     * hashTrigger function open matching accordion if it finds #title-Of-Accordion in the url
     * @return {undefined}
     **/
    hashTrigger: function (){
      let hashVal = this.urlHash();
      if (hashVal.length > 0) {
        let findHashVal = this.config.$accordion.find('#' + hashVal + '');
        console.log(findHashVal);
        findHashVal.click();
        findHashVal.parent('article').find('.acc-heading').focus();
      }
    },
    toggleOpenCloseClass: function(curr){
      if (curr.hasClass('qg-accordion--open')){
        curr.removeClass('qg-accordion--open').addClass('qg-accordion--closed');
        curr.attr('aria-expanded', 'false');
      } else {
        curr.removeClass('qg-accordion--closed').addClass('qg-accordion--open');
        curr.attr('aria-expanded', 'true');
      }
    },
    /**
     * @return {undefined}
     **/
    accordionClick: function(){
      let self = this;
      let accHeading = this.config.$accHeading;
      accHeading.on('click', function (event) {
        self.toggleOpenCloseClass($(this));
      });
    },
    keyboardAccessibility: function (event){
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
    collapseAll: function (){
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
    expandAll: function (){
      var self = this;
      //expand all click
      // label selector is to provide backward compatibility in case projects are using old markup
      $('.qg-acc-controls .expand, label[for=\'expand\']').on('click keypress', function (event) {
        if (self.keyboardAccessibility(event) === true) {
          console.log('yes inside');
          $(this).parents('.qg-accordion').find('.acc-heading').removeClass('qg-accordion--closed').addClass('qg-accordion--open');
          // backward compatible code to support SWE2 accordion
          $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', true);
          event.preventDefault();
        }
      });
    },
    /**
     * legacyAccordion function supports swe2 accordion in use at some places
     * @return {undefined}
     **/
    legacyAccordion: function (){
      let self = this;
      let accItem = $('.qg-accordion:not(.qg-accordion__accessible)').find('article');
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
