// BURGER MENU
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// MODAL FOR FORM
const testDriveBtn = document.getElementById('testDriveBtn');
const testDriveBtn2 = document.getElementById('testDriveBtn2');
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

function openModal() {
  modal.classList.add('open');
}

function closeModalFunc() {
  modal.classList.remove('open');
}

testDriveBtn.addEventListener('click', openModal);
testDriveBtn2.addEventListener('click', openModal);
contactBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// COLOR STYLE
const colorWheel = document.getElementById('colorWheel');
const brightness = document.getElementById('brightness');
const saturation = document.getElementById('saturation');
const previewCar = document.getElementById('previewCar');

function updatePreview() {
  const color = colorWheel.value;
  const b = brightness.value;
  const s = saturation.value;
  previewCar.style.filter = brightness(${b}%) saturate(${s}%);
  previewCar.style.backgroundColor = color;
}

colorWheel.addEventListener('input', updatePreview);
brightness.addEventListener('input', updatePreview);
saturation.addEventListener('input', updatePreview);

document.getElementById('randomColor').addEventListener('click', () => {
  const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16);
  colorWheel.value = randomHex;
  updatePreview();
});
