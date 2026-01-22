// ===== ПОЛУЧАЕМ ЭЛЕМЕНТЫ =====
const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const colorPicker = document.getElementById("colorPicker");

const carColor = document.getElementById("carColor"); // цветная база
const carMask = document.getElementById("carMask");   // ч/б кузов
const colorOverlay = document.getElementById("colorOverlay"); // цвет

// ===== ОБНОВЛЕНИЕ МАШИНЫ =====
function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  // 1. цветная картинка (фон)
  carColor.src = `${model}_w${wheel}.png`;

  // 2. ч/б кузов
  carMask.src = `${model}.png`;
}

// ===== ЦВЕТ КУЗОВА =====
function updateColor() {
  colorOverlay.style.backgroundColor = colorPicker.value;
}

// ===== СОБЫТИЯ =====
modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);
colorPicker.addEventListener("input", updateColor);

// ===== СТАРТ ПРИ ЗАГРУЗКЕ =====
window.addEventListener("load", () => {
  updateCar();
  updateColor();
});
