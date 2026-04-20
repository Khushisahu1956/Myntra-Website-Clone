document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.row');
  function matchHeights() {
    rows.forEach(row => {
      const imgs = row.querySelectorAll('img');
      if (imgs.length >= 2) {
        const last = imgs[imgs.length - 1];
        const prev = imgs[imgs.length - 2];
        const h = prev.getBoundingClientRect().height;
        if (h) {
          last.style.height = h + 'px';
          last.style.objectFit = 'cover';
        }
      }
    });
  }

  // Run once images are loaded
  window.addEventListener('load', matchHeights);
  // Also run on resize to keep heights in sync
  window.addEventListener('resize', matchHeights);
  // Fallback: run after DOM content loaded
  setTimeout(matchHeights, 100);
});
