export var mySwiper = new Swiper ('.swiper-container', {
	 direction: 'horizontal',
	 pagination: {
		 el: '.swiper-pagination',
	 },
	 navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
	 },
	 slidesPerView: 4,
	 spaceBetween: 30,
	 preloadImages: true,
	 updateOnImagesReady: true
 });
