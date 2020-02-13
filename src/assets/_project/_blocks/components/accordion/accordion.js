/**
 * This will handle functionalities like
 * - Expand all / Collapse all link
 * - Ability to direct link to each section and expand the linked section
 * - Handles aria-expanded values
 */

(function ($) {
  let accordion = '.qg-accordion';
  if ($(accordion).length > 0) {
    let accordionControls = 'input[name=control]';
    let accItem = $(accordion).find('article');
    let linkedpanel =  window.location.hash && $('input[aria-controls=' + window.location.hash.substring(1) + ']');

    // keyboard accessibility
    var a11yClick = function (event) {
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
    };

    //Handle events of accordion inputs
    $(accordion).find('article input').on('change', function () {
      let checkedStatus = $(this).prop('checked');
      let controlledPanedId = $('#' + $(this).attr('aria-controls'));
      $(this)
        .attr('aria-expanded', checkedStatus) //sets aria
        .parents(accordion).find(accordionControls).prop('checked', false); //clears expand/collapse selection
      controlledPanedId.attr('aria-hidden', !checkedStatus);
    });

    // open on page load
    const hashTrigger = function () {
      linkedpanel = window.location.hash && $('input[aria-controls=' + window.location.hash.substring(1) + ']');
      if (linkedpanel.length > 0) {
        linkedpanel.parents(accordion).find('~ article input').prop('checked', false); //clears expand/collapse selection
        linkedpanel.prop('checked', true);
        $('html, body').animate({
          'scrollTop': linkedpanel.offset().top,
        }, 500);
      }
    };
    hashTrigger();
    window.onhashchange = hashTrigger;

    // inserting tab index dynamically
    // label selector is to provide backward compatibility in case projects are using old markup
    $('.qg-accordion .acc-heading, .qg-acc-controls .expand, .qg-acc-controls .collapse, label[for="expand"], label[for="collapse"]').each(function () {
      if (this.type !== 'hidden') {
        var $input = $(this);
        $input.attr('tabindex', tabindex);
        tabindex++;
      }
    });
    $('input[name=tabs]').click(function () {
      $(this).parent('article').find('.acc-heading').focus();
    });

    // highlight title on hover
    accItem.hover(function () {
      $(accordion).find('.title').removeClass('ht');
      $(this).find('.title').addClass('ht');
    }, function () {
      $(accordion).find('.title').removeClass('ht');
    });

    // expand/collapse on enter keypress
    accItem.on('keypress', function (event) {
      event.preventDefault();
      if (a11yClick(event) === true) {
        if ($(this).find('input[name="tabs"]:checked').length > 0) {
          $(this).find('input[name="tabs"]').prop('checked', false);
        } else {
          $(this).find('input[name="tabs"]').prop('checked', true);
        }
      }
    });
    accItem.on('click', function (event) {
      if (event.clientX !== 0) {
        if ($(this).find('input[name="tabs"]:checked').length > 0) {
          $(this).find('input[name="tabs"]').prop('checked', false);
        } else {
          $(this).find('input[name="tabs"]').prop('checked', true);
        }
        return false;
      }
    });
    //expand all click
    // label selector is to provide backward compatibility in case projects are using old markup
    $('.qg-acc-controls .expand, label[for=\'expand\']').on('click keypress', function (event) {
      if (a11yClick(event) === true) {
        $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', true);
        event.preventDefault();
      }
    });

    // collapse all click
    // label selector is to provide backward compatibility in case projects are using old markup
    $('.qg-acc-controls .collapse, label[for=\'collapse\']').on('click keypress', function (event) {
      if (a11yClick(event) === true) {
        $(this).parents('.qg-accordion').find('input:checkbox').prop('checked', false);
        event.preventDefault();
      }
    });
  }
}(jQuery));
