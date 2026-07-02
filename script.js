const heart = document.getElementById("heart");
const music = document.getElementById("bgmusic");

let started = false;

heart.addEventListener("click", () => {

    if (started) return;

    started = true;

    // Play Background Music
    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

    // Premium Purple Glow
    heart.style.filter = `
        drop-shadow(0 0 12px #d9a7ff)
        drop-shadow(0 0 30px #b14cff)
        drop-shadow(0 0 55px #8d4dff)
    `;

    // Heart Animation
    heart.animate([
        { transform: "scale(1)" },
        { transform: "scale(1.25)" },
        { transform: "scale(1)" }
    ], {
        duration: 500,
        iterations: 1
    });

    // Vibrate (Supported Phones)
    if ("vibrate" in navigator) {
        navigator.vibrate(80);
    }

    // Hide "Touch" after click
    const touchText = heart.querySelector("span");

    if (touchText) {
        touchText.style.opacity = "0";

        setTimeout(() => {
            touchText.remove();
        }, 300);
    }

});
