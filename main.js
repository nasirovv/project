$(function(){

	$('.slider__content').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

	$('.news__inner-slider').slick({
		nextArrow: '<button type="button" class="slick__news-btn news-next slick-next"></button>',
		prevArrow: '<button type="button" class="slick__news-btn news-prev slick-prev"></button>',
		infinite: false
	});


	$('.menu__btn').on('click', function(){
		$('.menu ul').slideToggle();
	});

});
