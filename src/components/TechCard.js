export function renderTechCard(tech) {
  return `
    <div class="tech-card reveal">
      <div class="tag" style="margin-bottom: 8px;">${tech.category}</div>
      <div class="tech-card__name">${tech.name}</div>
      <div class="tech-card__desc">${tech.desc}</div>
    </div>
  `;
}
