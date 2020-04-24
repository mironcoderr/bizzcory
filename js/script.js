
//PRELOADER JAVA SCRIPT CODE START

window.addEventListener("load", function(){
    
    var preload = document.querySelector(".preloader");
    
    preload.classList.add("load_finish");
});

//PRELOADER JAVA SCRIPT CODE END





//SCROLL BAR FIXED JAVA SCRIPT CODE START

$(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 130) {
            $(".menu_head").addClass("menu_fix");
        } else {
            $(".menu_head").removeClass("menu_fix");
        }
    });

//SCROLL BAR FIXED JAVA SCRIPT CODE END






//BOOTTOM TO TOP BUTTON JAVA SCRIPT CODE START

$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    
    if(scroll > 1000){
        $(".top_btn i").show();
    }else{
        $(".top_btn i").hide();
    }
});

//BOOTTOM TO TOP BUTTON JAVA SCRIPT CODE END









//COUNTER UP JQUERY PLUGIN START

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//COUNTER UP JQUERY PLUGIN END







//SLICK SLIDER JQUERY PLUGIN START

$('.slick_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-angle-right dandik"></i>',
  nextArrow: '<i class="fas fa-angle-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

//SLICK SLIDER JQUERY PLUGIN END






//VIDEO PART VENOBOX JAVA SCRIPT CODE START

$(document).ready(function(){
    $('.venobox').venobox(); 
});

//VIDEO PART VENOBOX JAVA SCRIPT CODE END







