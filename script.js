document.addEventListener("DOMContentLoaded", () => {
    const numbersContainer = document.getElementById('numbers');
    const messageContainer = document.getElementById('message');

    // Function to generate numbers from 1 to 100 with images
    for (let i = 1; i <= 30; i++) {
        const imageElement = document.createElement('img');
        imageElement.classList.add('number-image');
        imageElement.src = `images/${i}.jpeg`;  // Assumes images are named 1.jpg, 2.jpg, ..., 100.jpg
        imageElement.alt = `Number ${i}`;
        
        // Event listener for click event on each image
        imageElement.addEventListener('click', () => {
            showMessage(i);
        });

        numbersContainer.appendChild(imageElement);
    }

    // Function to display a custom message when an image is clicked
    function showMessage(number) {
        let message = `You clicked on the image for number ${number}.`;

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
