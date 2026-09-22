import { renderTableOfContents } from '../components/CTA.js';
import { renderArticleCard } from '../components/ArticleCard.js';
import { articles } from '../data/articles.js';

export function renderBlogArticle(slug) {
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return `
      <div class="section container" style="text-align: center; padding-top: 100px;">
        <h1 class="headline headline--lg">ARTICLE NOT FOUND</h1>
        <p class="body-text" style="margin: 1rem auto 2rem;">The requested research article could not be located.</p>
        <a href="#/blog" class="btn btn--primary">RETURN TO JOURNAL</a>
      </div>
    `;
  }

  // Find related articles
  const relatedArticles = articles.filter(a => article.relatedSlugs?.includes(a.slug) || (a.category === article.category && a.slug !== article.slug)).slice(0, 2);

  // Extract headings for Table of Contents
  const headings = [
    { id: "sec-intro", text: "01 Introduction" },
    { id: "sec-problem", text: "02 The Problem" },
    { id: "sec-evidence", text: "03 Key Insights" },
    { id: "sec-solution", text: "04 SchemeSpear View" }
  ];

  return `
    <article class="article-page section">
      <div class="container">
        <!-- ARTICLE HEADER -->
        <header class="article-header content-width" style="margin-left: 0; max-width: 800px;">
          <div class="article-header__category">
            <a href="#/blog" class="tag tag--accent">${article.category}</a>
          </div>
          <h1 class="article-header__title">${article.title}</h1>
          <p class="article-header__subtitle">${article.subtitle}</p>

          <div class="article-header__meta">
            <span>AUTHOR: ${article.author}</span>
            <span>·</span>
            <span>PUBLISHED: ${article.date}</span>
            <span>·</span>
            <span>${article.readingTime}</span>
          </div>
        </header>

        <!-- ARTICLE LAYOUT (TOC + BODY) -->
        <div class="article-layout">
          <!-- STICKY TABLE OF CONTENTS -->
          <aside>
            ${renderTableOfContents(headings)}
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
              <button class="btn btn--outline" onclick="navigator.clipboard.writeText(window.location.href); alert('Article URL copied to clipboard!');" style="width: 100%; justify-content: center;">
                SHARE ARTICLE
              </button>
            </div>
          </aside>

          <!-- MAIN ARTICLE CONTENT -->
          <div class="article-body">
            ${article.content}

            <!-- REFERENCES SECTION -->
            ${article.references && article.references.length > 0 ? `
              <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
                <div class="mono-label mono-label--accent" style="margin-bottom: 1rem;">CITATIONS & REFERENCES</div>
                <ul>
                  ${article.references.map(ref => `
                    <li style="font-size: var(--text-sm); margin-bottom: 0.5rem;">
                      <a href="${ref.url}" target="_blank" rel="noopener" style="color: var(--text-primary); text-decoration: underline;">
                        ${ref.name}
                      </a>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- RELATED ARTICLES -->
            ${relatedArticles.length > 0 ? `
              <div class="article-footer">
                <div class="mono-label mono-label--accent" style="margin-bottom: 1.5rem;">RELATED RESEARCH</div>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
                  ${relatedArticles.map(art => renderArticleCard(art)).join('')}
                </div>
              </div>
            ` : ''}

            <div style="margin-top: 3rem; text-align: right;">
              <a href="#/blog" class="mono-label mono-label--accent" style="font-size: 0.8rem;">
                BACK TO JOURNAL INDEX →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}
