document.addEventListener("DOMContentLoaded", () => {
  const modelSelect = document.getElementById("model");
  const wheelSelect = document.getElementById("wheel");
  const colorPicker = document.getElementById("colorPicker");

  const carColorImage = document.getElementById("carColor");   // цветная машина (с дисками)
  const carMaskImage = document.getElementById("carMask");     // ч/б кузов
  const colorOverlay = document.getElementById("colorOverlay");// слой цвета

  function updateCar() {
    const model = modelSelect.value;
    const wheel = wheelSelect.value;

    // цветная картинка с дисками (фон)
    carColorImage.src = `${model}_w${wheel}.png`;

    // ч/б кузов (маска)
    carMaskImage.src = `${model}.png`;
  }

  function updateColor() {
    colorOverlay.style.backgroundColor = colorPicker.value;
  }

  // события
  modelSelect.addEventListener("change", updateCar);
  wheelSelect.addEventListener("change", updateCar);
  colorPicker.addEventListener("input", updateColor);

  // стартовое состояние
  updateCar();
  updateColor();
});