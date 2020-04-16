export default function turnOnGameMode() {
    if (document.querySelector('.word-wrap') !== null) {
        const wordContainers = document.querySelectorAll('.word-wrap'),
            allImages = document.querySelectorAll('.card IMG'),
            cardContainers = document.querySelectorAll('.card-container'),
            startGameButton = document.querySelector('.game-button');
        wordContainers.forEach(wordContainer => {
            wordContainer.style.display = 'none';
        });
        cardContainers.forEach(cardContainer => {
            cardContainer.style.height = '200px';
        });
        startGameButton.style.display = 'flex';
    }
}
