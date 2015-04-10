// JavaScript Document


$(document).ready(function(){
	$('.edit_btn').mouseover(
			function(){
			$('.user_edit>ul>li').slideDown('fast');
		});
	$('.edit').mouseleave(
			function(){
			$('.user_edit>ul>li').slideUp('fast');
		}
	);
	$('.user_edit>ul>li').click(function(){
		//var loadi = layer.load(3, 0);
		if(this==$('.user_edit>ul>li')[0]){
			var h=window.innerHeight;
			var ph=(h-340)/2;
			$('.bglayer').css('top',ph+'px');
			$('.bglayer').show();	
					$('.bglayer').load('bg.html',function(responseTxt,statusTxt,xhr){
							  if(statusTxt=="success")
								 {			
								 }
							  if(statusTxt=="error"){
								 $('.bglayer').html("Error: "+xhr.status+": "+xhr.statusText+"<br/>出错了，页面不见了！<b class='delay'>3</b>秒后返回主页面");
								 var i=5;
								 var a=setInterval(function(){$('.delay').html(i--);if(i==0)location.href='user.html';},1000);
								}	
					});
		}
	});
	
	
//返回首页菜单	
	var unav = $('.userNav>ul>li');
	unav.hide();
	$(unav[0]).show();
	$('.userNav li').mouseover(function(){
		unav.slideDown();
		});
	$('.userNav').mouseleave(function(){
		unav.slideUp();
/*		for(var i=1;i<unav.length;i++){
			$(unav[i]).slideUp();
			}*/
		$(unav[0]).slideDown(0);
		});
		

//current_nav
	var current_url = window.location.href ;
	var obj = $('.navlist a');
	for(var i=0;i<obj.length;i++){ 
		if(current_url.indexOf(obj[i].href)!=-1){
			$(obj[i]).addClass('current_nav');
		}
	}

var an = $('.want_btn');
var list = $('.nav_right .consult_way');
	an.click(function(){
		if(list.css('display')=='none'){
			list.show();
		}else{
			list.hide();
		}
	});

});//ready END


