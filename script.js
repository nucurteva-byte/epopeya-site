// BURGER MENU
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

// MODAL FOR FORM
const testDriveBtn = document.getElementById('testDriveBtn');
const testDriveBtn2 = document.getElementById('testDriveBtn2');
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

function openModal() {
  if (modal) modal.classList.add('open');
}

function closeModalFunc() {
  if (modal) modal.classList.remove('open');
}

if (testDriveBtn) testDriveBtn.addEventListener('click', openModal);
if (testDriveBtn2) testDriveBtn2.addEventListener('click', openModal);
if (contactBtn) contactBtn.addEventListener('click', openModal);
if (closeModal) closeModal.addEventListener('click', closeModalFunc);

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
  const b = brightness.value;
  const s = saturation.value;
  previewCar.style.filter = brightness(${b}%) saturate(${s}%);
}

if (colorWheel) {
  colorWheel.addEventListener('input', () => {
    previewCar.style.filter = brightness(${brightness.value}%) saturate(${saturation.value}%);
  });
}

if (brightness) brightness.addEventListener('input', updatePreview);
if (saturation) saturation.addEventListener('input', updatePreview);

document.getElementById('randomColor').addEventListener('click', () => {
  const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
  colorWheel.value = randomHex;
  updatePreview();
});
