import {mySwiper} from './swiper.js'

const clearTextArea = document.querySelector('.clear-button'),
	textArea = document.querySelector('.textarea'),
	form = document.querySelector('.search'),
	loader = document.querySelector('.loader'),
	swiperWrapper = document.querySelector('.swiper-wrapper'),
	errorText = document.querySelector('.error');
const apikey = '18edca94';
let filmsArr = [],
	counter = 0,
	keyword;

clearTextArea.addEventListener('click', () => {
	textArea.value = '';
});

form.addEventListener('submit', event => {
	while (swiperWrapper.firstChild) {
		swiperWrapper.removeChild(swiperWrapper.firstChild);
	}
	counter = 0;
	event.preventDefault();
	keyword = textArea.value;
	getMovieTitle(keyword, 1);
});

mySwiper.on('slideChange', function () {
  console.log('slide changed');
});

async function getMovieTitle(keyword, page) {
	const url = `https://www.omdbapi.com/?s=${keyword}&page=${page}&apikey=18edca94`;
	loader.style.display = 'block';
	let response = await fetch(url, {method: 'POST'});
	let data = await response.json();
	loader.style.display = 'none';
	if (data.Response === 'False') {
		errorText.textContent = `${data.Error}`;
	} else {
		loader.style.display = 'none';
		let filmData = data.Search;
		filmData.forEach((film, i) => {
			create(film);
		});
	}
}

async function create(film) {
	const rateUrl = `https://www.omdbapi.com/?i=${film.imdbID}&apikey=18edca94`;
	let rateResponse = await fetch(rateUrl);
	let rateData = await rateResponse.json();
	const filmContainer = `<div class="film">
								<p class="film-title">${film.Title}</p>
								<img class="film-poster" src="${film.Poster}">
								<p class="film-year">${film.Year}</p>
								<p class="film-rate">${rateData.imdbRating}</p>
							</div>`;
	filmsArr.push(filmContainer);
	let slide;
	if ((filmsArr.length === 4) || ((counter === 2) && (filmsArr.length === 2))) {
		if (filmsArr.length === 2) {
			slide =
						`<div class="swiper-slide">
							${filmsArr[0]}
							${filmsArr[1]}
						</div>`;
		} else {
			slide =
						`<div class="swiper-slide">
							${filmsArr[0]}
							${filmsArr[1]}
							${filmsArr[2]}
							${filmsArr[3]}
						</div>`;
		}
		mySwiper.addSlide(1,slide);
		mySwiper.update();
		counter = counter + 1;
		filmsArr = [];
	}
}
