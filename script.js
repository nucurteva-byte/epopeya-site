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

    // Цветная машина
    carColor.src = ${model}_w${wheel}.png;

    // Ч/Б кузов
    carMask.src = ${model}.png;

    // Цвет кузова (фильтр только на кузов)
    colorOverlay.style.background = colorPicker.value;
    colorOverlay.style.maskImage = url(${model}.png);
    colorOverlay.style.webkitMaskImage = url(${model}.png);
  }

  modelSelect.addEventListener("change", updateCar);
  wheelSelect.addEventListener("change", updateCar);
  colorPicker.addEventListener("input", updateCar);

  updateCar();
});
