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
