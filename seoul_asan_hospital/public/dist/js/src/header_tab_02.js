
$(function(){

  

//accordion pop_up
    var acco = $('#navi_accordion'),
        acco_li = $('#navi_accordion').find('dt').next('dd').find('ul').eq(0).find('li'),
        acco_dd = $('#navi_accordion').find('dt').next('dd');

  $('#menu').on('click',function(){
      acco.fadeToggle(300);
      // acco_dd.on('click',function(){
      // acco_dd
      acco.on('mouseleave',function(){
      	acco.fadeOut();
      	})
      });

//dt hover시 dd오픈
acco.find('dt').on('mouseenter',function(){
		acco.find('dd').slideUp();
		$(this).next('dd').slideDown();
    	acco.find('dt')


        });
    	
 		acco_li.eq(0).on('mouseenter',function(){
    	acco_dd.find('ul').eq(1).fadeIn();
    	
    	acco.find('dd').eq(0).on('mouseleave',function(){
    	acco_dd.find('ul').eq(1).css({'display':'none'});
    		
    	});
    	

    		
    	
   });

    acco.find('.test_01').on('mouseenter',function(){
    	$(this).next('ul').fadeIn();
    });

//sub page lnb accordion
    
  $('#lnb').find('dt').on('click',function(){
    $(this).next('dd').slideToggle();

  });

//header searchBar
   
   var button = $('.headTabs').find('button');
   var input = $('.headTabs').find('input');
  
   button.on('click',function(){
    var margin = parseInt($('.headTabs').find('input').css('marginLeft'));
    console.log(margin);
    if(margin >= 1){

      input.animate({marginLeft:0},500);

    }else{
      input.animate({marginLeft:220},500);
    }
   })
}); //function