$(document).ready(function(){
	var wrapperOffset = $(".wrapper-1").offset().top;
	$(window).scroll(function(){
	var scrollPos = $(window).scrollTop();	
	
	if (scrollPos >= wrapperOffset) {
		$(".wrapper-1").addClass('fixed');
	}
	else {
		$(".wrapper-1").removeClass('fixed');
	}	
});
});