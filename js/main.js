
$(document).ready(function() {

  $(window).scroll(function() {
    if($(this).scrollTop()<149){
      $('.side-icon').fadeOut('slow');
      $('.gotop').fadeOut('slow');
    }
    if ($(this).scrollTop() > 150 && $(this).scrollTop() < 1000 ) {
      $('.side-icon').fadeIn('slow');
      $('.gotop').fadeIn('slow');
    } 
    if ($(this).scrollTop() > 1000) {
      $('.side-icon-left').fadeIn('slow');
      $('.side-icon').fadeOut('slow');
      $('.gotop').fadeIn('slow');
    }else {
      $('.side-icon-left').fadeOut('slow');
    }
  });

  $('.gotop').click(function(){
      $('html, body').animate({scrollTop:0}, 1500)
  })



    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });


    }); (jQuery);