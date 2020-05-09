import {mySwiper} from './swiper.js'

const clearTextArea = document.querySelector('.clear-button'),
	textArea = document.querySelector('.textarea'),
	form = document.querySelector('.search'),
	loader = document.querySelector('.loader'),
	swiperWrapper = document.querySelector('.swiper-wrapper'),
	errorText = document.querySelector('.error'),
	translateText = document.querySelector('.translate'),
	apikey = 'd84e996d';
let filmsArr = [],
	counter = 0,
	keyword,
	page = 1;

clearTextArea.addEventListener('click', () => {
	textArea.value = '';
});

form.addEventListener('submit', event => {
	while (swiperWrapper.firstChild !== null) {

		swiperWrapper.removeChild(swiperWrapper.firstChild);
		console.log(swiperWrapper.firstChild !== null);
	}
	counter = 0;
	event.preventDefault();
	keyword = textArea.value;
	getMovieTitle(keyword, page);
});

async function getMovieTitle(keyword, page) {
	const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200509T152856Z.14ab7d4337bc7092.17700ddb8094d9da104f792e734425d0d1223f2c&text=${keyword}&lang=ru-en`;
	let translateResponse = await fetch(translateUrl, {method: 'POST'});
	let translateData = await translateResponse.json();
	let translation = translateData.text[0];
	translateText.textContent = `${translation}`;
	const url = `https://www.omdbapi.com/?s=${translation}&page=${page}&apikey=d84e996d`;
	loader.style.display = 'block';
	let response = await fetch(url, {method: 'POST'});
	let data = await response.json();
	loader.style.display = 'none';
	if (data.Response === 'False') {
		errorText.textContent = `${data.Error}`;
		loader.style.display = 'none';
	} else {
		loader.style.display = 'none';
		let filmData = data.Search;
		filmData.forEach((film, i) => {
			create(film);
		});
	}
}

async function create(film) {
	const rateUrl = `https://www.omdbapi.com/?i=${film.imdbID}&apikey=d84e996d`;
	let rateResponse = await fetch(rateUrl);
	let rateData = await rateResponse.json();
	const filmContainer = `<div class="swiper-slide">
								<p class="film-title">${film.Title}</p>
								<img class="film-poster" src="${film.Poster}">
								<p class="film-year">${film.Year}</p>
								<p class="film-rate">${rateData.imdbRating}</p>
							</div>`;
	filmsArr.push(filmContainer);
	let slide;
	mySwiper.appendSlide(filmContainer);
	mySwiper.update();
}
