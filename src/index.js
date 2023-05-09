import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControls';

// use modules

menuControl();

videoBackgroundInit();

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
