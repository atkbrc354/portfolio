const burgerMenu = document.querySelector('.burger-menu');
const headerList = document.querySelector('.header-list');

burgerMenu.addEventListener('click', () => {
  headerList.classList.toggle('show');
});