import mapSet from './mapSet.js';
import getSrc from './getSrc.js';
import {temperatureToday, temperatureFeels, firstDayContainer, secondDayContainer, thirdDayContainer, windToday, humidityToday, latitude, longtitude, region, days} from './consts.js';

export default function showAllDetails(location, weather, threeDaysWeather) {
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
  latitude.textContent = `Latitude: ${degreesLa}° ${minutesLa}'`;
  longtitude.textContent = `Longtitude: ${degreesLong}° ${minutesLong}'`;
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
  temperatureFeels.textContent = `${weather.tempFeels}°`;
  windToday.textContent = `WIND: ${weather.wind} m/s`;
  humidityToday.textContent = `HUMIDITY: ${weather.humidity}%`;
  firstDayContainer.textContent = `${threeDaysWeather.firstDayTemp}°`;
  secondDayContainer.textContent = `${threeDaysWeather.secondDayTemp}°`;
  thirdDayContainer.textContent = `${threeDaysWeather.thirdDayTemp}°`;
  firstDayName.textContent = `${days[threeDaysWeather.firstDayNumber]}`.toUpperCase();
  secondDayName.textContent = `${days[threeDaysWeather.secondDayNumber]}`.toUpperCase();
  thirdDayName.textContent = `${days[threeDaysWeather.thirdDayNumber]}`.toUpperCase();
  mapSet(location.latitude, location.longtitude);
}
