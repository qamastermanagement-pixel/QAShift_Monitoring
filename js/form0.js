// ==========================================
// form0.js — Channel 0 (gauging only)
// CSV header: Code,Channel,Category,Machine,Master
// - OK: set status OK (no extra UI)
// - NG: show remark (remark wajib)  ✅ (sekarang 4 opsi seperti form.js)
// - OK/NG bisa toggle (unclick)
// ==========================================

let MASTER_DATA = []

// suggestion bearing (biar user bisa ketik "62" muncul list)
const BEARING_SUGGESTIONS = [
  "6000","6001","6002","6003","6004",
  "6200","6201","6202","6203","6204","6205","6206","6207","6208","6209",
  "6300","6301","6302","6303","6304","6305","6306","6307","6308","6309"
]

// =========================
// REMARK 4 OPSI (samain form.js)
// =========================
const REMARK_TYPE_LABELS = {
  OPT1: "Deviasi nilai (master tetap)",
  OPT2: "Deviasi nilai (master diganti)",
  OPT3: "Master rusak/hilang (ganti baru)",
  OPT4: "Lainnya",
}

const REMARK_HELPER = {
  OPT1: "Remark hanya boleh diisi angka (deviasi nilai). Contoh: +5 / -2 / 0.02 / -15;-16;-17",
  OPT2: "Remark hanya boleh diisi angka (deviasi nilai). Contoh: +5 / -2 / 0.02 / -15;-16;-17",
  OPT3: "Opsional: jelaskan kondisi (contoh: holder patah / master hilang).",
  OPT4: "Wajib: jelaskan kondisi/temuan lainnya.",
}

const REMARK_VALUE_EXCEPTIONS = new Set([])

function isValidDeviationValue(raw) {
  const v = String(raw ?? "").trim()
  if (!v) return false
  if (REMARK_VALUE_EXCEPTIONS.has(v)) return true

  // hilangkan spasi, ubah koma -> titik
  const norm = v.replace(/\s+/g, "").replace(/,/g, ".")

  // support multi nilai dipisah ';'  contoh: -13;-14;-5  atau +5;-2;0.02
  const parts = norm.split(";").filter(Boolean)
  if (!parts.length) return false

  const oneNumberRegex = /^[+-]?(\d+(\.\d+)?|\.\d+)$/
  return parts.every((p) => oneNumberRegex.test(p))
}


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

function cleanStr(v) {
  return v ? String(v).replace(/(^"|"$)/g, "").trim() : ""
}

// CSV split sederhana (cukup untuk data kamu)
function parseRow(line) {
  return line.split(",").map(cleanStr)
}

// fallback code kalau kosong
function generateCode(channel, machine, master) {
  const base = `${channel}|${machine}|${master}`.toUpperCase().replace(/\s+/g, " ")
  // hash ringan
  let h = 0
  for (let i = 0; i < base.length; i++) h = (h * 31 + base.charCodeAt(i)) >>> 0
  return `CH0-${h.toString(16).toUpperCase().slice(0, 8)}`
}

async function fetchMasterCH0() {
  showLoading("Memuat master CH0...")
  try {
    const url = window.CONFIG?.MASTER_DATA_URL_CH0
    if (!url) {
      alert("CONFIG.MASTER_DATA_URL_CH0 belum diset di config.js")
      return
    }

    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const csvText = await res.text()

    const rows = csvText
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean)

    MASTER_DATA = []
    for (let i = 1; i < rows.length; i++) {
      const cols = parseRow(rows[i])
      // Code,Channel,Category,Machine,Master
      const code = cols[0] || ""
      const channel = cols[1] || ""
      const category = cols[2] || "" // walau nanti submit fixed gauging
      const machine = cols[3] || ""
      const master = cols[4] || ""

      if (!channel || !machine || !master) continue

      MASTER_DATA.push({
        code,
        channel,
        category,
        machine,
        master,
      })
    }

    console.log("[CH0] loaded:", MASTER_DATA.length)
  } catch (err) {
    console.error(err)
    alert("Gagal memuat master CH0.\n" + err.message)
  } finally {
    hideLoading()
  }
}

function fillBearingDatalist() {
  const dl = document.getElementById("bearingList")
  dl.innerHTML = ""
  BEARING_SUGGESTIONS.forEach((b) => {
    const opt = document.createElement("option")
    opt.value = b
    dl.appendChild(opt)
  })
}

function fillChannelDropdown() {
  const el = document.getElementById("channel")
  el.innerHTML = `<option value="">Pilih Channel</option>`

  const channels = [...new Set(MASTER_DATA.map((x) => x.channel).filter(Boolean))].sort()
  channels.forEach((ch) => {
    const opt = document.createElement("option")
    opt.value = ch
    opt.textContent = ch
    el.appendChild(opt)
  })
}

function fillMachineDropdown(selectedChannel) {
  const el = document.getElementById("machine")
  el.innerHTML = `<option value="">Pilih Machine</option>`

  const machines = [...new Set(
    MASTER_DATA
      .filter((x) => x.channel === selectedChannel)
      .map((x) => x.machine)
      .filter(Boolean)
  )].sort()

  machines.forEach((mc) => {
    const opt = document.createElement("option")
    opt.value = mc
    opt.textContent = mc
    el.appendChild(opt)
  })
}

document.addEventListener("DOMContentLoaded", async () => {
  // set tanggal default hari ini
  const today = new Date().toISOString().split("T")[0]
  const tanggalInput = document.getElementById("tanggal")
  if (tanggalInput) tanggalInput.value = today

  fillBearingDatalist()

  await fetchMasterCH0()
  fillChannelDropdown()

  // ketika channel berubah -> reload machine list
  document.getElementById("channel").addEventListener("change", function () {
    fillMachineDropdown(this.value)
  })

  document.getElementById("basicInfoForm").addEventListener("submit", (e) => {
    e.preventDefault()
    goToStep2()
  })

  document.getElementById("masterCheckForm").addEventListener("submit", (e) => {
    e.preventDefault()
    submitData()
  })
})

function goToStep2() {
  const tanggal = document.getElementById("tanggal").value
  const shift = document.getElementById("shift").value
  const npk = document.getElementById("npk").value
  const channel = document.getElementById("channel").value
  const bearingType = document.getElementById("bearingType").value.trim()
  const machine = document.getElementById("machine").value

  if (!tanggal || !shift || !npk || !channel || !bearingType || !machine) {
    alert("Lengkapi semua field informasi dasar!")
    return
  }

  sessionStorage.setItem("tanggal", tanggal)
  sessionStorage.setItem("shift", shift)
  sessionStorage.setItem("npk", npk)
  sessionStorage.setItem("channel", channel)
  sessionStorage.setItem("bearingType", bearingType)
  sessionStorage.setItem("machine", machine)

  const masters = MASTER_DATA.filter(
    (x) => x.channel === channel && x.machine === machine
  )

  if (masters.length === 0) {
    alert("Tidak ada master untuk filter tersebut.")
    return
  }

  document.getElementById("selectedChannel").textContent = channel
  document.getElementById("selectedBearing").textContent = bearingType
  document.getElementById("selectedMachine").textContent = machine
  document.getElementById("totalMasters").textContent = masters.length

  renderMasters(masters)

  document.getElementById("step1").classList.remove("active")
  document.getElementById("step1").style.display = "none"
  document.getElementById("step2").classList.add("active")
  document.getElementById("step2").style.display = "block"
}

function goToStep1() {
  document.getElementById("step2").classList.remove("active")
  document.getElementById("step2").style.display = "none"
  document.getElementById("step1").classList.add("active")
  document.getElementById("step1").style.display = "block"
}

// =========================
// RENDER MASTER (CARD) + REMARK 4 OPSI
// =========================
function renderMasters(list) {
  const wrap = document.getElementById("masterList")
  wrap.innerHTML = ""

  list.forEach((item, idx) => {
    const div = document.createElement("div")
    div.className = "master-item"
    div.dataset.code = item.code || ""
    div.dataset.master = item.master
    div.dataset.status = "" // kosong dulu

    div.innerHTML = `
      <div class="master-item-header">
        <div class="master-name">${idx + 1}. ${item.master}</div>
        <div class="status-buttons">
          <button type="button" class="btn-ok" data-action="ok">OK</button>
          <button type="button" class="btn-ng" data-action="ng">NG</button>
        </div>
      </div>

      <div class="remark-field">
        <div style="margin-top:10px; font-weight:600;">Jenis Remark</div>

        <div class="remark-type-group" style="display:block; margin-top:6px;">
          ${["OPT1","OPT2","OPT3","OPT4"].map(opt => `
            <label style="display:block; margin:6px 0; cursor:pointer;">
              <input type="radio" name="remarkType_${idx}" value="${opt}">
              ${REMARK_TYPE_LABELS[opt]}
            </label>
          `).join("")}
        </div>

        <div class="remark-value-box" style="display:none; margin-top:10px;">
          <input type="text" class="form-input remark-value" placeholder="Contoh: +5 / -2 / 0.02 / -15;-16;-17">
          <div class="remark-value-help" style="margin-top:6px; font-size:12px; color:#64748b;"></div>
          <div class="remark-value-err" style="display:none; color:red; margin-top:6px;"></div>
        </div>

        <div class="remark-detail-box" style="display:none; margin-top:10px;">
          <textarea class="remark-textarea remark-detail" placeholder="Jelaskan kondisi..."></textarea>
          <div class="remark-detail-help" style="margin-top:6px; font-size:12px; color:#64748b;"></div>
          <div class="remark-detail-err" style="display:none; color:red; margin-top:6px;"></div>
        </div>
      </div>
    `

    const btnOk = div.querySelector(".btn-ok")
    const btnNg = div.querySelector(".btn-ng")
    const remarkField = div.querySelector(".remark-field")

    const radios = div.querySelectorAll(`input[name="remarkType_${idx}"]`)
    const vBox = div.querySelector(".remark-value-box")
    const dBox = div.querySelector(".remark-detail-box")
    const vInput = div.querySelector(".remark-value")
    const dInput = div.querySelector(".remark-detail")
    const vHelp = div.querySelector(".remark-value-help")
    const dHelp = div.querySelector(".remark-detail-help")
    const vErr = div.querySelector(".remark-value-err")
    const dErr = div.querySelector(".remark-detail-err")

    function resetRemarkUI() {
      remarkField.classList.remove("show")
      radios.forEach(r => (r.checked = false))

      if (vBox) vBox.style.display = "none"
      if (dBox) dBox.style.display = "none"

      if (vInput) vInput.value = ""
      if (dInput) dInput.value = ""

      if (vErr) vErr.style.display = "none"
      if (dErr) dErr.style.display = "none"

      if (vHelp) vHelp.textContent = ""
      if (dHelp) dHelp.textContent = ""
    }

    function applyRemarkMode(opt) {
      if (vErr) vErr.style.display = "none"
      if (dErr) dErr.style.display = "none"

      if (vBox) vBox.style.display = "none"
      if (dBox) dBox.style.display = "none"

      if (opt === "OPT1" || opt === "OPT2") {
        if (vBox) vBox.style.display = "block"
        if (vHelp) vHelp.textContent = REMARK_HELPER[opt]
        if (dHelp) dHelp.textContent = ""
        if (dInput) dInput.value = ""
        return
      }

      if (opt === "OPT3" || opt === "OPT4") {
        if (dBox) dBox.style.display = "block"
        if (dHelp) dHelp.textContent = REMARK_HELPER[opt]
        if (vHelp) vHelp.textContent = ""
        if (vInput) vInput.value = ""
      }
    }

    radios.forEach((r) => r.addEventListener("change", () => applyRemarkMode(r.value)))

    // OK toggle
    btnOk.addEventListener("click", () => {
      const active = btnOk.classList.contains("active")
      if (active) {
        btnOk.classList.remove("active")
        div.dataset.status = ""
        resetRemarkUI()
        return
      }
      btnOk.classList.add("active")
      btnNg.classList.remove("active")
      div.dataset.status = "OK"
      resetRemarkUI()
    })

    // NG toggle
    btnNg.addEventListener("click", () => {
      const active = btnNg.classList.contains("active")
      if (active) {
        btnNg.classList.remove("active")
        div.dataset.status = ""
        resetRemarkUI()
        return
      }
      btnNg.classList.add("active")
      btnOk.classList.remove("active")
      div.dataset.status = "NG"
      remarkField.classList.add("show")
    })

    // default hidden
    resetRemarkUI()

    wrap.appendChild(div)
  })
}

async function submitData() {
  const cards = Array.from(document.querySelectorAll("#masterList .master-item"))

  // tetap “harus diisi semua”
  const masters = []

  for (const card of cards) {
    const status = card.dataset.status || ""
    const name = card.dataset.master || ""
    let code = (card.dataset.code || "").trim()

    if (!status) {
      alert(`Mohon pilih status (OK/NG) untuk: ${name}`)
      return
    }

    // fallback code kalau kosong
    if (!code) {
      const channel = sessionStorage.getItem("channel")
      const machine = sessionStorage.getItem("machine")
      code = generateCode(channel, machine, name)
    }

    // =========================
    // NG => remark 4 opsi
    // =========================
    let remark = ""
    let remarkType = ""
    let remarkValue = ""
    let remarkDetail = ""

    if (status === "NG") {
      const checked = card.querySelector('input[type="radio"][name^="remarkType_"]:checked')
      if (!checked) {
        alert(`Mohon pilih Jenis Remark untuk item NG: ${name}`)
        return
      }

      const opt = checked.value
      remarkType = REMARK_TYPE_LABELS[opt] || ""

      const vInput = card.querySelector(".remark-value")
      const dInput = card.querySelector(".remark-detail")
      const vErr = card.querySelector(".remark-value-err")
      const dErr = card.querySelector(".remark-detail-err")

      if (vErr) vErr.style.display = "none"
      if (dErr) dErr.style.display = "none"

      if (opt === "OPT1" || opt === "OPT2") {
        const v = (vInput ? vInput.value : "").trim()
        if (!v) {
          if (vErr) {
            vErr.textContent = "Wajib diisi angka deviasi."
            vErr.style.display = "block"
          }
          alert(`Mohon isi Remark Value (angka deviasi) untuk: ${name}`)
          return
        }
        if (!isValidDeviationValue(v)) {
          if (vErr) {
            vErr.textContent = "Format tidak valid. Contoh: +5 / -2 / 0.02 / -15;-16;-17"
            vErr.style.display = "block"
          }
          alert(`Remark Value harus angka deviasi untuk: ${name}`)
          return
        }
        remarkValue = v
        remarkDetail = ""
        remark = `${remarkType}: ${remarkValue}`
      }

      if (opt === "OPT3") {
        remarkValue = ""
        remarkDetail = (dInput ? dInput.value : "").trim() // opsional
        remark = remarkDetail ? `${remarkType}: ${remarkDetail}` : `${remarkType}`
      }

      if (opt === "OPT4") {
        const d = (dInput ? dInput.value : "").trim()
        if (!d) {
          if (dErr) {
            dErr.textContent = "Wajib diisi untuk opsi Lainnya."
            dErr.style.display = "block"
          }
          alert(`Mohon isi Remark Detail untuk: ${name}`)
          return
        }
        remarkValue = ""
        remarkDetail = d
        remark = `${remarkType}: ${remarkDetail}`
      }
    }

    masters.push({ code, name, status, remark, remarkType, remarkValue, remarkDetail })
  }

  const payload = {
    tanggal: sessionStorage.getItem("tanggal"),
    shift: sessionStorage.getItem("shift"),
    npk: sessionStorage.getItem("npk"),
    channel: sessionStorage.getItem("channel"),      // contoh: "CH 0 - CELL 1"
    bearingType: sessionStorage.getItem("bearingType"),
    category: "gauging",                              // ✅ fix gauging
    masters,
  }

  showLoading("Menyimpan data...")

  try {
    const url = window.CONFIG?.APPS_SCRIPT_URL
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    })

    await res.text()
    alert("Data berhasil disimpan!")
    sessionStorage.clear()
    window.location.href = "dashboard.html"
  } catch (err) {
    console.error(err)
    alert("Gagal menyimpan data.\n" + err.message)
  } finally {
    hideLoading()
  }
}
