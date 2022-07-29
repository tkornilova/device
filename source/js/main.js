const buttonMore = document.querySelector('.aboutus__button');
const hiddenInfo = document.querySelector('.container__info--hidden');
const hiddenInfoSpan = document.querySelector('.container__info span');

buttonMore.addEventListener('click', () => {
  hiddenInfo.classList.toggle('hidden');

  if (hiddenInfoSpan.style.display === 'none') {
    hiddenInfoSpan.style.display = 'none';
  } else {
    hiddenInfoSpan.style.display = 'initial';
  }

  if (buttonMore.textContent === 'Подробнее') {
    buttonMore.innerHTML = 'Свернуть';
  } else {
    buttonMore.innerHTML = 'Подробнее';
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width < 767 && buttonMore.innerHTML === 'Свернуть') {
    hiddenInfoSpan.style.display = 'initial';
  }
});
