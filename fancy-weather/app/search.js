import getWeatherData from './getWeatherData.js';
export default function search() {
  const textArea = document.querySelector('.search-container__textarea');
  const form = document.querySelector('.search-container');
  form.addEventListener('submit', (event) => {
    console.log('here');
    let searchQuery = textArea.value;
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=04dc1a8695d14a18a47ac6107ddcb380&pretty=1&no_annotations=1`
    console.log(searchQuery);
    event.preventDefault();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const location = {
          latitude: data.results[0].geometry.lat,
          longtitude: data.results[0].geometry.lng,
          city: data.results[0].formatted,
          country: ``
        };
        if (data.results.length !== 0) {
          getWeatherData(location);
        } else {
          const error = document.querySelector('.error-container__error');
          error.textContent = 'No results were found for your request';
          error.style.visibility = 'visible';
        }
        //clocks(data.timestamp.created_unix);
      });
  })
}
