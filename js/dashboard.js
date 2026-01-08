let allData = []
let chartInstance = null

// ================================
// INIT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v1] Dashboard.js loaded")
  console.log("[v1] CONFIG:", window.CONFIG)

  // default date = today
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("filterDate").value = today

  loadData()

  document
    .getElementById("filterDate")
    .addEventListener("change", filterAndDisplayData)
})

// ================================
// LOAD DATA
// ================================
async function loadData() {
  try {
    console.log("[v1] Fetching data...")
    const res = await fetch(window.CONFIG.APPS_SCRIPT_URL)
    const result = await res.json()

    if (result.status === "success") {
      allData = result.data || []
      console.log("[v1] Data loaded:", allData.length)
    } else {
      allData = []
      console.error("[v1] API error:", result.message)
    }

    filterAndDisplayData()
  } catch (err) {
    console.error("[v1] Fetch failed:", err)
    allData = []
    filterAndDisplayData()
  }
}

// ================================
// FILTER
// ================================
function filterAndDisplayData() {
  const filterDate = document.getElementById("filterDate").value
  console.log("[v1] Filter date:", filterDate)

  const filteredData = allData.filter((entry) => {
    const entryDate = String(entry.Tanggal).split("T")[0]
    return entryDate === filterDate
  })

  console.log("[v1] Filtered:", filteredData.length)

  updateStats(filteredData)
  updateChannelTable(filteredData)
  updateChart(filteredData)
  updateNGTrackerTable(filteredData);

}

// ================================
// STATS (COVERAGE BASED ON CHANNEL)
// ================================
function updateStats(data) {
  const TOTAL_CHANNELS = 16
  const TOTAL_SHIFTS = 3
  const TOTAL_CHECKPOINTS = TOTAL_CHANNELS * TOTAL_SHIFTS // 48

  let okCount = 0
  let ngCount = 0

  const checkpointSet = new Set()

  data.forEach((entry) => {
    const channel = entry.Channel
    const shift = String(entry.Shift)

    if (entry.Status === "OK") okCount++
    else ngCount++

    checkpointSet.add(`${channel}-shift-${shift}`)
  })

  const covered = checkpointSet.size
  const coverage = Math.round((covered / TOTAL_CHECKPOINTS) * 100)
  const totalEntries = data.length
  const okRate =
    totalEntries > 0 ? Math.round((okCount / totalEntries) * 100) : 0

  document.getElementById("totalChecked").textContent = totalEntries
  document.getElementById("mastersOk").textContent = okCount
  document.getElementById("mastersNg").textContent = ngCount
  document.getElementById("ngCount").textContent = ngCount
  document.getElementById("okRate").textContent = okRate
  document.getElementById("coverage").textContent = `${coverage}%`
  document.getElementById("checkPoints").textContent =
    `${covered}/${TOTAL_CHECKPOINTS}`
}

// ================================
// CHANNEL TABLE
// ================================
function updateChannelTable(data) {
  const tableBody = document.getElementById("channelTable")
  tableBody.innerHTML = ""

  const statusMap = {}

  data.forEach((entry) => {
    const channel = entry.Channel
    const shift = String(entry.Shift)
    const status = entry.Status

    if (!statusMap[channel]) statusMap[channel] = {}
    if (!statusMap[channel][shift])
      statusMap[channel][shift] = { ok: 0, ng: 0 }

    status === "OK"
      ? statusMap[channel][shift].ok++
      : statusMap[channel][shift].ng++
  })

  for (let i = 1; i <= 16; i++) {
    const channelName = `Channel ${i}`
    const row = document.createElement("tr")

    row.innerHTML = `
      <td><strong>${channelName}</strong></td>
      ${generateShiftCell(statusMap, channelName, "1")}
      ${generateShiftCell(statusMap, channelName, "2")}
      ${generateShiftCell(statusMap, channelName, "3")}
    `

    tableBody.appendChild(row)
  }
}

function generateShiftCell(map, channel, shift) {
  const data = map[channel]?.[shift]

  if (!data) {
    return `<td><span class="status-indicator empty">-</span></td>`
  }

  if (data.ng > 0) {
    return `<td><span class="status-indicator ng">${data.ng}</span></td>`
  }

  return `<td><span class="status-indicator ok">✓</span></td>`
}

// ================================
// CHART
// ================================
function updateChart(data) {
  let ok = 0
  let ng = 0

  data.forEach((e) => (e.Status === "OK" ? ok++ : ng++))

  const ctx = document.getElementById("statusChart").getContext("2d")

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
              const pct =
                total > 0 ? Math.round((c.parsed / total) * 100) : 0
              return `${c.label}: ${c.parsed} (${pct}%)`
            },
          },
        },
      },
    },
  })
}

function updateNGTrackerTable(data) {
  const tbody = document.getElementById("remarkTableBody");
  tbody.innerHTML = "";

  //Tampilkan SEMUA NG, BAIK ADA REMARK ATAU TIDAK
  const ngEntries = data.filter(entry => entry.Status === "NG");

  if (ngEntries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center">Tidak ada NG hari ini</td></tr>`;
    return;
  }

  ngEntries.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.Tanggal}</td>
      <td>${entry.Channel}</td>
      <td>${entry.Shift}</td>
      <td>${entry.Master}</td>
      <td>${entry.Remark || ""}</td>
      <td>${entry.Kategori || "-"}</td>
      <td>${entry.Code || "-"}</td>
    `;
    tbody.appendChild(row);
  });
}
