// small interactive counter so the page is demonstrably working
document.addEventListener('DOMContentLoaded', function () {
  const counterEl = document.getElementById('counter');
  const btn = document.getElementById('countBtn');
  let clicks = 0;

  btn.addEventListener('click', function () {
    clicks += 1;
    counterEl.textContent = clicks;
  });

  // CTA shows a simple message (no server required)
  const cta = document.getElementById('cta');
  cta.addEventListener('click', () => alert('Nice — you clicked Get Started!'));
});
