$(document).ready(function () {
  var menu = $('.menu');
  var origOffsetY = menu.offset().top;
  function scroll() {
      if ($(window).scrollTop() >= origOffsetY) {
          $('.menu').addClass('navbar-fixed-top');
          $('.container').addClass('container-padding');
      } else {
          $('.menu').removeClass('navbar-fixed-top');
          $('.container').removeClass('container-padding');
      }
  }
  document.onscroll = scroll;
});

function openModal(){
  $("#myModal").modal('show');
}
