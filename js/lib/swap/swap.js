/*$(function(){
	$(".thum_area li a").click(
	function(){
		$(this).parents(".gallery").find(".photo_area li").hide();
		var myID=$(this).attr("href");
		$(myID).fadeIn();
		return false;
	});
 });
 
 */
	
$(function(){
	$(".thum_area li a").hover(
	function(){
		$(this).parents(".gallery").find(".photo_area li").hide();
		var myID=$(this).attr("href");
		$(myID).fadeIn();
		},function(){
		$(this).parents(".gallery").find(".photo_area li").hide();
		$(".active").fadeIn();
	});
 });



// JavaScript Document