$(".close").click(function(){
	$(this).parent().hide()
	clearBlack()
})



//...........................................

$(".sideBtn").click(function(){
	$(this).toggleClass("curr")
	if($(this).hasClass("curr")){
		$(this).parent().animate({"left":"-270px"},200)
	}else{
		$(this).parent().animate({"left":"0px"},200)

	}
})
$(".hd ul li").click(function(){
	$(this).addClass("active").siblings().removeClass("active").parent().parent().siblings().find("ul li").removeClass("active")
})