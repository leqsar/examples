window.onload = () => {
    const switchElement = document.querySelector('.switch-element'),
        slider = document.querySelector('.slider'),
        allCards = document.querySelectorAll('.card'),
        menu = document.querySelector('.burger-menu-wrap'),
        menuButton = document.querySelector('.burger-menu'),
        burgerIcon = document.querySelectorAll('LI'),
        burgerIconWrap = document.querySelector('.burger-menu UL');
    let mode = 'train',
        isMenuOpen = false,
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

    menuButton.addEventListener('click', () => {
        isMenuOpen = isMenuOpen == true ? false : true;
        if (isMenuOpen) {
            menu.style.left = '0vw';
            burgerIconWrap.style.transform = 'rotate(90deg)';
        } else {
            menu.style.left = '-25vw';
            burgerIconWrap.style.transform = 'rotate(0deg)';
        }
    })
}
