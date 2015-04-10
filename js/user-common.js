$(document).ready(function(){
	//current_nav
	var url = window.location.href;
	console.log(url);
	var obj = $('.navi ul li');
	for(var i=0;i<obj.length;i++){ 
		if(url.indexOf($(obj[i]).find('a')[0].href)!=-1){	
			$(obj[i]).addClass('current');
			$(obj[i]).addClass('current_page_item');
			

		}
	}



//导航
   $('.navi ul').attr("id","example-one");
    var $el, leftPos, newWidth;
        $mainNav2 = $("#example-two");
    
    /*
        EXAMPLE ONE
    */
    
    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#example-one").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left - 10)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos - 10,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
    
    
});