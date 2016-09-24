$(document).ready( function() {

	var top = $('.back-to-top');
	var root = $('html, body');

	//smoothscroll effect
	top.click(function() {
	    root.animate({
	        scrollTop: 100,
	    }, 300);
	});

	$(window).scroll( function() {

		var currentScroll = jQuery(this).scrollTop();

		if (currentScroll == 0) {
			top.fadeOut(200);
		}
		else {
			top.fadeIn(200);
		}

	});

});

