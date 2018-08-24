/**
 * This will handle functionalities like
 * - Expand all / Collapse all link
 * - Ability to direct link to each section and expand the linked section
 * - Handles aria-expanded values
 */

(function ($) {
  let accordion = '.qg-accordion';
  let accordionControls = 'input[name=control]';
  let linkedpanel = $('input[aria-controls=' + window.location.hash.substring(1) + ']');

  //Handle events of accordion inputs
  $(accordion).find('article input').on('change', function () {
    let checkedStatus = $(this).prop('checked');
    let controlledPanedId = $('#' + $(this).attr('aria-controls'));
    $(this)
    .attr('aria-expanded', checkedStatus) //sets aria
    .parents(accordion).find(accordionControls).prop('checked', false); //clears expand/collapse selection
    controlledPanedId.attr('aria-hidden', !checkedStatus);
  });

  //expand all click
  $(accordion).find(accordionControls).on('change', function () {
    $(this).find('~ article input').prop('checked', $(this).val() === 'expand');
    $(accordion).find('article input').trigger('change');
  });

  //Ability to direct link to each section and expand the linked section
  if (linkedpanel.length > 0) {
    linkedpanel.prop('checked', true);
  }
}(jQuery));
