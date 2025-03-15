// Timer Countdown
let timeLeft = 60;
const timerElement = document.getElementById('countdown');

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = timeLeft;
        setTimeout(countdown, 1000);
    } else {
        alert("Time's up! Game Over.");
    }
}

countdown();

// Feedback System
function submitFeedback() {
    alert("Thank you for your feedback!");
}
