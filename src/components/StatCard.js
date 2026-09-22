export function renderStatCard(stat) {
  return `
    <div class="stat-card reveal">
      <div class="stat-number stat-number--accent stat-card__number">${stat.number}</div>
      <div class="stat-card__title">${stat.title}</div>
      <div class="stat-card__desc">${stat.description}</div>
      <div class="stat-card__desc" style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.5rem;">
        <strong>Context:</strong> ${stat.context}<br/>
        <strong>What this means:</strong> ${stat.meaning}
      </div>
      <div class="stat-card__source">
        SOURCE: ${stat.source} (${stat.year})
      </div>
    </div>
  `;
}
