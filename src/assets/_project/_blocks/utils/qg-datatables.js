var addQGButtonClass = function () {
  $('.sortable-table .dataTables_wrapper a.paginate_button').addClass('qg-btn');
};
//$(window).on('load', addQGButtonClass);
window.onpageshow = function () {
  addQGButtonClass();
};
$(document).on('change', '.sortable-table select', addQGButtonClass);
