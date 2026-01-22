// ====== ВЫБОР ДИСКОВ ======
const modelSelect = document.getElementById("modelSelect");
const wheelSelect = document.getElementById("wheelSelect");
const carImage = document.getElementById("carImage");

function updateCar() {
  if (!modelSelect || !wheelSelect || !carImage) return;

  const model = modelSelect.value;
  const wheel = wheelSelect.value;

  carImage.style.opacity = "0";

  setTimeout(() => {
    carImage.src = `${model}_w${wheel}.png`;
    carImage.style.opacity = "1";
  }, 250);
}

updateCar();

modelSelect?.addEventListener("change", updateCar);
wheelSelect?.addEventListener("change", updateCar);

// ====== АНИМАЦИЯ ЦЕН ======
const priceCards = document.querySelectorAll(".model-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

priceCards.forEach(card => observer.observe(card));

// ====== MODAL ======
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll("#openModalBtn, #openModalBtn2");
const closeBtn = document.getElementById("modalClose");

openBtns.forEach(btn =>
  btn?.addEventListener("click", () => modal.style.display = "flex")
);

closeBtn?.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});