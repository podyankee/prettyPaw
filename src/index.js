import './index.html';
import './page.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControls';
import { locationHover } from './modules/locationHover.js';
import { initScrollTopButton } from './modules/scrollToTopButton';

// use modules

menuControl();

locationHover();

videoBackgroundInit();

initScrollTopButton('arrow-top', {
	hover: false,
});

slidersInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		// bulletClass: 'about__bullet',
		// bulletActiveClass: 'about__bullet_active',
	},
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
	item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`);
});

slidersInit('.career__slider', {
	pagination: {
		el: '.career__slider-pagination',
	},
	breakpoints: {
		576: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: false,
		},
		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: false,
		},
		1240: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: false,
		},
	},
});
