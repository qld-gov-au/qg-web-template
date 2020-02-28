$(function () {
    'use strict';

    // Polyfill for position: sticky;
    var Stickyfill = require('stickyfill');
    var stickyfill = Stickyfill();
    stickyfill.add($('.sticky')[0]);

    // Mobile menu & Search events to prevent both of them opening at the same time
    $('.qg-show-menu, .qg-show-search').on('click', function () {
        if ($(this).attr('aria-expanded') === 'false') {
            $('body').addClass('header-active');
        } else {
            $('body').removeClass('header-active');
        }
        if ($(this).hasClass('qg-show-menu')) {
            $('.qg-search-form').collapse('hide');
        } else {
            $('.qg-navigation').collapse('hide');
        }
    });

    // Keep location dropdown open the elements inside of the dropdown are clicked
    $('.header-location .dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    // Except for these button
    $('.clear-location, .detect-location, .set-location').click(function (e) {
        $('.header-location').dropdown('toggle');
    });

    $('.header-location-close').click(function (e) {
        $('.header-location .dropdown-menu').addClass('closed');
        $('.header-location').dropdown('toggle');
        setTimeout(function () {
            $('.header-location .dropdown-menu').removeClass('closed');
        }, 300);
    });
});