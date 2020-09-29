// you can actually write out jQuery instead of the $ sign. 
$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // parameter is the duration of transition in miliseconds (blank/default=400ms,"slow"=600ms,"fast"=200ms)
  // second parameter in fadeTo() is the opacity you want to fade to.
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000,0.5);

  $(".red-box").fadeTo(3000,0.2);
  $(".green-box").fadeTo(2000,0.5);
  $(".blue-box").fadeTo(1000,0.8);

  // toggle, does what it sounds like, if an element is faded out, fadeToggle() fades in and vise-versa.
  $(".blue-box").fadeToggle(1000);
  $(".blue-box").fadeToggle(1000);

});