$(document).ready(function(){
  // Design
  $(".design").click(function(){
    $(".design").slideToggle();
    $("#design").slideToggle();
  });

  $("#design").click(function(){
    $(".design").slideToggle();
    $("#design").slideToggle();
  });
  // development
  $(".development").click(function(){
    $(".development").slideToggle();
    $("#development").slideToggle();
  });
  $("#development").click(function(){
    $("#development").slideToggle();
    $(".development").slideToggle();
  });
  // Product management
  $(".products").click(function(){
    $(".products").slideToggle();
    $("#products").slideToggle();
  });
  $("#products").click(function(){
    $("#products").slideToggle();
    $(".products").slideToggle();
  });
});
