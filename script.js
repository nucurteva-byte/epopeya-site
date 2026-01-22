// ====== ВЫБОР ДИСКОВ ======
const modelSelect = document.getElementById("modelSelect");
const wheelSelect = document.getElementById("wheelSelect");
const carImage = document.getElementById("carImage");

function updateCar() {
  if (!modelSelect || !wheelSelect || !carImage) return;

  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carImage.src = `${model}_w${wheel}.png`;
}

updateCar();

if (modelSelect) modelSelect.addEventListener("change", updateCar);
if (wheelSelect) wheelSelect.addEventListener("change", updateCar);


// ====== MODAL + GOOGLE FORM ======
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeBtn = document.getElementById("modalClose");

if (openModalBtn)
  openModalBtn.addEventListener("click", () => modal.style.display = "flex");

if (openModalBtn2)
  openModalBtn2.addEventListener("click", () => modal.style.display = "flex");

if (closeBtn)
  closeBtn.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


const reviewVideo = document.getElementById("reviewVideo");
const videoBtn = document.getElementById("videoBtn");

if (reviewVideo && videoBtn) {

  // НЕ запускаем автоматом, только если пользователь нажмёт
  // (чтобы не было блокировки браузером)

  videoBtn.addEventListener("click", () => {
    if (reviewVideo.muted) {
      reviewVideo.muted = false;
      videoBtn.textContent = "🔇 Выключить звук";
      reviewVideo.play();
    } else {
      reviewVideo.muted = true;
      videoBtn.textContent = "🔊 Включить звук";
    }
  });
}