var addQGButtonClass = function() { $('.dataTables_wrapper a.paginate_button').addClass('qg-btn'); };
if ($("table[class*='dataTable']").length > 0) {
  $('.dataTable').DataTable({
    'drawCallback': addQGButtonClass,
  });
}

window.onpageshow = function() {
  addQGButtonClass();
};
$(document).on('change', '.dataTables_wrapper select', addQGButtonClass);
$(document).on('keyup', '.dataTables_wrapper input', addQGButtonClass);
$('.dataTable').on('order.dt', addQGButtonClass);
document.addEventListener('DOMContentLoaded', addQGButtonClass);
