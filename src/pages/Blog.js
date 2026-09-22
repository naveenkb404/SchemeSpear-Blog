import { renderSectionHeader } from '../components/SectionHeader.js';
import { renderArticleCard } from '../components/ArticleCard.js';
import { renderBlogSearch, renderCategoryFilter } from '../components/BlogSearch.js';
import { articles } from '../data/articles.js';

export function renderBlog() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);
  const categories = Array.from(new Set(articles.map(a => a.category)));

  return `
    <div class="article-page section">
      <div class="container">
        ${renderSectionHeader({
          label: "RESEARCH, TECHNOLOGY & INSIGHTS",
          title: "THE SCHEMESPEAR JOURNAL",
          description: "In-depth research, architectural case studies, policy analysis, and build logs behind making government financial support accessible."
        })}

        <!-- SEARCH AND FILTER CONTROLS -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 3rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle);">
          ${renderBlogSearch()}
          ${renderCategoryFilter(categories)}
        </div>

        <!-- FEATURED ARTICLE -->
        <div id="featured-article-container" style="margin-bottom: 4rem;">
          ${renderArticleCard(featuredArticle, true)}
        </div>

        <!-- ARTICLES GRID -->
        <div id="articles-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem;">
          ${remainingArticles.map(art => renderArticleCard(art)).join('')}
        </div>
      </div>
    </div>
  `;
}

export function initBlogEvents() {
  const searchInput = document.getElementById('blog-search-input');
  const filterBtns = document.querySelectorAll('.category-filter__btn');
  const gridContainer = document.getElementById('articles-grid');
  const featuredContainer = document.getElementById('featured-article-container');

  let activeCat = 'ALL';
  let searchQuery = '';

  function filterArticles() {
    const filtered = articles.filter(art => {
      const matchCat = activeCat === 'ALL' || art.category === activeCat;
      const matchQuery = !searchQuery || 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });

    if (gridContainer) {
      if (filtered.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 0; color: var(--text-dim);">No articles match your search criteria.</div>`;
        if (featuredContainer) featuredContainer.style.display = 'none';
      } else {
        if (featuredContainer) featuredContainer.style.display = 'block';
        gridContainer.innerHTML = filtered.map(art => renderArticleCard(art)).join('');
      }
    }
  }

  if (searchInput) {
    searchInput.oninput = (e) => {
      searchQuery = e.target.value.trim();
      filterArticles();
    };
  }

  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat') || 'ALL';
      filterArticles();
    };
  });
}
