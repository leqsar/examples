import showAllDetails from './showAllDetails.js';

export default function getWeatherData(location) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longtitude}&appid=f10034f045888292e6951fae8b6f832a`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let datesArr = [];
      let day = new Date(data.list[0].dt * 1000).getDay();
      let measurment = localStorage.getItem('measurment');
      let tempInCels = Math.floor(data.list[0].main.temp - 273);
      let tempFeelsInCels = Math.floor(data.list[0].main.feels_like - 273);
      const weather = {
        temp: measurment === 'cel' ? tempInCels : Math.floor((tempInCels * 9 / 5) + 32),
        tempFeels: measurment === 'cel' ? tempFeelsInCels : Math.floor((tempFeelsInCels * 9 / 5) + 32),
        wind: data.list[0].wind.speed,
        humidity: data.list[0].main.humidity,
        type: data.list[0].weather[0].main
      };
      localStorage.setItem('overcast', `${data.list[0].weather[0].main}`);
      data.list.forEach((item) => {
        datesArr.push(new Date(item.dt * 1000).getDay());
      })
      const firstDay = day === 6 ? 0 : day + 1;
      const secondDay = firstDay === 6 ? 0 : firstDay + 1;
      const thirdDay = secondDay === 6 ? 0 : secondDay + 1;
      const firstDayTemp = Math.floor(data.list[datesArr.indexOf(firstDay)].main.temp - 273);
      const secondDayTemp = Math.floor(data.list[datesArr.indexOf(secondDay)].main.temp - 273);
      const thirdDayTemp = Math.floor(data.list[datesArr.indexOf(thirdDay)].main.temp - 273);
      localStorage.setItem('firstDay', `${firstDay}`);
      localStorage.setItem('secondDay', `${secondDay}`);
      localStorage.setItem('thirdDay', `${thirdDay}`);
      const threeDaysWeather = {
        firstDayTemp: measurment === 'cel' ? firstDayTemp : Math.floor((firstDayTemp * 9 / 5) + 32),
        secondDayTemp: measurment === 'cel' ? secondDayTemp : Math.floor((secondDayTemp * 9 / 5) + 32),
        thirdDayTemp: measurment === 'cel' ? thirdDayTemp : Math.floor((thirdDayTemp * 9 / 5) + 32),
        firstDayType: data.list[datesArr.indexOf(firstDay)].weather[0].main,
        secondDayType: data.list[datesArr.indexOf(secondDay)].weather[0].main,
        thirdDayType: data.list[datesArr.indexOf(thirdDay)].weather[0].main
      }
      showAllDetails(location, weather, threeDaysWeather);
    })
}
