$(".sel").find(".btn").click(function(event){
  var e=event.currentTarget
  var sel=$(e).parent();
  if(sel.find("ul").css("display")=="none"){
    sel.find("ul").css("display","block")
  }else{
    sel.find("ul").css("display","none")
  }
})
$(".sel ul").find("li").click(function(event){
  var e=event.currentTarget
  $(e).parent().parent().find("input").val($(e).html())
  $(".sel ul").hide();
})
//...............................................................
//<div class="sel">
//<input type="text" value="afe"/>
//<button class="btn"></button>
//<ul style="display:none">
//<li>123</li>
//<li>456</li>
//</ul>
//</div>
//...................................................................

$(".next").parent().find("li").click(function(event){
  var e=event.currentTarget
  $(e).parent().find("li:gt(0)").removeClass("act")
  $(e).addClass("act")

})
