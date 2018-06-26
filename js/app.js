$(document).ready(function(){
    
    // elements menu //

    $(".mnu li").click(function(){
        $(".big-img .big__img_wrapp .mnu__wrapp .mnu li").removeClass("active");
        $(this).addClass("active");
    });

    // элементы языков в меню //


    $(".lg__select").click(function(){
        $(".lg__select").removeClass("active");
        $(this).addClass("active");
    });

    // элементы языков в меню //

    // Слайдер
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 7500,
        lazyLoad: true
    });
    // Слайдер

    
    //////////////////// навигационное меню //////////////////

    $(".burger-menu-wrapper").click(function(){
        $this = $(this);
        if($this.hasClass("open")){
            $this.addClass("closing").removeClass("open");
        }else{
            $this.removeClass("closing").addClass("open");
        }
        if ($(".top__mnu").is(":visible")){
            $(".top__mnu").fadeOut(600);
            $(".top__mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top__mnu").fadeIn(600);
            $(".top__mnu li a").addClass("fadeInUp animated");
        }
    });

    //////////////////// навигационное меню //////////////////
})

