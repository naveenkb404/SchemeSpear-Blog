export function renderStatCard(stat) {
  return `
    <div class="stat-card reveal">
      ${stat.integrityBadge ? `
        <div class="stat-card__badge-row">
          <span class="tag tag--accent stat-card__badge">${stat.integrityBadge}</span>
        </div>
      ` : ''}
      <div class="stat-number stat-number--accent stat-card__number">${stat.number}</div>
      <div class="stat-card__title">${stat.title}</div>
      <div class="stat-card__claim">${stat.description}</div>
      
      <div class="stat-card__meta">
        <div class="stat-card__meta-item">
          <span class="stat-card__meta-label">Context:</span>
          <span class="stat-card__meta-body">${stat.context}</span>
        </div>
        <div class="stat-card__meta-item">
          <span class="stat-card__meta-label">What this means:</span>
          <span class="stat-card__meta-body">${stat.meaning}</span>
        </div>
      </div>

      <div class="stat-card__source">
        <span class="stat-card__source-label">SOURCE:</span>
        <span class="stat-card__source-text">${stat.source} (${stat.year})</span>
      </div>
    </div>
  `;
}
