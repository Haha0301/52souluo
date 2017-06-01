$(function () {
	//封装选项卡
	 function tab(selector1,i,selector2) {
		$(selector1).mouseenter(function(){
			$(selector1).children().eq(i).show();
			$(selector2).addClass('active');
		});
			
		$(selector1).mouseleave(function () {
			$(selector1).children().eq(i).hide();
			$(selector2).removeClass('active');
		});
	};
	tab('.recommend-li',1,'.recommend');
	tab('.trend-li',1,'.trend');
	tab('.diy-li',1,'.diy');
	tab('.health-li',1,'.health'); 
	tab('.weixin',0,' ');  
	tab('.taobao',0,' ');  
	tab('.b-more',1,' '); 

	// 按钮
	$('.toggle').click(function () {
		$('#collapse').toggleClass('active');
	})
});