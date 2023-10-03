if ($("table[class*='dataTable']").length > 0) {
  $('.dataTable').DataTable();
}

var addQGButtonClass = function () {
  $('.dataTables_wrapper a.paginate_button').addClass('qg-btn');
};
window.onpageshow = function () {
  addQGButtonClass();
};
$(document).on('change', '.dataTables_wrapper select', addQGButtonClass);
$(document).on('change', '.dataTables_wrapper input', addQGButtonClass);
$('.dataTable').on( 'order.dt',  addQGButtonClass);
