let timerInterval;
let time = 0; 
const maxTime = 59000; 

const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimerDisplay() {
    const seconds = Math.floor(time / 1000);
    const milliseconds = Math.floor((time % 1000) / 10); 
    timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function startTimer() {
    if (time < maxTime) {
        timerInterval = setInterval(() => {
            time += 100;
            updateTimerDisplay();
            if (time >= maxTime) {
                clearInterval(timerInterval);
            }
        }, 100); 
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
}

startPauseBtn.addEventListener("click", () => {
    if (startPauseBtn.textContent === "Start") {
        startTimer();
        startPauseBtn.textContent = "Pause";
    } else {
        pauseTimer();
        startPauseBtn.textContent = "Start";
    }
});

resetBtn.addEventListener("click", () => {
    pauseTimer();
    time = 0;
    updateTimerDisplay();
    startPauseBtn.textContent = "Start";
});
