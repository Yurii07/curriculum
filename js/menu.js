
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

owl = $('.owl-carousel').owlCarousel();
$(".prev").click(function () {
    owl.trigger('prev.owl.carousel');
});

$(".next").click(function () {
    owl.trigger('next.owl.carousel');
});
// end of owl-carousel

// start of menu
$(document).ready(function() {
    $('.coolMenu > li').click(function(){
        $(this).find('ul').stop().slideToggle('slow');
        $(this).find('.fa-angle-down').toggleClass('rotate');
    });

});


$(document).ready(function() {
    $('.top_menu ul li:nth-child(5)').click(function(){
        $(this).find('ul').stop().slideToggle('slow');
        
    });
});
$(document).ready(function() {
    $('.top_menu ul li:nth-child(5)').click(function(){
      
        $(this).find('.fa-angle-down').toggleClass('rotate');
        
    });
});
// end of menu

// start of menu
jQuery(document).ready(function($){

    /* prepend menu icon */
    $('.top_menu .container').prepend('<div id="menu-icon">Menu</div>');
    
 // toggle nav 
 $(".top_menu .container #menu-icon").on("click", function(){
    $("#openbox").slideToggle();

    $(this).toggleClass("active");
});
 
});

if ($(window).width() >= 768 && $(window).width() < 1145) { }
    // end of menu

// animated pulse
$("a").hover( function (e) {
    $(this).toggleClass('animated pulse', e.type === 'mouseenter');
});
$(".footer .bot_footer .bot_left ul li a img").hover( function (e) {
    $(this).toggleClass('animated pulse', e.type === 'mouseenter');
});






