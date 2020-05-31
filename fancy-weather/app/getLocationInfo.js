import getWeatherData from './getWeatherData.js';
export default function getLocationInfo() {
  const locationUrl = `https://ipinfo.io/json?token=00b98e0e0baa98`;
  fetch(locationUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const location = {
        latitude: data.loc.split(',')[0],
        longtitude: data.loc.split(',')[1],
        city: data.city,
        country: data.country
      };
      getWeatherData(location);
    });
}
