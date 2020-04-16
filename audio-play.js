export default function playAudio () {
    const images = document.querySelectorAll('.card IMG'),
        modeWrap = document.querySelector('.switch-element-text');

    images.forEach(img => {
        img.addEventListener('click', () => {
                if (modeWrap.textContent == 'TRAIN') {
                img.nextElementSibling.nextElementSibling.play();
            }
        });
    });
}
