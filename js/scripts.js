$(document).ready(function(){
  // Design
  $(".design").click(function(){
    $(".design").hide().toggle();
    $("#design").slideToggle();
  });


  // development
  $(".development").click(function(){
    $(".development").hide().toggle();
    $("#development").slideToggle();
  });

  // Product management
  $(".products").click(function(){
    $(".products").hide().toggle();
    $("#products").slideToggle();
  });


  // work4box
  $(".work4").mouseenter(function(){
    $("#work4box").show().mouseleave(function(){
      $("#work4box").hide();
    });
  });

  $(".work2").mouseenter(function(){
    $("#work2box").show().mouseleave(function(){
      $("#work2box").hide();
    });
  });

  $(".work3").mouseenter(function(){
    $("#work3box").show().mouseleave(function(){
      $("#work3box").hide();
    });
  });

  $(".work1").mouseover(function(){
    $("#work1box").show().mouseleave(function(){
      $("#work1box").hide();
    });
  });

  $(".work5").mouseover(function(){
    $("#work5box").show().mouseleave(function(){
      $("#work5box").hide();
    });
  });

  $(".work6").mouseover(function(){
    $("#work6box").show().mouseleave(function(){
      $("#work6box").hide();
    });
  });

  $(".work7").mouseover(function(){
    $("#work7box").show().mouseleave(function(){
      $("#work7box").hide();
    });
  });

  $(".work8").mouseover(function(){
    $("#work8box").show().mouseleave(function(){
      $("#work8box").hide();
    });
  });

});
