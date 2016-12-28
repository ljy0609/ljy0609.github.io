//link.js

$(function(){
	$('header').find('h2').find('a').on('click',function(){
	
	var link = $('header').find('h2').find('a'),
	    link_index = $(this).index();
	console.log(link_index);
	link.eq(3).fadeOut(800);
	link.eq(2).delay(400).fadeOut(800);
	link.eq(1).delay(600).fadeOut(800);
	$('svg').fadeOut(800);
	$('img').fadeOut(800);
	link.eq(0).animate({color:'#424242'});
	$('#addBox').delay(1500).animate({backgroundColor:'#fff'},1000,function(){

			location.href = 'resume.html';
		});
	});
});