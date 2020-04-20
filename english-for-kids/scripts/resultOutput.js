export default function result(success) {
    const resultImageContainer = document.querySelector('.result-image-wrap '),
        resultImage = document.querySelector('.result-image-wrap IMG'),
        main = document.querySelector('MAIN'),
        successAudio = document.querySelector('.success-sound'),
        failureAudio = document.querySelector('.failure-sound'),
        repeatButton = document.querySelector('.repeat-button')
    if (success) {
        resultImage.src = 'img/success.jpg';
        successAudio.play();
    } else {
        resultImage.src = 'img/failure.jpg';
        failureAudio.play();
    }
    main.style.visibility = 'hidden';
    repeatButton.style.visibility = 'hidden';
    setTimeout(() => {
        resultImageContainer.style.visibility = 'visible';
    }, 500);
    setTimeout(() => {
        document.location.href = "index.html";
    }, 3500);
}
