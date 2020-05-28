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
const days = {
  1: 'Monday',
  2: 'Tueday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
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
export {temperatureToday, temperatureFeels, firstDay, secondDay, thirdDay, windToday, humidityToday, latitude, longtitude, region, days, monthes}
