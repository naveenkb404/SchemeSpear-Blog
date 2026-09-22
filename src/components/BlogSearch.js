export function renderBlogSearch() {
  return `
    <div class="blog-search">
      <svg class="blog-search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
      <input type="text" id="blog-search-input" class="blog-search__input" placeholder="Search articles, topics, research..." aria-label="Search articles" />
    </div>
  `;
}

export function renderCategoryFilter(categories, activeCategory = 'ALL') {
  return `
    <div class="category-filter" id="category-filter">
      <button class="category-filter__btn ${activeCategory === 'ALL' ? 'active' : ''}" data-cat="ALL">
        ALL ARTICLES
      </button>
      ${categories.map(cat => `
        <button class="category-filter__btn ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">
          ${cat}
        </button>
      `).join('')}
    </div>
  `;
}
