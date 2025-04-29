// Задание 1
// const string = `js`;
// console.log(string.toUpperCase());

// Задание 2
// function filterByPrefix(array, prefix) {
//   const lowerPrefix = prefix.toLowerCase();
//   return array.filter((item) => item.toLowerCase().startsWith(lowerPrefix));
// }
// const words = ["Apple", "banana", "Apricot", "orange", "Avocado"];
// const filteredWords = filterByPrefix(words, "ap");
// console.log(filteredWords);

// Задание 3
// const number = (32.58884);
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

// Задание 4
// const numbers = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// Задание 5
// function printRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// }
// printRandomNumber();

// Задание 6
// function getRandomNumbers(num) {
//   return Array.from({ length: Math.floor(num / 2) }, () =>
//     Math.floor(Math.random() * (num + 1))
//   );
// }
// console.log(getRandomNumbers(10));

// Задание 7
// function randomNumber (max, min) {
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }
// console.log(randomNumber(23,7));

// Задание 8
// const currentDate = new Date();
// console.log(currentDate);

// Задание 9
// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(futureDate.getDate() + 73);
// console.log(futureDate);

// Задание 10
// function formatRussianDate(date) {
//   const months = [
//     "января",
//     "февраля",
//     "марта",
//     "апреля",
//     "мая",
//     "июня",
//     "июля",
//     "августа",
//     "сентября",
//     "октября",
//     "ноября",
//     "декабря",
//   ];

//   const weekDays = [
//     "воскресенье",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//   ];

//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   const weekDay = weekDays[date.getDay()];

//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");

//   return `Дата: ${day} ${month} ${year}г. — это ${weekDay}.\nВремя: ${hours}:${minutes}:${seconds}`;
// }

// const today = new Date();
// console.log(formatRussianDate(today));


