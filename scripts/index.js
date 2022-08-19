window.onload = function() {
    if (navigator.userAgent.indexOf("Firefox") > 0) {
      $(".tile:not(.wgbh-right):not(.wgbh-left):not(.wgbh-top):not(.wgbh-bottom):not(.wgbh-mid):not(.wgbh-mid2)").each(function() {
          $(this).wrap('<span class="full-width"></span>');
      });

      // $(".card").addClass("preserve");
    } else if (navigator.userAgent.indexOf("Chrome") < 0) {
      $("#state-1 .card").addClass("preserve");
    }
  }

var num = 1;

function showHint() {
  $("#hint p").show();
  if (num == 4){
    return; 
  } 
  else {
    $('#state-'+num+' .card').addClass("hint");
  }
}

function resetHint(){
  clearInterval(myTimer);
  $('#state-'+num+' .card').removeClass("hint");
  $("#hint p").hide();
  $("#hint").removeClass("up");
  $("#hint").removeClass("last");
}

var myTimer = setInterval(showHint, 2000);

var hintText = ['Tap Card','Tap Card','Tap Card','Tap Card to Restart']

function enablenext(){
    resetHint();
    myTimer = setInterval(showHint, 2000);
    setTimeout(function(){ 

      $('#state-'+num).css("display","none");
      $('#state-'+num+' .card').removeClass('open');
      num++
      if (num == 5){
        num = 1;
      }
      $('#state-'+num).css("display","block");

      $("#hint p").html(hintText[num-1]);

    }, 750);
}

$(".card").click(function(){ 
    $(this).toggleClass("open");
    enablenext();   
});

$("#hint").click(function(){ 
  console.log("click hint");
    // $('#state-'+num+' .card').click();
    // enablenext(); 
});

// Display video if grid not supported

// video not uploaded in directory due to file size, but this works!
var fallback ='<video autoplay loop controls> <source src="video/movie.mp4" type="video/mp4"> Your browser does not support the video tag. </video>'

if('grid' in document.body.style){
  console.log("we can haz grid")
} else {
    $("#content").html(fallback);
}

$(".error").click(function(){ 
  $("#content").html(fallback);
});




