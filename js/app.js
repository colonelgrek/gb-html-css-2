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


let buttonFilter = document.querySelector('.filter__btn');
let filterList = document.querySelector('.filter__list');

buttonFilter.addEventListener('click', () => {
  filterList.classList.toggle('display-block');
});
let filterButtons = document.querySelectorAll('.filter__item-btn');
let occupiedItem;

for (let filterButton of filterButtons) {
  filterButton.addEventListener("click", () => {
    filterButton.nextElementSibling.classList.toggle('hidden');
    filterButton.classList.toggle('filter__item-btn_active');
    if (occupiedItem) {
      occupiedItem.nextElementSibling.classList.add('hidden');
      occupiedItem.classList.remove('filter__item-btn_active');
    }
    occupiedItem = (occupiedItem === filterButton) ? 0 : filterButton;
  })
}
let filterAuxButtons = document.querySelectorAll('.filter-aux__btn');
let occupiedItemAux;

for (let filterAuxButton of filterAuxButtons) {
  filterAuxButton.addEventListener("click", () => {
    filterAuxButton.nextElementSibling.classList.toggle('hidden');
    if (occupiedItemAux) {
      occupiedItemAux.nextElementSibling.classList.add('hidden');
    }
    occupiedItemAux = (occupiedItemAux === filterAuxButton) ? 0 : filterAuxButton;
  })
}