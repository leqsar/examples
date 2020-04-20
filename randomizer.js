import result from './resultOutput.js';

export default function randomizer(max) {
      let rand = Math.random() * max,
          randomAudio = Math.floor(rand),
          success;
      if (allAudio[randomAudio] == undefined) {
          if (document.querySelector('.wrong-answer-icon') !== null) {
              success = false;
          } else {
              success = true;
          }
          result(success);
      } else {
          currentAudio = allAudio[randomAudio];
          allAudio[randomAudio].play();
          currentAudio.classList.remove('active');
          currentWord = currentAudio.previousSibling.previousSibling.previousSibling.previousSibling.src;
      }
  }
