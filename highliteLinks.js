export default function highliteLinks() {
    const links = document.querySelectorAll('.burger-menu-wrap P');
    let category = localStorage.getItem('category');
    links.forEach(item => {
        if (item.textContent == category) {
            item.style.textDecoration = 'underline';
        }
    });
}
