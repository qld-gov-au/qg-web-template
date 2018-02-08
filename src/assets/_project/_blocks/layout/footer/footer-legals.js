(function ($) {
  //Copyrights update to current year
  if ($('#qg-copyright-daterange').length > 0) {
    $('#qg-copyright-daterange').html('1995&ndash;' + new Date().getFullYear());
  }
}(jQuery));
