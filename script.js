// ======= STYLE BUILDER =======

const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const colorPicker = document.getElementById("colorPicker");

const carColor = document.getElementById("carColor");     // цветная картинка
const carMask = document.getElementById("carMask");       // ч/б кузов
const colorOverlay = document.getElementById("colorOverlay"); // фильтр

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  // 1) Цветная картинка (фон)
  carColor.src = `${model}_w${wheel}.png`;

  // 2) Ч/Б кузов
  carMask.src = `${model}.png`;

  // 3) Обновляем фильтр (чтобы привязать к кузову)
  colorOverlay.style.background = colorPicker.value;
}

function updateColor() {
  colorOverlay.style.background = colorPicker.value;
}

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);
colorPicker.addEventListener("input", updateColor);

window.addEventListener("load", () => {
  updateCar();
  updateColor();
});
