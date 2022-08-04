/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var headerButton = document.querySelector('.header__button');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');
var form = document.querySelector('.form');
var inputName = document.querySelectorAll('.form__name input');
var inputPhone = document.querySelectorAll('.form__phone input');
var buttonSubmit = document.querySelector('.form__button');
var buttonMore = document.querySelector('.aboutus__button');
var hiddenInfos = document.querySelectorAll('.container__info--hidden');
var hiddenInfoSpan = document.querySelector('.container__info span');
var footerTitle2 = document.querySelector('.footer__title2');
var footerTitle3 = document.querySelector('.footer__title3'); // Check if JS is working

if (wrapper.classList.contains('wrapper-no-js')) {
  wrapper.classList.remove('wrapper-no-js');
  footerTitle2.classList.add('title-closed');
  footerTitle3.classList.add('title-closed');
  modal.style.top = '-1000px';

  if (window.screen.width > 767) {
    footerTitle2.nextElementSibling.style.display = 'flex';
    footerTitle3.nextElementSibling.style.display = 'flex';
    modal.style.display = 'flex';
  } else {
    footerTitle2.nextElementSibling.style.display = 'none';
    footerTitle3.nextElementSibling.style.display = 'none';
    modal.style.display = 'none';
  }
} // Open/close modal


headerButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.style.transform = 'translateY(1146px)';
  wrapper.classList.add('wrapper__overlay');
  body.style.overflow = 'hidden';
  inputName[1].focus({
    preventScroll: true
  });
  window.scroll(0, 0);

  if (window.screen.height < 757) {
    modal.style.height = "".concat(window.screen.height - 147, "px");
  } else {
    modal.style.height = 'auto';
  }
});
modalClose.addEventListener('click', function () {
  modal.style.transform = 'none';
  wrapper.classList.remove('wrapper__overlay');
  body.style.overflow = 'auto';
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.style.transform = 'none';
    wrapper.classList.remove('wrapper__overlay');
    body.style.overflow = 'auto';
  }
});
window.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('wrapper__overlay')) {
    modal.style.transform = 'none';
    wrapper.classList.remove('wrapper__overlay');
    body.style.overflow = 'auto';
  }
});
window.addEventListener('resize', function () {
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
    modal.style.height = "".concat(window.screen.height - 147, "px");
  } else {
    modal.style.height = 'auto';
  }
}); // Submit form

buttonSubmit.addEventListener('submit', function () {
  if (inputName.value !== '' && inputPhone.value !== '') {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('phone', inputPhone.value);
  } else {
    form.reportValidity();
  }
}); // Show additional descripton

buttonMore.addEventListener('click', function () {
  hiddenInfos.forEach(function (value) {
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
window.addEventListener('resize', function () {
  if (window.screen.width > 767) {
    hiddenInfoSpan.style.display = 'initial';
  } else if (window.screen.width < 767 && buttonMore.textContent === 'Подробнее') {
    hiddenInfoSpan.style.display = 'none';
  }
}); // Footer accordion

var openDescription = function openDescription(el) {
  el.classList.remove('title-closed');
  el.style.borderBottom = 'none';
  el.nextElementSibling.style.display = 'flex';
  el.nextElementSibling.style.borderBottom = '1px solid rgba(255, 255, 255, 0.7)';
};

var closeDescription = function closeDescription(el) {
  el.classList.add('title-closed');
  el.style.borderBottom = '1px solid rgba(255, 255, 255, 0.7)';
  el.nextElementSibling.style.display = 'none';
  el.nextElementSibling.style.borderBottom = 'none';
};

footerTitle2.addEventListener('click', function () {
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
footerTitle2.addEventListener('keypress', function (evt) {
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
footerTitle3.addEventListener('click', function () {
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
footerTitle3.addEventListener('keypress', function (evt) {
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
window.addEventListener('resize', function () {
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

/***/ })

/******/ });
//# sourceMappingURL=main.min.js.map