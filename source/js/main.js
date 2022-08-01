const wrapper = document.querySelector('.wrapper');

const headerButton = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

const buttonMore = document.querySelector('.aboutus__button');
const hiddenInfos = document.querySelectorAll('.container__info--hidden');
const hiddenInfoSpan = document.querySelector('.container__info span');

const footerTitle2 = document.querySelector('.footer__title2');
const footerTitle3 = document.querySelector('.footer__title3');

// Check if JS is working

if (wrapper.classList.contains('wrapper-no-js')) {
  wrapper.classList.remove('wrapper-no-js');
  footerTitle2.classList.add('title-closed');
  footerTitle2.nextElementSibling.style.display = 'none';
  footerTitle3.nextElementSibling.style.display = 'none';
  footerTitle3.classList.add('title-closed');
  modal.style.display = 'flex';
  modal.style.top = '-1000px';
}

// Open/close modal

headerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.transform = 'translateY(1146px)';
  wrapper.classList.add('wrapper__overlay');
});

modalClose.addEventListener('click', () => {
  modal.style.transform = 'none';
  wrapper.classList.remove('wrapper__overlay');
});

window.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('wrapper__overlay')) {
    modal.style.transform = 'none';
    wrapper.classList.remove('wrapper__overlay');
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width < 1024) {
    modal.style.transform = 'none';
    wrapper.classList.remove('wrapper__overlay');
  }
});

// Show additional descripton

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
  if (window.screen.width > 769) {
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
