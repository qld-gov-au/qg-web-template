(function($) {
    "use strict";
    qg.glue.loader.init(function () {
        $("#glue-show-menu").on("click" , function () {
            $("#breadcrumb>.inner , #site-nav").slideToggle("fast");
        });
        $("#glue-show-search").on("click" , function () {
            $(".tools").slideToggle("fast");
        });

        $(window).resize(function () {
            var $sitenav = $("#site-nav");
            var $br = $("#breadcrumb>.inner");
            var $tools = $(".tools");
            if ($(window).width() < 768) {}
            else if ($(window).width() >= 768 &&  $(window).width() <= 992) {
                if($tools.is(":visible")){
                    $tools.hide("fast");
                }
            }
            else  {
                if($sitenav.is(":hidden")){
                    $sitenav.slideToggle("fast");
                    $br.slideToggle("fast");
                }
                if($tools.is(":hidden")){
                    $tools.slideToggle("fast");
                }
            }
        });
    });
}(jQuery));

//# sourceMappingURL=main.js.map
