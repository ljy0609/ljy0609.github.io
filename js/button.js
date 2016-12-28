//button.js

$(function(){
	$('.zoom_in').on('click',function(){
		$('.popupBox').fadeIn(500);
	});
	$('.close').on('click',function(){
		$('.popupBox').fadeOut(500);
	});
});