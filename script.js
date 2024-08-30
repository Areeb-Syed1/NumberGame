// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let number = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Get references to HTML elements
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const restartButton = document.getElementById('restartButton');

    // Function to handle the guess
    guessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        if (guess > number) {
            message.textContent = 'Lower number please!';
        } else if (guess < number) {
            message.textContent = 'Higher number please!';
        } else {
            message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            guessButton.style.display = 'none';
            restartButton.style.display = 'block';
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    });

    // Function to restart the game
    restartButton.addEventListener('click', () => {
        number = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        message.textContent = '';
        attemptsDisplay.textContent = '';
        guessButton.style.display = 'block';
        restartButton.style.display = 'none';
        guessInput.value = '';
        guessInput.focus();
    });
});
