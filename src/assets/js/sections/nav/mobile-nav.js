var nav = function () {
    
    $(".alert").hide();
     $("#cart").on("click" , function () {
        $(".alert").slideToggle("fast");
    });
    
    
    
    $("#qg-show-menu").on("click" , function () {
        $("#qg-breadcrumb, #qg-site-nav").slideToggle("fast");
    });
    $("#qg-show-search").on("click" , function () {
        $("#qg-search-form").slideToggle("fast");
    });

    $(window).resize(function () {
        var $sitenav = $("#qg-site-nav");
        var $br = $("#qg-breadcrumb");
        var $tools = $("#qg-search-form");
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
};

module.exports = nav;