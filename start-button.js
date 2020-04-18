import cards from './consts.js';

export default function startButton() {
    let currentAudio, currentWord,
        mode = document.querySelector('.switch-element-text').textContent,
        allAudio = document.querySelectorAll('AUDIO');
    const cards = document.querySelectorAll('.card'),
        startButton = document.querySelector('.game-button');
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
                    if ((mode == 'GAME') && (!card.classList.contains('unactive'))) {
                        let src =  event.target.src;
                        if (src == currentWord) {
                            document.querySelector('.correct-sound').play();
                            event.target.style.opacity = '0.5';
                            card.classList.add('unactive');
                            allAudio = document.querySelectorAll('.active');
                            /*console.log(allAudio);
                            randomizer(allAudio.length);*/
                        } else {
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

    function randomizer(max) {
        let rand = Math.random() * max,
            randomAudio = Math.floor(rand);
        currentAudio = allAudio[randomAudio];
        allAudio[randomAudio].play();
        currentAudio.classList.remove('active');
        currentWord = currentAudio.previousSibling.previousSibling.previousSibling.previousSibling.src;
    }
}
