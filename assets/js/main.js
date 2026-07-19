/* ==========================================================================
   ionascu.md — shared site logic
   ========================================================================== */

/* ---- contact links: replace these four with the real destinations ---- */
const CONTACT_LINKS = {
  email: "mailto:salut@ionascu.md",
  tryhackme: "https://tryhackme.com/p/stewiesrupert",
  catan: "cata747",
  youtube: "https://youtube.com/@cevacresteaici"
};
const CONTACT_HANDLES = {
  email: "contact@ionascu.md",
  tryhackme: "@your-username",
  catan: "cata747",
  youtube: "@cevacresteaici"
};

function getLang(){
  const saved = localStorage.getItem("lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "en").slice(0,2).toLowerCase();
  if (I18N[nav]) return nav;
  return "en";
}

function setLang(lang){
  if (!I18N[lang]) return;
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
  applyTranslations(lang);
  document.querySelectorAll(".lang-switch button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  if (typeof renderCV === "function") renderCV(lang);
  if (typeof renderBlog === "function") renderBlog(lang);
}

function applyTranslations(lang){
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
}

function initLangSwitch(){
  const lang = getLang();
  document.querySelectorAll(".lang-switch button").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });
  setLang(lang);
}

function markActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")){
      a.classList.add("active");
    }
  });
}

function wireContactLinks(){
  document.querySelectorAll("[data-contact]").forEach(el=>{
    const key = el.getAttribute("data-contact");
    if (CONTACT_LINKS[key]) el.setAttribute("href", CONTACT_LINKS[key]);
    const handle = el.querySelector(".handle");
    if (handle && CONTACT_HANDLES[key]) handle.textContent = CONTACT_HANDLES[key];
  });
}

/* ---------------- CV rendering ---------------- */
function renderCV(lang){
  const d = I18N[lang];
  const expEl = document.getElementById("experience-list");
  const eduEl = document.getElementById("education-list");
  const langEl = document.getElementById("languages-list");
  const techEl = document.getElementById("skills-technical");
  const otherEl = document.getElementById("skills-other");
  const webEl = document.getElementById("skills-web");
  if (!expEl) return; // not the CV page

  expEl.innerHTML = d.experience.map(e => `
    <div class="entry">
      <div class="dates">${e.dates}</div>
      <h3>${e.title}</h3>
      <div class="org">${e.org}</div>
      ${e.bullets.length ? `<ul>${e.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>` : ""}
    </div>
  `).join("");

  eduEl.innerHTML = d.education.map(e => `
    <div class="entry">
      ${e.dates ? `<div class="dates">${e.dates}</div>` : ""}
      <h3>${e.title}</h3>
      <div class="org">${e.org}</div>
    </div>
  `).join("");

  langEl.innerHTML = d.languages.map(l => `
    <div class="lang-bar">
      <span>${l.name}</span>
      <span class="track"><span class="fill" style="width:${l.pct}%"></span></span>
      <span>${l.level}</span>
    </div>
  `).join("");

  techEl.innerHTML = d.skills_technical.map(s=>`<li>${s}</li>`).join("");
  otherEl.innerHTML = d.skills_other.map(s=>`<li>${s}</li>`).join("");
  webEl.innerHTML = d.skills_web.map(s=>`<li>${s}</li>`).join("");
}

/* ---------------- Blog rendering ---------------- */
let activeCategory = "all";

function renderBlog(lang){
  const listEl = document.getElementById("post-list");
  if (!listEl) return; // not the blog page
  const d = I18N[lang];

  const filtered = activeCategory === "all"
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  if (!filtered.length){
    listEl.innerHTML = `<div class="empty-state">${d.blog_empty}</div>`;
    return;
  }

  const catLabel = { it: d.tab_it, gardening: d.tab_gardening, rest: d.tab_rest };

  listEl.innerHTML = filtered.map(p => `
    <article class="post">
      <div class="meta">
        <span>${catLabel[p.category]}</span>
        <span>${p.date}</span>
        <span class="lang-tag">${p.lang}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
    </article>
  `).join("");
}

function initBlogTabs(){
  const tabs = document.querySelectorAll(".cat-tabs button");
  if (!tabs.length) return;
  tabs.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      tabs.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      renderBlog(getLang());
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  markActiveNav();
  wireContactLinks();
  initBlogTabs();
  initLangSwitch(); // also triggers first renderCV/renderBlog
});
