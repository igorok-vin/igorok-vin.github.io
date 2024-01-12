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
