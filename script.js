// Set the target date for the countdown (YYYY-MM-DD HH:MM:SS format)
const targetDate = new Date("2023-09-29 08:59:59").getTime();

const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Countdown timer has expired!");
    }
};

// Initial call
countdown();

// Update the countdown every second
const timer = setInterval(countdown, 1000);
