export function renderFinancialCalculator() {
  return `
    <div class="calculator reveal" id="financial-calculator">
      <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">
        DETERMINISTIC FINANCIAL ENGINE · ESTIMATE ONLY
      </div>

      <div class="calculator__grid">
        <div class="calculator__field">
          <label class="calculator__label" for="calc-amount">Loan Amount (₹)</label>
          <input type="number" id="calc-amount" class="calculator__input" value="150000" min="10000" max="5000000" step="10000" />
        </div>

        <div class="calculator__field">
          <label class="calculator__label" for="calc-rate">Concessional Interest Rate (% p.a.)</label>
          <input type="number" id="calc-rate" class="calculator__input" value="5.0" min="1.0" max="18.0" step="0.5" />
        </div>

        <div class="calculator__field">
          <label class="calculator__label" for="calc-tenure">Repayment Period (Years)</label>
          <input type="number" id="calc-tenure" class="calculator__input" value="5" min="1" max="10" step="1" />
        </div>

        <div class="calculator__field">
          <label class="calculator__label" for="calc-moratorium">Moratorium / Grace Period (Months)</label>
          <input type="number" id="calc-moratorium" class="calculator__input" value="6" min="0" max="24" step="1" />
        </div>
      </div>

      <div class="calculator__results">
        <div class="calculator__result">
          <div class="calculator__result-label">ESTIMATED EMI</div>
          <div class="calculator__result-value calculator__result-value--accent" id="res-emi">₹2,831</div>
        </div>

        <div class="calculator__result">
          <div class="calculator__result-label">TOTAL INTEREST</div>
          <div class="calculator__result-value" id="res-interest">₹19,845</div>
        </div>

        <div class="calculator__result">
          <div class="calculator__result-label">TOTAL REPAYMENT</div>
          <div class="calculator__result-value" id="res-total">₹1,69,845</div>
        </div>
      </div>

      <div class="calculator__disclaimer">
        <strong>Disclaimer:</strong> Financial outputs are deterministic mathematical estimates. Interest rates and moratorium grace periods vary by designated Channel Partner and official sanctioning authority. Final approval depends on authorized institution processing.
      </div>
    </div>
  `;
}

export function initCalculatorEvents() {
  const amountInput = document.getElementById('calc-amount');
  const rateInput = document.getElementById('calc-rate');
  const tenureInput = document.getElementById('calc-tenure');
  const moratoriumInput = document.getElementById('calc-moratorium');

  const resEmi = document.getElementById('res-emi');
  const resInterest = document.getElementById('res-interest');
  const resTotal = document.getElementById('res-total');

  function calculate() {
    if (!amountInput || !rateInput || !tenureInput || !resEmi) return;

    const P = parseFloat(amountInput.value) || 0;
    const annualRate = parseFloat(rateInput.value) || 0;
    const years = parseFloat(tenureInput.value) || 1;
    
    const r = annualRate / 12 / 100;
    const n = years * 12;

    let emi = 0;
    if (r > 0) {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      emi = P / n;
    }

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    const formatCurrency = (val) => '₹' + Math.round(val).toLocaleString('en-IN');

    resEmi.innerText = formatCurrency(emi);
    resInterest.innerText = formatCurrency(totalInterest);
    resTotal.innerText = formatCurrency(totalPayment);
  }

  [amountInput, rateInput, tenureInput, moratoriumInput].forEach(input => {
    input?.addEventListener('input', calculate);
  });
}
