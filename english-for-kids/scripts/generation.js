export default function generation(wordsInformation) {
    const allWords = document.querySelectorAll('.word'),
        allImages = document.querySelectorAll('.card IMG'),
        allBacksideImages = document.querySelectorAll('.card-backside IMG'),
        allRussianWords = document.querySelectorAll('.russian-word'),
        allAudio = document.querySelectorAll('.card AUDIO'),
        wordContainer = document.querySelector('.word-wrap');

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
