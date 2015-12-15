var slideWidth= $(".carousel-window li").width();
console.log("slide width", slideWidth);
var slideAmount= $(".carousel-window li").length;
console.log("slide amount", slideAmount);
var ulWidth= slideWidth*slideAmount;
console.log("ul width", ulWidth);
var ulMargin= $(".carousel-window ul").css("margin-left");
ulMargin= parseInt(ulMargin);
console.log("ul margin", ulMargin);
$(".carousel-window ul").css({"width":ulWidth});
$("#left-btn").on("click", function(e){
	e.preventDefault();
	$(".carousel-window ul").animate({
		"margin-right": ulMargin+slideWidth

	}, 770, function(){ulMargin= ulMargin+slideWidth});
});
$("#right-btn").on("click", function(e){
	e.preventDefault();
	$(".carousel-window ul").animate({
		"margin-right": ulMargin-slideWidth

	}, 770, function(){ulMargin= ulMargin-slideWidth});
});