import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderStatCard } from '../components/StatCard.js';
import { renderTimeline } from '../components/Timeline.js';
import { renderReferenceCard } from '../components/ReferenceCard.js';
import { statsData } from '../data/stats.js';
import { references } from '../data/references.js';

export function renderResearch() {
  const researchTimeline = [
    { title: "PROBLEM IDENTIFIED", desc: "Analysis of SIH26092 highlighting low utilization of SC credit schemes due to application friction." },
    { title: "DATA REVIEWED", desc: "Review of NSFDC Jan 2026 FAQs (₹5L ceiling, 102 channel partners) and NITI Aayog Jan 2026 MSME report." },
    { title: "SYSTEM GAP ANALYZED", desc: "Mapping information asymmetry, document rejection factors, and channel partner routing disconnects." },
    { title: "SOLUTION DESIGNED", desc: "Architecting a multi-tier platform combining localized AI understanding with deterministic eligibility rules." },
    { title: "TECHNICAL MODEL", desc: "Prototyping self-hosted LLM parsing, pgvector knowledge retrieval, and GIS channel partner mapping." },
    { title: "SCHEMESPEAR PROTOTYPE", desc: "Finalizing the SIH 2026 production-grade web application showcase." }
  ];

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "EVIDENCE & RESEARCH INTEGRITY",
          title: "THE PROBLEM IS REAL.",
          description: "All statistics presented on SchemeSpear are drawn from published government reports and official guidelines. We explicitly distinguish official facts from research findings and prototype design decisions."
        })}

        <!-- RESEARCH INTEGRITY SYSTEM BADGE CARD -->
        <div class="glass-panel reveal" style="padding: 2rem; margin-bottom: 3rem; border-color: var(--border-accent);">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">RESEARCH INTEGRITY TAXONOMY</div>
          <h3 class="headline headline--sm" style="margin-bottom: 1rem;">OUR DATA CREDIBILITY FRAMEWORK</h3>
          <p style="font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: 1.5rem;">
            To ensure complete transparency during SIH 2026 evaluation, every data point on SchemeSpear is tagged with one of four explicit research integrity levels:
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem;">
            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent);">
              <span class="tag tag--accent" style="margin-bottom: 4px;">OFFICIAL FACT</span>
              <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Directly reported by official government sources (e.g. NSFDC FAQs effective 7 Jan 2026).</p>
            </div>

            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--info);">
              <span class="tag" style="border-color: var(--info); color: var(--info); margin-bottom: 4px;">RESEARCH FINDING</span>
              <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Evidence from published research studies (e.g. NITI Aayog Jan 2026 MSME Report).</p>
            </div>

            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--success);">
              <span class="tag" style="border-color: var(--success); color: var(--success); margin-bottom: 4px;">SCHEMESPEAR DESIGN</span>
              <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Our proposed technical solution architecture and algorithmic matching models.</p>
            </div>

            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--warning);">
              <span class="tag" style="border-color: var(--warning); color: var(--warning); margin-bottom: 4px;">ILLUSTRATIVE</span>
              <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Simulated demonstration data used for prototype testing.</p>
            </div>
          </div>
        </div>

        <!-- RESEARCH DASHBOARD -->
        <div style="margin: 3rem 0;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1.5rem;">SOURCED EVIDENCE CARDS</div>
          <div class="stats-grid">
            ${statsData.map(stat => renderStatCard(stat)).join('')}
          </div>

          <div class="glass-panel reveal" style="margin-top: 2rem; padding: 1.5rem; border-left: 3px solid var(--accent);">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.25rem;">IMPORTANT CITATION CONTEXT</div>
            <p style="font-size: var(--text-base); color: var(--text-primary); font-weight: 500;">
              Research insight: These figures come from NITI Aayog's 2026 report on MSME scheme utilization, not a survey of NSFDC beneficiaries specifically. SchemeSpear applies this broader scheme-access problem specifically to the NSFDC/SC financial-support journey.
            </p>
          </div>
        </div>

        <!-- RESEARCH TIMELINE -->
        <div style="margin: 5rem 0;" class="glass-panel" style="padding: 3rem;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">METHODOLOGY</div>
          <h3 class="headline headline--sm" style="margin-bottom: 2rem;">RESEARCH & DEVELOPMENT TIMELINE</h3>
          ${renderTimeline(researchTimeline)}
        </div>

        <!-- SOURCE LIBRARY -->
        <div style="margin: 5rem 0;">
          ${renderSectionHeader({
            label: "TRANSPARENCY & CITATIONS",
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
