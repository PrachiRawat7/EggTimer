let countdown;

function startTimer(minutes) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + minutes * 60000;
    displayTimeLeft(minutes * 60);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            document.getElementById('alarm').play();
            alert("Time's up! Your eggs are ready!");
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    document.getElementById('timer').textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}
