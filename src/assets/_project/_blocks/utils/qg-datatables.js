var addQGButtonClass = function() {
    $('.sortable-table .dataTables_wrapper a.paginate_button').addClass('qg-btn');
};
$(window).on('load', addQGButtonClass);
$('.sortable-table select').on('change', addQGButtonClass);
