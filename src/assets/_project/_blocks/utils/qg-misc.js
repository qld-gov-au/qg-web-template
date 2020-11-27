/*globals qg*/

(function ($, swe) {
  /**
   * Gets parameter value
   * @param {string} name - parameter name
   * @param {string} url - url where searching needs to be performed
   * @returns {*} - returns the parameter value
   */
  // TODO - feature addition to sanitize data
  swe.getParameterByName = (name, url) => {
    if (name == null) return false;
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results || !results[2]) return false;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  // Maps view full screen customization code
  $('.map-modal').butterfly({
    contentDefaultWidth: '90%',
    contentDefaultHeight: '90%',
    reuseFragment: true,
  });
  // this function equals the height of the cards in a group, if it finds a class '.cards__equal-height'.
  if ($('.cards__equal-height').length > 0) {
    $('.qg-cards.cards__equal-height').each(function () {
      // Cache the highest
      var highestBox = 0;
      // Select and loop the elements you want to equalise
      $(this)
        .find('.details')
        .each(function () {
          // If this box is higher than the cached highest then store it
          if ($(this).height() > highestBox) {
            highestBox = $(this).height();
          }
        });
      // Set the height of all those children to whichever was highest
      $(this).find('.details').height(highestBox);
    });
  }
})(jQuery, qg.swe);
