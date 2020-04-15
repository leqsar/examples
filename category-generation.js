import cards from './consts.js';
import defineLink from './define-link.js';

export default function categoryGeneration () {
    const allWords = document.querySelectorAll('.word'),
        allImages = document.querySelectorAll('.card IMG'),
        allBacksideImages = document.querySelectorAll('.card-backside IMG'),
        allRussianWords = document.querySelectorAll('.russian-word'),
        allAudio = document.querySelectorAll('AUDIO');
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
        allRussianWords.forEach((russianWord, i) => {
            russianWord.prepend(`${wordsInformation[i].translation}`);
        });
        allImages.forEach((img, i) => {
            img.src = `${wordsInformation[i].image}`;
        });
        allBacksideImages.forEach((backsideImg, i) => {
            backsideImg.src = `${wordsInformation[i].image}`;
        });
        allAudio.forEach((audio, i) => {
            audio.src = `${wordsInformation[i].audioSrc}`;
        });
    }
}
