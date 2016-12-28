// header_tab.js

$(function(){
var url = "./img/src/";  
var list_00 = [
  {"Box01":"외래진료 안내","Box02":[{"li":"진료절차"},
                                    {"li":"진료안내"},
                                    {"li":"선택진료"}],
                            "Box03":[{"img":"tab_icon_01"},
                                     {"img":"tab_icon_02"}],
                            "Box04":[{"span":"외래진료"},
                                     {"span":"응급진료"}],
                            "Box05":[{"p":"입원부터 퇴원까지의 모든정보"},
                                     {"p":"24시간 어떠한 응급상황도 대비"}],
                                    },
  {"Box01":"응급진료 안내","Box02":[{"li":"진료안내"},
                                    {"li":"응급증상"}]
                                  },
  {"Box01":"입원진료 안내"},
  {"Box01":"가정간호 안내","Box02":[{"li":"가정간호"},
                                    {"li":"신청방법"}]},
  {"Box01":"검사실 안내"}

];
var list_01 = [
    {"Box01":"오시는 길"},
    {"Box01":"주차안내"},
    {"Box01":"주요전화번호"},
    {"Box01":"층별위치안내"},
    {"Box01":"병원시설안내"}
];
var list_02 = [
    {"Box01":"의료진"},
    {"Box01":"진료과"},
    {"Box01":"암병원"},
    {"Box01":"어린이병원"},
    {"Box01":"심장병원"},
    {"Box01":"센터"},
    {"Box01":"클리닉"},
    {"Box01":"기타"}
];
var list_03 = [
    {"Box01":"예약"},
    {"Box01":"조회"},
    {"Box01":"발급"}
];
var list_04 = [
    {"Box01":"자주하는질문"},
    {"Box01":"고객의소리"},
    {"Box01":"칭찬코너"},
    {"Box01":"홈페이지이용문의"},
    {"Box01":"콘텐츠제공안내"}
];
var list_05 = [
    {"Box01":"학술일정"},
    {"Box01":"학술영상"},
    {"Box01":"의학포스터"},
    {"Box01":"3D자료"}
];
var list_06 = [
    {"Box01":"의료정보","Box02":[ {"li":"인체정보"},
                                  {"li":"증상백과"},
                                  {"li":"질환백과"},
                                  {"li":"수술정보"},
                                  {"li":"약물정보"},
                                  {"li":"의학용어"},
                                  {"li":"식사요법"},
                                  {"li":"환자교육자료"}]
                                   },
    {"Box01":"건강TV"},
    {"Box01":"건강이야기","Box02":[{"li":"생활속건강"},
                                   {"li":"메디컬칼럼"}]
                                  }
];

var list_07 = [
    {"Box01":"재단소개","Box02":[{"li":"설립자소개"},
                                 {"li":"이사장인사말"},
                                 {"li":"설립취지"}]
                                },
    {"Box01":"병원소개","Box02":[{"li":"병원장인사말"},
                                 {"li":"병원안내"},
                                 {"li":"한눈에보는20년사"},
                                 {"li":"미션/비전"},
                                 {"li":"연혁및성과"},
                                 {"li":"현황"},
                                 {"li":"기구조직"},
                                 {"li":"협력기관"},
                                 {"li":"CI"}]
                                },
    {"Box01":"소식","Box02":[{"li":"소식/공지"},
                             {"li":"언론보도"},
                             {"li":"채용안내"},
                             {"li":"입찰공고"},
                             {"li":"강좌안내"},
                             {"li":"문화갤러리"}]
                            },
    {"Box01":"정기간행물","Box02":[{"li":"병원신문"},
                                   {"li":"건강정보메일"},
                                   {"li":"홍보책자"},
                                   {"li":"연보"}]
                                 },
    {"Box01":"교육장안내","Box02":[{"li":"시설안내"},
                                   {"li":"대관내규"}]
                                 }
];

//메인 nav
        $('#navi>ul>li').on('mouseenter',function(){
            
            var li_num = $('#navi>ul>li').index(this);
                pop_01 = $('.pop_01'),
                pop_02 = $('.pop_02'),
                pop_03 = $('.pop_03');
            var li_01;
            var li_index;
            $('.pop_01').empty();
            $('#navi_popup_pc').show();
            switch(li_num){
              case 0 :
                    for(var i = 0; i< list_00.length; i++ ){
                          pop_01.append('<li><a href="#"></a></li>');
                          
                          var li_01 = $('.pop_01').find('li');
                              li_01.eq(i).find('a').text(list_00[i].Box01);

                          $(li_01).on('mouseenter',function(){
                          pop_02.empty();
                          var this_index = $(this).index();
                          switch(this_index){

                              case 0 :
                                   for(var i = 0; i< list_00[0].Box02.length; i++ ){
                                      pop_02.append('<li><a href="#"></a></li>');
                                      li_02 = $('.pop_02').find('li');
                                      li_02.eq(i).find('a').text(list_00[0].Box02[i].li);

                                   }//for 
                              break;//외래진료

                              case 1 :
                                    for(var i = 0; i< list_00[1].Box02.length; i++){
                                      pop_02.append('<li><a href="#"></a></li>');
                                      li_02 = $('.pop_02').find('li');
                                      li_02.eq(i).find('a').text(list_00[1].Box02[i].li);
                                    }//for
                              break;//응급진료

                              case 3 :
                                    for(var i = 0; i< list_00[3].Box02.length; i++){
                                      pop_02.append('<li><a href="#"></a></li>');
                                      li_02 = $('.pop_02').find('li');
                                      li_02.eq(i).find('a').text(list_00[3].Box02[i].li);
                                    }//for
                              break;//가정간호
                              }//switch
                            });

                        } // case 0 _for
              break;

              case 1 :
                    for(var i = 0; i< list_01.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_01[i].Box01);

                        } // case 0 _for
              break;
              
              case 2 : 
                    for(var i = 0; i< list_02.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_02[i].Box01);
                        } // case 0 _for
              break;

              case 3 :
                    for(var i = 0; i< list_03.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_03[i].Box01);
                        } // case 0 _for
              break;

              case 4 :
                    for(var i = 0; i< list_04.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_04[i].Box01);
                        } // case 0 _for
              break;
              
              case 5 :
                    for(var i = 0; i< list_05.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_05[i].Box01);
                        } // case 0 _for
              break;

              case 6 :
                    for(var i = 0; i< list_06.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_06[i].Box01);

                        } // case 0 _for
              break;
              
              case 7 :
                    for(var i = 0; i< list_07.length; i++ ){
                        pop_01.append('<li><a href="#"></a></li>');
                        li_01 =$('.pop_01').find('li');
                        
                        li_01.eq(i).find('a').text(list_07[i].Box01);
                        } // case 0 _for
              break;

            }// switch
            
    }); /* function -mouseenter- */

        $('#navi_popup_pc').on('mouseleave',function(){
        $('#navi_popup_pc').hide();
        $('.pop_01').empty();
            });   /*function - mouseleave*/
  
        
        $('.pop_01>ul>li').on('mouseenter',function(){
          $('.pop_02').show();
          $('.pop_02').on('mouseleave',function(){
          $('.pop_02').hide();
          });


	});

}); //function


