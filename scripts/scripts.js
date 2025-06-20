import { saveGame, loadGame, clearSave } from './saveLoad.js';

let state = {
    hours: 0,
    autoOvertime: false,
    beyond24: false
};

const hoursDisplay = document.getElementById("hours");
const workBtn = document.getElementById("workBtn");
const autoBtn = document.getElementById("autoOvertimeBtn");
const beyondBtn = document.getElementById("beyond24Btn");

const saved = loadGame();
if (saved) {
    state = saved;
    if (state.autoOvertime) {
        startAutoOvertime();
    }
    if (state.beyond24) {
        enableBeyond24();
    }
}


function updateDisplay() {
    hoursDisplay.textContent = state.hours;
    autoBtn.disabled = state.autoOvertime || hours < 100;
    beyondBtn.disabled = state.beyond24 || hours < 500;
    saveGame(state);
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
