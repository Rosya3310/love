const heart = document.getElementById('heart');
const message = document.getElementById('message');

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
let currentColorIndex = 0;

heart.addEventListener('click', () => {
    // Change heart position (simulate a "jolt")
    heart.style.transform = `rotate(-45deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;

    // Change heart and message color
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    heart.style.setProperty('--heart-color', newColor); // Update heart color
    message.style.color = newColor;
});
