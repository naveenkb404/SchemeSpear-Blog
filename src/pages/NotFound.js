export function renderNotFound() {
  return `
    <div class="not-found container">
      <div class="not-found__code">404</div>
      <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">PAGE NOT FOUND</div>
      <h1 class="headline headline--md" style="margin-bottom: 1rem;">THE REQUESTED ROUTE DOES NOT EXIST</h1>
      <p class="body-text" style="margin-bottom: 2rem;">
        The page or article you are looking for has been moved or does not exist within the SchemeSpear portal.
      </p>
      <a href="#/" class="btn btn--primary">
        RETURN TO HOMEPAGE →
      </a>
    </div>
  `;
}
