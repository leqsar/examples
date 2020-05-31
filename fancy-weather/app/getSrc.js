export default function getSrc(weatherType) {
  let src;
  switch (weatherType) {
    case 'Rain':
      src = 'images/cloud-rain.svg';
      break;
    case 'Clear':
      src = 'images/sun.svg';
      break;
    case 'Snow':
      src = 'images/snowflake.svg';
      break;
    case 'Clouds':
      src = 'images/cloud.svg';
      break;
    case 'Rain':
      src = 'images/cloud-rain.svg';
      break;
    default:

  }
  return src;
}
