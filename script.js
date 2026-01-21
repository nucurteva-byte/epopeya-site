// ===================== MOBILE MENU =====================
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});

// ===================== MODAL =====================
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const openFormBtn = document.getElementById("openFormBtn");

const testDriveBtn = document.getElementById("testDriveBtn");
const testDriveBtn2 = document.getElementById("testDriveBtn2");
const contactBtn = document.getElementById("contactBtn");

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/ТВОЯ_ССЫЛКА/viewform?embedded=true";

function openModal() {
  modal.style.display = "flex";
}

modalClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
openFormBtn.addEventListener("click", () => window.open(GOOGLE_FORM_URL, "_blank"));

testDriveBtn?.addEventListener("click", openModal);
testDriveBtn2?.addEventListener("click", openModal);
contactBtn?.addEventListener("click", openModal);

// ======= STYLE BUILDER =======

const modelSelect = document.getElementById("model");
const wheelSelect = document.getElementById("wheel");
const wheelBlock = document.getElementById("wheelBlock");

const carColor = document.getElementById("carColor");
const carMask = document.getElementById("carMask");
const colorPicker = document.getElementById("colorPicker");
const colorOverlay = document.getElementById("colorOverlay");

// модели без дисков (например: "gzhel" или "ashkudishka")
const modelsWithoutWheels = ["heroin_needle"];

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carColor.src = ${model}_w${wheel}.png;
  carMask.src = ${model}.png;

  // если у модели нет дисков — скрываем выбор
  if (modelsWithoutWheels.includes(model)) {
    wheelBlock.style.display = "none";
    wheelSelect.value = "1"; // чтобы не было ошибок
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
    color: colorPicker.value,
  };
  localStorage.setItem("epopeyaStyle", JSON.stringify(style));
});
// DEBUG: выводим что найдено
console.log("modelSelect:", modelSelect);
console.log("wheelSelect:", wheelSelect);
console.log("carColor:", carColor);
console.log("carMask:", carMask);
console.log("colorPicker:", colorPicker);
console.log("colorOverlay:", colorOverlay);

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  const colorSrc = ${model}_w${wheel}.png;
  const maskSrc = ${model}.png;

  carColor.src = colorSrc;
  carMask.src = maskSrc;

  console.log("Загружаю:", colorSrc, maskSrc);
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
    color: colorPicker.value,
  };
  localStorage.setItem("epopeyaStyle", JSON.stringify(style));
});

