export default function burgerMenuOpen() {
    const menuButton = document.querySelector('.burger-menu'),
        burgerIconWrap = document.querySelector('.burger-menu UL'),
        menu = document.querySelector('.burger-menu-wrap');
    let isMenuOpen = false;

    menuButton.addEventListener('click', () => {
        isMenuOpen = isMenuOpen == true ? false : true;
        if (isMenuOpen) {
            menu.style.left = '0vw';
            burgerIconWrap.style.transform = 'rotate(90deg)';
        } else {
            menu.style.left = '-25vw';
            burgerIconWrap.style.transform = 'rotate(0deg)';
        }
    });
    
    ////////// ТУТ ОШИБКА !!!!!!!!!!!!!!!!
    document.addEventListener('click', event => {
        let isMenu =  event.target.classList.contains('burger-menu-wrap'),
            isMenuIcon = event.target.classList.contains('burger-menu');
        if ((isMenuOpen && !isMenu) || isMenuIcon) {
            menu.style.left = '-25vw';
            burgerIconWrap.style.transform = 'rotate(0deg)';
            isMenuOpen = false;
        }
    }, true);
}
