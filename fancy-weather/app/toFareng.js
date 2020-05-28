export default function toFareng(tempContainer) {
  let celTemperature = tempContainer.textContent;
  let number = celTemperature.substring(0, celTemperature.length - 1);
  let farTemperature = Math.floor((number * 9 / 5) + 32);
  tempContainer.textContent = `${farTemperature}°`;
}
