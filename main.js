/**
 * Daily Scroll Club — marketing page
 */
document.documentElement.classList.add("js");

const STORE_URL = "https://apps.apple.com/app/id6792401715";

(function initStoreCtas() {
  document.querySelectorAll(".store-cta").forEach((btn) => {
    btn.href = STORE_URL;
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

(function initClubForTicker() {
  const viewport = document.querySelector("[data-club-for]");
  if (!viewport) return;

  const items = Array.from(viewport.querySelectorAll(".club-for__item"));
  if (items.length < 2) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = items.findIndex((item) => item.classList.contains("is-current"));
  if (current < 0) current = 0;

  let bag = [];
  let lastTilt = null;

  function nextTilt(previous) {
    const options = [-2, 0, 2].filter((tilt) => tilt !== previous);
    return options[Math.floor(Math.random() * options.length)];
  }

  function applyTilt(item, tilt) {
    item.style.setProperty("--tilt", `${tilt}deg`);
  }

  lastTilt = nextTilt(null);
  applyTilt(items[current], lastTilt);

  function shuffle(list) {
    const next = list.slice();
    for (let i = next.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const hold = next[i];
      next[i] = next[j];
      next[j] = hold;
    }
    return next;
  }

  function takeNext() {
    if (!bag.length) {
      bag = shuffle(items.map((_, index) => index).filter((index) => index !== current));
    }
    return bag.pop();
  }

  function tick() {
    const next = takeNext();
    const outgoing = items[current];
    const incoming = items[next];
    lastTilt = nextTilt(lastTilt);
    applyTilt(incoming, lastTilt);

    incoming.classList.add("is-enter");
    incoming.offsetWidth;

    outgoing.classList.remove("is-current");
    outgoing.classList.add("is-exit");
    incoming.classList.remove("is-enter");
    incoming.classList.add("is-current");

    window.setTimeout(() => {
      outgoing.classList.add("is-reset");
      outgoing.classList.remove("is-exit");
      outgoing.offsetWidth;
      outgoing.classList.remove("is-reset");
    }, reduceMotion ? 0 : 520);

    current = next;
  }

  let timer = 0;

  function play() {
    if (timer) return;
    timer = window.setInterval(tick, 2500);
  }

  function pause() {
    window.clearInterval(timer);
    timer = 0;
  }

  if (!("IntersectionObserver" in window)) {
    play();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) play();
        else pause();
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(viewport);
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
