var addQGButtonClass = function () {
  $('.dataTables_wrapper a.paginate_button').addClass('qg-btn');
};

$('.dataTable').each(function () {
  if (!$.fn.DataTable.isDataTable('.dataTable')) {
    $('.dataTable').DataTable({
      'drawCallback': addQGButtonClass,
    });
  }
});
