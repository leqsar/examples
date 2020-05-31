const latitude = document.querySelector('.map-container__coordinates__lat');
const longtitude = document.querySelector('.map-container__coordinates__long');
const region = document.querySelector('.weather__user-info__location');
const temperatureToday = document.querySelector('.weather__today-info__temperature');
const temperatureFeels = document.querySelector('.weather__feels__temp');
const windToday = document.querySelector('.weather__today-data__wind SPAN:last-child');
const humidityToday = document.querySelector('.weather__today-data__humidity SPAN:last-child');
const firstDayContainer = document.querySelector('.weather-week__first-day__temperature P');
const secondDayContainer = document.querySelector('.weather-week__second-day__temperature P');
const thirdDayContainer = document.querySelector('.weather-week__third-day__temperature P');
const laCoordinates = {
  en: 'LATITUDE',
  ru: 'ШИРОТА',
  be: 'ШЫРАТА'
};
const longCoordinates = {
  en: 'LONGTITUDE',
  ru: 'ДОЛГОТА',
  be: 'ДАУГАТА'
};
const wind = {
  en: 'WIND',
  ru: 'ВЕТЕР',
  be: 'ВЕЦЕР'
};
const humidity = {
  en: 'HUMIDITY',
  ru: 'ВЛАЖНОСТЬ',
  be: 'ВIЛЬГОТНАСЦЬ'
};
const feels = {
  en: 'FEELS LIKE',
  ru: 'ОЩУЩАЕТСЯ',
  be: 'АДЧУВАЕЦЦА'
};
const overcast = {
  en: 'OVERCAST',
  ru: 'ПОГОДА',
  be: 'НАДВОР\'Е'
}
const days = {
  en: {
    1: 'Monday',
    2: 'Tueday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
  },
  ru: {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    0: 'Воскресенье'
  },
  be: {
    1: 'Панядзелак',
    2: 'Ауторак',
    3: 'Серада',
    4: 'Чацвер',
    5: 'Пятнiца',
    6: 'Субота',
    0: 'Нядзеля'
  }
};
const monthes = {
  en: {
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
  },
  ru: {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
  },
  be: {
    0: 'Студзень',
    1: 'Люты',
    2: 'Сакавiк',
    3: 'Красавiк',
    4: 'Май',
    5: 'Лiпень',
    6: 'Чэрвень',
    7: 'Жнiвень',
    8: 'Верасень',
    9: 'Кастрычнiк',
    10: 'Лiстапад',
    11: 'Снежань'
  }
};

export { temperatureToday,
    temperatureFeels,
    firstDayContainer,
    secondDayContainer,
    thirdDayContainer,
    windToday,
    humidityToday,
    latitude,
    longtitude,
    region,
    days,
    laCoordinates,
    longCoordinates,
    monthes,
    humidity,
    wind,
    feels,
    overcast}
