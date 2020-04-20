import cards from './consts.js';
import result from './resultOutput.js';

export default function startButton() {
    let currentAudio, currentWord,
        mode = document.querySelector('.switch-element-text').textContent,
        allAudio = document.querySelectorAll('.card AUDIO');
    const cards = document.querySelectorAll('.card'),
        startButton = document.querySelector('.game-button'),
        progressBar = document.querySelector('.progress-bar-wrap');
    if (startButton !== null) {
        const repeatButton = document.querySelector('.repeat-button');

        allAudio.forEach(audioElem => {
            audioElem.classList.add('active');
        });

        startButton.addEventListener('click', () => {
            startButton.style.display = 'none';
            repeatButton.style.visibility = 'visible';
            randomizer(allAudio.length);
            cards.forEach(card => {
                card.addEventListener('click', event => {
                    progressBar.style.visibility = 'visible';
                    console.log(mode);
                    if ((mode == 'GAME') && (!card.classList.contains('unactive'))) {
                        let src =  event.target.src;
                        if (src == currentWord) {
                            const rightAnswerIcon = document.createElement('DIV');
                            rightAnswerIcon.classList.add('right-answer-icon');
                            progressBar.append(rightAnswerIcon);
                            document.querySelector('.correct-sound').play();
                            event.target.style.opacity = '0.5';
                            card.classList.add('unactive');
                            allAudio = document.querySelectorAll('.active');
                            randomizer(allAudio.length);
                        } else {
                            const wrongAnswerIcon = document.createElement('DIV');
                            wrongAnswerIcon.classList.add('wrong-answer-icon');
                            progressBar.append(wrongAnswerIcon);
                            document.querySelector('.error-sound').play();
                        }
                    }
                });
            });
        });

        repeatButton.addEventListener('click', () => {
            currentAudio.play();
        });

        function randomizer(max) {
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
    }
}
