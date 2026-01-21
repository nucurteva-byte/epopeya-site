const carImage = document.getElementById('carImage');
const model = document.getElementById('model');
const wheels = document.getElementById('wheels');
const saveBtn = document.getElementById('saveStyle');
const colorPicker = document.getElementById('colorPicker');
const colorOverlay = document.getElementById('colorOverlay');

function updateCar() {
  const m = model.value;
  const w = wheels.value;
  const path = ${m}_${w}.png;

  fetch(path)
    .then(res => {
      if (res.ok) {
        carImage.src = path;
      } else {
        carImage.src = "default.png";
      }
    })
    .catch(() => {
      carImage.src = "default.png";
    });
}

model.addEventListener('change', updateCar);
wheels.addEventListener('change', updateCar);

colorPicker.addEventListener('input', () => {
  colorOverlay.style.background = colorPicker.value;
});

saveBtn.addEventListener('click', () => {
  localStorage.setItem('epopeyaModel', model.value);
  localStorage.setItem('epopeyaWheels', wheels.value);
  localStorage.setItem('epopeyaColor', colorPicker.value);
  alert('Стиль сохранён');
});

const savedModel = localStorage.getItem('epopeyaModel');
const savedWheels = localStorage.getItem('epopeyaWheels');
const savedColor = localStorage.getItem('epopeyaColor');

if (savedModel && savedWheels) {
  model.value = savedModel;
  wheels.value = savedWheels;
  updateCar();
}

if (savedColor) {
  colorPicker.value = savedColor;
  colorOverlay.style.background = savedColor;
}
