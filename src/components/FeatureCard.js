export function renderFeatureCard(feature) {
  return `
    <div class="feature-card reveal" id="feature-${feature.id}">
      <div class="step-number feature-card__number">${feature.id}</div>
      <div class="feature-card__icon">${feature.icon}</div>
      <div class="feature-card__title">${feature.title}</div>
      <div class="feature-card__desc">${feature.desc}</div>
      
      <div class="feature-card__detail">
        <strong style="color: var(--text-secondary); display: block; margin-bottom: 4px;">HOW IT WORKS:</strong>
        ${feature.howItWorks}
        <strong style="color: var(--text-secondary); display: block; margin-top: 8px; margin-bottom: 4px;">EXAMPLE USE CASE:</strong>
        ${feature.useCase}
      </div>

      <div class="feature-card__toggle" onclick="this.parentElement.classList.toggle('expanded'); this.querySelector('span').innerText = this.parentElement.classList.contains('expanded') ? 'SHOW LESS ▲' : 'HOW IT WORKS ▼';">
        <span>HOW IT WORKS ▼</span>
      </div>
    </div>
  `;
}
