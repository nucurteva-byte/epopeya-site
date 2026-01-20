const modal = document.getElementById('modal');
const openBtns = [
  document.getElementById('testDriveBtn'),
  document.getElementById('testDriveBtn2')
];
const closeModal = document.getElementById('closeModal');

openBtns.forEach(btn => {
  if (btn) {
    btn.addEventListener('click', () => {
      modal.classList.add('open');
    });
  }
});

if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
  });
}

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});