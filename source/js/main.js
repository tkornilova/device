const buttonMore = document.querySelector('.aboutus__button');
const hiddenInfos = document.querySelectorAll('.container__info--hidden');
const hiddenInfoSpan = document.querySelector('.container__info span');

buttonMore.addEventListener('click', () => {
  hiddenInfos.forEach((value) => {
    value.classList.toggle('hidden');
  });

  if (buttonMore.textContent === 'Свернуть') {
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
  if (window.screen.width > 767) {
    hiddenInfoSpan.style.display = 'initial';
  } else if (window.screen.width < 767 && buttonMore.textContent === 'Подробнее') {
    hiddenInfoSpan.style.display = 'none';
  }
});
