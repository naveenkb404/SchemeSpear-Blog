import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderCTA } from '../components/CTA.js';

export function renderProblem() {
  const evidenceCards = [
    {
      id: "01",
      label: "CHANNEL ROUTING",
      title: "Applicants Cannot Apply Directly to NSFDC",
      body: "NSFDC states that direct loan applications are not entertained. Loan applications must be routed through authorized State Channelizing Agencies or other Channelizing Agencies.",
      problem: "Beneficiaries need to identify the correct route before applying.",
      sourceText: "OFFICIAL FACT · NSFDC FAQ · 2026",
      sourceUrl: "https://nsfdc.nic.in/faqs",
      badgeType: "fact"
    },
    {
      id: "02",
      label: "PARTNER COMPLEXITY",
      title: "A Large Channel Partner Network",
      body: "NSFDC currently operates through a network of 102 authorized Channel Partners across categories including SCAs, PSBs, RRBs, NBFC-MFIs and other agencies.",
      problem: "The challenge is not simply finding NSFDC; it is identifying an appropriate authorized channel.",
      sourceText: "OFFICIAL FACT · NSFDC FAQ · 2026",
      sourceUrl: "https://nsfdc.nic.in/faqs",
      badgeType: "fact"
    },
    {
      id: "03",
      label: "DOCUMENT READINESS",
      title: "Applicants Need Multiple Documents",
      body: "NSFDC's official guidance lists caste certificate, income proof, KYC documents and other documents according to the specific agency checklist for offline applications.",
      problem: "Applicants need application-readiness guidance before approaching a channel.",
      sourceText: "OFFICIAL FACT · NSFDC FAQ · 2026",
      sourceUrl: "https://nsfdc.nic.in/faqs",
      badgeType: "fact"
    },
    {
      id: "04",
      label: "ELIGIBILITY",
      title: "Eligibility Depends on Specific Conditions",
      body: "Current NSFDC loan eligibility includes Scheduled Caste status with a valid caste certificate and an annual family-income ceiling of ₹5 lakh, applicable to rural and urban areas from 7 January 2026.",
      problem: "Applicants need to understand whether their profile satisfies the applicable conditions before starting the process.",
      sourceText: "OFFICIAL FACT · NSFDC FAQ · 2026",
      sourceUrl: "https://nsfdc.nic.in/faqs",
      badgeType: "fact"
    },
    {
      id: "05",
      label: "SCHEME SELECTION",
      title: "Different Schemes Have Different Financial Terms",
      body: "NSFDC credit and education schemes differ in project limits, maximum loan amounts, interest rates, repayment periods and moratorium conditions.",
      problem: "There is no single generic 'NSFDC loan' calculation that represents every scheme.",
      sourceText: "OFFICIAL DATA · NSFDC / Ministry Annual Report · 2025–26",
      sourceUrl: "https://socialjustice.gov.in/writereaddata/UploadFile/71441776233188.pdf",
      badgeType: "data"
    },
    {
      id: "06",
      label: "PROCESSING BOTTLENECKS",
      title: "Channel-Based Processing Can Create Delays",
      body: "A CAG audit of a Haryana State channelizing agency documented delays in loan recommendations and bank sanctions in test-checked cases and highlighted weaknesses in monitoring timely sanction and disbursement.",
      problem: "Routing, application readiness and process tracking can therefore matter to timely delivery.",
      sourceText: "AUDIT EVIDENCE · CAG Haryana · Historical / State-specific",
      sourceUrl: "https://cag.gov.in/uploads/old_reports/state/Haryana/2005/Commercial/Commercial_Haryana_2005/com_chapter_2.1.pdf",
      badgeType: "audit"
    }
  ];

  const gapJourneyNodes = [
    { text: "NEED FINANCIAL SUPPORT", accent: false },
    { text: "WHICH SCHEME FITS?", accent: false },
    { text: "AM I ELIGIBLE?", accent: true },
    { text: "WHAT DOCUMENTS DO I NEED?", accent: false },
    { text: "HOW MUCH CAN I BORROW?", accent: false },
    { text: "WHAT WILL REPAYMENT LOOK LIKE?", accent: false },
    { text: "WHO CAN PROCESS MY APPLICATION?", accent: true }
  ];

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "SIH 2026 · RESEARCH FINDINGS & EVIDENCE",
          title: "THE PROBLEM, BACKED BY EVIDENCE",
          description: "Our empirical analysis of official government publications, statutory channel frameworks, and state audit reports reveals the exact frictions between national funding availability and citizen credit realization."
        })}

        <!-- SECTION 1 — HERO / INTRO -->
        <div class="evidence-intro reveal">
          <h2 class="evidence-intro__heading">
            FINANCIAL SUPPORT EXISTS.<br/>
            ACCESSING THE RIGHT PATH IS THE CHALLENGE.
          </h2>
          <p class="evidence-intro__body">
            NSFDC provides concessional financial assistance through a channel-finance ecosystem. Our research identified several points where beneficiaries must navigate schemes, eligibility conditions, documentation and authorized channels before they can move forward.
          </p>
        </div>

        <!-- SECTION 5 — RESEARCH INTEGRITY LEGEND -->
        <div class="research-legend reveal" aria-label="Research Integrity Legend">
          <div class="research-legend__title">RESEARCH INTEGRITY CLASSIFICATION:</div>
          <div class="research-legend__items">
            <div class="research-legend__item">
              <span class="legend-badge legend-badge--fact">OFFICIAL FACT</span>
              <span>Direct information from government/NSFDC sources.</span>
            </div>
            <div class="research-legend__item">
              <span class="legend-badge legend-badge--data">OFFICIAL DATA</span>
              <span>Government-published statistics & annual reports.</span>
            </div>
            <div class="research-legend__item">
              <span class="legend-badge legend-badge--audit">AUDIT EVIDENCE</span>
              <span>Findings from CAG audit reports with original geographic & temporal context.</span>
            </div>
            <div class="research-legend__item">
              <span class="legend-badge legend-badge--design">SCHEMESPEAR DESIGN</span>
              <span>Our proposed technical response to identified frictions.</span>
            </div>
          </div>
        </div>

        <!-- SECTION 2 — EVIDENCE-BACKED PROBLEM CARDS -->
        <div class="evidence-grid">
          ${evidenceCards.map(c => `
            <div class="evidence-card reveal">
              <div class="evidence-card__top">
                <span class="evidence-card__label">${c.label}</span>
                <h3 class="evidence-card__title">${c.title}</h3>
                <p class="evidence-card__body">${c.body}</p>
              </div>

              <div class="evidence-card__problem">
                <div class="evidence-card__problem-label">PROBLEM IDENTIFIED</div>
                <div class="evidence-card__problem-text">${c.problem}</div>
              </div>

              <div class="evidence-card__source">
                <a href="${c.sourceUrl}" target="_blank" rel="noopener noreferrer" class="evidence-badge-link legend-badge--${c.badgeType}" title="View official government documentation">
                  <span>${c.sourceText}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- SECTION 3 — RESEARCH SCALE CALLOUT -->
        <div class="evidence-stat-strip reveal">
          <div class="evidence-stat-strip__header">
            <div class="evidence-stat-strip__tag">OFFICIAL SCALE OF DELIVERY</div>
            <h3 class="evidence-stat-strip__title">THIS IS A SIGNIFICANT DELIVERY ECOSYSTEM</h3>
          </div>

          <div class="evidence-stat-strip__metrics">
            <div class="evidence-stat-strip__metric">
              <div class="evidence-stat-strip__num">₹3,464.63 CR</div>
              <div class="evidence-stat-strip__desc">Cumulative NSFDC Disbursement</div>
            </div>

            <div class="evidence-stat-strip__metric">
              <div class="evidence-stat-strip__num">4,12,814</div>
              <div class="evidence-stat-strip__desc">Beneficiaries Covered</div>
            </div>
          </div>

          <div class="evidence-stat-strip__footer">
            <p class="evidence-stat-strip__context">
              Reported by the Ministry of Social Justice & Empowerment for FY2020–21 through 31 December 2025.
            </p>
            <a href="https://socialjustice.gov.in/writereaddata/UploadFile/71441776233188.pdf" target="_blank" rel="noopener noreferrer" class="evidence-badge-link legend-badge--data" style="margin-top: 0.25rem;">
              <span>OFFICIAL DATA · Ministry of Social Justice & Empowerment · Annual Report 2025–26</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- SECTION 4 — THE GAP IDENTIFIED -->
        <div class="glass-panel gap-journey reveal" style="padding: clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem); border-color: var(--border-accent);">
          <div class="gap-journey__header">
            <div class="gap-journey__tag">THE GAP IDENTIFIED</div>
            <h2 class="gap-journey__headline">INFORMATION EXISTS.</h2>
            <h3 class="gap-journey__subtitle">
              THE CHALLENGE IS TURNING INFORMATION INTO AN ACTIONABLE PATH.
            </h3>
            <p class="body-text" style="margin: 1.25rem auto 0; max-width: 720px; text-align: center;">
              Publishing guidelines across departmental portals is not equivalent to citizen comprehension. Beneficiaries must sequentially navigate a seven-step cognitive journey where a single knowledge gap halts the entire process.
            </p>
          </div>

          <!-- Sequential Visual Journey -->
          <div class="gap-journey__flow">
            ${gapJourneyNodes.map((n, i) => `
              <div class="gap-journey__node ${n.accent ? 'gap-journey__node--accent' : ''}">
                ${n.text}
              </div>
              ${i < gapJourneyNodes.length - 1 ? `
                <div class="gap-journey__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </div>
              ` : ''}
            `).join('')}
          </div>
        </div>

        <!-- BENEFICIARY STORY: MEET RAVI -->
        <div class="glass-panel reveal" style="padding: 3rem; margin: 4rem 0;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">GROUND-LEVEL CASE STUDY</div>
          <h3 class="headline headline--md" style="margin-bottom: 1rem;">MEET RAVI</h3>
          <p class="body-text" style="margin-bottom: 2rem;">
            Ravi wants to start a small food-processing business in Tamil Nadu and needs ₹2,00,000 in concessional financial assistance. Here is how the information barrier manifests on the ground:
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
