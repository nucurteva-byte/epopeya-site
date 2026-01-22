document.addEventListener("DOMContentLoaded", () => {
  const modelSelect = document.getElementById("model");
  const wheelSelect = document.getElementById("wheel");
  const colorPicker = document.getElementById("colorPicker");

  const carColor = document.getElementById("carColor");
  const colorOverlay = document.getElementById("colorOverlay");

  function updateCar() {
    const model = modelSelect.value;
    const wheel = wheelSelect.value;

    // Цветная картинка (фон + диски)
    carColor.src = `${model}_w${wheel}.png`;

    // 🔥 Ч/Б кузов как МАСКА
    colorOverlay.style.webkitMaskImage = `url(${model}.png)`;
    colorOverlay.style.maskImage = `url(${model}.png)`;
  }

  function updateColor() {
    colorOverlay.style.backgroundColor = colorPicker.value;
  }

  modelSelect.addEventListener("change", updateCar);
  wheelSelect.addEventListener("change", updateCar);
  colorPicker.addEventListener("input", updateColor);

  // Инициализация
  updateCar();
  updateColor();
});