/**
 * Figures
 *
 * Show/hide credits for figures
 *
 * @requires jQuery
 *
 * Figure has been restructure in `/src/docs/components/images.html`
 * .qg-cut-in, .qg-cut-in-alt need to be decommissioned in SWE (already decommissioned in Squiz Matrix)
 */

$(() => {
  'use strict';

  var figureElement = '.qg-cut-in, .qg-cut-in-alt';
  $('#qg-content .figure-credits-toggle').on('click', function () {
    $(this).closest(figureElement).find('.figure-credits').toggle(500).focus().end();
  });

  // decommission qg-cut-in warning
  if ($(figureElement).length) {
    console.warn(`".qg-cut-in" and ".qg-cut-in-alt" is going to be deprecated in SWE library. Please replace ".qg-cut-in" or ".qg-cut-in-alt" with ".qg-fig". Please refer to https://qld-gov-au.github.io/web-template-release/components/images.html for more details.`);
  }
});
