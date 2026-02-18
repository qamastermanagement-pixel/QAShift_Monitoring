let allData = []

// ================================
// LOADING
// ================================
function showLoading(text = "Memuat data...") {
  const modal = document.getElementById("loadingModal")
  const label = document.getElementById("loadingText")
  if (label) label.textContent = text
  if (modal) modal.classList.add("show")
}
function hideLoading() {
  const modal = document.getElementById("loadingModal")
  if (modal) modal.classList.remove("show")
}

// ================================
// HELPERS
// ================================
function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function row(label, value) {
  return `<tr>
    <th style="text-align:left; width:220px;">${esc(label)}</th>
    <td>${esc(value ?? "-")}</td>
  </tr>`
}

// ambil field dengan banyak kemungkinan nama kolom
function pick(entry, keys, fallback = "-") {
  for (const k of keys) {
    if (entry && entry[k] != null && String(entry[k]).trim() !== "") {
      return entry[k]
    }
  }
  return fallback
}

// samakan logic problem dengan dashboard
function getProblemLabel(entry) {
  const rt = String(entry?.RemarkType ?? entry?.["Remark Type"] ?? "").trim()
  const rv = String(entry?.RemarkValue ?? entry?.["Remark Value"] ?? "").trim()
  const rd = String(entry?.RemarkDetail ?? entry?.["Remark Detail"] ?? "").trim()

  const mode = (window.CONFIG?.PROBLEM_MODE || "RemarkType").trim()

  if (mode === "RemarkValue") return rv || "-"
  if (mode === "RemarkValue+RemarkDetail") {
    return rd ? `${rv || "-"} | ${rd}` : (rv || "-")
  }
  if (mode === "RemarkType+RemarkValue") {
    return rv ? `${rt || "-"} | ${rv}` : (rt || "-")
  }

  // default
  return rt || "-"
}

// ID generator (samakan dengan dashboard kalau perlu)
function makeRowId(e) {
  const ts = String(e.Timestamp || "").trim()
  const code = String(e.Code || "").trim()
  const master = String(e.Master || "").trim()
  const channel = String(e.Channel || "").trim()
  const shift = String(e.Shift || "").trim()
  return [ts, code, master, channel, shift].join("||")
}

// normalisasi channel biar bisa tampil rapi (misal: "CH 0 - Cell 1" -> ambil "CH 0")
// kalau gagal, tampilkan raw-nya aja
function formatChOnly(rawChannel) {
  const s = String(rawChannel ?? "").trim()
  if (!s) return "-"
  // ambil sebelum "-" pertama kalau ada
  const parts = s.split("-").map((x) => x.trim()).filter(Boolean)
  return parts[0] || s
}

// ================================
// INIT
// ================================
document.addEventListener("DOMContentLoaded", async () => {
  const btnPrint = document.getElementById("btnPrint")
  if (btnPrint) btnPrint.addEventListener("click", () => window.print())

  const qs = new URLSearchParams(location.search)

  const key = {
    id: qs.get("id") || "",
    Tanggal: qs.get("d") || "",
    Channel: qs.get("ch") || "",
    Shift: qs.get("sh") || "",
    Code: qs.get("c") || "",
    Master: qs.get("m") || "",
  }

  // ✅ UBAH SUBTITLE: CH • Code • Master
  // (sementara pakai querystring dulu, nanti kalau entry ketemu kita update lagi biar makin akurat)
  const chText = formatChOnly(key.Channel)
  document.getElementById("subtitleInfo").textContent =
    `${chText} • ${key.Code || "-"} • ${key.Master || "-"}`

  showLoading("Memuat detail NG...")

  try {
    const res = await fetch(window.CONFIG.APPS_SCRIPT_URL)
    const result = await res.json()

    if (result.status !== "success") throw new Error(result.message || "API error")
    allData = result.data || []

    let entry = null

    // ================================
    // 1️⃣ Cari pakai ID unik
    // ================================
    if (key.id) {
      entry = allData.find((e) => makeRowId(e) === key.id)
    }

    // ================================
    // 2️⃣ Fallback manual
    // ================================
    if (!entry) {
      entry = allData.find((e) =>
        String(e.Tanggal || "") === String(key.Tanggal || "") &&
        String(e.Channel || "") === String(key.Channel || "") &&
        String(e.Shift || "") === String(key.Shift || "") &&
        String(e.Code || "") === String(key.Code || "") &&
        String(e.Master || "") === String(key.Master || "")
      )
    }

    const body = document.getElementById("detailBody")

    if (!entry) {
      body.innerHTML = `
        <tr><td>
          Data tidak ditemukan. Mungkin entry sudah terhapus/cleansing atau param tidak cocok.<br/>
          <a href="dashboard.html">Kembali ke dashboard</a>
        </td></tr>
      `
      return
    }

    // ✅ update subtitle pakai data entry yang sudah pasti ada
    const chFinal = formatChOnly(entry.Channel)
    const codeFinal = entry.Code || "-"
    const masterFinal = entry.Master || "-"
    document.getElementById("subtitleInfo").textContent =
      `${chFinal} • ${codeFinal} • ${masterFinal}`

    // ================================
    // Ambil field yang benar
    // ================================
    const problem = getProblemLabel(entry)
    const remarkValue = pick(entry, ["RemarkValue", "Remark Value"], "-")
    const detail = pick(entry, ["RemarkDetail", "Remark Detail", "Detail"], "-")

    body.innerHTML = `
      ${row("Tanggal", entry.Tanggal)}
      ${row("Channel", entry.Channel)}
      ${row("Shift", entry.Shift)}
      ${row("NPK", entry.NPK)}
      ${row("Code", entry.Code)}
      ${row("Master", entry.Master)}
      ${row("Status", entry.Status)}
      ${row("Problem", problem)}
      ${row("Remark Value", remarkValue)}
      ${row("Detail", detail)}
      ${row("Timestamp", entry.Timestamp)}
    `
  } catch (err) {
    const body = document.getElementById("detailBody")
    body.innerHTML = `<tr><td>Gagal memuat detail: ${esc(err.message)}</td></tr>`
  } finally {
    hideLoading()
  }
})
