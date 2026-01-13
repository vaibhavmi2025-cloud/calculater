const display = document.getElementById("display");
const special = document.getElementById("special");
const historyPanel = document.getElementById("history");
const historyList = document.getElementById("historyList");

document.getElementById("fxToggle").onclick = () => {
  special.classList.toggle("hidden");
};

document.getElementById("historyToggle").onclick = () => {
  historyPanel.classList.toggle("hidden");
};

/* BASIC */
function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/* CALCULATION (BODMAS supported) */
function calculate() {
  try {
    const exp = display.value;
    const result = eval(exp);

    historyList.innerHTML += `
      <div>${exp} = <b>${result}</b></div>
    `;

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

/* HISTORY */
function clearHistory() {
  historyList.innerHTML = "";
}
