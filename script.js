window.onload = () => {
    const switchElement = document.querySelector('.switch-element'),
        slider = document.querySelector('.slider'),
        allCards = document.querySelectorAll('.card');
    let mode = 'train',
        nameOfMode = document.createElement('P');
    nameOfMode.textContent = `${mode.toUpperCase()}`;
    nameOfMode.classList.add('switch-element-text');
    switchElement.prepend(nameOfMode);

    slider.addEventListener('click', () => {
        mode = mode == 'train' ? 'game' : 'train';
        nameOfMode.textContent = `${mode.toUpperCase()}`;
        if (mode == 'train') {
            slider.style.marginLeft = '2px';
            switchElement.classList.remove('switch-element-game-mode');
            nameOfMode.classList.remove('switch-text-game-mode');
            allCards.forEach(item => {
                item.classList.remove('card-game-mode');
            });
        } else {
            slider.style.marginLeft = '68px';
            switchElement.classList.add('switch-element-game-mode');
            nameOfMode.classList.add('switch-text-game-mode');
            allCards.forEach(item => {
                item.classList.add('card-game-mode');
            });
        }
    });

}
