import { toggleTheme } from '../utils/theme.js';

const LOGO_DARK  = '/images/branding/schemespear-logo-dark.png';
const LOGO_LIGHT = '/images/branding/schemespear-logo-light.png';

// Preload both logo assets immediately to prevent flash on theme switch
(function preloadLogos() {
  [LOGO_DARK, LOGO_LIGHT].forEach(src => {
    const link = document.createElement('link');
    link.rel  = 'preload';
    link.as   = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
})();

export function renderNavbar() {
  const currentHash  = window.location.hash || '#/';
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const logoSrc      = currentTheme === 'dark' ? LOGO_DARK : LOGO_LIGHT;

  const navItems = [
    { label: 'Problem',    hash: '#/problem'    },
    { label: 'Research',   hash: '#/research'   },
    { label: 'Solution',   hash: '#/solution'   },
    { label: 'Technology', hash: '#/technology' },
    { label: 'Impact',     hash: '#/impact'     },
    { label: 'Blog',       hash: '#/blog'       },
    { label: 'About',      hash: '#/about'      }
  ];

  const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const sunIcon  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  return `
    <div class="container navbar__inner">
      <!-- LEFT: LOGO + BRAND TEXT -->
      <a href="#/" class="navbar__brand" aria-label="SchemeSpear home">
        <img
          id="navbar-logo"
          src="${logoSrc}"
          alt="SchemeSpear"
          class="navbar__logo-img"
          width="44"
          height="44"
          draggable="false"
        />
        <div class="navbar__brand-text">
          <span class="navbar__name">SCHEMESPEAR</span>
          <span class="navbar__sub">SCORPIUS · SIH 2026</span>
        </div>
      </a>

      <!-- CENTER: MAIN NAVIGATION -->
      <nav class="navbar__links" aria-label="Main navigation">
        ${navItems.map(item => `
          <a href="${item.hash}" class="navbar__link ${currentHash === item.hash ? 'active' : ''}">
            ${item.label}
          </a>
        `).join('')}
      </nav>

      <!-- RIGHT: THEME TOGGLE & MOBILE HAMBURGER -->
      <div class="navbar__right">
        <button
          id="theme-toggle-btn"
          class="theme-toggle"
          aria-label="${currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}"
          title="${currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}"
        >
          ${currentTheme === 'dark' ? sunIcon : moonIcon}
        </button>

        <button class="navbar__hamburger" id="hamburger-btn" aria-label="Toggle Navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div class="navbar__mobile" id="mobile-menu">
      ${navItems.map(item => `
        <a href="${item.hash}" class="navbar__link ${currentHash === item.hash ? 'active' : ''}">
          ${item.label}
        </a>
      `).join('')}
    </div>
  `;
}

export function initNavbarEvents() {
  const hamburger  = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar     = document.getElementById('navbar');
  const themeBtn   = document.getElementById('theme-toggle-btn');
  const logoImg    = document.getElementById('navbar-logo');

  const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const sunIcon  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  if (themeBtn) {
    themeBtn.onclick = () => {
      const newTheme = toggleTheme();
      const isDark   = newTheme === 'dark';

      // Swap logo immediately (preloaded, so no flash)
      if (logoImg) {
        logoImg.src = isDark ? LOGO_DARK : LOGO_LIGHT;
      }

      // Swap toggle icon
      themeBtn.innerHTML = isDark ? sunIcon : moonIcon;
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeBtn.setAttribute('title',      isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };
  }

  if (hamburger && mobileMenu) {
    hamburger.onclick = () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    };

    mobileMenu.querySelectorAll('.navbar__link').forEach(link => {
      link.onclick = () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      };
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('compact');
    } else {
      navbar?.classList.remove('compact');
    }
  });
}
