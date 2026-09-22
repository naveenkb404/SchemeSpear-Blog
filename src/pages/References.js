import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderReferenceCard } from '../components/ReferenceCard.js';
import { references } from '../data/references.js';

export function renderReferences() {
  const categories = Array.from(new Set(references.map(r => r.category)));

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "ACADEMIC & GOVERNMENT CITATIONS",
          title: "REFERENCES & SOURCES",
          description: "A complete collection of external reports, audit documents, government notifications, and technical research referenced across the SchemeSpear website."
        })}

        <div style="margin: 4rem 0;">
          ${categories.map(cat => `
            <div style="margin-bottom: 3rem;">
              <div class="mono-label mono-label--accent" style="margin-bottom: 1rem; font-size: 0.8rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-accent);">
                ${cat}
              </div>
              <div>
                ${references.filter(r => r.category === cat).map(ref => renderReferenceCard(ref)).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
