import { initTheme } from './utils/theme.js';
import { initRouter } from './router.js';
import { initReadingProgress, initBackToTop } from './utils/animations.js';

// Initialize Theme (reads localStorage, sets data-theme immediately)
initTheme();

// Initialize SPA Router
initRouter();

// Initialize global scroll listeners
initReadingProgress();
initBackToTop();
