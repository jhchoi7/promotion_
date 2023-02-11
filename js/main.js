$(function(){
    $('#contens').bxSlider({
      speed:800,
      slideMargin:10
    });

    $('.scroll').click(function(e) {
        e.preventDefault();
        $('html').animate({scrollTop:$(this.hash).offset().top}, 500);
      });
            
      setTimeout(function(){
        $(window).resize()}, 1000);      

      $('.bg-holder').parallaxScroll({
        friction:0.3
      });


   var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

 
}); 


/*$(window).scroll(function(){
  // 현재 스크롤 위치값을 저장하는 변수sct를 만듬.
  var sct = $(window).scrollTop();
  // .main03의 절대위치값을 저장하는 변수m3을 만듬.
  var m3 = $(".track").offset().top;
  // 조건문을 만듬
  if(sct>=m3){
    $(".track_con .track_txt").addClass("on");
  } else {
    $(".track_con .track_txt").removeClass("on");
  }
});*/

$(window).scroll(function() {
  var $el = $('.track_txt');
  
  if($(this).scrollTop() >= 400) $el.addClass('shown');
  else $el.removeClass('shown');
});


$(document).ready(function(){
  $("button").click(function(){
    $(".disco_box1 .img01").delay(2000).fadeIn();
    $(".disco_box1 .txt01").delay(4000).fadeIn();
  });
});

