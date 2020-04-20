import cards from './consts.js';
import defineLink from './define-link.js';
import generation from './generation.js';

export default function categoryGeneration () {
    const heading = document.createElement('P'),
        burgerIcon = document.querySelector('.burger-menu');
    let category = localStorage.getItem('category');
    heading.classList.add('heading');
    heading.textContent = `${category}`;
    burgerIcon.after(heading);

    switch (category) {
        case 'Action (set A)':
            generation(cards.actionA);
            break;
        case 'Action (set B)':
            generation(cards.actionB);
            break;
        case 'Action (set C)':
            generation(cards.actionC);
            break;
        case 'Adjective':
            generation(cards.adjective);
            break;
        case 'Animal (set A)':
            generation(cards.animalA);
            break;
        case 'Animal (set B)':
            generation(cards.animalB);
            break;
        case 'Clothes':
            generation(cards.clothes);
            break;
        case 'Emotion':
            generation(cards.emotion);
            break;
        default:
    }
}
