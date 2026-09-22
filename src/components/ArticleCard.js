export function renderArticleCard(article, isFeatured = false) {
  return `
    <a href="#/blog/${article.slug}" class="article-card ${isFeatured ? 'article-card--featured' : ''} reveal">
      <div class="article-card__image-container">
        <img 
          src="${article.image || '/images/blog/scheme-access-barriers.jpg'}" 
          alt="${article.imageAlt || article.title}" 
          class="article-card__img" 
          loading="lazy" 
        />
        <div class="article-card__image-overlay"></div>
        <div class="article-card__image-badge">
          ${article.integrityBadge ? `<span class="tag tag--accent" style="font-size: 0.6rem;">${article.integrityBadge}</span>` : `<span class="tag">${article.category}</span>`}
        </div>
      </div>

      <div class="article-card__body">
        <div class="article-card__category">
          <span class="tag tag--accent">${article.category}</span>
        </div>
        <h3 class="article-card__title">${article.title}</h3>
        <p class="article-card__desc">${article.description}</p>
        <div class="article-card__meta">
          <span>${article.author}</span>
          <span>·</span>
          <span>${article.date}</span>
          <span>·</span>
          <span>${article.readingTime}</span>
        </div>
      </div>
    </a>
  `;
}
