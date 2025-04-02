// задание 1
// let password = "qwerty";
// let add = prompt("введите пароль");
// if (password === add){
//     alert ("Пароль введен верно");
// } else {
//     alert ("Пароль введен неправильно");
// }

// задание 2
// let c = -10;
// if (c >= 0 && c <= 10) {
//     console.log ("Верно");
// } else {
//     console.log ("Неверно");
// }

// задание3
// let d = 666;
// let e = 5;
// if (d >= 100 || e >= 100) {
//     console.log ("Верно");
// } else {
//     console.log ("Неверно");
// }

// задание4
// let a = '2';
// let b = '3';
// alert (+a + +b);

// задание5
// let monthNumber = prompt("введите номер месяца");
// switch (monthNumber) {
//   case "1":
//   case "2":
//   case "12":
//     alert("Winter");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     alert("Spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     alert("Summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     alert("Autumn");
//     break;

//   default: alert ("такого месяца не существует");
//     break;
// }

// доп-задание1
// let anyNumber = prompt("Пожалуйста, введите любое число");
// let result = Number(anyNumber);
// if (isNaN(result)) {
//   alert("это не число");
// } else if (result % 2 === 0) {
//   alert("Четное число");
// } else {
//   alert ("Нечетное число");
// }

// доп-задание2
// let clientOS = Number(prompt("введите 0, если вы используете IOS или 1, если вы используете ANDROID"));
// if (clientOS === 0) {
//   alert("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === 1) {
//   alert("Установите версию приложения для Android по ссылке");
// } else {
//   alert("Ничего не нашлось");
// }


// доп-задание3
let clientOS = Number(
  prompt(
    "введите 0, если вы используете IOS или 1, если вы используете ANDROID"
  )
);
let clientDeviceYear = Number(prompt("Год выпуска вашего телефона"));
if (clientOS === 0) {
  if (clientDeviceYear <= 2015) {
    alert("Установите облегченную версию приложения для iOS по ссылке");
  } else {
    alert("Установите версию приложения для iOS по ссылке");
  }
} else if (clientDeviceYear <= 2015) {
  alert("Установите облегченную версию приложения для Android по ссылке");
} else {
  alert("Установите версию приложения для Android по ссылке");
}
