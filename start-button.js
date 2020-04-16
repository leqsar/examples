export default function startButton() {
    if (document.querySelector('.game-button') !== null) {
        const startButton = document.querySelector('.game-button'),
            repeatButton = document.querySelector('.repeat-button');
        startButton.addEventListener('click', () => {
            ///finction with randomize
            startButton.style.display = 'none';
            repeatButton.style.visibility = 'visible';
        })
    }
}
