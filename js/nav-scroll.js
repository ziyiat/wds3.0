// DOM Ready
$(function() {
/*USAGE
    <ul>
        <li><a href="#">A</a></li>
        <li><a href="#">B</a></li>
        <li><a href="#">C</a></li>
    </ul>
    给ul加上id  example-one;
    当前li加上class  current_page_item;
*/
    var $el, leftPos, newWidth;
        $mainNav2 = $("#example-two");
    
    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#example-one").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    var nav_margin = parseInt($('.current_page_item').css("margin-right"));//偏移量
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left - nav_margin)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left - nav_margin;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
    
});