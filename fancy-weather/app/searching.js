import getWeatherData from './getWeatherData.js';
export default function searching(url) {
  const error = document.querySelector('.error-container__error');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.results.length !== 0) {
        error.style.visibility = 'hidden';
        const location = {
          latitude: data.results[0].geometry.lat,
          longtitude: data.results[0].geometry.lng,
          city: data.results[0].formatted,
          country: ``
        };
        getWeatherData(location);
      } else {
        error.textContent = 'No results were found for your request';
        error.style.visibility = 'visible';
      }
    });
}
