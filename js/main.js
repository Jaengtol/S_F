$(function(){
    //.topBtn버튼을 누르면 화면의 제일 위로 부드럽게 올라감
    $('.topBtn').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });



    var menuItem = $('nav ul > li > a');    //메뉴 버튼을 변수로

    menuItem.click(function(){
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().addClass('active');

        var targetSection = $(this).attr('data-targer');
        targetSection = $(targetSection).offset();
        console.log(targetSection); 
        
        $('html,body').animate({scrollTop:targetSection.top},400); 
    });


})

(function( $ ) {
    "use strict";
    $(function() {
        function animated_contents() {
            $(".zt-skill-bar > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');

                $this.css({'width' : skills + '%'});

            });
        }
        
        if(jQuery().appear) {
            $('.zt-skill-bar').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    });
}(jQuery));







/*
    A.eq(b)     - b와 같은 순서의 A (ex,3번째 A)
    $(window).scrollTop()   -화면의 스크롤이 얼마되었는지 가져오거나 반환한다
    A.offset().top           -A가 브라우저의 제일 위에서 부터 얼마 떨어져있냐
    A.attr(속성명)           - 요소A에 속성값을 가져온다   ex)$('div').attr('class')
*/


