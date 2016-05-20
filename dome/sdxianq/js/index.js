var state=0
$(".t0 .right ul li").mouseover(function(){
	state=1
	var n=$(this).index()
	$(this).parent().parent().find("img").attr("src","img/img1/lun"+n+".png")
	$(this).addClass("act").siblings().removeClass("act")
	$(".t0 .right ul li").mouseout(function(){
		state=0
	})
})
function lun(){
	if(state==0){
	var n=$(".t0 .right ul .act").index()
	n++
	n>=$(".t0 .right ul li").length&&(n=0)
	$(".t0 .right ul li").eq(n).addClass("act").siblings().removeClass("act")
	$(".t0 .right img").attr("src","img/img1/lun"+n+".png")
	}
}

setInterval(lun,2000)
//...............................................................
$(".t4 .tit li").click(function(){
	$(this).addClass("act").siblings().removeClass("act")
})

$(".t1 .tit li").click(function(){

	$(this).addClass("act").siblings().removeClass("act")

	for(var i=1;i<=$(this).parent().find("li").length;i++){
		$(this).parent().find("li").eq(i-1).find("img").attr("src","img/img1/tab"+i+".png")
		if(i==$(this).parent().find("li").length){
			var src=$(this).find("img").attr("src")
			$(this).find("img").attr("src",src.slice(0,13)+"a"+src.slice(13,17))

		}
	}
	if($(this).index()==0){
		$(".t1 .kuang>h5").html("近战型")
	}else if($(this).index()==1){
		$(".t1 .kuang>h5").html("空中型")
	}else if($(this).index()==2){
		$(".t1 .kuang>h5").html("破坏型")
	}else if($(this).index()==3){
		$(".t1 .kuang>h5").html("强袭型")
	}else if($(this).index()==4){
		$(".t1 .kuang>h5").html("射击型")
	}else if($(this).index()==5){
		$(".t1 .kuang>h5").html("重甲型")
	}
})

//................................................
$(".t3 .r").click(function(){
	var left=Math.floor($(".t3 ul").css("left").slice(0,-2))
	left-=195;
	-left>=390&&(left=-390)
	$(".t3 ul").css("left",left)

})
$(".t3 .l").click(function(){
	var left=Math.floor($(".t3 ul").css("left").slice(0,-2))
	left+=195;

	-left<=0&&(left=0)
	$(".t3 ul").css("left",left)

})

//......................................................
$(".xiaK").mouseover(function(){
	$(".xiaK").mousemove(function(event){
		var x=event.clientX+15
		var y=event.clientY+15
		$(".t5 .boxt5T").css({"top":y,"left":x})
	})


	$(".xiaK .tu").mouseover(function(){
		$(".t5 .boxt5T").show()

		$(this).mouseout(function(){
			$(".t5 .boxt5T").hide()
		})



	})
})



//.............................................................

mnScroll(".gdt",".gun",".xiaK")
function mnScroll(a,b,c) {
	var n = 0

	var gdt = document.querySelectorAll(a)[n]//滚轮
	var div = document.querySelectorAll(b)[n] //滚动条
	var div3 = document.querySelectorAll(c)[n];//内容框


	var width = $(gdt).height()//滚轮高度
	var kuangW = $(div).height();//滚动条高度
	var height2d=$(div3).height() //内容高度

	var height2 = Math.max($(div3).find("ul").height() - height2d, 0)
	var cont = document.querySelectorAll(".main")[n]//作用区域

	function dong(top) {
		$(div3).find("ul").css("top", -(height2 * (top / (kuangW - width))))
		$(gdt).css("top", top)
	}

	var paget = []

	div.onmousedown = function (event) {
		var e = event || window.event;
		var top = e.offsetY - width / 2;
		(top < 0) && (top = 0);
		top > (kuangW - width) && (top = kuangW - width)
		dong(top)
		var ptop = e.screenY
		paget.push(ptop)
		paget.length > 2 && paget.shift()
		cont.onmousemove = function (event) {

			var e = event || window.event;
			ptop = e.screenY
			paget.push(ptop)
			paget.length > 2 && paget.shift()

			var zltop = paget[1] - paget[0]
			var nowtop2 = Math.floor($(gdt).css("top").slice(0, -2))
			var top = (nowtop2 + zltop);

			(top < 0) && (top = 0);
			top > (kuangW - width) && (top = kuangW - width)
			dong(top)

		}
		cont.onmouseup = function () {
			cont.onmousemove = null;
			cont.onmouseup = null;
		}
		return false;

	}


	div3.onmouseover = function (event) {
		div3.onmousewheel = function (event) {
			var event=event||window.event;
			var top2 = Math.floor($(gdt).css("top").slice(0, -2))
			top2 = event.wheelDelta > 0 ? top2 - 60 : top2 + 60;
			(top2 < 0) && (top2 = 0);
			top2 > (kuangW - width) && (top2 = kuangW - width)

			dong(top2)
			var e = event || window.event;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
				return false;
			}
		}
		function ff(event) {
			var top2 = Math.floor($(gdt).css("top").slice(0, -2))
			top2 = event.detail > 0 ? top2 + 24 : top2 - 24;
			(top2 < 0) && (top2 = 0);
			top2 > (kuangW - width) && (top2 = kuangW - width)
			dong(top2)
			event.preventDefault();
		}

		if (window.addEventListener('DOMMouseScroll', ff, false)) {
			window.addEventListener('DOMMouseScroll', ff, false);
		}
		div3.onmouseout = function () {
			window.onmousewheel = null
			if (window.removeEventListener('DOMMouseScroll', ff, null)) {
				window.removeEventListener('DOMMouseScroll', ff, null)
			}
		}
	}

	gdt.onmousedown = function (event) {
		var e = event || window.event
		if (window.event) {
			window.event.cancelBubble = true
		} else {
			e.stopPropagation();
		}
		$(gdt).css("top", $(this).css("top"))
		var ptop = e.screenY
		paget.push(ptop)
		paget.length > 2 && paget.shift()
		cont.onmousemove = function (event) {
			var e = event || window.event;
			ptop = e.screenY
			paget.push(ptop)
			paget.length > 2 && paget.shift()
			var zltop = paget[1] - paget[0]
			var nowtop2 = Math.floor($(gdt).css("top").slice(0, -2))
			var top = (nowtop2 + zltop);
			(top < 0) && (top = 0);
			top > (kuangW - width) && (top = kuangW - width)
			dong(top)
		}
		cont.onmouseup = function () {
			cont.onmousemove = null;
			cont.onmouseup = null;
		}
		return false;
	}


//$(".gt").click(function(){                                 //上按钮
//	var nowtop= Math.floor($(gdt).css("top").slice(0,-2))
//	var top=(nowtop-50);
//	(top < 0) && (top = 0);
//	top > (kuangW - width) && (top = kuangW - width)
//	dong(top)
//})
//$(".gb").click(function(){                                //下按钮
//	var nowtop= Math.floor($(gdt).css("top").slice(0,-2))
//	var top=(nowtop+50);
//	(top < 0) && (top = 0);
//	top > (kuangW - width) && (top = kuangW - width)
//	dong(top)
//})

}