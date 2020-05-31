export default function getSrc(weatherType) {
  let src;
  switch (weatherType) {
    case 'Rain':
      src = 'cloud-rain.svg';
      break;
    case 'Clear':
      src = 'sun.svg';
      break;
    case 'Snow':
      src = 'snowflake.svg';
      break;
    case 'Clouds':
      src = 'cloud.svg';
      break;
    case 'Rain':
      src = 'cloud-rain.svg';
      break;
    default:

  }
  return src;
}
