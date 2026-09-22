import { renderNavbar, initNavbarEvents } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';

import { renderHome, initHomeEvents } from './pages/Home.js';
import { renderProblem } from './pages/Problem.js';
import { renderResearch } from './pages/Research.js';
import { renderSolution } from './pages/Solution.js';
import { renderTechnology } from './pages/Technology.js';
import { renderImpact } from './pages/Impact.js';
import { renderBlog, initBlogEvents } from './pages/Blog.js';
import { renderBlogArticle } from './pages/BlogArticle.js';
import { renderAbout } from './pages/About.js';
import { renderReferences } from './pages/References.js';
import { renderNotFound } from './pages/NotFound.js';

import { initScrollReveal } from './utils/animations.js';

export function handleRoute() {
  const hash = window.location.hash || '#/';
  const appRoot = document.getElementById('app');
  const navbarRoot = document.getElementById('navbar');
  const footerRoot = document.getElementById('footer-root');

  // Render Navbar and Footer
  if (navbarRoot) {
    navbarRoot.innerHTML = renderNavbar();
    initNavbarEvents();
  }
  if (footerRoot) {
    footerRoot.innerHTML = renderFooter();
  }

  // Scroll to top on route change
  window.scrollTo(0, 0);

  // Route matching
  if (hash === '#/' || hash === '') {
    appRoot.innerHTML = renderHome();
    initHomeEvents();
  } else if (hash === '#/try') {
    appRoot.innerHTML = renderHome();
    initHomeEvents();
    setTimeout(() => {
      document.getElementById('try-wizard')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else if (hash === '#/problem') {
    appRoot.innerHTML = renderProblem();
  } else if (hash === '#/research') {
    appRoot.innerHTML = renderResearch();
  } else if (hash === '#/solution') {
    appRoot.innerHTML = renderSolution();
  } else if (hash === '#/technology') {
    appRoot.innerHTML = renderTechnology();
  } else if (hash === '#/impact') {
    appRoot.innerHTML = renderImpact();
  } else if (hash === '#/blog') {
    appRoot.innerHTML = renderBlog();
    initBlogEvents();
  } else if (hash.startsWith('#/blog/')) {
    const slug = hash.replace('#/blog/', '');
    appRoot.innerHTML = renderBlogArticle(slug);
  } else if (hash === '#/about') {
    appRoot.innerHTML = renderAbout();
  } else if (hash === '#/references') {
    appRoot.innerHTML = renderReferences();
  } else {
    appRoot.innerHTML = renderNotFound();
  }

  // Re-trigger scroll reveal observer for newly mounted DOM elements
  setTimeout(() => {
    initScrollReveal();
  }, 50);
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);
  handleRoute();
}
