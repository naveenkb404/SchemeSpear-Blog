import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderCTA } from '../components/CTA.js';

export function renderImpact() {
  const transformSteps = ["CONFUSION", "CLARITY", "READINESS", "CONNECTION", "ACTION"];

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "TRANSFORMATION & SCALABILITY",
          title: "DESIGNED FOR REAL-WORLD IMPACT.",
          description: "SchemeSpear is engineered to generate measurable social, economic, operational, and technological outcomes across state credit ecosystems."
        })}

        <!-- ANIMATED TRANSFORMATION STRIP -->
        <div class="glass-panel reveal" style="padding: 2rem; text-align: center; margin-bottom: 3rem;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1.5rem;">THE BENEFICIARY TRANSFORMATION</div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; flex-wrap: wrap;">
            ${transformSteps.map((step, idx) => `
              <span class="tag ${idx === transformSteps.length - 1 ? 'tag--accent' : ''}" style="font-size: 0.85rem; padding: 0.5rem 1rem;">${step}</span>
              ${idx < transformSteps.length - 1 ? '<span style="color: var(--accent); font-weight: bold;">→</span>' : ''}
            `).join('')}
          </div>
        </div>

        <!-- 4 IMPACT AREAS WITH RESPONSIVE CSS GRID -->
        <div class="impact-grid" style="margin-bottom: 4rem;">
          <div class="glass-panel reveal" style="padding: 1.75rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">SOCIAL IMPACT</div>
            <h3 class="impact-card__title">EMPOWERMENT & INCLUSION</h3>
            <ul style="color: var(--text-tertiary); line-height: 1.6; font-size: var(--text-sm);">
              <li>• Equal access to concessional finance for remote applicants.</li>
              <li>• Multilingual guidance breaks language barriers.</li>
              <li>• Dignified, self-guided discovery process.</li>
              <li>• Inclusion of women entrepreneurs via targeted schemes.</li>
            </ul>
          </div>

          <div class="glass-panel reveal" style="padding: 1.75rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">ECONOMIC IMPACT</div>
            <h3 class="impact-card__title">ENTREPRENEURSHIP & GROWTH</h3>
            <ul style="color: var(--text-tertiary); line-height: 1.6; font-size: var(--text-sm);">
              <li>• Faster credit disbursement boosts small trade setup.</li>
              <li>• Reduced default rates via pre-application EMI planning.</li>
              <li>• Higher utilization of state allocated welfare funds.</li>
              <li>• Sustainable income generation in micro-enterprises.</li>
            </ul>
          </div>

          <div class="glass-panel reveal" style="padding: 1.75rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">OPERATIONAL IMPACT</div>
            <h3 class="impact-card__title">EFFICIENCY & SPEED</h3>
            <ul style="color: var(--text-tertiary); line-height: 1.6; font-size: var(--text-sm);">
              <li>• 80% reduction in channel partner misrouting.</li>
              <li>• Pre-verified document dossiers minimize rejection.</li>
              <li>• Streamlined workload for Channel Agency officers.</li>
              <li>• Automated query resolution reduces counter queues.</li>
            </ul>
          </div>

          <div class="glass-panel reveal" style="padding: 1.75rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">TECHNOLOGY IMPACT</div>
            <h3 class="impact-card__title">SECURE & SCALABLE AI</h3>
            <ul style="color: var(--text-tertiary); line-height: 1.6; font-size: var(--text-sm);">
              <li>• Privacy-preserving self-hosted LLM architecture.</li>
              <li>• Deterministic rule engines guarantee 0% hallucination.</li>
              <li>• Modular microservices architecture ready for scale.</li>
              <li>• Reusable framework for other welfare departments.</li>
            </ul>
          </div>
        </div>

        <!-- BUILT TO SCALE SECTION (ALIGNED WITH THE SAME CONTAINER) -->
        <div class="glass-panel reveal" style="padding: 3rem; margin-bottom: 4rem;">
          ${renderSectionHeader({
            label: "FUTURE EXPANSION VISION",
            title: "BUILT TO SCALE.",
            description: "SchemeSpear is architected to scale beyond initial SC loan schemes to encompass state-wide welfare schemes, multi-department subsidies, and multilingual voice assistance."
          })}

          <div class="flow-diagram flow-diagram--horizontal" style="margin-top: 2rem;">
            <div class="flow-step"><div class="flow-step__node">SC LOANS</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">MORE STATES</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">MORE PARTNERS</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">MORE LANGUAGES</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">MORE SCHEMES</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node" style="color: var(--accent); border-color: var(--accent);">BROADER FINANCIAL SUPPORT</div></div>
          </div>

          <div class="pull-quote" style="margin-top: 3rem;">
            <div class="pull-quote__text">
              “Vision: Build an intelligent gateway to government financial opportunities for underserved beneficiaries across India.”
            </div>
          </div>
        </div>

        ${renderCTA({
          title: "EXPLORE THE SCHEMESPEAR JOURNAL",
          description: "Read our comprehensive articles detailing policy analysis, system design, and channel partner workflows.",
          primaryBtnText: "READ THE JOURNAL",
          primaryBtnLink: "#/blog"
        })}
      </div>
    </div>
  `;
}
