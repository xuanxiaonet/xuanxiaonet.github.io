$(".jnzhsh .jntu").click(function(){
	$(this).addClass("act").siblings().removeClass("act")
	$(".jnship").css("background","url(../img/img3/ship"+$(this).index()+".jpg)")
})