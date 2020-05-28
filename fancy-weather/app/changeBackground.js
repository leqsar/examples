export default function changeBackground() {
  const body = document.querySelector('.body');
  fetch('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=3N2uDFZAUtzO3OU5SbiY_I0J9UGJ5Uole62NUmAvLic')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      body.style.backgroundImage = `url(${data.urls.regular})`;
    });
}
