// Задание1
// const heading = document.querySelector("#title");
// const button = document.querySelector("#toggleBtn");

// button.addEventListener("click", function () {
//   if (heading.style.display === "none") {
//     heading.style.display = "block";
//     button.textContent = "Скрыть";
//   } else {
//     heading.style.display = "none";
//     button.textContent = "Показать";
//   }
// });

// Задание2
// const paragraph = document.querySelector("#myParagraph");
// const button = document.querySelector("#colorBtn");

// button.addEventListener("click", function () {
//   paragraph.style.color = "purple";
// });

// Задание3
// const heading = document.querySelector("#mainHeading");
// const button = document.querySelector("#changeTextButton");

// button.addEventListener("click", function () {
//   heading.textContent = "Привет, мир!";
// });

// Задание4
// const descriptionElements = document.querySelectorAll(".description");

// function changeDescriptionText() {
//   descriptionElements.forEach((element) => {
//     element.textContent = "Измененный текст";
//   });
// }

// changeDescriptionText();

// Задание5
// const descElements = document.querySelectorAll(".description");

// window.addEventListener("DOMContentLoaded", () => {
//   descElements.forEach((element) => {
//     element.textContent = "Новый текст";
//   });
// });

// Задание6
// const addButton = document.getElementById("addParagraphBtn");

// addButton.addEventListener("click", function () {
//   const newParagraph = document.createElement("p");

//   newParagraph.textContent = "Новый абзац";

//   document.body.appendChild(newParagraph);
// });

// Задание7
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
  const firstDescription = document.querySelector("p.description");

  if (firstDescription) {
    firstDescription.remove();
  } else {
    alert("Элементы с классом description закончились!");
  }
});
