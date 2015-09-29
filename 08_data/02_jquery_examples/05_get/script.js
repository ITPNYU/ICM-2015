$(document).ready(function() { //jQuery's method of listening for the DOM to load
	// Put all your code INSIDE this function
	var url = "http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial";
	// get the content of the URL into the variable "response"
	$.get(url, function (response) {
		console.log(response); // see everything
		
    	//drill down and get the data you want
    	console.log(response.weather[0].description);

    	//jQuery makes it easy to grab a DOM element.
    	// Use CSS syntax, "#" for id and "." for class
    	$("#info").html("The temperature is " + response.main.temp + "&deg; F");

	});

});

/*
=== NOTES === 
* Most functions in jQuery start with "$". Yeah, it looks weird at first.

* The $.get() function is similar to p5's loadJSON() function. It takes 2 paramaters:
    1. The URL to load
    2. A function to handle the content of the URL.

    In this example, the function is inline, as an anonymous function. You could also write it like:
    	$.get(url,nameOfFunctionDefinedSomewhereElse);

    and then, of course, you'd have to define that function:
    	function nameOfFunctionDefinedSomewhereElse(response){
		
    	}

	Like in p5, the parameter is sent to the function automatically. 
	You just have to name it something. Here it's called "response"
  More info: http://api.jquery.com/jquery.get/

* Access DOM elements in jQuery using $("CSS SYNTAX HERE"). 
  Inside the quotes, write the path to the element using CSS selectors like "#" and "."
  For example, "#info" gets any element with an id="info"
  ".article" gets any and all elements with a class="article"
  More examples: http://www.w3schools.com/jquery/jquery_ref_selectors.asp

*/