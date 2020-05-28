import {days, monthes} from './consts.js';
export default function clocks() {
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
