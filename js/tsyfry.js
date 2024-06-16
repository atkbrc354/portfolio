const slides = document.querySelectorAll('.mobile-tsyfry');
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.add('mobile-tsyfry-none'));
  slides[index].classList.remove('mobile-tsyfry-none');
}

const featureLeft = document.querySelector('#feature-left');
const featureRight = document.querySelector('#feature-rigth');

featureLeft.addEventListener('click', handleClickLeft);
featureRight.addEventListener('click', handleClickRight);

function handleClickLeft() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
  }
}

function handleClickRight() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  }
}