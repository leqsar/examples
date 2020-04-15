import burgerMenuOpen from './burger-menu.js';
import changeMode from './switch-element.js';
import categoryGeneration from './category-generation.js';
import defineLink from './define-link.js';
import cardFlip from './card-flip.js';

window.onload = () => {
    changeMode();
    burgerMenuOpen();
    if (window.location.href == "file:///D:/Study/JSProjects/english-for-kids/index.html") {
        defineLink();
    } else {
        cardFlip();
        defineLink();
        categoryGeneration();
    }
}
