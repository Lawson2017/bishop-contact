$(function() {
	// console.log statements do not fire dynamically with animations/are not effected by the .delay() funct
	$(".red-box").fadeTo(1000, 0.2);
	console.log("red box faded");
	//chaining is calling in functions consecutively to be called one after the other
	$(".green-box").delay(2000).fadeTo(1000, 0.5);
	console.log("green box faded")
	$(".blue-box").delay(4000).fadeTo(1000, 0.8);
	console.log("all boxes faded")

});