$("#menu_img").click(function () { 
  $("#navigation").toggle(1000);
});

 $(".info-content").hide(); 

 $(".info-title").click(function () { 
  $(".info-content").slideToggle(1000);
  
});

$(".content-box").click(function(){
  $(".content-before").animate({
  background: 'blue'
  }, 1000);
});

$(".content-box").click(function(){
  $(".content-before").animate({background: 'blue'});
});

