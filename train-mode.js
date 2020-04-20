export default function trainMode() {
  const allImages = document.querySelectorAll('.card IMG'),
      cardContainers = document.querySelectorAll('.card-container'),
      wordContainers = document.querySelectorAll('.word-wrap'),
      startGameButton = document.querySelector('.game-button'),
      repeatButton = document.querySelector('.repeat-button'),
      progressBar = document.querySelector('.progress-bar-wrap'),
      inactiveImgs = document.querySelectorAll('.unactive IMG'),
      inactiveCards = document.querySelectorAll('.unactive'),
      allAudio = document.querySelectorAll('.card AUDIO'),
      slider = document.querySelector('.slider'),
      switchElement = document.querySelector('.switch-element'),
      nameOfMode = document.querySelector('.switch-element-text'),
      menu = document.querySelector('.burger-menu-wrap'),
      allCards = document.querySelectorAll('.category'),
      resultIcons = document.querySelectorAll('.progress-bar-wrap DIV');
  slider.style.marginLeft = '2px';
  switchElement.classList.remove('switch-element-game-mode');
  nameOfMode.classList.remove('switch-text-game-mode');
  menu.classList.remove('burger-menu-game-mode');
  allCards.forEach(item => {
      item.classList.remove('card-game-mode');
  });
  wordContainers.forEach(wordContainer => {
      wordContainer.style.display = 'flex';
  });
  cardContainers.forEach(cardContainer => {
      cardContainer.style.height = '260px';
  });
  inactiveCards.forEach(unactiveCard => {
      unactiveCard.classList.remove('unactive');
  });
  inactiveImgs.forEach(inactiveImg => {
      inactiveImg.style.opacity = '1';
  });
  allAudio.forEach(audio => {
      audio.classList.add('active');
  });
  resultIcons.forEach(icon => {
      icon.parentNode.removeChild(icon);
  });

  if (startGameButton !== null) {
      startGameButton.style.display = 'none';
      repeatButton.style.visibility = 'hidden';
      progressBar.style.visibility = 'hidden';
  }
}
