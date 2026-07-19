/**
 * Daily Scroll — marketing page
 *
 * STORE_URL: set this when App Store / Play Store listing is live.
 * Both Coming soon CTAs will become real links automatically.
 */
const STORE_URL = "";

(function initStoreCtas() {
  const buttons = [
    document.getElementById("store-cta"),
    document.getElementById("store-cta-footer"),
  ].filter(Boolean);

  if (!STORE_URL) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });
    return;
  }

  buttons.forEach((btn) => {
    btn.href = STORE_URL;
    btn.removeAttribute("aria-disabled");
    btn.classList.remove("btn--coming-soon");
    btn.textContent = "Get the app";
    btn.style.pointerEvents = "";
    btn.style.cursor = "";
  });

  document.querySelectorAll(".cta-note").forEach((note) => {
    note.hidden = true;
  });
})();

(function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
})();

(function initReveals() {
  const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!nodes.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((node) => observer.observe(node));
})();

(function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) {
        history.replaceState(null, "", id);
      }
    });
  });
})();
