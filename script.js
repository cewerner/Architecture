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

  if (screenWidth >= 1080){
        $('#Menü').css({'display':'block'});
  }   else {
          $('#Menü').css({'display':'none'});
          menuVisible = false;
  }
});
var screenWidth = $(window).width();
if (screenWidth < 1080){
$('navbar ul li a').click(function(){
  $('#Menü').css({'display':'none'});
})
};
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
        $('html,body,main').animate({scrollTop: targetOffset-HeaderHeight-20}, 700);
        return false;
    }
}
});
/*Smooth scrolling -Ende*/

/*Hovereffekt Galerie - Start*/
/*$('figure').mouseover(function(){
  $('figcaption').css({'display':'flex'});
  $('figure img').css({'opacity':'0.5'});
});
$('figure').mouseout(function(){
  $('figcaption').hide();
  $('figure img').css({'opacity':'1'});
});*/
/*Hovereffekt Galerie - Ende*/

/*Bildtexte bei Klick ein und ausblenden - Start*/
/*$('figure').on("click tap", function(){
  if (screenWidth <= 1079){
      if ($('figcaption').is(':hidden')){
        console.log('test');
        $('figcaption').css({'display':'flex'});
        $('figure img').css({'opacity':'0.5'});
      }
      else {
        $('figcaption').hide();
        $('figure img').css({'opacity':'1'});
      }
  }
});*/
/*Bildtexte bei Klick ein und ausblenden - Ende*/

});
