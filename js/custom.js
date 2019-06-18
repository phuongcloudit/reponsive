$(function() {
	var nav = $('#header'),
	offset = nav.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top + nav.height() ) {
	    $('.header_f').addClass('fixed');
	  } else {
	     $('.header_f').removeClass('fixed');
	  }
	});
});



// anchor in page
$(window).bind('load',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if ( $( $(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				if($(window).width() > 640){
					$('html,body').animate({ scrollTop: p.top - 80}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p.top - 80}, 400);
				}
			}
			return false;
		});
	});
});

// anchor top page #
$(window).bind('load',function(){
	"use strict";
 var hash = location.hash;
 if(hash){
	  var p1 = $(hash).offset();
	if($(window).width() > 640){
		
					$('html,body').animate({ scrollTop: p1.top - 80}, 400);
					console.log(p1.top);
				}
				else {
					$('html,body').animate({ scrollTop: p1.top - 80}, 400);
				}
	}

});
