// lnb.js


// lnb height값 강제 처리
$(function(){
	
	var content_height =$('#content').height();	 
	console.log(content_height);
	$('#lnb').css({height:content_height})
});