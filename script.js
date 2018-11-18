$(document).ready(function(){


/*Slider - Start*/
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
/*Slider - Ende*/

/*Navigation bekommt HG Farbe - Start*/

$(document).scroll(function () {
    var position = 0;
    position = $(this).scrollTop();
    if (position > 140) {
        $("#Header").css({'background-color': '#4b5c69',
                          'box-shadow': '0 3px 5px 0 rgba(0,0,0,0.2), 0 1px 10px 0 rgba(0,0,0,0.15)'});
    } else {
        $("#Header").css({'background-color': ''});
        $("#Header").css({'box-shadow': ''});
    }
});

/*Navigation bekommt HG Farbe - Ende*/

/*Scrollspy - Start*/

/*Scrollspy - Ende*/

/*Responsive Burgermenü - Start*/
$(function() {
  var menuVisible = false;
  $('#menubutton').click(function() {
  if (menuVisible) {
    $('#Menü').css({'display':'none'});
    if (positionSmall > 90) {
        $("#Header").css({'background-color': '#4b5c69',
                          'box-shadow': '0 3px 5px 0 rgba(0,0,0,0.2), 0 1px 10px 0 rgba(0,0,0,0.15)'});
    } else {
        $("#Header").css({'background-color': ''});
        $("#Header").css({'box-shadow': ''});
    }
    menuVisible = false;
    return;
  }
  $('#Menü').css({'display':'block'})
  $("#Header").css({'background-color':'#4b5c69',
                  'box-shadow': '0 3px 5px 0 rgba(0,0,0,0.2), 0 1px 10px 0 rgba(0,0,0,0.15)'});
  menuVisible = true;
  });
});

$(window).resize(function(){
$('body,html').css('overflow','hidden');
var screenWidth = $(window).width();
$('body, html').css('overflow','visible');

  if (screenWidth >= 1080){
        var position = 0;
        if (position > 90) {
            $("#Header").css({'background-color': '#4b5c69',
                              'box-shadow': '0 3px 5px 0 rgba(0,0,0,0.2), 0 1px 10px 0 rgba(0,0,0,0.15)'});
        } else {
            $("#Header").css({'background-color': ''});
            $("#Header").css({'box-shadow': ''});
        }
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

/*Formular auslesen - Start*/
$('#send').click(function(){
  var Anrede = document.querySelector("#anrede").value;
  var Vorname = document.querySelector("#vorname").value;
  var Nachname = document.querySelector("#nachname").value;
  var Straße = document.querySelector("#straße").value;
  var Plz = document.querySelector("#plz").value;
  var Ort = document.querySelector("#ort").value;
  var Email = document.querySelector("#email").value;
  var Telefon = document.querySelector("#mobil").value;
  
  var AngabenKorrekt = confirm(`Bitte überprüfen Sie, ob Ihre Angaben korrekt sind:
    ${Anrede} ${Vorname} ${Nachname}
    wohnhaft in:
    ${Straße}
    ${Plz} ${Ort}
    Email: ${Email}
    Telefonnummer: ${Telefon}`);
  if (AngabenKorrekt == true){
    $('.eingabefeld').val('');
    alert('Ihr Formular wurde abgeschickt!');
  }
  else {alert('Bitte ändern Sie ihre Angaben!');
  };
});
/*Formular auslesen - Ende*/
});
