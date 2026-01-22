const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const colorPicker = document.getElementById("colorPicker");

const carColor = document.getElementById("carColor");      // цветная машина с дисками
const carMask = document.getElementById("carMask");        // ч/б кузов (маска)
const colorOverlay = document.getElementById("colorOverlay");

// Если у модели нет дисков — ставим диски 1 (или скрываем)
const modelsWithoutWheels = ["model_without_wheels"]; // <-- сюда добавь модель без дисков

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;
  const color = colorPicker.value;

  // если модели нет дисков — ставим диск 1 (или скрываем выбор)
  let wheelNumber = wheel;

  if (modelsWithoutWheels.includes(model)) {
    wheelNumber = 1;
    wheelSelect.value = 1;
    wheelSelect.disabled = true;
  } else {
    wheelSelect.disabled = false;
  }

  // Цветная машина с дисками
  carColor.src = `${model}_w${wheelNumber}.png`;

  // ЧБ кузов (маска)
  carMask.src = `${model}.png`;

  // Цветовой фильтр (только на кузов)
  colorOverlay.style.backgroundColor = color;
}

// Начальная загрузка
updateCar();

// Слушатели
modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);
colorPicker.addEventListener("input", updateCar);