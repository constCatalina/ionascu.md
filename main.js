(function () {
  "use strict";

  var LANGS = ["en", "de", "ro"];
  var page = document.body.getAttribute("data-page");

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem("ionascu-lang"); } catch (e) {}
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "en";
  }

  function setLang(lang) {
    try { localStorage.setItem("ionascu-lang", lang); } catch (e) {}
    document.documentElement.setAttribute("lang", lang);

    var common = window.I18N[lang].common;
    var dict = window.I18N[lang][page] || {};
    var merged = Object.assign({}, common, dict);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (merged[key] !== undefined) el.textContent = merged[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (merged[key] !== undefined) el.innerHTML = merged[key];
    });

    document.querySelectorAll("[data-i18n-list]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-list");
      var arr = merged[key];
      if (!arr) return;
      if (arr.length === 0) {
        el.hidden = true;
      } else {
        el.hidden = false;
        el.innerHTML = arr.map(function (line) { return "<li>" + line + "</li>"; }).join("");
      }
    });

    document.querySelectorAll("[data-i18n-tags]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-tags");
      var arr = merged[key];
      if (!arr) return;
      el.innerHTML = arr.map(function (tag) { return '<span class="tag">' + tag + "</span>"; }).join("");
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    if (page === "blog") updateEmptyState();
  }

  function updateEmptyState() {
    var active = document.querySelector(".tab[aria-selected='true']");
    var cat = active ? active.getAttribute("data-cat") : "all";
    var lang = getLang();
    var dict = window.I18N[lang].blog;
    var emptyKey = "empty_" + cat;
    var emptyEl = document.getElementById("empty-state");
    if (emptyEl && dict[emptyKey]) emptyEl.innerHTML = '<span>&gt;</span> ' + dict[emptyKey];

    document.querySelectorAll(".post").forEach(function (post) {
      var show = cat === "all" || post.getAttribute("data-cat") === cat;
      post.hidden = !show;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(getLang());

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });

    if (page === "blog") {
      document.querySelectorAll(".tab").forEach(function (tab) {
        tab.addEventListener("click", function () {
          document.querySelectorAll(".tab").forEach(function (t) { t.setAttribute("aria-selected", "false"); });
          tab.setAttribute("aria-selected", "true");
          updateEmptyState();
        });
      });
    }
  });
})();
