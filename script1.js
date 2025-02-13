document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const eventDate = new Date("March 10, 2025 00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event Started!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
