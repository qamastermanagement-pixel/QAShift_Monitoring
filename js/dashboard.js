let allData = []
let chartInstance = null
const CONFIG = window.CONFIG // Declare CONFIG variable from window object

// Initialize dashboard when page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Dashboard.js loaded")
  console.log("[v0] CONFIG from config.js:", CONFIG)

  // Set today's date as default filter
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("filterDate").value = today

  // Load data from Google Sheets
  loadData()

  // Filter date change listener
  document.getElementById("filterDate").addEventListener("change", () => {
    filterAndDisplayData()
  })
})

// Load data from Google Apps Script
async function loadData() {
  console.log("[v0] Loading data from Google Sheets...")
  console.log("[v0] Apps Script URL:", CONFIG.APPS_SCRIPT_URL)

  try {
    const response = await fetch(CONFIG.APPS_SCRIPT_URL)
    const result = await response.json()

    console.log("[v0] Response:", result)

    if (result.status === "success") {
      allData = result.data || []
      console.log("[v0] Loaded data:", allData.length, "entries")
    } else {
      console.error("[v0] Error from API:", result.message)
      allData = []
    }

    filterAndDisplayData()
  } catch (error) {
    console.error("[v0] Error loading data:", error)
    alert("Gagal memuat data. Pastikan Google Sheets sudah ada data.")
    allData = []
    filterAndDisplayData()
  }
}

// Filter and display data based on selected date
function filterAndDisplayData() {
  const filterDate = document.getElementById("filterDate").value

  console.log("[v0] Filtering data for date:", filterDate)

  // Filter data by date
  const filteredData = allData.filter((entry) => {
    const entryDate = entry.Tanggal
    return entryDate === filterDate
  })

  console.log("[v0] Filtered data:", filteredData.length, "entries")

  // Update stats
  updateStats(filteredData)

  // Update channel table
  updateChannelTable(filteredData)

  // Update chart
  updateChart(filteredData)
}

// Update statistics cards
function updateStats(data) {
  const totalMasters = data.length
  let okCount = 0
  let ngCount = 0

  data.forEach((entry) => {
    if (entry.Status === "OK") {
      okCount++
    } else {
      ngCount++
    }
  })

  const okRate = totalMasters > 0 ? Math.round((okCount / totalMasters) * 100) : 0
  const coverage = Math.round((totalMasters / 48) * 100)

  document.getElementById("totalChecked").textContent = totalMasters
  document.getElementById("mastersOk").textContent = okCount
  document.getElementById("okRate").textContent = okRate
  document.getElementById("mastersNg").textContent = ngCount
  document.getElementById("ngCount").textContent = ngCount
  document.getElementById("coverage").textContent = `${coverage}%`
  document.getElementById("checkPoints").textContent = totalMasters
}

// Update channel status table
function updateChannelTable(data) {
  const tableBody = document.getElementById("channelTable")
  tableBody.innerHTML = ""

  // Create status map: channel -> shift -> {ok, ng}
  const statusMap = {}

  data.forEach((entry) => {
    const channel = entry.Channel
    const shift = entry.Shift
    const status = entry.Status

    if (!statusMap[channel]) {
      statusMap[channel] = {}
    }

    if (!statusMap[channel][shift]) {
      statusMap[channel][shift] = { ok: 0, ng: 0 }
    }

    if (status === "OK") {
      statusMap[channel][shift].ok++
    } else {
      statusMap[channel][shift].ng++
    }
  })

  console.log("[v0] Status map:", statusMap)

  // Generate table rows for 16 channels
  for (let channel = 1; channel <= 16; channel++) {
    const channelName = `Channel ${channel}`
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

// Generate cell for shift status
function generateShiftCell(statusMap, channel, shift) {
  const channelData = statusMap[channel]

  if (!channelData || !channelData[shift]) {
    return `<td><span class="status-indicator empty">-</span></td>`
  }

  const shiftData = channelData[shift]

  if (shiftData.ng > 0) {
    return `<td><span class="status-indicator ng">${shiftData.ng}</span></td>`
  } else {
    return `<td><span class="status-indicator ok">✓</span></td>`
  }
}

// Update pie chart
function updateChart(data) {
  let okCount = 0
  let ngCount = 0

  data.forEach((entry) => {
    if (entry.Status === "OK") {
      okCount++
    } else {
      ngCount++
    }
  })

  console.log("[v0] Chart data - OK:", okCount, "NG:", ngCount)

  const ctx = document.getElementById("statusChart").getContext("2d")

  // Destroy existing chart if exists
  if (chartInstance) {
    chartInstance.destroy()
  }

  // Create new chart using vanilla Chart.js
  chartInstance = new window.Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["OK Masters", "NG Masters"],
      datasets: [
        {
          data: [okCount, ngCount],
          backgroundColor: ["#10B981", "#EF4444"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || ""
              const value = context.parsed || 0
              const total = context.dataset.data.reduce((a, b) => a + b, 0)
              const percentage = total > 0 ? Math.round((value / total) * 100) : 0
              return `${label}: ${value} (${percentage}%)`
            },
          },
        },
      },
    },
  })
}
