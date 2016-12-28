

//footer_tab.js


//사이트 바로가기 클릭시 팝업창 보이는 효과

$(function(){
	$('.snb_02').on('click',function(){
	$('#footPopup_site').stop().fadeIn(400);

	$('.site_Btn').on('click',function(){
		$('#footPopup_site').stop().fadeOut(400);

		});

	});
	$('.snb_01').on('click',function(){

	$('#footPopup_allMenu').stop().fadeIn(400);
	
	$('.allMenu_Btn').on('click',function(){
		$('#footPopup_allMenu').stop().fadeOut(400);
	});
	
	});

});