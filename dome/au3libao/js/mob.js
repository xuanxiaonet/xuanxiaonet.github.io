// JavaScript Document

var dw = 720;
var bw = $(window).width();
var bd = bw / dw;

function hScale(t){
	var obj_t = $(t);
	
	var n = obj_t.length;
	for(var i=0; i<n; i++){
		if(!Boolean(obj_t.eq(i).attr("style"))){
			var t_height = obj_t.eq(i).css("height").slice(0,-2);
			obj_t.eq(i).css("height",t_height*bd + "px");
		}
	}
}


function mScale(){
	var obj_t = $("p,h1,h2,h3,h4,h5,h6,div,span,b,s,i,strong,a,ol,ul,li,dl,dd,form,input,textarea,select");
	
	var n = obj_t.length;
	for(var i=0; i<n; i++){
		var t_fontSize = obj_t.eq(i).css("font-size").slice(0,-2);
		var t_lineHeight = obj_t.eq(i).css("line-height").slice(0,-2);
		var t_textIndent = obj_t.eq(i).css("text-indent").slice(0,-2);
		var t_mt = obj_t.eq(i).css("margin-top").slice(0,-2);
		var t_mb = obj_t.eq(i).css("margin-bottom").slice(0,-2);
		var t_pt = obj_t.eq(i).css("padding-top").slice(0,-2);
		var t_pb = obj_t.eq(i).css("padding-bottom").slice(0,-2);
		var t_top = obj_t.eq(i).css("top").slice(0,-2);
		var t_bottom = obj_t.eq(i).css("bottom").slice(0,-2);
		
		obj_t.eq(i).css("font-size",t_fontSize*bd + "px");
		obj_t.eq(i).css("line-height",t_lineHeight*bd + "px");
		obj_t.eq(i).css("text-indent",t_textIndent*bd + "px");
		obj_t.eq(i).css("margin-top",t_mt*bd + "px");
		obj_t.eq(i).css("margin-bottom",t_mb*bd + "px");
		obj_t.eq(i).css("padding-top",t_pt*bd + "px");
		obj_t.eq(i).css("padding-bottom",t_pb*bd + "px");
		obj_t.eq(i).css("top",t_top*bd + "px");
		obj_t.eq(i).css("bottom",t_bottom*bd + "px");
	}
}

