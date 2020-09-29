$(function() {
	//hide and show does not yield any animations, the transition occurs in a matter of nanoseconds.
	$(".blue-box").hide(1000);
	$(".blue-box").show(1000);
	//despite the property value of display:none on the new blue2 element hacked into the html, this jQuery will reveal it on the page.
	//a hide animation will shrink into upper left corner in this application.
});