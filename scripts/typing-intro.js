const text = "Welcome to my portfolio!"; 
const speed = 120; // milliseconds per character

let index = 0;

// Add readable text one character at a time
function typeEffect() {
    const element = document.getElementById("typing-intro");

    if (index < text.length) {

        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        typingFinished();
    }
}

// Reveal info boxes with delay
function typingFinished() {
    document.getElementById('about').classList.add('show');
    
    setTimeout(() => {
    document.getElementById('projects').classList.add('show');
    }, 500); // 5 seconds later
}
// Trigger typing immediately on page load
window.addEventListener("DOMContentLoaded", typeEffect);
