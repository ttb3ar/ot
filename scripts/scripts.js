let hours = 0;
let autoOvertime = false;
let beyond24 = false;

const hoursDisplay = document.getElementById("hours");
const workBtn = document.getElementById("workBtn");
const autoBtn = document.getElementById("autoOvertimeBtn");
const beyondBtn = document.getElementById("beyond24Btn");

function updateDisplay() {
    hoursDisplay.textContent = hours;
    autoBtn.disabled = autoOvertime || hours < 100;
    beyondBtn.disabled = beyond24 || hours < 500;
}

workBtn.addEventListener("click", () => {
    hours++;
    updateDisplay();
});

autoBtn.addEventListener("click", () => {
    if (hours >= 100 && !autoOvertime) {
        hours -= 100;
        autoOvertime = true;
        setInterval(() => {
            hours++;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

beyondBtn.addEventListener("click", () => {
    if (hours >= 500 && !beyond24) {
        hours -= 500;
        beyond24 = true;
        workBtn.textContent = "Work 2 Hours";
        workBtn.removeEventListener("click", manualWork);
        workBtn.addEventListener("click", () => {
            hours += 2;
            updateDisplay();
        });
        updateDisplay();
    }
});

function manualWork() {
    hours++;
    updateDisplay();
}

updateDisplay();
