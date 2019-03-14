$(function(){
	var swiper = new Swiper('.soil', {
   	  lazy: true,
   	  slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop:true
   });
    
    var swiper1 = new Swiper('.star-swiper', {
   	  slidesPerView: 4,
      freeMode: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop:true
    });
    
    var iNow=0;
   function init(iNow){
   	$('.tab a').removeClass('active').eq(iNow).addClass('active');
   	$('.tab-list').css('display','none').eq(iNow).css('display','block');
   }
   init(iNow);
   $('.tab a').mouseover(function(){
   	init($(this).index())
   })
})
