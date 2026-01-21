// ===================== STYLE BUILDER =====================

const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const colorPicker = document.getElementById("colorPicker");

const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorOverlay = document.getElementById("colorOverlay");

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value || "1";
  const color = colorPicker.value;

  // 1) Цветная машина (фон)
  carColor.src = ${model}_w${wheel}.png;

  // 2) Ч/Б кузов
  carMask.src = ${model}.png;

  // 3) Маска фильтра (обязательно обновлять!)
  colorOverlay.style.webkitMaskImage = url("${model}.png");
  colorOverlay.style.maskImage = url("${model}.png");

  // 4) Цвет кузова
  colorOverlay.style.background = color;
}

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);
colorPicker.addEventListener("input", updateCar);

window.addEventListener("load", () => {
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


