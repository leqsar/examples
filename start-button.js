import cards from './consts.js';
import randomizer from './randomizer.js';

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
    }
}
