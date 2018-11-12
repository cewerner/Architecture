$(document).ready(function(){
  /*Smooth scrolling -Start*/
$('a').click(function(){
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body,main').animate({scrollTop: targetOffset}, 700);
          return false;
      }
  }
});
/*Smooth scrolling -Ende*/
};
