$(document).ready(function () {

	smoothScroll.init();

  $(".navbar li a").click(function(event) {
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });

  $('.thumbnail').click(function(event){
    $('.carousel').carousel($(this).index('.thumbnail'));
    $('#lightbox').modal();
    event.preventDefault();
  });

});
