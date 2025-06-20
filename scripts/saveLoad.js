// saveLoad.js

export function saveGame(state) {
    localStorage.setItem('overtimeSave', JSON.stringify(state));
}

export function loadGame() {
    const saved = localStorage.getItem('overtimeSave');
    return saved ? JSON.parse(saved) : null;
}

export function clearSave() {
    localStorage.removeItem('overtimeSave');
}
