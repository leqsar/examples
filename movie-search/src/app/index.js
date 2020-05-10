import {mySwiper} from './swiper.js'
import create from './create.js'
import submit from './submit.js'
import getMovieData from './getMovieData.js'

const clearTextArea = document.querySelector('.clear-button'),
	textArea = document.querySelector('.textarea');
let requestInfo = {
	page: 1,
	keyword: 'dream',
	arr: []
}

getMovieData(requestInfo.keyword, requestInfo.page);
submit();

clearTextArea.addEventListener('click', () => {
	textArea.value = '';
});

mySwiper.on('slideChange', function () {
	let index = requestInfo.page*10-6;
	if (mySwiper.realIndex === index) {
		requestInfo.page++;
		getMovieData(requestInfo.keyword, requestInfo.page);
	}
	console.log(mySwiper.originalParams.slidesPerView);
});

export {requestInfo};
