$(document).ready(function(){


$( "#stupid-button" ).click(function(){
 	$(document.body).append("<br>some text");	
});


$( "#another-stupid-button" ).click(function(){
	$(document.body).append("<h1>some text<h1>");
});

$( "#yet-another-stupid-button").click(function(){
	$(document.body).append("<ul class = 'more-ex'><li>element1</li><li>element2</li><li>element3</li></ul>")
});


});