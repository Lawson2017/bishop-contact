//fadeTo will not set display to none, so the element is invisible but does not affect the mox model positioning of surrounding elements in the DOM.
//a pitfall of fadeOut is that the element is relinquished from the DOM and will affect the layout.

$(function() {
	$(".green-box").fadeOut (1000);
	$(".green-box").fadeTo(1000,0.5); 
});