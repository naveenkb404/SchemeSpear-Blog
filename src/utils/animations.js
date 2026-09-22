export function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

export function initReadingProgress() {
  const progressContainer = document.getElementById('reading-progress');
  const progressBar = progressContainer?.querySelector('.reading-progress__bar');

  window.addEventListener('scroll', () => {
    const isArticle = window.location.hash.startsWith('#/blog/');
    if (!isArticle || !progressContainer || !progressBar) {
      progressContainer?.classList.remove('active');
      return;
    }

    progressContainer.classList.add('active');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

export function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
}
