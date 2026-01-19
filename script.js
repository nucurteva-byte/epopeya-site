const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const testDriveBtn = document.getElementById("testDriveBtn");
const testDriveBtn2 = document.getElementById("testDriveBtn2");
const contactBtn = document.getElementById("contactBtn");

function openModal() {
  modal.style.display = "block";
}

function closeModalFunc() {
  modal.style.display = "none";
}

testDriveBtn.addEventListener("click", openModal);
testDriveBtn2.addEventListener("click", openModal);
contactBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

const colorWheel = document.getElementById("colorWheel");
const brightness = document.getElementById("brightness");
const saturation = document.getElementById("saturation");
const previewCar = document.getElementById("previewCar");
const randomColor = document.getElementById("randomColor");

function applyColor() {
  const bright = brightness.value;
  const sat = saturation.value;

  previewCar.style.filter = brightness(${bright}%) saturate(${sat}%);
}

colorWheel.addEventListener("input", applyColor);
brightness.addEventListener("input", applyColor);
saturation.addEventListener("input", applyColor);

randomColor.addEventListener("click", () => {
  const randomHex = "#" + Math.floor(Math.random()*16777215).toString(16);
  colorWheel.value = randomHex;
  applyColor();
});

const timer = document.getElementById("timer");

function startTimer() {
  const target = new Date();
  target.setDate(target.getDate() + 7);

  const interval = setInterval(() => {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      clearInterval(interval);
      timer.innerText = "Серия закрыта";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    timer.innerText = ${days}д ${hours}ч ${mins}м ${secs}с;
  }, 1000);
}

startTimer();