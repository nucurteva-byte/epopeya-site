document.addEventListener("DOMContentLoaded", () => {
  const modelSelect = document.getElementById("model");
  const wheelSelect = document.getElementById("wheel");
  const colorPicker = document.getElementById("colorPicker");

  const carColorImage = document.getElementById("carColor");
  const carMaskImage = document.getElementById("carMask");
  const colorOverlay = document.getElementById("colorOverlay");

  function updateCar() {
    const model = modelSelect.value;
    const wheel = wheelSelect.value;

    carColorImage.src = `${model}_w${wheel}.png`;
    carMaskImage.src = `${model}.png`;
  }

  function updateColor() {
    colorOverlay.style.backgroundColor = colorPicker.value;
  }

  modelSelect.addEventListener("change", updateCar);
  wheelSelect.addEventListener("change", updateCar);
  colorPicker.addEventListener("input", updateColor);

  updateCar();
  updateColor();
});