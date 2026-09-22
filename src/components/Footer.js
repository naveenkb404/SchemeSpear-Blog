export function renderFooter() {
  return `
    <div class="container">
      <div class="footer__brand">
        <div class="footer__logo">SCHEMESPEAR</div>
        <div class="footer__tagline">THE RIGHT SCHEME.<br/>THE RIGHT GUIDANCE.<br/>THE RIGHT PARTNER.</div>
      </div>

      <div class="footer__grid">
        <div class="footer__col">
          <div class="footer__col-title">SCHEMESPEAR PLATFORM</div>
          <p style="font-size: var(--text-sm); color: var(--text-tertiary); line-height: 1.6; max-width: 300px;">
            An intelligent gateway enabling SC beneficiaries to discover suitable concessional financial support, understand eligibility, plan repayment, and connect with channel partners.
          </p>
        </div>

        <div class="footer__col">
          <div class="footer__col-title">NAVIGATION</div>
          <a href="#/problem">Problem</a>
          <a href="#/research">Research</a>
          <a href="#/solution">Solution</a>
          <a href="#/technology">Technology</a>
        </div>

        <div class="footer__col">
          <div class="footer__col-title">RESOURCES</div>
          <a href="#/impact">Impact</a>
          <a href="#/blog">Blog Journal</a>
          <a href="#/about">About SCORPIUS</a>
          <a href="#/references">References</a>
        </div>

        <div class="footer__col">
          <div class="footer__col-title">SIH 2026 INFO</div>
          <a href="#/about">Problem SIH26092</a>
          <a href="#/about">Team SCORPIUS</a>
          <a href="https://github.com" target="_blank" rel="noopener">GitHub Repository</a>
          <a href="#/solution">Platform Prototype</a>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__meta">
          SCORPIUS · SIH 2026 · SIH26092 · ALL RIGHTS RESERVED
        </div>
        <div class="footer__socials">
          <a href="https://github.com" target="_blank" rel="noopener">GITHUB</a>
          <a href="#/references">RESOURCES</a>
          <a href="#/about">CONTACT</a>
        </div>
      </div>
    </div>
  `;
}
