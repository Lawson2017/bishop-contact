$(function() {
	//pass in functions as the 3rd and final parameter. this can be used to time certain animations.
	//you can only time your animations using the sequence of others. use delays to have them happen in between (simply put them in front of the fadeTo with dot notation)
	$(".red-box").fadeTo(1000,0,function(){
		$(".green-box").slideUp(1000,0,function(){
			$(".blue-box").fadeTo(1000,0)
		})
		$(".green-box").slideDown(1000.0)
	})
});