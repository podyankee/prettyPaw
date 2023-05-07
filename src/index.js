import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';

// use modules

slidersInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		// bulletClass: 'about__bullet',
		// bulletActiveClass: 'about__bullet_active',
	},
});

slidersInit('.career__slider', {
	pagination: {
		el: '.career__slider-pagination',
	},
	breakpoints: {
		320: {
			pagination: {
				enabled: true,
			},
		},
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: {
				enabled: false,
			},
		},
		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: {
				enabled: false,
			},
		},
		1240: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				enabled: false,
			},
		},
	},
});

const videoBg = document.querySelector('.video-bg');

videoBg.innerHTML = `
	<source src="video/video.webm" type="video/webm">
	<source src="video/video.mp4" type="video/mp4">
`;
