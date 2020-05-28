import showAllDetails from './showAllDetails.js';

export default function getWeatherData(location) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longtitude}&appid=f10034f045888292e6951fae8b6f832a`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let newDay;
      let day = data.list[0].dt_txt.substring(8, 10);
      let measurment = localStorage.getItem('measurment');
      let tempInCels = Math.floor(data.list[0].main.temp - 273);
      let tempFeelsInCels = Math.floor(data.list[0].main.feels_like - 273);
      const weather = {
        temp: measurment === 'cel' ? tempInCels : Math.floor((tempInCels * 9 / 5) + 32),
        tempFeels: measurment === 'cel' ? tempFeelsInCels : Math.floor((tempFeelsInCels * 9 / 5) + 32),
        wind: data.list[0].wind.speed,
        humidity: data.list[0].main.humidity
      };
      let threeDaysWeather = new Object();
      data.list.forEach((item, index) => {
        newDay = item.dt_txt.substring(8, 10);
        if (newDay === day + 1) {
          threeDaysWeather.firstDayTemp = `${Math.floor(data.list[index + 4].main.temp - 273)}`;
        }
        if (newDay === day + 2) {
          threeDaysWeather.secondDayTemp = `${Math.floor(data.list[index + 4].main.temp - 273)}`;
        }
        if (newDay === day + 3) {
          threeDaysWeather.thirdDayTemp = `${Math.floor(data.list[index + 4].main.temp - 273)}`;
        }
      });
      showAllDetails(location, weather, threeDaysWeather);
    })
}
