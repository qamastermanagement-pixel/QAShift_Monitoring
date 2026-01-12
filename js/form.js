// form.js
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

    // Script populate bearingType
    document.getElementById("channel").addEventListener("change", function () {
        const channel = this.value;
        const bearingSelect = document.getElementById("bearingType");
        bearingSelect.innerHTML = '<option value="">--Pilih Tipe--</option>';

        console.log("Channel selected:", channel, CHANNEL_MASTERS[channel]);

        if (CHANNEL_MASTERS[channel]) {
            Object.keys(CHANNEL_MASTERS[channel]).forEach(type => {
                const opt = document.createElement("option");
                opt.value = type;
                opt.textContent = type;
                bearingSelect.appendChild(opt);
            });
        }
    });

    // CATEGORY NEW
    document.getElementById("category").addEventListener("change", function () {
        const field = document.getElementById("clearanceField");
        if (this.value === "Clearance") {
            field.style.display = "block";
        } else {
            field.style.display = "none";
            document.getElementById("clearanceType").value = "";
        }
    });

    // 🔥 TAMBAHKAN INI DI AKHIR
    loadMasterData();

}); // END DARI DOMContentLoaded

let CHANNEL_MASTERS = {};

// Fungsi untuk load data master dari Google Sheets via Apps Script
async function loadMasterData() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycby2w1PgFvN77iN19fLHTr9k8ihdo7U_XXkFLhadEkXxDf8X8LmRG-8sTGkouNo32aI2/exec"); // ← GANTI DENGAN URL WEB APP-MU
    const data = await response.json();
    CHANNEL_MASTERS = data;
    console.log("✅ Master data loaded:", Object.keys(data).length, "channels");
  } catch (err) {
    console.error("❌ Gagal load master data:", err);
    alert("Gagal memuat data master. Silakan refresh halaman.");
  }
} 

// Go to step 2 (master check)
function goToStep2() {
    console.log("[v0] goToStep2 function called");

    const tanggal = document.getElementById("tanggal").value;
    const shift = document.getElementById("shift").value;
    const npk = document.getElementById("npk").value;
    const channel = document.getElementById("channel").value;
    const bearingType = document.getElementById("bearingType").value;
    const category = document.getElementById("category").value;

    // --- Tambahkan: field clearanceType jika dipilih ---
    let clearanceType = "";
    if (category === "Clearance") {
        clearanceType = document.getElementById("clearanceType")?.value;
        if (!clearanceType) {
            alert("Pilih tipe clearance yang sedang running!");
            return;
        }
    }

    if (!tanggal || !shift || !npk || !channel || !bearingType || !category) {
        alert("Semua field harus diisi!");
        return;
    }

    //Loading State agar user tidak bisa submit sebelum data siap
    if (!CHANNEL_MASTERS || Object.keys(CHANNEL_MASTERS).length === 0) {
        alert("Tunggu data master selesai dimuat!");
        return;
    }

    // --- Simpan ke sessionStorage ---
    sessionStorage.setItem("tanggal", tanggal);
    sessionStorage.setItem("shift", shift);
    sessionStorage.setItem("npk", npk);
    sessionStorage.setItem("channel", channel);
    sessionStorage.setItem("bearingType", bearingType);
    // ✅ PENTING: Simpan kategori asli sebagai "Pokayoke" jika pilih Clearance
    const actualCategory = (category === "Clearance") ? "Pokayoke" : category;
    sessionStorage.setItem("category", actualCategory);

    // Display selected channel info
    document.getElementById("selectedChannel").textContent = channel;

    // --- Ambil data master ---
    let masters;

    if (category === "Clearance") {
        // Ambil dari Pokayoke
        const pokayokeMasters = CHANNEL_MASTERS[channel]?.[bearingType]?.["Pokayoke"];
        if (!pokayokeMasters || !Array.isArray(pokayokeMasters)) {
            alert("Data Pokayoke tidak ditemukan!");
            return;
        }

        // Filter hanya clearance
        const clearanceItems = pokayokeMasters.filter(item =>
            /Clearance Check - (C2|Cn|C3|C4|C5)/.test(item.name)
        );

        // Mapping
        const map = {};
        clearanceItems.forEach(item => {
            const match = item.name.match(/Clearance Check - (C2|Cn|C3|C4|C5)/);
            if (match) map[match[1]] = item;
        });

        const order = ["C2", "Cn", "C3", "C4", "C5"];
        const idx = order.indexOf(clearanceType);
        if (idx === -1) {
            alert("Tipe clearance tidak valid!");
            return;
        }

        masters = [];
        if (idx > 0 && map[order[idx - 1]]) masters.push(map[order[idx - 1]]);
        if (map[clearanceType]) masters.push(map[clearanceType]);
        if (idx < order.length - 1 && map[order[idx + 1]]) masters.push(map[order[idx + 1]]);

    } else {
    // Kategori biasa
    let rawMasters = CHANNEL_MASTERS[channel]?.[bearingType]?.[category];
    if (!rawMasters || !Array.isArray(rawMasters)) {
        masters = [];
    } else if (category === "Pokayoke") {
        // 🔥 FILTER: HILANGKAN SEMUA "Clearance Check"
        masters = rawMasters.filter(item =>
            !/Clearance Check - (C2|Cn|C3|C4|C5)/.test(item.name)
        );
    } else {
        masters = rawMasters;
    }
}

    if (!masters || !Array.isArray(masters) || masters.length === 0) {
        alert(`Data master tidak ditemukan untuk kategori ${category}!`);
        return;
    }

    document.getElementById("totalMasters").textContent = masters.length;

    const masterList = document.getElementById("masterList");
    masterList.innerHTML = "";

    masters.forEach((master, index) => {
        const masterName = typeof master === "string" ? master : `${master.name} (${master.code})`;
        const masterItem = document.createElement("div");
        masterItem.className = "master-item";
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
                <label class="form-label">Jenis Remark</label>
                <div class="remark-type-group">
                <label>
                    <input type="radio" name="remarkType_${index}" value="numeric" checked>
                     Perubahan nilai pada master
                    </label>
                    <label>
                        <input type="radio" name="remarkType_${index}" value="text">
                        Lainnya: Keterangan
                    </label>
                </div>

                <!-- Numeric remark -->
                <div class="remark-input numeric-input" id="numericInput_${index}">
                    <textarea class="remark-textarea" 
                                    placeholder="Remark hanya boleh diisi jika ada perubahan nilai numerik pada master"
                                    ></textarea>
                    <small class="error-msg" id="errorNumeric_${index}" style="color:red; display:none;"></small>
                </div>

                <!-- Text remark -->
                <div class="remark-input text-input" id="textInput_${index}" style="display:none;">
                    <textarea class="remark-textarea" 
                                    placeholder="Remark diisi jika NG, dapat berupa problem yang terjadi. Tapi bukan perubahan nilai!"
                                    ></textarea>
                </div>
            </div>
        `;
        masterList.appendChild(masterItem);

        // Tambahkan event listener untuk toggle remark type
        document.querySelectorAll(`input[name="remarkType_${index}"]`).forEach(radio => {
            radio.addEventListener("change", function () {
                const numericDiv = document.getElementById(`numericInput_${index}`);
                const textDiv = document.getElementById(`textInput_${index}`);
                const errorDiv = document.getElementById(`errorNumeric_${index}`);

                if (this.value === "numeric") {
                    numericDiv.style.display = "block";
                    textDiv.style.display = "none";
                    errorDiv.style.display = "none";
                } else {
                    numericDiv.style.display = "none";
                    textDiv.style.display = "block";
                    errorDiv.style.display = "none";
                }
            });
        });
    });

    // Simpan daftar master yang ditampilkan (termasuk hasil filter Clearance)
    sessionStorage.setItem("displayedMasters", JSON.stringify(masters));

    // Switch to step 2
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");
}

// Go back to step 1
function goToStep1() {
    document.getElementById("step2").classList.remove("active")
    document.getElementById("step1").classList.add("active")
}

// Select status for master
function selectStatus(index, status) {
  const masterItem = document.querySelectorAll(".master-item")[index];
  const okBtn = masterItem.querySelector(".btn-ok");
  const ngBtn = masterItem.querySelector(".btn-ng");
  const remarkField = document.getElementById(`remark-${index}`);

  // Remove active class from both buttons
  okBtn.classList.remove("active");
  ngBtn.classList.remove("active");

  // Add active class to selected button
  if (status === "OK") {
    okBtn.classList.add("active");
    remarkField.style.display = "none";
    // Reset ke opsi default (numeric)
    const numericRadio = document.querySelector(`input[name="remarkType_${index}"][value="numeric"]`);
    if (numericRadio) numericRadio.checked = true;
    // Sembunyikan error
    const errorDiv = document.getElementById(`errorNumeric_${index}`);
    if (errorDiv) errorDiv.style.display = "none";
  } else {
    ngBtn.classList.add("active");
    remarkField.style.display = "block";
    // Default ke "numeric"
    const numericRadio = document.querySelector(`input[name="remarkType_${index}"][value="numeric"]`);
    if (numericRadio) numericRadio.checked = true;
    // Trigger tampilan numeric
    const numericDiv = document.getElementById(`numericInput_${index}`);
    const textDiv = document.getElementById(`textInput_${index}`);
    if (numericDiv) numericDiv.style.display = "block";
    if (textDiv) textDiv.style.display = "none";
    const errorDiv = document.getElementById(`errorNumeric_${index}`);
    if (errorDiv) errorDiv.style.display = "none";
  }

  // Store status
  okBtn.dataset.status = status;
  ngBtn.dataset.status = status;
}

async function submitData() {
    const channel = sessionStorage.getItem("channel");
    const bearingType = sessionStorage.getItem("bearingType");
    const category = sessionStorage.getItem("category"); // Tidak dipakai lagi

    // 🔥 Ambil master yang ditampilkan di UI
    const masters = JSON.parse(sessionStorage.getItem("displayedMasters"));
    if (!masters || !Array.isArray(masters)) {
        alert("Data master tidak valid. Silakan ulangi.");
        return;
    }

    console.log("[v0] Submitting data...")
    const appsScriptUrl = window.CONFIG
        ? window.CONFIG.APPS_SCRIPT_URL
        : "https://script.google.com/macros/s/AKfycbytpHuYFDR_G-sugVMYFVpEbw1uQObHt68HiiRsuo01YybVLh_otjhjW971CO9QrH5gtA/exec"
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

        let remark = "";
        if (status === "NG") {
            const masterDisplay = typeof masters[i] === "string" ? masters[i] : `${masters[i].name} (${masters[i].code})`;
            const numericRadio = document.querySelector(`input[name="remarkType_${i}"][value="numeric"]`);
            const textRadio = document.querySelector(`input[name="remarkType_${i}"][value="text"]`);
            const numericTextarea = document.getElementById(`numericInput_${i}`)?.querySelector("textarea");
            const textTextarea = document.getElementById(`textInput_${i}`)?.querySelector("textarea");
            const errorDiv = document.getElementById(`errorNumeric_${i}`);  
            
            if (numericRadio?.checked) {
                remark = numericTextarea?.value.trim() || "";
                if (!remark) {
                    if (errorDiv) {
                        errorDiv.textContent = "Wajib diisi karena memilih 'Perubahan nilai pada master'";
                        errorDiv.style.display = "block";
            }
            alert(`Mohon isi remark untuk ${masterDisplay}`);
            return;
            }

            // Validasi format angka
            const singleNum = /^[-+]?\d*\.?\d+$/;
            const numList = /^([-+]?\d*\.?\d+)(;[-+]?\d*\.?\d+)*$/;

            if (!singleNum.test(remark) && !numList.test(remark)) {
                if (errorDiv) {
                    errorDiv.textContent = "Hanya boleh angka (misal: 0, -1, +3, atau -9;-10;-11)";
                    errorDiv.style.display = "block";
                }
                alert(`Format remark tidak valid untuk ${masterDisplay}`);
                return;
            }
            if (errorDiv) errorDiv.style.display = "none";

        } else if (textRadio?.checked) {
            remark = textTextarea?.value.trim() || ""; // Boleh kosong
        }
    }


        const masterData = { name: masters[i].name, code: masters[i].code };

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
        bearingType: bearingType,
        category: sessionStorage.getItem("category"),
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
