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
   
   
   var iNow1=0;
   function init(iNow1){
   	$('.tab1 a').removeClass('active').eq(iNow1).addClass('active');
   	$('.tab-list1').css('display','none').eq(iNow1).css('display','block');
   }
   init(iNow1);
   $('.tab1 a').click(function(){
   	init($(this).index())
   })
   
   
   var size=14;
	$('.tobig').click(function(){
		if(size<20){
			size++;
		}
		$('.article-content').children().css('fontSize',size+'px')
	});
	$('.tosmall').click(function(){
		size--;
		$('.article-content').children().css('fontSize',size+'px')
	})
	
	$("input[name=firendType]").click(function(){
	    var firendType = $(this).val();
	    alert(firendType);
	});
	
	
})
