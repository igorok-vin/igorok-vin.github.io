/* створюєм змінну сonst hamburger і menu. 
спочатку отримуэм всі елементи з якими будемо працювати це hamburger і menu 
document - це наш html
querySelector- звертаэмось до якогось елемента на сторінці через селектор а саме класам hamberger і menu і для того щоб вікно закривалось close*/
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');

/* приписуєм що відбувається при нажиманні на hamburger Визивається клас active у класа menu*/
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
/*----------------------------------------*/
/* приписуєм що відбувається при нажиманні на хрестик. Диактивується клас active у класа menu і menu закривається*/
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
}); 
/*----------------------------------------*/
/*скрипт для автоматичної лінії для скілів*/
/*зчитуєм значення в процентах цього класу і записуєм в змінну*/
const counters = document.querySelectorAll('.skills__ratings-counter'), 
/*отримуєм всі лінії де є спени і тут будем змінювати стилі*/
lines = document.querySelectorAll('.skills__ratings-line span');

/* console.log(counters);  команда для виводу в консоль*/
/*item - це лічильник з значеннями в процентах  
innerHTML - команда яка витягує значення лічильника*/
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function() {
    easyshopping = $("#easyshopping-main");
    mediscreen = $("#mediscreen-main");
    paymybuddy = $("#paymybuddy-main");
    poseidon = $("#poseidon-main");
    safetynet = $("#safetynet-main");

   /*  $(".image-thumbnail").mouseover(function() {
        currentImage = $(this).attr("src");
       bigImage.attr("src", currentImage);
       }); */

       easyshopping.on("click", function() {
        $("#carouselEasyshoppingModal").modal("show");
      });
      mediscreen.on("click", function() {
        $("#carouselModalMediscreen").modal("show");
      });
      paymybuddy.on("click", function() {
        $("#carouselModalPayMyBuddy").modal("show");
      });
      poseidon.on("click", function() {
        $("#carouselModalPoseidon").modal("show");
      });
      safetynet.on("click", function() {
        $("#carouselModalSafetyNet").modal("show");
      });

/* обробка email листів в формах на основі технології ajax тобто без перезавантаження сторінки*/
  /*тут знаходимо всі форми які є на сайті*/
  // $('form').submit(function (e) {
  //   e.preventDefault(); //відключаєм стандартну поведінку браузера і з ajax при відправці email сторінка не буде перегружатись
  //   /*перевірка чи форма пройшла попередню валідацію щоб не відправляти пусту форму*/
  //   //if (!$(this).validate()) {
  //     //return;
  //   //}
  //   $.ajax({
  //     type: "POST", //команда відправка даних на сервер
  //     url: 'sendmail.php', //обробник даних які відправляються на сервер
  //     data: $(this).serialize(), //самі данні які відправляються на сервер

  //     //якщо все проходить успішно то відповідь поміщаєм в done і зявиться модальне вікно з повідомленням про успішність операції
  //   }).done(function () {
  //     /*після відправки форми очищаєм всі input*/
  //     $(this).find("input").val("");
  //     $(this).find("textarea").val("");
  //     //$("#consultation, #order").fadeOut("slow"); //після відправки пісьма модальні вікна закриваються
  //     //і саме останнє коли все відправилось виводиться задній фон і вікно проуспішну відправку
  //    // $(".overlay, #thanks").fadeIn("slow");
  //     /*обновляєм форми*/
  //     $('form').trigger('reset');
  //   });
  //   return false;
  // });

});
