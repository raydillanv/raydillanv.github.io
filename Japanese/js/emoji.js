// List of emoji characters to use for confetti
// Copyright Dillan Victory 2024
const emojiList = ["🇯🇵", "🇫🇷", "🇮🇹", "🌄", "言語"];

// Number of emojis to display
const numberOfEmojis = 25;

// Array to store each emoji's properties
const emojis = [];

// Function to create a single emoji element
function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
    document.body.appendChild(emoji);

    return {
        element: emoji,
        x: Math.random() * window.innerWidth,  // Random horizontal position
        y: Math.random() * -window.innerHeight,  // Start above the top of the screen
        speed: Math.random() * 2 + 4.5,  // Adjust fall speed (slower)
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 1 + 0.5  // Slower rotation speed
    };
}

// Function to initialize emojis and set their properties
function initializeEmojis() {
    for (let i = 0; i < numberOfEmojis; i++) {
        const emoji = createEmoji();
        emojis.push(emoji);
    }
}

// Function to update the position and rotation of each emoji
function animateConfetti() {
    emojis.forEach((emoji) => {
        // Update the emoji's vertical position
        emoji.y += emoji.speed;
        if (emoji.y > window.innerHeight) {
            emoji.y = Math.random() * -window.innerHeight;  // Reset to above the screen
            emoji.x = Math.random() * window.innerWidth;  // Random horizontal reset
        }

        // Update the emoji's rotation
        emoji.rotation += emoji.rotationSpeed;

        // Apply the updated position and rotation to the emoji element
        emoji.element.style.transform = `translate(${emoji.x}px, ${emoji.y}px) rotate(${emoji.rotation}deg)`;
    });

    // Request the next animation frame
    requestAnimationFrame(animateConfetti);
}

// Ensure emojis resize with the window
window.addEventListener('resize', () => {
    emojis.forEach(emoji => {
        emoji.x = Math.random() * window.innerWidth;
    });
});

// Initialize and animate the confetti on page load
window.onload = function() {
    initializeEmojis();
    animateConfetti();
};
