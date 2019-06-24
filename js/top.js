

$(window).load(function(e) {
	$(".box_case_inner").click(function(){
		 window.location=$(this).find("a").attr("href");
		return false;
	});
	$(".box_case_inner").hover(function()
	{
			$(this).css({
			cursor:"pointer"
			});
				
	},function(){
			$(this).css({
			});
				
	});
	
});
