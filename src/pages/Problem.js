import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderFlowDiagram } from '../components/FlowDiagram.js';
import { renderCTA } from '../components/CTA.js';

export function renderProblem() {
  const problemSteps = [
    { step: "01", title: "I NEED FINANCIAL SUPPORT", detail: "Applicant identifies a need for micro-credit or trade project funding." },
    { step: "02", title: "WHICH SCHEME FITS?", detail: "Navigating between Term Loan, Micro-Credit, Mahila Samriddhi, or Green Business schemes." },
    { step: "03", title: "AM I ELIGIBLE?", detail: "Verifying family income against current NSFDC ₹5 Lakh ceiling (effective 7 Jan 2026)." },
    { step: "04", title: "WHAT DOCUMENTS DO I NEED?", detail: "Identifying caste certificates, income proofs, and detailed project reports (DPR)." },
    { step: "05", title: "HOW MUCH CAN I BORROW?", detail: "Evaluating scheme loan caps (e.g. MFS max ₹1.25L / Term Loan max ₹45L)." },
    { step: "06", title: "WHAT WILL REPAYMENT LOOK LIKE?", detail: "Understanding monthly EMI obligations, concessional interest rates, and moratorium grace." },
    { step: "07", title: "WHO CAN PROCESS MY APPLICATION?", detail: "Identifying which of the 102 authorized Channel Partners (SCAs, PSBs, RRBs) handles the local district." }
  ];

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "SIH 2026 · PROBLEM STATEMENT SIH26092",
          title: "FINANCIAL SUPPORT EXISTS.<br/>ACCESSING IT ISN'T ALWAYS SIMPLE.",
          description: "Government financial assistance can involve multiple schemes, eligibility conditions, documentation requirements, and authorized Channelizing Agencies. For NSFDC credit schemes, applicants cannot simply apply directly to NSFDC; applications are routed through authorized State Channelizing Agencies or other Channelizing Agencies. NSFDC also states that its network includes 102 partners across SCAs, PSBs, RRBs, NBFC-MFIs and other authorized partners."
        })}

        <!-- INTERACTIVE PROBLEM JOURNEY FLOWCHART -->
        <div style="margin: 4rem 0;">
          <div class="mono-label mono-label--accent" style="text-align: center; margin-bottom: 2rem;">
            THE BENEFICIARY DECISION JOURNEY
          </div>
          <div style="overflow-x: auto; width: 100%;">
            ${renderFlowDiagram(problemSteps, false)}
          </div>
        </div>

        <!-- THE GAP SECTION -->
        <div class="glass-panel reveal" style="padding: clamp(1.5rem, 4vw, 3rem); margin: 4rem 0; border-color: var(--border-accent); text-align: center;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">THE GAP</div>
          <h2 style="font-family: var(--font-body); font-weight: 800; color: var(--text-primary); letter-spacing: -0.03em; line-height: 1.1; font-size: clamp(1.4rem, 4vw, 2.8rem); margin-bottom: 1rem; word-break: break-word;">INFORMATION EXISTS.</h2>
          <h3 style="font-family: var(--font-body); font-weight: 700; color: var(--accent); font-size: clamp(1rem, 2.5vw, 1.5rem); line-height: 1.25; margin-bottom: 1.5rem; word-break: break-word;">THE CHALLENGE IS TURNING INFORMATION INTO AN ACTIONABLE PATH.</h3>
          <p class="body-text" style="margin: 0 auto; max-width: 680px;">
            Publishing PDF guidelines on agency websites does not guarantee last-mile credit access. SchemeSpear bridges this gap by transforming raw guidelines into pre-application readiness dossiers and 102-channel partner routes.
          </p>
        </div>

        <!-- BENEFICIARY STORY: MEET RAVI -->
        <div class="glass-panel" style="padding: 3rem; margin: 4rem 0;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">CASE STUDY</div>
          <h3 class="headline headline--md" style="margin-bottom: 1rem;">MEET RAVI</h3>
          <p class="body-text" style="margin-bottom: 2rem;">
            Ravi wants to start a small food-processing business in Tamil Nadu and needs ₹2,00,000 in concessional financial assistance.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">01</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">NEED FUNDING</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Needs ₹2 Lakhs for equipment. Commercial bank rates (14%) are unaffordable.</p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">02</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">WHICH SCHEME?</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Hears about NSFDC, but doesn't know if Term Loan or MFS applies.</p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">03</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">AM I ELIGIBLE?</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Is his ₹3,50,000 family income within the effective ₹5 Lakh NSFDC limit?</p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">04</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">WHAT DOCUMENTS?</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Which caste certificate format and Detailed Project Report (DPR) are required?</p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">05</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">HOW MUCH CAN I BORROW?</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Term Loan permits up to 90% of project cost (max ₹45 Lakh loan for ₹50 Lakh project).</p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">06</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">REPAYMENT PLAN?</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">What will his monthly EMI be over 5 years with a 6-month grace period?</p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);" class="reveal">
              <span class="step-number">07</span>
              <h4 style="color: var(--text-primary); margin: 0.5rem 0;">WHERE TO APPLY?</h4>
              <p style="font-size: var(--text-sm); color: var(--text-tertiary);">Which of the 102 Channel Partners (e.g. TAHDCO in Tamil Nadu) processes his application?</p>
            </div>
          </div>
        </div>

        ${renderCTA({
          title: "SEE HOW SCHEMESPEAR SOLVES RAVI'S JOURNEY",
          description: "Try the live centerpiece wizard that guides applicants from initial intent to Channel Partner routing.",
          primaryBtnText: "TRY SCHEMESPEAR",
          primaryBtnLink: "#/try",
          secondaryBtnText: "EXPLORE THE SOLUTION",
          secondaryBtnLink: "#/solution"
        })}
      </div>
    </div>
  `;
}
