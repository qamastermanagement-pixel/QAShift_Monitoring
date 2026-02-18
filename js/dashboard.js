let allData = []
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

// mode problem untuk dashboard (opsional dari window.CONFIG)
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

  // default: RemarkType
  return rt || "-"
}

function normalizeStatus(val) {
  const s = String(val ?? "").trim().toUpperCase()
  if (s === "OK") return "OK"
  if (s === "NG") return "NG"
  return "UNKNOWN"
}

function normalizeChannel(val) {
  return String(val ?? "").trim()
}

function normalizeShift(val) {
  const s = String(val ?? "").trim()
  return s || "-"
}

// ================================
// LOADING MODAL FUNCTIONS
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
  console.log("[v4] Dashboard.js loaded")
  console.log("[v4] CONFIG:", window.CONFIG)

  const today = new Date().toISOString().split("T")[0]
  document.getElementById("filterDate").value = today

  loadData()

  document.getElementById("filterDate").addEventListener("change", () => {
    showLoading("Memuat data...")
    setTimeout(() => {
      filterAndDisplayData()
      hideLoading()
    }, 200)
  })

  const btnPdf = document.getElementById("btnDownloadNGPdf")
  if (btnPdf) btnPdf.addEventListener("click", downloadNGFormalPdf)
})

// ================================
// LOAD DATA
// ================================
async function loadData() {
  showLoading("Memuat data dashboard...")

  try {
    console.log("[v4] Fetching data...")
    const res = await fetch(window.CONFIG.APPS_SCRIPT_URL)
    const result = await res.json()

    if (result.status === "success") {
      allData = result.data || []
      console.log("[v4] Data loaded:", allData.length)
    } else {
      allData = []
      console.error("[v4] API error:", result.message)
      alert("Gagal memuat data dashboard: " + (result.message || "unknown error"))
    }

    filterAndDisplayData()
  } catch (err) {
    console.error("[v4] Fetch failed:", err)
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
  const filterDate = document.getElementById("filterDate").value
  console.log("[v4] Filter date:", filterDate)

  const filteredData = allData.filter((entry) => {
    const entryDate = String(entry.Tanggal).split("T")[0]
    return entryDate === filterDate
  })

  console.log("[v4] Filtered:", filteredData.length)

  updateStats(filteredData)
  updateChannelTable(filteredData)
  updateChart(filteredData)
  updateProblemDonut(filteredData)
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

    // Coverage cuma untuk channel yang valid (sesuai daftar)
    if (CHANNEL_SET.has(channel) && (shift === "1" || shift === "2" || shift === "3")) {
      checkpointSet.add(`${channel}-shift-${shift}`)
    }
  })

  const covered = checkpointSet.size
  const coverage = Math.round((covered / TOTAL_CHECKPOINTS) * 100)
  const totalEntries = data.length
  const okRate = totalEntries > 0 ? Math.round((okCount / totalEntries) * 100) : 0

  document.getElementById("totalChecked").textContent = totalEntries
  document.getElementById("mastersOk").textContent = okCount
  document.getElementById("mastersNg").textContent = ngCount
  document.getElementById("ngCount").textContent = ngCount
  document.getElementById("okRate").textContent = okRate
  document.getElementById("coverage").textContent = `${coverage}%`
  document.getElementById("checkPoints").textContent = `${covered}/${TOTAL_CHECKPOINTS}`

  // Optional debug
  if (unknownCount > 0) {
    console.warn("[v4] Found UNKNOWN status rows:", unknownCount)
  }
}

// ================================
// CHANNEL TABLE
// ================================
function updateChannelTable(data) {
  const tableBody = document.getElementById("channelTable")
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
  // jika cuma unknown
  return `<td><span class="status-indicator empty">?</span></td>`
}

// ================================
// CHART 1: OK vs NG
// ================================
function updateChart(data) {
  let ok = 0
  let ng = 0

  data.forEach((e) => (normalizeStatus(e.Status) === "OK" ? ok++ : (normalizeStatus(e.Status) === "NG" ? ng++ : null)))

  const canvas = document.getElementById("statusChart")
  if (!canvas) return
  const ctx = canvas.getContext("2d")

  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["OK Masters", "NG Masters"],
      datasets: [
        {
          data: [ok, ng],
          backgroundColor: ["#10B981", "#EF4444"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => {
              const total = ok + ng
              const pct = total > 0 ? Math.round((c.parsed / total) * 100) : 0
              return `${c.label}: ${pct}%`
            },
          },
        },
      },
    },
  })

  // Legend stacked kebawah + persen aja
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
    div.className = "problem-legend-item" // reuse style stacked legend
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
// CHART 2: NG Problem Distribution (same doughnut style)
// ================================
function updateProblemDonut(data) {
  const canvas = document.getElementById("problemDonutChart")
  if (!canvas) return
  const ctx = canvas.getContext("2d")

  const legend = document.getElementById("problemLegend")
  if (legend) legend.innerHTML = ""

  // ambil NG saja
  const ng = data.filter((e) => normalizeStatus(e.Status) === "NG")

  // hitung problem dari RemarkType/RemarkValue sesuai mode
  const count = {}
  ng.forEach((e) => {
    const p = getProblemLabel(e)
    count[p] = (count[p] || 0) + 1
  })

  // urutin yang paling banyak
  const pairs = Object.entries(count).map(([label, val]) => ({ label, val }))
  pairs.sort((a, b) => b.val - a.val)

  // kalau kosong, bikin chart dummy
  const labels = pairs.length ? pairs.map((x) => x.label) : ["No NG"]
  const values = pairs.length ? pairs.map((x) => x.val) : [1]

  // warna default
  const COLORS = ["#3B82F6", "#F59E0B", "#A855F7", "#EF4444", "#10B981", "#64748B"]
  const bg = labels.map((_, i) => COLORS[i % COLORS.length])

  if (problemChartInstance) problemChartInstance.destroy()

  problemChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: bg,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => {
              const total = values.reduce((a, b) => a + b, 0)
              const pct = total > 0 ? Math.round((c.parsed / total) * 100) : 0
              return `${c.label}: ${pct}%`
            },
          },
        },
      },
    },
  })

  // legend custom -> kebawah + cuma (xx%)
  if (legend) {
    const total = values.reduce((a, b) => a + b, 0)

    labels.forEach((lbl, i) => {
      const val = values[i]
      const pct = total > 0 ? Math.round((val / total) * 100) : 0

      const item = document.createElement("div")
      item.className = "problem-legend-item"
      item.innerHTML = `
        <span class="problem-legend-swatch" style="background:${bg[i]};"></span>
        <span class="problem-legend-text">
          <span class="problem-legend-label">${lbl}</span>
          <span class="problem-legend-pct">(${pct}%)</span>
        </span>
      `
      legend.appendChild(item)
    })
  }
}

// ================================
// NG TRACKER TABLE
// ================================
function updateNGTrackerTable(data) {
  const tbody = document.getElementById("remarkTableBody")
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

    // ✅ ID unik (lebih aman): gabungan beberapa field + tanggal + problem
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

// ================================
// FORMAL PDF REPORT (UNCHANGED)
// ================================
function downloadNGFormalPdf() {
  const tbody = document.getElementById("remarkTableBody")
  if (!tbody) {
    alert("ERROR: #remarkTableBody tidak ditemukan.")
    return
  }

  const filterDate = document.getElementById("filterDate")?.value || new Date().toISOString().split("T")[0]
  const rows = Array.from(tbody.querySelectorAll("tr"))

  // Kalau barisnya cuma placeholder "Tidak ada NG..."
  if (rows.length === 1) {
    const tds = rows[0].querySelectorAll("td")
    if (tds.length === 1 && (tds[0].textContent || "").toLowerCase().includes("tidak ada ng")) {
      alert(`Tidak ada NG untuk tanggal ${filterDate}.`)
      return
    }
  }

  // Ambil data dari tabel (6 kolom), tapi PDF hanya pakai 5 kolom pertama (tanpa "Detail")
  const data = []
  rows.forEach((tr) => {
    const cols = Array.from(tr.querySelectorAll("td")).map((td) => (td.textContent || "").trim())

    // ✅ sekarang tabel = 6 kolom
    if (cols.length >= 6) {
      const rowDate = String(cols[0]).split("T")[0]
      if (rowDate === filterDate) {
        data.push(cols.slice(0, 5)) // Tanggal, Channel, Code, Master, Problem
      }
    }
  })

  if (data.length === 0) {
    alert(`Tidak ada NG untuk tanggal ${filterDate}.`)
    return
  }

  // helper countBy
  const countBy = (idx) => {
    const map = {}
    data.forEach((r) => {
      const key = (r[idx] || "-").trim() || "-"
      map[key] = (map[key] || 0) + 1
    })
    return map
  }

  const topOne = (map) => {
    let bestK = "-"
    let bestV = 0
    Object.entries(map).forEach(([k, v]) => {
      if (v > bestV) {
        bestK = k
        bestV = v
      }
    })
    return { key: bestK, val: bestV }
  }

  // indeks baru:
  // 0 Tanggal, 1 Channel, 2 Code, 3 Master, 4 Problem
  const topChannel = topOne(countBy(1))
  const topProblem = topOne(countBy(4))
  const topMaster = topOne(countBy(3))
  const totalNG = data.length

  const { jsPDF } = window.jspdf
  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" })

  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()

  const now = new Date()
  const pad2 = (n) => String(n).padStart(2, "0")
  const generatedAt = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())} ${pad2(now.getHours())}:${pad2(now.getMinutes())}`

  // watermark
  doc.saveGraphicsState()
  doc.setTextColor(210)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(26)
  doc.text("CONFIDENTIAL", pageW / 2, pageH / 2 - 10, { align: "center", angle: 25 })
  doc.setFontSize(13)
  doc.text("INTERNAL USE ONLY", pageW / 2, pageH / 2 + 5, { align: "center", angle: 25 })
  doc.restoreGraphicsState()

  // header
  doc.setTextColor(20)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(15)
  doc.text("QA MASTER MANAGEMENT – NG TRACKER REPORT", 14, 18)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10.5)
  doc.text("SKF Indonesia | Quality Assurance Department", 14, 24)

  doc.setLineWidth(0.3)
  doc.line(14, 28, pageW - 14, 28)

  // info box
  const boxX = 14
  const boxY = 32
  const boxW = pageW - 28
  const boxH = 24

  doc.setDrawColor(170)
  doc.setLineWidth(0.2)
  doc.rect(boxX, boxY, boxW, boxH)

  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.text("Report Information", boxX + 3, boxY + 7)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text(`Date: ${filterDate}`, boxX + 3, boxY + 14)
  doc.text(`Total NG: ${totalNG}`, boxX + boxW / 2 + 2, boxY + 14)
  doc.setFontSize(9.5)
  doc.text(`Generated at: ${generatedAt}`, boxX + 3, boxY + 20)

  // table title
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("A. NG TRACKER DETAIL", 14, boxY + boxH + 10)

  // table body
  const body = data.map((r, i) => [String(i + 1), ...r])

  doc.autoTable({
    startY: boxY + boxH + 14,
    head: [["No", "Tanggal", "Channel", "Code", "Master", "Problem"]],
    body,
    theme: "grid",
    styles: { font: "helvetica", fontSize: 8.8, cellPadding: 2 },
    headStyles: { fontStyle: "bold" },
    margin: { left: 14, right: 14 },
    columnStyles: {
      0: { cellWidth: 8 },
      1: { cellWidth: 22 },
      2: { cellWidth: 26 },
      3: { cellWidth: 20 },
      4: { cellWidth: 55 },
      5: { cellWidth: 55 },
    },
  })

  // summary
  const afterTableY = doc.lastAutoTable.finalY + 10
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("B. SUMMARY", 14, afterTableY)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text(`• Total NG: ${totalNG}`, 16, afterTableY + 7)
  doc.text(`• Top Channel: ${topChannel.key} (${topChannel.val})`, 16, afterTableY + 13)
  doc.text(`• Top Problem: ${topProblem.key} (${topProblem.val})`, 16, afterTableY + 19)
  doc.text(`• Top Master: ${topMaster.key} (${topMaster.val})`, 16, afterTableY + 25)

  // footer
  const pageCount = doc.getNumberOfPages()
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p)
    doc.setDrawColor(200)
    doc.setLineWidth(0.2)
    doc.line(14, pageH - 18, pageW - 14, pageH - 18)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.text("Prepared by: QA Master Management System", 14, pageH - 12)
    doc.text("Approved by: ____________________", 14, pageH - 7)
    doc.text(`Page ${p} / ${pageCount}`, pageW - 14, pageH - 10, { align: "right" })
  }

  doc.save(`NG_Tracker_Report_${filterDate}.pdf`)
}

// ===============================
// HIDE CHANNELS ON STATUS TRACKER
// (Channel 4, 6, 15 disembunyikan)
// Tempel di PALING BAWAH dashboard.js
// ===============================
(function () {
  const HIDDEN = new Set(["4", "6", "15"]);

  function normalizeChannelText(text) {
    const s = String(text ?? "").trim();
    // support "Channel 4" / "4" / "CH 4" dll
    const m = s.match(/(\d+)/);
    return m ? m[1] : s;
  }

  function removeHiddenRows() {
    const tbody = document.getElementById("channelTable");
    if (!tbody) return;

    const rows = Array.from(tbody.querySelectorAll("tr"));
    rows.forEach((tr) => {
      const firstCell = tr.querySelector("td");
      if (!firstCell) return;

      const chNum = normalizeChannelText(firstCell.textContent);
      if (HIDDEN.has(chNum)) tr.remove();
    });
  }

  // 1) coba bersihin sekali setelah load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", removeHiddenRows);
  } else {
    removeHiddenRows();
  }

  // 2) kalau tabel di-render ulang (karena filter tanggal / refresh), tetap kehapus
  const tbody = document.getElementById("channelTable");
  if (!tbody) return;

  const obs = new MutationObserver(() => removeHiddenRows());
  obs.observe(tbody, { childList: true, subtree: true });
})();

