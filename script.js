const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const colorPicker = document.getElementById("colorPicker");

const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorOverlay = document.getElementById("colorOverlay");

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carColor.src = `${model}_w${wheel}.png`;
  carMask.src = `${model}.png`;
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
