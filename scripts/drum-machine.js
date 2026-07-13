const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// Allow audio to play when pad buttons are clicked
pads.forEach(pad => {
    const audio = pad.querySelector("audio");
    pad.addEventListener("click", () => {
    audio.play();
    display.innerText = pad.id;
    })
})

// Allow audio to play when corresponding key is pressed
document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    const pad = document.querySelector(`.drum-pad:has(#${key})`);

    if (pad) {
        const audio = pad.querySelector("audio");
        audio.currentTime = 0;
        audio.play();
        display.innerText = pad.id;
    }
})
