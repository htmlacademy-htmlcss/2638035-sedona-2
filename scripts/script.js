//console.log('111');


const searchHotelLink = document.querySelector('.search-hotel-link');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.button-close');

searchHotelLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-opened');
});
