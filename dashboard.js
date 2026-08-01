/* ===================================
   FLAKCREATORSTUDIO — TOOLS DASHBOARD
=================================== */

let activeCategory = "All";
let searchQuery = "";

function getCategories() {
  const cats = ["All", ...new Set(FLAK_TOOLS.map(t => t.category))];
  return cats;
}

function renderCategoryPills() {
  const wrap = document.getElementById("categoryPills");
  wrap.innerHTML = "";
  getCategories().forEach(cat => {
    const pill = document.createElement("button");
    pill.className = "pill" + (cat === activeCategory ? " pill-active" : "");
    pill.textContent = cat;
    pill.addEventListener("click", () => {
      activeCategory = cat;
      renderCategoryPills();
      renderTools();
    });
    wrap.appendChild(pill);
  });
}

function renderTools() {
  const grid = document.getElementById("toolGrid");
  const empty = document.getElementById("noResults");
  grid.innerHTML = "";

  const q = searchQuery.trim().toLowerCase();

  const filtered = FLAK_TOOLS.filter(tool => {
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    const matchesSearch = q === "" ||
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  filtered.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";

    const badge = tool.status === "live"
      ? `<span class="badge badge-live">Live</span>`
      : `<span class="badge badge-soon">Coming Soon</span>`;

    const action = tool.status === "live"
      ? `<a href="${tool.url}" class="download-btn2">Open Tool</a>`
      : `<button disabled>Coming Soon</button>`;

    card.innerHTML = `
      <div class="tool-card-top">
        <span class="tool-icon">${tool.icon}</span>
        ${badge}
      </div>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <span class="tool-category-tag">${tool.category}</span>
      ${action}
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryPills();
  renderTools();

  const searchInput = document.getElementById("toolSearch");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderTools();
  });
});
