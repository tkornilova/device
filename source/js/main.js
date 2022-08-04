import {maskPhone} from '../js/vendor/mask.js';

const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

const headerButton = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const form = document.querySelector('.form');
const inputName = document.querySelectorAll('.form__name input');
const inputPhone = document.querySelectorAll('.form__phone input');
const buttonSubmit = document.querySelector('.form__button');

const buttonMore = document.querySelector('.aboutus__button');
const hiddenInfos = document.querySelectorAll('.container__info--hidden');
const hiddenInfoSpan = document.querySelector('.container__info span');

const footerTitle2 = document.querySelector('.footer__title2');
const footerTitle3 = document.querySelector('.footer__title3');

// Check if JS is working

if (wrapper.classList.contains('wrapper-no-js')) {
  wrapper.classList.remove('wrapper-no-js');
  footerTitle2.classList.add('title-closed');
  footerTitle3.classList.add('title-closed');
  modal.style.top = '-1000px';
  inputPhone.forEach((value) => {
    value.setAttribute('minlength', '18');
    value.setAttribute('maxlength', '18');
  });

  if (window.screen.width > 767) {
    footerTitle2.nextElementSibling.style.display = 'flex';
    footerTitle3.nextElementSibling.style.display = 'flex';
    modal.style.display = 'flex';
  } else {
    footerTitle2.nextElementSibling.style.display = 'none';
    footerTitle3.nextElementSibling.style.display = 'none';
    modal.style.display = 'none';
  }
}

// Open/close modal

headerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.transform = 'translateY(1146px)';
  wrapper.classList.add('wrapper__overlay');
  body.style.overflow = 'hidden';
  inputName[1].focus({preventScroll: true});
  window.scroll(0, 0);

  if (window.screen.height < 757) {
    modal.style.height = `${window.screen.height - 147}px`;
  } else {
    modal.style.height = 'auto';
  }
});

modalClose.addEventListener('click', () => {
  modal.style.transform = 'none';
  wrapper.classList.remove('wrapper__overlay');
  body.style.overflow = 'auto';
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    modal.style.transform = 'none';
    wrapper.classList.remove('wrapper__overlay');
    body.style.overflow = 'auto';
  }
});

window.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('wrapper__overlay')) {
    modal.style.transform = 'none';
    wrapper.classList.remove('wrapper__overlay');
    body.style.overflow = 'auto';
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width < 767) {
    footerTitle2.setAttribute('tabindex', '0');
    footerTitle3.setAttribute('tabindex', '0');
  } else if (window.screen.width < 1024) {
    modal.style.transform = 'none';
    modal.style.display = 'none';
    wrapper.classList.remove('wrapper__overlay');
    body.style.overflow = 'auto';
    footerTitle2.setAttribute('tabindex', '-1');
    footerTitle3.setAttribute('tabindex', '-1');
  } else {
    modal.style.display = 'flex';
  }

  if (window.screen.height < 757) {
    modal.style.height = `${window.screen.height - 147}px`;
  } else {
    modal.style.height = 'auto';
  }
});

// Submit form

buttonSubmit.addEventListener('submit', () => {
  if (inputName.value !== '' && inputPhone.value !== '') {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('phone', inputPhone.value);
  } else {
    form.reportValidity();
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
  if (window.screen.width < 768) {
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
  if (evt.keyCode === 13 && window.screen.width < 768) {
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
  if (window.screen.width < 768) {
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
  if (evt.keyCode === 13 && window.screen.width < 768) {
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
  if (window.screen.width > 767) {
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

// Mask

maskPhone('.form__phone input');
