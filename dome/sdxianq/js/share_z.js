var sinaClass = "fx sina";
var txClass = "fx tx";
var spaceClass = "fx space";
var kaixinClass = "fx kaixin";
var renrenClass = "fx renren";
var URL = location.href;
var TITLE = "";
var PIC = "";		//要转发的图片

document.write('<a href="javascript:" class="' + sinaClass + '" onclick="share(2);">新浪微博</a><a href="javascript:" class="' + txClass + '" onclick="share(1);">腾讯微博</a>');


<!-- 新浪微博+腾讯微博 start -->
function share(stype) {
    var _url = encodeURI(URL);
    var _t = encodeURIComponent(TITLE);
    var _pic = PIC;
    var _appkey = '';
    var _u = '';
    if (stype == 1) {
        _appkey = encodeURI("");
        _u = 'http://v.t.qq.com/share/share.php?title=' + _t + '&url=' + _url + '&pic=' + _pic + '&appkey=' + _appkey;

    } else if (stype == 2) {
        _appkey = encodeURI("");
        _u = 'http://service.weibo.com/share/share.php?title=' + _t + '&url=' + _url + '&source=xianjian&appkey=' + _appkey + '&pic=' + _pic + '&ralateUid=';
    }
    window.open(_u, '', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');
}
<!-- 新浪微博+腾讯微博end -->
<!-- QQ空间分享 start -->
(function(){
	var p = {
		url:URL,
		showcount:'0',		/*是否显示分享总数,显示：'1'，不显示：'0' */
		desc:'',			/*默认分享理由(可选)*/
		summary:'',			/*分享摘要(可选)*/
		title:TITLE,		/*分享标题(可选)*/
		site:'',			/*分享来源 如：腾讯网(可选)*/
		pics:PIC,			/*分享图片的路径(可选)*/
		style:'',
		width:22,
		height:22
	};
	var s = [];
	for(var i in p){
	s.push(i + '=' + encodeURIComponent(p[i]||''));
}
document.write(['<a version="1.0" class="' + spaceClass + '" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',s.join('&'),'" target="_blank">QQ空间</a>'].join(''));
})();
<!-- QQ空间分享 end -->
<!-- 开心网 start -->
document.write('<a href="javascript:" class="' + kaixinClass + '" title="分享到开心网" onclick="shareToKaixin();">开心网</a>');
function shareToKaixin(){
	d=document;
	t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');
	void(kaixin=window.open('http://www.kaixin001.com/~repaste/repaste.php?&amp;rurl='+escape(d.location.href)+'&amp;rtitle='+escape(TITLE)+'&amp;rcontent='+escape(d.title),'kaixin'));
	kaixin.focus();
}
<!-- 开心网 end -->
<!-- 人人网 start -->
document.write('<a href="javascript:" class="' + renrenClass + '" title="分享到人人" onclick="shareToRenren();">人人网</a>');
function shareToRenren(){
	void((function(s,d,e){
		if(/renren\.com/.test(d.location))return;
		var f='http://share.renren.com/share/buttonshare?link=',u=URL,l=TITLE,p=[e(u),'&title=',e(l)].join('');
		function a(){if(!window.open([f,p].join(''),'xnshare',['toolbar=0,status=0,resizable=1,width=626,height=436,left=',(s.width-626)/2,',top=',(s.height-436)/2].join('')))u.href=[f,p].join('');};
		if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);
		else a();
	})(screen,document,encodeURIComponent));
}
<!-- 人人网 end -->

