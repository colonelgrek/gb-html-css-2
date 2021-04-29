'use strict';

let buttonMenuNav = document.querySelector('.header__menu-toggle');
let buttonCloseNav = document.querySelector('.header__navigation-btnclose');

let navigation = document.querySelector('.header__navigation');

let navigationShading = document.querySelector('.header__navigation-shading');

buttonMenuNav.addEventListener('click', () => {
  navigation.classList.toggle('display-block');
  navigationShading.classList.toggle('display-block');
});

buttonCloseNav.addEventListener('click', () => {
  navigation.classList.remove('display-block');
  navigationShading.classList.remove('display-block');
});