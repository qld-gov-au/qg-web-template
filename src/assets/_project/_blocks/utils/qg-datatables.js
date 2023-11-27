var addQGButtonClass = function() {
  $('.dataTables_wrapper a.paginate_button').addClass('qg-btn');
};

if ($("table[class*='dataTable']").length > 0) {
  $('.dataTable').DataTable({
    'drawCallback': addQGButtonClass,
  });
}
