const burgerMenu = document.querySelector('.burger-menu');
const headerList = document.querySelector('.header-list');
const headerLink = document.querySelectorAll('.header-link');
const body = document.querySelector('body');


const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
  headerList.classList.toggle('show');
  body.classList.toggle('hide-scroll');
});



body.addEventListener('click', function(event) {
  if (event.target !== nav && event.target !== burgerMenu) {
    headerList.classList.remove('show');
    body.classList.remove('hide-scroll');
  }
});

