import turnOnGameMode from './gameMode.js';
import trainMode from './train-mode.js';

export default function changeMode() {
    const switchElement = document.querySelector('.switch-element'),
        slider = document.querySelector('.slider'),
        allCards = document.querySelectorAll('.category'),
        menu = document.querySelector('.burger-menu-wrap'),
        burgerIcon = document.querySelectorAll('LI');
    let mode = localStorage.getItem('mode') == null ? 'train' : localStorage.getItem('mode'),
        nameOfMode = document.createElement('P');
    nameOfMode.textContent = `${mode.toUpperCase()}`;
    nameOfMode.classList.add('switch-element-text');
    switchElement.prepend(nameOfMode);

    if (mode == 'game') {
        slider.style.transitionDuration = '0ms';
        addGameModeStyles();
    }

    switchElement.addEventListener('click', () => {
        mode = mode == 'train' ? 'game' : 'train';
        nameOfMode.textContent = `${mode.toUpperCase()}`;
        localStorage.setItem('mode', mode);
        if (mode == 'train') {
            trainMode();
        } else {
            slider.style.transitionDuration = '250ms';
            addGameModeStyles();
        }
    });

    function addGameModeStyles() {
        slider.style.marginLeft = '68px';
        switchElement.classList.add('switch-element-game-mode');
        nameOfMode.classList.add('switch-text-game-mode');
        menu.classList.add('burger-menu-game-mode');
        allCards.forEach(item => {
            item.classList.add('card-game-mode');
        });
        turnOnGameMode();
    }
}
