import searching from './searching.js';
export default function search() {
  const textArea = document.querySelector('.search-container__textarea');
  const form = document.querySelector('.search-container');
  form.addEventListener('submit', (event) => {
    let searchQuery = textArea.value;
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=04dc1a8695d14a18a47ac6107ddcb380&pretty=1&no_annotations=1`;
    event.preventDefault();
    searching(url);
  })
}
