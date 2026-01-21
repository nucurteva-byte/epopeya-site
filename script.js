// ===================== STYLE BUILDER =====================

const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const wheelBlock = document.getElementById("wheelBlock");

const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorPicker = document.getElementById("colorPicker");
const colorOverlay = document.getElementById("colorOverlay");

// модели без дисков
const modelsWithoutWheels = ["heroin_needle"];

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carColor.src = model + "_w" + wheel + ".png";
  carMask.src = model + ".png";

  if (modelsWithoutWheels.includes(model)) {
    wheelBlock.style.display = "none";
  } else {
    wheelBlock.style.display = "block";
  }
}

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);

colorPicker.addEventListener("input", () => {
  colorOverlay.style.background = colorPicker.value;
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("epopeyaStyle");
  if (saved) {
    const style = JSON.parse(saved);
    modelSelect.value = style.model;
    wheelSelect.value = style.wheel;
    colorPicker.value = style.color;
  }
  updateCar();
  colorOverlay.style.background = colorPicker.value;
});

window.addEventListener("beforeunload", () => {
  const style = {
    model: modelSelect.value,
    wheel: wheelSelect.value,
    color: colorPicker.value
  };
  localStorage.setItem("epopeyaStyle", JSON.stringify(style));
});
