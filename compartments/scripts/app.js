$(document).ready(function() {
  $('.mobile_nav').click(function() {
    $(this).toggleClass('open');
    $(this).siblings('ul').slideToggle('slow');
  });
});