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
// window.onscroll = function() {nav_reveal()};



// filterSelection("printing")
// function filterSelection(c){
//   var x, i;
//   x = document.getElementsByClassName("filtering");
//   if (c == "all") c="";
//   for (i=0; i<x.length; i++){
//     console.log(x[i].className.indexOf(c))
//     console.log(c)
//     groupRemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c)>-1) groupAddClass(x[i], "show");
//   }
// }

// function groupAddClass(element, name){
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   console.log(arr1,arr2)
//   for (i=0; i<arr2.length; i++){
//     if (arr1.indexOf(arr2[i]) == -1) {
//       // element.className += " " + arr2[i];
//       element.addClass(arr2[i])
//     }
//   }
// }

// function groupRemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementsByClassName("bbtn-container");
// var btns = document.getElementsByClassName("bbtn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
//   }



$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>10){
      $('.sticky-header').addClass('active');
    } else {
      $('.sticky-header').removeClass('active');
    }
  });
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
