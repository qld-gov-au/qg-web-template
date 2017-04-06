/**
 * This file contains a random language scroller. It updates
 * the text of the other languages link every 5 seconds with a
 * new random language supported by the www.qld.gov.au/languages
 *
 * (based on ideas from http://www.communityservices.qld.gov.au/scripts/languages.js)
 *
 * @requires jquery
 */

(function ($) { /* start closure */
  'use strict';

  // see languages.txt for language names source
  //  removed from this file to keep jslint happy about "unsafe characters"
  var languages = [
    '<span lang="ar" xml:lang="ar">\u0627\u0644\u0639\u0631\u0628\u064A\u0629</span>',
    '<span lang="el" xml:lang="el">\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC</span>',
    '<span lang="pl" xml:lang="pl">Polski</span>',
    '<span lang="bs" xml:lang="bs">Bosanksi</span>',
    '<span lang="id" xml:lang="id">Bahasa Indonesia</span>',
    '<span lang="ru" xml:lang="ru">\u0420\u0443\u0441\u0441\u043A\u0438\u0439</span>',
    '<span lang="zh" xml:lang="zh">\u4E2D\u6587</span>',
    '<span lang="it" xml:lang="it">Italiano</span>',
    '<span lang="sr" xml:lang="sr">\u0441\u0440\u043F\u0441\u043A\u0438</span>',
    '<span lang="hr" xml:lang="hr">Hrvatski</span>',
    '<span lang="ja" xml:lang="ja">\u65E5\u672C\u8A9E</span>',
    '<span lang="es" xml:lang="es">Espa\u00F1ol</span>',
    '<span lang="fr" xml:lang="fr">Fran\u00E7ais</span>',
    '<span lang="ko" xml:lang="ko">\uD55C\uAD6D\uC5B4</span>',
    '<span lang="tl" xml:lang="tl">Tagalog</span>',
    '<span lang="de" xml:lang="de">Deutsch</span>',
    '<span lang="fa" xml:lang="fa">\u0641\u0627\u0631\u0633\u06CC</span>',
    '<span lang="vi" xml:lang="vi">Ti\u1EBFng Vi\u1EC7t</span>'
  ];
  // function to cycle through languages in the footer link text
  function updateLanguage () {
    $('a', '#link-languages')
      .empty()
      .append(languages[Math.floor(Math.random() * languages.length)] + ' (Other languages)');

    // repeat in 5 seconds
    setTimeout(updateLanguage, 5000);
  }
  // first run
  updateLanguage();
}(jQuery)); /* end closure */
