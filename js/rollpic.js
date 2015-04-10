    /*最后导入*/
    var picwidth = parseInt($('.picbox').css('width'));
    var piccount = $('.rollpic li').length;
    var nowindex = 1;
    // console.log(piccount);
    $('.next').click(function(event) {
        if(checknowpic(event.target)){
            nowindex++;
            var nowpicleft = (nowindex-1)*picwidth*-1;
            $('.rollpic').css('left',nowpicleft);
            updateroll(nowindex);
        }
        
        return false;
    });
    $('.last').click(function(event) {
        if(checknowpic(event.target)){
             nowindex--;
             var nowpicleft = (nowindex-1)*picwidth*-1;
             $('.rollpic').css('left',nowpicleft);
             updateroll(nowindex);
        }
        return false;
    });
    function checknowpic(obj){
        var nowpicleft = parseInt($('.rollpic').css('left'));
        /* Act on the event */
        if($(obj).attr('class').indexOf('nopic')>-1){
            return false;
        }else{
            return true;
        }
    }
    function updateroll(now){
        var nowpicleft = parseInt($('.rollpic').css('left'));
        console.log(now);
            if(now == piccount){
                $('.next').addClass('nopic');
            }else{
                $('.next').removeClass('nopic');
            }
            if(now == 1){
                $('.last').addClass('nopic');
            }else{
                $('.last').removeClass('nopic');
            }
    }    var picwidth = parseInt($('.picbox').css('width'));
    var piccount = $('.rollpic li').length;
    var nowindex = 1;
    // console.log(piccount);
    $('.next').click(function(event) {
        if(checknowpic(event.target)){
            nowindex++;
            var nowpicleft = (nowindex-1)*picwidth*-1;
            $('.rollpic').css('left',nowpicleft);
            updateroll(nowindex);
        }
        
        return false;
    });
    $('.last').click(function(event) {
        if(checknowpic(event.target)){
             nowindex--;
             var nowpicleft = (nowindex-1)*picwidth*-1;
             $('.rollpic').css('left',nowpicleft);
             updateroll(nowindex);
        }
        return false;
    });
    function checknowpic(obj){
        var nowpicleft = parseInt($('.rollpic').css('left'));
        /* Act on the event */
        if($(obj).attr('class').indexOf('nopic')>-1){
            return false;
        }else{
            return true;
        }
    }
    function updateroll(now){
        var nowpicleft = parseInt($('.rollpic').css('left'));
        console.log(now);
            if(now == piccount){
                $('.next').addClass('nopic');
            }else{
                $('.next').removeClass('nopic');
            }
            if(now == 1){
                $('.last').addClass('nopic');
            }else{
                $('.last').removeClass('nopic');
            }
    }