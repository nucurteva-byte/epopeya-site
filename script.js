const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorPicker = document.getElementById("colorPicker");
const colorOverlay = document.getElementById("colorOverlay");

// обновление картинки
function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carColor.src = ${model}_w${wheel}.png;
  carMask.src = ${model}.png;
}

// события
modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);

// цвет
colorPicker.addEventListener("input", () => {
  colorOverlay.style.background = colorPicker.value;
});

// старт
window.addEventListener("load", updateCar);
