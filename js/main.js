$(function () {

  $('.proekt__slider').slick({
    arrows: false,
    waitForAnimate: false,
   
  })
  $('.proekt__prev').on('click', function (e) {
    e.preventDefault()
    $('.proekt__slider').slick('slickPrev')
  })
  $('.proekt__next').on('click', function (e) {
    e.preventDefault()
    $('.proekt__slider').slick('slickNext')
  })

})