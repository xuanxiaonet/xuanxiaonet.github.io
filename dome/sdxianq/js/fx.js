$(".you .ul0 li:not(.tiao)").click(function () {
	var n = $(this).index()
	$(".box0 .ul0 li").eq(n).addClass("active").siblings().removeClass("active")
	$(".box0").show().siblings().hide()
})
$(".list li").click(function () {
	$(this).addClass("act").siblings().removeClass("act")
})
$(".list .prv").click(function () {
	var n = $(this).parent().find("ul .act").index();
	n--
	n <= 0 && (n = 0)
	$(this).parent().find("ul li").eq(n).addClass("act").siblings().removeClass("act")
})
$(".list .next").click(function () {
	var n = $(this).parent().find("ul .act").index();
	n++;
	n >= $(".list ul li").length && (n = $(".list ul li").length)
	$(this).parent().find("ul li").eq(n).addClass("act").siblings().removeClass("act")
})
//..............................


//........................................
$(".close,.boxT img").click(function () {
	$(this).parent().hide()
	clearBlack()
})
//..........................................
