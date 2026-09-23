/**
 * ArchitecturePipeline.js
 * Technical System Architecture Pipeline for SchemeSpear
 * 8-stage interactive, responsive hybrid AI + deterministic rules pipeline
 */

export function renderArchitecturePipeline() {
  const stagesRow1 = [
    {
      num: "01",
      layer: "BENEFICIARY INPUT",
      purpose: "Collect and understand user information",
      color: "var(--accent)",
      badge: "Multimodal Ingestion",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>`,
      items: [
        "Natural Language",
        "Form Data",
        "Documents / Upload",
        "Multilingual Input"
      ]
    },
    {
      num: "02",
      layer: "SELF-HOSTED LLM",
      purpose: "Understand, extract and structure information",
      color: "#ff5252",
      badge: "Controlled Infrastructure",
      badgeIcon: "🔒",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="4" y="4" width="16" height="16" rx="3"/>
        <path d="M9 9h6v6H9z"/>
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
      </svg>`,
      items: [
        "Intent Classification",
        "Entity Extraction",
        "Profile Understanding",
        "Structured Output"
      ]
    },
    {
      num: "03",
      layer: "RAG KNOWLEDGE BASE",
      purpose: "Retrieve verified scheme and policy information",
      color: "#00d2d3",
      badge: "Official Repositories",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M12 12v3"/>
      </svg>`,
      items: [
        "Scheme Database",
        "Policy & Guidelines",
        "FAQs & Documents",
        "Vector Search + Ranking"
      ]
    },
    {
      num: "04",
      layer: "RULE ENGINE",
      purpose: "Verify eligibility and apply business rules",
      color: "#10b981",
      badge: "LLM interprets → Rules verify",
      badgeSpecial: true,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>`,
      items: [
        "Eligibility Rules",
        "Scheme Matching Logic",
        "Document Validation",
        "Policy Constraints"
      ]
    },
    {
      num: "05",
      layer: "FINANCIAL ENGINE",
      purpose: "Calculate benefits, loan and repayment",
      color: "#f59e0b",
      badge: "Deterministic Math · Zero LLM Error",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <line x1="16" y1="14" x2="16" y2="18"/>
        <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>
      </svg>`,
      items: [
        "Eligible Loan Amount",
        "Interest Rate",
        "EMI / Tenure",
        "Financial Summary"
      ]
    },
    {
      num: "06",
      layer: "CHANNEL ROUTING",
      purpose: "Find the appropriate authorized partner",
      color: "#a855f7",
      badge: "Authorized Partner Network",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
      </svg>`,
      items: [
        "Location Mapping",
        "Channel Partner Network",
        "Channel Selection",
        "Application Guidance"
      ]
    }
  ];

  const stagesRow2 = [
    {
      num: "08",
      layer: "REASSESSMENT",
      purpose: "Track progress and update readiness",
      color: "#f43f5e",
      badge: "Dynamic Profile Sync",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>`,
      items: [
        "Refresh Profile",
        "Recalculate Match",
        "Update Gaps"
      ]
    },
    {
      num: "07",
      layer: "PRACTICE & ASSESSMENT",
      purpose: "Build confidence and improve readiness",
      color: "#06b6d4",
      badge: "Capacity Building",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        <path d="M7 17l4-4M15 17h2"/>
      </svg>`,
      items: [
        "AI-Proctored Assessment",
        "Communication Assessment",
        "AI HR Mock Interview"
      ]
    }
  ];

  function renderCard(s, isWide = false) {
    return `
      <div class="arch-card ${isWide ? 'arch-card--wide' : ''} reveal" style="--stage-color: ${s.color};">
        <div class="arch-card__header">
          <div class="arch-card__top">
            <span class="arch-card__num">${s.num}</span>
            <div class="arch-card__icon" style="color: ${s.color};">
              ${s.icon}
            </div>
          </div>
          <h4 class="arch-card__title">${s.layer}</h4>
          <p class="arch-card__purpose">${s.purpose}</p>
        </div>

        ${s.badge ? `
          <div class="arch-card__badge ${s.badgeSpecial ? 'arch-card__badge--special' : ''}">
            ${s.badgeIcon ? `<span class="badge-icon">${s.badgeIcon}</span>` : ''}
            <span>${s.badge}</span>
          </div>
        ` : ''}

        <div class="arch-card__divider"></div>

        <ul class="arch-card__list">
          ${s.items.map(item => `
            <li class="arch-card__item">
              <span class="arch-card__bullet" style="background-color: ${s.color};"></span>
              <span class="arch-card__item-text">${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  function renderConnector(dir = "right") {
    return `
      <div class="arch-connector arch-connector--${dir}" aria-hidden="true">
        <div class="arch-connector__line">
          <span class="arch-connector__pulse"></span>
        </div>
        <div class="arch-connector__arrow">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
            ${dir === 'right' ? '<path d="M2 6h8M6 2l4 4-4 4"/>' : ''}
            ${dir === 'left' ? '<path d="M10 6H2M6 2L2 6l4 4"/>' : ''}
            ${dir === 'down' ? '<path d="M6 2v8M2 6l4 4 4-4"/>' : ''}
          </svg>
        </div>
      </div>
    `;
  }

  return `
    <section class="arch-section" id="architecture-pipeline" aria-label="System Architecture Pipeline">
      <!-- Section Header with Technical Badge -->
      <div class="arch-header">
        <div class="arch-header__titles">
          <div class="mono-label mono-label--accent arch-header__tag">
            <span class="arch-pulse-dot"></span> ARCHITECTURE SPECIFICATION v2.6
          </div>
          <h2 class="arch-header__title">SYSTEM ARCHITECTURE PIPELINE</h2>
          <p class="arch-header__subtitle">
            “From Beneficiary Input to the Right Scheme — Powered by AI, Rules & Real Data”
          </p>
        </div>

        <!-- Top-Right Technical Badge -->
        <div class="arch-top-badge glass-panel">
          <div class="arch-top-badge__chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            <span>AI + RULES + DATA</span>
          </div>
          <p class="arch-top-badge__sub">
            Verified Information.<br/>
            Deterministic Decisions.<br/>
            Actionable Guidance.
          </p>
        </div>
      </div>

      <!-- Main Diagram Container with Subtle Technical Grid Pattern -->
      <div class="arch-canvas">
        <div class="arch-canvas__grid-overlay" aria-hidden="true"></div>

        <!-- DESKTOP PIPELINE FLOW -->
        <div class="arch-flow arch-flow--desktop">
          <!-- ROW 1: 01 -> 02 -> 03 -> 04 -> 05 -> 06 -->
          <div class="arch-row arch-row--primary">
            <div class="arch-stage-wrap">${renderCard(stagesRow1[0])}</div>
            ${renderConnector('right')}
            <div class="arch-stage-wrap">${renderCard(stagesRow1[1])}</div>
            ${renderConnector('right')}
            <div class="arch-stage-wrap">${renderCard(stagesRow1[2])}</div>
            ${renderConnector('right')}
            <div class="arch-stage-wrap">${renderCard(stagesRow1[3])}</div>
            ${renderConnector('right')}
            <div class="arch-stage-wrap">${renderCard(stagesRow1[4])}</div>
            ${renderConnector('right')}
            <div class="arch-stage-wrap">${renderCard(stagesRow1[5])}</div>
          </div>

          <!-- TRANSITION ELBOW: From 06 down to Row 2 (07) -->
          <div class="arch-turn-wrap" aria-hidden="true">
            <div class="arch-turn-line arch-turn-line--down">
              <span class="arch-turn-pulse"></span>
            </div>
            <div class="arch-turn-label">
              <span>LAST-MILE TRANSITION</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </div>

          <!-- ROW 2: 08 (left) <- 07 (right) aligned under the end of Row 1 -->
          <div class="arch-row arch-row--secondary">
            <!-- Continuous Feedback Loop Return Line (from 08 back to 01) -->
            <div class="arch-feedback-loop">
              <div class="arch-loop-connector">
                <svg class="arch-loop-svg" viewBox="0 0 760 120" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="loopGradient" x1="100%" y1="50%" x2="0%" y2="0%">
                      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.9"/>
                      <stop offset="50%" stop-color="var(--accent)" stop-opacity="0.8"/>
                      <stop offset="100%" stop-color="#ff7b54" stop-opacity="0.9"/>
                    </linearGradient>
                  </defs>
                  <!-- Path starts at right (08 card top-left) and curves up-left to 01 card bottom -->
                  <path d="M 750,90 C 500,90 250,90 80,90 C 25,90 15,60 15,20 C 15,5 20,0 35,0" 
                        stroke="url(#loopGradient)" 
                        stroke-width="2" 
                        stroke-dasharray="6 4"
                        class="arch-loop-path"/>
                </svg>
                <div class="arch-loop-indicator">
                  <div class="arch-loop-badge">
                    <span class="arch-loop-badge__icon">↻</span>
                    <div class="arch-loop-badge__text">
                      <strong>CONTINUOUS IMPROVEMENT LOOP</strong>
                      <small>BETTER DATA → SMARTER DECISIONS → BETTER ACCESS</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stages 08 & 07 (Right to Left flow) -->
            <div class="arch-row-2-stages">
              <div class="arch-stage-wrap arch-stage-wrap--wide">${renderCard(stagesRow2[0], true)}</div>
              ${renderConnector('left')}
              <div class="arch-stage-wrap arch-stage-wrap--wide">${renderCard(stagesRow2[1], true)}</div>
            </div>
          </div>
        </div>

        <!-- TABLET & MOBILE VERTICAL PIPELINE (reflows seamlessly) -->
        <div class="arch-flow arch-flow--mobile">
          <div class="arch-mobile-list">
            ${stagesRow1.map((s, idx) => `
              <div class="arch-mobile-item">
                ${renderCard(s)}
                ${renderConnector('down')}
              </div>
            `).join('')}

            <div class="arch-mobile-item">
              ${renderCard(stagesRow2[1], true)}
              ${renderConnector('down')}
            </div>

            <div class="arch-mobile-item">
              ${renderCard(stagesRow2[0], true)}
            </div>
          </div>

          <!-- Mobile Continuous Feedback Callout -->
          <div class="arch-mobile-loop-banner glass-panel">
            <div class="arch-mobile-loop-icon">↻</div>
            <div class="arch-mobile-loop-content">
              <div class="arch-mobile-loop-title">CONTINUOUS IMPROVEMENT LOOP</div>
              <div class="arch-mobile-loop-sub">BETTER DATA → SMARTER DECISIONS → BETTER ACCESS</div>
              <p class="arch-mobile-loop-desc">
                The architecture continuously refreshes beneficiary profiles and updates eligibility recommendations as skill certifications and documents improve.
              </p>
            </div>
            <div class="arch-mobile-loop-return">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              <span>LOOPS TO 01</span>
            </div>
          </div>
        </div>

        <!-- ARCHITECTURE PRINCIPLE CALLOUT (Centered technical evaluation callout) -->
        <div class="arch-principle-banner glass-panel reveal">
          <div class="arch-principle-grid">
            <div class="arch-principle-item">
              <span class="arch-principle-k">AI</span>
              <span class="arch-principle-v">UNDERSTANDS</span>
            </div>
            <div class="arch-principle-dot">·</div>
            <div class="arch-principle-item">
              <span class="arch-principle-k">RULES</span>
              <span class="arch-principle-v">VERIFY</span>
            </div>
            <div class="arch-principle-dot">·</div>
            <div class="arch-principle-item">
              <span class="arch-principle-k">ENGINES</span>
              <span class="arch-principle-v">CALCULATE</span>
            </div>
            <div class="arch-principle-dot">·</div>
            <div class="arch-principle-item">
              <span class="arch-principle-k">ROUTING</span>
              <span class="arch-principle-v">DIRECTS</span>
            </div>
          </div>

          <div class="arch-principle-highlight">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>LLM NEVER INDEPENDENTLY DECIDES ELIGIBILITY.</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
