function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);


$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>20){
      $('.sticky-header').addClass('active');
    } else {
      $('.sticky-header').removeClass('active');
    }
  });
  setTimeout(function () {
    $(".loader").addClass("hidden").delay(200).remove(),
      $(".slide-in").each(function () {
        $(this).addClass("visible");
      });
  }, 1900),
  setTimeout()
});

