$(document).ready(function(){
  $(".design").click(function(){
    $(".design").slideToggle();
    $(".overlay-design").slideToggle();
  });

  $(".overlay-design").click(function(){
    $(".design").slideToggle();
    $(".overlay-design").slideToggle();
  });
});
