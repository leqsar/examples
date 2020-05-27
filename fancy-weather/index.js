
const locationKey = '00b98e0e0baa98';
const locationUrl = `https://ipinfo.io/json?token=00b98e0e0baa98`;
const latitude = document.querySelector('.map-container__coordinates__lat');
const longtitude = document.querySelector('.map-container__coordinates__long');
const region = document.querySelector('.weather__user-info__location');
const temperatureToday = document.querySelector('.weather__today-info__temperature');
const temperatureFeels = document.querySelector('.weather__feels__temp');
const windToday = document.querySelector('.weather__today-data__wind');
const humidityToday = document.querySelector('.weather__today-data__humidity');
const firstDay = document.querySelector('.weather-week__first-day__temperature P');
const secondDay = document.querySelector('.weather-week__second-day__temperature P');
const thirdDay = document.querySelector('.weather-week__third-day__temperature P');
const imageChanger = document.querySelector('.settings__image-changer');
const fareng = document.querySelector('.far');
const celsius = document.querySelector('.cel');

const days = {
  1: 'Mon',
  2: 'Tue',
  3: 'Wen',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
  7: 'Sun'
};
const monthes = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

if (localStorage.getItem('measurment') === undefined) {
  localStorage.setItem('measurment', 'cel');
  celsius.classList.add('active');
} else {
  fareng.classList.add('active');
}

fetch(locationUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const location = {
      latitude: data.loc.split(',')[0],
      longtitude: data.loc.split(',')[1],
      city: data.city,
      country: data.country
    };
    getWeatherData(location);
  });

clocks();

imageChanger.addEventListener('click', () => {

});

fareng.addEventListener('click', () => {
  if (localStorage.getItem('measurment') === 'cel') {
    celsius.classList.remove('active');
    fareng.classList.add('active');
    localStorage.setItem('measurment', 'far');
    toFareng(temperatureToday);
    toFareng(temperatureFeels);
    toFareng(firstDay);
    toFareng(secondDay);
    toFareng(thirdDay);
  }
});

celsius.addEventListener('click', () => {
  if (localStorage.getItem('measurment') === 'far') {
    fareng.classList.remove('active');
    celsius.classList.add('active');
    localStorage.setItem('measurment', 'cel');
    toCels(temperatureToday);
    toCels(temperatureFeels);
    toCels(firstDay);
    toCels(secondDay);
    toCels(thirdDay);
  }
});

function toFareng(tempContainer) {
  let celTemperature = tempContainer.textContent;
  let number = celTemperature.substring(0, celTemperature.length - 1);
  let farTemperature = Math.floor((number * 9 / 5) + 32);
  tempContainer.textContent = `${farTemperature}°`;
}

function toCels(tempContainer) {
  let farTemperature = tempContainer.textContent;
  let number = farTemperature.substring(0, farTemperature.length - 1);
  let celTemperature = Math.floor((number - 32) * 5 / 9);
  tempContainer.textContent = `${celTemperature}°`;
}

function getWeatherData(location) {
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

function showAllDetails(location, weather, threeDaysWeather) {
  const degreesLa = Math.floor(location.latitude);
  const minutesLa = Math.floor((location.latitude - degreesLa) * 60);
  const degreesLong = Math.floor(location.longtitude);
  const minutesLong = Math.floor((location.longtitude - degreesLong) * 60);
  latitude.textContent = `Latitude: ${degreesLa}° ${minutesLa}'`;
  longtitude.textContent = `Longtitude: ${degreesLong}° ${minutesLong}'`;
  region.textContent = `${location.city}, ${location.country}`;
  temperatureToday.textContent = `${weather.temp}°`;
  temperatureFeels.textContent = `${weather.tempFeels}°`;
  windToday.textContent = `WIND: ${weather.wind} m/s`;
  humidityToday.textContent = `HUMIDITY: ${weather.humidity}%`;
  firstDay.textContent = `${threeDaysWeather.firstDayTemp}°`;
  secondDay.textContent = `${threeDaysWeather.secondDayTemp}°`;
  thirdDay.textContent = `${threeDaysWeather.thirdDayTemp}°`;
  mapSet(location.latitude, location.longtitude);
}

function clocks() {
  let timeNode = document.querySelector('.weather__user-info__time');
  function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
  }
  setInterval(
    function() {
      let date = new Date();
      const dayNumber = date.getDay();
      const monthNumber = date.getMonth();
      const day = date.getDate();
      timeNode.textContent = `${days[dayNumber]} ${day} ${monthes[monthNumber]} ${getCurrentTimeString()}`;
    },
    1000
  );
}

function mapSet(la, long) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGVxc2FyIiwiYSI6ImNrYW5yeTZidjB3djQycnFtdTV0ZTVvYjMifQ.WT8gCkDu90rFZ9dD4kWWsQ';
  let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [long, la],
      zoom: 8
  });
  let marker = new mapboxgl.Marker()
    .setLngLat([long, la])
    .addTo(map);
}
