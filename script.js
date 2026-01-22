const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorPicker = document.getElementById("colorPicker");
const colorOverlay = document.getElementById("colorOverlay");

// ОБНОВЛЕНИЕ КАРТИНКИ
function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  // Цветная машина
  carColor.src = `${model}_w${wheel}.png`;

  // Ч/Б кузов
  carMask.src = `${model}.png`;
}

// ФИЛЬТР НА КУЗОВ
colorPicker.addEventListener("input", () => {
  colorOverlay.style.background = colorPicker.value;
});

// Сохранение в localStorage
window.addEventListener("load", () => {
  const saved = localStorage.getItem("epopeyaStyle");

  if (saved) {
    const style = JSON.parse(saved);
    modelSelect.value = style.model;
    wheelSelect.value = style.wheel;
    colorPicker.value = style.color;
  }

  updateCar();
  colorOverlay.style.background = colorPicker.value;
});

// Сохраняем при изменении
modelSelect.addEventListener("change", () => {
  updateCar();
  saveStyle();
});
wheelSelect.addEventListener("change", () => {
  updateCar();
  saveStyle();
});
colorPicker.addEventListener("input", () => {
  saveStyle();
});

function saveStyle() {
  const style = {
    model: modelSelect.value,
    wheel: wheelSelect.value,
    color: colorPicker.value
  };
  localStorage.setItem("epopeyaStyle", JSON.stringify(style));
}