


//Banner.js


$(function(){
	$('#Banner').find('.addNavi_01').on('click',function(){
	
	$('#addBanner').fadeOut(1500);
	$('#addBanner_02').fadeIn(1500);
	});

	$('#Banner').find('.addNavi_01').on('click',function(){
	$('#addBanner').fadeIn(1500);
	$('#addBanner_02').fadeOut(1500);
	});

});