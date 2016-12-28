// popup.js



$(function(){
// three button popup effect --------------------\
	$('#three_buttons').find('div').eq(0).on('click',function(){
	$('.lnb_popup_01').fadeIn(200);
	$('.lnb_popup_01').find('li').delay(200).eq(0).fadeIn(300);
	$('.lnb_popup_01').find('li').delay(200).eq(1).fadeIn(300);
	$('.lnb_popup_01').find('li').delay(200).eq(2).fadeIn(300);
	$('.lnb_popup_01').find('li').delay(200).eq(3).fadeIn(300);
	$('.lnb_popup_01').find('dl').delay(800).fadeIn(300);
	$('.lnb_popup_01').parent().prepend('<div class="popupBefore">');
	$('footer').css({zIndex:-100});

//+ main 진료예약 popup

	$()

	
/*	$('#wrap').css({backgroundColor:'rgba(255,255,255,0.8)'})	*/
	});
	$('.lnb_popup_Btn').on('click',function(){
	$('.popupBefore').remove();
	$('.lnb_popup_01').fadeOut(200);
	$('.lnb_popup_01').find('li').fadeOut();
	$('.lnb_popup_01').find('dl').fadeOut();
	$('footer').css({zIndex:0});
	});

// lnb_pop02 > select for[]
	// $('#three_buttons').find('div').eq(1).on('click',function(){
	// $('.lnb_popup_02').find('select').append
	var click = $('#three_buttons').find('div').eq(1);
	
	$('#three_buttons').find('div').eq(1).on('click',function(){

	$('.lnb_popup_02').stop(false, true).toggleClass('toggleClass',500);
	console.log('.toggleClass');
		
		});
	$('#three_buttons').find('div').eq(2).on('click',function(){

	$('.lnb_popup_03').stop(false, true).toggleClass('toggleClass',500);
	console.log('.toggleClass');
		
	});

	// click.on('click',function(){
	// $('.lnb_popup_02').animate({marginLeft:-754+'px'},500);
	// 	});
	
});