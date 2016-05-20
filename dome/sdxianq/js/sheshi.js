
function getCookie(cookie_name) {
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name);
	if (cookie_pos != -1)
	{
		cookie_pos += cookie_name.length + 1;
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1)
		{
			cookie_end = allcookies.length;
		}
		var value = unescape(allcookies.substring(cookie_pos, cookie_end));
	}
	return value;
}
var ss = getCookie("sheshibox1");
if(ss==1){
	$(".box1").show()
	$(".box01").hide()
	$(".box0").hide()
	document.cookie='sheshibox1=0'
}

$(".ul0 li").click(function(){
	var value=$(this).html()
	var index=$(".box0 .head .last").index()
	$("h1").html(value)
	$(".box0 .head .last").html(value)
	$(".box1 .head li").eq(index).html(value)
})
$(".zil").click(function () {
	var n = $(this).index()
	var value=$(this).find("h3").html()
	console.log(value)
	$(".box01").hide()
	$(".box0").show()
	$(".box0 .ul0 li").eq(n).addClass("active").siblings().removeClass("active")
	$(".box0 .head .last").html(value)
	$(".box1 .head li").eq(4).html(value)
})