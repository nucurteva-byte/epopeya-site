const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const carImage = document.getElementById("carImage");
const wheelImage = document.getElementById("wheelImage");
const colorPicker = document.getElementById("colorPicker");
const colorOverlay = document.getElementById("colorOverlay");

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  // корпус (ч/б)
  carImage.src = ${model}.png;

  // диски
  wheelImage.src = ${model}_w${wheel}.png;
}

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);

colorPicker.addEventListener("input", () => {
  colorOverlay.style.backgroundColor = colorPicker.value;
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("epopeyaStyle");
  if (saved) {
    const style = JSON.parse(saved);
    modelSelect.value = style.model;
    wheelSelect.value = style.wheel;
    colorPicker.value = style.color;
    updateCar();
    colorOverlay.style.background = style.color;
  }
});



