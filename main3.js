$(document).ready(function(){

$("#STOOPID").on("click",function(){
	popUp();
});

var popUp = function(){
	$("body").append("<p id='DUMMY'>OPEN</p>");
	$("#DUMMY").append("<button type='button' id='SMARTY'>CLOSE</button>");
	$("#SMARTY").on("click",function(){
		$("#DUMMY").remove();
	})

};
	
});