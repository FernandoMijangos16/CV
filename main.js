// ─── Barra de progreso de scroll ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  document.getElementById('sl').style.transform = `scaleX(${p})`;
}, { passive: true });

// ─── Animación de entrada al hacer scroll (Intersection Observer) ───────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(x => {
    if (x.isIntersecting) x.target.classList.add('in');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rv').forEach(el => obs.observe(el));
