if ($("table[class*='dataTable']").length > 0) {
  $('.dataTable').DataTable({
    'drawCallback': function() {
      $('.dataTables_wrapper a.paginate_button').addClass('qg-btn');
    }
  });
}

