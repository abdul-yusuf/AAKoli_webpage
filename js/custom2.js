$(document).ready(function(){
    // $(window).scroll(function(){
    //   if ($(this).scrollTop()>10){
    //     $('.sticky-header').addClass('active');
    //   } else {
    //     $('.sticky-header').removeClass('active');
    //   }
    // });
    $.fn.groupAddClass = function(element, cate_name){
      $(element).removeClass('show');
      $(element).filter(cate_name).addClass('show');
    }
  
    $.fn.groupAll = function(){
      $('.filtering').addClass('show');
    }
  
    $('.bbtn').click(function(){
      $('.bbtn').filter('.bbtn').removeClass('active');
      $(this).addClass('active');
    })
  
    $.fn.groupAll();
  });
  