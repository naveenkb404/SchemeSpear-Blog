export function renderTimeline(items) {
  return `
    <div class="timeline">
      ${items.map(item => `
        <div class="timeline__item reveal">
          <div class="timeline__dot"></div>
          <div class="timeline__title">${item.title}</div>
          <div class="timeline__desc">${item.desc}</div>
        </div>
      `).join('')}
    </div>
  `;
}
