$(document).ready(function(){

  AOS.init();

  $(".stories-slider").owlCarousel({
    loop:true,
    autoplay:true,
    margin:50,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      }
    }
  });

  $(".trainer-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1200:{
        items:3
      },
      1400:{
        items:4
      }
    }
  });

  $('.ham-menu').hide();
  $('.menu-button').click(function(){
    $('.ham-menu').fadeToggle(1);
  })
  
});