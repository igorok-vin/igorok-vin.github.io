/* змінні */
var name = "Ivan";/*устарівший формат запису змінної*/
const ps = 3.14;/*константа*/
let number = 7;/*сучасний запис змінної*/
let leftBorderWidth = 200;

/* number - числові змінні
string - сторінка
Boolean - true/false
null
undefined - цей тип даних каже що щось існує але значення ніякого не має. 
{} - тип данних обэкт і має значення - ключ-значення. Поміщається в змінну:
let obj = {
    name: 'apple';
    color: 'green';
    weight: 200;
}
Symbol - технічний тип данних і з ним працюють рідко*/

/*Методи
alert(123); повідомлення викидає на сторінку використовується рідко
console.log("sdfsdf"); для передачі інфо в консоль в браузері. console.log(number) - провіряєм що лежить в змінній number. Виводить конкретне значення, або його наявність або ввідсутність(true/false)
let answer = confirm("Вам есть 18"); можна задавати поведінку сайта на основі відповіді
console.log(answer); 
let answer = prompt("Вам есть 18"); схоже на попереднє але виводить вікно з строкою куди юзер вводить щось і на основі  цього задаєм н-д поведінуку сайта */

/*оператори
console.log(4-'asd'); вертає NaN (not a number)
console.log(4+'asd'); конкатинація вертає 4asd 
let isChecked = true;
    isClosed = true; другий раз тут let біля змінної можна не писати коли вони йддуть одна за одною 
console.log(isChecked && isClosed); перевірка значень що обидва true
console.log(isChecked || isClosed); чи одне правда чи інше
оператор if
if(2*4==6) {
    console.log('Верно')
}else{
    console.log('Неверно')
}

let answer = confirm("Вам есть 18");
if(answer) {
    console.log('Проходите')
}else{
    console.log('Уходи')
}

const num = 50;
if(num < 49) {
    console.log('Неправельно')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
}


цикли
for(let i=1; i<8; i++){
    console.log(i)
}

функції це виконання певних дій. Н-д функ. перелистування слайдів, функ. відкриття модальних вікон.
створення функції, і вона ще не працює. може бути з аргументами і без.
function loggin(a , b) { 
    console.log(a + b)
}
виклик функції
loggin(3, 5);*/