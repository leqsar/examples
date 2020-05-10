import {requestInfo} from './index.js'

export default async function create(film) {
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
	requestInfo.arr.push(filmContainer);
}
