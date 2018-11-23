$(document).ready(function(){
var owl = $('.owl-carousel');
owl.owlCarousel({
    // items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
     responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
        },
        600:{
            items:4,
            nav:false,
        },
        1000:{
            items:6,
            nav:false,
            // loop:false
        }
    }
});
});
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })