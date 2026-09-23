import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderStatCard } from '../components/StatCard.js';
import { renderTimeline } from '../components/Timeline.js';
import { renderReferenceCard } from '../components/ReferenceCard.js';
import { statsData } from '../data/stats.js';
import { references } from '../data/references.js';

/**
 * Renders a research editorial photograph with accessibility, captions,
 * error fallback, and a technical badge overlay.
 */
function renderResearchVisual({ size, img, alt, badge, caption, meta, id }) {
  const sizeClass = size === 'hero' ? 'research-visual--hero' : 'research-visual--medium';
  return `
    <figure class="research-visual ${sizeClass} reveal" aria-label="${meta}">
      <div class="research-visual__frame">
        <img
          id="research-img-${id}"
          src="${img}"
          alt="${alt}"
          class="research-visual__img"
          loading="lazy"
          onerror="this.style.display='none'; document.getElementById('research-err-${id}').style.display='flex';"
        />
        <div
          id="research-err-${id}"
          class="research-visual__error"
          style="display:none; position:absolute; inset:0; align-items:center; justify-content:center; background:var(--bg-secondary); color:var(--text-muted); font-family:var(--font-mono); font-size:0.72rem; letter-spacing:0.08em;"
          aria-hidden="true"
        >IMAGE UNAVAILABLE</div>
        <div class="research-visual__overlay" aria-hidden="true"></div>
        <div class="research-visual__badge">
          <span class="research-visual__badge-tag">${badge}</span>
        </div>
      </div>
      <figcaption class="research-visual__caption">
        <span class="research-visual__caption-text">
          <span class="research-visual__caption-icon" aria-hidden="true">&#9432;</span>
          ${caption}
        </span>
        <span class="research-visual__caption-meta">${meta}</span>
      </figcaption>
    </figure>
  `;
}

export function renderResearch() {
  const researchTimeline = [
    { title: "PROBLEM IDENTIFIED", desc: "Analysis of SIH26092 highlighting low utilization of SC credit schemes due to application friction." },
    { title: "DATA REVIEWED", desc: "Review of NSFDC Jan 2026 FAQs (Rs.5L ceiling, 102 channel partners) and NITI Aayog Jan 2026 MSME report." },
    { title: "SYSTEM GAP ANALYZED", desc: "Mapping information asymmetry, document rejection factors, and channel partner routing disconnects." },
    { title: "SOLUTION DESIGNED", desc: "Architecting a multi-tier platform combining localized AI understanding with deterministic eligibility rules." },
    { title: "TECHNICAL MODEL", desc: "Prototyping self-hosted LLM parsing, pgvector knowledge retrieval, and GIS channel partner mapping." },
    { title: "SCHEMESPEAR PROTOTYPE", desc: "Finalizing the SIH 2026 production-grade web application showcase." }
  ];

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "EVIDENCE &amp; RESEARCH INTEGRITY",
          title: "THE PROBLEM IS REAL.",
          description: "All statistics presented on SchemeSpear are drawn from published government reports and official guidelines. We explicitly distinguish official facts from research findings and prototype design decisions."
        })}

        <!-- RESEARCH INTEGRITY SYSTEM BADGE CARD -->
        <div class="glass-panel reveal" style="padding: 2.25rem 2rem; margin-bottom: 3.5rem; border-color: var(--border-accent);">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem; font-weight: 700;">RESEARCH INTEGRITY TAXONOMY</div>
          <h3 class="headline headline--sm" style="margin-bottom: 1rem; font-weight: 700;">OUR DATA CREDIBILITY FRAMEWORK</h3>
          <p style="font-size: var(--text-sm); color: var(--text-secondary); font-weight: 500; margin-bottom: 1.5rem; line-height: 1.6;">
            To ensure complete transparency during SIH 2026 evaluation, every data point on SchemeSpear is tagged with one of four explicit research integrity levels:
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem;">
            <div style="background: var(--bg-card); padding: 1.15rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
              <span class="tag tag--accent" style="margin-bottom: 6px; font-weight: 700;">OFFICIAL FACT</span>
              <p style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500; margin-top: 4px; line-height: 1.5;">Directly reported by official government sources (e.g. NSFDC FAQs effective 7 Jan 2026).</p>
            </div>

            <div style="background: var(--bg-card); padding: 1.15rem; border-radius: var(--radius-md); border-left: 3px solid var(--info); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
              <span class="tag" style="border-color: var(--info); color: var(--info); margin-bottom: 6px; font-weight: 700;">RESEARCH FINDING</span>
              <p style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500; margin-top: 4px; line-height: 1.5;">Evidence from published research studies (e.g. NITI Aayog Jan 2026 MSME Report).</p>
            </div>

            <div style="background: var(--bg-card); padding: 1.15rem; border-radius: var(--radius-md); border-left: 3px solid var(--success); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
              <span class="tag" style="border-color: var(--success); color: var(--success); margin-bottom: 6px; font-weight: 700;">SCHEMESPEAR DESIGN</span>
              <p style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500; margin-top: 4px; line-height: 1.5;">Our proposed technical solution architecture and algorithmic matching models.</p>
            </div>

            <div style="background: var(--bg-card); padding: 1.15rem; border-radius: var(--radius-md); border-left: 3px solid var(--warning); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
              <span class="tag" style="border-color: var(--warning); color: var(--warning); margin-bottom: 6px; font-weight: 700;">ILLUSTRATIVE</span>
              <p style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500; margin-top: 4px; line-height: 1.5;">Simulated demonstration data used for prototype testing.</p>
            </div>
          </div>
        </div>

        <!-- REAL-WORLD RESEARCH VISUAL 1: PUBLIC SERVICE & BENEFICIARY ASSISTANCE -->
        <!-- Photo: Community members at an assistance desk (Pexels, downloaded locally) -->
        ${renderResearchVisual({
          id: 'v1',
          size: 'hero',
          img: '/images/research/research-public-assistance.jpg',
          alt: 'Beneficiaries and community members consulting at a public assistance guidance desk',
          badge: 'REAL-WORLD CONTEXT &middot; PUBLIC ASSISTANCE CHANNELS',
          caption: '"Access to financial support often involves navigating eligibility, documentation and application channels."',
          meta: 'Field Observation &middot; Community Access Points'
        })}

        <!-- RESEARCH DASHBOARD — SOURCED EVIDENCE -->
        <div style="margin: 4rem 0;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1.5rem; font-weight: 700;">SOURCED EVIDENCE CARDS</div>
          <div class="stats-grid">
            ${statsData.map(stat => renderStatCard(stat)).join('')}
          </div>

          <div class="glass-panel reveal" style="margin-top: 2rem; padding: 1.75rem 2rem; border-left: 4px solid var(--accent);">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem; font-weight: 700;">IMPORTANT CITATION CONTEXT</div>
            <p style="font-size: var(--text-base); color: var(--text-primary); font-weight: 600; line-height: 1.6;">
              Research insight: These figures come from NITI Aayog's 2026 report on MSME scheme utilization, not a survey of NSFDC beneficiaries specifically. SchemeSpear applies this broader scheme-access problem specifically to the NSFDC/SC financial-support journey.
            </p>
          </div>
        </div>

        <!-- REAL-WORLD RESEARCH VISUALS 2 & 3: ENTREPRENEURSHIP & DOCUMENTATION -->
        <!-- Photos: Rural small entrepreneur + documentation process (Pexels, downloaded locally) -->
        <div class="research-visuals-grid">
          ${renderResearchVisual({
            id: 'v2',
            size: 'medium',
            img: '/images/research/research-rural-entrepreneur.jpg',
            alt: 'Rural small business entrepreneur managing daily workshop operations',
            badge: 'REAL-WORLD CONTEXT &middot; MICRO-ENTERPRISE',
            caption: '"Concessional finance can support self-employment and small enterprise activity."',
            meta: 'Trade Activity'
          })}

          ${renderResearchVisual({
            id: 'v3',
            size: 'medium',
            img: '/images/research/research-application-process.jpg',
            alt: 'Person reviewing documentation and handling administrative paperwork for a scheme application',
            badge: 'REAL-WORLD CONTEXT &middot; DOCUMENT READINESS',
            caption: '"Application readiness depends on understanding required documents and process requirements."',
            meta: 'Process Readiness'
          })}
        </div>

        <!-- RESEARCH TIMELINE -->
        <div class="glass-panel" style="margin: 5rem 0; padding: 2.5rem 2rem;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1rem; font-weight: 700;">METHODOLOGY</div>
          <h3 class="headline headline--sm" style="margin-bottom: 2rem; font-weight: 700;">RESEARCH &amp; DEVELOPMENT TIMELINE</h3>
          ${renderTimeline(researchTimeline)}
        </div>

        <!-- REAL-WORLD RESEARCH VISUAL 4: COMMUNITY ENTREPRENEURSHIP & FINANCIAL INCLUSION -->
        <!-- Photo: Community-level financial inclusion (Pexels, downloaded locally) -->
        ${renderResearchVisual({
          id: 'v4',
          size: 'hero',
          img: '/images/research/research-financial-inclusion.jpg',
          alt: 'Community small business activity representing financial inclusion and local enterprise',
          badge: 'REAL-WORLD CONTEXT &middot; FINANCIAL INCLUSION',
          caption: '"Research focus: turning fragmented scheme information into an actionable access path."',
          meta: 'Field Focus &middot; Inclusive Economic Mobility'
        })}

        <!-- SOURCE LIBRARY -->
        <div style="margin: 5rem 0;">
          ${renderSectionHeader({
            label: "TRANSPARENCY &amp; CITATIONS",
            title: "OFFICIAL SOURCE LIBRARY",
            description: "Direct reference links to institutional reports and official policy documentation."
          })}

          <div style="margin-top: 2rem;">
            ${references.map(ref => renderReferenceCard(ref)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
