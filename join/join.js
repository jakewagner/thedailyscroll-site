(function initJoinPage() {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get("code") || "").trim().toUpperCase();
  const code = raw.replace(/[^A-Z0-9]/g, "");

  const codeEl = document.getElementById("join-code");
  const missing = document.getElementById("join-missing");
  const ready = document.getElementById("join-ready");
  const copyBtn = document.getElementById("copy-code");
  const openApp = document.getElementById("open-app");
  const links = document.getElementById("join-links");
  const status = document.getElementById("copy-status");

  if (!code) {
    document.title = "Invite isn’t valid — Daily Scroll Club";
    missing.hidden = false;
    return;
  }

  codeEl.hidden = false;
  codeEl.textContent = code;
  ready.hidden = false;

  const webURL = `${window.location.origin}/join/?code=${encodeURIComponent(code)}`;
  const appURL = `thedailyscroll://chapter/join?code=${encodeURIComponent(code)}`;
  const onIPhone = /iPhone/i.test(navigator.userAgent || "");

  if (onIPhone) {
    openApp.hidden = false;
    openApp.href = appURL;
    copyBtn.className = "join__text-btn";
    links.prepend(copyBtn);
  }

  function selectCode() {
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(codeEl);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  async function copyInvite() {
    try {
      await navigator.clipboard.writeText(webURL);
      return true;
    } catch {
      return false;
    }
  }

  copyBtn.addEventListener("click", async () => {
    const copied = await copyInvite();
    if (copied) {
      copyBtn.textContent = "Copied";
      status.textContent = "Copied";
      return;
    }
    selectCode();
    copyBtn.textContent = "Copy the code";
    status.textContent = "Copy the code";
  });
})();
