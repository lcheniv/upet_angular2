$('.basicslider').flexslider({
	animation:"slide",
	pauseOnHover: true,
	controlNav: true,
	directionNav: false,
	smoothHeigh:true,
	start: function(slider) {
		$('body').removeClass('loading');
	}
});