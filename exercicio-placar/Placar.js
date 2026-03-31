// Seleção de elementos
const scoreAEl = document.getElementById("scoreA");
const scoreBEl = document.getElementById("scoreB");

const addA = document.getElementById("addA");
const removeA = document.getElementById("removeA");

const addB = document.getElementById("addB");
const removeB = document.getElementById("removeB");

const resetBtn = document.getElementById("reset");

const nameA = document.getElementById("nameA");
const nameB = document.getElementById("nameB");

// Estado
let scoreA = 0;
let scoreB = 0;

// Carregar dados do localStorage
function loadData() {
    scoreA = parseInt(localStorage.getItem("scoreA")) || 0;
    scoreB = parseInt(localStorage.getItem("scoreB")) || 0;

    nameA.value = localStorage.getItem("nameA") || "Time A";
    nameB.value = localStorage.getItem("nameB") || "Time B";

    updateDisplay();
}

// Salvar dados
function saveData() {
    localStorage.setItem("scoreA", scoreA);
    localStorage.setItem("scoreB", scoreB);
    localStorage.setItem("nameA", nameA.value);
    localStorage.setItem("nameB", nameB.value);
}

// Atualizar tela
function updateDisplay() {
    scoreAEl.textContent = scoreA;
    scoreBEl.textContent = scoreB;
}

// Animação
function animate(el) {
    el.style.transform = "scale(1.2)";
    setTimeout(() => {
        el.style.transform = "scale(1)";
    }, 150);
}

// Eventos Time A
addA.addEventListener("click", () => {
    scoreA++;
    updateDisplay();
    animate(scoreAEl);
    saveData();
});

removeA.addEventListener("click", () => {
    if (scoreA > 0) {
        scoreA--;
        updateDisplay();
        animate(scoreAEl);
        saveData();
    }
});

// Eventos Time B
addB.addEventListener("click", () => {
    scoreB++;
    updateDisplay();
    animate(scoreBEl);
    saveData();
});

removeB.addEventListener("click", () => {
    if (scoreB > 0) {
        scoreB--;
        updateDisplay();
        animate(scoreBEl);
        saveData();
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    scoreA = 0;
    scoreB = 0;
    updateDisplay();
    saveData();
});

// Atualizar nomes automaticamente
nameA.addEventListener("input", saveData);
nameB.addEventListener("input", saveData);

// Inicialização
loadData();