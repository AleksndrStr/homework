// game1
document.getElementById("guessBtn").addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const gameResult = document.getElementById("gameResult");

  function checkGuess() {
    const userGuess = prompt("Введите ваше число (от 1 до 100):");

    if (userGuess === null) {
      gameResult.innerHTML += "<p>Игра прервана.</p>";
      return;
    }

    const guess = parseInt(userGuess);
    if (isNaN(guess)) {
      alert("Пожалуйста, введите число!");
      checkGuess();
      return;
    }

    attempts++;

    if (guess < randomNumber) {
      alert("Слишком маленькое число! Eщё.");
      checkGuess();
    } else if (guess > randomNumber) {
      alert("Слишком большое число! Eщё.");
      checkGuess();
    } else {
      alert(
        `Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток.`
      );
    }
  }

  checkGuess();
});

// game2
document.getElementById("mathBtn").addEventListener("click", startGame);

function startGame() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * 4)];

  let num1, num2, correctAnswer;

  if (operation === "+") {
    num1 = Math.floor(Math.random() * 50) + 1;
    num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 + num2;
  } else if (operation === "-") {
    num1 = Math.floor(Math.random() * 50) + 1;
    num2 = Math.floor(Math.random() * num1) + 1;
    correctAnswer = num1 - num2;
  } else if (operation === "*") {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
  } else if (operation === "/") {
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = Math.floor(Math.random() * 10) + 1;
    num1 = num2 * correctAnswer;
  }

  const userAnswer = prompt(`Решите пример: ${num1} ${operation} ${num2} = ?`);

  if (userAnswer === null) {
    alert("Игра отменена!");
    return;
  }

  const parsedAnswer = parseFloat(userAnswer);

  if (isNaN(parsedAnswer)) {
    alert("Нужно ввести число!");
  } else if (Math.abs(parsedAnswer - correctAnswer) < 0.0001) {
    alert("✅ Верно! Молодец!");
  } else {
    alert(`❌ Неверно! Правильный ответ: ${correctAnswer}`);
  }

  if (confirm("Хотите сыграть ещё?")) {
    startGame();
  }
}

// game3
document
  .getElementById("reverse-btn")
  .addEventListener("click", function playGame() {
    const text = prompt("Введите текст:");
    if (text) {
      const reversedText = text.split("").reverse().join("");
      alert("Результат: " + reversedText);
    } else {
      alert("Вы ничего не напечатали!");
    }
    if (confirm("Попробуем еще раз?")) {
      playGame();
    }
  });

// game4
document
  .getElementById("quiz-btn")
  .addEventListener("click", function playGame() {
    const quiz = [
      {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2,
      },
      {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2,
      },
      {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2,
      },
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
      const currentQuestion = quiz[i];

      let questionText = currentQuestion.question + "\n\n";
      questionText += currentQuestion.options.join("\n");

      const userAnswer = parseInt(prompt(questionText));

      if (userAnswer === currentQuestion.correctAnswer) {
        score++;
      }
    }

    alert(`Ваш результат: ${score} из ${quiz.length} правильных ответов!`);
  });

// game5
document
  .getElementById("rockPaperScissors")
  .addEventListener("click", playGame);
function playGame() {
  let playAgain = true;

  while (playAgain) {
    const userChoice = prompt("Выберите: камень, ножницы или бумага");

    if (userChoice === null) {
      alert("Игра завершена");
      return;
    }

    const normalizedChoice = userChoice.toLowerCase();
    if (
      normalizedChoice !== "камень" &&
      normalizedChoice !== "ножницы" &&
      normalizedChoice !== "бумага"
    ) {
      alert(
        "Пожалуйста, введите одно из следующих значений: камень, ножницы, бумага"
      );
      continue;
    }

    const choices = ["камень", "ножницы", "бумага"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (normalizedChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (normalizedChoice === "камень" && computerChoice === "ножницы") ||
      (normalizedChoice === "ножницы" && computerChoice === "бумага") ||
      (normalizedChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы победили!";
    } else {
      result = "Компьютер победил!";
    }

    alert(`
          Ваш выбор: ${normalizedChoice}
          Выбор компьютера: ${computerChoice}
          Результат: ${result}
      `);

    playAgain = confirm("Попробуем ещё раз?");
  }
}
