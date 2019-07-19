$(document).ready(function(){
  $(".design").click(function(){
    $(".design").slideToggle();
    $(".overlay-design").slideToggle();
  });

  $(".overlay-design").click(function(){
    $(".design").slideToggle();
    $(".overlay-design").slideToggle();
  });
  // development
  $(".development").click(function(){
    $(".development").slideToggle();
    $(".overlay-development").slideToggle();
  });
  $(".overlay-development").click(function(){
    $(".overlay-development").slideToggle();
    $(".development").slideToggle();
  });
});
