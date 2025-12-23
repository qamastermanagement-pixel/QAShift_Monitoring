// Data master per channel (HARDCODED - tidak perlu Google Sheets)
const CHANNEL_MASTERS = {
  1: [
    { name: "IR Bore Grinding ", code: "A01de1" },
    { name: "OD Check", code: "A01de2" },
    { name: "Bore Check", code: "A01Di1" },
    { name: "Pairing & Ball Filling", code: "A01Di2" },
    { name: "Cage Pressing", code: "A01Dk1" },
    { name: "Free Run Test", code: "A02do1" },
    { name: "Demagtizer", code: "A02do2" },
    { name: "Washing", code: "A02AO1" },
    { name: "MVM For Vibration test", code: "A01AO2" },
    { name: "Radial Clearance Check", code: "A01AO3" },
    { name: "PY SHSE", code: "A01AO4" },
    { name: "Auto OD", code: "A01dm1" },
    { name: "Bore Check & Bore Check", code: "A01AI1" },
  ],
  2: [
    { name: "IR Bore Grinding ", code: "A02de1" },
    { name: "OD Check", code: "A02de2" },
    { name: "Bore Check", code: "A02Di1" },
    { name: "Pairing & Ball Filling", code: "A02Di2" },
    { name: "Cage Pressing", code: "A02Dk1" },
    { name: "Free Run Test", code: "A02do1" },
    { name: "Demagtizer", code: "A02do2" },
    { name: "Washing", code: "A02AO1" },
    { name: "MVM For Vibration test", code: "A02AO2" },
    { name: "Radial Clearance Check", code: "A02AO3" },
    { name: "PY SHSE", code: "A02AO4" },
    { name: "Auto OD", code: "A02dm1" },
    { name: "Bore Check & Bore Check", code: "A02AI1" },
  ],
  3: [
    { name: "IR Bore Grinding ", code: "A03de1" },
    { name: "OD Check", code: "A03de2" },
    { name: "Bore Check", code: "A03Di1" },
    { name: "Pairing & Ball Filling", code: "A03Di2" },
    { name: "Cage Pressing", code: "A03Dk1" },
    { name: "Free Run Test", code: "A03do1" },
    { name: "Demagtizer", code: "A03do2" },
    { name: "Washing", code: "A03AO1" },
    { name: "MVM For Vibration test", code: "A03AO2" },
    { name: "Radial Clearance Check", code: "A03AO3" },
    { name: "PY SHSE", code: "A03AO4" },
    { name: "Auto OD", code: "A03dm1" },
    { name: "Bore Check & Bore Check", code: "A03AI1" },
  ],
  4: [
    { name: "IR Bore Grinding ", code: "A04de1" },
    { name: "OD Check", code: "A04de2" },
    { name: "Bore Check", code: "A04Di1" },
    { name: "Pairing & Ball Filling", code: "A04Di2" },
    { name: "Cage Pressing", code: "A04Dk1" },
    { name: "Free Run Test", code: "A04do1" },
    { name: "Demagtizer", code: "A04do2" },
    { name: "Washing", code: "A04AO1" },
    { name: "MVM For Vibration test", code: "A04AO2" },
    { name: "Radial Clearance Check", code: "A04AO3" },
    { name: "PY SHSE", code: "A04AO4" },
    { name: "Auto OD", code: "A04dm1" },
    { name: "Bore Check & Bore Check", code: "A04AI1" },
  ],
  5: [
    { name: "IR Bore Grinding ", code: "A05de1" },
    { name: "OD Check", code: "A05de2" },
    { name: "Bore Check", code: "A05Di1" },
    { name: "Pairing & Ball Filling", code: "A05Di2" },
    { name: "Cage Pressing", code: "A05Dk1" },
    { name: "Free Run Test", code: "A05do1" },
    { name: "Demagtizer", code: "A05do2" },
    { name: "Washing", code: "A05AO1" },
    { name: "MVM For Vibration test", code: "A05AO2" },
    { name: "Radial Clearance Check", code: "A05AO3" },
    { name: "PY SHSE", code: "A05AO4" },
    { name: "Auto OD", code: "A05dm1" },
    { name: "Bore Check & Bore Check", code: "A05AI1" },
  ],
  6: [
    { name: "IR Bore Grinding ", code: "A06de1" },
    { name: "OD Check", code: "A06de2" },
    { name: "Bore Check", code: "A06Di1" },
    { name: "Pairing & Ball Filling", code: "A06Di2" },
    { name: "Cage Pressing", code: "A06Dk1" },
    { name: "Free Run Test", code: "A06do1" },
    { name: "Demagtizer", code: "A06do2" },
    { name: "Washing", code: "A06AO1" },
    { name: "MVM For Vibration test", code: "A06AO2" },
    { name: "Radial Clearance Check", code: "A06AO3" },
    { name: "PY SHSE", code: "A06AO4" },
    { name: "Auto OD", code: "A06dm1" },
    { name: "Bore Check & Bore Check", code: "A06AI1" },
  ],
  7: [
    { name: "IR Bore Grinding ", code: "A07de1" },
    { name: "OD Check", code: "A07de2" },
    { name: "Bore Check", code: "A07Di1" },
    { name: "Pairing & Ball Filling", code: "A07Di2" },
    { name: "Cage Pressing", code: "A07Dk1" },
    { name: "Free Run Test", code: "A07do1" },
    { name: "Demagtizer", code: "A07do2" },
    { name: "Washing", code: "A07AO1" },
    { name: "MVM For Vibration test", code: "A07AO2" },
    { name: "Radial Clearance Check", code: "A07AO3" },
    { name: "PY SHSE", code: "A07AO4" },
    { name: "Auto OD", code: "A07dm1" },
    { name: "Bore Check & Bore Check", code: "A07AI1" },
  ],
  8: [
    { name: "IR Bore Grinding ", code: "A08de1" },
    { name: "OD Check", code: "A08de2" },
    { name: "Bore Check", code: "A08Di1" },
    { name: "Pairing & Ball Filling", code: "A08Di2" },
    { name: "Cage Pressing", code: "A08Dk1" },
    { name: "Free Run Test", code: "A08do1" },
    { name: "Demagtizer", code: "A08do2" },
    { name: "Washing", code: "A08AO1" },
    { name: "MVM For Vibration test", code: "A08AO2" },
    { name: "Radial Clearance Check", code: "A08AO3" },
    { name: "PY SHSE", code: "A08AO4" },
    { name: "Auto OD", code: "A08dm1" },
    { name: "Bore Check & Bore Check", code: "A08AI1" },
  ],
  9: [
    { name: "IR Bore Grinding ", code: "A09de1" },
    { name: "OD Check", code: "A09de2" },
    { name: "Bore Check", code: "A09Di1" },
    { name: "Pairing & Ball Filling", code: "A09Di2" },
    { name: "Cage Pressing", code: "A09Dk1" },
    { name: "Free Run Test", code: "A09do1" },
    { name: "Demagtizer", code: "A09do2" },
    { name: "Washing", code: "A09AO1" },
    { name: "MVM For Vibration test", code: "A09AO2" },
    { name: "Radial Clearance Check", code: "A09AO3" },
    { name: "PY SHSE", code: "A09AO4" },
    { name: "Auto OD", code: "A09dm1" },
    { name: "Bore Check & Bore Check", code: "A09AI1" },
  ],
  10: [
    { name: "IR Bore Grinding ", code: "A10de1" },
    { name: "OD Check", code: "A10de2" },
    { name: "Bore Check", code: "A10Di1" },
    { name: "Pairing & Ball Filling", code: "A10Di2" },
    { name: "Cage Pressing", code: "A10Dk1" },
    { name: "Free Run Test", code: "A10do1" },
    { name: "Demagtizer", code: "A10do2" },
    { name: "Washing", code: "A10AO1" },
    { name: "MVM For Vibration test", code: "A10AO2" },
    { name: "Radial Clearance Check", code: "A10AO3" },
    { name: "PY SHSE", code: "A10AO4" },
    { name: "Auto OD", code: "A10dm1" },
    { name: "Bore Check & Bore Check", code: "A10AI1" },
  ],
  11: [
    { name: "IR Bore Grinding ", code: "A11de1" },
    { name: "OD Check", code: "A11de2" },
    { name: "Bore Check", code: "A11Di1" },
    { name: "Pairing & Ball Filling", code: "A11Di2" },
    { name: "Cage Pressing", code: "A11Dk1" },
    { name: "Free Run Test", code: "A11do1" },
    { name: "Demagtizer", code: "A11do2" },
    { name: "Washing", code: "A11AO1" },
    { name: "MVM For Vibration test", code: "A11AO2" },
    { name: "Radial Clearance Check", code: "A11AO3" },
    { name: "PY SHSE", code: "A11AO4" },
    { name: "Auto OD", code: "A11dm1" },
    { name: "Bore Check & Bore Check", code: "A11AI1" },
  ],
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
  14: [
    { name: "IR Bore Grinding ", code: "A14de1" },
    { name: "OD Check", code: "A14de2" },
    { name: "Bore Check", code: "A14Di1" },
    { name: "Pairing & Ball Filling", code: "A14Di2" },
    { name: "Cage Pressing", code: "A14Dk1" },
    { name: "Free Run Test", code: "A14do1" },
    { name: "Demagtizer", code: "A14do2" },
    { name: "Washing", code: "A14AO1" },
    { name: "MVM For Vibration test", code: "A14AO2" },
    { name: "Radial Clearance Check", code: "A14AO3" },
    { name: "PY SHSE", code: "A14AO4" },
    { name: "Auto OD", code: "A14dm1" },
    { name: "Bore Check & Bore Check", code: "A14AI1" },
  ],
  15: [
    { name: "IR Bore Grinding ", code: "A15de1" },
    { name: "OD Check", code: "A15de2" },
    { name: "Bore Check", code: "A15Di1" },
    { name: "Pairing & Ball Filling", code: "A15Di2" },
    { name: "Cage Pressing", code: "A15Dk1" },
    { name: "Free Run Test", code: "A15do1" },
    { name: "Demagtizer", code: "A15do2" },
    { name: "Washing", code: "A15AO1" },
    { name: "MVM For Vibration test", code: "A15AO2" },
    { name: "Radial Clearance Check", code: "A15AO3" },
    { name: "PY SHSE", code: "A15AO4" },
    { name: "Auto OD", code: "A15dm1" },
    { name: "Bore Check & Bore Check", code: "A15AI1" },
  ],
  16: [
    { name: "IR Bore Grinding ", code: "A16de1" },
    { name: "OD Check", code: "A16de2" },
    { name: "Bore Check", code: "A16Di1" },
    { name: "Pairing & Ball Filling", code: "A16Di2" },
    { name: "Cage Pressing", code: "A16Dk1" },
    { name: "Free Run Test", code: "A16do1" },
    { name: "Demagtizer", code: "A16do2" },
    { name: "Washing", code: "A16AO1" },
    { name: "MVM For Vibration test", code: "A16AO2" },
    { name: "Radial Clearance Check", code: "A16AO3" },
    { name: "PY SHSE", code: "A16AO4" },
    { name: "Auto OD", code: "A16dm1" },
    { name: "Bore Check & Bore Check", code: "A16AI1" },
  ],
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Form.js loaded")

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
  const appsScriptUrl = window.CONFIG
    ? window.CONFIG.APPS_SCRIPT_URL
    : "https://script.google.com/macros/s/AKfycbxNF9XVOIyF-vcQcfzCR9XTW9ysb5GRu2e26nNW9207ftUm-YpCJwYHz3MRucv5DdTMKA/exec"
  console.log("[v0] Apps Script URL:", appsScriptUrl)

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
    const response = await fetch(appsScriptUrl, {
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
