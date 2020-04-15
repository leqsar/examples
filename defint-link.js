export default function defineLink() {
    const menu = document.querySelectorAll('.burger-menu-wrap');
    menu.addEventListener('click', event => {
        console.log(event.target.textContent);
    }
}
