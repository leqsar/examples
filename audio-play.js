export default function playAudio () {
    const images = document.querySelectorAll('.card IMG');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.nextElementSibling.nextElementSibling.play();
        })
    });
}
