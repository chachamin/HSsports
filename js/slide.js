(function($){
	$(document).ready(function(){

		//메인 슬라이드
		$('.main_top_slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			speed: 1000,
			autoplaySpeed: 3000,
			centerMode: true,
			centerPadding: '0px',
			fade: true,
			dots: true
		});
		$('.main_top_slide .slick-dots').append("<li><button class='pause paused'></button></li>");
		var play = false;
		$(".main_top_slide .pause").on("click", function() {
			if(play) {
				$(".main_top_slide").slick("play");
			} else {
				$(".main_top_slide").slick("pause");
			}
			play = !play;
			$(this).toggleClass('paused');
		});

		$('.main_top_slide').on('init', function(evet, slick){
			alert(1);
			console.log('slider was initialized');
		});

		//메인 브랜드 슬라이드
		$('.kgc_brand_slide').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows: true
		});

	});
	
})(jQuery);

