// Import CONFIG from config.js
import { CONFIG } from "./config.js"

// Data master per channel (HARDCODED - tidak perlu Google Sheets)
const CHANNEL_MASTERS = {
  1: ["Master A1", "Master B1", "Master C1", "Master D1", "Master E1"],
  2: ["Master A2", "Master B2", "Master C2", "Master D2", "Master E2"],
  3: ["Master A3", "Master B3", "Master C3", "Master D3", "Master E3"],
  4: ["Master A4", "Master B4", "Master C4", "Master D4", "Master E4"],
  5: ["Master A5", "Master B5", "Master C5", "Master D5", "Master E5"],
  6: ["Master A6", "Master B6", "Master C6", "Master D6", "Master E6"],
  7: ["Master A7", "Master B7", "Master C7", "Master D7", "Master E7"],
  8: ["Master A8", "Master B8", "Master C8", "Master D8", "Master E8"],
  9: ["Master A9", "Master B9", "Master C9", "Master D9", "Master E9"],
  10: ["Master A10", "Master B10", "Master C10", "Master D10", "Master E10"],
  11: ["Master A11", "Master B11", "Master C11", "Master D11", "Master E11"],
  12: [
    { name: "OR Raceway Grinding", code: "A12de1" },
    { name: "OR Raceway Grinding", code: "A12de2" },
    { name: "IR Raceway Grinding", code: "A12Di1" },
    { name: "IR Raceway Grinding", code: "A12Di2" },
    { name: "IR Raceway Grinding", code: "A12Dk1" },
    { name: "IR Bore Grinding", code: "A12do1" },
    { name: "IR Bore Grinding", code: "A12do2" },
    { name: "OD Inspection", code: "A12AO1" },
    { name: "OD Inspection", code: "A12AO2" },
    { name: "OD Inspection", code: "A12AO3" },
    { name: "OD Inspection", code: "A12AO4" },
    { name: "OD Inspection", code: "A12dm1" },
    { name: "ID (Bore) Inspection", code: "A12AI1" },
    { name: "ID (Bore) Inspection", code: "A12AI2" },
    { name: "ID (Bore) Inspection", code: "A12AI3" },
    { name: "ID (Bore) Inspection", code: "A12AI4" },
    { name: "Bore Profile", code: "A12Mn1" },
    { name: "Pairing & Ball Filling", code: "A12PR1" },
    { name: "Pairing & Ball Filling", code: "A12PR2" },
    { name: "Pairing & Ball Filling", code: "A12PR3" },
    { name: "Pairing & Ball Filling", code: "A12PR4" },
    { name: "Rivet Check", code: "A12RV1" },
    { name: "Rivet Check", code: "A12RV2" },
    { name: "Rivet Check", code: "A12RV3" },
    { name: "Free run/Rotate Check", code: "A12AS1" },
    { name: "Free run/Rotate Check", code: "A12AS2" },
    { name: "Noise and Vibration lvl Check", code: "A12MV1" },
    { name: "Noise and Vibration lvl Check", code: "A12MV2" },
    { name: "Noise and Vibration lvl Check", code: "A12MV3" },
    { name: "Auto Clearance Check", code: "A12C21" },
    { name: "Auto Clearance Check", code: "A12Cn1" },
    { name: "Auto Clearance Check", code: "A12C31" },
    { name: "Auto Clearance Check", code: "A12C41" },
    { name: "Auto Clearance Check", code: "A12C51" },
    { name: "Seal Height Check", code: "A12AG1" },
    { name: "Seal Height Check", code: "A12AG2" },
    { name: "Seal Height Check", code: "A12AG3" },
    { name: "Missing: Rivet, Ball, Cage Check", code: "A12PO1" },
    { name: "Missing: Rivet, Ball, Cage Check", code: "A12PO2" },
    { name: "Missing: Rivet, Ball, Cage Check", code: "A12PO3" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A12SH1" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A12SH2" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A12SH3" },
    { name: "Bore Profile", code: "A12Mn2" },
    { name: "Bore Profile", code: "A12Mn3" },
    { name: "Bore Profile", code: "A12Mn4" },
  ],
  13: [
    { name: "OR Raceway Grinding", code: "A13de1" },
    { name: "OR Raceway Grinding", code: "A13de2" },
    { name: "IR Raceway Grinding", code: "A13Di1" },
    { name: "IR Raceway Grinding", code: "A13Di2" },
    { name: "IR Raceway Grinding", code: "A13Dk1" },
    { name: "IR Bore Grinding", code: "A13do1" },
    { name: "IR Bore Grinding", code: "A13do2" },
    { name: "Bore Profile", code: "A13Mn1" },
    { name: "OD Inspection", code: "A13Dm1" },
    { name: "OD Inspection", code: "A13AO1" },
    { name: "OD Inspection", code: "A13AO2" },
    { name: "OD Inspection", code: "A13AO3" },
    { name: "OD Inspection", code: "A13AO4" },
    { name: "ID (Bore) Inspection", code: "A13AI1" },
    { name: "ID (Bore) Inspection", code: "A13AI2" },
    { name: "ID (Bore) Inspection", code: "A13AI3" },
    { name: "ID (Bore) Inspection", code: "A13AI4" },
    { name: "Pairing & Ball Filling", code: "A13PR1" },
    { name: "Pairing & Ball Filling", code: "A13PR2" },
    { name: "Pairing & Ball Filling", code: "A13PR3" },
    { name: "Pairing & Ball Filling", code: "A13PR4" },
    { name: "Rivet Check", code: "A13RV1" },
    { name: "Rivet Check", code: "A13RV2" },
    { name: "Rivet Check", code: "A13RV3" },
    { name: "Noise and Vibration lvl Check", code: "A13MV1" },
    { name: "Noise and Vibration lvl Check", code: "A13MV2" },
    { name: "Noise and Vibration lvl Check", code: "A13MV3" },
    { name: "Auto Clearance Check", code: "A13C21" },
    { name: "Auto Clearance Check", code: "A13Cn1" },
    { name: "Auto Clearance Check", code: "A13C31" },
    { name: "Auto Clearance Check", code: "A13C41" },
    { name: "Auto Clearance Check", code: "A13C51" },
    { name: "Seal Height Check", code: "A13AG1" },
    { name: "Seal Height Check", code: "A13AG2" },
    { name: "Seal Height Check", code: "A13AG3" },
    { name: "Missing: Rivet, Ball, Cage Check", code: "A13PO1" },
    { name: "Missing: Rivet, Ball, Cage Check", code: "A13PO2" },
    { name: "Missing: Rivet, Ball, Cage Check", code: "A13PO3" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A13SH1" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A13SH2" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A13SH3" },
    { name: "Free run/Rotate Check", code: "A13AS1" },
    { name: "Free run/Rotate Check", code: "A13AS2" },
    { name: "Auto Clearance Check", code: "A13Cn2" },
    { name: "Auto Clearance Check", code: "A13Cn3" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A13SH4" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A13SH5" },
    { name: "Seal: Open, RS1/Z, 2RS1/2Z Check", code: "A13SH6" },
    { name: "Bore Profile", code: "A13Mn2" },
    { name: "Bore Profile", code: "A13Mn3" },
    { name: "Bore Profile", code: "A13Mn4" },
  ],
  14: ["Master A14", "Master B14", "Master C14", "Master D14", "Master E14"],
  15: ["Master A15", "Master B15", "Master C15", "Master D15", "Master E15"],
  16: ["Master A16", "Master B16", "Master C16", "Master D16", "Master E16"],
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Form.js loaded")
  console.log("[v0] CONFIG from config.js:", CONFIG)

  // Set today's date as default
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("tanggal").value = today

  // Handle basic info form submission
  document.getElementById("basicInfoForm").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted, going to step 2")
    goToStep2()
  })

  // Handle master check form submission
  document.getElementById("masterCheckForm").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("[v0] Master check form submitted")
    submitData()
  })
})

// Go to step 2 (master check)
function goToStep2() {
  console.log("[v0] goToStep2 function called")

  const tanggal = document.getElementById("tanggal").value
  const shift = document.getElementById("shift").value
  const npk = document.getElementById("npk").value
  const channel = document.getElementById("channel").value

  console.log("[v0] Form values:", { tanggal, shift, npk, channel })

  if (!tanggal || !shift || !npk || !channel) {
    alert("Semua field harus diisi!")
    return
  }

  // Store basic info in sessionStorage
  sessionStorage.setItem("tanggal", tanggal)
  sessionStorage.setItem("shift", shift)
  sessionStorage.setItem("npk", npk)
  sessionStorage.setItem("channel", channel)

  // Display selected channel info
  document.getElementById("selectedChannel").textContent = channel

  // Get masters for selected channel
  const masters = CHANNEL_MASTERS[channel]
  console.log("[v0] Masters for channel", channel, ":", masters)

  if (!masters) {
    alert("Data master untuk channel " + channel + " tidak ditemukan!")
    return
  }

  document.getElementById("totalMasters").textContent = masters.length

  // Generate master list
  const masterList = document.getElementById("masterList")
  masterList.innerHTML = ""

  masters.forEach((master, index) => {
    const masterName = typeof master === "string" ? master : `${master.name} (${master.code})`

    const masterItem = document.createElement("div")
    masterItem.className = "master-item"
    masterItem.innerHTML = `
      <div class="master-item-header">
        <div class="master-name">${index + 1}. ${masterName}</div>
        <div class="status-buttons">
          <button type="button" class="btn-ok" onclick="selectStatus(${index}, 'OK')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            OK
          </button>
          <button type="button" class="btn-ng" onclick="selectStatus(${index}, 'NG')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            NG
          </button>
        </div>
      </div>
      <div class="remark-field" id="remark-${index}">
        <label class="form-label">Remarks <span class="required">*</span></label>
        <textarea class="remark-textarea" id="remark-text-${index}" placeholder="Tuliskan keterangan untuk status NG..."></textarea>
      </div>
    `
    masterList.appendChild(masterItem)
  })

  console.log("[v0] Master list generated, switching to step 2")

  // Switch to step 2
  document.getElementById("step1").classList.remove("active")
  document.getElementById("step2").classList.add("active")
}

// Go back to step 1
function goToStep1() {
  document.getElementById("step2").classList.remove("active")
  document.getElementById("step1").classList.add("active")
}

// Select status for master
function selectStatus(index, status) {
  const masterItem = document.querySelectorAll(".master-item")[index]
  const okBtn = masterItem.querySelector(".btn-ok")
  const ngBtn = masterItem.querySelector(".btn-ng")
  const remarkField = document.getElementById(`remark-${index}`)

  // Remove active class from both buttons
  okBtn.classList.remove("active")
  ngBtn.classList.remove("active")

  // Add active class to selected button
  if (status === "OK") {
    okBtn.classList.add("active")
    remarkField.classList.remove("show")
    document.getElementById(`remark-text-${index}`).value = ""
  } else {
    ngBtn.classList.add("active")
    remarkField.classList.add("show")
  }

  // Store status
  okBtn.dataset.status = status
  ngBtn.dataset.status = status
}

async function submitData() {
  const channel = sessionStorage.getItem("channel")
  const masters = CHANNEL_MASTERS[channel]

  console.log("[v0] Submitting data...")
  console.log("[v0] Apps Script URL:", CONFIG.APPS_SCRIPT_URL)

  // Collect master check results
  const masterResults = []

  for (let i = 0; i < masters.length; i++) {
    const masterItem = document.querySelectorAll(".master-item")[i]
    const okBtn = masterItem.querySelector(".btn-ok")
    const ngBtn = masterItem.querySelector(".btn-ng")
    const status = okBtn.classList.contains("active") ? "OK" : ngBtn.classList.contains("active") ? "NG" : null

    if (!status) {
      const masterDisplay = typeof masters[i] === "string" ? masters[i] : `${masters[i].name} (${masters[i].code})`
      alert(`Mohon pilih status untuk ${masterDisplay}`)
      return
    }

    let remark = ""
    if (status === "NG") {
      remark = document.getElementById(`remark-text-${i}`).value.trim()
      if (!remark) {
        const masterDisplay = typeof masters[i] === "string" ? masters[i] : `${masters[i].name} (${masters[i].code})`
        alert(`Mohon isi remark untuk ${masterDisplay} yang berstatus NG`)
        return
      }
    }

    const masterData =
      typeof masters[i] === "string" ? { name: masters[i], code: "" } : { name: masters[i].name, code: masters[i].code }

    masterResults.push({
      name: masterData.name,
      code: masterData.code,
      status: status,
      remark: remark,
    })
  }

  // Prepare data to send
  const data = {
    tanggal: sessionStorage.getItem("tanggal"),
    shift: sessionStorage.getItem("shift"),
    npk: sessionStorage.getItem("npk"),
    channel: `Channel ${channel}`,
    masters: masterResults,
  }

  console.log("[v0] Data to send:", JSON.stringify(data, null, 2))

  // Show loading modal
  document.getElementById("loadingModal").classList.add("show")

  try {
    // Send data to Google Apps Script
    const response = await fetch(CONFIG.APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })

    console.log("[v0] Response status:", response.status)
    const result = await response.text()
    console.log("[v0] Response:", result)

    // Hide loading modal
    document.getElementById("loadingModal").classList.remove("show")

    // Show success message
    alert("Data berhasil disimpan ke Google Sheets!")

    // Clear session storage
    sessionStorage.clear()

    // Redirect to dashboard
    window.location.href = "dashboard.html"
  } catch (error) {
    console.error("[v0] Error:", error)
    document.getElementById("loadingModal").classList.remove("show")
    alert("Gagal menyimpan data. Silakan coba lagi. Error: " + error.message)
  }
}
