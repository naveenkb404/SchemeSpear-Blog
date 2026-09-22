export function renderTableOfContents(headings) {
  return `
    <nav class="toc" aria-label="Table of Contents">
      <div class="toc__title">TABLE OF CONTENTS</div>
      <div class="toc__list">
        ${headings.map(h => `
          <a href="#${h.id}" class="toc__link">
            ${h.text}
          </a>
        `).join('')}
      </div>
    </nav>
  `;
}

export function renderFAQ(faqs) {
  return `
    <div class="faq-list">
      ${faqs.map((faq, idx) => `
        <div class="faq-item reveal ${idx === 0 ? 'open' : ''}">
          <button class="faq-item__question" onclick="this.parentElement.classList.toggle('open')">
            <span>${faq.q}</span>
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__answer">
            <div class="faq-item__answer-inner">
              ${faq.a}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderCTA({ title, description, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) {
  return `
    <section class="section cta-section grid-bg">
      <div class="container">
        <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">
          SCORPIUS · SIH 2026 · PROBLEM SIH26092
        </div>
        <h2 class="headline headline--lg cta-section__title">${title}</h2>
        <p class="body-text cta-section__desc">${description}</p>
        <div class="cta-section__actions">
          <a href="${primaryBtnLink}" class="btn btn--primary">
            ${primaryBtnText} <span class="arrow">→</span>
          </a>
          ${secondaryBtnText ? `
            <a href="${secondaryBtnLink}" class="btn btn--outline">
              ${secondaryBtnText}
            </a>
          ` : ''}
        </div>
      </div>
    </section>
  `;
}
