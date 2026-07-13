
const text = "Welcome to my portfolio!";
const speed = 120; // milliseconds per character

let index = 0;

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

function typingFinished() {
    document.getElementById('about').classList.add('show');
    
    // Then show projects
    setTimeout(() => {
    document.getElementById('projects').classList.add('show');
    }, 3000); // 5 seconds later
}
// Trigger typing immediately on page load
window.addEventListener("DOMContentLoaded", typeEffect);
