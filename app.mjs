import { renderDiagramPage } from "./src/Components/Main/DiagramPage/DiagramPage.mjs";
renderDiagramPage();

const T = {
  q0: { a: "q1", b: "q3" },
  q1: { a: "q1", b: "q2" },
  q2: { a: "q3", b: "q3" },
  q3: { a: "q3", b: "q3" },
};

const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const highlightState = (id) => {
  const g = document.getElementById(id);
  g.querySelector("circle").style.stroke = "#00a6fb";
  g.querySelector("text").style.fill = "#00a6fb";
};
const unhighlightState = (id) => {
  const g = document.getElementById(id);
  g.querySelector("circle").style.stroke = "";
  g.querySelector("text").style.fill = "";
};
const highlightPath = (p) => (p.style.stroke = "#00a6fb");
const unhighlightPath = (p) => (p.style.stroke = "");

const clearAll = () => {
  ["q0", "q1", "q2", "q3"].forEach(unhighlightState);
  document.querySelectorAll("path.arrow").forEach(unhighlightPath);
};

async function run(cad) {
  clearAll();
  document.getElementById("result").textContent = "";
  let cur = "q0";
  highlightState(cur);
  for (let s of cad) {
    const next = T[cur]?.[s];
    if (!next) {
      document.getElementById("result").textContent =
        "Solo introduce caracteres a y b";
      return;
    }
    // flecha correspondiente
    const path = [...document.querySelectorAll("path.arrow")].find((p) => {
      return p.dataset.from === cur && p.dataset.symbol.split(",").includes(s);
    });
    highlightPath(path);
    await delay(500);
    unhighlightPath(path);
    unhighlightState(cur);
    cur = next;
    highlightState(cur);
    await delay(500);
  }
  // chequeo final
  if (cur === "q2") {
    document.getElementById("result").style.color = "green";
    document.getElementById("result").textContent = "Cadena aceptada";
  } else {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").textContent = "Cadena rechazada";
  }
}

document.getElementById("runBtn").addEventListener("click", () => {
  const cad = document.getElementById("cadena").value.trim().split("");
  run(cad);
});
