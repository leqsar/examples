export default function burgerMenuOpen() {
    const menuButton = document.querySelector('.burger-menu'),
        burgerIconWrap = document.querySelector('.burger-menu UL'),
        menu = document.querySelector('.burger-menu-wrap');
    let isMenuOpen = false;

    menuButton.addEventListener('click', () => {
        isMenuOpen = isMenuOpen ? false : true;
        if (isMenuOpen) {
            menu.style.left = '0vw';
            burgerIconWrap.style.transform = 'rotate(90deg)';
        }
    });

    document.addEventListener('click', event => {
        let isMenu =  event.target.classList.contains('burger-menu-wrap'),
            isMenuIcon = event.target.classList.contains('burger-menu');
        if ((isMenuOpen && !isMenu) || isMenuIcon) {
            menu.style.left = '-25vw';
            burgerIconWrap.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                isMenuOpen = false;
            }, 200);
        }
    }, true);
}
