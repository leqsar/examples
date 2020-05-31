import convertation from './app/convertation.js';
import changeBackground from './app/changeBackground.js';
import clocks from './app/clocks.js';
import getWeatherData from './app/getWeatherData.js';
import getLocationInfo from './app/getLocationInfo.js';
import search from './app/search.js';
import translate from './app/translate.js';
import voiceSearch from './app/voiceSearch.js';
import {temperatureToday, temperatureFeels, firstDay, secondDay, thirdDay, windToday, humidityToday, latitude, longtitude, region} from './app/consts.js';

const imageChanger = document.querySelector('.settings__image-changer');
const fareng = document.querySelector('.far');
const celsius = document.querySelector('.cel');
const enLang = document.querySelector('.english-lang');
const ruLang = document.querySelector('.russian-lang');
const beLang = document.querySelector('.belarusian-lang');

if (localStorage.getItem('measurment') === (undefined || null)) {
  console.log('here');
  localStorage.setItem('measurment', 'cel');
  celsius.classList.add('active');
} else {
  switch (localStorage.getItem('measurment')) {
    case 'cel':
      celsius.classList.add('active');
      break;
    case 'far':
      fareng.classList.add('active');
      break;
    default:
  }
}

if (localStorage.getItem('language') === (undefined || null)) {
  localStorage.setItem('language', 'en');
  enLang.classList.add('active-lang');
} else {
  switch (localStorage.getItem('language')) {
    case "ru":
      ruLang.classList.add('active-lang');
      break;
    case "en":
      enLang.classList.add('active-lang');
      break;
    case "be":
      beLang.classList.add('active-lang');
      break;
    default:
  }
}

voiceSearch();
clocks(new Date());
search();
convertation();
translate();
changeBackground();
getLocationInfo();
imageChanger.addEventListener('click', changeBackground);
