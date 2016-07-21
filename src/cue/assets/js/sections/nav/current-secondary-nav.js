"use strict";
var activeSideNav = {
    init : function () {
        const currentFilename = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
        this.highlightNavItem();
    },
    getCurrentTitle : function  () {
        var currentPageTitle = '';
        if ( $('#guide-title').length > 0 ) {
            currentPageTitle = $('#guide-title').text();
        }
        else if ($('meta[name="DCTERMS.alternative"]').length > 0 && $('meta[name="DCTERMS.alternative"]').eq(0).attr('content') !== '') {
             currentPageTitle = $('meta[name="DCTERMS.alternative"]').eq(0).attr('content');
        }
        else {
            let titleClone = $('h1', '#qg-primary-content').eq(0).clone();
            titleClone.find('.page-number').remove();
            currentPageTitle = titleClone.text();
        }
        return currentPageTitle;
    },
    highlightNavItem : function () {
        var currentPageTitle = this.getCurrentTitle();
        $(".qg-section-nav ul>li").each(function (index) {
            if($.trim($(this).text()) === $.trim(currentPageTitle)){
                $(this).find("a").addClass("active");
            }
        });
    }
};

module.exports = activeSideNav;


// Highlight current area in TOC
// if (document.getElementById('toc') !== null) {
//     // mark current page in guide
//     $('a[href="' + currentFilename + '"]', '#toc').parent().addClass('current');
//     $('.link-text', '#toc').filter(function () {
//         return $.trim($(this).text()) === $('h2', '#content').eq(0).text();
//     }).closest('li').addClass('current');
//
//     // Embed progress menu for pages that contain it (don't do this for the business franchise)
//     $('.current-page', '#nav-section')
//         .addClass('has-submenu')
//         .append($('#toc ol').clone());
// }
// // Highlight current area in progress bar
// if ($('#guide-progress').length > 0) {
//     $('a[href="' + currentFilename + '"]', '#guide-progress').parent().addClass('current');
// }