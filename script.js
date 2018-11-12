$(document).ready(function(){
  /*Smooth scrolling -Start*/

$('a').click(function(){
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
          var targetOffset = $target.offset().top;
          var HeaderHeight = $("Header").outerHeight();
          $('html,body,main').animate({scrollTop: targetOffset-HeaderHeight}, 700);
          return false;
      }
  }
});
/*Smooth scrolling -Ende*/
/*Responsive Burgermenü - Start*/
$(function() {
  var menuVisible = false;
  $('#menubutton').click(function() {
  if (menuVisible) {
    $('#Menü').css({'display':'none'});
    menuVisible = false;
    return;
  }
  $('#Menü').css({'display':'block'});
  menuVisible = true;
  });
});

$(window).resize(function(){
$('body,html').css('overflow','hidden');
var screenWidth = $(window).width();
$('body, html').css('overflow','visible');

  if (screenWidth >= 768){
        $('#Menü').css({'display':'block'});
  }   else {
          $('#Menü').css({'display':'none'});
          menuVisible = false;
  }
});
/*Responsive Burgermenü - Ende*/

});
