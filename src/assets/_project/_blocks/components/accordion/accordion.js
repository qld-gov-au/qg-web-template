/**
 * This will handle functionalities like
 * - Expand all / Collapse all link
 * - Ability to direct link to each section and expand the linked section
 * - Handles aria-expanded values
 */

(function ($) {
    var accordion = '.qg-accordion',
        accordionControls = 'input[name=control]',
        expandControl = '.expand',
        collapseControl = '.collapse';

    //Handle events of accordion inputs
    $(accordion).find('article input').on('change', function () {
      var checkedStatus = $(this).prop('checked'),
          controlledPanedId = $('#' + $(this).attr('aria-controls'));
      $(this)
        .attr('aria-expanded', checkedStatus) //sets aria
        .parents(accordion).find(accordionControls).prop('checked',false); //clears expand/collapse selection
      controlledPanedId.attr('aria-hidden', !checkedStatus);
    });

    //expand all click
    $(accordion).find(accordionControls).on('change', function () {
      $(this).find('~ article input').prop('checked', $(this).val() === 'expand');
      $(accordion).find('article input').trigger('change');
    });

}(jQuery));
