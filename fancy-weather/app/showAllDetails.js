import mapSet from './mapSet.js';
import getSrc from './getSrc.js';
import changeBackground from './changeBackground.js';
import {temperatureToday, temperatureFeels, firstDayContainer, secondDayContainer, thirdDayContainer, windToday, humidityToday, latitude, longtitude, region, days, laCoordinates, longCoordinates, wind, humidity, feels, overcast} from './consts.js';

export default function showAllDetails(location, weather, threeDaysWeather) {
  changeBackground();
  let lang = localStorage.getItem('language');
  const degreesLa = Math.floor(location.latitude);
  const minutesLa = Math.floor((location.latitude - degreesLa) * 60);
  const degreesLong = Math.floor(location.longtitude);
  const minutesLong = Math.floor((location.longtitude - degreesLong) * 60);
  const firstDayName = document.querySelector('.weather-week__first-day .weather-week__day');
  const secondDayName = document.querySelector('.weather-week__second-day .weather-week__day');
  const thirdDayName = document.querySelector('.weather-week__third-day .weather-week__day');
  const mainIconHolder = document.querySelector('.weather__today-data__icon');
  const firstDayIcon = document.querySelector('.weather-week__first-day__temperature IMG');
  const secondDayIcon = document.querySelector('.weather-week__second-day__temperature IMG');
  const thirdDayIcon = document.querySelector('.weather-week__third-day__temperature IMG');
  const laText = document.querySelector('.latitude SPAN:first-child');
  const longText = document.querySelector('.longtitude SPAN:first-child');
  const windTodayText = document.querySelector('.weather__today-data__wind SPAN:first-child');
  const humidityTodayText = document.querySelector('.weather__today-data__humidity SPAN:first-child');
  const feelsText = document.querySelector('.weather__feels SPAN:first-child');
  const heading = document.querySelector('.weather__today-data__heading');
  laText.textContent = `${laCoordinates[lang]}`;
  longText.textContent = `${longCoordinates[lang]}`;
  latitude.textContent = `: ${degreesLa}° ${minutesLa}'`;
  longtitude.textContent = `: ${degreesLong}° ${minutesLong}'`;
  feelsText.textContent = `${feels[lang]}`;
  heading.textContent = `${overcast[lang]}`;
  if (location.country === ``) {
    region.textContent = `${location.city}`;
  } else {
    region.textContent = `${location.city}, ${location.country}`;
  }
  mainIconHolder.src = getSrc(weather.type);
  firstDayIcon.src = getSrc(threeDaysWeather.firstDayType);
  secondDayIcon.src = getSrc(threeDaysWeather.secondDayType);
  thirdDayIcon.src = getSrc(threeDaysWeather.thirdDayType);
  temperatureToday.textContent = `${weather.temp}°`;
  temperatureFeels.textContent = `: ${weather.tempFeels}°`;
  windToday.textContent = `: ${weather.wind} m/s`;
  windTodayText.textContent = `${wind[lang]}`;
  humidityToday.textContent = `: ${weather.humidity}%`;
  humidityTodayText.textContent = `${humidity[lang]}`;
  firstDayContainer.textContent = `${threeDaysWeather.firstDayTemp}°`;
  secondDayContainer.textContent = `${threeDaysWeather.secondDayTemp}°`;
  thirdDayContainer.textContent = `${threeDaysWeather.thirdDayTemp}°`;
  firstDayName.textContent = `${days[lang][localStorage.getItem('firstDay')]}`.toUpperCase();
  secondDayName.textContent = `${days[lang][localStorage.getItem('secondDay')]}`.toUpperCase();
  thirdDayName.textContent = `${days[lang][localStorage.getItem('thirdDay')]}`.toUpperCase();
  mapSet(location.latitude, location.longtitude);
}
