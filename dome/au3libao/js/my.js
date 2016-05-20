$(".close").click(function(){
	$(this).parent().hide()
	clearBlack()
})


$(".ui-menu li").click(function(){
	$(this).addClass("active").siblings().removeClass("active")
	$(this).parent().parent().find(".ui-main .main-list").eq($(this).index()).show().siblings().hide()
})

//..................................................................................................


var n = 0
var num = $(".lunbK .tu .tu-cell").length
var state=0
var tuwidth=944
var lunspeed=200

function lun() {
	var left1=Math.floor($(".lunbK .tu").css("left").slice(0,-2))-tuwidth

	if (state == 0) {
		if(left1<=-num*tuwidth){
			$(".lunbK .tu").animate({left:0},lunspeed)
			left1=0

		}else{
			$(".lunbK .tu").animate({left:left1},lunspeed)
		}
		var n=Math.abs((-left1)/tuwidth)
		$(".lunblist li").eq(n).addClass("active").siblings().removeClass("active")

	}
}

setInterval(lun, 4000)
$(".lunblist li").mouseover(function () {
	var n=$(this).index()
	window.state = 1;
	$(this).addClass("active").siblings().removeClass("active")
	$(this).parent().parent().find(".tu ").animate({left:-n*tuwidth},lunspeed)
	window.n=n
	$(".lunblist  li").mouseout(function(){
		state=0
	})
})
//..................................................
