(function initJoinPage() {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get("code") || "").trim().toUpperCase();
  const code = raw.replace(/[^A-Z0-9]/g, "");

  const ready = document.getElementById("join-ready");
  const missing = document.getElementById("join-missing");
  const codeEl = document.getElementById("join-code");
  const copyBtn = document.getElementById("copy-code");
  const openApp = document.getElementById("open-app");
  const status = document.getElementById("copy-status");

  if (!code) {
    missing.hidden = false;
    return;
  }

  ready.hidden = false;
  codeEl.textContent = code;

  const appURL = `thedailyscroll://group/join?code=${encodeURIComponent(code)}`;
  openApp.href = appURL;

  function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || "");
  }

  if (isMobile()) {
    // Best-effort handoff; desktop ignores custom schemes safely.
    window.setTimeout(() => {
      window.location.href = appURL;
    }, 400);
  }

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code);
      status.textContent = "Code copied.";
    } catch {
      status.textContent = "Select the code and copy it manually.";
    }
  });
})();
