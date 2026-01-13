let display = document.getElementById("display");
let toggleBtn = document.getElementById("themeToggle");

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
    display.value = eval(display.value); // BODMAS supported
  } catch {
    display.value = "Error";
  }
}

/* DARK / LIGHT MODE */
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
});
