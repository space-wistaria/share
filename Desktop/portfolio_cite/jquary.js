$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});

//modal
$(function(){
  var winScrollTop;
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          //スクロール位置を取得
          winScrollTop = $(window).scrollTop();
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
      return false;
  }); 
});