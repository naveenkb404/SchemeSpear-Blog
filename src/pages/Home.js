import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderStatCard } from '../components/StatCard.js';
import { renderFeatureCard } from '../components/FeatureCard.js';
import { renderArticleCard } from '../components/ArticleCard.js';
import { renderFinancialCalculator, initCalculatorEvents } from '../components/FinancialCalculator.js';
import { renderTrySchemeSpearWizard, initTrySchemeSpearWizardEvents } from '../components/TrySchemeSpearWizard.js';
import { renderFlowDiagram } from '../components/FlowDiagram.js';
import { renderCTA } from '../components/CTA.js';

import { statsData } from '../data/stats.js';
import { featuresData } from '../data/features.js';
import { articles } from '../data/articles.js';

export function renderHome() {
  const latestArticles = articles.slice(0, 3);

  const pipelineSteps = [
    { step: "01", title: "TELL US YOUR NEED", detail: "Conversational input capturing business or course funding requirements." },
    { step: "02", title: "UNDERSTAND YOUR PROFILE", detail: "Self-hosted LLM extracts structured intent JSON without deciding eligibility." },
    { step: "03", title: "MATCH SUITABLE SCHEMES", detail: "Ranks Term Loan, Micro-Credit, and Mahila Samriddhi schemes." },
    { step: "04", title: "VERIFY ELIGIBILITY CONDITIONS", detail: "Rule Engine verifies profile against ₹5 Lakh income ceiling & trade rules." },
    { step: "05", title: "CALCULATE FINANCIAL IMPACT", detail: "Deterministic EMI simulator calculates repayment and moratorium." },
    { step: "06", title: "IDENTIFY MISSING REQUIREMENTS", detail: "Generates tailored document readiness checklists and project DPR needs." },
    { step: "07", title: "FIND AN APPROPRIATE PARTNER", detail: "Geo-spatial router matches applicant location to 1 of 102 Channel Partners." },
    { step: "08", title: "KNOW YOUR NEXT ACTION", detail: "Compiles single-visit pre-application readiness dossier." }
  ];

  return `
    <!-- HERO SECTION -->
    <section class="hero grid-bg">
      <div class="container">
        <div class="hero__content">
          <div class="mono-label mono-label--accent hero__label reveal">
            SCORPIUS · SIH 2026 · SIH26092
          </div>
          
          <h1 class="headline headline--xl hero__title reveal reveal-delay-1">
            SCHEMESPEAR<br/>
            THE RIGHT SCHEME.<br/>
            THE RIGHT GUIDANCE.<br/>
            <span style="color: var(--accent);">THE RIGHT PARTNER.</span>
          </h1>

          <p class="body-text body-text--lg hero__subtitle reveal reveal-delay-2">
            An intelligent platform that helps eligible SC beneficiaries understand available concessional financial support, check scheme conditions, estimate repayment, prepare their application, and identify an appropriate Channel Partner.
          </p>

          <div class="hero__actions reveal reveal-delay-3">
            <a href="#/solution" class="btn btn--primary">
              EXPLORE THE SOLUTION <span class="arrow">→</span>
            </a>
            <a href="#/research" class="btn btn--outline">
              EXPLORE THE RESEARCH
            </a>
          </div>

          <!-- Hero Flow Visual -->
          <div class="hero-flow reveal reveal-delay-4" style="margin-top: 3rem; flex-direction: row; flex-wrap: wrap; gap: 8px; justify-content: flex-start;">
            <div class="hero-flow__step active">DISCOVER</div>
            <div class="hero-flow__arrow">→</div>
            <div class="hero-flow__step">UNDERSTAND</div>
            <div class="hero-flow__arrow">→</div>
            <div class="hero-flow__step">VERIFY</div>
            <div class="hero-flow__arrow">→</div>
            <div class="hero-flow__step">PLAN</div>
            <div class="hero-flow__arrow">→</div>
            <div class="hero-flow__step">PREPARE</div>
            <div class="hero-flow__arrow">→</div>
            <div class="hero-flow__step">ROUTE</div>
            <div class="hero-flow__arrow">→</div>
            <div class="hero-flow__step">ACT</div>
          </div>
        </div>
      </div>
    </section>

    <!-- HORIZONTAL INFO STRIP -->
    <div class="info-strip">
      <div class="info-strip__inner">
        <span class="info-strip__item">NSFDC ₹5L INCOME CEILING (JAN 2026)</span>
        <span class="info-strip__dot"></span>
        <span class="info-strip__item">102 CHANNEL PARTNERS</span>
        <span class="info-strip__dot"></span>
        <span class="info-strip__item">DETERMINISTIC EMI SIMULATOR</span>
        <span class="info-strip__dot"></span>
        <span class="info-strip__item">SELF-HOSTED AI</span>
      </div>
    </div>

    <!-- PROBLEM SECTION OVERVIEW -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        ${renderSectionHeader({
          label: "01 · THE PROBLEM",
          title: "FINANCIAL SUPPORT EXISTS.<br/>ACCESSING IT ISN'T ALWAYS SIMPLE.",
          description: "Government financial assistance involves multiple schemes, eligibility conditions, documentation requirements, and authorized Channelizing Agencies. For NSFDC credit schemes, applicants cannot apply directly to NSFDC headquarters; applications are strictly routed through authorized State Channelizing Agencies (SCAs), Public Sector Banks (PSBs), Regional Rural Banks (RRBs), or NBFC-MFIs."
        })}

        <!-- BENEFICIARY JOURNEY FLOWCHART -->
        <div style="margin: 3rem 0;">
          <div class="mono-label mono-label--accent" style="text-align: center; margin-bottom: 1.5rem;">
            THE BENEFICIARY DECISION LIFECYCLE
          </div>
          <div class="flow-diagram flow-diagram--horizontal">
            <div class="flow-step"><div class="flow-step__node">I NEED FINANCIAL SUPPORT</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">WHICH SCHEME FITS?</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">AM I ELIGIBLE?</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">WHAT DOCUMENTS DO I NEED?</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">HOW MUCH CAN I BORROW?</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">WHAT WILL REPAYMENT LOOK LIKE?</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node" style="color: var(--accent); border-color: var(--accent);">WHO CAN PROCESS MY APPLICATION?</div></div>
          </div>
        </div>

        <!-- THE GAP CALLOUT -->
        <div class="glass-panel reveal" style="padding: 2.5rem; text-align: center; border-color: var(--border-subtle);">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">THE GAP IDENTIFIED</div>
          <h3 class="headline headline--md" style="margin-bottom: 1rem;">INFORMATION EXISTS.<br/><span style="color: var(--accent);">THE CHALLENGE IS TURNING INFORMATION INTO AN ACTIONABLE PATH.</span></h3>
          <p class="body-text" style="margin: 0 auto;">SchemeSpear addresses this exact gap by taking raw scheme guidelines and converting them into pre-application readiness dossiers and 102-channel partner routes.</p>
        </div>
      </div>
    </section>

    <!-- RESEARCH EVIDENCE SECTION -->
    <section class="section">
      <div class="container">
        ${renderSectionHeader({
          label: "02 · RESEARCH & EVIDENCE",
          title: "THE PROBLEM IS REAL.",
          description: "All statistics on SchemeSpear are derived from published government reports and official guidelines."
        })}

        <div class="stats-grid">
          ${statsData.map(stat => renderStatCard(stat)).join('')}
        </div>

        <div class="glass-panel reveal" style="margin-top: 2.5rem; padding: 1.5rem; border-left: 3px solid var(--accent);">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.25rem;">RESEARCH INSIGHT</div>
          <p style="font-size: var(--text-base); color: var(--text-primary); font-weight: 500;">
            SchemeSpear applies this broader scheme-access problem (NITI Aayog Jan 2026 MSME Report) specifically to the NSFDC/SC financial-support journey.
          </p>
        </div>
      </div>
    </section>

    <!-- SOLUTION PIPELINE & CORE PRINCIPLE -->
    <section class="section" style="background: var(--bg-tertiary);">
      <div class="container">
        ${renderSectionHeader({
          label: "03 · THE PARADIGM SHIFT",
          title: "FROM INFORMATION TO ACTION",
          description: "Explore the 8-step SchemeSpear transformation that bridges discovery to last-mile partner credit sanction."
        })}

        ${renderFlowDiagram(pipelineSteps, false)}

        <div class="pull-quote reveal" style="margin-top: 3rem; text-align: center;">
          <div class="mono-label mono-label--accent" style="margin-bottom: 0.5rem;">CORE ARCHITECTURAL PRINCIPLE</div>
          <div class="pull-quote__text" style="font-size: var(--text-2xl); font-weight: 800; font-style: normal; color: var(--text-primary);">
            AI UNDERSTANDS. RULES VERIFY. ALGORITHMS GUIDE.
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE PROTOTYPE WIZARD -->
    <section class="section" id="try-wizard">
      <div class="container">
        ${renderSectionHeader({
          label: "INTERACTIVE PROTOTYPE · 8-STEP PIPELINE",
          title: "TRY SCHEMESPEAR",
          description: "Experience the complete AI-assisted financial-support navigation and application-readiness journey in real time."
        })}

        ${renderTrySchemeSpearWizard()}
      </div>
    </section>

    <!-- KEY BENEFITS / FEATURES OVERVIEW -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        ${renderSectionHeader({
          label: "04 · SYSTEM CAPABILITIES",
          title: "INTELLIGENT FEATURES",
          description: "Built for end-to-end guidance from natural language understanding to geo-spatial channel partner routing."
        })}

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          ${featuresData.map(feat => renderFeatureCard(feat)).join('')}
        </div>
      </div>
    </section>

    <!-- FINANCIAL CALCULATOR SIMULATOR -->
    <section class="section">
      <div class="container">
        ${renderSectionHeader({
          label: "05 · FINANCIAL PLANNING ENGINE",
          title: "WHAT COULD REPAYMENT LOOK LIKE?",
          description: "Model loan amounts, interest rates (4-6%), tenure, and moratorium grace periods with deterministic math."
        })}

        ${renderFinancialCalculator()}
      </div>
    </section>

    <!-- LATEST RESEARCH ARTICLES -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        ${renderSectionHeader({
          label: "06 · RESEARCH & JOURNAL",
          title: "THE SCHEMESPEAR JOURNAL",
          description: "Insights, technical case studies, and policy analysis from Team SCORPIUS."
        })}

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem;">
          ${latestArticles.map(art => renderArticleCard(art)).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#/blog" class="btn btn--outline">
            VIEW ALL JOURNAL ARTICLES →
          </a>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION -->
    ${renderCTA({
      title: "EXPLORE THE PLATFORM ARCHITECTURE",
      description: "Learn how SchemeSpear combines localized self-hosted LLMs with deterministic rule engines and pgvector knowledge retrieval.",
      primaryBtnText: "EXPLORE TECHNOLOGY",
      primaryBtnLink: "#/technology",
      secondaryBtnText: "EXPLORE THE RESEARCH",
      secondaryBtnLink: "#/research"
    })}
  `;
}

export function initHomeEvents() {
  initCalculatorEvents();
  initTrySchemeSpearWizardEvents();
}
