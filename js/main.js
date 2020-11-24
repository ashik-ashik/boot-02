
$(document).ready(function() {


  // Smooth scroll for the navigation menu and links with .scrollto classes
		 // Select all links with hashes
     $('a[href*="#"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
       // On-page links
       if (
       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
       && 
       location.hostname == this.hostname
       ) {
       // Figure out element to scroll to
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       // Does a scroll target exist?
       if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
         scrollTop: target.offset().top
         }, 1600, function() {
         // Callback after animation
         // Must change focus!
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) { // Checking if the target was focused
           return false;
         } else {
           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
           $target.focus(); // Set focus again
         };
         });
       }
       }
     });

  // icon show and hide
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

  // Scroll top
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