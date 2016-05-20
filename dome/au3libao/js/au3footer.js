var y = (new Date()).getYear()+(navigator.userAgent.indexOf("Firefox")==-1?0:1900)+(navigator.userAgent.indexOf("Chrome")==-1?0:1900);
var crTxt = ''
+'	<div class="footer">'
+'		<p>'
+'		   <img  src="img/footer_01.png" class="transpar pngfix">'
+'		   <img  src="img/footer_02.jpg" class="transpar pngfix">'
+'		   <img  src="img/footer_03.png" class="transpar pngfix">'
+'		   <img  src="img/footer_04.png" class="transpar pngfix">'
+'		</p>'
+'		<p class="footer_border">'
+'		  版权所有，侵权必究  Copyrights by T3 Entertainment. Licensed by braygame.com.<br>'
+'		  Chinese Language Version Rights licensed by braygame.com. <br>'
+'		  中华人民共和国出版许可号：新广出审[2015]606号 ISBN号 ：7-900730-00-15 中华人民共和国软件产品登记号：国DJY-2006-0028 <br>'
+'		  中华人民共和国著作权合同登记号：2014LR000038号 文化部公测批准文号：文网测字[2005]15号 网络文化经营许可证：沪网文[2011]0439-044 ICP证：沪B2-20030058 沪ICP备10203733号<br>'
+'		</p> '
+'		<p style="position:relative;"><img src="img/footer_05.png" alt="警方提示上海网警网络110" class="transpar"></p>'
+'	</div>';
document.write(crTxt);
