$(document).ready(function(){

$("#lucky").hide();

$("#stoopid").on("click",function(){
    console.log("HOWDY");
	popUp();
});

$(document).on("click", "#smarty", function() {
    $("#lucky").hide();
    $("#dummy").remove();
});


var popUp = function() {
    $("#lucky").show();
	$("body").append("<p id='dummy'>this content is OPEN</p>");
	$("#lucky").append("<button type='button' id='smarty'>to CLOSE</button>");
  };
	
});