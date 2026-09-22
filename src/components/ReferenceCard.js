export function renderReferenceCard(ref) {
  return `
    <div class="ref-card reveal">
      <div class="ref-card__org">${ref.organization} · ${ref.year}</div>
      <div class="ref-card__title">${ref.title}</div>
      <div class="ref-card__desc">${ref.description}</div>
      <div style="display: flex; gap: 12px; align-items: center; margin-top: 8px;">
        <span class="tag">${ref.topic}</span>
        <a href="${ref.link}" target="_blank" rel="noopener" class="mono-label mono-label--accent" style="font-size: 0.65rem;">
          VIEW SOURCE →
        </a>
      </div>
    </div>
  `;
}
