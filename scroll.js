document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".luxury-section");
  const soundBtn = document.getElementById("soundToggle");

  const engineSound = new Audio("engine.mp3");
  engineSound.volume = 0.35;

  let soundEnabled = false;

  // luxury-scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // включаем звук после нажатия кнопки
  soundBtn.addEventListener("click", () => {
    soundEnabled = true;
    soundBtn.textContent = "Звук включён";
    soundBtn.style.opacity = "0.7";
  });

  // звук при скролле (только если включён)
  let lastScroll = 0;
  let canPlay = true;

  window.addEventListener("scroll", () => {
    if (!soundEnabled) return;

    const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - lastScroll) > 20 && canPlay) {
      engineSound.currentTime = 0;
      engineSound.play().catch(() => {});

      canPlay = false;
      setTimeout(() => {
        engineSound.pause();
      }, 800);

      setTimeout(() => {
        canPlay = true;
      }, 600);
    }

    lastScroll = currentScroll;
  });
});