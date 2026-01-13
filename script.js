let display = document.getElementById("display");
let historyDiv = document.getElementById("history");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);

    historyDiv.innerHTML += `<div>${expression} = <b>${result}</b></div>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function toggleHistory() {
  historyDiv.classList.toggle("hidden");
}
