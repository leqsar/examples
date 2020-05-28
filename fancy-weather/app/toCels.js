export default function toCels(tempContainer) {
  let farTemperature = tempContainer.textContent;
  let number = farTemperature.substring(0, farTemperature.length - 1);
  let celTemperature = Math.floor((number - 32) * 5 / 9);
  tempContainer.textContent = `${celTemperature}°`;
}
