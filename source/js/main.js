// Check if JS is working

const wrapper = document.querySelector('.wrapper');

if (wrapper.classList.contains('wrapper-no-js')) {
  wrapper.classList.remove('wrapper-no-js');
}

// Show additional descripton

const buttonMore = document.querySelector('.aboutus__button');
const hiddenInfos = document.querySelectorAll('.container__info--hidden');
const hiddenInfoSpan = document.querySelector('.container__info span');

buttonMore.addEventListener('click', () => {
  hiddenInfos.forEach((value) => {
    value.classList.toggle('hidden');
  });

  if (buttonMore.textContent === 'Подробнее') {
    hiddenInfoSpan.style.display = 'initial';
    buttonMore.innerHTML = 'Свернуть';
  } else if (buttonMore.textContent === 'Свернуть' && window.screen.width > 769) {
    hiddenInfoSpan.style.display = 'initial';
    buttonMore.innerHTML = 'Подробнее';
  } else {
    hiddenInfoSpan.style.display = 'none';
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

// Footer accordion

const footerTitle2 = document.querySelector('.footer__title2');
const footerTitle3 = document.querySelector('.footer__title3');

const openDescription = (el) => {
  el.classList.remove('title-closed');
  el.style.borderBottom = 'none';
  el.nextElementSibling.style.display = 'flex';
  el.nextElementSibling.style.borderBottom = '1px solid rgba(255, 255, 255, 0.7)';
};

const closeDescription = (el) => {
  el.classList.add('title-closed');
  el.style.borderBottom = '1px solid rgba(255, 255, 255, 0.7)';
  el.nextElementSibling.style.display = 'none';
  el.nextElementSibling.style.borderBottom = 'none';
};

footerTitle2.addEventListener('click', () => {
  if (window.screen.width < 770) {
    if (footerTitle2.classList.contains('title-closed')) {
      openDescription(footerTitle2);
      closeDescription(footerTitle3);
    } else {
      closeDescription(footerTitle2);
      closeDescription(footerTitle3);
    }
  }
});

footerTitle2.addEventListener('keypress', (evt) => {
  if (evt.keyCode === 13 && window.screen.width < 770) {
    if (footerTitle2.classList.contains('title-closed')) {
      openDescription(footerTitle2);
      closeDescription(footerTitle3);
    } else {
      closeDescription(footerTitle2);
      closeDescription(footerTitle3);
    }
  }
});

footerTitle3.addEventListener('click', () => {
  if (window.screen.width < 770) {
    if (footerTitle3.classList.contains('title-closed')) {
      openDescription(footerTitle3);
      closeDescription(footerTitle2);
    } else {
      closeDescription(footerTitle2);
      closeDescription(footerTitle3);
    }
  }
});

footerTitle3.addEventListener('keypress', (evt) => {
  if (evt.keyCode === 13 && window.screen.width < 770) {
    if (footerTitle3.classList.contains('title-closed')) {
      openDescription(footerTitle3);
      closeDescription(footerTitle2);
    } else {
      closeDescription(footerTitle2);
      closeDescription(footerTitle3);
    }
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width > 770) {
    footerTitle2.style.borderBottom = 'none';
    footerTitle3.style.borderBottom = 'none';
    footerTitle2.nextElementSibling.style.display = 'flex';
    footerTitle3.nextElementSibling.style.display = 'flex';
    footerTitle2.nextElementSibling.style.borderBottom = 'none';
    footerTitle3.nextElementSibling.style.borderBottom = 'none';
  } else {
    closeDescription(footerTitle2);
    closeDescription(footerTitle3);
  }
});
