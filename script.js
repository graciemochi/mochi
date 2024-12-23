document.addEventListener("DOMContentLoaded", () => {
    const numbersContainer = document.getElementById('numbers');
    const messageContainer = document.getElementById('message');

    // Function to generate numbers from 1 to 100
    for (let i = 1; i <= 100; i++) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = i;

        // Event listener for click event on each number
        numberElement.addEventListener('click', () => {
            showMessage(i);
        });

        numbersContainer.appendChild(numberElement);
    }

    // Function to display custom message
    function showMessage(number) {
        let message = `You clicked on number ${number}.`;

        // Add a custom message for special numbers
        if (number === 7) {
            message = "Lucky number 7!";
        } else if (number === 50) {
            message = "Halfway there!";
        } else if (number === 100) {
            message = "Congratulations! You clicked the last number!";
        }

        messageContainer.textContent = message;
        messageContainer.style.display = "block";
    }
});
