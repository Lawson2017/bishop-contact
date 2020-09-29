$(function(){
        // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8");// grabs all li and child elements of li within the ID
        // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8");// grabs only child elements of li within the ID
        // $("#list").parents('div').css("background-color", "rgba(180, 180, 30, 0.8");// grabs all div parent elements of the ID
        // $("#list").parent('div').css("background-color", "rgba(180, 180, 30, 0.8");// grabs only the first div parent element of the ID
        // $("#list").siblings('p').css("background-color", "rgba(180, 180, 30, 0.8");// grabs all sibling p elements of the ID (on the same level)
        // $("#list").siblings(':header').css("background-color", "rgba(180, 180, 30, 0.8");// grabs all header elements of the ID (on the same level)
        $(":header").siblings().css("background-color", "rgba(180, 180, 30, 0.8");// grabs all header elements of the ID (on the same level)
        $("form").children("input").css("background-color", "rgba(180, 180, 30, 0.8");// grabs all header elements of the ID (on the same level)
});     