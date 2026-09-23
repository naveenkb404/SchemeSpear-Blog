import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderTechCard } from '../components/TechCard.js';
import { renderCTA } from '../components/CTA.js';
import { techStackData } from '../data/techStack.js';
import { renderArchitecturePipeline } from '../components/ArchitecturePipeline.js';

export function renderTechnology() {
  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "SYSTEM ARCHITECTURE & HYBRID ENGINE",
          title: "AI UNDERSTANDS.<br/>RULES VERIFY.<br/>ALGORITHMS GUIDE.",
          description: "SchemeSpear combines conversational AI accessibility with strict deterministic rule enforcement. Sensitive beneficiary data remains 100% contained within local infrastructure."
        })}

        <!-- PRIVATE BY DESIGN DEDICATED SECTION -->
        <div class="glass-panel reveal" style="padding: 3rem; margin: 3rem 0; border-color: var(--border-accent);">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">DATA SOVEREIGNTY MANDATE</div>
          <h2 class="headline headline--md" style="margin-bottom: 1rem;">PRIVATE BY DESIGN</h2>
          <h3 class="headline headline--sm" style="color: var(--accent); margin-bottom: 1.5rem;">YOUR DATA STAYS WITHIN OUR CONTROLLED INFRASTRUCTURE.</h3>

          <!-- PRIVATE DATAFLOW DIAGRAM -->
          <div class="flow-diagram flow-diagram--horizontal" style="margin-bottom: 2rem;">
            <div class="flow-step"><div class="flow-step__node">BENEFICIARY DATA</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node" style="border-color: var(--accent); color: var(--accent);">SELF-HOSTED AI</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">CONTROLLED INFRASTRUCTURE</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node" style="background: var(--accent); color: var(--text-primary);">SCHEMESPEAR</div></div>
          </div>

          <p class="body-text" style="max-width: 800px; margin: 0 auto 1.5rem; text-align: center;">
            SchemeSpear is designed around a self-hosted LLM architecture rather than depending on an external LLM API for beneficiary-profile understanding. By serving quantized open-weights models locally on private server nodes, sensitive beneficiary PII and income data are designed to remain strictly within controlled infrastructure boundaries.
          </p>
        </div>

        <!-- NEW 8-STAGE SYSTEM ARCHITECTURE PIPELINE WITH CONTINUOUS FEEDBACK LOOP -->
        ${renderArchitecturePipeline()}

        <!-- ARCHITECTURE PHILOSOPHY BREAKDOWN -->
        <div style="margin: 4rem 0;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">DECOUPLED ROLES</div>
          <h3 class="headline headline--sm" style="margin-bottom: 2rem;">ARCHITECTURE PHILOSOPHY</h3>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
            <div class="glass-panel reveal" style="padding: 1.5rem;">
              <span class="tag tag--accent" style="margin-bottom: 0.5rem;">LLM</span>
              <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Understands natural language</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Converts conversational inputs into structured JSON profiles without evaluating logic.</p>
            </div>

            <div class="glass-panel reveal" style="padding: 1.5rem;">
              <span class="tag tag--accent" style="margin-bottom: 0.5rem;">RAG</span>
              <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Retrieves verified scheme information</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Fetches verbatim guidelines from verified scheme PDF repositories indexed in pgvector.</p>
            </div>

            <div class="glass-panel reveal" style="padding: 1.5rem;">
              <span class="tag tag--accent" style="margin-bottom: 0.5rem;">RULE ENGINE</span>
              <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Checks deterministic eligibility conditions</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Executes boolean logic trees against ₹5 Lakh income ceiling and trade criteria.</p>
            </div>

            <div class="glass-panel reveal" style="padding: 1.5rem;">
              <span class="tag tag--accent" style="margin-bottom: 0.5rem;">FINANCIAL ENGINE</span>
              <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Performs mathematical calculations</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Calculates EMI, interest totals, and moratorium schedules with zero LLM math error.</p>
            </div>

            <div class="glass-panel reveal" style="padding: 1.5rem;">
              <span class="tag tag--accent" style="margin-bottom: 0.5rem;">MATCHING ENGINE</span>
              <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Ranks applicable schemes</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Prioritizes schemes based on project cost thresholds (MFS vs Term Loan).</p>
            </div>

            <div class="glass-panel reveal" style="padding: 1.5rem;">
              <span class="tag tag--accent" style="margin-bottom: 0.5rem;">GEO ENGINE</span>
              <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Supports partner discovery/routing</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Indexes 102 NSFDC Channel Partners (SCAs, PSBs, RRBs) for last-mile direction.</p>
            </div>
          </div>

          <div class="key-takeaway reveal" style="margin-top: 2.5rem; text-align: center;">
            <div class="key-takeaway__title" style="font-size: 0.9rem;">CRITICAL EVALUATION CALLOUT FOR SIH JUDGES</div>
            <div class="key-takeaway__content" style="font-size: var(--text-xl); font-weight: 800; color: var(--accent);">
              LLM NEVER INDEPENDENTLY DECIDES ELIGIBILITY.
            </div>
          </div>
        </div>

        <!-- TECH STACK GRID -->
        <div style="margin: 5rem 0;">
          ${renderSectionHeader({
            label: "TECHNOLOGY STACK",
            title: "INTERACTIVE TECH GRID",
            description: "Hover over any component to explore its technical role within the SchemeSpear platform."
          })}

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; margin-top: 2rem;">
            ${techStackData.map(tech => renderTechCard(tech)).join('')}
          </div>
        </div>

        ${renderCTA({
          title: "READ TECHNICAL CASE STUDY ON HYBRID AI",
          description: "Read our in-depth research paper on combining self-hosted LLMs with deterministic rules engines for explainable public finance eligibility.",
          primaryBtnText: "READ TECHNICAL ARTICLE",
          primaryBtnLink: "#/blog/ai-plus-rule-based-systems-for-explainable-eligibility",
          secondaryBtnText: "EXPLORE THE RESEARCH",
          secondaryBtnLink: "#/research"
        })}
      </div>
    </div>
  `;
}
