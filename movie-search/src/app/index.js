import {mySwiper} from './swiper.js'

const clearTextArea = document.querySelector('.clear-button'),
	textArea = document.querySelector('.textarea'),
	form = document.querySelector('.search'),
	loader = document.querySelector('.loader'),
	swiperWrapper = document.querySelector('.swiper-wrapper'),
	errorText = document.querySelector('.error'),
	translateText = document.querySelector('.translate'),
	main = document.querySelector('main'),
	apikey = 'd84e996d';
let counter = 0,
	keyword,
	page = 1;
let arr = [];
getMovieTitle('dream', page);

clearTextArea.addEventListener('click', () => {
	textArea.value = '';
});

form.addEventListener('submit', event => {
	arr = [];
	counter = 0;
	page = 1;
	errorText.textContent = '';
	while (swiperWrapper.firstChild !== null) {
		swiperWrapper.removeChild(swiperWrapper.firstChild);
	}
	event.preventDefault();
	keyword = textArea.value;
	getMovieTitle(keyword, page);
});

mySwiper.on('slideChange', function () {
	let index = page*10-6;
	if (mySwiper.realIndex === index) {
		page++;
		getMovieTitle(keyword, page);
	}
});

async function getMovieTitle(keyword, page) {
	try {
		const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200509T152856Z.14ab7d4337bc7092.17700ddb8094d9da104f792e734425d0d1223f2c&text=${keyword}&lang=ru-en`;
		let translateResponse = await fetch(translateUrl, {method: 'POST'});
		let translateData = await translateResponse.json();
		let translation = translateData.text[0];
		if (translation !== undefined) {
			translateText.textContent = `Showing results for ${translation}`;
		}
		const url = `https://www.omdbapi.com/?s=${translation}&page=${page}&apikey=d84e996d`;
		if (page === 1) {
			loader.style.display = 'block';
		}
		let response = await fetch(url, {method: 'POST'});
		let data = await response.json();
		if (page === 1) {
			loader.style.display = 'none';
		}
		if (data.Response === 'False') {
			errorText.textContent = `${data.Error}`;
			loader.style.display = 'none';
		} else {
			loader.style.display = 'none';
			let filmData = data.Search;
			arr = [];
			for (const film of filmData) {
				await create(film);
			}
			arr.forEach(item => {
				mySwiper.appendSlide(item);
			});
			mySwiper.update();
		}
	} catch (error) {
		errorText.textContent = `${error}`;
	}
}

async function create(film) {
	const rateUrl = `https://www.omdbapi.com/?i=${film.imdbID}&apikey=d84e996d`;
	let rateResponse = await fetch(rateUrl);
	let rateData = await rateResponse.json();
	let promise = new Promise(resolve => {
		let img = new Image();
		img.src = film.Poster;
		img.onload = () => {
			return resolve(img.src);
		}
		img.onerror = (err) => {
			console.log(err);
			resolve('Image not found');
		}
	})
	let src = await promise;
	const filmContainer = `<div class="swiper-slide">
								<p class="film-title-wrapper"><a class="film-title" href="https://www.imdb.com/title/${film.imdbID}/videogallery/?ref_=tt_pv_vi_sm">${film.Title}</a></p>
								<img class="film-poster" src="${src}">
								<p class="film-year">${film.Year}</p>
								<p class="film-rate">${rateData.imdbRating}</p>
							</div>`;
	arr.push(filmContainer);
}
