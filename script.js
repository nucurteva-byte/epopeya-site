// MOBILE MENU
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// MODAL
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const openFormBtn = document.getElementById('openFormBtn');

const testDriveBtn = document.getElementById('testDriveBtn');
const testDriveBtn2 = document.getElementById('testDriveBtn2');
const contactBtn = document.getElementById('contactBtn');

function openModal() {
  modal.style.display = 'flex';
}

testDriveBtn.addEventListener('click', openModal);
testDriveBtn2.addEventListener('click', openModal);
contactBtn.addEventListener('click', openModal);

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// OPEN GOOGLE FORM
openFormBtn.addEventListener('click', () => {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSfbQetzN7Q9iTNP_1kSLPTCkOw82mdxzgcBCYHa6gpnsdiPSQ/viewform?usp=publish-editor',
    '_blank'
  );
});

// STYLE BUILDER
const modelSelect = document.getElementById('model');
const wheelSelect = document.getElementById('wheel');
const carImage = document.getElementById('carImage');
const wheelImage = document.getElementById('wheelImage');
const colorPicker = document.getElementById('colorPicker');
const colorOverlay = document.getElementById('colorOverlay');
const saveStyleBtn = document.getElementById('saveStyleBtn');

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carImage.src = ${model}.png;
  wheelImage.src = ${model}_w${wheel}.png;
}

modelSelect.addEventListener('change', updateCar);
wheelSelect.addEventListener('change', updateCar);

colorPicker.addEventListener('input', () => {
  colorOverlay.style.background = colorPicker.value;
});

// SAVE STYLE (localStorage)
saveStyleBtn.addEventListener('click', () => {
  const style = {
    model: modelSelect.value,
    wheel: wheelSelect.value,
    color: colorPicker.value
  };
  localStorage.setItem('epopeyaStyle', JSON.stringify(style));
  alert('Стиль сохранён!');
});

// LOAD STYLE
window.addEventListener('load', () => {
  const saved = localStorage.getItem('epopeyaStyle');
  if (saved) {
    const style = JSON.parse(saved);
    modelSelect.value = style.model;
    wheelSelect.value = style.wheel;
    colorPicker.value = style.color;
    updateCar();
    colorOverlay.style.background = style.color;
  }
});
