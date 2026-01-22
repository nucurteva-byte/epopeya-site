// ====== DISK BUILDER ======
const modelSelect = document.getElementById("modelSelect");
const wheelSelect = document.getElementById("wheelSelect");
const carImage = document.getElementById("carImage");

function updateCar() {
  if (!modelSelect || !wheelSelect || !carImage) return;

  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carImage.classList.add("fade-out");

  setTimeout(() => {
    carImage.src = `${model}_w${wheel}.png`;
    carImage.classList.remove("fade-out");
    carImage.classList.add("fade-in");
  }, 300);
}

updateCar();

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);

// ====== MODAL ======
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeBtn = document.getElementById("modalClose");

if (openModalBtn)
  openModalBtn.onclick = () => modal.style.display = "flex";

if (openModalBtn2)
  openModalBtn2.onclick = () => modal.style.display = "flex";

if (closeBtn)
  closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};