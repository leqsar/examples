import convertation from './app/convertation.js';
import changeBackground from './app/changeBackground.js';
import clocks from './app/clocks.js';
import getWeatherData from './app/getWeatherData.js';
import getLocationInfo from './app/getLocationInfo.js';
import {temperatureToday, temperatureFeels, firstDay, secondDay, thirdDay, windToday, humidityToday, latitude, longtitude, region} from './app/consts.js';

const imageChanger = document.querySelector('.settings__image-changer');
const fareng = document.querySelector('.far');
const celsius = document.querySelector('.cel');

if (localStorage.getItem('measurment') === undefined) {
  localStorage.setItem('measurment', 'cel');
  celsius.classList.add('active');
} else {
  fareng.classList.add('active');
}

convertation();
changeBackground();
clocks();
getLocationInfo();
imageChanger.addEventListener('click', changeBackgroud);
