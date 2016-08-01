"use strict";
var activeSideNav = (function () {
    const currentFilename = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);

    function refineText(text) {
        return text.toLowerCase().replace(/ /g,'');
    }

    function  getCurrentTitle() {
        var currentPageTitle = '';
        if ( $('#guide-title').length > 0 ) {
            currentPageTitle = $('#guide-title').text();
        }
        else if ($('meta[name="DCTERMS.alternative"]').length > 0 && refineText($('meta[name="DCTERMS.alternative"]').eq(0).attr('content')) !== '') {
            currentPageTitle = $('meta[name="DCTERMS.alternative"]').eq(0).attr('content');
        }
        else {
            let titleClone = $('h1', '#qg-primary-content').eq(0).clone();
            titleClone.find('.page-number').remove();
            currentPageTitle = titleClone.text();
        }
        return refineText(currentPageTitle);
    }

    function highlightNavItem() {
        var currentPageTitle = getCurrentTitle();
        $(".qg-section-nav ul>li").each(function (index) {
            if(refineText($(this).text()) === $.trim(currentPageTitle)){
                $(this).find("a").addClass("active");
            }
        });
    }

    return {
        highlightNavItem : highlightNavItem
    }
})();

module.exports = activeSideNav;