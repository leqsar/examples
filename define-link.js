export default function defineLink() {
    let category;
    const menu = document.querySelector('.burger-menu-wrap');
    menu.addEventListener('click', event => {
        category = event.target.textContent;
        localStorage.setItem('category', category);
    });
}
