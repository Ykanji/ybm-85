$(function() {

	var owl = $(".slider")
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide",
		nav: true,
		navText: "",
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		responsiveClass:true,
		responsive:{
				0:{
						items:1,
						nav:false,
						autoplay: false
				},
				992:{
						items:1,
						nav:false,
						autoplay: false
				},
				1200:{
						items:1,
						nav:true
				}
			}
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

});

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 450) {
			$(".menu-f").removeClass("hide-menu").fadeIn('fast');
		} else {
			$(".menu-f").addClass("hide-menu").fadeIn('fast');
		};
	});
});

$(window).scroll(function() {

	var st = $(this).scrollTop();

	$(".img-parallax img").css({
		"transform" : "translate(0%, -" + st /53 + "%"
	});

});

$(function(){
	$(".reviews-slider").owlCarousel({
		loop: true,
		nav: true,
		navText: "",
		center: true,
		itemClass: "my-item",
		items: 3,
		center: true,
		margin: 0,
		responsiveBaseWidth: '.rev-slider',
		responsiveClass:true,
		responsive:{
				0:{
						items:1,
						nav:false,
						autoplay: false
				},
				992:{
						items:1,
						nav:false,
						autoplay: false
				},
				1200:{
						items:3,
						nav:true
				}
			}
	});

	$(".next").click(function(){
		$(".reviews-slider").trigger('next.owl.carousel');
	});
	$(".prev").click(function(){
		$(".reviews-slider").trigger('prev.owl.carousel');
	});
});

$(document).ready(function() {

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});

$(document).ready(function() {
	$(".cta-header, .callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible"),
			setTimeout(function() {
					th.trigger("reset");
					$(".success").removeClass("visible");
					$.magnificPopup.close()
			}, 3000);
		});
	});
});