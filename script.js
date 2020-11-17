(function () {
  const generateRandomNr = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  document.getElementById('guess-form').addEventListener('submit', (event) => {
    event.preventDefault();
    var secretNr = parseInt(generateRandomNr(1, 22));
    var guess = parseInt(document.getElementById('guess').value);

    if (guess === secretNr) {
      alert(
        `Awesome! You number ${secretNr} was correct.You can be named many things, hungry not being one of them.`
      );
    } else if (Math.abs(guess - secretNr) === 1) {
      alert(
        'So close, but you just missed it! Are you in a class that started on the thirteenth or what?'
      );
    } else {
      alert(
        `Bummer... You guessed ${guess} and the secret number was ${secretNr}.`
      );
    }
  });
})();
