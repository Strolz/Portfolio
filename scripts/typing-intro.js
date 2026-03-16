
const text = "Welcome to my portfolio!";
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

// Trigger typing immediately on page load
window.addEventListener("DOMContentLoaded", typeEffect);
