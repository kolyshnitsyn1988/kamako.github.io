$(document).ready(function(){
    
    // навигационное меню //
    $(".menu-icon").click(function(e){
        e.preventDefault();
        $this = $(this)
        if($this.hasClass("is-opened")){
            $this.addClass("is-closed").removeClass("is-opened");
        }else{
            $this.removeClass("is-closed").addClass("is-opened");
        }
    });
    $(".menu-icon-cross").click(function(){
        if ($(".top_mnu").is(":visible")){
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    
    // элементы списка портфолио //
        $('.projects_list_wrapp li').click(function(){
            $('.projects_list_wrapp li').removeClass("active");
            $(this).addClass("active");
        });
        
    // элементы списка портфолио //
   
   
   
   
   
   
   
   
   
   
    // анимация элементов формы //
    
    
    $(".mnu li").click(function(){
        $(".big-img .big__img_wrapp .mnu__wrapp .mnu li").removeClass("active");
        $(this).addClass("active");
    });
// Слайдер
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        center: true,
        // autoplay: true,
        // autoplayTimeout: 7500,
        lazyLoad: true
       
        
        
        
    });
    

   
   
// Слайдер
   

   
     

})

