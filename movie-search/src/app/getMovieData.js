import {requestInfo} from './index.js'
import {mySwiper} from './swiper.js'
import create from './create.js'


export default async function getMovieData(keyword, page) {
	const loader = document.querySelector('.loader'),
		errorText = document.querySelector('.error'),
		translateText = document.querySelector('.translate');
	try {
		const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200509T152856Z.14ab7d4337bc7092.17700ddb8094d9da104f792e734425d0d1223f2c&text=${requestInfo.keyword}&lang=ru-en`;
		let translateResponse = await fetch(translateUrl, {method: 'POST'});
		let translateData = await translateResponse.json();
		let translation = translateData.text[0];
		if (translation !== undefined) {
			translateText.textContent = `Showing results for ${translation}`;
		}
		const url = `https://www.omdbapi.com/?s=${translation}&page=${requestInfo.page}&apikey=d84e996d`;
		if (requestInfo.page === 1) {
			loader.style.display = 'block';
		}
		let response = await fetch(url, {method: 'POST'});
		let data = await response.json();
		if (requestInfo.page === 1) {
			loader.style.display = 'none';
		}
		if (data.Response === 'False') {
			errorText.textContent = `${data.Error}`;
			loader.style.display = 'none';
		} else {
			loader.style.display = 'none';
			let filmData = data.Search;
			requestInfo.arr = [];
			for (const film of filmData) {
				await create(film);
			}
			requestInfo.arr.forEach(item => {
				mySwiper.appendSlide(item);
			});
			mySwiper.update();
		}
	} catch (error) {
		errorText.textContent = `${error}`;
	}
}
