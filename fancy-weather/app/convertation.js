import toFareng from './toFareng.js';
import toCels from './toCels.js';
import {temperatureToday, temperatureFeels, firstDayContainer, secondDayContainer, thirdDayContainer} from './consts.js'

export default function convertation() {
  const fareng = document.querySelector('.far');
  const celsius = document.querySelector('.cel');
  fareng.addEventListener('click', () => {
    if (localStorage.getItem('measurment') === 'cel') {
      celsius.classList.remove('active');
      fareng.classList.add('active');
      localStorage.setItem('measurment', 'far');
      toFareng(temperatureToday);
      toFareng(temperatureFeels);
      toFareng(firstDayContainer);
      toFareng(secondDayContainer);
      toFareng(thirdDayContainer);
    }
  });

  celsius.addEventListener('click', () => {
    if (localStorage.getItem('measurment') === 'far') {
      fareng.classList.remove('active');
      celsius.classList.add('active');
      localStorage.setItem('measurment', 'cel');
      toCels(temperatureToday);
      toCels(temperatureFeels);
      toCels(firstDayContainer);
      toCels(secondDayContainer);
      toCels(thirdDayContainer);
    }
  });
}
