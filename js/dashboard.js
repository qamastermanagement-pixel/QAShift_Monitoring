// dashboard.js (FINAL - tinggal copas)
// NOTE: Perubahan hanya untuk fitur PDF (tidak mengubah dashboard/web UI)

let allData = []
let lastFilteredData = []

let chartInstance = null
let problemChartInstance = null

// ================================
// CONFIG / HELPERS
// ================================
const CHANNEL_ORDER = [
  "CH 0 - CELL 1",
  "CH 0 - CELL 2",
  "CH 0 - CELL 3",
  ...Array.from({ length: 16 }, (_, i) => `Channel ${i + 1}`),
]

const TOTAL_SHIFTS = 3
const TOTAL_CHECKPOINTS = CHANNEL_ORDER.length * TOTAL_SHIFTS
const CHANNEL_SET = new Set(CHANNEL_ORDER)

// ✅ UNTUK DASHBOARD (boleh mode gabungan sesuai config)
function getProblemLabel(entry) {
  const mode = (window.CONFIG?.PROBLEM_MODE || "RemarkType").trim()

  const rt = String(entry?.RemarkType ?? "").trim()
  const rv = String(entry?.RemarkValue ?? "").trim()
  const rd = String(entry?.RemarkDetail ?? "").trim()

  if (mode === "RemarkValue") return rv || "-"
  if (mode === "RemarkValue+RemarkDetail") {
    const a = rv || "-"
    const b = rd || ""
    return b ? `${a} | ${b}` : a
  }
  if (mode === "RemarkType+RemarkValue") {
    const a = rt || "-"
    const b = rv || ""
    return b ? `${a} | ${b}` : a
  }
  if (mode === "RemarkType+RemarkDetail") {
    const a = rt || "-"
    const b = rd || ""
    return b ? `${a} | ${b}` : a
  }

  return rt || "-"
}

// ✅ KHUSUS PDF REPORT: problem = RemarkType SAJA
function getProblemRemarkTypeOnly(entry) {
  return String(entry?.RemarkType ?? "").trim() || "-"
}

function normalizeStatus(val) {
  const s = String(val ?? "").trim().toUpperCase()
  if (s === "OK") return "OK"
  if (s === "NG") return "NG"
  return "UNKNOWN"
}
function normalizeChannel(val) {
  return String(val ?? "").trim() || "-"
}
function normalizeShift(val) {
  const s = String(val ?? "").trim()
  return s || "-"
}

// angka pertama dari RemarkValue: "12.5 µm", "0,03 mm", "-8 micron"
function parseNumberLoose(x) {
  const s = String(x ?? "").trim()
  if (!s) return null
  const norm = s.replace(/,/g, ".")
  const m = norm.match(/-?\d+(\.\d+)?/)
  if (!m) return null
  const val = Number(m[0])
  return Number.isFinite(val) ? val : null
}

function topNCount(arr, keyFn, n = 5) {
  const map = {}
  arr.forEach((x) => {
    const k = String(keyFn(x) ?? "-").trim() || "-"
    map[k] = (map[k] || 0) + 1
  })
  return Object.entries(map)
    .map(([k, v]) => ({ k, v }))
    .sort((a, b) => b.v - a.v)
    .slice(0, n)
}

// group NG detail per channel
function groupByChannel(ngEntries) {
  const map = new Map()
  ngEntries.forEach((e) => {
    const ch = normalizeChannel(e.Channel)
    if (!map.has(ch)) map.set(ch, [])
    map.get(ch).push(e)
  })
  const groups = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  groups.forEach(([, arr]) => {
    arr.sort((x, y) => String(x.Timestamp ?? "").localeCompare(String(y.Timestamp ?? "")))
  })
  return groups
}

// ================================
// LOADING MODAL
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
// INIT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("[final] Dashboard.js loaded")
  console.log("[final] CONFIG:", window.CONFIG)

  const today = new Date().toISOString().split("T")[0]
  const dateEl = document.getElementById("filterDate")
  if (dateEl) dateEl.value = today

  loadData()

  if (dateEl) {
    dateEl.addEventListener("change", () => {
      showLoading("Memuat data...")
      setTimeout(() => {
        filterAndDisplayData()
        hideLoading()
      }, 200)
    })
  }

  // ✅ TOMBOL PDF (PDF function sekarang async, jadi pakai wrapper)
  const btnPdf = document.getElementById("btnDownloadNGPdf")
  if (btnPdf) btnPdf.addEventListener("click", () => downloadDailyPdfReportStyleA())
})

// ================================
// LOAD DATA
// ================================
async function loadData() {
  showLoading("Memuat data dashboard...")

  try {
    const res = await fetch(window.CONFIG.APPS_SCRIPT_URL)
    const result = await res.json()

    if (result.status === "success") {
      allData = result.data || []
    } else {
      allData = []
      alert("Gagal memuat data dashboard: " + (result.message || "unknown error"))
    }

    filterAndDisplayData()
  } catch (err) {
    allData = []
    filterAndDisplayData()
    alert("Gagal memuat data. Cek koneksi / Apps Script.\n" + err.message)
  } finally {
    hideLoading()
  }
}

// ================================
// FILTER
// ================================
function filterAndDisplayData() {
  const filterDate = document.getElementById("filterDate")?.value
  const filteredData = (allData || []).filter((entry) => String(entry.Tanggal).split("T")[0] === filterDate)

  lastFilteredData = filteredData

  updateStats(filteredData)
  updateChannelTable(filteredData)
  updateChart(filteredData)        // donut OK/NG (dashboard only)
  updateProblemDonut(filteredData) // donut NG problem (dashboard only)
  updateNGTrackerTable(filteredData)
}

// ================================
// STATS
// ================================
function updateStats(data) {
  let okCount = 0
  let ngCount = 0
  let unknownCount = 0

  const checkpointSet = new Set()

  data.forEach((entry) => {
    const channel = normalizeChannel(entry.Channel)
    const shift = normalizeShift(entry.Shift)
    const st = normalizeStatus(entry.Status)

    if (st === "OK") okCount++
    else if (st === "NG") ngCount++
    else unknownCount++

    if (CHANNEL_SET.has(channel) && (shift === "1" || shift === "2" || shift === "3")) {
      checkpointSet.add(`${channel}-shift-${shift}`)
    }
  })

  const covered = checkpointSet.size
  const coverage = Math.round((covered / TOTAL_CHECKPOINTS) * 100)
  const totalEntries = data.length
  const okRate = totalEntries > 0 ? Math.round((okCount / totalEntries) * 100) : 0

  const el = (id) => document.getElementById(id)
  if (el("totalChecked")) el("totalChecked").textContent = totalEntries
  if (el("mastersOk")) el("mastersOk").textContent = okCount
  if (el("mastersNg")) el("mastersNg").textContent = ngCount
  if (el("ngCount")) el("ngCount").textContent = ngCount
  if (el("okRate")) el("okRate").textContent = okRate
  if (el("coverage")) el("coverage").textContent = `${coverage}%`
  if (el("checkPoints")) el("checkPoints").textContent = `${covered}/${TOTAL_CHECKPOINTS}`

  if (unknownCount > 0) console.warn("[final] Found UNKNOWN status rows:", unknownCount)
}

// ================================
// CHANNEL TABLE
// ================================
function updateChannelTable(data) {
  const tableBody = document.getElementById("channelTable")
  if (!tableBody) return
  tableBody.innerHTML = ""

  const statusMap = {}

  data.forEach((entry) => {
    const channel = normalizeChannel(entry.Channel)
    const shift = normalizeShift(entry.Shift)
    const status = normalizeStatus(entry.Status)

    if (!statusMap[channel]) statusMap[channel] = {}
    if (!statusMap[channel][shift]) statusMap[channel][shift] = { ok: 0, ng: 0, unknown: 0 }

    if (status === "OK") statusMap[channel][shift].ok++
    else if (status === "NG") statusMap[channel][shift].ng++
    else statusMap[channel][shift].unknown++
  })

  CHANNEL_ORDER.forEach((channelName) => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td><strong>${channelName}</strong></td>
      ${generateShiftCell(statusMap, channelName, "1")}
      ${generateShiftCell(statusMap, channelName, "2")}
      ${generateShiftCell(statusMap, channelName, "3")}
    `
    tableBody.appendChild(row)
  })
}

function generateShiftCell(map, channel, shift) {
  const data = map[channel]?.[shift]
  if (!data) return `<td><span class="status-indicator empty">-</span></td>`
  if (data.ng > 0) return `<td><span class="status-indicator ng">${data.ng}</span></td>`
  if (data.ok > 0) return `<td><span class="status-indicator ok">✓</span></td>`
  return `<td><span class="status-indicator empty">?</span></td>`
}

// ================================
// CHART 1: OK vs NG (dashboard)
// ================================
function updateChart(data) {
  let ok = 0
  let ng = 0

  data.forEach((e) => {
    const st = normalizeStatus(e.Status)
    if (st === "OK") ok++
    else if (st === "NG") ng++
  })

  const canvas = document.getElementById("statusChart")
  if (!canvas) return
  const ctx = canvas.getContext("2d")

  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["OK Masters", "NG Masters"],
      datasets: [{ data: [ok, ng], backgroundColor: ["#10B981", "#EF4444"], borderWidth: 0 }],
    },
    options: { responsive: true, plugins: { legend: { display: false } } },
  })

  const legend = document.getElementById("statusLegend")
  if (!legend) return
  legend.innerHTML = ""

  const total = ok + ng
  const items = [
    { label: "OK Masters", val: ok, color: "#10B981" },
    { label: "NG Masters", val: ng, color: "#EF4444" },
  ]
  items.forEach((it) => {
    const pct = total > 0 ? Math.round((it.val / total) * 100) : 0
    const div = document.createElement("div")
    div.className = "problem-legend-item"
    div.innerHTML = `
      <span class="problem-legend-swatch" style="background:${it.color};"></span>
      <span class="problem-legend-text">
        <span class="problem-legend-label">${it.label}</span>
        <span class="problem-legend-pct">(${pct}%)</span>
      </span>
    `
    legend.appendChild(div)
  })
}

// ================================
// CHART 2: NG Problem Distribution (dashboard)
// ================================
function updateProblemDonut(data) {
  const canvas = document.getElementById("problemDonutChart")
  if (!canvas) return
  const ctx = canvas.getContext("2d")

  // ambil NG saja
  const ng = data.filter((e) => normalizeStatus(e.Status) === "NG")

  // hitung problem
  const count = {}
  ng.forEach((e) => {
    const p = getProblemLabel(e)
    count[p] = (count[p] || 0) + 1
  })

  const pairs = Object.entries(count).map(([label, val]) => ({ label, val }))
  pairs.sort((a, b) => b.val - a.val)

  const labels = pairs.length ? pairs.map((x) => x.label) : ["No NG"]
  const values = pairs.length ? pairs.map((x) => x.val) : [1]

  const COLORS = ["#3B82F6", "#F59E0B", "#A855F7", "#EF4444", "#10B981", "#64748B"]
  const bg = labels.map((_, i) => COLORS[i % COLORS.length])

  if (problemChartInstance) problemChartInstance.destroy()

  problemChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: { labels, datasets: [{ data: values, backgroundColor: bg, borderWidth: 0 }] },
    options: { responsive: true, plugins: { legend: { display: false } } },
  })

  // LEGEND (dashboard only)
  let legend = document.getElementById("problemLegend")
  if (!legend) {
    legend = document.createElement("div")
    legend.id = "problemLegend"
    canvas.insertAdjacentElement("afterend", legend)
  }

  legend.innerHTML = ""
  legend.style.display = "flex"
  legend.style.flexDirection = "column"
  legend.style.alignItems = "flex-start"
  legend.style.justifyContent = "flex-start"
  legend.style.gap = "6px"
  legend.style.marginTop = "10px"

  const totalNg = ng.length

  if (!pairs.length) {
    const div = document.createElement("div")
    div.className = "problem-legend-item"
    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.gap = "8px"

    div.innerHTML = `
      <span class="problem-legend-swatch" style="background:${bg[0]};"></span>
      <span class="problem-legend-text">
        <span class="problem-legend-label">No NG</span>
        <span class="problem-legend-pct">(100%)</span>
      </span>
    `
    legend.appendChild(div)
    return
  }

  pairs.forEach((it, i) => {
    const pct = totalNg > 0 ? Math.round((it.val / totalNg) * 100) : 0
    const div = document.createElement("div")
    div.className = "problem-legend-item"
    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.gap = "8px"
    div.style.width = "100%"
    div.style.justifyContent = "flex-start"

    div.innerHTML = `
      <span class="problem-legend-swatch" style="background:${bg[i]};"></span>
      <span class="problem-legend-text">
        <span class="problem-legend-label">${it.label}</span>
        <span class="problem-legend-pct">(${pct}%)</span>
      </span>
    `
    legend.appendChild(div)
  })
}

// ================================
// NG TRACKER TABLE (dashboard)
// ================================
function updateNGTrackerTable(data) {
  const tbody = document.getElementById("remarkTableBody")
  if (!tbody) return
  tbody.innerHTML = ""

  const ngEntries = data.filter((entry) => normalizeStatus(entry.Status) === "NG")

  if (ngEntries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center">Tidak ada NG hari ini</td></tr>`
    return
  }

  ngEntries.forEach((entry) => {
    const tanggal = entry.Tanggal || "-"
    const channel = entry.Channel || "-"
    const code = entry.Code || "-"
    const master = entry.Master || "-"
    const problem = getProblemLabel(entry)
    const shift = entry.Shift || "-"
    const ts = entry.Timestamp || ""

    const rowId = [
      String(ts).trim(),
      String(tanggal).trim(),
      String(code).trim(),
      String(master).trim(),
      String(channel).trim(),
      String(shift).trim(),
      String(problem).trim(),
    ].join("||")

    const params = new URLSearchParams({
      id: rowId,
      d: String(tanggal || ""),
      ch: String(channel || ""),
      sh: String(shift || ""),
      c: String(code || ""),
      m: String(master || ""),
    })

    const detailUrl = `ng-detail.html?${params.toString()}`

    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${tanggal}</td>
      <td>${channel}</td>
      <td>${code}</td>
      <td>${master}</td>
      <td>${problem}</td>
      <td>
        <a class="ng-detail-link" href="${detailUrl}" title="Lihat detail NG">
          Lihat <span class="arrow">→</span>
        </a>
      </td>
    `
    tbody.appendChild(row)
  })
}

// =====================================================
// PDF (FINAL) - tinggal COPAS
// =====================================================

// -------------------------------
// CONSTANTS
// -------------------------------
const PDF_MARGIN_L = 14
const PDF_MARGIN_R = 14
const PDF_FOOTER_LINE_Y_OFFSET = 14
const PDF_SAFE_BOTTOM_TEXT = 20
const PDF_GREY_TEXT = 110
const PDF_BORDER_GREY = 190

// -------------------------------
// WATERMARK
// -------------------------------
function pdfAddWatermark(doc) {
  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()

  doc.saveGraphicsState()
  try {
    if (doc.GState) {
      const gs = new doc.GState({ opacity: 0.07 })
      doc.setGState(gs)
    }
  } catch (_) {}

  doc.setTextColor(170)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(44)
  doc.text("INTERNAL USE ONLY", pageW / 2, pageH * 0.62, { align: "center", angle: 30 })
  doc.restoreGraphicsState()
}

// -------------------------------
// HEADER (subtitle + rightText abu2)
// -------------------------------
function pdfDrawHeader(doc, { titleLeft, subtitleLeft, rightText }) {
  const pageW = doc.internal.pageSize.getWidth()

  doc.setTextColor(20)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.text(titleLeft, PDF_MARGIN_L, 16)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(PDF_GREY_TEXT)
  doc.text(subtitleLeft, PDF_MARGIN_L, 22)

  if (rightText) {
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.setTextColor(PDF_GREY_TEXT)
    doc.text(rightText, pageW - PDF_MARGIN_R, 22, { align: "right" })
  }

  doc.setDrawColor(0)
  doc.setLineWidth(0.5)
  doc.line(PDF_MARGIN_L, 25, pageW - PDF_MARGIN_R, 25)

  doc.setTextColor(20)
}

// -------------------------------
// SAFE PAGE BREAK
// -------------------------------
function pdfEnsureSpace(doc, cursorY, neededHeight, redrawHeaderFn) {
  const pageH = doc.internal.pageSize.getHeight()
  const safeBottom = pageH - PDF_SAFE_BOTTOM_TEXT
  if (cursorY + neededHeight <= safeBottom) return cursorY

  doc.addPage()
  if (typeof redrawHeaderFn === "function") redrawHeaderFn()
  return 34
}

// -------------------------------
// A. Report Information (kotak luar saja, clean)
// -------------------------------
function pdfInfoBoxClean(doc, { dateStr, genAt, totalChecked, completionPct }) {
  const pageW = doc.internal.pageSize.getWidth()

  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.setTextColor(20)
  doc.text("A. Report Information", PDF_MARGIN_L, 33)

  const x = PDF_MARGIN_L
  const y = 37
  const w = pageW - PDF_MARGIN_L - PDF_MARGIN_R
  const h = 20

  doc.setDrawColor(PDF_BORDER_GREY)
  doc.setLineWidth(0.4)
  doc.rect(x, y, w, h)

  const col1LabelX = x + 4
  const col1ColonX = x + 33
  const col1ValX = x + 36

  const col2LabelX = x + w / 2 + 2
  const col2ColonX = col2LabelX + 39
  const col2ValX = col2ColonX + 3

  const row1Y = y + 7.5
  const row2Y = y + 15

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.6)
  doc.setTextColor(20)

  const drawLV = (lx, cx, vx, yy, label, value) => {
    doc.text(label, lx, yy)
    doc.text(":", cx, yy)
    doc.text(String(value), vx, yy, { maxWidth: (x + w) - vx - 2 })
  }

  drawLV(col1LabelX, col1ColonX, col1ValX, row1Y, "Date", dateStr)
  drawLV(col2LabelX, col2ColonX, col2ValX, row1Y, "Generated at", genAt)
  drawLV(col1LabelX, col1ColonX, col1ValX, row2Y, "Total Checked", totalChecked)
  drawLV(col2LabelX, col2ColonX, col2ValX, row2Y, "Inspection Completion (%)", `${completionPct}%`)

  return y + h
}

// -------------------------------
// Donut image (PDF)
// -------------------------------
function pdfMakeDonutImageNoText({ ok, ng }) {
  if (typeof Chart === "undefined") return null

  const sizePx = 420
  const canvas = document.createElement("canvas")
  canvas.width = sizePx
  canvas.height = sizePx
  const ctx = canvas.getContext("2d")

  ctx.clearRect(0, 0, sizePx, sizePx)

  const chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["OK", "NG"],
      datasets: [
        {
          data: [ok, ng],
          backgroundColor: ["#1F7A5A", "#B42318"],
          borderWidth: 0,
          hoverOffset: 0,
        },
      ],
    },
    options: {
      responsive: false,
      animation: false,
      cutout: "68%",
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
    },
  })

  chart.update()
  const dataUrl = canvas.toDataURL("image/png", 1.0)
  chart.destroy()
  return dataUrl
}

// -------------------------------
// NG DETAIL: kotak luar saja + urutan kiri/kanan
// Kiri: Case ID, Master, Problem, Remark Detail, Remark Value
// Kanan: Timestamp, Shift, Code
// -------------------------------
function pdfDrawCaseBox(doc, cursorY, payload) {
  const pageW = doc.internal.pageSize.getWidth()

  const x = PDF_MARGIN_L
  const w = pageW - PDF_MARGIN_L - PDF_MARGIN_R

  const padX = 4
  const topPad = 6
  const bottomPad = 5
  const lineH = 5.2
  const colGap = 10

  const leftX = x + padX
  const rightX = x + w / 2 + colGap / 2

  const leftColonX = leftX + 26
  const leftValX = leftColonX + 3

  const rightColonX = rightX + 22
  const rightValX = rightColonX + 3

  // ---- TOP (2 kolom ringkas)
  const leftTop = [
    ["Case ID", payload.caseId],
    ["Master", payload.master],
    ["Problem", payload.problem],
  ]
  const rightTop = [
    ["Timestamp", payload.ts],
    ["Shift", String(payload.shift)],
    ["Code", payload.code],
  ]

  // ---- BOTTOM (FULL WIDTH, Remark Value dulu)
  const fullWidthRows = [
    ["Remark Value", payload.remarkValue],
    ["Remark Detail", payload.remarkDetail],
  ]

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.2)

  const maxWLeftTop = x + w / 2 - leftValX - 6
  const maxWRightTop = x + w - rightValX - 6

  // full width value start setelah label+colon
  const fullLabelX = leftX
  const fullColonX = fullLabelX + 26
  const fullValX = fullColonX + 3
  const maxWFull = x + w - fullValX - 6

  // hitung tinggi TOP area (pakai max dari kiri/kanan, dengan wrap)
  const leftTopH = leftTop.reduce((acc, [, v]) => {
    const lines = doc.splitTextToSize(String(v ?? "-"), maxWLeftTop)
    return acc + Math.max(1, lines.length) * lineH
  }, 0)

  const rightTopH = rightTop.reduce((acc, [, v]) => {
    const lines = doc.splitTextToSize(String(v ?? "-"), maxWRightTop)
    return acc + Math.max(1, lines.length) * lineH
  }, 0)

  const topH = Math.max(leftTopH, rightTopH)

  // tinggi BOTTOM full-width (Remark Value + Remark Detail)
  const fullH = fullWidthRows.reduce((acc, [, v]) => {
    const lines = doc.splitTextToSize(String(v ?? "-"), maxWFull)
    return acc + Math.max(1, lines.length) * lineH
  }, 0)

  // gap antar top dan full-width rows
  const gapAfterTop = 3.5

  const contentH = topH + gapAfterTop + fullH
  const boxH = topPad + contentH + bottomPad

  // kotak luar saja
  doc.setDrawColor(230)
  doc.setLineWidth(0.35)
  doc.rect(x, cursorY, w, boxH)

  doc.setTextColor(20)
  doc.setFontSize(9.2)

  const drawLV = (lx, cx, vx, yy, label, value, maxW) => {
    doc.setFont("helvetica", "bold")
    doc.text(label, lx, yy)

    doc.setFont("helvetica", "normal")
    doc.text(":", cx, yy)

    const lines = doc.splitTextToSize(String(value ?? "-"), maxW)
    doc.text(lines, vx, yy, { maxWidth: maxW })

    return Math.max(1, lines.length)
  }

  // --- render TOP kiri
  let yyL = cursorY + topPad + 2
  for (const [lab, val] of leftTop) {
    const used = drawLV(leftX, leftColonX, leftValX, yyL, lab, val, maxWLeftTop)
    yyL += used * lineH
  }

  // --- render TOP kanan (start y sama)
  let yyR = cursorY + topPad + 2
  for (const [lab, val] of rightTop) {
    const used = drawLV(rightX, rightColonX, rightValX, yyR, lab, val, maxWRightTop)
    yyR += used * lineH
  }

  // --- start full width rows setelah TOP area tertinggi
  let yyFull = cursorY + topPad + 2 + topH + gapAfterTop

  // FULL WIDTH: Remark Value dulu, lalu Remark Detail
  for (const [lab, val] of fullWidthRows) {
    const used = drawLV(fullLabelX, fullColonX, fullValX, yyFull, lab, val, maxWFull)
    yyFull += used * lineH
  }

  return cursorY + boxH
}


// =====================================================
// MAIN PDF FUNCTION (jangan taro kode doc.* di luar function ini)
// =====================================================
async function downloadDailyPdfReportStyleA() {
  const filterDate =
    document.getElementById("filterDate")?.value || new Date().toISOString().split("T")[0]
  const dataToday = (lastFilteredData || []).filter((e) => String(e.Tanggal).split("T")[0] === filterDate)

  if (!dataToday.length) {
    alert(`Tidak ada data untuk tanggal ${filterDate}.`)
    return
  }

  const ngEntries = dataToday.filter((e) => normalizeStatus(e.Status) === "NG")
  const okEntries = dataToday.filter((e) => normalizeStatus(e.Status) === "OK")

  const total = dataToday.length
  const ok = okEntries.length
  const ng = ngEntries.length
  const okRate = total ? Math.round((ok / total) * 100) : 0
  const ngRate = total ? Math.round((ng / total) * 100) : 0

  // completion
  const checkpointSet = new Set()
  dataToday.forEach((entry) => {
    const channel = normalizeChannel(entry.Channel)
    const shift = normalizeShift(entry.Shift)
    if (CHANNEL_SET.has(channel) && (shift === "1" || shift === "2" || shift === "3")) {
      checkpointSet.add(`${channel}-shift-${shift}`)
    }
  })
  const covered = checkpointSet.size
  const completionPct = Math.round((covered / TOTAL_CHECKPOINTS) * 100)

  // Top 5
  const top5 = topNCount(ngEntries, (e) => getProblemRemarkTypeOnly(e), 5)
  const pct = (v) => (ng ? Math.round((v / ng) * 100) : 0)
  const top5Lines =
    ng === 0
      ? ["Hari ini tidak terdapat NG master."]
      : top5.map((x, i) => `${i + 1}. ${x.k} - ${x.v} (${pct(x.v)}%)`)

  // NG Summary Table rows (JANGAN DIUBAH)
  const ringkasRows = ngEntries.map((e, idx) => [
    String(idx + 1),
    String(e.Tanggal || "-").split("T")[0],
    normalizeChannel(e.Channel),
    String(e.Code || "-"),
    String(e.Master || "-"),
    String(getProblemRemarkTypeOnly(e)),
  ])

  // Exec + Findings
  const executiveSummary =
    `Pada tanggal ${filterDate}, pemeriksaan dilakukan terhadap ${total} master. ` +
    `Hasil menunjukkan ${ng} NG (${ngRate}%) dan ${ok} OK (${okRate}%). ` +
    `Inspection Completion tercatat sebesar ${completionPct}%.`

  const keyFindings = []
  if (ng === 0) keyFindings.push("Tidak ditemukan NG pada periode laporan.")
  if (ng > 0 && top5[0]) keyFindings.push(`Problem dominan: ${top5[0].k} (${pct(top5[0].v)}% dari total NG).`)
  keyFindings.push("NG dikelompokkan per channel untuk mempermudah traceability dan evaluasi tindakan korektif.")
  keyFindings.push("Rekomendasi: review root cause dan validasi tindakan korektif untuk problem dominan.")

  const { jsPDF } = window.jspdf
  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" })
  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()

  const now = new Date()
  const pad2 = (n) => String(n).padStart(2, "0")
  const genAt = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())} ${pad2(now.getHours())}:${pad2(now.getMinutes())}`

  const docId = `QA-DQR-${filterDate}`
  const rev = "00"

  const redrawHeaderMain = () => {
    pdfDrawHeader(doc, {
      titleLeft: "QA MASTER MANAGEMENT – DAILY MASTER REPORT",
      subtitleLeft: "SKF Indonesia | Quality Assurance Department",
      rightText: `Doc ID: ${docId} | Rev: ${rev}`,
    })
  }

  // =========================
  // PAGE 1
  // =========================
  redrawHeaderMain()

  const infoBottomY = pdfInfoBoxClean(doc, {
    dateStr: filterDate,
    genAt,
    totalChecked: total,
    completionPct,
  })

  let cursorY = infoBottomY + 10

  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.setTextColor(20)
  doc.text("B. Performance Overview", PDF_MARGIN_L, cursorY)

  cursorY += 7
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10.5)
  doc.text("1. OK vs NG Distribution", PDF_MARGIN_L, cursorY)

  const donutImg = pdfMakeDonutImageNoText({ ok, ng })
  const imgW = 52
  const imgH = 52
  const imgX = PDF_MARGIN_L
  const imgY = cursorY + 5

  if (donutImg) {
    doc.addImage(donutImg, "PNG", imgX, imgY, imgW, imgH)

    const centerX = imgX + imgW / 2
    const centerY = imgY + imgH / 2

    doc.setTextColor(20)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.text("OK Rate", centerX, centerY - 3, { align: "center" })

    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.text(`${okRate}%`, centerX, centerY + 6, { align: "center" })
  } else {
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9.8)
    doc.text("Chart tidak tersedia (Chart.js belum ter-load).", PDF_MARGIN_L, imgY + 6)
  }

  // Stats kanan (colon sejajar)
  const textX = imgX + imgW + 16
  const colonX = textX + 44
  const valueX = colonX + 3
  let statY = imgY + 10

  doc.setTextColor(20)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.8)

  const drawStat = (label, value) => {
    doc.text(label, textX, statY, { maxWidth: colonX - textX - 2 })
    doc.text(":", colonX, statY)
    doc.text(String(value), valueX, statY, { maxWidth: pageW - PDF_MARGIN_R - valueX })
    statY += 6
  }

  drawStat("Total Checked", total)
  drawStat("OK", `${ok} (${okRate}%)`)
  drawStat("NG", `${ng} (${ngRate}%)`)
  drawStat("Inspection Completion", `${completionPct}%`)

  // Top 5
  let y = imgY + imgH + 12
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10.5)
  doc.setTextColor(20)
  doc.text("2. Master NG (Top 5 Problem)", PDF_MARGIN_L, y)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.6)
  y += 8
  top5Lines.forEach((line) => {
    doc.text(line, PDF_MARGIN_L + 2, y, { maxWidth: pageW - PDF_MARGIN_L - PDF_MARGIN_R })
    y += 5.0
  })

  // NG Summary Table (OK, jangan ubah)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10.5)
  doc.text("3. NG Summary Table", PDF_MARGIN_L, y + 4)

  doc.autoTable({
    startY: y + 8,
    head: [["No", "Tanggal", "Channel", "Code", "Master", "Problem"]],
    body: ringkasRows.length ? ringkasRows : [["-", "-", "-", "-", "-", "-"]],
    theme: "grid",
    styles: {
      font: "helvetica",
      fontSize: 8.4,
      cellPadding: 2,
      textColor: [0, 0, 0],
      fillColor: [255, 255, 255],
      lineColor: [207, 207, 207],
      lineWidth: 0.2,
    },
    headStyles: {
      fontStyle: "bold",
      textColor: [0, 0, 0],
      fillColor: [224, 224, 224],
      lineColor: [207, 207, 207],
    },
    alternateRowStyles: { fillColor: [250, 250, 250] },
    margin: { left: PDF_MARGIN_L, right: PDF_MARGIN_R },
    columnStyles: {
      0: { cellWidth: 8 },
      1: { cellWidth: 24 },
      2: { cellWidth: 34 },
      3: { cellWidth: 20 },
      4: { cellWidth: 52 },
      5: { cellWidth: pageW - (PDF_MARGIN_L + PDF_MARGIN_R) - (8 + 24 + 34 + 20 + 52) },
    },
  })

  // C. Executive Summary (auto page break)
  let yC = doc.lastAutoTable.finalY + 10
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.6)
  const execLines = doc.splitTextToSize(executiveSummary, pageW - PDF_MARGIN_L - PDF_MARGIN_R)
  const execHeight = 7 + execLines.length * 4.6
  yC = pdfEnsureSpace(doc, yC, execHeight + 10, redrawHeaderMain)

  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.setTextColor(20)
  doc.text("C. Executive Summary", PDF_MARGIN_L, yC)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.6)
  doc.setTextColor(20)
  doc.text(execLines, PDF_MARGIN_L, yC + 7)

  // D. Key Findings (auto page break)
  let yD = yC + 7 + execLines.length * 4.6 + 10
  const bulletLinesTotal = keyFindings
    .slice(0, 6)
    .flatMap((t) => doc.splitTextToSize(`• ${t}`, pageW - PDF_MARGIN_L - PDF_MARGIN_R))
  const keyHeight = 7 + bulletLinesTotal.length * 4.8
  yD = pdfEnsureSpace(doc, yD, keyHeight + 10, redrawHeaderMain)

  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.setTextColor(20)
  doc.text("D. Key Findings", PDF_MARGIN_L, yD)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9.6)
  doc.setTextColor(20)

  let bulletY = yD + 7
  keyFindings.slice(0, 6).forEach((t) => {
    const lines = doc.splitTextToSize(`• ${t}`, pageW - PDF_MARGIN_L - PDF_MARGIN_R)
    const needed = lines.length * 4.8
    bulletY = pdfEnsureSpace(doc, bulletY, needed + 6, redrawHeaderMain)
    if (bulletY === 34) {
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("D. Key Findings (continued)", PDF_MARGIN_L, bulletY)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(9.6)
      bulletY += 7
    }
    doc.text(lines, PDF_MARGIN_L, bulletY)
    bulletY += needed
  })

// =========================
// PAGE 2+: NG DETAIL
// =========================
doc.addPage()
redrawHeaderMain()

// --- Subjudul NG detail hanya untuk halaman pertama NG detail
doc.setFont("helvetica", "bold")
doc.setFontSize(11)
doc.setTextColor(20)
doc.text("NG DETAIL REPORT", PDF_MARGIN_L, 33)

doc.setFont("helvetica", "normal")
doc.setFontSize(9.6)
doc.setTextColor(PDF_GREY_TEXT)
doc.text(`Date: ${filterDate} | Generated at: ${genAt}`, PDF_MARGIN_L, 39)

let detY = 52 // jarak nyaman sebelum CHANNEL

// flag supaya halaman lanjutan NG detail tidak nulis subjudul lagi
let isNgDetailFirstPage = true

const redrawHeaderDetail = () => {
  redrawHeaderMain()

  // hanya halaman pertama NG detail yang punya subjudul
  if (isNgDetailFirstPage) {
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.setTextColor(20)
    doc.text("NG DETAIL REPORT", PDF_MARGIN_L, 33)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9.6)
    doc.setTextColor(PDF_GREY_TEXT)
    doc.text(`Date: ${filterDate} | Generated at: ${genAt}`, PDF_MARGIN_L, 39)

    detY = 52
  } else {
    // halaman lanjutan: langsung mulai konten, tanpa subjudul
    detY = 34
  }
}

const ensureDetail = (need) => {
  const pageH = doc.internal.pageSize.getHeight()
  const safeBottom = pageH - PDF_SAFE_BOTTOM_TEXT
  if (detY + need <= safeBottom) return

  // pindah halaman
  doc.addPage()

  // mulai dari halaman ke-2 NG detail, subjudul dimatikan
  isNgDetailFirstPage = false

  redrawHeaderDetail()
}

const groups = groupByChannel(ngEntries)

if (!groups.length) {
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(20)
  doc.text("Tidak ada NG pada tanggal ini.", PDF_MARGIN_L, detY)
} else {
  groups.forEach(([chName, arr]) => {
    ensureDetail(18)

    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.setTextColor(20)
    doc.text(`CHANNEL: ${chName}`, PDF_MARGIN_L, detY)
    detY += 8

    arr.forEach((e) => {
      ensureDetail(65)

      const tanggal = String(e.Tanggal || "-").split("T")[0]
      const code = String(e.Code || "-")
      const master = String(e.Master || "-")
      const ts = String(e.Timestamp || "-")
      const shift = normalizeShift(e.Shift)
      const problem = getProblemRemarkTypeOnly(e)
      const rd = String(e.RemarkDetail ?? "-")
      const rvRaw = String(e.RemarkValue ?? "").trim()

      // ✅ Case ID cuma tanggal + code
      const caseId = `${tanggal}_${code}`

      const remarkValue = rvRaw
        ? `Nilai master berubah menjadi ${rvRaw}`
        : "Tidak terdapat perubahan nilai measurement."

      const finalY = pdfDrawCaseBox(doc, detY, {
        caseId,
        master,
        problem,
        remarkDetail: rd,
        remarkValue,
        ts,
        shift,
        code,
      })

      detY = finalY + 8
    })

    detY += 2
  })
}


  // =========================
  // FOOTER + WATERMARK ALL PAGES
  // =========================
  const pageCount = doc.getNumberOfPages()
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p)
    pdfAddWatermark(doc)

    doc.setDrawColor(200)
    doc.setLineWidth(0.2)
    doc.line(PDF_MARGIN_L, pageH - PDF_FOOTER_LINE_Y_OFFSET, pageW - PDF_MARGIN_R, pageH - PDF_FOOTER_LINE_Y_OFFSET)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(8.8)
    doc.setTextColor(90)
    doc.text("Prepared by: QA Master Management System", PDF_MARGIN_L, pageH - 8)
    doc.text(`Page ${p} / ${pageCount}`, pageW - PDF_MARGIN_R, pageH - 8, { align: "right" })
  }

  doc.save(`Daily_Quality_Report_${filterDate}.pdf`)
}

// supaya aman bisa dipanggil dari handler manapun
window.downloadDailyPdfReportStyleA = downloadDailyPdfReportStyleA



// ===============================
// HIDE CHANNELS ON STATUS TRACKER
// (Channel 4, 6, 15 disembunyikan)
// ===============================
;(function () {
  const HIDDEN = new Set(["4", "6", "15"])

  function normalizeChannelText(text) {
    const s = String(text ?? "").trim()
    const m = s.match(/(\d+)/)
    return m ? m[1] : s
  }

  function removeHiddenRows() {
    const tbody = document.getElementById("channelTable")
    if (!tbody) return

    const rows = Array.from(tbody.querySelectorAll("tr"))
    rows.forEach((tr) => {
      const firstCell = tr.querySelector("td")
      if (!firstCell) return

      const chNum = normalizeChannelText(firstCell.textContent)
      if (HIDDEN.has(chNum)) tr.remove()
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", removeHiddenRows)
  } else {
    removeHiddenRows()
  }

  const tbody = document.getElementById("channelTable")
  if (!tbody) return

  const obs = new MutationObserver(() => removeHiddenRows())
  obs.observe(tbody, { childList: true, subtree: true })
})()
