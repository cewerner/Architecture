$(document).ready(function(){

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

  if (screenWidth >= 1079){
        $('#Menü').css({'display':'block'});
  }   else {
          $('#Menü').css({'display':'none'});
          menuVisible = false;
  }
});
$('navbar ul li a').click(function(){
  $('#Menü').css({'display':'none'});
})
/*Responsive Burgermenü - Ende*/

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
});
