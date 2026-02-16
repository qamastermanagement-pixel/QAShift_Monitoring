// ===================================================
// form.js (AUTO UI CARD) + FETCH MASTER CSV + REMARK 4 OPSI
// - UI Step2 pakai CARD (master-item) seperti versi lama
// - Remark 4 opsi (OPT1..OPT4) vertical
// - AUTO buat #masterList kalau HTML Step2 tidak punya
// - AUTO sembunyikan header table "No Master Status Remark" jika masih ada di HTML
// - Payload masters: remarkValue, remarkType, remarkDetail
//
// UPDATE (sesuai request):
// - OPT1 & OPT2: tambah textarea opsional (keterangan tambahan)
//   -> disubmit masuk ke remarkDetail (bukan kolom baru)
//   -> remarkValue tetap khusus angka deviasi (tetap wajib + validasi sama)
// ===================================================

let MASTER_DATA = [];
let CHANNEL_MASTERS = {};

function cleanStr(v) {
  return String(v ?? "").replace(/(^"|"$)/g, "").trim();
}
function normalizeChannel(raw) {
  const s = cleanStr(raw);
  const m = s.match(/(\d+)/);
  return m ? m[1] : s;
}
function normalizeCategory(raw) {
  return cleanStr(raw).toLowerCase();
}

// CSV robust
function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (ch === '"' && line[i + 1] === '"') {
      cur += '"';
      i++;
      continue;
    }
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

function showLoading(text) {
  const loadingModal = document.getElementById("loadingModal");
  if (!loadingModal) return;
  const p = loadingModal.querySelector("p");
  if (p) p.textContent = text || "Memuat...";
  loadingModal.classList.add("show");
  loadingModal.style.display = "flex";
}
function hideLoading() {
  const loadingModal = document.getElementById("loadingModal");
  if (!loadingModal) return;
  loadingModal.classList.remove("show");
  loadingModal.style.display = "";
}

function buildChannelMastersFromMasterData() {
  const obj = {};
  for (const row of MASTER_DATA) {
    const channel = normalizeChannel(row.channel);
    const bearingType = cleanStr(row.bearingType);
    const categoryKey = normalizeCategory(row.category);
    const name = cleanStr(row.name);
    const code = cleanStr(row.code);

    if (!channel || !bearingType || !categoryKey || !name) continue;

    if (!obj[channel]) obj[channel] = {};
    if (!obj[channel][bearingType]) obj[channel][bearingType] = {};
    if (!obj[channel][bearingType][categoryKey]) obj[channel][bearingType][categoryKey] = [];

    obj[channel][bearingType][categoryKey].push({
      channel,
      bearingType,
      category: categoryKey,
      name,
      code,
    });
  }
  CHANNEL_MASTERS = obj;
}

// =========================
// REMARK 4 OPSI
// =========================
const REMARK_TYPE_LABELS = {
  OPT1: "Deviasi nilai (master tetap)",
  OPT2: "Deviasi nilai (master diganti)",
  OPT3: "Master rusak/hilang (ganti baru)",
  OPT4: "Lainnya",
};

const REMARK_HELPER = {
  OPT1: "Remark hanya boleh diisi angka (deviasi nilai). Contoh: +5 / -2 / 0.02 / -15;-16;-17",
  OPT2: "Remark hanya boleh diisi angka (deviasi nilai). Contoh: +5 / -2 / 0.02 / -15;-16;-17",
  OPT3: "Opsional: jelaskan kondisi (contoh: holder patah / master hilang).",
  OPT4: "Wajib: jelaskan kondisi/temuan lainnya.",
};

// NEW: helper untuk textarea opsional OPT1/OPT2
const REMARK_OPT_HELPER = {
  OPT1: "Opsional: isi jika ada temuan/kondisi tambahan.",
  OPT2: "Opsional: isi jika ada temuan/kondisi tambahan.",
};

const REMARK_VALUE_EXCEPTIONS = new Set([]);

function isValidDeviationValue(raw) {
  const v = String(raw ?? "").trim();
  if (!v) return false;
  if (REMARK_VALUE_EXCEPTIONS.has(v)) return true;

  // hilangkan spasi, ubah koma -> titik
  const norm = v.replace(/\s+/g, "").replace(/,/g, ".");

  // support multi nilai dipisah ';'  contoh: -13;-14;-5  atau +5;-2;0.02
  const parts = norm.split(";").filter(Boolean);
  if (!parts.length) return false;

  const oneNumberRegex = /^[+-]?(\d+(\.\d+)?|\.\d+)$/;
  return parts.every((p) => oneNumberRegex.test(p));
}

// =========================
// FIX: Sembunyikan header table "No Master Status Remark" (sisa HTML lama)
// =========================
function hideLegacyTableHeader() {
  const step2 = document.getElementById("step2");
  if (!step2) return;

  const ths = Array.from(step2.querySelectorAll("th")).map((th) =>
    cleanStr(th.textContent).toLowerCase()
  );

  const hasLegacyHeader =
    ths.includes("no") &&
    ths.includes("master") &&
    ths.includes("status") &&
    ths.includes("remark");

  if (!hasLegacyHeader) return;

  const thAny = step2.querySelector("th");
  const table = thAny ? thAny.closest("table") : null;

  if (table) {
    table.style.display = "none";
  } else {
    const thead = thAny ? thAny.closest("thead") : null;
    if (thead) thead.style.display = "none";
  }
}

// =========================
// FETCH MASTER
// =========================
async function fetchMasterData() {
  showLoading("Memuat data master...");

  try {
    if (!window.CONFIG) throw new Error("config.js belum kebaca");
    const url = window.CONFIG.MASTER_DATA_URL;
    if (!url) throw new Error("CONFIG.MASTER_DATA_URL kosong");

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const csvText = await res.text();
    const lines = csvText.split(/\r?\n/).filter((l) => l.trim() !== "");
    if (lines.length < 2) throw new Error("CSV kosong / header tidak ada");

    const headerCols = parseCsvLine(lines[0]).map((h) => cleanStr(h).toLowerCase());
    const idx = {
      channel: headerCols.indexOf("channel"),
      bearingType: headerCols.indexOf("bearingtype"),
      category: headerCols.indexOf("category"),
      name: headerCols.indexOf("name"),
      code: headerCols.indexOf("code"),
    };
    if (Object.values(idx).some((v) => v === -1)) {
      throw new Error("Header CSV harus: Channel,BearingType,Category,Name,Code");
    }

    MASTER_DATA = [];
    for (let i = 1; i < lines.length; i++) {
      const cols = parseCsvLine(lines[i]).map(cleanStr);
      if (cols.every((c) => !c)) continue;

      MASTER_DATA.push({
        channel: cols[idx.channel],
        bearingType: cols[idx.bearingType],
        category: cols[idx.category],
        name: cols[idx.name],
        code: cols[idx.code],
      });
    }

    buildChannelMastersFromMasterData();
    console.log("[form] Master loaded:", MASTER_DATA.length);
  } catch (err) {
    console.error("[form] fetchMasterData:", err);
    alert("Gagal memuat data master.\n" + err.message);
  } finally {
    hideLoading();
  }
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", async () => {
  console.log("[form] loaded");

  const today = new Date().toISOString().split("T")[0];
  const tanggalEl = document.getElementById("tanggal");
  if (tanggalEl) tanggalEl.value = today;

  const channelEl = document.getElementById("channel");
  const bearingEl = document.getElementById("bearingType");
  if (channelEl) channelEl.disabled = true;
  if (bearingEl) bearingEl.disabled = true;

  await fetchMasterData();

  if (channelEl) channelEl.disabled = false;

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
      submitData();
    });
  }

  // Channel -> BearingType
  const channelSelect = document.getElementById("channel");
  if (channelSelect) {
    channelSelect.addEventListener("change", function () {
      const channelNorm = normalizeChannel(this.value);
      const bearingSelect = document.getElementById("bearingType");
      if (!bearingSelect) return;

      bearingSelect.innerHTML = '<option value="">Pilih Tipe</option>';

      const byChannel = CHANNEL_MASTERS[channelNorm];
      if (!byChannel) {
        bearingSelect.disabled = true;
        alert("Master untuk channel ini tidak ditemukan.");
        return;
      }

      Object.keys(byChannel).forEach((type) => {
        const opt = document.createElement("option");
        opt.value = type;
        opt.textContent = type;
        bearingSelect.appendChild(opt);
      });

      bearingSelect.disabled = false;
    });
  }

  // Toggle Clearance
  const categoryEl = document.getElementById("category");
  if (categoryEl) {
    categoryEl.addEventListener("change", function () {
      const field = document.getElementById("clearanceField");
      if (!field) return;

      if (this.value === "Clearance") {
        field.style.display = "block";
      } else {
        field.style.display = "none";
        const cl = document.getElementById("clearanceType");
        if (cl) cl.value = "";
      }
    });
  }
});

// =========================
// STEP NAV
// =========================
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
// Ensure masterList exists
// =========================
function ensureMasterList() {
  let masterList = document.getElementById("masterList");
  if (masterList) return masterList;

  const masterForm = document.getElementById("masterCheckForm");
  if (!masterForm) return null;

  masterList = document.createElement("div");
  masterList.id = "masterList";
  masterForm.insertBefore(masterList, masterForm.firstChild);

  return masterList;
}

// =========================
// STEP 2 RENDER (CARD UI)
// =========================
function goToStep2() {
  const tanggal = (document.getElementById("tanggal") || {}).value;
  const shift = (document.getElementById("shift") || {}).value;
  const npk = (document.getElementById("npk") || {}).value;
  const channel = (document.getElementById("channel") || {}).value;
  const bearingType = (document.getElementById("bearingType") || {}).value;
  const categoryRaw = (document.getElementById("category") || {}).value;

  let clearanceType = "";
  if (categoryRaw === "Clearance") {
    const cl = document.getElementById("clearanceType");
    clearanceType = cl ? cl.value : "";
    if (!clearanceType) {
      alert("Pilih tipe clearance yang sedang running!");
      return;
    }
  }

  if (!tanggal || !shift || !npk || !channel || !bearingType || !categoryRaw) {
    alert("Lengkapi semua field informasi dasar!");
    return;
  }

  sessionStorage.setItem("tanggal", tanggal);
  sessionStorage.setItem("shift", shift);
  sessionStorage.setItem("npk", npk);
  sessionStorage.setItem("channel", channel);
  sessionStorage.setItem("bearingType", bearingType);

  const channelNorm = normalizeChannel(channel);
  const categoryKey = normalizeCategory(categoryRaw);

  const actualCategoryForSend = categoryRaw === "Clearance" ? "Pokayoke" : categoryRaw;
  sessionStorage.setItem("category", actualCategoryForSend);

  let masters = [];

  if (categoryRaw === "Clearance") {
    const pokayokeMasters =
      (CHANNEL_MASTERS[channelNorm] &&
        CHANNEL_MASTERS[channelNorm][bearingType] &&
        CHANNEL_MASTERS[channelNorm][bearingType]["pokayoke"]) ||
      [];

    if (!pokayokeMasters.length) {
      alert("Data Pokayoke (untuk Clearance) tidak ditemukan!");
      return;
    }

    const map = {};
    pokayokeMasters.forEach((item) => {
      const m = item.name.match(/Clearance Check - (C2|Cn|C3|C4|C5)/);
      if (m) map[m[1]] = item;
    });

    const order = ["C2", "Cn", "C3", "C4", "C5"];
    const idx = order.indexOf(clearanceType);
    if (idx === -1) {
      alert("Tipe clearance tidak valid!");
      return;
    }

    if (idx > 0 && map[order[idx - 1]]) masters.push(map[order[idx - 1]]);
    if (map[clearanceType]) masters.push(map[clearanceType]);
    if (idx < order.length - 1 && map[order[idx + 1]]) masters.push(map[order[idx + 1]]);
  } else {
    const raw =
      (CHANNEL_MASTERS[channelNorm] &&
        CHANNEL_MASTERS[channelNorm][bearingType] &&
        CHANNEL_MASTERS[channelNorm][bearingType][categoryKey]) ||
      [];

    if (categoryKey === "pokayoke") {
      masters = raw.filter((item) => !/Clearance Check - (C2|Cn|C3|C4|C5)/.test(item.name));
    } else {
      masters = raw;
    }
  }

  if (!masters.length) {
    alert(`Data master tidak ditemukan untuk Channel ${channel}, Tipe ${bearingType}, Kategori ${categoryRaw}!`);
    return;
  }

  const sc = document.getElementById("selectedChannel");
  const tm = document.getElementById("totalMasters");
  if (sc) sc.textContent = channel;
  if (tm) tm.textContent = String(masters.length);

  const masterList = ensureMasterList();
  if (!masterList) {
    alert("ERROR: Step2 form tidak ditemukan (#masterCheckForm).");
    return;
  }

  // ✅ HILANGKAN SISA HEADER TABLE
  hideLegacyTableHeader();

  masterList.innerHTML = "";
  sessionStorage.setItem("displayedMasters", JSON.stringify(masters));

  masters.forEach((item, index) => {
    const label = `${item.name} (${item.code})`;

    const wrap = document.createElement("div");
    wrap.className = "master-item";

    wrap.innerHTML = `
      <div class="master-item-header">
        <div class="master-name">${index + 1}. ${label}</div>
        <div class="status-buttons">
          <button type="button" class="btn-ok" onclick="selectStatus(${index}, 'OK')">OK</button>
          <button type="button" class="btn-ng" onclick="selectStatus(${index}, 'NG')">NG</button>
        </div>
      </div>

      <div class="remark-field" id="remark-${index}" style="display:none;">
        <label class="form-label">Jenis Remark</label>

        <div class="remark-type-group" style="display:block; margin-top:6px;">
          ${["OPT1","OPT2","OPT3","OPT4"].map(opt => `
            <label style="display:block; margin:6px 0; cursor:pointer;">
              <input type="radio" name="remarkType_${index}" value="${opt}">
              ${REMARK_TYPE_LABELS[opt]}
            </label>
          `).join("")}
        </div>

        <div id="remarkValueBox_${index}" style="display:none; margin-top:10px;">
          <input type="text" class="form-input" id="remarkValue_${index}" placeholder="Contoh: +5 / -2 / 0.02 / -15;-16;-17">
          <div style="margin-top:6px; font-size:12px; color:#64748b;" id="remarkValueHelp_${index}"></div>
          <div class="error-msg" id="remarkValueErr_${index}" style="display:none; color:red; margin-top:6px;"></div>
        </div>

        <!-- ✅ NEW: textarea opsional khusus OPT1/OPT2 (disimpan ke remarkDetail) -->
        <div id="remarkOptBox_${index}" style="display:none; margin-top:10px;">
          <textarea class="remark-textarea" id="remarkOptDetail_${index}" placeholder="Keterangan tambahan (opsional)..."></textarea>
          <div style="margin-top:6px; font-size:12px; color:#64748b;" id="remarkOptHelp_${index}"></div>
        </div>

        <div id="remarkDetailBox_${index}" style="display:none; margin-top:10px;">
          <textarea class="remark-textarea" id="remarkDetail_${index}" placeholder="Jelaskan kondisi..."></textarea>
          <div style="margin-top:6px; font-size:12px; color:#64748b;" id="remarkDetailHelp_${index}"></div>
          <div class="error-msg" id="remarkDetailErr_${index}" style="display:none; color:red; margin-top:6px;"></div>
        </div>
      </div>
    `;

    masterList.appendChild(wrap);

    const radios = document.querySelectorAll(`input[name="remarkType_${index}"]`);
    radios.forEach((r) => r.addEventListener("change", () => applyRemarkMode(index, r.value)));
  });

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
}

function selectStatus(index, status) {
  const masterItem = document.querySelectorAll(".master-item")[index];
  if (!masterItem) return;

  const okBtn = masterItem.querySelector(".btn-ok");
  const ngBtn = masterItem.querySelector(".btn-ng");
  const remarkField = document.getElementById(`remark-${index}`);

  function resetRemarkUI() {
    if (remarkField) remarkField.style.display = "none";
    document.querySelectorAll(`input[name="remarkType_${index}"]`).forEach((r) => (r.checked = false));

    const vBox = document.getElementById(`remarkValueBox_${index}`);
    const oBox = document.getElementById(`remarkOptBox_${index}`); // NEW
    const dBox = document.getElementById(`remarkDetailBox_${index}`);

    if (vBox) vBox.style.display = "none";
    if (oBox) oBox.style.display = "none"; // NEW
    if (dBox) dBox.style.display = "none";

    const v = document.getElementById(`remarkValue_${index}`);
    const o = document.getElementById(`remarkOptDetail_${index}`); // NEW
    const d = document.getElementById(`remarkDetail_${index}`);

    if (v) v.value = "";
    if (o) o.value = ""; // NEW
    if (d) d.value = "";

    const vErr = document.getElementById(`remarkValueErr_${index}`);
    const dErr = document.getElementById(`remarkDetailErr_${index}`);
    if (vErr) vErr.style.display = "none";
    if (dErr) dErr.style.display = "none";
  }

  if (status === "OK") {
    if (okBtn && okBtn.classList.contains("active")) {
      okBtn.classList.remove("active");
      resetRemarkUI();
      return;
    }
    if (okBtn) okBtn.classList.add("active");
    if (ngBtn) ngBtn.classList.remove("active");
    resetRemarkUI();
    return;
  }

  if (status === "NG") {
    if (ngBtn && ngBtn.classList.contains("active")) {
      ngBtn.classList.remove("active");
      resetRemarkUI();
      return;
    }
    if (ngBtn) ngBtn.classList.add("active");
    if (okBtn) okBtn.classList.remove("active");
    if (remarkField) remarkField.style.display = "block";
  }
}

function applyRemarkMode(index, opt) {
  const vBox = document.getElementById(`remarkValueBox_${index}`);
  const oBox = document.getElementById(`remarkOptBox_${index}`); // NEW
  const dBox = document.getElementById(`remarkDetailBox_${index}`);

  const vHelp = document.getElementById(`remarkValueHelp_${index}`);
  const oHelp = document.getElementById(`remarkOptHelp_${index}`); // NEW
  const dHelp = document.getElementById(`remarkDetailHelp_${index}`);

  const vErr = document.getElementById(`remarkValueErr_${index}`);
  const dErr = document.getElementById(`remarkDetailErr_${index}`);
  if (vErr) vErr.style.display = "none";
  if (dErr) dErr.style.display = "none";

  if (vBox) vBox.style.display = "none";
  if (oBox) oBox.style.display = "none"; // NEW default hide
  if (dBox) dBox.style.display = "none";

  if (opt === "OPT1" || opt === "OPT2") {
    // OPT1/2: angka deviasi + catatan opsional
    if (vBox) vBox.style.display = "block";
    if (vHelp) vHelp.textContent = REMARK_HELPER[opt];

    if (oBox) oBox.style.display = "block";
    if (oHelp) oHelp.textContent = REMARK_OPT_HELPER[opt] || "Opsional.";

    if (dHelp) dHelp.textContent = "";

    // pastikan detail utama (OPT3/4) kosong
    const d = document.getElementById(`remarkDetail_${index}`);
    if (d) d.value = "";
    return;
  }

  if (opt === "OPT3" || opt === "OPT4") {
    // OPT3/4: pakai detail utama seperti sebelumnya
    if (dBox) dBox.style.display = "block";
    if (dHelp) dHelp.textContent = REMARK_HELPER[opt];
    if (vHelp) vHelp.textContent = "";

    // reset value deviasi dan catatan opsional OPT1/2
    const v = document.getElementById(`remarkValue_${index}`);
    const o = document.getElementById(`remarkOptDetail_${index}`);
    if (v) v.value = "";
    if (o) o.value = "";
  }
}

async function submitData() {
  const masters = JSON.parse(sessionStorage.getItem("displayedMasters") || "[]");
  if (!masters.length) {
    alert("Data master kosong. Silakan ulangi.");
    return;
  }

  const appsScriptUrl = window.CONFIG && window.CONFIG.APPS_SCRIPT_URL ? window.CONFIG.APPS_SCRIPT_URL : "";
  if (!appsScriptUrl) {
    alert("CONFIG.APPS_SCRIPT_URL belum di-set di config.js");
    return;
  }

  showLoading("Menyimpan data...");

  try {
    const results = [];

    for (let i = 0; i < masters.length; i++) {
      const masterItem = document.querySelectorAll(".master-item")[i];
      const okBtn = masterItem ? masterItem.querySelector(".btn-ok") : null;
      const ngBtn = masterItem ? masterItem.querySelector(".btn-ng") : null;

      const status =
        okBtn && okBtn.classList.contains("active") ? "OK" :
        ngBtn && ngBtn.classList.contains("active") ? "NG" : "";

      const masterLabel = `${masters[i].name} (${masters[i].code})`;

      if (!status) {
        alert(`Mohon pilih status untuk: ${masterLabel}`);
        hideLoading();
        return;
      }

      let remarkValue = "";
      let remarkType = "";
      let remarkDetail = "";

      if (status === "NG") {
        const checked = document.querySelector(`input[name="remarkType_${i}"]:checked`);
        if (!checked) {
          alert(`Mohon pilih Jenis Remark untuk item NG: ${masterLabel}`);
          hideLoading();
          return;
        }

        const opt = checked.value;
        remarkType = REMARK_TYPE_LABELS[opt] || "";

        const vInput = document.getElementById(`remarkValue_${i}`);
        const oInput = document.getElementById(`remarkOptDetail_${i}`); // NEW (opsional OPT1/2)
        const dInput = document.getElementById(`remarkDetail_${i}`);    // existing (OPT3/4)

        const vErr = document.getElementById(`remarkValueErr_${i}`);
        const dErr = document.getElementById(`remarkDetailErr_${i}`);

        if (opt === "OPT1" || opt === "OPT2") {
          const v = vInput ? vInput.value.trim() : "";
          if (!v) {
            if (vErr) {
              vErr.textContent = "Wajib diisi angka deviasi.";
              vErr.style.display = "block";
            }
            alert(`Mohon isi Remark Value (angka deviasi) untuk: ${masterLabel}`);
            hideLoading();
            return;
          }
          if (!isValidDeviationValue(v)) {
            if (vErr) {
              vErr.textContent = "Format tidak valid. Contoh: +5 / -2 / 0.02 / -15;-16;-17";
              vErr.style.display = "block";
            }
            alert(`Remark Value harus angka deviasi untuk: ${masterLabel}`);
            hideLoading();
            return;
          }

          // ✅ sesuai request:
          remarkValue = v; // angka deviasi tetap ke remarkValue
          remarkDetail = oInput ? oInput.value.trim() : ""; // catatan opsional masuk detail (boleh kosong)
        } else if (opt === "OPT3") {
          remarkValue = "";
          remarkDetail = dInput ? dInput.value.trim() : "";
        } else if (opt === "OPT4") {
          const d = dInput ? dInput.value.trim() : "";
          if (!d) {
            if (dErr) {
              dErr.textContent = "Wajib diisi untuk opsi Lainnya.";
              dErr.style.display = "block";
            }
            alert(`Mohon isi Remark Detail untuk: ${masterLabel}`);
            hideLoading();
            return;
          }
          remarkValue = "";
          remarkDetail = d;
        }
      }

      results.push({
        name: masters[i].name,
        code: masters[i].code,
        status,
        remarkValue,
        remarkType,
        remarkDetail,
      });
    }

    const payload = {
      tanggal: sessionStorage.getItem("tanggal"),
      shift: sessionStorage.getItem("shift"),
      npk: sessionStorage.getItem("npk"),
      channel: `Channel ${sessionStorage.getItem("channel")}`,
      bearingType: sessionStorage.getItem("bearingType"),
      category: sessionStorage.getItem("category"),
      masters: results,
    };

    const res = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    await res.text();

    alert("Data berhasil disimpan!");
    sessionStorage.clear();
    window.location.href = "dashboard.html";
  } catch (err) {
    console.error("[form] submit error:", err);
    alert("Gagal menyimpan data.\n" + err.message);
  } finally {
    hideLoading();
  }
}
