const modelSelect = document.getElementById("modelSelect");
const wheelSelect = document.getElementById("wheelSelect");
const carImage = document.getElementById("carImage");

function updateCar() {
  const model = modelSelect.value;
  const wheel = wheelSelect.value;
  carImage.src = `${model}_w${wheel}.png`;
}
updateCar();

modelSelect.addEventListener("change", updateCar);
wheelSelect.addEventListener("change", updateCar);

// MODAL
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeBtn = document.getElementById("modalClose");

openModalBtn.addEventListener("click", () => modal.style.display = "flex");
openModalBtn2.addEventListener("click", () => modal.style.display = "flex");
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});