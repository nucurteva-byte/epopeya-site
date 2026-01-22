const modelSelect = document.getElementById("modelSelect");
const wheelSelect = document.getElementById("wheelSelect");
const carImage = document.getElementById("carImage");

// обновление картинки
function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carImage.src = `${model}_w${wheel}.png`;
}

// старт
updateCar();

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);