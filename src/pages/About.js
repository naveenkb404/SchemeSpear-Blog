import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderCTA } from '../components/CTA.js';
import { teamData } from '../data/team.js';

/**
 * Compact inline SVG person icon — matches technical visual style.
 * Rendered at 20x20px, stroked with currentColor so it inherits theme color.
 */
const personIcon = `
  <svg class="team-member-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true" focusable="false">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
`;

export function renderAbout() {
  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: `TEAM ${teamData.teamName} · ${teamData.sih}`,
          title: "PROBLEM STATEMENT SIH26092",
          description: "We are an engineering team participating in Smart India Hackathon 2026, dedicated to building production-quality, research-driven AI infrastructure for public financial accessibility."
        })}

        <!-- MISSION, APPROACH, PHILOSOPHY -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
          <div class="glass-panel reveal" style="padding: 2rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">OUR MISSION</div>
            <p class="body-text" style="font-size: var(--text-sm);">${teamData.mission}</p>
          </div>

          <div class="glass-panel reveal" style="padding: 2rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">OUR APPROACH</div>
            <p class="body-text" style="font-size: var(--text-sm);">${teamData.approach}</p>
          </div>

          <div class="glass-panel reveal" style="padding: 2rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">TECHNOLOGY PHILOSOPHY</div>
            <p class="body-text" style="font-size: var(--text-sm);">${teamData.philosophy}</p>
          </div>
        </div>

        <!-- TEAM MEMBERS GRID -->
        <div style="margin: 5rem 0;">
          ${renderSectionHeader({
            label: "THE ENGINEERS &amp; RESEARCHERS",
            title: "TEAM SCORPIUS",
            description: "Meet the multidisciplinary team behind the SchemeSpear platform."
          })}

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
            ${teamData.members.map(member => `
              <div class="glass-panel reveal team-member-card" style="padding: 1.5rem;">

                <!-- MEMBER IDENTITY SECTION -->
                <div class="team-member-identity">
                  <div class="team-member-avatar" aria-hidden="true">
                    ${personIcon}
                  </div>
                  <div class="team-member-info">
                    <div class="team-member-name">${member.memberName}</div>
                    <div class="team-member-dept">${member.dept}</div>
                  </div>
                </div>

                <!-- DIVIDER -->
                <div class="team-member-divider" aria-hidden="true"></div>

                <!-- EXISTING ROLE / CATEGORY SECTION — UNCHANGED -->
                <div class="mono-label mono-label--accent" style="margin-bottom: 0.25rem;">${member.role}</div>
                <h4 style="color: var(--text-primary); font-size: var(--text-base); margin-bottom: 0.5rem;">${member.name}</h4>
                <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: 1rem;">${member.bio}</p>
                <a href="${member.github}" target="_blank" rel="noopener" class="mono-label" style="font-size: 0.65rem; color: var(--text-muted);">
                  GITHUB PROFILE →
                </a>
              </div>
            `).join('')}
          </div>
        </div>

        ${renderCTA({
          title: "EXPLORE OUR RESEARCH &amp; JOURNAL",
          description: "Read our technical articles detailing how SchemeSpear addresses Problem Statement SIH26092.",
          primaryBtnText: "READ THE JOURNAL",
          primaryBtnLink: "#/blog"
        })}
      </div>
    </div>
  `;
}
