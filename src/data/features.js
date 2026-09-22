export const featuresData = [
  {
    id: "01",
    title: "NATURAL PROFILE UNDERSTANDING",
    desc: "Self-hosted LLM extracts structured parameters (purpose, cost, income, state, category) from conversational input.",
    howItWorks: "Converts natural language input into a validated JSON schema without making eligibility decisions.",
    useCase: "Applicant types: 'Small food processing unit in Tamil Nadu needing 2 lakhs'. Extracted: Business, ₹2,00,000, TN.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`
  },
  {
    id: "02",
    title: "EXPLAINABLE ELIGIBILITY ENGINE",
    desc: "Deterministic rule engine verifies profile against current NSFDC parameters (₹5 Lakh income ceiling effective Jan 2026).",
    howItWorks: "Executes boolean logic trees and returns human-readable qualification logs for every condition.",
    useCase: "Outputs: SC Category ✓, Income < ₹5L ✓, Project > ₹1.40L (Term Loan matched) ✓, Final sanction subject to SCA verification.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    id: "03",
    title: "SCHEME CONDITION MATCHING",
    desc: "Ranks schemes (Term Loan, Micro Finance Scheme, Mahila Samriddhi) based on project cost thresholds and trade suitability.",
    howItWorks: "Pairs profile with scheme boundaries per current NSFDC FAQ standards (MFS ≤ ₹1.40L cost / Term Loan ≤ ₹50L cost).",
    useCase: "Automatically classifies ₹2,00,000 project as Term Loan (above MFS ₹1.40L cap).",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`
  },
  {
    id: "04",
    title: "DETERMINISTIC FINANCIAL SIMULATOR",
    desc: "Calculates estimated EMI, total interest, and moratorium grace periods without LLM math hallucinations.",
    howItWorks: "Standard financial formulas ($EMI = \\frac{P \\cdot r \\cdot (1+r)^n}{(1+r)^n - 1}$) model exact repayment schedules.",
    useCase: "Simulates ₹2,831/mo EMI for ₹1,50,000 loan at 5% concessional interest over 5 years with 6-month moratorium.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"/></svg>`
  },
  {
    id: "05",
    title: "102 CHANNEL PARTNER ROUTER",
    desc: "Geo-spatial lookup mapping applicants to active authorized Channel Partners (SCAs, PSBs, RRBs, NBFC-MFIs).",
    howItWorks: "Indexes NSFDC's 102 partner agencies to prevent direct-to-NSFDC application errors.",
    useCase: "Directs Tamil Nadu applicant to Tamil Nadu Adi Dravidar Housing & Development Corp (TAHDCO) regional office.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
  {
    id: "06",
    title: "REQUIREMENT READINESS CHECKLIST",
    desc: "Identifies verified documents vs. missing requirements (project report, agency checklist) before submission.",
    howItWorks: "Cross-checks applicant papers against scheme matrix to generate 'Next Best Action' guidance.",
    useCase: "Shows: Caste ✓, Income ✓, KYC ✓ | Action: Prepare Detailed Project Report (DPR) before SCA visit.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`
  },
  {
    id: "07",
    title: "PRIVATE BY DESIGN ARCHITECTURE",
    desc: "Designed to keep sensitive beneficiary PII and financial data within controlled local infrastructure.",
    howItWorks: "Local model instances run on private server nodes with zero third-party cloud API data transmission.",
    useCase: "Beneficiary income certificates and caste records are processed strictly within isolated container boundaries.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
  },
  {
    id: "08",
    title: "ACTIONABLE DOSSIER GENERATION",
    desc: "Compiles a complete pre-application summary package for single-visit channel partner submission.",
    howItWorks: "Generates a structured application readiness dossier with checklist, estimated EMI, and partner details.",
    useCase: "Applicant prints single-page dossier for their appointment at the State Channelizing Agency.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`
  }
];
