(function ($) {
  'use strict';

  $('#qg-bond-loan-calculator').submit(function (e) {
    e.preventDefault();
    var maxIncome = 1121;
    var $income = $('#income').val();
    var currencyFormat = function (val) {
      return '$' + parseFloat(val).toFixed(2);
    };

    $(this).find('.info').remove();
    if ($income <= maxIncome && $income.match(/^\d*[0-9]\d*$/g)) {
      var $max_rent = $income * 0.6;
      var $loan_amount = $max_rent * 4;
      var template = '<div class=\'status info\'> <h2>Your maximum bond loan is… <strong> ' + currencyFormat($loan_amount) + ' </strong></h2> <p>…based on a total gross weekly income of $' + $income + ' and a maximum weekly rent of ' + currencyFormat($max_rent) + ' </p>. </div>';
      $(this).prepend(template);
    }
  });
})(jQuery);
