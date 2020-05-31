export default function changeBackground() {
  const body = document.querySelector('.body');
  const weatherType = localStorage.getItem('overcast');
  const month = localStorage.getItem('month');
  let season;
  if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else if (month >= 8 && month <= 10) {
    season = 'autumn';
  } else {
    season = 'winter';
  }

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature+${weatherType}+${season}&client_id=3N2uDFZAUtzO3OU5SbiY_I0J9UGJ5Uole62NUmAvLic`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      body.style.backgroundImage = `url(${data.urls.regular})`;
    });
}
