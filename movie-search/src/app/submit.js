import {requestInfo} from './index.js'
import getMovieData from './getMovieData.js'

export default function submit() {
	const	swiperWrapper = document.querySelector('.swiper-wrapper'),
		errorText = document.querySelector('.error'),
		form = document.querySelector('.search'),
		textArea = document.querySelector('.textarea');

	form.addEventListener('submit', event => {
		requestInfo.arr.length = 0;
		requestInfo.page = 1;
		errorText.textContent = '';
		while (swiperWrapper.firstChild !== null) {
			swiperWrapper.removeChild(swiperWrapper.firstChild);
		}
		event.preventDefault();
		requestInfo.keyword = textArea.value;
		getMovieData(requestInfo.keyword, requestInfo.page);
	});
}
