let timerInterval;
let time = 0; 
const maxTime = 59000; 

const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");


const progressFill = document.querySelector('.progress-fill');
const radius = 90; 
const circumference = 2 * Math.PI * radius; 


progressFill.style.strokeDasharray = circumference;
progressFill.style.strokeDashoffset = circumference; 

function updateTimerDisplay() {
    const seconds = Math.floor(time / 1000); 
    const milliseconds = Math.floor((time % 1000) / 10); 
    timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`; 
}

function updateProgressBar() {
    const percentage = (time / maxTime); 
    const offset = circumference * (1 - percentage); 
    progressFill.style.strokeDashoffset = offset; 
}

function startTimer() {
    if (time < maxTime) {
        timerInterval = setInterval(() => {
            time += 10; 
            updateTimerDisplay();
            updateProgressBar(); 
            if (time >= maxTime) {
                clearInterval(timerInterval);
            }
        }, 10); 
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
    updateProgressBar(); 
    startPauseBtn.textContent = "Start";
});

updateTimerDisplay(); 
