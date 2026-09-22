export function renderTrySchemeSpearWizard() {
  return `
    <div class="glass-panel reveal" id="wizard-container" style="padding: 2.5rem; border-color: var(--border-accent); position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
        <div>
          <span class="mono-label mono-label--accent">CENTERPIECE PROTOTYPE · INTERACTIVE WIZARD</span>
          <h3 class="headline headline--sm" style="margin-top: 4px;">TRY SCHEMESPEAR</h3>
        </div>
        <div id="wizard-step-badge" class="tag tag--accent" style="font-size: 0.75rem;">
          STEP 01 OF 08 · TELL US YOUR NEED
        </div>
      </div>

      <!-- WIZARD STEP CONTENT PANELS -->
      <div id="wizard-content">
        <!-- STEP 01: TELL US YOUR NEED -->
        <div class="wizard-panel" data-step="1">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 01 — TELL US ABOUT YOUR NEED</div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="calculator__field">
              <label class="calculator__label" for="wiz-purpose">Purpose / Project Description</label>
              <select id="wiz-purpose" class="calculator__input">
                <option value="Small food-processing business" selected>Business / Small food-processing business</option>
                <option value="Micro-credit trading shop">Business / Micro-credit trading shop</option>
                <option value="Higher Education Course">Education / Professional Degree Course</option>
                <option value="Green Business Solar Unit">Business / Green Business Unit</option>
              </select>
            </div>

            <div class="calculator__field">
              <label class="calculator__label" for="wiz-cost">Estimated Project Cost (₹)</label>
              <input type="number" id="wiz-cost" class="calculator__input" value="200000" step="10000" />
            </div>

            <div class="calculator__field">
              <label class="calculator__label" for="wiz-income">Annual Family Income (₹)</label>
              <input type="number" id="wiz-income" class="calculator__input" value="350000" step="10000" />
              <span style="font-size: 0.65rem; color: var(--accent); margin-top: 2px;">Effective NSFDC ceiling: ₹5,00,000 (7 Jan 2026 FAQ)</span>
            </div>

            <div class="calculator__field">
              <label class="calculator__label" for="wiz-location">State / Location</label>
              <select id="wiz-location" class="calculator__input">
                <option value="Tamil Nadu" selected>Tamil Nadu</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>

            <div class="calculator__field">
              <label class="calculator__label" for="wiz-category">SC Category Beneficiary?</label>
              <select id="wiz-category" class="calculator__input">
                <option value="Yes" selected>Yes (Scheduled Caste)</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <button id="wiz-btn-1" class="btn btn--primary" style="width: 100%; justify-content: center; padding: 1rem;">
            ANALYZE MY PROFILE <span class="arrow">→</span>
          </button>
        </div>

        <!-- STEP 02: PROFILE UNDERSTANDING (ANIMATED) -->
        <div class="wizard-panel" data-step="2" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 02 — PROFILE UNDERSTANDING & NLP PARSING</div>

          <div style="text-align: center; padding: 2rem 0;">
            <div class="flow-diagram flow-diagram--horizontal" style="margin-bottom: 2rem;">
              <div class="flow-step"><div class="flow-step__node">NATURAL LANGUAGE INPUT</div></div>
              <div class="flow-arrow">→</div>
              <div class="flow-step"><div class="flow-step__node" style="border-color: var(--accent); color: var(--accent);">SELF-HOSTED LLM</div></div>
              <div class="flow-arrow">→</div>
              <div class="flow-step"><div class="flow-step__node">STRUCTURED PROFILE</div></div>
            </div>

            <div id="wiz-json-output" class="data-card" style="font-family: var(--font-mono); font-size: 0.8rem; text-align: left; background: var(--bg-void); max-width: 600px; margin: 0 auto 1.5rem; padding: 1.5rem; border: 1px solid var(--border-accent);">
              <!-- Rendered dynamically -->
            </div>

            <div class="tag tag--accent" style="font-size: 0.75rem; padding: 0.5rem 1rem;">
              ✓ AI INTERPRETATION COMPLETE
            </div>
          </div>

          <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn--outline wiz-back" style="flex: 1; justify-content: center;">← BACK</button>
            <button class="btn btn--primary wiz-next" style="flex: 2; justify-content: center;">CONTINUE TO MATCHING →</button>
          </div>
        </div>

        <!-- STEP 03: SCHEME MATCHING RESULT -->
        <div class="wizard-panel" data-step="3" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 03 — SCHEME CONDITION MATCHING</div>

          <div class="glass-panel" style="padding: 2rem; border-left: 4px solid var(--accent); margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <span class="tag tag--accent" style="margin-bottom: 4px;">POTENTIAL MATCH</span>
                <h3 class="headline headline--md" style="color: var(--text-primary);" id="wiz-match-title">TERM LOAN SCHEME</h3>
              </div>
              <span class="tag" style="border-color: var(--warning); color: var(--warning); padding: 0.5rem 1rem;">
                MATCHED · REQUIRES FINAL VERIFICATION
              </span>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <strong style="color: var(--text-secondary); display: block; margin-bottom: 0.5rem;">WHY IT APPEARS RELEVANT:</strong>
              <ul style="color: var(--text-tertiary); line-height: 1.8; font-size: var(--text-sm); padding-left: 1.2rem;">
                <li>• Family income criterion (₹<span id="wiz-val-income">3,50,000</span>) appears within the current NSFDC ₹5,00,000 ceiling (effective 7 Jan 2026).</li>
                <li>• Estimated project cost (₹<span id="wiz-val-cost">2,00,000</span>) is above the Micro Finance Scheme (MFS) threshold (≤ ₹1,40,000) and within Term Loan boundaries (up to ₹50,00,000).</li>
                <li>• Intended use is an income-generating activity for SC category applicant.</li>
                <li>• Further verification is required by authorized Channel Partner before formal application.</li>
              </ul>
            </div>

            <div class="data-card" style="font-size: 0.75rem; color: var(--text-dim);">
              <strong>OFFICIAL CITATION (NSFDC FAQ 2026):</strong> According to the current NSFDC FAQ, the Term Loan is designed for larger income-generating projects costing more than ₹1.40 lakh and up to ₹50 lakh, with a maximum beneficiary loan of up to ₹45 lakh.
            </div>
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--outline wiz-back" style="flex: 1; justify-content: center;">← BACK</button>
            <button class="btn btn--primary wiz-next" style="flex: 2; justify-content: center;">VERIFY ELIGIBILITY CONDITIONS →</button>
          </div>
        </div>

        <!-- STEP 04: ELIGIBILITY SCREEN -->
        <div class="wizard-panel" data-step="4" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 04 — EXPLAINABLE ELIGIBILITY VERIFICATION</div>

          <h4 class="headline headline--sm" style="margin-bottom: 1rem;">WHY THIS MATCH?</h4>
          
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
            <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: var(--text-sm);">
              <div style="color: var(--success); font-weight: 500;">✓ SC community requirement satisfied (Self-identified Scheduled Caste)</div>
              <div style="color: var(--success); font-weight: 500;">✓ Family income within stated ceiling (₹<span class="wiz-bind-income">3,50,000</span> ≤ ₹5,00,000 official limit)</div>
              <div style="color: var(--success); font-weight: 500;">✓ Income-generating purpose verified (<span class="wiz-bind-purpose">Small food-processing business</span>)</div>
              <div style="color: var(--success); font-weight: 500;">✓ Project-cost range appears compatible (₹<span class="wiz-bind-cost">2,00,000</span> fits Term Loan criteria)</div>
              <div style="color: var(--warning); font-style: italic; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);">
                ! Final eligibility depends on scheme-specific conditions and the authorized agency's official verification.
              </div>
            </div>
          </div>

          <div class="key-takeaway" style="margin-bottom: 1.5rem;">
            <div class="key-takeaway__title">EXPLAINABLE RESULT</div>
            <div class="key-takeaway__content">
              "Based on the configured scheme criteria, your profile appears to satisfy these conditions. Final eligibility and sanction are determined through the authorized application process."
            </div>
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--outline wiz-back" style="flex: 1; justify-content: center;">← BACK</button>
            <button class="btn btn--primary wiz-next" style="flex: 2; justify-content: center;">CALCULATE FINANCIAL IMPACT →</button>
          </div>
        </div>

        <!-- STEP 05: FINANCIAL IMPACT CALCULATOR -->
        <div class="wizard-panel" data-step="5" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 05 — REPAYMENT & FINANCIAL IMPACT SIMULATION</div>

          <h4 class="headline headline--sm" style="margin-bottom: 1rem;">WHAT COULD REPAYMENT LOOK LIKE?</h4>

          <div class="calculator__results" style="margin-top: 0; margin-bottom: 1.5rem; background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div class="calculator__result">
              <div class="calculator__result-label">ESTIMATED MONTHLY EMI</div>
              <div class="calculator__result-value calculator__result-value--accent" id="wiz-res-emi">₹3,774</div>
            </div>

            <div class="calculator__result">
              <div class="calculator__result-label">ESTIMATED TOTAL INTEREST</div>
              <div class="calculator__result-value" id="wiz-res-interest">₹26,454</div>
            </div>

            <div class="calculator__result">
              <div class="calculator__result-label">TOTAL ESTIMATED REPAYMENT</div>
              <div class="calculator__result-value" id="wiz-res-total">₹2,26,454</div>
            </div>
          </div>

          <div class="calculator__disclaimer" style="margin-bottom: 1.5rem;">
            <strong>Disclaimer:</strong> Illustrative calculation only. Actual terms, repayment schedules, moratorium treatment and sanction depend on the applicable scheme and authorized lending/channel agency.
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--outline wiz-back" style="flex: 1; justify-content: center;">← BACK</button>
            <button class="btn btn--primary wiz-next" style="flex: 2; justify-content: center;">CHECK REQUIREMENT READINESS →</button>
          </div>
        </div>

        <!-- STEP 06: REQUIREMENT READINESS -->
        <div class="wizard-panel" data-step="6" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 06 — REQUIREMENT READINESS CHECKLIST</div>

          <h4 class="headline headline--sm" style="margin-bottom: 1rem;">WHAT DO YOU STILL NEED?</h4>

          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
            <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: var(--text-sm);">
              <div style="color: var(--success); font-weight: 500;">✓ Caste Certificate (SC Category Verification)</div>
              <div style="color: var(--success); font-weight: 500;">✓ Income Proof / Certificate (Family Income ≤ ₹5 Lakh)</div>
              <div style="color: var(--success); font-weight: 500;">✓ Basic KYC Documents (Aadhaar / Voter ID / Bank Passbook)</div>
              <div style="color: var(--warning); font-weight: 500;">⚠ Detailed Project Report (DPR / Equipment Quotation)</div>
              <div style="color: var(--warning); font-weight: 500;">⚠ Agency-specific Channelizing Application Form Checklist</div>
            </div>
          </div>

          <div class="glass-panel" style="padding: 1.5rem; border-color: var(--border-accent); margin-bottom: 1.5rem;">
            <div class="mono-label mono-label--accent" style="margin-bottom: 0.25rem;">NEXT BEST ACTION</div>
            <p style="font-size: var(--text-base); color: var(--text-primary); font-weight: 600;">
              Prepare the remaining project documents and verify the current checklist with the selected Channel Partner.
            </p>
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--outline wiz-back" style="flex: 1; justify-content: center;">← BACK</button>
            <button class="btn btn--primary wiz-next" style="flex: 2; justify-content: center;">FIND APPROPRIATE CHANNEL PARTNER →</button>
          </div>
        </div>

        <!-- STEP 07: CHANNEL PARTNER ROUTING -->
        <div class="wizard-panel" data-step="7" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--text-secondary);">STEP 07 — SMART CHANNEL PARTNER ROUTING</div>

          <h4 class="headline headline--sm" style="margin-bottom: 1rem;">WHERE DO I GO NEXT?</h4>

          <!-- ROUTING MAP PIPELINE -->
          <div class="flow-diagram flow-diagram--horizontal" style="margin-bottom: 1.5rem;">
            <div class="flow-step"><div class="flow-step__node"><span class="wiz-bind-location">Tamil Nadu</span></div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">SCHEME COMPATIBILITY</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node">PARTNER AVAILABILITY</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-step__node" style="border-color: var(--accent); color: var(--accent);">RECOMMENDED PARTNER</div></div>
          </div>

          <!-- RECOMMENDED PARTNER CARD -->
          <div class="glass-panel" style="padding: 1.5rem; margin-bottom: 1.5rem;" id="wiz-partner-card">
            <!-- Dynamically populated based on state -->
          </div>

          <div class="data-card" style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 1.5rem;">
            <strong>DEMONSTRATION ROUTING DISCLAIMER:</strong> Demonstration routing — final partner eligibility/status must be verified against current authorized data. NSFDC currently describes its channel-finance network as comprising 102 partners across categories including SCAs, PSBs, RRBs, NBFC-MFIs, cooperative banks/societies and other agencies.
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--outline wiz-back" style="flex: 1; justify-content: center;">← BACK</button>
            <button class="btn btn--primary wiz-next" style="flex: 2; justify-content: center;">VIEW COMPLETE ACTION DOSSIER →</button>
          </div>
        </div>

        <!-- STEP 08: ACTION PLAN / SUMMARY -->
        <div class="wizard-panel" data-step="8" style="display: none;">
          <div class="mono-label" style="margin-bottom: 1rem; color: var(--accent);">STEP 08 — PERSONALIZED APPLICATION ACTION DOSSIER</div>

          <div style="text-align: center; margin-bottom: 2rem;">
            <h3 class="headline headline--md" style="color: var(--text-primary); margin-bottom: 0.5rem;">YOUR SCHEMESPEAR ACTION DOSSIER IS READY</h3>
            <p class="body-text" style="margin: 0 auto;">You have completed the pre-application discovery and verification pipeline. Your application package is ready for Channel Partner presentation.</p>
          </div>

          <div class="glass-panel" style="padding: 2rem; background: var(--bg-void); border: 1px solid var(--border-accent); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem; margin-bottom: 1rem;">
              <div>
                <strong style="color: var(--accent); font-family: var(--font-mono); font-size: 0.8rem;">SCHEMESPEAR SUMMARY DOSSIER</strong>
                <div style="color: var(--text-primary); font-size: 1.1rem; font-weight: 700;" id="dos-title">Term Loan Scheme Application Package</div>
              </div>
              <div style="text-align: right;">
                <span class="mono-label">DATE: 2026-09-22</span><br/>
                <span class="tag tag--accent">STATUS: PRE-APPLICATION READY</span>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; font-size: var(--text-sm);">
              <div>
                <strong style="color: var(--text-secondary); display: block; margin-bottom: 4px;">APPLICANT PROFILE:</strong>
                • Purpose: <span class="wiz-bind-purpose">Small food-processing business</span><br/>
                • Project Cost: ₹<span class="wiz-bind-cost">2,00,000</span><br/>
                • Family Income: ₹<span class="wiz-bind-income">3,50,000</span> (Within ₹5L limit)<br/>
                • Location: <span class="wiz-bind-location">Tamil Nadu</span>
              </div>

              <div>
                <strong style="color: var(--text-secondary); display: block; margin-bottom: 4px;">ROUTED CHANNEL PARTNER:</strong>
                • Agency: <span id="dos-partner-name">TAHDCO</span><br/>
                • Category: State Channelizing Agency (SCA)<br/>
                • Next Action: Visit regional office with DPR & Caste Cert.
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn--primary" onclick="window.print()">PRINT / DOWNLOAD DOSSIER (PDF)</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initTrySchemeSpearWizardEvents() {
  let currentStep = 1;

  const costInput = document.getElementById('wiz-cost');
  const incomeInput = document.getElementById('wiz-income');
  const purposeInput = document.getElementById('wiz-purpose');
  const locationInput = document.getElementById('wiz-location');
  const categoryInput = document.getElementById('wiz-category');

  const container = document.getElementById('wizard-container');
  const badge = document.getElementById('wizard-step-badge');

  const stepTitles = [
    "STEP 01 OF 08 · TELL US YOUR NEED",
    "STEP 02 OF 08 · PROFILE UNDERSTANDING (AI)",
    "STEP 03 OF 08 · SCHEME CONDITION MATCHING",
    "STEP 04 OF 08 · EXPLAINABLE ELIGIBILITY",
    "STEP 05 OF 08 · REPAYMENT SIMULATION",
    "STEP 06 OF 08 · REQUIREMENT READINESS",
    "STEP 07 OF 08 · CHANNEL PARTNER ROUTING",
    "STEP 08 OF 08 · PERSONALIZED ACTION DOSSIER"
  ];

  function updateStep(step) {
    currentStep = step;
    if (badge) badge.innerText = stepTitles[step - 1];

    document.querySelectorAll('.wizard-panel').forEach(panel => {
      const pStep = parseInt(panel.getAttribute('data-step') || '1');
      panel.style.display = pStep === step ? 'block' : 'none';
    });

    // Update bindings
    const purposeVal = purposeInput?.value || 'Small food-processing business';
    const costVal = parseFloat(costInput?.value || '200000');
    const incomeVal = parseFloat(incomeInput?.value || '350000');
    const locVal = locationInput?.value || 'Tamil Nadu';

    const formatCurrency = (val) => val.toLocaleString('en-IN');

    document.querySelectorAll('.wiz-bind-purpose').forEach(el => el.innerText = purposeVal);
    document.querySelectorAll('.wiz-bind-cost').forEach(el => el.innerText = formatCurrency(costVal));
    document.querySelectorAll('.wiz-bind-income').forEach(el => el.innerText = formatCurrency(incomeVal));
    document.querySelectorAll('.wiz-bind-location').forEach(el => el.innerText = locVal);

    // Dynamic Step 2 JSON Output
    const jsonOutput = document.getElementById('wiz-json-output');
    if (jsonOutput) {
      jsonOutput.innerHTML = `
        <span style="color: var(--text-dim);">// Extracted Structured Beneficiary Profile (JSON)</span><br/>
        {<br/>
        &nbsp;&nbsp;<span style="color: var(--accent);">"purpose"</span>: <span style="color: var(--success);">"${purposeVal}"</span>,<br/>
        &nbsp;&nbsp;<span style="color: var(--accent);">"project_cost"</span>: <span style="color: var(--warning);">${costVal}</span>,<br/>
        &nbsp;&nbsp;<span style="color: var(--accent);">"family_income"</span>: <span style="color: var(--warning);">${incomeVal}</span>,<br/>
        &nbsp;&nbsp;<span style="color: var(--accent);">"location_state"</span>: <span style="color: var(--success);">"${locVal}"</span>,<br/>
        &nbsp;&nbsp;<span style="color: var(--accent);">"category"</span>: <span style="color: var(--success);">"SC"</span>,<br/>
        &nbsp;&nbsp;<span style="color: var(--accent);">"nsfdc_income_ceiling_check"</span>: <span style="color: var(--success);">${incomeVal <= 500000}</span><br/>
        }
      `;
    }

    // Step 3 Scheme Classification logic based on cost
    const matchTitle = document.getElementById('wiz-match-title');
    if (matchTitle) {
      if (costVal <= 140000) {
        matchTitle.innerText = "MICRO FINANCE SCHEME (MFS)";
      } else if (costVal <= 5000000) {
        matchTitle.innerText = "TERM LOAN SCHEME";
      } else {
        matchTitle.innerText = "HIGH VALUE CONCESSIONAL CREDIT";
      }
    }

    // Step 5 EMI Calculation logic
    const resEmi = document.getElementById('wiz-res-emi');
    const resInterest = document.getElementById('wiz-res-interest');
    const resTotal = document.getElementById('wiz-res-total');
    if (resEmi && resInterest && resTotal) {
      const P = costVal;
      const r = 0.05 / 12; // 5% p.a.
      const n = 5 * 12; // 5 years
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      resEmi.innerText = '₹' + Math.round(emi).toLocaleString('en-IN') + ' / mo';
      resInterest.innerText = '₹' + Math.round(totalInterest).toLocaleString('en-IN');
      resTotal.innerText = '₹' + Math.round(totalPayment).toLocaleString('en-IN');
    }

    // Step 7 Channel Partner mapping based on Location
    const partnerCard = document.getElementById('wiz-partner-card');
    const dosPartnerName = document.getElementById('dos-partner-name');
    if (partnerCard) {
      let partnerName = "State Channelizing Agency (SCA)";
      let partnerDetail = "District SC Development Corporation";

      if (locVal === 'Tamil Nadu') {
        partnerName = "Tamil Nadu Adi Dravidar Housing & Development Corp (TAHDCO)";
        partnerDetail = "District Office, Chennai / Regional Branches (SCA Node #TN-04)";
      } else if (locVal === 'Maharashtra') {
        partnerName = "Mahatma Phule Backward Class Development Corporation (MPBCDC)";
        partnerDetail = "Regional Branch Office, Mumbai (SCA Node #MH-02)";
      } else if (locVal === 'Uttar Pradesh') {
        partnerName = "UP Scheduled Castes Finance & Development Corp (UPSCFDC)";
        partnerDetail = "District Social Welfare Office, Lucknow (SCA Node #UP-01)";
      } else {
        partnerName = "State SC Development Corporation & Regional Bank Branch";
        partnerDetail = `Authorized Regional Channel Partner Node for ${locVal}`;
      }

      if (dosPartnerName) dosPartnerName.innerText = partnerName;

      partnerCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <span class="mono-label mono-label--accent">RECOMMENDED AUTHORIZED CHANNEL PARTNER</span>
          <span class="tag">ACTIVE REFUND QUOTA</span>
        </div>
        <h4 style="color: var(--text-primary); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">${partnerName}</h4>
        <p style="font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: 0.75rem;">${partnerDetail}</p>
        <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 1rem; flex-wrap: wrap;">
          <span>Category: State Channelizing Agency (SCA)</span>
          <span>·</span>
          <span>Supported: Term Loans, MFS, MSY</span>
          <span>·</span>
          <span>Network: 1 of 102 NSFDC Partners</span>
        </div>
      `;
    }
  }

  // Next & Back Buttons
  document.getElementById('wiz-btn-1')?.addEventListener('click', () => updateStep(2));

  document.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < 8) updateStep(currentStep + 1);
    });
  });

  document.querySelectorAll('.wiz-back').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) updateStep(currentStep - 1);
    });
  });
}
