window.onload = () => {
    const switchElemnt = document.querySelector('.switch-element'),
        slider = document.querySelector('.slider'),
        allCards = document.querySelectorAll('.card');
    let mode = 'train';
    slider.addEventListener('click', () => {
        mode = mode == 'train' ? 'game' : 'train';
        if (mode == 'train') {
            slider.style.marginLeft = '2px';
            switchElemnt.classList.remove('switch-element-game-mode');
            allCards.forEach(item => {
                item.classList.remove('card-game-mode');
            });
        } else {
            slider.style.marginLeft = '68px';
            switchElemnt.classList.add('switch-element-game-mode');
            allCards.forEach(item => {
                item.classList.add('card-game-mode');
            });
        }
    })
}
