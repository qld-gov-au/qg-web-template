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
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results || !results[2]) return false;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  // Maps view full screen customization code (TODO move this to Matrix assets as this is related with Matrix Map component)
  $('.map-modal').butterfly({
    contentDefaultWidth: '90%',
    contentDefaultHeight: '90%',
    reuseFragment: true,
  });
  // this function equals the height of the cards in a group, if it finds a class '.qg-cards__equal-height'.
  function setHeight() {
    const equalHeightCards = document.querySelectorAll('.qg-cards__equal-height');

    if (equalHeightCards.length > 0) {
      equalHeightCards.forEach((cardBlock) => {
        let maxHeight = 0;
        const cards = cardBlock.querySelectorAll('.qg-card .details');

        cards.forEach((card) => {
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        cards.forEach((card) => {
          card.style.height = `${maxHeight}px`;
        });
      });
    }
  }
  setHeight();
  $(window).on('resize', function () {
    var $windowSize = $(window).width();
    if ($windowSize < 767) {
      $('.cards__equal-height').find('.details').removeAttr('style');
    } else {
      setHeight();
    }
  });
  // check if a view is loaded in an iframe , this is to detect Squiz Matrix preview mode
  // and insert a class so that additional styles can be applied
  const frameAttr = window.frameElement && window.frameElement.getAttribute('Name');
  if (frameAttr && frameAttr === 'ees_modePreviewFrame') {
    $('.container-fluid').addClass('qg-edit-plus-styles');
  }

  // temporary warning for fa icon that using `i` instead of `span` element
  const deprecationWarnings = [
    {
      selector: '.qg-callout__box .qg-callout__icon i.fa',
      label: 'Callout box',
    },
    {
      selector: '.alert h2 i.fa',
      label: 'Alert',
    },
  ];
  // setTimeout is just a temporary solution for display the warning message in SPA as elements are created on the fly
  setTimeout(() => {
    deprecationWarnings.forEach(({ selector, label }) => {
      if ($(selector).length) {
        console.warn(
          `Please change the font awesome element in ${label} from i to span, we'll be removing the css in this element before 22nd june 2022. Please refer to the https://github.com/qld-gov-au/qg-web-template/pull/391 for more details.`,
        );
      }
    });
  }, 5000);
})(jQuery, qg.swe);
