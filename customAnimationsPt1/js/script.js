$(function() {
	$(".blue-box").animate({
		"margin-left": "200px",
		"opacity": "0",
		"height": "50px",
		"width": "50px",
		"margin-top": "25px",
	  }, 1000, "linear");
	//cannot use colors for these animations
	//be mindful of screen sizes/non-existant media queries when changing these font-sizes
	$("p").animate({
		"font-size": "+=10px",
	}, 1000, "linear");
});