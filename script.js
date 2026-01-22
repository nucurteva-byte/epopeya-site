document.addEventListener("DOMContentLoaded", () => {
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

    carColor.src = `${model}_w${wheel}.png`;
    carMask.src = `${model}.png`;
    colorOverlay.style.backgroundColor = color;
  }

  updateCar();

  modelSelect.addEventListener("change", updateCar);
  wheelSelect.addEventListener("change", updateCar);
  colorPicker.addEventListener("input", updateCar);
});