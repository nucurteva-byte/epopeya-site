// ===================== STYLE BUILDER =====================

const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const colorPicker = document.getElementById("colorPicker");

const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorOverlay = document.getElementById("colorOverlay");

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;
  const color = colorPicker.value;

  carColor.src = ${model}_w${wheel}.png;
  carMask.src = ${model}.png;

  // маска на фильтр тоже меняем
  colorOverlay.style.webkitMaskImage = url("${model}.png");
  colorOverlay.style.maskImage = url("${model}.png");

  colorOverlay.style.background = color;
}

// события
modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);
colorPicker.addEventListener("input", updateCar);

// загрузка сохраненного стиля
window.addEventListener("load", () => {
  const saved = localStorage.getItem("epopeyaStyle");
  if (saved) {
    const style = JSON.parse(saved);
    modelSelect.value = style.model;
    wheelSelect.value = style.wheel;
    colorPicker.value = style.color;
  }
  updateCar();
});

window.addEventListener("beforeunload", () => {
  const style = {
    model: modelSelect.value,
    wheel: wheelSelect.value,
    color: colorPicker.value
  };
  localStorage.setItem("epopeyaStyle", JSON.stringify(style));
});

