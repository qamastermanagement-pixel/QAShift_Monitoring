// Data master per channel (HARDCODED - tidak perlu Google Sheets)
const CHANNEL_MASTERS = {
    1: {
        "6202": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "8876" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },
    2: {
        "2234": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "2235" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    3: {
        "4455": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "7788" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    4: {
        "7766": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "8877" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    5: {
        "5544": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "6766" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            }
    },
    
    6 : {
        "4455": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "6677*" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            }
    },
       
    7: {
        "8876": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "3903" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    8: {
        "6773": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "9987" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    9: {
        "9987": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "6674" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    10: {
        "6202": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "8876" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    11: {
        "6654": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "4343" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    12: {
        "6204": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            }
    },

    13: {
        "6002": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "0697" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    14: {
        "6201": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "6203" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    15: {
        "0256": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
            },
        "0285" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },

    14: {
        "Tidak Tersedia*" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A14de1" },
                { name: "OR Raceway Grinding de 2", code: "A14de2" },
                { name: "IR Raceway Grinding Di 1", code: "A14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A14Dk1" },
                { name: "IR Bore Grinding 1", code: "A14do1" },
                { name: "IR Bore Grinding 2", code: "A14do2" },
                { name: "OD Check - Gauging", code: "A14Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A124R1" },
                { name: "Pairing IR", code: "A124R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - Running", code: "A12AO2" },
                { name: "OD Check - OK", code: "A12AO3" },
                { name: "OD Check - Under", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR1" },
                { name: "Pairing IR - Running", code: "A12PR2" },
                { name: "Rivet Tinggi", code: "A12RV1" },
                { name: "Rivet OK", code: "A12RV2" },
                { name: "Rivet - Missing Upper cage", code: "A12RV3" },
                { name: "Ausensitive - Smooth", code: "A12AS1" },
                { name: "Ausensitive - Unsmooth", code: "A12AS2" },
                { name: "Vibration Check - NG 1", code: "A12MV1" },
                { name: "Vibration Check - NG 2", code: "A12MV2" },
                { name: "Vibration Check - NG 3", code: "A12MV3" },
                { name: "Clearance Check - C2", code: "A12C21" },
                { name: "Clearance Check - Cn", code: "A12Cn1" },
                { name: "Clearance Check - C3", code: "A12C31" },
                { name: "Clearance Check - C4", code: "A12C41" },
                { name: "Clearance Check - C5", code: "A12C51" },
                { name: "Seal Height Check", code: "A12AG1" },
                { name: "Seal Height Check", code: "A12AG2" },
                { name: "Seal Height Check", code: "A12AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A12PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A12PO3" },
                { name: "SHSE - Open Seal", code: "A12SH1" },
                { name: "SHSE - 1RS/1Z", code: "A12SH2" },
                { name: "SHSE - 2RS/2Z", code: "A12SH3" },
                { name: "Augrease Mandril - OK", code: "A12Mn2" },
                { name: "Augrease Mandril - NG", code: "A12Mn3" },
                ]
        }
    },
}

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

    //Script populate bearingType
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
})

// Go to step 2 (master check)
function goToStep2() {
    console.log("[v0] goToStep2 function called");

    const tanggal = document.getElementById("tanggal").value;
    const shift = document.getElementById("shift").value;
    const npk = document.getElementById("npk").value;
    const channel = document.getElementById("channel").value;
    const bearingType = document.getElementById("bearingType").value;
    const category = document.getElementById("category").value;

    console.log("[v0] Form values:", { tanggal, shift, npk, channel, bearingType, category });

    if (!tanggal || !shift || !npk || !channel || !bearingType || !category) {
        alert("Semua field harus diisi!");
        return;
    }

    // Store basic info in sessionStorage
    sessionStorage.setItem("tanggal", tanggal);
    sessionStorage.setItem("shift", shift);
    sessionStorage.setItem("npk", npk);
    sessionStorage.setItem("channel", channel);
    sessionStorage.setItem("bearingType", bearingType);
    sessionStorage.setItem("category", category);

    // Display selected channel info
    document.getElementById("selectedChannel").textContent = channel;

    // Get masters for selected channel & type
    const masters = CHANNEL_MASTERS[channel]?.[bearingType]?.[category];
    console.log("[v0] Masters for channel", channel, ":", masters);

    if (!masters || !Array.isArray(masters)) {
        alert(`Data master untuk channel ${channel}, tipe ${bearingType}, kategori ${category} tidak ditemukan!`); 
        return; 
    }

    document.getElementById("totalMasters").textContent = masters.length;

    // Generate master list
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
        <label class="form-label">Remarks <span class="required">*</span></label>
        <textarea class="remark-textarea" id="remark-text-${index}" placeholder="Tuliskan keterangan untuk status NG..."></textarea>
      </div>
    `;
        masterList.appendChild(masterItem);
    });

    console.log("[v0] Master list generated, switching to step 2");

    // Switch to step 2
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");

}   //akhir dari fungsi gotostep2

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
    const bearingType = sessionStorage.getItem("bearingType")
    const category = sessionStorage.getItem("category")
    const masters = CHANNEL_MASTERS[channel][bearingType][category]

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

        let remark = ""
        if (status === "NG") {
            remark = document.getElementById(`remark-text-${i}`).value.trim()
            if (!remark) {
                const masterDisplay = typeof masters[i] === "string" ? masters[i] : `${masters[i].name} (${masters[i].code})`
                alert(`Mohon isi remark untuk ${masterDisplay} yang berstatus NG`)
                return
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
