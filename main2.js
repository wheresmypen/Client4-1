$(document).ready(function(){

console.log("hi");

document.getElementById("container").style.color="blue";

$("p").mouseover(function(){
	$("p").css("color","pink");
});

$("h2,h3,h4").append("<strong>!</strong>");

$("a").on("click",function(){
	var r = confirm("Are you sure that you want to leave this page?");
	if (r === false){
		$("a").remove();
		return false;
	};
});


});

