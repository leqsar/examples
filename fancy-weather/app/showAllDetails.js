import mapSet from './mapSet.js';
import {temperatureToday, temperatureFeels, firstDay, secondDay, thirdDay, windToday, humidityToday, latitude, longtitude, region} from './consts.js';

export default function showAllDetails(location, weather, threeDaysWeather) {
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
