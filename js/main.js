//Preloader
$('html').addClass('js');

$(window).load(function() {
    $("#loader-wrapper").fadeOut();
});



//Smooth Scroll jQuery

$(document).ready(function() {
$(".t-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
      });
 $(".about-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
      });
  $(".download-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#download").offset().top
    }, 2000);
      });  
 }); 

//Typing header tekst
var typing = document.querySelector('.header-title.display-1'),
    currentIndex = 0;

var startTyping = function (text) {
  if(text.length > currentIndex){
    typing.textContent += text.charAt( currentIndex );
    currentIndex++;
    setTimeout( function(){startTyping(text);}, 70 + Math.random() * 200)
  }	
}


startTyping("Productivity App");


