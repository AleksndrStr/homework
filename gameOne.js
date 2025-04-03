document.getElementById("guessButton").addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const gameResult = document.getElementById("gameResult");

  gameResult.innerHTML =
    "<p>Я загадал число от 1 до 100. Попробуй угадать!</p>";

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
      gameResult.innerHTML += `<p>Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток.</p>`;
    }
  }

  checkGuess();
});
