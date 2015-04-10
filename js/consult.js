	//自制checkbox
	function checkbox(obj){
		if($(obj).attr('class').indexOf('checked') > -1){
			$(obj).removeClass('checked');
		}else{
			$(obj).addClass('checked');
		}
	}
	function checkWordsLength(total,obj,tip){
					var l = obj.val().length;
					
					if(l>=total){
						obj.val(obj.val().substr(0,total));
						tip.html('<span style=color:#ff0000>'+total+'</span>'+'/'+total+'字');
					}else{
						tip.html(l + '/' + total+'字');
					}
				}
	//Test 上传操作
	function _uploadtest(obj){
		var card,logo,name;
		$('.upload-btn').addClass('uploaded');
		if($(obj).next().find('.filecard').length == 5){alert('已达到最大上传数！');return false;}//上传前检测
		//上传成功后
		$(obj).next().append([
			card = $('<div class="filecard" title="文件名称文件名称">').append([
				logo = $('<div class="filelogo word">'),//.txt,.doc,.ppt,.zip
				name = $('<div class="filename">').append("文件名称...")[0]
				])[0]
			])[0];
	}

	