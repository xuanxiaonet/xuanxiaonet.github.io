//...............................................................select框模拟
function mnSelect() {
	$(".sel").find(".btn").click(function (event) {
		var e = event.currentTarget
		var sel = $(e).parent();
		if (sel.find("ul").css("display") == "none") {
			sel.find("ul").css("display", "block")
		} else {
			sel.find("ul").css("display", "none")
		}
	})
	$(".sel ul").find("li").click(function (event) {
		var e = event.currentTarget
		$(e).parent().parent().find("input").val($(e).html())
		$(".sel ul").hide();
	})
}
//...............................................................判断设备类型
function goPAGE() {
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		window.location.href = "你的手机版地址";
		alert("手机")
	}
	else {
		window.location.href = "你的电脑版地址";
		alert("pc")
	}
}
//...............................................................判断浏览器
function goBrowser() {
	var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
	var isWeixin = ua.indexOf('micromessenger') != -1;
	var isWeiBo = ua.indexOf("weibo") != -1
	var isQQ = ua.indexOf("qq") != -1
	if (isWeixin) {
		location.href = 'download/index.html';
	}
	//if (isWeiBo) {
	//  location.href='download/index.html'; //在新浪微博客户端打开
	//}
	//if (isQQ) {
	//  location.href='download/index.html'; //在QQ空间打开
	//}
}
//..............................................................滚动条模拟
function mnScroll() {
	var n = 0
	var width = 153//滚轮高度
	var kuangW = 345;//滚动条高度
	var height2d = 340 //内容高度


	var div3 = document.querySelectorAll(".xiaK")[n];//内容框
	var div = document.querySelectorAll(".gun")[n] //滚动条
	var gdt = document.querySelectorAll(".gdt")[n]//滚轮

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
		window.onmousewheel = function (event) {
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

//$(".gt").click(function(){
//	var nowtop= Math.floor($(gdt).css("top").slice(0,-2))
//	var top=(nowtop-50);
//	(top < 0) && (top = 0);
//	top > (kuangW - width) && (top = kuangW - width)
//	dong(top)
//})
//$(".gb").click(function(){
//	var nowtop= Math.floor($(gdt).css("top").slice(0,-2))
//	var top=(nowtop+50);
//	(top < 0) && (top = 0);
//	top > (kuangW - width) && (top = kuangW - width)
//	dong(top)
//})



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
}
//.......................................................................获取cookie
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
//.......................................................................获取cookie
function getOffset(e){
	var target = e.target;
	this.pageCoord = getPageCoord(target);
	this.eventCoord = {
		X : e.clientX,
		Y :  e.clientY
	};
	this.offsetCoord = {
		X : this.eventCoord.X - this.pageCoord.X,
		Y : this.eventCoord.Y - this.pageCoord.Y
	};
	return this.offsetCoord;
}
function getPageCoord(element){
	var coord = { X : 0, Y : 0 };
	while (element){
		coord.X += element.offsetLeft;
		coord.Y += element.offsetTop;
		element = element.offsetParent;
	}
	return coord;
}
//var offx=event.offsetX==undefined?getOffset(e).X:event.offsetX;





