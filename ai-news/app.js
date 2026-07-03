(function () {
  const data = window.AI_NEWS_DATA || { digests: [] };
  const state = {
    query: "",
    date: "all",
    category: "all",
    facetType: "",
    facetValue: "",
  };

  const facetGroups = [
    { type: "tags", label: "主题标签", field: "tags", limit: 18, open: true },
    { type: "companies", label: "公司", field: "companies", limit: 14 },
    { type: "people", label: "人物", field: "people", limit: 14 },
    { type: "products", label: "产品", field: "products", limit: 14 },
    { type: "technologies", label: "技术", field: "technologies", limit: 14 },
  ];

  const elements = {
    searchInput: document.getElementById("searchInput"),
    dateSelect: document.getElementById("dateSelect"),
    categorySelect: document.getElementById("categorySelect"),
    tagList: document.getElementById("tagList"),
    articleList: document.getElementById("articleList"),
    emptyState: document.getElementById("emptyState"),
    digestCount: document.getElementById("digestCount"),
    articleCount: document.getElementById("articleCount"),
    visibleCount: document.getElementById("visibleCount"),
    pageTitle: document.getElementById("pageTitle"),
    activeFilters: document.getElementById("activeFilters"),
  };

  const articles = flattenDigests(data.digests);

  initTheme();
  init();

  function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", savedTheme || (prefersDark ? "dark" : "light"));
  }

  function init() {
    elements.digestCount.textContent = String(data.digest_count || data.digests.length);
    elements.articleCount.textContent = String(data.article_count || articles.length);

    fillSelect(elements.dateSelect, [
      { value: "all", label: "全部日期" },
      ...data.digests.map((digest) => ({
        value: digest.date,
        label: `${digest.date} (${digest.count || digest.articles.length})`,
      })),
    ]);

    const categories = unique(articles.map((article) => article.category).filter(Boolean));
    fillSelect(elements.categorySelect, [
      { value: "all", label: "全部分类" },
      ...categories.map((category) => ({ value: category, label: category })),
    ]);

    renderTags();
    bindEvents();
    render();
  }

  function bindEvents() {
    elements.searchInput.addEventListener("input", (event) => {
      state.query = event.target.value.trim().toLowerCase();
      render();
    });
    elements.dateSelect.addEventListener("change", (event) => {
      state.date = event.target.value;
      render();
    });
    elements.categorySelect.addEventListener("change", (event) => {
      state.category = event.target.value;
      render();
    });
  }

  function flattenDigests(digests) {
    return digests.flatMap((digest) =>
      (digest.articles || []).map((article) => ({
        ...article,
        digestDate: digest.date,
      }))
    );
  }

  function fillSelect(select, options) {
    select.innerHTML = options
      .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
      .join("");
  }

  function renderTags() {
    elements.tagList.innerHTML = facetGroups
      .map((group) => {
        const facets = countFacets(group.field).slice(0, group.limit);
        if (!facets.length) return "";
        const buttons = facets
          .map(([value, count]) => {
            const active = state.facetType === group.type && state.facetValue === value ? " active" : "";
            return `<button class="tag-button${active}" type="button" data-facet-type="${escapeHtml(group.type)}" data-facet-value="${escapeHtml(value)}">${escapeHtml(value)} · ${count}</button>`;
          })
          .join("");
        return `
          <details class="facet-group" ${group.open ? "open" : ""}>
            <summary class="facet-heading">
              <span>${escapeHtml(group.label)}</span>
              <span class="facet-count">${facets.length}</span>
            </summary>
            <div class="facet-buttons">${buttons}</div>
          </details>
        `;
      })
      .join("");
    elements.tagList.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const type = button.dataset.facetType;
        const value = button.dataset.facetValue;
        const isActive = state.facetType === type && state.facetValue === value;
        state.facetType = isActive ? "" : type;
        state.facetValue = isActive ? "" : value;
        renderTags();
        render();
      });
    });
  }

  function countFacets(field) {
    const counts = new Map();
    articles.forEach((article) => {
      (article[field] || []).forEach((value) => {
        counts.set(value, (counts.get(value) || 0) + 1);
      });
    });
    return [...counts.entries()].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "zh-CN"));
  }

  function render() {
    const visible = articles.filter(matchesState);
    elements.visibleCount.textContent = String(visible.length);
    elements.pageTitle.textContent = state.date === "all" ? "AI Daily Intelligence" : `${state.date} 简报`;
    elements.emptyState.hidden = visible.length > 0;
    elements.articleList.innerHTML = visible.map(renderArticle).join("");
    renderActiveFilters();
  }

  function matchesState(article) {
    if (state.date !== "all" && article.digestDate !== state.date) return false;
    if (state.category !== "all" && article.category !== state.category) return false;
    if (state.facetValue && !facetValues(article).includes(state.facetValue)) return false;
    if (!state.query) return true;
    const searchable = [
      article.title,
      article.source,
      article.category,
      article.summary,
      article.why_it_matters,
      article.investment_observation,
      ...(article.tags || []),
      ...(article.companies || []),
      ...(article.people || []),
      ...(article.products || []),
      ...(article.technologies || []),
    ]
      .join(" ")
      .toLowerCase();
    return searchable.includes(state.query);
  }

  function facetValues(article) {
    if (!state.facetType) return [];
    const group = facetGroups.find((item) => item.type === state.facetType);
    if (!group) return [];
    return article[group.field] || [];
  }

  function renderArticle(article) {
    const entities = [
      ...(article.companies || []),
      ...(article.people || []),
      ...(article.products || []),
      ...(article.technologies || []),
      ...(article.tags || []),
    ];
    return `
      <article class="article-card">
        <div class="article-meta">
          <span class="pill">${escapeHtml(article.digestDate)}</span>
          <span class="pill">${escapeHtml(article.category || "未分类")}</span>
          <span>${escapeHtml(article.source || "")}</span>
          <span class="score">${formatScore(article.importance_score)}</span>
        </div>
        <h3><a href="${escapeAttribute(article.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(article.title)}</a></h3>
        <div class="article-body">
          <p><strong>摘要：</strong>${escapeHtml(article.summary || "")}</p>
          <p><strong>为什么重要：</strong>${escapeHtml(article.why_it_matters || "")}</p>
          <p><strong>投资观察：</strong>${escapeHtml(article.investment_observation || "")}</p>
        </div>
        ${renderEntities(entities)}
      </article>
    `;
  }

  function renderEntities(entities) {
    const uniqueEntities = unique(entities.filter(Boolean)).slice(0, 18);
    if (!uniqueEntities.length) return "";
    return `<div class="entity-row">${uniqueEntities
      .map((entity) => `<span class="entity-chip">${escapeHtml(entity)}</span>`)
      .join("")}</div>`;
  }

  function renderActiveFilters() {
    const filters = [];
    if (state.query) filters.push(`搜索：${state.query}`);
    if (state.date !== "all") filters.push(`日期：${state.date}`);
    if (state.category !== "all") filters.push(`分类：${state.category}`);
    if (state.facetValue) filters.push(`${facetLabel(state.facetType)}：${state.facetValue}`);
    elements.activeFilters.innerHTML = filters
      .map((filter) => `<span class="filter-chip">${escapeHtml(filter)}</span>`)
      .join("");
  }

  function facetLabel(type) {
    const group = facetGroups.find((item) => item.type === type);
    return group ? group.label : "筛选";
  }

  function unique(values) {
    return [...new Set(values)];
  }

  function formatScore(score) {
    const value = Number(score);
    if (Number.isNaN(value)) return "";
    return `重要性 ${value.toFixed(1)}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value || "#");
  }
})();
