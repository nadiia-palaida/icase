	
//LIGHTSLIDER
$('#aniimated-thumbnials').lightGallery({
    thumbnail:true,
    pager: true
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


// add +1 and remove -1 good in catalog

document.querySelectorAll('.minus').forEach(function(element) {
	element.onclick = removeOne;
});

document.querySelectorAll('.plus').forEach(function(element) {
	let plus = element.value;
});

document.querySelectorAll('.count-input').forEach(function(element) {
	let countInput = element.value;
});

function removeOne() {
	countInput = countInput - 1;

	if(countInput < 0) {
		countInput = 0;
	}
};	