// Задание 1
// const numbers = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] === 10) break;
// }

// Задание 2
// const array = [1, 5, 4, 10, 0, 3];
// const index = array.indexOf(4);
// console.log(index);

// Задание 3
// const array = [1, 5, 4, 10, 0, 3];
// let joinedNumbers = array.join(" ");
// console.log(joinedNumbers);

// Задание 4
// const arr = [];

// for (let i = 0; i < 3; i++) {
//   const arr2 = [];
//   for (let i = 0; i < 3; i++) {
//     arr2.push(1);
//   }
//   arr.push(arr2);
// }
// console.log(arr);

// Задание 5
// let numers = [1, 1, 1];
// numers.push(2, 2, 2);
// console.log(numers);

// Задание 6
// let array = [9, 8, 7, "a", 6, 5];
// array.sort();
// array.pop();
// console.log(array);

// Задание 7
// const numbers = [9, 8, 7, 6, 5];
// let userGuess = prompt(`Угадай число!`);
// if (numbers.includes(Number(userGuess))) {
//     alert(`УГАДАЛ!`)
// }else{
//     alert(`НЕ УГАДАЛ!`)
// }

// Задание 8
// let abc = "abcdef";

// let splitAbc = abc.split("");
// console.log(splitAbc);

// splitAbc.reverse();
// console.log(splitAbc);

// let joinedAbc = splitAbc.join("");
// console.log(joinedAbc);

// Задание 9
// const nestedArray = [[1, 2, 3],[4, 5, 6]];

// const flatArray = [...nestedArray[0],...nestedArray[1]];
// console.log(flatArray);

// Задание 10
// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numb.length; i++) {
//   if (numb[i + 1]) {
//     console.log(numb[i] + numb[i + 1]);
//   }
// }

// Задание 11
// function square(arr) {
//   return arr.map((item) => item ** 2);
// }

// console.log(square([1, 2, 3]));

// Задание 12
// function getLength(arr) {
//   return arr.map(item => item.length);
// }
// console.log(getLength([`aaa`,`aaaaa`]));

// Задание 13
// function numers(arr) {
//     return arr.filter(item  => item < 0);
// }
// console.log(numers([-7,5,-4,9]))

// Задание 14
// function rendomNumb() {
//   return Math.floor(Math.random() * 10);
// }
// const arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(rendomNumb());
// }
// console.log(arr);

// const evenArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   }
// }
// console.log(evenArr);

// Задание 15
// function rendomNumb() {
//   return Math.floor(Math.random() * 10);
// }
// const arr = [];

// for (let i = 0; i < 6; i++) {
//   arr.push(rendomNumb());
// }
// console.log(arr);

// const sum = arr.reduce((total, arr) => total + arr, 0);
// console.log(sum / 2);
