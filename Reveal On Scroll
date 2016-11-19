
$(document).ready(function(){
	var windowHeight = $(window).height();	
	var windowScrollPos = $(window).scrollTop();
	var windowScrollposBottom = windowHeight + windowScrollPos;
	

$.fn.revealOnScroll = function(){

	return this.each(function(){
	
	var objOFfset = $(this).offset();
	var wrapperOffsetTop = objOFfset.top;


	if(!$(this).hasClass("hidden")){
		$(this).css("opacity", .0).addClass("hidden");
	}	
	
		<!-- $(".status").html(windowHeight); -->
		if(!$(this).hasClass("animate-complete")){
			if (windowScrollposBottom > wrapperOffsetTop) {
	<!-- 			$(".effect").addClass("addme"); -->
				$(this).animate({"opacity" : 1}, 1000).addClass("animate-complete");
			}
		}
	});

	}
	//end our code here..

	$(window).scroll(function(){

		windowHeight = $(window).height();	
		windowScrollPos = $(window).scrollTop();
		windowScrollposBottom = windowHeight + windowScrollPos;
		
		//Add Class Here For effect On scroll
		$(".body-container").revealOnScroll();	
		$(".smooth1").revealOnScroll();	
		$(".smooth2").revealOnScroll();	
	});

});

