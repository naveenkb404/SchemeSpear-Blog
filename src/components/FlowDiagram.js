export function renderFlowDiagram(steps, isHorizontal = false) {
  return `
    <div class="flow-diagram ${isHorizontal ? 'flow-diagram--horizontal' : ''}">
      ${steps.map((step, idx) => `
        <div class="flow-step reveal">
          <div class="flow-step__node">
            ${step.step ? `<span class="step-number" style="display:block; margin-bottom: 2px;">${step.step}</span>` : ''}
            ${step.title || step}
          </div>
          ${step.detail ? `<div class="flow-step__detail">${step.detail}</div>` : ''}
        </div>
        ${idx < steps.length - 1 ? `
          <div class="flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        ` : ''}
      `).join('')}
    </div>
  `;
}
