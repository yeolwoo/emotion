// 칭찬,감사,응원 슬라이드
$(function(){
  $('.content_slider').bxSlider({
    controls:false,
    pager:false,
    minSlides:1,
    maxSlides:3,
    slideWidth:150,
    slideMargin:10,

  })
})
// 이벤트 슬라이드
$(function(){
  $('.enent_slider').bxSlider({
    controls:false,
    pager:true,

  })
})
// 헤드 스크롤
$(document).on("scroll",function(){
  if ($(document).scrollTop() > 50){
      $(".main_header,.main_header p").addClass("height");
  }else {
      $(".main_header,.main_header p").removeClass("height");
  }
})
