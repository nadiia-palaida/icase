	
//LIGHTSLIDER
$('#aniimated-thumbnials').lightGallery({
    thumbnail:true
}); 

	//LAZY LOAD
    $(function() {
        $('.lazy').Lazy();
    });

    //SLICKSLIDER

$(document).ready(function(){
  $('.slider').slick({
  	slidesToShow: 3,
  	autoplay: true,
 	autoplaySpeed: 2500,
  	 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});


