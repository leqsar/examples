export default function changeMode() {
    const switchElement = document.querySelector('.switch-element'),
        slider = document.querySelector('.slider'),
        allCards = document.querySelectorAll('.category'),
        menu = document.querySelector('.burger-menu-wrap'),
        burgerIcon = document.querySelectorAll('LI');
    let mode = 'train',
        nameOfMode = document.createElement('P');
    nameOfMode.textContent = `${mode.toUpperCase()}`;
    nameOfMode.classList.add('switch-element-text');
    switchElement.prepend(nameOfMode);

    switchElement.addEventListener('click', () => {
        mode = mode == 'train' ? 'game' : 'train';
        nameOfMode.textContent = `${mode.toUpperCase()}`;
        if (mode == 'train') {
            slider.style.marginLeft = '2px';
            switchElement.classList.remove('switch-element-game-mode');
            nameOfMode.classList.remove('switch-text-game-mode');
            menu.classList.remove('burger-menu-game-mode');
            allCards.forEach(item => {
                item.classList.remove('card-game-mode');
            });
        } else {
            slider.style.marginLeft = '68px';
            switchElement.classList.add('switch-element-game-mode');
            nameOfMode.classList.add('switch-text-game-mode');
            menu.classList.add('burger-menu-game-mode');
            allCards.forEach(item => {
                item.classList.add('card-game-mode');
            });
        }
    });
}
