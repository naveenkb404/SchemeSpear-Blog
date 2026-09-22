import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderCTA } from '../components/CTA.js';

export function renderSolution() {
  const solutionSteps = [
    {
      num: "01",
      title: "TELL US YOUR NEED",
      what: "Captures beneficiary purpose, trade description, estimated project cost, and annual family income.",
      why: "Establishes baseline parameters for multi-factor scheme matching.",
      tech: "Natural Language Form Parsing",
      output: "Raw User Need Profile"
    },
    {
      num: "02",
      title: "UNDERSTAND YOUR PROFILE",
      what: "Parses natural language queries in regional dialects.",
      why: "Eliminates complex navigation forms for low-literacy users without making eligibility decisions.",
      tech: "Self-Hosted Local LLM",
      output: "Structured Intent Profile (JSON)"
    },
    {
      num: "03",
      title: "MATCH SUITABLE SCHEMES",
      what: "Filters central and state scheme databases for project cost thresholds (MFS ≤ ₹1.40L / Term Loan ≤ ₹50L).",
      why: "Pairs applicant with optimal concessional loan options.",
      tech: "Scheme Matching Engine + pgvector",
      output: "Ranked Scheme Recommendation List"
    },
    {
      num: "04",
      title: "VERIFY ELIGIBILITY CONDITIONS",
      what: "Executes deterministic boolean checks against current NSFDC parameters (₹5 Lakh income ceiling effective Jan 2026).",
      why: "Guarantees 100% false-promise-free qualification explanations.",
      tech: "Rule-Based Eligibility Engine",
      output: "Explainable Qualification Log"
    },
    {
      num: "05",
      title: "CALCULATE FINANCIAL IMPACT",
      what: "Simulates exact EMI, total interest, and moratorium grace periods with deterministic math.",
      why: "Ensures financial literacy and prevents post-disbursement default.",
      tech: "Financial Calculation Engine",
      output: "Illustrative EMI & Repayment Schedule"
    },
    {
      num: "06",
      title: "IDENTIFY MISSING REQUIREMENTS",
      what: "Generates tailored checklist of required income, caste, & project Detailed Project Report (DPR) papers.",
      why: "Prevents document rejection at the channel agency.",
      tech: "Requirement Readiness Engine",
      output: "Customized Document Checklist & Next Best Action"
    },
    {
      num: "07",
      title: "FIND AN APPROPRIATE PARTNER",
      what: "Identifies active regional State Channelizing Agencies, RRBs, or bank nodes out of 102 NSFDC partners.",
      why: "Eliminates application misrouting to unauthorized channels.",
      tech: "Geo-Spatial Partner Router",
      output: "Channel Partner Node & Contact Info"
    },
    {
      num: "08",
      title: "KNOW YOUR NEXT ACTION",
      what: "Compiles complete pre-application dossier for single-visit credit sanction.",
      why: "Empowers beneficiary to submit a fully verified application package.",
      tech: "Dossier Generator",
      output: "Downloadable Pre-Application Action Dossier"
    }
  ];

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "THE SCHEMESPEAR SOLUTION",
          title: "FROM INFORMATION TO ACTION.",
          description: "SchemeSpear replaces static portal search with an 8-step guided intelligence pipeline. Every step provides complete transparency on what happens, why it matters, technology used, and the generated output."
        })}

        <!-- CORE PRINCIPLE BANNER -->
        <div class="glass-panel reveal" style="padding: 2rem; text-align: center; border-color: var(--border-accent); margin-bottom: 3rem;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">CORE ARCHITECTURAL PRINCIPLE</div>
          <h2 class="headline headline--md" style="color: var(--text-primary);">
            AI UNDERSTANDS. RULES VERIFY. ALGORITHMS GUIDE.
          </h2>
        </div>

        <!-- SOLUTION PIPELINE STEPS -->
        <div style="display: flex; flex-direction: column; gap: 2rem; margin: 3rem 0;">
          ${solutionSteps.map((step) => `
            <div class="glass-panel reveal" style="padding: 2rem; display: grid; grid-template-columns: 80px 1fr 1fr; gap: 2rem; align-items: center;">
              <div>
                <span class="step-number" style="font-size: 1.5rem;">${step.num}</span>
              </div>

              <div>
                <h3 class="headline headline--sm" style="margin-bottom: 0.5rem;">${step.title}</h3>
                <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 0.5rem;">
                  <strong>WHAT HAPPENS:</strong> ${step.what}
                </p>
                <p style="font-size: var(--text-sm); color: var(--text-tertiary);">
                  <strong>WHY IT MATTERS:</strong> ${step.why}
                </p>
              </div>

              <div style="border-left: 1px solid var(--border-subtle); padding-left: 1.5rem;">
                <div style="margin-bottom: 0.75rem;">
                  <span class="mono-label" style="display: block; margin-bottom: 2px;">TECHNOLOGY USED</span>
                  <span class="tag tag--accent">${step.tech}</span>
                </div>
                <div>
                  <span class="mono-label" style="display: block; margin-bottom: 2px;">GENERATED OUTPUT</span>
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-primary);">${step.output}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        ${renderCTA({
          title: "EXPLORE THE UNDERLYING ARCHITECTURE",
          description: "Learn how our self-hosted LLM works alongside deterministic rule engines and pgvector knowledge retrieval.",
          primaryBtnText: "VIEW TECHNOLOGY ARCHITECTURE",
          primaryBtnLink: "#/technology",
          secondaryBtnText: "TRY THE LIVE WIZARD",
          secondaryBtnLink: "#/try"
        })}
      </div>
    </div>
  `;
}
