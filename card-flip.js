export default function cardFlip () {
    const flipButton = document.querySelectorAll('.card I'),
        cardContainers = document.querySelectorAll('.card-container');
    flipButton.forEach((button, i) => {
        button.addEventListener('click', event => {
            let cardContainer = cardContainers[i];
            cardContainer.classList.add('flip');
            cardContainer.addEventListener('mouseleave', () => {
                cardContainer.classList.remove('flip');
            });
        });
    });
}
