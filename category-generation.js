import cards from './consts.js';
import defineLink from './define-link.js';

export default function categoryGeneration () {
    const allWords = document.querySelectorAll('.word');
    let category = localStorage.getItem('category');
    switch (category) {
        case 'Action (set A)':
            generation(cards.actionA);
            break;
        case 'Action (set B)':
            generation(cards.actionB);
            break;
        case 'Action (set C)':

            break;
        case 'Adjective':

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
    function generation(wordsInformation) {
        allWords.forEach((word, i)=> {
            word.prepend(`${wordsInformation[i].word}`);
        });
    }
}
