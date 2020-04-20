export default function defineLink() {
    let category;
    const menu = document.querySelector('.burger-menu-wrap'),
        categories = document.querySelectorAll('.category');
    menu.addEventListener('click', event => {
        if (!event.target.classList.contains('burger-menu-wrap')) {
            category = event.target.textContent;
            localStorage.setItem('category', category);
        }
    });

    categories.forEach(item=> {
        item.addEventListener('click', () => {
            category = item.querySelector('P').textContent;
            localStorage.setItem('category', category);
        })
    });
}
