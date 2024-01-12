/*информація взята з https://kenwheeler.github.io/slick/*/
$(document).ready(function () {
  $(".carousel__inner").slick({
    //dots: true,//крапки під слайдом
    speed: 1200, //швидкість прокрутки
    adaptiveHeight: true, //настройка на різну висоту картінки
    //autoplay: true,// автопрокрутка
    //autoplaySpeed: 2000, //швидкість автопрокрутки
    //arrows: false, //не выдображаються стрылки прокрутки
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"/></button>',
    /* задаєм як себе буде вести слайдер при різних екранах через масив [] */
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
