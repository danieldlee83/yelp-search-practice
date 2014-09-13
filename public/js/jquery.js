$(function(){
  $("#slider > img:gt(0)").hide();
     $("#button-next").click(function() { 
        $("#slider > img:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .appendTo("#slider");
  });

  $("#slider > img:gt(0)").hide();
    $("#button-previous").click(function() { 
      $("#slider > img:last")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .appendTo("#slider");
  });

});







