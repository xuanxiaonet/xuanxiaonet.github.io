// JavaScript Document


var pageW = 720;
var winW = $(window).width();
winW = (winW > pageW) ? pageW : winW;

var MSCALE = winW / pageW;
//MSCALE: 页面与浏览器的宽度比，后续计算页面PX属性时可用。显示PX = 实际PX / MSCALE;



/*
//移除Apple的橡皮筋效果，将会去除页面中所有的鼠标事件，慎用！
function stopScrolling( touchEvent ) {   
	touchEvent.preventDefault();   
}  
document.addEventListener( 'touchstart' , stopScrolling , false );  
document.addEventListener( 'touchmove' , stopScrolling , false );
*/


var isApple = false;
//平台、设备和操作系统
var system ={win:false,mac:false,xll:false};
//检测平台
var pf = navigator.platform;
system.win = pf.indexOf("Win") == 0;
system.mac = pf.indexOf("Mac") == 0;
system.x11 = (pf == "X11") || (pf.indexOf("Linux") == 0);
//跳转语句

if(system.win || system.mac || system.xll){
	//alert("电脑设备");
}else{
	if(getMobileType("iPhone") == "YES" || getMobileType("iPad") == "YES"){
		//alert("移动设备:iPhone");
		document.write('<meta content="width='+pageW+', initial-scale=' + MSCALE + ', minimum-scale=' + MSCALE + ', maximum-scale=' + MSCALE*2 + ', user-scalable=yes, target-densitydpi=device-dpi" name="viewport" id="viewport">');
		isApple = true;
	}else if(getMobileType("iPhone") == "IOS8"){
		//alert("移动设备:iPhone");
		//alert("IOS8")
		document.write('<meta content="width='+pageW+', initial-scale=0.4, minimum-scale=0.4, maximum-scale=0.8, user-scalable=yes, target-densitydpi=device-dpi" name="viewport" id="viewport">');
		isApple = true;
	}else{
		//alert("移动设备:其他");
		document.write('<meta content="width='+pageW+', initial-scale=' + MSCALE + ', minimum-scale=' + MSCALE + ', maximum-scale=' + MSCALE*2 + ', user-scalable=yes, target-densitydpi=device-dpi" name="viewport" id="viewport">');
		isApple = false;
	}
}


function getMobileType(typeName){
	var backStr;
	var navigator = window.navigator;
	userAgent = navigator.userAgent,
	android = userAgent.match(/(Android)[\s\/]+([\d\.]+)/),
	ios = userAgent.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),
	wp = userAgent.match(/(Windows\s+Phone)\s([\d\.]+)/),
	isWebkit = /WebKit\/[\d.]+/i.test(userAgent),
	isSafari = ios ? (navigator.standalone ? isWebkit : (/Safari/i.test(userAgent) && !/CriOS/i.test(userAgent) && !/MQQBrowser/i.test(userAgent))) : false,
	os = {};
	var type = userAgent.indexOf(typeName);
	var str;
	if(type >= 0){
		backStr = "YES";
		//alert(ios[2][0]);
		if(ios[2][0] == 8){
			backStr = "IOS8";
		}
	}
	//alert(backStr);
	return backStr;
}

if(isApple){
	MSCALE = 1;	//Apple的比始终为1。
}

