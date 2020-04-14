import burgerMenuOpen from './burger-menu.js';
import changeMode from './switch-element.js';

window.onload = () => {
    if (window.location.href == "file:///D:/Study/JSProjects/english-for-kids/index.html") {
        changeMode();
        burgerMenuOpen();
    } else {
        console.log('heh');
    }
}
