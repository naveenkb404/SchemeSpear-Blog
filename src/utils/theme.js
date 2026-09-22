export function initTheme() {
  const savedTheme = localStorage.getItem('schemeSpearTheme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  return savedTheme;
}

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('schemeSpearTheme', newTheme);
  return newTheme;
}
