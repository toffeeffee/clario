$(document).ready(function(){	

	kd_link_changer();
	$(window).on('resize', function() {
		kd_link_changer();
	});
	
	kd_animation_triger();
	$(window).on('scroll', function() {
		kd_animation_triger();
	});	
	
	if($('.grid-4-carousel').length){
		$('.grid-4-carousel.owl-carousel').owlCarousel({
			loop: true,
			items: 4,
			margin: 20,
			dots: false,
			nav: true,
			responsive : {
				0 : {
					items: 1,
				},
				560: {
					items: 2,
				},
				800 : {
					items: 3,
				},
				1040 : {
					items: 4,
				}
			}		
		});	
	}	
	
});

function kd_animation_triger(){
	if($('.animation').length){
		$('.animation').isInViewport(function (status) {
			if (status === 'entered') {
				if($(this).hasClass("animation_run") === false){
					$(this).addClass("animation_run");
				}
			}
			if (status === 'leaved') {
				if($(this).hasClass("animation_run")){
					$(this).removeClass("animation_run");
				}
			}
		}, 300);		
	}
}

function kd_link_changer(){
	if($('[data-desktop]').length && $('[data-mobile]').length){
		if($(window).width() > 560){
			$('[data-desktop]').each(function(){
				$(this).attr("href", $(this).attr("data-desktop"));
			});
		}else{
			$('[data-mobile]').each(function(){
				$(this).attr("href", $(this).attr("data-mobile"));
			});			
		}
	}
}

$.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
$.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};