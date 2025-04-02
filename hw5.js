// Задание 1
// const minNumber = (a, b) => (a <= b ? a : b);
// console.log(minNumber(2, 7));
// console.log(minNumber(5, 5));

// Задание 2
// const checkEvenOdd = (num) => {
//   if (num % 2 === 0) {
//     return "Число четное";
//   } else {
//     return "Число нечетное";
//   }
// };
// console.log(checkEvenOdd(44));
// console.log(checkEvenOdd(73));

// Задание 3
// function square (number) {
// console.log(number ** 2);
// }

// const up = (n) => n ** 2;

// square(5);
// console.log(up(5));

// Задание 4
// const YearsOld = (num) => {
//   if (num < -1) {
//     return "Вы ввели неправильное значение";
//   } else if (num >= 0 && num <= 12) {
//     return "Привет, друг!";
//   } else num >= 13;
//   return "Добро пожаловать";
// };
// console.log(YearsOld(-2));
// console.log(YearsOld(10));
// console.log(YearsOld(13));

// Задание 4
// function age() {
//   let age = +prompt(`Сколько тебе лет?`);

//   if (age < -1) {
//     alert(`Вы ввели неправильное значение`);
//   } else if (age >= 0 && age <= 12) {
//     alert(`Привет, друг!`);
//   } else if (age >= 13) {
//     alert(`Добро пожаловать`);
//   } else {
//     alert(`Вы ввели неправильное значение`);
//   }
// }

// age();


// Задание 5
// const multiplyNumbers = (a, b) =>
//   typeof a !== `number` || typeof b !== `number` || isNaN(a) || isNaN(b)
//     ? "Одно или оба значения не являются числом"
//     : a * b;

// console.log(multiplyNumbers(2, 5));
// console.log(multiplyNumbers(3, null));

// Задание 6
// function caclculateCube() {
//   const input = prompt("Введите число");
//   const number = parseFloat(input);
//   if (isNaN(number)) {
//     return "Переданный параметр не является числом";
//   }
//   const cubed = Math.pow(number, 3);
//   return `"${number}" в кубе равняется "${cubed}"`;
// }
// console.log(caclculateCube());

// Задание 7
// function getArea() {
// return 2 * Math.PI * this.radius ** 2;
// }

// function getPerimeter() {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 23,
//     methodGetArea: getArea,
//     methodPerimeter: getPerimeter,
// }

// const circle2 = {
//     radius: 17,
//     methodGetArea: getArea,
//     methodPerimeter: getPerimeter,
// }

// console.log(circle1.methodGetArea());
// console.log(circle2.methodGetArea());