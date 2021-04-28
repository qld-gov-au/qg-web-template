'use strict';

/**
     * activeSideNav function if text of a page heading match with a side nav text then adds a 'active' class.
     * @return {undefined}
 **/
var activeSideNav = (function () {
  function refineText (text) {
    return text.toLowerCase().replace(/ /g, '');
  }
  /**
     * getCurrentTitle function get heading by checking page meta attributes and H1 text.
     * @return {undefined}
  **/
  function getCurrentTitle () {
    var currentPageTitle = '';
    if ($('#guide-title').length > 0) {
      currentPageTitle = $('#guide-title').text();
    } else if ($('meta[name="DCTERMS.alternative"]').length > 0 && refineText($('meta[name="DCTERMS.alternative"]').eq(0).attr('content')) !== '') {
      currentPageTitle = $('meta[name="DCTERMS.alternative"]').eq(0).attr('content');
    } else {
      const titleClone = $('h1', '#qg-primary-content').eq(0).clone();
      titleClone.find('.page-number').remove();
      currentPageTitle = titleClone.text();
    }
    return refineText(currentPageTitle);
  }
  /**
     * highlightNavItem function if text of a page heading match with the side nav text then adds a 'active' class.
     * @return {undefined}
 **/
  function highlightNavItem () {
    var currentPageTitle = getCurrentTitle();
    if ($('.guide-sub-nav').length > 0){
      // In case of Guide Navigation, sub heading are in H2 tags.
      let contentHeading = $.trim($('h2', '#qg-primary-content').eq(0).text());
      $('.guide-sub-nav >li').each(function () {
        let guideNavHeading = $(this).clone().find('.page-number').remove().end().text().trim();
        if (refineText(guideNavHeading) === refineText(contentHeading)) {
          $(this).find('a').addClass('active').removeAttr('href');
        }
      });
    } else {
      $('.qg-section-nav ul>li, #qg-section-nav ul>li').each(function () {
        if ($.trim(refineText($(this).text())) === $.trim(currentPageTitle)) {
          $(this).find('a').addClass('active').removeAttr('href');
        }
      });
    }
  }

  return {
    highlightNavItem: highlightNavItem,
  };
})();

module.exports = activeSideNav;
