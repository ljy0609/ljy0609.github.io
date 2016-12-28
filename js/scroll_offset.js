//  scroll_offset.js

// 윈도우 스크롤  => scroll , 마우스 스크롤(휠) => mousewheel
// 마우스 이동  => mousemove

// var offset_top_before = $('.content').offset().top;
// var scrollTop_before  = $('.content').scrollTop();

// console.log(  offset_top_before );
// console.log(  scrollTop_before );

$(window).on('scroll', function() {
	// console.log('scroll');
	// offset().top;
	// scrollTop();
	var win_top  = $(this).scrollTop();
	var test_top = $('svg').offset().top;
	var poli_top = $('.poligon').offset().top;
	var hideBox = $('.content_hideBox').offset().top;
	// console.log(test_top);
	console.log(test_top);
	console.log(win_top);
	// console.log(hideBox);
	if(win_top > 300){
		$('.poligon').fadeOut(500);
		$('.main_font').fadeOut(500);
	}else{
		  $('.poligon').fadeIn(500);
		  $('.main_font').fadeIn(500);
		  }
	
	if(win_top >= 700){
		$('.content_hideBox').fadeIn(800);

	}else{
		$('.content_hideBox').fadeOut(800);
	}

	if(win_top >= 1400){
		$('.resume_hideBox').fadeIn(800);
		$('.resumeBigbox').find('div').fadeIn(800);
		$('#resume').find('button').find('p').fadeIn(800);
	}else{
		$('.resume_hideBox').fadeOut(800);
		$('.resumeBigbox').find('div').fadeOut(800);
		$('#resume').find('button').find('p').fadeOut(800);
	}
}); 