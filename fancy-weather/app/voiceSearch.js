import searching from './searching.js';

export default function voiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
  const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
  const recognition = new SpeechRecognition();
  recognition.lang = 'ru-RU';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  const micro = document.querySelector('.search-container__voice-search');
  const icon = document.querySelector('.micro-icon');
  micro.addEventListener('click', () => {
    recognition.start();
    icon.classList.add('active-micro');
  });
  recognition.addEventListener('result', (event) => {
    console.log(event.results);
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${event.results[0][0].transcript}&key=04dc1a8695d14a18a47ac6107ddcb380&pretty=1&no_annotations=1`;
    searching(url);
  });
  recognition.addEventListener('speechend', () => {
    icon.classList.remove('active-micro');
    recognition.stop();
  })
}
