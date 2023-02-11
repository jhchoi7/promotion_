$(document).ready(function(){
			
				$('.posts_list').bxSlider({
					minSlides: 1,
					maxSlides: 3,
					moveSlides: 1,
					slideWidth:370,
					slideMargin : 30,
					pager:false,
					nextSelector: '.recent_posts .controls .next',
					prevSelector :'.recent_posts .controls .prev' 
				});
				
				//mobile 메뉴 드롭다운
				$(".toggle").click(function(){
					$(".main-menu").slideToggle();
				}); 
				
				//mobile 사이즈 변경시 메뉴 원래메뉴 나오게
				$(window).resize(function(){
					if($(window).width() > 768){
						//참이면 할일
						$(".main-menu").show();
					} else{
						//거짓이면 할일
						$(".main-menu").hide();
					}
				});				
				
//상단메뉴고정(스크롤하면 고정)

var $header = $('header');
$(window).scroll(function(){
	if($(this).scrollTop() > 0){
		$header.addClass('sticky');
	
	}else{
		$header.removeClass('sticky');
	}
});



});//ready(function()
	