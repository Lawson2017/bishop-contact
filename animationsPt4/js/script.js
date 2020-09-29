
$(function() {
 //slides up until it dissapears, and is relinquished from the DOM
 $(".blue-box").slideUp(2000);
 //make it appear again
 $(".blue-box").slideDown(2000);
 $("p").hide();
 $("p").slideDown(1000);
});