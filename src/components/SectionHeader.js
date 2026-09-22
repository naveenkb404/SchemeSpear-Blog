export function renderSectionHeader({ label, title, description, center = false }) {
  return `
    <div class="section-header ${center ? 'section-header--center' : ''}">
      ${label ? `<div class="mono-label mono-label--accent section-header__label">${label}</div>` : ''}
      <h2 class="headline headline--lg section-header__title">${title}</h2>
      ${description ? `<p class="body-text section-header__desc">${description}</p>` : ''}
    </div>
  `;
}
