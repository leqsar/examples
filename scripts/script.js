import burgerMenuOpen from './burger-menu.js';
import changeMode from './switch-element.js';
import categoryGeneration from './category-generation.js';
import defineLink from './define-link.js';
import cardFlip from './card-flip.js';
import playAudio from './audio-play.js';
import highliteLinks from './highliteLinks.js';
import startButton from './start-button.js';

window.onload = () => {
    changeMode();
    burgerMenuOpen();
    highliteLinks();
    if (window.location.href == "file:///D:/Study/JSProjects/english-for-kids/index.html") {
        defineLink();
    } else {
        startButton();
        playAudio();
        cardFlip();
        defineLink();
        categoryGeneration();
    }
}
