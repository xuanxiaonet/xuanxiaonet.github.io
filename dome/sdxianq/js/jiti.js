$(".XZjiti .xzL").click(function(){
	var n = $(this).parent().find(".list .act").index();
	console.log(n)
	n--
	n <= 0 && (n = 0)
	$(this).parent().find(".list li").eq(n).addClass("act").siblings().removeClass("act")
})
$(".XZjiti .xzR").click(function(){
	var n = $(this).parent().find(".list .act").index();
	n++;
	n >= $(".list ul li").length && (n = $(".list ul li").length)
	$(this).parent().find(".list li").eq(n).addClass("act").siblings().removeClass("act")
})
$(".xzjiti li").click(function(){
	$(this).find(".black").toggleClass("hide")
})