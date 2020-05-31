import {laCoordinates, longCoordinates, wind, humidity, feels, overcast, days, monthes} from './consts.js';

export default function translate() {
  const enLang = document.querySelector('.english-lang');
  const ruLang = document.querySelector('.russian-lang');
  const beLang = document.querySelector('.belarusian-lang');
  const laText = document.querySelector('.latitude SPAN:first-child');
  const longText = document.querySelector('.longtitude SPAN:first-child');
  const windTodayText = document.querySelector('.weather__today-data__wind SPAN:first-child');
  const humidityTodayText = document.querySelector('.weather__today-data__humidity SPAN:first-child');
  const feelsText = document.querySelector('.weather__feels SPAN:first-child');
  const firstDayName = document.querySelector('.weather-week__first-day .weather-week__day');
  const secondDayName = document.querySelector('.weather-week__second-day .weather-week__day');
  const thirdDayName = document.querySelector('.weather-week__third-day .weather-week__day');
  const heading = document.querySelector('.weather__today-data__heading');
  ruLang.addEventListener('click', (event) => {
    const container = event.target;
    translation(container);
  });
  beLang.addEventListener('click', (event) => {
    const container = event.target;
    translation(container);
  });
  enLang.addEventListener('click', (event) => {
    const container = event.target;
    translation(container);
  });

  function translation(container) {
    if (!container.classList.contains('active-lang')) {
      const lang = event.target.textContent;
      localStorage.setItem('language', `${lang}`);
      const prevActiveLang = document.querySelector('.active-lang');
      container.classList.add('active-lang');
      prevActiveLang.classList.remove('active-lang');
      laText.textContent = `${laCoordinates[lang]}`;
      longText.textContent = `${longCoordinates[lang]}`;
      windTodayText.textContent = `${wind[lang]}`;
      humidityTodayText.textContent = `${humidity[lang]}`;
      feelsText.textContent = `${feels[lang]}`;
      heading.textContent = `${overcast[lang]}`;
      firstDayName.textContent = `${days[lang][localStorage.getItem('firstDay')]}`.toUpperCase();
      secondDayName.textContent = `${days[lang][localStorage.getItem('secondDay')]}`.toUpperCase();
      thirdDayName.textContent = `${days[lang][localStorage.getItem('thirdDay')]}`.toUpperCase();
    }
  }
}
