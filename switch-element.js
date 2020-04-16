import turnOnGameMode from './gameMode.js';


export default function changeMode() {
    const switchElement = document.querySelector('.switch-element'),
        slider = document.querySelector('.slider'),
        allCards = document.querySelectorAll('.category'),
        menu = document.querySelector('.burger-menu-wrap'),
        burgerIcon = document.querySelectorAll('LI');
    let mode = sessionStorage.getItem('mode') == null ? 'train' : sessionStorage.getItem('mode'),
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
        sessionStorage.setItem('mode', mode);
        if (mode == 'train') {
            const allImages = document.querySelectorAll('.card IMG'),
                cardContainers = document.querySelectorAll('.card-container'),
                wordContainers = document.querySelectorAll('.word-wrap'),
                startGameButton = document.querySelector('.game-button');
            slider.style.marginLeft = '2px';
            switchElement.classList.remove('switch-element-game-mode');
            nameOfMode.classList.remove('switch-text-game-mode');
            menu.classList.remove('burger-menu-game-mode');
            allCards.forEach(item => {
                item.classList.remove('card-game-mode');
            });
            wordContainers.forEach(wordContainer => {
                wordContainer.style.display = 'flex';
            });
            cardContainers.forEach(cardContainer => {
                cardContainer.style.height = '260px';
            });
            startGameButton.style.display = 'none';
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
