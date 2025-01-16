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
        if (number === 1) {
            message = "I love you because you are very smart and intelligent in so many ways.";
        } else if (number === 2) {
            message = "I love you because you are the most beautiful person in the world both inside and outside.";
        } else if (number === 3) {
            message = "I love that your eyes can speak to me even before you speak.";
        } else if (number === 4) {
            message = "I love your lips (and your ass and your whole body), they are out of this world.";
        } else if (number === 5) {
            message = "I love when you call me with cute names or curse me.";
        } else if (number === 6) {
            message = "I love that I feel loved by you very intimately and deeply.";
        } else if (number === 7) {
            message = "I love you for your honesty and clarity for your thoughts and emotions.";
        } else if (number === 8) {
            message = "I love you because you are the most beautiful soul that I met in my life.";
        } else if (number === 9) {
            message = "I love you because you want to understand and overcome all the things that stop you from growing in life.";
        } else if (number === 10) {
            message = "I love you because I can share with you everything of mine and I feel understood and listened.";
        } else if (number === 11) {
            message = "I love you because you want to share everything with me.";
        } else if (number === 12) {
            message = "I love you because you require me to make me understand myself and my emotions better for you and me.";
        } else if (number === 13) {
            message = "I love you because everytime we have a little fight, I feel more closer to you than before.";
        } else if (number === 14) {
            message = "I love you because of your love and devotion to the scouts.";
        } else if (number === 15) {
            message = "I love you because I am scared of the thought of losing you.";
        } else if (number === 16) {
            message = "I love you because you are stressed to make sure that I am okay wherever I come to Salerno.";
        } else if (number === 17) {
            message = "I love you because the anxiety and stress you get is because you care deeply about things.";
        } else if (number === 18) {
            message = "I love you because I love to calm you and down and take care of you in all the possible ways.";
        } else if (number === 19) {
            message = "I love you because the more I know you the more I love you.";
        } else if (number === 20) {
            message = "I love you because everytime I meet you i get the reminder of why I love you so much.";
        } else if (number === 21) {
            message = "I love each and every part of your imperfect perfections.";
        } else if (number === 22) {
            message = " I love you because of all the craziness and positivity inside of you.";
        } else if (number === 23) {
            message = "I love you because you make me laugh with your stupid jokes.";
        } else if (number === 24) {
            message = "I love you because your smile makes my heart melt.";
        } else if (number === 25) {
            message = "I love you because you are the person that I want to go to at the end of my day, end of the month and end of the year.";
        } else if (number === 26) {
            message = "I love you because you wait for me to come back home to eat together.";
        } else if (number === 27) {
            message = "I love you because you saw all the good things (atleast 100 ) in me and love me.";
        } else if (number === 28) {
            message = "I love you because you remind me of all the good in the world.";
        } else if (number === 29) {
            message = "I love you because i can imagine muself listening to your stories all my life.";
        } else if (number === 30) {
            message = "I love you beacuse i want to spend more and more time (my lifetime) with you.";
        }

        messageContainer.textContent = message;
        messageContainer.style.display = "block";
    }
});
