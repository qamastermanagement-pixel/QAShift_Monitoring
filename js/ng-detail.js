let allData = []

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

function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function row(label, value) {
  return `<tr><th style="text-align:left; width:220px;">${esc(label)}</th><td>${esc(value ?? "-")}</td></tr>`
}

function makeRowId(e) {
  const ts = String(e.Timestamp || "").trim()
  const code = String(e.Code || "").trim()
  const master = String(e.Master || "").trim()
  const channel = String(e.Channel || "").trim()
  const shift = String(e.Shift || "").trim()
  return [ts, code, master, channel, shift].join("||")
}

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

  document.getElementById("subtitleInfo").textContent =
    `${key.Tanggal || "-"} • ${key.Channel || "-"} • Shift ${key.Shift || "-"}`

  showLoading("Memuat detail NG...")

  try {
    const res = await fetch(window.CONFIG.APPS_SCRIPT_URL)
    const result = await res.json()

    if (result.status !== "success") throw new Error(result.message || "API error")
    allData = result.data || []

    let entry = null

    // ✅ 1) Cari pakai ID unik
    if (key.id) {
      entry = allData.find((e) => makeRowId(e) === key.id)
    }

    // ✅ 2) Fallback (kalau id kosong / ga ketemu)
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

    const problem = entry["Problem"] || "-"
    const remarkValue = entry["Remark Value"] || "-"
    const detail = entry["Detail"] || "-"

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
