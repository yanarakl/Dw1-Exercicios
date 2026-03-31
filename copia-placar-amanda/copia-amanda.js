let scoreA = 0;
let scoreB = 0;

const scoreAEl = document.getElementById("scoreA");
const scoreBEl = document.getElementById("scoreB");

const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const reset = document.getElementById("reset");

btnA.addEventListener("click", () => {
  scoreA++;
  scoreAEl.textContent = scoreA;
});

btnB.addEventListener("click", () => {
  scoreB++;
  scoreBEl.textContent = scoreB;
});

reset.addEventListener("click", () => {
  scoreA = 0;
  scoreB = 0;
  scoreAEl.textContent = 0;
  scoreBEl.textContent = 0;
});