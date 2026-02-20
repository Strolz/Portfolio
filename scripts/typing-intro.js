    const text = "Welcome to my coding journey!";
    const speed = 120; // milliseconds per character
    let index = 0;

    function typeEffect() {
        const element = document.getElementById("typing-intro");

        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    // Start typing when the page loads
    window.addEventListener("DOMContentLoaded", typeEffect);
