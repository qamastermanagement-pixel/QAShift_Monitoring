// ==========================================
// form0.js — Channel 0 (Accordion per Machine)
// ==========================================

let MASTER_DATA = [];

// =========================
// REMARK 6 OPSI (UPDATED)
// =========================
const REMARK_TYPE_LABELS = {
  OPT1: "Deviasi nilai (master tetap)",
  OPT2: "Deviasi nilai (master diganti)",
  OPT3: "Master hilang",
  OPT4: "Cacat visual",
  OPT5: "Marking hilang",
  OPT6: "Lainnya",
};

const REMARK_HELPER = {
  OPT1: "Remark hanya boleh diisi angka (deviasi nilai). Contoh: +5 / -2 / 0.02 / -15;-16;-17",
  OPT2: "Remark hanya boleh diisi angka (deviasi nilai). Contoh: +5 / -2 / 0.02 / -15;-16;-17",
  OPT3: "Opsional: jelaskan kondisi (contoh: master tidak ditemukan).",
  OPT4: "Opsional: jelaskan cacat visual (contoh: baret/retak/korosi).",
  OPT5: "Opsional: jelaskan kondisi (contoh: marking pudar/hilang total).",
  OPT6: "Wajib: jelaskan kondisi/temuan lainnya.",
};

// ✅ NEW: textarea opsional khusus OPT1/OPT2 (temuan tambahan)
const REMARK_OPT_HELPER = {
  OPT1: "Opsional: isi jika ada temuan/kondisi tambahan.",
  OPT2: "Opsional: isi jika ada temuan/kondisi tambahan.",
};

const REMARK_VALUE_EXCEPTIONS = new Set([]);

function isValidDeviationValue(raw) {
  const v = String(raw ?? "").trim();
  if (!v) return false;
  if (REMARK_VALUE_EXCEPTIONS.has(v)) return true;

  const norm = v.replace(/\s+/g, "").replace(/,/g, ".");
  const parts = norm.split(";").filter(Boolean);
  if (!parts.length) return false;

  const oneNumberRegex = /^[+-]?(\d+(\.\d+)?|\.\d+)$/;
  return parts.every((p) => oneNumberRegex.test(p));
}

// =========================
// Helpers UI
// =========================
function showLoading(text = "Memuat data...") {
  const modal = document.getElementById("loadingModal");
  const label = document.getElementById("loadingText");
  if (label) label.textContent = text;
  if (modal) modal.classList.add("show");
}
function hideLoading() {
  const modal = document.getElementById("loadingModal");
  if (modal) modal.classList.remove("show");
}

function cleanStr(v) {
  return v ? String(v).replace(/(^"|"$)/g, "").trim() : "";
}
function parseRow(line) {
  return line.split(",").map(cleanStr);
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function uniqSorted(arr) {
  return [...new Set(arr.filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b))
  );
}
function escapeHtml(str) {
  const s = String(str ?? "");
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// fallback code kalau kosong
function generateCode(channel, machine, bearingType, master) {
  const base = `${channel}|${machine}|${bearingType}|${master}`
    .toUpperCase()
    .replace(/\s+/g, " ");
  let h = 0;
  for (let i = 0; i < base.length; i++) h = (h * 31 + base.charCodeAt(i)) >>> 0;
  return `CH0-${h.toString(16).toUpperCase().slice(0, 8)}`;
}

// =========================
// Master loading (CSV with header mapping)
// Header minimal: Code,Channel,Machine,BearingType,Category,Master (order bebas)
// =========================
async function fetchMasterCH0() {
  showLoading("Memuat master CH0...");
  try {
    const url = window.CONFIG?.MASTER_DATA_URL_CH0;
    if (!url) {
      alert("CONFIG.MASTER_DATA_URL_CH0 belum diset di config.js");
      return;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const csvText = await res.text();

    const rows = csvText
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);

    if (rows.length < 2) {
      MASTER_DATA = [];
      return;
    }

    const headerCols = parseRow(rows[0]).map((h) => h.toLowerCase());
    const idx = {
      code: headerCols.indexOf("code"),
      channel: headerCols.indexOf("channel"),
      bearingType: headerCols.indexOf("bearingtype"),
      category: headerCols.indexOf("category"),
      machine: headerCols.indexOf("machine"),
      master: headerCols.indexOf("master"),
    };

    if (idx.channel < 0 || idx.machine < 0 || idx.master < 0) {
      alert("Header CSV tidak sesuai. Minimal harus ada: Channel, Machine, Master.");
      MASTER_DATA = [];
      return;
    }

    MASTER_DATA = [];
    for (let i = 1; i < rows.length; i++) {
      const cols = parseRow(rows[i]);

      const channel = cleanStr(cols[idx.channel] ?? "");
      const machine = cleanStr(cols[idx.machine] ?? "");
      const master = cleanStr(cols[idx.master] ?? "");
      if (!channel || !machine || !master) continue;

      const code = idx.code >= 0 ? cleanStr(cols[idx.code] ?? "") : "";
      const bearingType =
        idx.bearingType >= 0 ? cleanStr(cols[idx.bearingType] ?? "") : "";
      const category =
        idx.category >= 0 ? cleanStr(cols[idx.category] ?? "") : "";

      MASTER_DATA.push({ code, channel, machine, bearingType, category, master });
    }
  } catch (err) {
    console.error(err);
    alert("Gagal memuat master CH0.\n" + err.message);
  } finally {
    hideLoading();
  }
}

function fillChannelDropdown() {
  const el = document.getElementById("channel");
  if (!el) return;

  el.innerHTML = `<option value="">Pilih Channel</option>`;
  const channels = uniqSorted(MASTER_DATA.map((x) => x.channel));
  channels.forEach((ch) => {
    const opt = document.createElement("option");
    opt.value = ch;
    opt.textContent = ch;
    el.appendChild(opt);
  });
}

// =========================
// DOM Ready
// =========================
document.addEventListener("DOMContentLoaded", async () => {
  const today = new Date().toISOString().split("T")[0];
  const tanggalInput = document.getElementById("tanggal");
  if (tanggalInput) tanggalInput.value = today;

  await fetchMasterCH0();
  fillChannelDropdown();

  const basicForm = document.getElementById("basicInfoForm");
  if (basicForm) {
    basicForm.addEventListener("submit", (e) => {
      e.preventDefault();
      goToStep2();
    });
  }

  const masterForm = document.getElementById("masterCheckForm");
  if (masterForm) {
    masterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitDataMultiRequest(); // ✅ multi submit per machine
    });
  }
});

// =========================
// Step control
// =========================
function goToStep2() {
  const tanggal = (document.getElementById("tanggal") || {}).value;
  const shift = (document.getElementById("shift") || {}).value;
  const npk = ((document.getElementById("npk") || {}).value || "").trim();
  const channel = (document.getElementById("channel") || {}).value;

  if (!tanggal || !shift || !npk || !channel) {
    alert("Lengkapi semua field informasi dasar!");
    return;
  }

  sessionStorage.setItem("tanggal", tanggal);
  sessionStorage.setItem("shift", shift);
  sessionStorage.setItem("npk", npk);
  sessionStorage.setItem("channel", channel);

  const channelRows = MASTER_DATA.filter((x) => x.channel === channel);
  if (channelRows.length === 0) {
    alert("Tidak ada master untuk channel tersebut.");
    return;
  }

  const machines = uniqSorted(channelRows.map((x) => x.machine));
  if (machines.length === 0) {
    alert("Tidak ada machine untuk channel tersebut.");
    return;
  }

  setText("selectedChannel", channel);
  setText("totalMachines", String(machines.length));
  setText("progressMachines", `0/${machines.length}`);
  setText("totalNg", "0");

  renderMachineAccordion(channel, machines);

  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  if (step1) {
    step1.classList.remove("active");
    step1.style.display = "none";
  }
  if (step2) {
    step2.classList.add("active");
    step2.style.display = "block";
  }

  updateGlobalProgress();
}

function goToStep1() {
  const step2 = document.getElementById("step2");
  const step1 = document.getElementById("step1");
  if (step2) {
    step2.classList.remove("active");
    step2.style.display = "none";
  }
  if (step1) {
    step1.classList.add("active");
    step1.style.display = "block";
  }
}

// =========================
// Render accordion per machine
// =========================
function renderMachineAccordion(channel, machines) {
  const wrap = document.getElementById("machineAccordion");
  if (!wrap) {
    alert("ERROR: container #machineAccordion tidak ditemukan di HTML.");
    return;
  }

  wrap.innerHTML = "";

  machines.forEach((machine, mIdx) => {
    const section = document.createElement("div");
    section.className = "machine-section";
    section.dataset.machine = machine;
    section.dataset.bearing = "";
    section.dataset.complete = "0";

    const bearingOptions = uniqSorted(
      MASTER_DATA
        .filter((x) => x.channel === channel && x.machine === machine)
        .map((x) => x.bearingType)
    );

    const bearingsHtml = bearingOptions.length
      ? bearingOptions
          .map((b) => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`)
          .join("")
      : "";

    section.innerHTML = `
      <div class="machine-header" style="display:flex; justify-content:space-between; align-items:center; gap:12px; cursor:pointer; padding:12px 10px; border:1px solid #e5e7eb; border-radius:10px; margin:12px 0; background:#fff;">
        <div>
          <div style="font-weight:700;">${mIdx + 1}. ${escapeHtml(machine)}</div>
          <div class="machine-mini" style="font-size:12px; color:#64748b; margin-top:3px;">0/0 terisi | NG: 0</div>
        </div>
        <div class="machine-badge" style="font-weight:700; font-size:12px; padding:6px 10px; border-radius:999px; background:#fee2e2; color:#991b1b;">
          ❌ Belum lengkap
        </div>
      </div>

      <div class="machine-body" style="display:${mIdx === 0 ? "block" : "none"}; padding:0 6px 14px 6px;">
        <div class="form-group" style="margin-top:6px;">
          <label class="form-label">Tipe Bearing <span class="required">*</span></label>
          <select class="form-select bearing-select" ${bearingOptions.length ? "" : "disabled"}>
            <option value="">${bearingOptions.length ? "Pilih Tipe Bearing" : "BearingType belum ada di master data"}</option>
            ${bearingsHtml}
          </select>
          <p class="helper-text">${bearingOptions.length ? "Pilih tipe bearing untuk memunculkan master." : "⚠️ Lengkapi master data: tambahkan BearingType untuk machine ini."}</p>
        </div>

        <div class="machine-masters" style="display:none;"></div>
      </div>
    `;

    // accordion toggle
    const header = section.querySelector(".machine-header");
    const body = section.querySelector(".machine-body");
    header.addEventListener("click", () => {
      const isOpen = body.style.display !== "none";
      body.style.display = isOpen ? "none" : "block";
    });

    // bearing change
    const bearingSelect = section.querySelector(".bearing-select");
    const mastersBox = section.querySelector(".machine-masters");

    bearingSelect.addEventListener("change", () => {
      const newBearing = bearingSelect.value.trim();

      const hadMastersRendered = mastersBox.querySelector(".master-item");
      if (hadMastersRendered) {
        const ok = confirm(
          "Mengganti Tipe Bearing akan mereset isian OK/NG & Remark di machine ini. Lanjut?"
        );
        if (!ok) {
          bearingSelect.value = section.dataset.bearing || "";
          return;
        }
      }

      section.dataset.bearing = newBearing;
      mastersBox.innerHTML = "";
      mastersBox.style.display = "none";

      if (!newBearing) {
        updateGlobalProgress();
        return;
      }

      const list = MASTER_DATA.filter(
        (x) =>
          x.channel === channel &&
          x.machine === machine &&
          String(x.bearingType || "") === newBearing
      );

      if (list.length === 0) {
        alert(`Tidak ada master untuk ${machine} dengan BearingType ${newBearing}.`);
        updateGlobalProgress();
        return;
      }

      mastersBox.style.display = "block";
      renderMastersInto(mastersBox, list, `${mIdx}`);

      updateGlobalProgress();
    });

    wrap.appendChild(section);
  });

  updateGlobalProgress();
}

// =========================
// Render master cards
// =========================
function renderMastersInto(container, list, prefix) {
  container.innerHTML = "";

  list.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "master-item";
    div.dataset.code = (item.code || "").trim();
    div.dataset.master = item.master;
    div.dataset.status = "";

    div.innerHTML = `
      <div class="master-item-header">
        <div class="master-name">${idx + 1}. ${escapeHtml(item.master)}</div>
        <div class="status-buttons">
          <button type="button" class="btn-ok" data-action="ok">OK</button>
          <button type="button" class="btn-ng" data-action="ng">NG</button>
        </div>
      </div>

      <div class="remark-field">
        <div style="margin-top:10px; font-weight:600;">Jenis Remark</div>

        <div class="remark-type-group" style="display:block; margin-top:6px;">
          ${["OPT1","OPT2","OPT3","OPT4","OPT5","OPT6"].map(opt => `
            <label style="display:block; margin:6px 0; cursor:pointer;">
              <input type="radio" name="remarkType_${prefix}_${idx}" value="${opt}">
              ${REMARK_TYPE_LABELS[opt]}
            </label>
          `).join("")}
        </div>

        <div class="remark-value-box" style="display:none; margin-top:10px;">
          <input type="text" class="form-input remark-value" placeholder="Contoh: +5 / -2 / 0.02 / -15;-16;-17">
          <div class="remark-value-help" style="margin-top:6px; font-size:12px; color:#64748b;"></div>
          <div class="remark-value-err" style="display:none; color:red; margin-top:6px;"></div>
        </div>

        <!-- ✅ NEW: textarea opsional khusus OPT1/OPT2 -->
        <div class="remark-opt-box" style="display:none; margin-top:10px;">
          <textarea class="remark-textarea remark-opt-detail" placeholder="Keterangan tambahan (opsional)..."></textarea>
          <div class="remark-opt-help" style="margin-top:6px; font-size:12px; color:#64748b;"></div>
        </div>

        <div class="remark-detail-box" style="display:none; margin-top:10px;">
          <textarea class="remark-textarea remark-detail" placeholder="Jelaskan kondisi..."></textarea>
          <div class="remark-detail-help" style="margin-top:6px; font-size:12px; color:#64748b;"></div>
          <div class="remark-detail-err" style="display:none; color:red; margin-top:6px;"></div>
        </div>
      </div>
    `;

    const btnOk = div.querySelector(".btn-ok");
    const btnNg = div.querySelector(".btn-ng");
    const remarkField = div.querySelector(".remark-field");

    const radios = div.querySelectorAll(`input[name="remarkType_${prefix}_${idx}"]`);
    const vBox = div.querySelector(".remark-value-box");
    const oBox = div.querySelector(".remark-opt-box"); // NEW
    const dBox = div.querySelector(".remark-detail-box");

    const vInput = div.querySelector(".remark-value");
    const oInput = div.querySelector(".remark-opt-detail"); // NEW
    const dInput = div.querySelector(".remark-detail");

    const vHelp = div.querySelector(".remark-value-help");
    const oHelp = div.querySelector(".remark-opt-help"); // NEW
    const dHelp = div.querySelector(".remark-detail-help");

    const vErr = div.querySelector(".remark-value-err");
    const dErr = div.querySelector(".remark-detail-err");

    function resetRemarkUI() {
      remarkField.classList.remove("show");
      radios.forEach((r) => (r.checked = false));

      if (vBox) vBox.style.display = "none";
      if (oBox) oBox.style.display = "none";
      if (dBox) dBox.style.display = "none";

      if (vInput) vInput.value = "";
      if (oInput) oInput.value = "";
      if (dInput) dInput.value = "";

      if (vErr) vErr.style.display = "none";
      if (dErr) dErr.style.display = "none";

      if (vHelp) vHelp.textContent = "";
      if (oHelp) oHelp.textContent = "";
      if (dHelp) dHelp.textContent = "";
    }

    function applyRemarkMode(opt) {
      if (vErr) vErr.style.display = "none";
      if (dErr) dErr.style.display = "none";

      if (vBox) vBox.style.display = "none";
      if (oBox) oBox.style.display = "none";
      if (dBox) dBox.style.display = "none";

      if (opt === "OPT1" || opt === "OPT2") {
        // OPT1/2: angka deviasi (wajib) + temuan tambahan (opsional)
        if (vBox) vBox.style.display = "block";
        if (vHelp) vHelp.textContent = REMARK_HELPER[opt];

        if (oBox) oBox.style.display = "block";
        if (oHelp) oHelp.textContent = REMARK_OPT_HELPER[opt] || "Opsional.";

        // pastikan detail OPT3/4/5/6 kosong
        if (dHelp) dHelp.textContent = "";
        if (dInput) dInput.value = "";
        return;
      }

      if (opt === "OPT3" || opt === "OPT4" || opt === "OPT5" || opt === "OPT6") {
        // OPT3/4/5/6: detail utama (textarea)
        if (dBox) dBox.style.display = "block";
        if (dHelp) dHelp.textContent = REMARK_HELPER[opt];

        // reset value deviasi + temuan opsional OPT1/2
        if (vHelp) vHelp.textContent = "";
        if (vInput) vInput.value = "";
        if (oInput) oInput.value = "";
        if (oHelp) oHelp.textContent = "";
      }
    }

    radios.forEach((r) =>
      r.addEventListener("change", () => {
        applyRemarkMode(r.value);
        updateGlobalProgress();
      })
    );

    // OK toggle
    btnOk.addEventListener("click", () => {
      const active = btnOk.classList.contains("active");
      if (active) {
        btnOk.classList.remove("active");
        div.dataset.status = "";
        resetRemarkUI();
        updateGlobalProgress();
        return;
      }
      btnOk.classList.add("active");
      btnNg.classList.remove("active");
      div.dataset.status = "OK";
      resetRemarkUI();
      updateGlobalProgress();
    });

    // NG toggle
    btnNg.addEventListener("click", () => {
      const active = btnNg.classList.contains("active");
      if (active) {
        btnNg.classList.remove("active");
        div.dataset.status = "";
        resetRemarkUI();
        updateGlobalProgress();
        return;
      }
      btnNg.classList.add("active");
      btnOk.classList.remove("active");
      div.dataset.status = "NG";
      remarkField.classList.add("show");
      updateGlobalProgress();
    });

    // default hidden
    resetRemarkUI();
    container.appendChild(div);
  });
}

// =========================
// Progress calc
// =========================
function updateGlobalProgress() {
  const channel = sessionStorage.getItem("channel") || "";
  const sections = Array.from(document.querySelectorAll("#machineAccordion .machine-section"));

  let doneMachines = 0;
  let totalNg = 0;

  sections.forEach((sec) => {
    const bearing = (sec.dataset.bearing || "").trim();
    const cards = Array.from(sec.querySelectorAll(".machine-masters .master-item"));

    const total = cards.length;
    const filled = cards.filter((c) => (c.dataset.status || "") !== "").length;
    const ngCount = cards.filter((c) => (c.dataset.status || "") === "NG").length;
    totalNg += ngCount;

    const complete = Boolean(bearing) && total > 0 && filled === total;
    sec.dataset.complete = complete ? "1" : "0";
    if (complete) doneMachines += 1;

    const mini = sec.querySelector(".machine-mini");
    if (mini) mini.textContent = `${filled}/${total} terisi | NG: ${ngCount}`;

    const badge = sec.querySelector(".machine-badge");
    if (badge) {
      if (!bearing || total === 0 || !complete) {
        badge.textContent = "❌ Belum lengkap";
        badge.style.background = "#fee2e2";
        badge.style.color = "#991b1b";
      } else if (ngCount > 0) {
        badge.textContent = "⚠️ Lengkap (ada NG)";
        badge.style.background = "#ffedd5";
        badge.style.color = "#9a3412";
      } else {
        badge.textContent = "✅ Lengkap (OK semua)";
        badge.style.background = "#dcfce7";
        badge.style.color = "#166534";
      }
    }
  });

  setText("selectedChannel", channel);
  setText("totalMachines", String(sections.length));
  setText("progressMachines", `${doneMachines}/${sections.length}`);
  setText("totalNg", String(totalNg));

  const btnSubmit = document.getElementById("btnSubmit");
  if (btnSubmit) btnSubmit.disabled = !(sections.length > 0 && doneMachines === sections.length);
}

// =========================
// SUBMIT (multi request per machine, format lama Apps Script)
// =========================
async function submitDataMultiRequest() {
  updateGlobalProgress();

  const sections = Array.from(document.querySelectorAll("#machineAccordion .machine-section"));
  const notComplete = sections.find((s) => s.dataset.complete !== "1");
  if (notComplete) {
    alert(`Masih ada machine yang belum lengkap: ${notComplete.dataset.machine}`);
    const body = notComplete.querySelector(".machine-body");
    if (body) body.style.display = "block";
    notComplete.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const tanggal = sessionStorage.getItem("tanggal");
  const shift = sessionStorage.getItem("shift");
  const npk = sessionStorage.getItem("npk");
  const channel = sessionStorage.getItem("channel");
  const category = "gauging";

  const url = window.CONFIG?.APPS_SCRIPT_URL;
  if (!url) {
    alert("CONFIG.APPS_SCRIPT_URL belum diset di config.js");
    return;
  }

  showLoading("Menyimpan data...");

  try {
    let insertedTotal = 0;

    // kirim 1x per machine (karena Apps Script butuh bearingType tunggal)
    for (const sec of sections) {
      const machine = sec.dataset.machine;
      const bearingType = (sec.dataset.bearing || "").trim();

      const masters = [];
      const cards = Array.from(sec.querySelectorAll(".machine-masters .master-item"));

      for (const card of cards) {
        const status = card.dataset.status || "";
        const name = card.dataset.master || "";
        let code = (card.dataset.code || "").trim();

        if (!code) code = generateCode(channel, machine, bearingType, name);

        // remark fields
        let remark = "";
        let remarkType = "";
        let remarkValue = "";
        let remarkDetail = "";

        if (status === "NG") {
          const checked = card.querySelector('input[type="radio"][name^="remarkType_"]:checked');
          if (!checked) {
            throw new Error(`Jenis Remark belum dipilih: ${machine} - ${name}`);
          }

          const opt = checked.value;
          remarkType = REMARK_TYPE_LABELS[opt] || "";

          const vInput = card.querySelector(".remark-value");
          const oInput = card.querySelector(".remark-opt-detail"); // ✅ opsional OPT1/2
          const dInput = card.querySelector(".remark-detail");     // OPT3/4/5/6

          const vErr = card.querySelector(".remark-value-err");
          const dErr = card.querySelector(".remark-detail-err");
          if (vErr) vErr.style.display = "none";
          if (dErr) dErr.style.display = "none";

          if (opt === "OPT1" || opt === "OPT2") {
            const v = (vInput ? vInput.value : "").trim();
            if (!v) {
              if (vErr) {
                vErr.textContent = "Wajib diisi angka deviasi.";
                vErr.style.display = "block";
              }
              throw new Error(`Remark Value wajib (angka deviasi): ${machine} - ${name}`);
            }
            if (!isValidDeviationValue(v)) {
              if (vErr) {
                vErr.textContent = "Format tidak valid. Contoh: +5 / -2 / 0.02 / -15;-16;-17";
                vErr.style.display = "block";
              }
              throw new Error(`Remark Value format salah: ${machine} - ${name}`);
            }

            remarkValue = v; // kolom K
            remarkDetail = oInput ? oInput.value.trim() : ""; // kolom M (opsional)
            remark = remarkDetail
              ? `${remarkType}: ${remarkValue} | ${remarkDetail}`
              : `${remarkType}: ${remarkValue}`;
          }

          if (opt === "OPT3") {
            // Master hilang (opsional detail)
            remarkValue = "";
            remarkDetail = (dInput ? dInput.value : "").trim(); // opsional
            remark = remarkDetail ? `${remarkType}: ${remarkDetail}` : `${remarkType}`;
          }

          if (opt === "OPT4") {
            // Cacat visual (opsional detail)
            remarkValue = "";
            remarkDetail = (dInput ? dInput.value : "").trim(); // opsional
            remark = remarkDetail ? `${remarkType}: ${remarkDetail}` : `${remarkType}`;
          }

          if (opt === "OPT5") {
            // Marking hilang (opsional detail)
            remarkValue = "";
            remarkDetail = (dInput ? dInput.value : "").trim(); // opsional
            remark = remarkDetail ? `${remarkType}: ${remarkDetail}` : `${remarkType}`;
          }

          if (opt === "OPT6") {
            // Lainnya (WAJIB detail) -> pindahan dari OPT4 lama
            const d = (dInput ? dInput.value : "").trim();
            if (!d) {
              if (dErr) {
                dErr.textContent = "Wajib diisi untuk opsi Lainnya.";
                dErr.style.display = "block";
              }
              throw new Error(`Remark Detail wajib (Lainnya): ${machine} - ${name}`);
            }
            remarkValue = "";
            remarkDetail = d;
            remark = `${remarkType}: ${remarkDetail}`;
          }
        }

        masters.push({ code, name, status, remark, remarkType, remarkValue, remarkDetail });
      }

      const payload = { tanggal, shift, npk, channel, bearingType, category, masters };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const txt = await res.text();
      let out = null;
      try { out = JSON.parse(txt); } catch (e) {}

      if (!res.ok || !out || out.status !== "success") {
        throw new Error(out?.message || txt || `HTTP ${res.status}`);
      }

      insertedTotal += masters.length;
    }

    alert(`Data berhasil disimpan! Total baris: ${insertedTotal}`);
    sessionStorage.clear();
    window.location.href = "form0.html";
  } catch (err) {
    console.error(err);
    alert("Gagal menyimpan data.\n" + err.message);
  } finally {
    hideLoading();
  }
}
