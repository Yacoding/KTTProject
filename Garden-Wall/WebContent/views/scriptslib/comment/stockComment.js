$(document).ready(function(){
	$(function(){
		bindEvent();
		initModal();
	});
	
	function  bindEvent(){
		$('#stockNewsBtnDown').bind('click',stockNewsDownEvent);
		$('#stockNewsBtnUp').bind('click',stockNewsUpEvent);
	}
	
	function  initModal(){
		//初始化相应的股市评论信息
		initStockNewsDataSource();
		//初始化贵金属板块评论.
		
	}
	
	
	function  initStockNewsDataSource(){
		startNum = Number($('#stockNewsCount').val())+0;
		$.commonService('../../stockCommentsController/queryDailyStockComments', 'POST',
            {start:startNum,limit:8}, function(map) {
            	$('#stockNewsTotalCount').val(map.count);
                initStockNewsModal(map.data);
	        }); 
	}
	
	function  initStockNewsModal(data){
		$('#stockNewsModal').empty();
	    $.each(data,function(i,obj){
	      $('#stockNewsModal').append('<tr><td><div class="media">'
			+'<div class="media-body">'
			+'<h5 class="media-heading"><a href="'+obj.linkUrl+'" class="text-info" target="view_window">'+obj.title+'</a>'
			+'<span class="label label-primary pull-right">'+obj.pubDate+'</span> </h5>'
			+'<h6 class="text-warning">'+$.trim(obj.descriptContext)+'</h6>'
			+'</div>'
		    +'</div></td></tr>');
	    });
	}
	
	/**
	 * 想下按钮点击事件.
	 */
	function stockNewsDownEvent(){
		currentCount = 0 ;
    	if((Number($('#stockNewsCount').val())+8)>Number($('#stockNewsTotalCount').val())){
    		currentCount = Number($('#stockNewsCount').val());
    	}else{
    		currentCount = Number($('#stockNewsCount').val())+8;
    	}
    	$('#stockNewsCount').val(currentCount);
    	initStockNewsDataSource();
	}
	
	/**
	 * 向上按钮点击事件.
	 */
	function stockNewsUpEvent(){
		currentData = 0;
    	if((Number($('#stockNewsCount').val())-8)>0){
    		currentData = Number($('#stockNewsCount').val())-8;
    	}
    	$('#stockNewsCount').val(currentData);
    	initStockNewsDataSource();
	}
	
	/**
	 *初始化相应的贵金属板块数据源. 
	 */
	function  initMetalNewsDataSource(){
		startNum = Number($('#metalNewsCount').val())+0;
		$.commonService('../../forexCommentsController/queryTodayMetalComments', 'POST',
            {start:startNum,limit:8}, function(map) {
               
	        }); 
	}
	
	/**
	 * 初始化相应的贵金属板块数据模板.
	 */
	function  initMetalNewsModal(data){
		$('#metalNewsModal').empty();
	    $.each(data,function(i,obj){
	       $('#metalNewsModal').append('<a href="'+obj.linkUrl+'" class="list-group-item" target="view_window">'
	             +'<h5 class="list-group-item-heading">'
	             + obj.title+'<div class="pull-right">'+obj.pubDate+'</div> </h5>'
				 +'<h6 class="list-group-item-text text-warning">'
				 +$.trim(obj.descriptContext)
				 +'</h6></a>');
	    });
	}
	
});