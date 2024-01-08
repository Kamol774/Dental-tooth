$(document).ready(function() {
  
  $('.hamburger').on('click', function() {
    $('.mobile-menu').addClass('is-active');
  });

  $('.mobile-menu-close').on('click', function() {
		$('.mobile-menu').removeClass('is-active');
	});


  // reviews SWIPER START

  const reviewsSwiper = new Swiper('.reviews-swiper', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-swiper .swiper-button-next',
      prevEl: '.reviews-swiper .swiper-button-prev',
    },
    speed:1000
  
  });

  // Reviews SWIPER END
});