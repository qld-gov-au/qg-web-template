(function () {
    $('.qg-breadcrumb-list').each(function () {
        var breadcrumbLength = $(this).find('.qg-breadcrumb-list-item').length;
        if (breadcrumbLength > 4) {
            for (var i = 0; i < breadcrumbLength; i++ ) {
                if (i > 1 && i < breadcrumbLength - 2) {
                    $(this).find('.qg-breadcrumb-list-item').eq(i).addClass('shortened');
                }
            }
            
            $(this).find('.qg-breadcrumb-list-item').eq(1).after("<li class='qg-breadcrumb-list-item shorten'><button class='qg-breadcrumb-toggle' aria-label='Expand the breadcrumbs'>[...]</button></li>");
        }

        $('.qg-breadcrumb-toggle').on('click', function() {
            $('.qg-breadcrumb-list-item').removeClass('shortened');
            $('.qg-breadcrumb-list').addClass('expanded');
        });
    });
  })();
  