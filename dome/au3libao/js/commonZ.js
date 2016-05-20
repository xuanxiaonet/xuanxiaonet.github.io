// JavaScript Document

//覆盖透明黑色层
/*
	<!-- 弹层区 -->
	<div id="blackBox"></div>
	overBlack();
	clearBlack();
*/
function overBlack(){
	var tempHeight = ($("body").height() > $(window).height()) ? $("body").height() : $(window).height();
	if($(document).height() > tempHeight){
		tempHeight = $(document).height();
	}
	$("#blackBox").css({"position":"absolute","width":"100%","height":tempHeight,"top":0,"left":0,"background":"#000","opacity":0.7,"filter":"alpha(opacity=90)"});
	$("#blackBox").show();
}
function clearBlack(){
	$("#blackBox").hide();
}


//Swf调用方法
function addNewSwf(swfUrl,objID,swfID,width,height,ifAlpha,ifScript,varStr){
	var addcountsflash=new SWFObject(swfUrl,swfID,width,height,"9");
	if(ifAlpha == 1){
		addcountsflash.addParam("wmode","transparent");
	}
	if(ifScript == 1){
		addcountsflash.addParam("allowScriptAccess","always");
	}
	addcountsflash.addParam("flashvars",varStr);
	addcountsflash.addParam("allowfullscreen","true");
	addcountsflash.write(objID);	
}
//Swf加载（新）
function addSwf(swfUrl,objID,width,height,ifAlpha,ifScript,varStr){
    var params = {"allowfullscreen" : true};
	params.flashvars = varStr;
    if(ifAlpha == 1){
        params.wmode = "transparent";
    }
    if(ifScript == 1){
		params.allowScriptAccess = "always";
	}
    var addcountsflash =  swfobject.embedSWF(
        swfUrl,
        objID,
        width,
        height,
        "10.1.0",
        "http://op.9you.com/bin/expressInstall.swf",
		varStr,
        params
    );
	
}


//加入键盘侦听
$(document).keypress(function(e){	//方向键用keydown
	var keyID = e.which;
	//回车文件的侦听
	if(keyID == 13){
		
	}	
	//任意文字输入
	if(keyID != ""){
		
	}
})

//返回顶部
/*<a href="#top" id="backTop" class="backTop" onfocus="blur();"></a>
window.onscroll = function(){
	if(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
		$("#backTop").show();
	}else{
		$("#backTop").hide();
	}
}*/


//微博转发
var shareURL = location.href;
var shareTITLE = "";
var sharePIC = "";
function share(stype) {
    var _url = encodeURI(shareURL);
    var _t = encodeURIComponent(shareTITLE);
    var _pic = sharePIC;
    if (stype == 1){
        _appkey = encodeURI("2894939703");
        _u = 'http://service.weibo.com/share/share.php?title=' + _t + '&url=' + _url + '&source=&appkey=' + _appkey + '&pic=' + _pic + '&ralateUid=';
    }else if (stype == 2){
        _appkey = encodeURI("801070072");
        _u = 'http://v.t.qq.com/share/share.php?title=' + _t + '&url=' + _url + '&pic=' + _pic + '&appkey=' + _appkey;
    }
    window.open(_u, '', 'width=700, height=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');
}

