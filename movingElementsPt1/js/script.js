$(function() {
	//need quotations for variable and value assignments for this jQuery application
	//+= increases the margin by whatever value is already given.
	$(".blue-box").animate({
		//2nd parameter in this object method can be the animation time.
		//linear will make the 'margin-left' assignment change occur linearly over the time of the animation. some very fast math on the browser's behalf!
		"margin-left": "+=200px",
	}, 1000, "linear");

	$(".blue-box").animate({
		"margin-left": "-=200px",
	}, 1000, "linear");	
});