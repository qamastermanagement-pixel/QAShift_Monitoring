document.addEventListener("DOMContentLoaded", () => {
  bindActions();
  initVerifyPage();
});

function bindActions() {
  const btnPrint = document.getElementById("btnPrint");
  const btnCopyLink = document.getElementById("btnCopyLink");

  if (btnPrint) {
    btnPrint.addEventListener("click", () => window.print());
  }

  if (btnCopyLink) {
    btnCopyLink.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setTopMessage("Link certificate berhasil dicopy.", "success");
      } catch (err) {
        setTopMessage("Gagal copy link. Silakan copy manual dari address bar.", "error");
      }
    });
  }
}

async function initVerifyPage() {
  const code = getCodeFromUrl();

  setText("pillCode", `code: ${code || "-"}`);
  setText("metaGenerated", `Generated: ${formatDateTimeDisplay(new Date())}`);
  setText("metaRef", `Reference: ${code ? "CERT-" + code : "-"}`);

  if (!code) {
    setTopMessage("Master Code belum ada di URL. Contoh: verify.html?code=A12C51", "error");
    setStatus("unknown", "CODE NOT FOUND IN URL", "Unknown");
    return;
  }

  const apiUrl = getVerifyApiUrl();
  if (!apiUrl) {
    setTopMessage("URL Apps Script untuk verify belum diset di config.js", "error");
    setStatus("unknown", "CONFIG ERROR", "Unknown");
    return;
  }

  try {
    setTopMessage("Memuat data certificate...", "");
    setStatus("unknown", "LOADING...", "Loading");

    const url = `${apiUrl}?code=${encodeURIComponent(code)}`;
    const res = await fetch(url, { method: "GET" });
    const result = await res.json();

    if (result.status !== "success" || !result.data) {
      throw new Error(result.message || "Data certificate tidak ditemukan.");
    }

    renderCertificate(result.data);
    setTopMessage("Certificate berhasil dimuat.", "success");
  } catch (err) {
    clearCertificate();
    setTopMessage(`Gagal memuat certificate: ${err.message}`, "error");
    setStatus("unknown", "DATA NOT FOUND", "Unknown");
  }
}

function renderCertificate(data) {
  setText("vMasterCode", data.masterCode || "-");
  setText("vType", data.type || "-");
  setText("vChannel", data.channel || "-");
  setText("vMasterName", data.masterName || "-");
  setText("vValue", data.value || "-");
  setText("vLastCal", formatDateDisplay(data.lastCalibration));
  setText("vNextCal", formatDateDisplay(data.nextCalibration));

  setText("pillCode", `code: ${data.masterCode || "-"}`);
  setText("metaRef", `Reference: CERT-${data.masterCode || "-"}`);

  const statusInfo = computeCalibrationStatus(data.nextCalibration);
  setStatus(statusInfo.className, statusInfo.boxText, statusInfo.text);
}

function clearCertificate() {
  setText("vMasterCode", "-");
  setText("vType", "-");
  setText("vChannel", "-");
  setText("vMasterName", "-");
  setText("vValue", "-");
  setText("vLastCal", "-");
  setText("vNextCal", "-");
}

function computeCalibrationStatus(nextCalibration) {
  if (!nextCalibration) {
    return {
      className: "unknown",
      boxText: "UNKNOWN",
      text: "Unknown"
    };
  }

  const dueDate = parseDateOnly(nextCalibration);
  if (!dueDate) {
    return {
      className: "unknown",
      boxText: "UNKNOWN",
      text: "Unknown"
    };
  }

  const today = new Date();
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  if (dueDate < todayOnly) {
    return {
      className: "expired",
      boxText: "EXPIRED",
      text: "Expired"
    };
  }

  return {
    className: "valid",
    boxText: "VALID",
    text: "Valid"
  };
}

function setStatus(className, boxText, statusText) {
  const box = document.getElementById("statusBox");
  const text = document.getElementById("vStatusText");

  if (box) {
    box.className = `status ${className}`;
    box.textContent = boxText;
  }

  if (text) {
    text.textContent = statusText;
  }
}

function setTopMessage(message, type) {
  const el = document.getElementById("topMessage");
  if (!el) return;

  el.textContent = message;
  el.className = "notice";
  if (type) el.classList.add(type);
}

function getCodeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return String(params.get("code") || "").trim();
}

function getVerifyApiUrl() {
  return (
    window.CONFIG?.VERIFY_APPS_SCRIPT_URL ||
    window.CONFIG?.APPS_SCRIPT_VERIFY_URL ||
    ""
  ).trim();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function parseDateOnly(value) {
  const s = String(value || "").trim();
  if (!s) return null;

  const isoMatch = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const y = Number(isoMatch[1]);
    const m = Number(isoMatch[2]) - 1;
    const d = Number(isoMatch[3]);
    return new Date(y, m, d);
  }

  const d = new Date(s);
  if (isNaN(d.getTime())) return null;
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function formatDateDisplay(value) {
  const d = parseDateOnly(value);
  if (!d) return value || "-";

  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function formatDateTimeDisplay(date) {
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}