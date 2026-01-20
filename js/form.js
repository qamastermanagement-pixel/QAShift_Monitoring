// Data master per channel (HARDCODED - tidak perlu Google Sheets)
const CHANNEL_MASTERS = {
    1: {
        "6202": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A01de1" },
                { name: "OR Raceway Grinding de 2", code: "A01de2" },
                { name: "IR Raceway Grinding Di 1", code: "A01i1" },
                { name: "IR Raceway Grinding Di 2", code: "A01Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A01Dk1" },
                { name: "IR Bore Grinding 1", code: "A01do1" },
                { name: "IR Bore Grinding 2", code: "A01do2" },
                { name: "OD Check - Gauging", code: "A01Dm1" },
                { name: "Mandril", code: "A01Mn1" },
                { name: "Pairing OR", code: "A01PR1" },
                { name: "Pairing IR", code: "A01PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A01Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A01AO1" },
                { name: "OD Check - Running", code: "A01AO2" },
                { name: "OD Check - OK", code: "A01AO3" },
                { name: "OD Check - Under", code: "A01AO4" },
                { name: "Bore Check - Over", code: "A01AI1" },
                { name: "Bore Check - OK", code: "A01AI2" },
                { name: "Bore Check - Under", code: "A01AI3" },
                { name: "Bore Check - Running", code: "A01AI4" },
                { name: "Pairing OR - Running", code: "A01PR1" },
                { name: "Pairing IR - Running", code: "A01PR2" },
                { name: "Rivet Tinggi", code: "A01RV1" },
                { name: "Rivet OK", code: "A01RV2" },
                { name: "Rivet - Missing Upper cage", code: "A01RV3" },
                { name: "Ausensitive - Smooth", code: "A01AS1" },
                { name: "Ausensitive - Unsmooth", code: "A01AS2" },
                { name: "Vibration Check - NG 1", code: "A01MV1" },
                { name: "Vibration Check - NG 2", code: "A01MV2" },
                { name: "Vibration Check - NG 3", code: "A01MV3" },
                { name: "Clearance Check - C2", code: "A01C21" },
                { name: "Clearance Check - Cn", code: "A01Cn1" },
                { name: "Clearance Check - C3", code: "A01C31" },
                { name: "Clearance Check - C4", code: "A01C41" },
                { name: "Clearance Check - C5", code: "A01C51" },
                { name: "Seal Height - Protrude Seal", code: "A01AG1" },
                { name: "Seal Height - OK Seal", code: "A01AG2" },
                { name: "Seal Height - Missing Seal", code: "A01AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A01PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A01PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A01PO3" },
                { name: "SHSE - Open Seal", code: "A01SH1" },
                { name: "SHSE - 1RS/1Z", code: "A01SH2" },
                { name: "SHSE - 2RS/2Z", code: "A01SH3" },
                { name: "Augrease Mandril - OK", code: "A01Mn2" },
                { name: "Augrease Mandril - NG", code: "A01Mn3" },
                ]
            },
        "8876" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B01de1" },
                { name: "OR Raceway Grinding de 2", code: "B01de2" },
                { name: "IR Raceway Grinding Di 1", code: "B01Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B01Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B01Dk1" },
                { name: "IR Bore Grinding 1", code: "B01do1" },
                { name: "IR Bore Grinding 2", code: "B01do2" },
                { name: "OD Check - Gauging", code: "B01Dm1" },
                { name: "Mandril", code: "B01Mn1" },
                { name: "Pairing OR", code: "B01PR1" },
                { name: "Pairing IR", code: "B01PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B01Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B01AO1" },
                { name: "OD Check - Running", code: "B01AO2" },
                { name: "OD Check - OK", code: "B01AO3" },
                { name: "OD Check - Under", code: "B01AO4" },
                { name: "Bore Check - Over", code: "B01AI1" },
                { name: "Bore Check - OK", code: "B01AI2" },
                { name: "Bore Check - Under", code: "B01AI3" },
                { name: "Bore Check - Running", code: "B01AI4" },
                { name: "Pairing OR - Running", code: "B01PR1" },
                { name: "Pairing IR - Running", code: "B01PR2" },
                { name: "Rivet Tinggi", code: "B01RV1" },
                { name: "Rivet OK", code: "B01RV2" },
                { name: "Rivet - Missing Upper cage", code: "B01RV3" },
                { name: "Ausensitive - Smooth", code: "B01AS1" },
                { name: "Ausensitive - Unsmooth", code: "B01AS2" },
                { name: "Vibration Check - NG 1", code: "B01MV1" },
                { name: "Vibration Check - NG 2", code: "B01MV2" },
                { name: "Vibration Check - NG 3", code: "B01MV3" },
                { name: "Clearance Check - C2", code: "B01C21" },
                { name: "Clearance Check - Cn", code: "B01Cn1" },
                { name: "Clearance Check - C3", code: "B01C31" },
                { name: "Clearance Check - C4", code: "B01C41" },
                { name: "Clearance Check - C5", code: "B01C51" },
                { name: "Seal Height - Protrude Seal", code: "B01AG1" },
                { name: "Seal Height - OK Seal", code: "B01AG2" },
                { name: "Seal Height - Missing Seal", code: "B01AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B01PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B01PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B01PO3" },
                { name: "SHSE - Open Seal", code: "B01SH1" },
                { name: "SHSE - 1RS/1Z", code: "B01SH2" },
                { name: "SHSE - 2RS/2Z", code: "B01SH3" },
                { name: "Augrease Mandril - OK", code: "B01Mn2" },
                { name: "Augrease Mandril - NG", code: "B01Mn3" },
                ]
        }
    },
    2: {
        "2234": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A02de1" },
                { name: "OR Raceway Grinding de 2", code: "A02de2" },
                { name: "IR Raceway Grinding Di 1", code: "A02Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A02Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A02Dk1" },
                { name: "IR Bore Grinding 1", code: "A02do1" },
                { name: "IR Bore Grinding 2", code: "A02do2" },
                { name: "OD Check - Gauging", code: "A02Dm1" },
                { name: "Mandril", code: "A02Mn1" },
                { name: "Pairing OR", code: "A02PR1" },
                { name: "Pairing IR", code: "A02PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A02n4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A02AO1" },
                { name: "OD Check - Running", code: "A02AO2" },
                { name: "OD Check - OK", code: "A02AO3" },
                { name: "OD Check - Under", code: "A02AO4" },
                { name: "Bore Check - Over", code: "A02AI1" },
                { name: "Bore Check - OK", code: "A02AI2" },
                { name: "Bore Check - Under", code: "A02AI3" },
                { name: "Bore Check - Running", code: "A02AI4" },
                { name: "Pairing OR - Running", code: "A02PR1" },
                { name: "Pairing IR - Running", code: "A02PR2" },
                { name: "Rivet Tinggi", code: "A02RV1" },
                { name: "Rivet OK", code: "A02RV2" },
                { name: "Rivet - Missing Upper cage", code: "A02RV3" },
                { name: "Ausensitive - Smooth", code: "A02AS1" },
                { name: "Ausensitive - Unsmooth", code: "A02AS2" },
                { name: "Vibration Check - NG 1", code: "A02MV1" },
                { name: "Vibration Check - NG 2", code: "A02MV2" },
                { name: "Vibration Check - NG 3", code: "A02MV3" },
                { name: "Clearance Check - C2", code: "A02C21" },
                { name: "Clearance Check - Cn", code: "A02Cn1" },
                { name: "Clearance Check - C3", code: "A02C31" },
                { name: "Clearance Check - C4", code: "A02C41" },
                { name: "Clearance Check - C5", code: "A02C51" },
                { name: "Seal Height - Protrude Seal", code: "A02AG1" },
                { name: "Seal Height - OK Seal", code: "A02AG2" },
                { name: "Seal Height - Missing Seal", code: "A02AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A02PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A02PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A02PO3" },
                { name: "SHSE - Open Seal", code: "A02SH1" },
                { name: "SHSE - 1RS/1Z", code: "A02SH2" },
                { name: "SHSE - 2RS/2Z", code: "A02SH3" },
                { name: "Augrease Mandril - OK", code: "A02Mn2" },
                { name: "Augrease Mandril - NG", code: "A02Mn3" },
                ]
            },
        "2235" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B02de1" },
                { name: "OR Raceway Grinding de 2", code: "B02de2" },
                { name: "IR Raceway Grinding Di 1", code: "B02Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B02Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B02Dk1" },
                { name: "IR Bore Grinding 1", code: "B02do1" },
                { name: "IR Bore Grinding 2", code: "B02do2" },
                { name: "OD Check - Gauging", code: "B02Dm1" },
                { name: "Mandril", code: "B02Mn1" },
                { name: "Pairing OR", code: "B02PR1" },
                { name: "Pairing IR", code: "B02PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B02Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B02AO1" },
                { name: "OD Check - Running", code: "B02AO2" },
                { name: "OD Check - OK", code: "B02AO3" },
                { name: "OD Check - Under", code: "B02AO4" },
                { name: "Bore Check - Over", code: "B02AI1" },
                { name: "Bore Check - OK", code: "B02AI2" },
                { name: "Bore Check - Under", code: "B02AI3" },
                { name: "Bore Check - Running", code: "B02AI4" },
                { name: "Pairing OR - Running", code: "B02PR1" },
                { name: "Pairing IR - Running", code: "B02PR2" },
                { name: "Rivet Tinggi", code: "B02RV1" },
                { name: "Rivet OK", code: "B02RV2" },
                { name: "Rivet - Missing Upper cage", code: "B02RV3" },
                { name: "Ausensitive - Smooth", code: "B02AS1" },
                { name: "Ausensitive - Unsmooth", code: "B02AS2" },
                { name: "Vibration Check - NG 1", code: "B02MV1" },
                { name: "Vibration Check - NG 2", code: "B02MV2" },
                { name: "Vibration Check - NG 3", code: "B02MV3" },
                { name: "Clearance Check - C2", code: "B02C21" },
                { name: "Clearance Check - Cn", code: "B02Cn1" },
                { name: "Clearance Check - C3", code: "B02C31" },
                { name: "Clearance Check - C4", code: "B02C41" },
                { name: "Clearance Check - C5", code: "B02C51" },
                { name: "Seal Height - Protrude Seal", code: "B02AG1" },
                { name: "Seal Height - OK Seal", code: "B02AG2" },
                { name: "Seal Height - Missing Seal", code: "B02AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B02PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B02PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B02PO3" },
                { name: "SHSE - Open Seal", code: "B02SH1" },
                { name: "SHSE - 1RS/1Z", code: "B02SH2" },
                { name: "SHSE - 2RS/2Z", code: "B02SH3" },
                { name: "Augrease Mandril - OK", code: "B02Mn2" },
                { name: "Augrease Mandril - NG", code: "B02Mn3" },
                ]
        }
    },

    3: {
        "4455": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A03de1" },
                { name: "OR Raceway Grinding de 2", code: "A03de2" },
                { name: "IR Raceway Grinding Di 1", code: "A03Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A03Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A03Dk1" },
                { name: "IR Bore Grinding 1", code: "A03do1" },
                { name: "IR Bore Grinding 2", code: "A03do2" },
                { name: "OD Check - Gauging", code: "A03Dm1" },
                { name: "Mandril", code: "A03Mn1" },
                { name: "Pairing OR", code: "A03PR1" },
                { name: "Pairing IR", code: "A03PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A03Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A03AO1" },
                { name: "OD Check - Running", code: "A03AO2" },
                { name: "OD Check - OK", code: "A03AO3" },
                { name: "OD Check - Under", code: "A03AO4" },
                { name: "Bore Check - Over", code: "A03AI1" },
                { name: "Bore Check - OK", code: "A03AI2" },
                { name: "Bore Check - Under", code: "A03AI3" },
                { name: "Bore Check - Running", code: "A03AI4" },
                { name: "Pairing OR - Running", code: "A03PR1" },
                { name: "Pairing IR - Running", code: "A03PR2" },
                { name: "Rivet Tinggi", code: "A03RV1" },
                { name: "Rivet OK", code: "A03RV2" },
                { name: "Rivet - Missing Upper cage", code: "A03RV3" },
                { name: "Ausensitive - Smooth", code: "A03AS1" },
                { name: "Ausensitive - Unsmooth", code: "A03AS2" },
                { name: "Vibration Check - NG 1", code: "A03MV1" },
                { name: "Vibration Check - NG 2", code: "A03MV2" },
                { name: "Vibration Check - NG 3", code: "A03MV3" },
                { name: "Clearance Check - C2", code: "A03C21" },
                { name: "Clearance Check - Cn", code: "A03Cn1" },
                { name: "Clearance Check - C3", code: "A03C31" },
                { name: "Clearance Check - C4", code: "A03C41" },
                { name: "Clearance Check - C5", code: "A03C51" },
                { name: "Seal Height - Protrude Seal", code: "A03AG1" },
                { name: "Seal Height - OK Seal", code: "A03AG2" },
                { name: "Seal Height - Missing Seal", code: "A03AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A03PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A03PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A03PO3" },
                { name: "SHSE - Open Seal", code: "A03SH1" },
                { name: "SHSE - 1RS/1Z", code: "A03SH2" },
                { name: "SHSE - 2RS/2Z", code: "A03SH3" },
                { name: "Augrease Mandril - OK", code: "A03Mn2" },
                { name: "Augrease Mandril - NG", code: "A03Mn3" },
                ]
            },
        "7788" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B03de1" },
                { name: "OR Raceway Grinding de 2", code: "B03de2" },
                { name: "IR Raceway Grinding Di 1", code: "B03Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B03Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B03Dk1" },
                { name: "IR Bore Grinding 1", code: "B03do1" },
                { name: "IR Bore Grinding 2", code: "B03do2" },
                { name: "OD Check - Gauging", code: "B03Dm1" },
                { name: "Mandril", code: "B03Mn1" },
                { name: "Pairing OR", code: "B03R1" },
                { name: "Pairing IR", code: "B03R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B03Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B03AO1" },
                { name: "OD Check - Running", code: "B03AO2" },
                { name: "OD Check - OK", code: "B03AO3" },
                { name: "OD Check - Under", code: "B03AO4" },
                { name: "Bore Check - Over", code: "B03AI1" },
                { name: "Bore Check - OK", code: "B03AI2" },
                { name: "Bore Check - Under", code: "B03AI3" },
                { name: "Bore Check - Running", code: "B03AI4" },
                { name: "Pairing OR - Running", code: "B03PR1" },
                { name: "Pairing IR - Running", code: "B03PR2" },
                { name: "Rivet Tinggi", code: "B03RV1" },
                { name: "Rivet OK", code: "B03RV2" },
                { name: "Rivet - Missing Upper cage", code: "B03RV3" },
                { name: "Ausensitive - Smooth", code: "B03AS1" },
                { name: "Ausensitive - Unsmooth", code: "B03AS2" },
                { name: "Vibration Check - NG 1", code: "B03MV1" },
                { name: "Vibration Check - NG 2", code: "B03MV2" },
                { name: "Vibration Check - NG 3", code: "B03MV3" },
                { name: "Clearance Check - C2", code: "B03C21" },
                { name: "Clearance Check - Cn", code: "B03Cn1" },
                { name: "Clearance Check - C3", code: "B03C31" },
                { name: "Clearance Check - C4", code: "B03C41" },
                { name: "Clearance Check - C5", code: "B03C51" },
                { name: "Seal Height - Protrude Seal", code: "B03AG1" },
                { name: "Seal Height - OK Seal", code: "B03AG2" },
                { name: "Seal Height - Missing Seal", code: "B03AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B03PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B03PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B03PO3" },
                { name: "SHSE - Open Seal", code: "B03SH1" },
                { name: "SHSE - 1RS/1Z", code: "B03SH2" },
                { name: "SHSE - 2RS/2Z", code: "B03SH3" },
                { name: "Augrease Mandril - OK", code: "B03Mn2" },
                { name: "Augrease Mandril - NG", code: "B03Mn3" },
                ]
        }
    },

    4: {
        "7766": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A04de1" },
                { name: "OR Raceway Grinding de 2", code: "A04de2" },
                { name: "IR Raceway Grinding Di 1", code: "A04Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A04Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A04Dk1" },
                { name: "IR Bore Grinding 1", code: "A04do1" },
                { name: "IR Bore Grinding 2", code: "A04do2" },
                { name: "OD Check - Gauging", code: "A04Dm1" },
                { name: "Mandril", code: "A04Mn1" },
                { name: "Pairing OR", code: "A04PR1" },
                { name: "Pairing IR", code: "A04PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A04Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A04AO1" },
                { name: "OD Check - Running", code: "A04AO2" },
                { name: "OD Check - OK", code: "A04AO3" },
                { name: "OD Check - Under", code: "A04AO4" },
                { name: "Bore Check - Over", code: "A04AI1" },
                { name: "Bore Check - OK", code: "A04AI2" },
                { name: "Bore Check - Under", code: "A04AI3" },
                { name: "Bore Check - Running", code: "A04AI4" },
                { name: "Pairing OR - Running", code: "A04PR1" },
                { name: "Pairing IR - Running", code: "A04PR2" },
                { name: "Rivet Tinggi", code: "A04RV1" },
                { name: "Rivet OK", code: "A04RV2" },
                { name: "Rivet - Missing Upper cage", code: "A04RV3" },
                { name: "Ausensitive - Smooth", code: "A04AS1" },
                { name: "Ausensitive - Unsmooth", code: "A04AS2" },
                { name: "Vibration Check - NG 1", code: "A04MV1" },
                { name: "Vibration Check - NG 2", code: "A04MV2" },
                { name: "Vibration Check - NG 3", code: "A04MV3" },
                { name: "Clearance Check - C2", code: "A04C21" },
                { name: "Clearance Check - Cn", code: "A04Cn1" },
                { name: "Clearance Check - C3", code: "A04C31" },
                { name: "Clearance Check - C4", code: "A04C41" },
                { name: "Clearance Check - C5", code: "A04C51" },
                { name: "Seal Height - Protrude Seal", code: "A04AG1" },
                { name: "Seal Height - OK Seal", code: "A04AG2" },
                { name: "Seal Height - Missing Seal", code: "A04AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A04PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A04PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A04PO3" },
                { name: "SHSE - Open Seal", code: "A04SH1" },
                { name: "SHSE - 1RS/1Z", code: "A04SH2" },
                { name: "SHSE - 2RS/2Z", code: "A04SH3" },
                { name: "Augrease Mandril - OK", code: "A04Mn2" },
                { name: "Augrease Mandril - NG", code: "A04Mn3" },
                ]
            },
        "8877" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B04de1" },
                { name: "OR Raceway Grinding de 2", code: "B04de2" },
                { name: "IR Raceway Grinding Di 1", code: "B04Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B04Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B04Dk1" },
                { name: "IR Bore Grinding 1", code: "B04do1" },
                { name: "IR Bore Grinding 2", code: "B04do2" },
                { name: "OD Check - Gauging", code: "B04Dm1" },
                { name: "Mandril", code: "B04Mn1" },
                { name: "Pairing OR", code: "B04PR1" },
                { name: "Pairing IR", code: "B04PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B04Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B04AO1" },
                { name: "OD Check - Running", code: "B04AO2" },
                { name: "OD Check - OK", code: "B04AO3" },
                { name: "OD Check - Under", code: "B04AO4" },
                { name: "Bore Check - Over", code: "B04AI1" },
                { name: "Bore Check - OK", code: "B04AI2" },
                { name: "Bore Check - Under", code: "B04AI3" },
                { name: "Bore Check - Running", code: "B04AI4" },
                { name: "Pairing OR - Running", code: "B04PR1" },
                { name: "Pairing IR - Running", code: "B04PR2" },
                { name: "Rivet Tinggi", code: "B04RV1" },
                { name: "Rivet OK", code: "B04RV2" },
                { name: "Rivet - Missing Upper cage", code: "B04RV3" },
                { name: "Ausensitive - Smooth", code: "B04AS1" },
                { name: "Ausensitive - Unsmooth", code: "B04AS2" },
                { name: "Vibration Check - NG 1", code: "B04MV1" },
                { name: "Vibration Check - NG 2", code: "B04MV2" },
                { name: "Vibration Check - NG 3", code: "B04MV3" },
                { name: "Clearance Check - C2", code: "B04C21" },
                { name: "Clearance Check - Cn", code: "B04Cn1" },
                { name: "Clearance Check - C3", code: "B04C31" },
                { name: "Clearance Check - C4", code: "B04C41" },
                { name: "Clearance Check - C5", code: "B04C51" },
                { name: "Seal Height - Protrude Seal", code: "B04AG1" },
                { name: "Seal Height - OK Seal", code: "B04AG2" },
                { name: "Seal Height - Missing Seal", code: "B04AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B04PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B04PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B04PO3" },
                { name: "SHSE - Open Seal", code: "B04SH1" },
                { name: "SHSE - 1RS/1Z", code: "B04SH2" },
                { name: "SHSE - 2RS/2Z", code: "B04SH3" },
                { name: "Augrease Mandril - OK", code: "B04Mn2" },
                { name: "Augrease Mandril - NG", code: "B04Mn3" },
                ]
        }
    },

    5: {
        "5544": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A05de1" },
                { name: "OR Raceway Grinding de 2", code: "A05de2" },
                { name: "IR Raceway Grinding Di 1", code: "A05Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A05Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A05Dk1" },
                { name: "IR Bore Grinding 1", code: "A05do1" },
                { name: "IR Bore Grinding 2", code: "A05do2" },
                { name: "OD Check - Gauging", code: "A05Dm1" },
                { name: "Mandril", code: "A05Mn1" },
                { name: "Pairing OR", code: "A05R1" },
                { name: "Pairing IR", code: "A05R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A05Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A05AO1" },
                { name: "OD Check - Running", code: "A05AO2" },
                { name: "OD Check - OK", code: "A05AO3" },
                { name: "OD Check - Under", code: "A05AO4" },
                { name: "Bore Check - Over", code: "A05AI1" },
                { name: "Bore Check - OK", code: "A05AI2" },
                { name: "Bore Check - Under", code: "A05AI3" },
                { name: "Bore Check - Running", code: "A05AI4" },
                { name: "Pairing OR - Running", code: "A05PR1" },
                { name: "Pairing IR - Running", code: "A05PR2" },
                { name: "Rivet Tinggi", code: "A05RV1" },
                { name: "Rivet OK", code: "A05RV2" },
                { name: "Rivet - Missing Upper cage", code: "A05RV3" },
                { name: "Ausensitive - Smooth", code: "A05AS1" },
                { name: "Ausensitive - Unsmooth", code: "A05AS2" },
                { name: "Vibration Check - NG 1", code: "A05MV1" },
                { name: "Vibration Check - NG 2", code: "A05MV2" },
                { name: "Vibration Check - NG 3", code: "A05MV3" },
                { name: "Clearance Check - C2", code: "A05C21" },
                { name: "Clearance Check - Cn", code: "A05Cn1" },
                { name: "Clearance Check - C3", code: "A05C31" },
                { name: "Clearance Check - C4", code: "A05C41" },
                { name: "Clearance Check - C5", code: "A05C51" },
                { name: "Seal Height - Protrude Seal", code: "A05AG1" },
                { name: "Seal Height - OK Seal", code: "A05AG2" },
                { name: "Seal Height - Missing Seal", code: "A05AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A05PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A12PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A05PO3" },
                { name: "SHSE - Open Seal", code: "A05SH1" },
                { name: "SHSE - 1RS/1Z", code: "A05SH2" },
                { name: "SHSE - 2RS/2Z", code: "A05SH3" },
                { name: "Augrease Mandril - OK", code: "A05Mn2" },
                { name: "Augrease Mandril - NG", code: "A05Mn3" },
                ]
            },
        "6766" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B05de1" },
                { name: "OR Raceway Grinding de 2", code: "B05de2" },
                { name: "IR Raceway Grinding Di 1", code: "B05Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B05Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B05Dk1" },
                { name: "IR Bore Grinding 1", code: "B05do1" },
                { name: "IR Bore Grinding 2", code: "B05do2" },
                { name: "OD Check - Gauging", code: "B05Dm1" },
                { name: "Mandril", code: "B05Mn1" },
                { name: "Pairing OR", code: "B05R1" },
                { name: "Pairing IR", code: "B05R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B05Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B05AO1" },
                { name: "OD Check - Running", code: "B05AO2" },
                { name: "OD Check - OK", code: "B05AO3" },
                { name: "OD Check - Under", code: "B05AO4" },
                { name: "Bore Check - Over", code: "B05AI1" },
                { name: "Bore Check - OK", code: "B05AI2" },
                { name: "Bore Check - Under", code: "B05AI3" },
                { name: "Bore Check - Running", code: "B05AI4" },
                { name: "Pairing OR - Running", code: "B05PR1" },
                { name: "Pairing IR - Running", code: "B05PR2" },
                { name: "Rivet Tinggi", code: "B05RV1" },
                { name: "Rivet OK", code: "B05RV2" },
                { name: "Rivet - Missing Upper cage", code: "B05RV3" },
                { name: "Ausensitive - Smooth", code: "B05AS1" },
                { name: "Ausensitive - Unsmooth", code: "B05AS2" },
                { name: "Vibration Check - NG 1", code: "B05MV1" },
                { name: "Vibration Check - NG 2", code: "B05MV2" },
                { name: "Vibration Check - NG 3", code: "B05MV3" },
                { name: "Clearance Check - C2", code: "B05C21" },
                { name: "Clearance Check - Cn", code: "B05Cn1" },
                { name: "Clearance Check - C3", code: "B05C31" },
                { name: "Clearance Check - C4", code: "B05C41" },
                { name: "Clearance Check - C5", code: "B05C51" },
                { name: "Seal Height - Protrude Seal", code: "AB05AG1" },
                { name: "Seal Height - OK Seal", code: "AB05AG2" },
                { name: "Seal Height - Missing Seal", code: "AB05AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "AB05PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "AB05PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "AB05PO3" },
                { name: "SHSE - Open Seal", code: "AB05SH1" },
                { name: "SHSE - 1RS/1Z", code: "AB05SH2" },
                { name: "SHSE - 2RS/2Z", code: "AB05SH3" },
                { name: "Augrease Mandril - OK", code: "B05Mn2" },
                { name: "Augrease Mandril - NG", code: "B05Mn3" },
                ]
            }
    },
    
    6 : {
        "4455": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A06e1" },
                { name: "OR Raceway Grinding de 2", code: "A06e2" },
                { name: "IR Raceway Grinding Di 1", code: "A06Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A06Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A06Dk1" },
                { name: "IR Bore Grinding 1", code: "A06do1" },
                { name: "IR Bore Grinding 2", code: "A06do2" },
                { name: "OD Check - Gauging", code: "A06Dm1" },
                { name: "Mandril", code: "A06Mn1" },
                { name: "Pairing OR", code: "A06R1" },
                { name: "Pairing IR", code: "A06R2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A06Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A06AO1" },
                { name: "OD Check - Running", code: "A06AO2" },
                { name: "OD Check - OK", code: "A06AO3" },
                { name: "OD Check - Under", code: "A06AO4" },
                { name: "Bore Check - Over", code: "A06AI1" },
                { name: "Bore Check - OK", code: "A06AI2" },
                { name: "Bore Check - Under", code: "A06AI3" },
                { name: "Bore Check - Running", code: "A06AI4" },
                { name: "Pairing OR - Running", code: "A06PR1" },
                { name: "Pairing IR - Running", code: "A06PR2" },
                { name: "Rivet Tinggi", code: "A06RV1" },
                { name: "Rivet OK", code: "A06RV2" },
                { name: "Rivet - Missing Upper cage", code: "A06RV3" },
                { name: "Ausensitive - Smooth", code: "A06AS1" },
                { name: "Ausensitive - Unsmooth", code: "A06AS2" },
                { name: "Vibration Check - NG 1", code: "A06MV1" },
                { name: "Vibration Check - NG 2", code: "A06MV2" },
                { name: "Vibration Check - NG 3", code: "A06MV3" },
                { name: "Clearance Check - C2", code: "A06C21" },
                { name: "Clearance Check - Cn", code: "A06Cn1" },
                { name: "Clearance Check - C3", code: "A06C31" },
                { name: "Clearance Check - C4", code: "A06C41" },
                { name: "Clearance Check - C5", code: "A06C51" },
                { name: "Seal Height - Protrude Seal", code: "A06AG1" },
                { name: "Seal Height - OK Seal", code: "A06AG2" },
                { name: "Seal Height - Missing Seal", code: "A06AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A06PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A06PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A06PO3" },
                { name: "SHSE - Open Seal", code: "A06SH1" },
                { name: "SHSE - 1RS/1Z", code: "A06SH2" },
                { name: "SHSE - 2RS/2Z", code: "A06SH3" },
                { name: "Augrease Mandril - OK", code: "A06Mn2" },
                { name: "Augrease Mandril - NG", code: "A06Mn3" },
                ]
            },
        "6677*" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B06de1" },
                { name: "OR Raceway Grinding de 2", code: "B06de2" },
                { name: "IR Raceway Grinding Di 1", code: "B06Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B06Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B06Dk1" },
                { name: "IR Bore Grinding 1", code: "B06do1" },
                { name: "IR Bore Grinding 2", code: "B06do2" },
                { name: "OD Check - Gauging", code: "B06Dm1" },
                { name: "Mandril", code: "B06Mn1" },
                { name: "Pairing OR", code: "B06PR1" },
                { name: "Pairing IR", code: "B06PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B06Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B06AO1" },
                { name: "OD Check - Running", code: "B06AO2" },
                { name: "OD Check - OK", code: "B06AO3" },
                { name: "OD Check - Under", code: "B06AO4" },
                { name: "Bore Check - Over", code: "B06AI1" },
                { name: "Bore Check - OK", code: "B06AI2" },
                { name: "Bore Check - Under", code: "B06AI3" },
                { name: "Bore Check - Running", code: "B06AI4" },
                { name: "Pairing OR - Running", code: "B06PR1" },
                { name: "Pairing IR - Running", code: "B06PR2" },
                { name: "Rivet Tinggi", code: "B06RV1" },
                { name: "Rivet OK", code: "B06RV2" },
                { name: "Rivet - Missing Upper cage", code: "B06RV3" },
                { name: "Ausensitive - Smooth", code: "B06AS1" },
                { name: "Ausensitive - Unsmooth", code: "B06AS2" },
                { name: "Vibration Check - NG 1", code: "B06MV1" },
                { name: "Vibration Check - NG 2", code: "B06MV2" },
                { name: "Vibration Check - NG 3", code: "B06MV3" },
                { name: "Clearance Check - C2", code: "B06C21" },
                { name: "Clearance Check - Cn", code: "B06Cn1" },
                { name: "Clearance Check - C3", code: "B06C31" },
                { name: "Clearance Check - C4", code: "B06C41" },
                { name: "Clearance Check - C5", code: "B06C51" },
                { name: "Seal Height - Protrude Seal", code: "B06AG1" },
                { name: "Seal Height - OK Seal", code: "B06AG2" },
                { name: "Seal Height - Missing Seal", code: "B06AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B06PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B06PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B06PO3" },
                { name: "SHSE - Open Seal", code: "B06SH1" },
                { name: "SHSE - 1RS/1Z", code: "B06SH2" },
                { name: "SHSE - 2RS/2Z", code: "B06SH3" },
                { name: "Augrease Mandril - OK", code: "B06Mn2" },
                { name: "Augrease Mandril - NG", code: "B06Mn3" },
                ]
            }
    },
       
    7: {
        "8876": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A07de1" },
                { name: "OR Raceway Grinding de 2", code: "A07de2" },
                { name: "IR Raceway Grinding Di 1", code: "A07Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A07Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A07Dk1" },
                { name: "IR Bore Grinding 1", code: "A07do1" },
                { name: "IR Bore Grinding 2", code: "A07do2" },
                { name: "OD Check - Gauging", code: "A07Dm1" },
                { name: "Mandril", code: "A07Mn1" },
                { name: "Pairing OR", code: "A07PR1" },
                { name: "Pairing IR", code: "A07PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A07Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A07AO1" },
                { name: "OD Check - Running", code: "A07AO2" },
                { name: "OD Check - OK", code: "A07AO3" },
                { name: "OD Check - Under", code: "A07AO4" },
                { name: "Bore Check - Over", code: "A07AI1" },
                { name: "Bore Check - OK", code: "A07AI2" },
                { name: "Bore Check - Under", code: "A07AI3" },
                { name: "Bore Check - Running", code: "A07AI4" },
                { name: "Pairing OR - Running", code: "A07PR1" },
                { name: "Pairing IR - Running", code: "A07PR2" },
                { name: "Rivet Tinggi", code: "A07RV1" },
                { name: "Rivet OK", code: "A07RV2" },
                { name: "Rivet - Missing Upper cage", code: "A07RV3" },
                { name: "Ausensitive - Smooth", code: "A07AS1" },
                { name: "Ausensitive - Unsmooth", code: "A07AS2" },
                { name: "Vibration Check - NG 1", code: "A07MV1" },
                { name: "Vibration Check - NG 2", code: "A07MV2" },
                { name: "Vibration Check - NG 3", code: "A07MV3" },
                { name: "Clearance Check - C2", code: "A07C21" },
                { name: "Clearance Check - Cn", code: "A07Cn1" },
                { name: "Clearance Check - C3", code: "A07C31" },
                { name: "Clearance Check - C4", code: "A07C41" },
                { name: "Clearance Check - C5", code: "A07C51" },
                { name: "Seal Height - Protrude Seal", code: "A07AG1" },
                { name: "Seal Height - OK Seal", code: "A07AG2" },
                { name: "Seal Height - Missing Seal", code: "A07AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A07PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A07PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A07PO3" },
                { name: "SHSE - Open Seal", code: "A07SH1" },
                { name: "SHSE - 1RS/1Z", code: "A07SH2" },
                { name: "SHSE - 2RS/2Z", code: "A07SH3" },
                { name: "Augrease Mandril - OK", code: "A07Mn2" },
                { name: "Augrease Mandril - NG", code: "A07Mn3" },
                ]
            },
        "3903" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B07de1" },
                { name: "OR Raceway Grinding de 2", code: "B07de2" },
                { name: "IR Raceway Grinding Di 1", code: "B07Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B07Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B07Dk1" },
                { name: "IR Bore Grinding 1", code: "B07do1" },
                { name: "IR Bore Grinding 2", code: "B07do2" },
                { name: "OD Check - Gauging", code: "B07Dm1" },
                { name: "Mandril", code: "B07Mn1" },
                { name: "Pairing OR", code: "B07PR1" },
                { name: "Pairing IR", code: "B07PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B07Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B07AO1" },
                { name: "OD Check - Running", code: "B07AO2" },
                { name: "OD Check - OK", code: "B07AO3" },
                { name: "OD Check - Under", code: "B07AO4" },
                { name: "Bore Check - Over", code: "B07AI1" },
                { name: "Bore Check - OK", code: "B07AI2" },
                { name: "Bore Check - Under", code: "B07AI3" },
                { name: "Bore Check - Running", code: "B07AI4" },
                { name: "Pairing OR - Running", code: "B07PR1" },
                { name: "Pairing IR - Running", code: "B07PR2" },
                { name: "Rivet Tinggi", code: "B07RV1" },
                { name: "Rivet OK", code: "B07RV2" },
                { name: "Rivet - Missing Upper cage", code: "B07RV3" },
                { name: "Ausensitive - Smooth", code: "B07AS1" },
                { name: "Ausensitive - Unsmooth", code: "B07AS2" },
                { name: "Vibration Check - NG 1", code: "B07MV1" },
                { name: "Vibration Check - NG 2", code: "B07MV2" },
                { name: "Vibration Check - NG 3", code: "B07MV3" },
                { name: "Clearance Check - C2", code: "B07C21" },
                { name: "Clearance Check - Cn", code: "B07Cn1" },
                { name: "Clearance Check - C3", code: "B07C31" },
                { name: "Clearance Check - C4", code: "B07C41" },
                { name: "Clearance Check - C5", code: "B07C51" },
                { name: "Seal Height - Protrude Seal", code: "B07AG1" },
                { name: "Seal Height - OK Seal", code: "B07AG2" },
                { name: "Seal Height - Missing Seal", code: "B07AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B07PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B07PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B07PO3" },
                { name: "SHSE - Open Seal", code: "B07SH1" },
                { name: "SHSE - 1RS/1Z", code: "B07SH2" },
                { name: "SHSE - 2RS/2Z", code: "B07SH3" },
                { name: "Augrease Mandril - OK", code: "B07Mn2" },
                { name: "Augrease Mandril - NG", code: "B07Mn3" },
                ]
        }
    },

    8: {
        "6773": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A08de1" },
                { name: "OR Raceway Grinding de 2", code: "A08de2" },
                { name: "IR Raceway Grinding Di 1", code: "A08Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A08Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A08Dk1" },
                { name: "IR Bore Grinding 1", code: "A08do1" },
                { name: "IR Bore Grinding 2", code: "A08do2" },
                { name: "OD Check - Gauging", code: "A08Dm1" },
                { name: "Mandril", code: "A08Mn1" },
                { name: "Pairing OR", code: "A08PR1" },
                { name: "Pairing IR", code: "A08PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A08Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A08AO1" },
                { name: "OD Check - Running", code: "A08AO2" },
                { name: "OD Check - OK", code: "A08AO3" },
                { name: "OD Check - Under", code: "A08AO4" },
                { name: "Bore Check - Over", code: "A08AI1" },
                { name: "Bore Check - OK", code: "A08AI2" },
                { name: "Bore Check - Under", code: "A08AI3" },
                { name: "Bore Check - Running", code: "A08AI4" },
                { name: "Pairing OR - Running", code: "A08PR1" },
                { name: "Pairing IR - Running", code: "A08PR2" },
                { name: "Rivet Tinggi", code: "A08RV1" },
                { name: "Rivet OK", code: "A08RV2" },
                { name: "Rivet - Missing Upper cage", code: "A08RV3" },
                { name: "Ausensitive - Smooth", code: "A08AS1" },
                { name: "Ausensitive - Unsmooth", code: "A08AS2" },
                { name: "Vibration Check - NG 1", code: "A08MV1" },
                { name: "Vibration Check - NG 2", code: "A08MV2" },
                { name: "Vibration Check - NG 3", code: "A08MV3" },
                { name: "Clearance Check - C2", code: "A08C21" },
                { name: "Clearance Check - Cn", code: "A08Cn1" },
                { name: "Clearance Check - C3", code: "A08C31" },
                { name: "Clearance Check - C4", code: "A08C41" },
                { name: "Clearance Check - C5", code: "A08C51" },
                { name: "Seal Height - Protrude Seal", code: "A08AG1" },
                { name: "Seal Height - OK Seal", code: "A08AG2" },
                { name: "Seal Height - Missing Seal", code: "A08AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A08PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A08PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A08PO3" },
                { name: "SHSE - Open Seal", code: "A08SH1" },
                { name: "SHSE - 1RS/1Z", code: "A08SH2" },
                { name: "SHSE - 2RS/2Z", code: "A08SH3" },
                { name: "Augrease Mandril - OK", code: "A08Mn2" },
                { name: "Augrease Mandril - NG", code: "A08Mn3" },
                ]
            },
        "9987" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B08de1" },
                { name: "OR Raceway Grinding de 2", code: "B08de2" },
                { name: "IR Raceway Grinding Di 1", code: "B08Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B08Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B08Dk1" },
                { name: "IR Bore Grinding 1", code: "B08do1" },
                { name: "IR Bore Grinding 2", code: "B08do2" },
                { name: "OD Check - Gauging", code: "B08Dm1" },
                { name: "Mandril", code: "B08Mn1" },
                { name: "Pairing OR", code: "B08PR1" },
                { name: "Pairing IR", code: "B08PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B08Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B08AO1" },
                { name: "OD Check - Running", code: "B08AO2" },
                { name: "OD Check - OK", code: "B08AO3" },
                { name: "OD Check - Under", code: "B08AO4" },
                { name: "Bore Check - Over", code: "B08AI1" },
                { name: "Bore Check - OK", code: "B08AI2" },
                { name: "Bore Check - Under", code: "B08AI3" },
                { name: "Bore Check - Running", code: "B08AI4" },
                { name: "Pairing OR - Running", code: "B08PR1" },
                { name: "Pairing IR - Running", code: "B08PR2" },
                { name: "Rivet Tinggi", code: "B08RV1" },
                { name: "Rivet OK", code: "B08RV2" },
                { name: "Rivet - Missing Upper cage", code: "B08RV3" },
                { name: "Ausensitive - Smooth", code: "B08AS1" },
                { name: "Ausensitive - Unsmooth", code: "B08AS2" },
                { name: "Vibration Check - NG 1", code: "B08MV1" },
                { name: "Vibration Check - NG 2", code: "B08MV2" },
                { name: "Vibration Check - NG 3", code: "B08MV3" },
                { name: "Clearance Check - C2", code: "B08C21" },
                { name: "Clearance Check - Cn", code: "B08Cn1" },
                { name: "Clearance Check - C3", code: "B08C31" },
                { name: "Clearance Check - C4", code: "B08C41" },
                { name: "Clearance Check - C5", code: "B08C51" },
                { name: "Seal Height - Protrude Seal", code: "B08AG1" },
                { name: "Seal Height - OK Seal", code: "B08AG2" },
                { name: "Seal Height - Missing Seal", code: "B08AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B08PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B08PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B08PO3" },
                { name: "SHSE - Open Seal", code: "B08SH1" },
                { name: "SHSE - 1RS/1Z", code: "B08SH2" },
                { name: "SHSE - 2RS/2Z", code: "B08SH3" },
                { name: "Augrease Mandril - OK", code: "B08Mn2" },
                { name: "Augrease Mandril - NG", code: "B08Mn3" },
                ]
        }
    },

    9: {
        "9987": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A09de1" },
                { name: "OR Raceway Grinding de 2", code: "A09de2" },
                { name: "IR Raceway Grinding Di 1", code: "A09Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A09Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A09Dk1" },
                { name: "IR Bore Grinding 1", code: "A09do1" },
                { name: "IR Bore Grinding 2", code: "A09do2" },
                { name: "OD Check - Gauging", code: "A09Dm1" },
                { name: "Mandril", code: "A09Mn1" },
                { name: "Pairing OR", code: "A09PR1" },
                { name: "Pairing IR", code: "A09PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A09Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A09AO1" },
                { name: "OD Check - Running", code: "A09AO2" },
                { name: "OD Check - OK", code: "A09AO3" },
                { name: "OD Check - Under", code: "A09AO4" },
                { name: "Bore Check - Over", code: "A09AI1" },
                { name: "Bore Check - OK", code: "A09AI2" },
                { name: "Bore Check - Under", code: "A09AI3" },
                { name: "Bore Check - Running", code: "A09AI4" },
                { name: "Pairing OR - Running", code: "A09PR1" },
                { name: "Pairing IR - Running", code: "A09PR2" },
                { name: "Rivet Tinggi", code: "A09RV1" },
                { name: "Rivet OK", code: "A09RV2" },
                { name: "Rivet - Missing Upper cage", code: "A09RV3" },
                { name: "Ausensitive - Smooth", code: "A09AS1" },
                { name: "Ausensitive - Unsmooth", code: "A09AS2" },
                { name: "Vibration Check - NG 1", code: "A09MV1" },
                { name: "Vibration Check - NG 2", code: "A09MV2" },
                { name: "Vibration Check - NG 3", code: "A09MV3" },
                { name: "Clearance Check - C2", code: "A09C21" },
                { name: "Clearance Check - Cn", code: "A09Cn1" },
                { name: "Clearance Check - C3", code: "A09C31" },
                { name: "Clearance Check - C4", code: "A09C41" },
                { name: "Clearance Check - C5", code: "A09C51" },
                { name: "Seal Height - Protrude Seal", code: "A09AG1" },
                { name: "Seal Height - OK Seal", code: "A09AG2" },
                { name: "Seal Height - Missing Seal", code: "A09AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A09PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A09PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A09PO3" },
                { name: "SHSE - Open Seal", code: "A09SH1" },
                { name: "SHSE - 1RS/1Z", code: "A09SH2" },
                { name: "SHSE - 2RS/2Z", code: "A09SH3" },
                { name: "Augrease Mandril - OK", code: "A09Mn2" },
                { name: "Augrease Mandril - NG", code: "A09Mn3" },
                ]
            },
        "6674" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B09de1" },
                { name: "OR Raceway Grinding de 2", code: "B09de2" },
                { name: "IR Raceway Grinding Di 1", code: "B09Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B09Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B09Dk1" },
                { name: "IR Bore Grinding 1", code: "B09do1" },
                { name: "IR Bore Grinding 2", code: "B09do2" },
                { name: "OD Check - Gauging", code: "B09Dm1" },
                { name: "Mandril", code: "B09Mn1" },
                { name: "Pairing OR", code: "B09PR1" },
                { name: "Pairing IR", code: "B09PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B09Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B09AO1" },
                { name: "OD Check - Running", code: "B09AO2" },
                { name: "OD Check - OK", code: "B09AO3" },
                { name: "OD Check - Under", code: "B09AO4" },
                { name: "Bore Check - Over", code: "B09AI1" },
                { name: "Bore Check - OK", code: "B09AI2" },
                { name: "Bore Check - Under", code: "B09AI3" },
                { name: "Bore Check - Running", code: "B09AI4" },
                { name: "Pairing OR - Running", code: "B09PR1" },
                { name: "Pairing IR - Running", code: "B09PR2" },
                { name: "Rivet Tinggi", code: "B09RV1" },
                { name: "Rivet OK", code: "B09RV2" },
                { name: "Rivet - Missing Upper cage", code: "B09RV3" },
                { name: "Ausensitive - Smooth", code: "B09AS1" },
                { name: "Ausensitive - Unsmooth", code: "B09AS2" },
                { name: "Vibration Check - NG 1", code: "B09MV1" },
                { name: "Vibration Check - NG 2", code: "B09MV2" },
                { name: "Vibration Check - NG 3", code: "B09MV3" },
                { name: "Clearance Check - C2", code: "B09C21" },
                { name: "Clearance Check - Cn", code: "B09Cn1" },
                { name: "Clearance Check - C3", code: "B09C31" },
                { name: "Clearance Check - C4", code: "B09C41" },
                { name: "Clearance Check - C5", code: "B09C51" },
                { name: "Seal Height - Protrude Seal", code: "B09AG1" },
                { name: "Seal Height - OK Seal", code: "B09AG2" },
                { name: "Seal Height - Missing Seal", code: "B09AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B09PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B09PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B09PO3" },
                { name: "SHSE - Open Seal", code: "B09SH1" },
                { name: "SHSE - 1RS/1Z", code: "B09SH2" },
                { name: "SHSE - 2RS/2Z", code: "B09SH3" },
                { name: "Augrease Mandril - OK", code: "B09Mn2" },
                { name: "Augrease Mandril - NG", code: "B09Mn3" },
                ]
        }
    },

    10: {
        "6202": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A10de1" },
                { name: "OR Raceway Grinding de 2", code: "A10de2" },
                { name: "IR Raceway Grinding Di 1", code: "A10Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A10Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A10Dk1" },
                { name: "IR Bore Grinding 1", code: "A10do1" },
                { name: "IR Bore Grinding 2", code: "A10do2" },
                { name: "OD Check - Gauging", code: "A10Dm1" },
                { name: "Mandril", code: "A10Mn1" },
                { name: "Pairing OR", code: "A10PR1" },
                { name: "Pairing IR", code: "A10PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A10Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A10AO1" },
                { name: "OD Check - Running", code: "A10AO2" },
                { name: "OD Check - OK", code: "A10AO3" },
                { name: "OD Check - Under", code: "A10AO4" },
                { name: "Bore Check - Over", code: "A10AI1" },
                { name: "Bore Check - OK", code: "A10AI2" },
                { name: "Bore Check - Under", code: "A10AI3" },
                { name: "Bore Check - Running", code: "A10AI4" },
                { name: "Pairing OR - Running", code: "A10PR1" },
                { name: "Pairing IR - Running", code: "A10PR2" },
                { name: "Rivet Tinggi", code: "A10RV1" },
                { name: "Rivet OK", code: "A10RV2" },
                { name: "Rivet - Missing Upper cage", code: "A10RV3" },
                { name: "Ausensitive - Smooth", code: "A10AS1" },
                { name: "Ausensitive - Unsmooth", code: "A10AS2" },
                { name: "Vibration Check - NG 1", code: "A10MV1" },
                { name: "Vibration Check - NG 2", code: "A10MV2" },
                { name: "Vibration Check - NG 3", code: "A10MV3" },
                { name: "Clearance Check - C2", code: "A10C21" },
                { name: "Clearance Check - Cn", code: "A10Cn1" },
                { name: "Clearance Check - C3", code: "A10C31" },
                { name: "Clearance Check - C4", code: "A10C41" },
                { name: "Clearance Check - C5", code: "A10C51" },
                { name: "Seal Height - Protrude Seal", code: "A10AG1" },
                { name: "Seal Height - OK Seal", code: "A10AG2" },
                { name: "Seal Height - Missing Seal", code: "A10AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A10PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A10PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A10PO3" },
                { name: "SHSE - Open Seal", code: "A10SH1" },
                { name: "SHSE - 1RS/1Z", code: "A10SH2" },
                { name: "SHSE - 2RS/2Z", code: "A10SH3" },
                { name: "Augrease Mandril - OK", code: "A10Mn2" },
                { name: "Augrease Mandril - NG", code: "A10Mn3" },
                ]
            },
        "8876" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B10de1" },
                { name: "OR Raceway Grinding de 2", code: "B10de2" },
                { name: "IR Raceway Grinding Di 1", code: "B10Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B10Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B10Dk1" },
                { name: "IR Bore Grinding 1", code: "B10do1" },
                { name: "IR Bore Grinding 2", code: "B10do2" },
                { name: "OD Check - Gauging", code: "B10Dm1" },
                { name: "Mandril", code: "B10Mn1" },
                { name: "Pairing OR", code: "B10PR1" },
                { name: "Pairing IR", code: "B10PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B10Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B10AO1" },
                { name: "OD Check - Running", code: "B10AO2" },
                { name: "OD Check - OK", code: "B10AO3" },
                { name: "OD Check - Under", code: "B10AO4" },
                { name: "Bore Check - Over", code: "B10AI1" },
                { name: "Bore Check - OK", code: "B10AI2" },
                { name: "Bore Check - Under", code: "B10AI3" },
                { name: "Bore Check - Running", code: "B10AI4" },
                { name: "Pairing OR - Running", code: "B10PR1" },
                { name: "Pairing IR - Running", code: "B10PR2" },
                { name: "Rivet Tinggi", code: "B10RV1" },
                { name: "Rivet OK", code: "B10RV2" },
                { name: "Rivet - Missing Upper cage", code: "B10RV3" },
                { name: "Ausensitive - Smooth", code: "B10AS1" },
                { name: "Ausensitive - Unsmooth", code: "B10AS2" },
                { name: "Vibration Check - NG 1", code: "B10MV1" },
                { name: "Vibration Check - NG 2", code: "B10MV2" },
                { name: "Vibration Check - NG 3", code: "B10MV3" },
                { name: "Clearance Check - C2", code: "B10C21" },
                { name: "Clearance Check - Cn", code: "B10Cn1" },
                { name: "Clearance Check - C3", code: "B10C31" },
                { name: "Clearance Check - C4", code: "B10C41" },
                { name: "Clearance Check - C5", code: "B10C51" },
                { name: "Seal Height - Protrude Seal", code: "B10AG1" },
                { name: "Seal Height - OK Seal", code: "B10AG2" },
                { name: "Seal Height - Missing Seal", code: "B10AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B10PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B10PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B10PO3" },
                { name: "SHSE - Open Seal", code: "B10SH1" },
                { name: "SHSE - 1RS/1Z", code: "B10SH2" },
                { name: "SHSE - 2RS/2Z", code: "B10SH3" },
                { name: "Augrease Mandril - OK", code: "B10Mn2" },
                { name: "Augrease Mandril - NG", code: "B10Mn3" },
                ]
        }
    },

    11: {
        "6302": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A11de1" },
                { name: "OR Raceway Grinding de 2", code: "A11de2" },
                { name: "IR Raceway Grinding Di 1", code: "A11Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A11Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A11Dk1" },
                { name: "IR Bore Grinding 1", code: "A11do1" },
                { name: "IR Bore Grinding 2", code: "A11do2" },
                { name: "OD Check - Gauging", code: "A11Dm1" },
                { name: "Mandril", code: "A11Mn1" },
                { name: "Pairing OR", code: "A11PR1" },
                { name: "Pairing IR", code: "A11PR2" },
                { name: "Mandril - condition d1;d2;d3", code: "A11Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A11AO1" },
                { name: "OD Check - OK", code: "A11AO2" },
                { name: "OD Check - Under", code: "A11AO3" },
                { name: "OD Check - Running", code: "A11AO4" },
                { name: "Bore Check - Over", code: "A11AI1" },
                { name: "Bore Check - OK", code: "A11AI2" },
                { name: "Bore Check - Under", code: "A11AI3" },
                { name: "Bore Check - Running", code: "A11AI4" },
                { name: "Pairing OR - Running", code: "A11PR1" },
                { name: "Pairing IR - Running", code: "A11PR2" },
                { name: "Rivet Tinggi", code: "A11RV1" },
                { name: "Rivet OK", code: "A11RV2" },
                { name: "Rivet - Missing Upper cage", code: "A11RV3" },
                { name: "Ausensitive - Smooth", code: "A11AS1" },
                { name: "Ausensitive - Unsmooth", code: "A11AS2" },
                { name: "Vibration Check - NG 1", code: "A11MV1" },
                { name: "Vibration Check - NG 2", code: "A11MV2" },
                { name: "Vibration Check - NG 3", code: "A11MV3" },
                { name: "Clearance Check - C2", code: "A11C21" },
                { name: "Clearance Check - Cn", code: "A11Cn1" },
                { name: "Clearance Check - C3", code: "A11C31" },
                { name: "Clearance Check - C4", code: "A11C41" },
                { name: "Clearance Check - C5", code: "A11C51" },
                { name: "Seal Height - Protrude Seal", code: "A11AG1" },
                { name: "Seal Height - OK Seal", code: "A11AG2" },
                { name: "Seal Height - Missing Seal", code: "A11AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A11PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A11PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A11PO3" },
                { name: "SHSE - Open Seal", code: "A11SH1" },
                { name: "SHSE - 1RS/1Z", code: "A11SH2" },
                { name: "SHSE - 2RS/2Z", code: "A11SH3" },
                { name: "Augrease Mandril - OK", code: "A11Mn2" },
                { name: "Augrease Mandril - NG", code: "A11Mn3" },
                ]
            },
        "4343" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B11de1" },
                { name: "OR Raceway Grinding de 2", code: "B11de2" },
                { name: "IR Raceway Grinding Di 1", code: "B11Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B11Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B11Dk1" },
                { name: "IR Bore Grinding 1", code: "B11do1" },
                { name: "IR Bore Grinding 2", code: "B11do2" },
                { name: "OD Check - Gauging", code: "B11Dm1" },
                { name: "Mandril", code: "B11Mn1" },
                { name: "Pairing OR", code: "B11PR1" },
                { name: "Pairing IR", code: "B11PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B11Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B11AO1" },
                { name: "OD Check - Running", code: "B11AO2" },
                { name: "OD Check - OK", code: "B11AO3" },
                { name: "OD Check - Under", code: "B11AO4" },
                { name: "Bore Check - Over", code: "B11AI1" },
                { name: "Bore Check - OK", code: "B11AI2" },
                { name: "Bore Check - Under", code: "B11AI3" },
                { name: "Bore Check - Running", code: "B11AI4" },
                { name: "Pairing OR - Running", code: "B11PR1" },
                { name: "Pairing IR - Running", code: "B11PR2" },
                { name: "Rivet Tinggi", code: "B11RV1" },
                { name: "Rivet OK", code: "B11RV2" },
                { name: "Rivet - Missing Upper cage", code: "B11RV3" },
                { name: "Ausensitive - Smooth", code: "B11AS1" },
                { name: "Ausensitive - Unsmooth", code: "B11AS2" },
                { name: "Vibration Check - NG 1", code: "B11MV1" },
                { name: "Vibration Check - NG 2", code: "B11MV2" },
                { name: "Vibration Check - NG 3", code: "B11MV3" },
                { name: "Clearance Check - C2", code: "B11C21" },
                { name: "Clearance Check - Cn", code: "B11Cn1" },
                { name: "Clearance Check - C3", code: "B11C31" },
                { name: "Clearance Check - C4", code: "B11C41" },
                { name: "Clearance Check - C5", code: "B11C51" },
                { name: "Seal Height - Protrude Seal", code: "B11AG1" },
                { name: "Seal Height - OK Seal", code: "B11AG2" },
                { name: "Seal Height - Missing Seal", code: "B11AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B11PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B11PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B11PO3" },
                { name: "SHSE - Open Seal", code: "B11SH1" },
                { name: "SHSE - 1RS/1Z", code: "B11SH2" },
                { name: "SHSE - 2RS/2Z", code: "B11SH3" },
                { name: "Augrease Mandril - OK", code: "B11Mn2" },
                { name: "Augrease Mandril - NG", code: "B11Mn3" },
                ]
        }
    },

    12: {
        "6204": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A12de1" },
                { name: "OR Raceway Grinding de 2", code: "A12de2" },
                { name: "IR Raceway Grinding Di 1", code: "A12Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A12Di2" },
                { name: "Shoulder Diameter Dk 1", code: "A12Dk1" },
                { name: "IR Bore Diameter 1", code: "A12do1" },
                { name: "IR Bore Diameter 2", code: "A12do2" },
                { name: "OD Check - dm", code: "A12Dm1" },
                { name: "Mandril", code: "A12Mn1" },
                { name: "Pairing OR", code: "A12PR1" },
                { name: "Pairing IR", code: "A12PR2" },
                { name: "Mandril - condition d1;d2;d3", code: "A12Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A12AO1" },
                { name: "OD Check - OK", code: "A12AO2" },
                { name: "OD Check - Under", code: "A12AO3" },
                { name: "OD Check - Running", code: "A12AO4" },
                { name: "Bore Check - Over", code: "A12AI1" },
                { name: "Bore Check - OK", code: "A12AI2" },
                { name: "Bore Check - Under", code: "A12AI3" },
                { name: "Bore Check - Running", code: "A12AI4" },
                { name: "Pairing OR - Running", code: "A12PR3" },
                { name: "Pairing IR - Running", code: "A12PR4" },
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
                { name: "Seal Height - Protrude Seal", code: "A12AG1" },
                { name: "Seal Height - OK Seal", code: "A12AG2" },
                { name: "Seal Height - Missing Seal", code: "A12AG3" },
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
                { name: "OR Raceway Grinding de 1", code: "A13de1" },
                { name: "OR Raceway Grinding de 2", code: "A13de2" },
                { name: "IR Raceway Grinding Di 1", code: "A13Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A13Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A13Dk1" },
                { name: "IR Bore Grinding 1", code: "A13do1" },
                { name: "IR Bore Grinding 2", code: "A13do2" },
                { name: "OD Check - Gauging", code: "A13Dm1" },
                { name: "Mandril", code: "A13Mn1" },
                { name: "Pairing OR", code: "A13PR1" },
                { name: "Pairing IR", code: "A13PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A13Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A13AO1" },
                { name: "OD Check - Running", code: "A13AO2" },
                { name: "OD Check - OK", code: "A13AO3" },
                { name: "OD Check - Under", code: "A13AO4" },
                { name: "Bore Check - Over", code: "A13AI1" },
                { name: "Bore Check - OK", code: "A13AI2" },
                { name: "Bore Check - Under", code: "A13AI3" },
                { name: "Bore Check - Running", code: "A13AI4" },
                { name: "Pairing OR - Running", code: "A13PR1" },
                { name: "Pairing IR - Running", code: "A13PR2" },
                { name: "Rivet Tinggi", code: "A13RV1" },
                { name: "Rivet OK", code: "A13RV2" },
                { name: "Rivet - Missing Upper cage", code: "A13RV3" },
                { name: "Ausensitive - Smooth", code: "A13AS1" },
                { name: "Ausensitive - Unsmooth", code: "A13AS2" },
                { name: "Vibration Check - NG 1", code: "A13MV1" },
                { name: "Vibration Check - NG 2", code: "A13MV2" },
                { name: "Vibration Check - NG 3", code: "A13MV3" },
                { name: "Clearance Check - C2", code: "A13C21" },
                { name: "Clearance Check - Cn", code: "A13Cn1" },
                { name: "Clearance Check - C3", code: "A13C31" },
                { name: "Clearance Check - C4", code: "A13C41" },
                { name: "Clearance Check - C5", code: "A13C51" },
                { name: "Seal Height - Protrude Seal", code: "A13AG1" },
                { name: "Seal Height - OK Seal", code: "A13AG2" },
                { name: "Seal Height - Missing Seal", code: "A13AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A13PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A13PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A13PO3" },
                { name: "SHSE - Open Seal", code: "A13SH1" },
                { name: "SHSE - 1RS/1Z", code: "A13SH2" },
                { name: "SHSE - 2RS/2Z", code: "A13SH3" },
                { name: "Augrease Mandril - OK", code: "A13Mn2" },
                { name: "Augrease Mandril - NG", code: "A13Mn3" },
                ]
            },
        "0697" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B13de1" },
                { name: "OR Raceway Grinding de 2", code: "B13de2" },
                { name: "IR Raceway Grinding Di 1", code: "B13Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B13Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B13Dk1" },
                { name: "IR Bore Grinding 1", code: "B13do1" },
                { name: "IR Bore Grinding 2", code: "B13do2" },
                { name: "OD Check - Gauging", code: "B13Dm1" },
                { name: "Mandril", code: "B13Mn1" },
                { name: "Pairing OR", code: "B13PR1" },
                { name: "Pairing IR", code: "B13PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B13Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B13AO1" },
                { name: "OD Check - Running", code: "B13AO2" },
                { name: "OD Check - OK", code: "B13AO3" },
                { name: "OD Check - Under", code: "B13AO4" },
                { name: "Bore Check - Over", code: "B13AI1" },
                { name: "Bore Check - OK", code: "B13AI2" },
                { name: "Bore Check - Under", code: "B13AI3" },
                { name: "Bore Check - Running", code: "B13AI4" },
                { name: "Pairing OR - Running", code: "B13PR1" },
                { name: "Pairing IR - Running", code: "B13PR2" },
                { name: "Rivet Tinggi", code: "B13RV1" },
                { name: "Rivet OK", code: "B13RV2" },
                { name: "Rivet - Missing Upper cage", code: "B13RV3" },
                { name: "Vibration Check - NG 1", code: "B13MV1" },
                { name: "Vibration Check - NG 2", code: "B13MV2" },
                { name: "Vibration Check - NG 3", code: "B13MV3" },
                { name: "Clearance Check - C2", code: "B13C21" },
                { name: "Clearance Check - Cn", code: "B13Cn1" },
                { name: "Clearance Check - C3", code: "B13C31" },
                { name: "Clearance Check - C4", code: "B13C41" },
                { name: "Clearance Check - C5", code: "B13C51" },
                { name: "Seal Height - Protrude Seal", code: "B13AG1" },
                { name: "Seal Height - OK Seal", code: "B13AG2" },
                { name: "Seal Height - Missing Seal", code: "B13AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B13PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B13PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B13PO3" },
                { name: "SHSE - Open Seal", code: "B13SH1" },
                { name: "SHSE - 1RS/1Z", code: "B13SH2" },
                { name: "SHSE - 2RS/2Z", code: "B13SH3" },
                { name: "Augrease Mandril - OK", code: "B13Mn2" },
                { name: "Augrease Mandril - NG", code: "B13Mn3" },
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
                { name: "Mandril", code: "A14Mn1" },
                { name: "Pairing OR", code: "A14PR1" },
                { name: "Pairing IR", code: "A14PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A14AO1" },
                { name: "OD Check - Running", code: "A14AO2" },
                { name: "OD Check - OK", code: "A14AO3" },
                { name: "OD Check - Under", code: "A14AO4" },
                { name: "Bore Check - Over", code: "A14AI1" },
                { name: "Bore Check - OK", code: "A14AI2" },
                { name: "Bore Check - Under", code: "A14AI3" },
                { name: "Bore Check - Running", code: "A14AI4" },
                { name: "Pairing OR - Running", code: "A14PR1" },
                { name: "Pairing IR - Running", code: "A14PR2" },
                { name: "Rivet Tinggi", code: "A14RV1" },
                { name: "Rivet OK", code: "A14RV2" },
                { name: "Rivet - Missing Upper cage", code: "A14RV3" },
                { name: "Vibration Check - NG 1", code: "A14MV1" },
                { name: "Vibration Check - NG 2", code: "A14MV2" },
                { name: "Vibration Check - NG 3", code: "A14MV3" },
                { name: "Clearance Check - C2", code: "A14C21" },
                { name: "Clearance Check - Cn", code: "A14Cn1" },
                { name: "Clearance Check - C3", code: "A14C31" },
                { name: "Clearance Check - C4", code: "A14C41" },
                { name: "Clearance Check - C5", code: "A14C51" },
                { name: "Seal Height - Protrude Seal", code: "A14AG1" },
                { name: "Seal Height - OK Seal", code: "A14AG2" },
                { name: "Seal Height - Missing Seal", code: "A14AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A14PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A14PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A14PO3" },
                { name: "SHSE - Open Seal", code: "A14SH1" },
                { name: "SHSE - 1RS/1Z", code: "A14SH2" },
                { name: "SHSE - 2RS/2Z", code: "A14SH3" },
                { name: "Augrease Mandril - OK", code: "A14Mn2" },
                { name: "Augrease Mandril - NG", code: "A14Mn3" },
                ]
            },
        "6203" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B14de1" },
                { name: "OR Raceway Grinding de 2", code: "B14de2" },
                { name: "IR Raceway Grinding Di 1", code: "B14Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B14Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B14Dk1" },
                { name: "IR Bore Grinding 1", code: "B14do1" },
                { name: "IR Bore Grinding 2", code: "B14do2" },
                { name: "OD Check - Gauging", code: "B14Dm1" },
                { name: "Mandril", code: "B14Mn1" },
                { name: "Pairing OR", code: "B14PR1" },
                { name: "Pairing IR", code: "B14PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "B14Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "B14AO1" },
                { name: "OD Check - Running", code: "B14AO2" },
                { name: "OD Check - OK", code: "B14AO3" },
                { name: "OD Check - Under", code: "B14AO4" },
                { name: "Bore Check - Over", code: "B14AI1" },
                { name: "Bore Check - OK", code: "B14AI2" },
                { name: "Bore Check - Under", code: "B14AI3" },
                { name: "Bore Check - Running", code: "B14AI4" },
                { name: "Pairing OR - Running", code: "B14PR1" },
                { name: "Pairing IR - Running", code: "B14PR2" },
                { name: "Rivet Tinggi", code: "B14RV1" },
                { name: "Rivet OK", code: "B14RV2" },
                { name: "Rivet - Missing Upper cage", code: "B14RV3" },
                { name: "Vibration Check - NG 1", code: "B14MV1" },
                { name: "Vibration Check - NG 2", code: "B14MV2" },
                { name: "Vibration Check - NG 3", code: "B14MV3" },
                { name: "Clearance Check - C2", code: "B14C21" },
                { name: "Clearance Check - Cn", code: "B14Cn1" },
                { name: "Clearance Check - C3", code: "B14C31" },
                { name: "Clearance Check - C4", code: "B14C41" },
                { name: "Clearance Check - C5", code: "B14C51" },
                { name: "Seal Height - Protrude Seal", code: "B14AG1" },
                { name: "Seal Height - OK Seal", code: "B14AG2" },
                { name: "Seal Height - Missing Seal", code: "B14AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "B14PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "B14PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "B14PO3" },
                { name: "SHSE - Open Seal", code: "B14SH1" },
                { name: "SHSE - 1RS/1Z", code: "B14SH2" },
                { name: "SHSE - 2RS/2Z", code: "B14SH3" },
                { name: "Augrease Mandril - OK", code: "A14Mn2" },
                { name: "Augrease Mandril - NG", code: "A14Mn3" },
                ]
        }
    },

    15: {
        "0256": {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "A15de1" },
                { name: "OR Raceway Grinding de 2", code: "A15de2" },
                { name: "IR Raceway Grinding Di 1", code: "A15Di1" },
                { name: "IR Raceway Grinding Di 2", code: "A15Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "A15Dk1" },
                { name: "IR Bore Grinding 1", code: "A15do1" },
                { name: "IR Bore Grinding 2", code: "A15do2" },
                { name: "OD Check - Gauging", code: "A15Dm1" },
                { name: "Mandril", code: "A15Mn1" },
                { name: "Pairing OR", code: "A15PR1" },
                { name: "Pairing IR", code: "A15PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A15Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A15AO1" },
                { name: "OD Check - Running", code: "A15AO2" },
                { name: "OD Check - OK", code: "A15AO3" },
                { name: "OD Check - Under", code: "A15AO4" },
                { name: "Bore Check - Over", code: "A15AI1" },
                { name: "Bore Check - OK", code: "A15AI2" },
                { name: "Bore Check - Under", code: "A15AI3" },
                { name: "Bore Check - Running", code: "A15AI4" },
                { name: "Pairing OR - Running", code: "A15PR1" },
                { name: "Pairing IR - Running", code: "A15PR2" },
                { name: "Rivet Tinggi", code: "A15RV1" },
                { name: "Rivet OK", code: "A15RV2" },
                { name: "Rivet - Missing Upper cage", code: "A15RV3" },
                { name: "Ausensitive - Smooth", code: "A15AS1" },
                { name: "Ausensitive - Unsmooth", code: "A15AS2" },
                { name: "Vibration Check - NG 1", code: "A15MV1" },
                { name: "Vibration Check - NG 2", code: "A15MV2" },
                { name: "Vibration Check - NG 3", code: "A15MV3" },
                { name: "Clearance Check - C2", code: "A15C21" },
                { name: "Clearance Check - Cn", code: "A15Cn1" },
                { name: "Clearance Check - C3", code: "A15C31" },
                { name: "Clearance Check - C4", code: "A15C41" },
                { name: "Clearance Check - C5", code: "A15C51" },
                { name: "Seal Height - Protrude Seal", code: "A15AG1" },
                { name: "Seal Height - OK Seal", code: "A15AG2" },
                { name: "Seal Height - Missing Seal", code: "A15AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A15PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A15PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A15PO3" },
                { name: "SHSE - Open Seal", code: "A15SH1" },
                { name: "SHSE - 1RS/1Z", code: "A15SH2" },
                { name: "SHSE - 2RS/2Z", code: "A15SH3" },
                { name: "Augrease Mandril - OK", code: "A15Mn2" },
                { name: "Augrease Mandril - NG", code: "A15Mn3" },
                ]
            },
        "0285" : {
            gauging: [
                { name: "OR Raceway Grinding de 1", code: "B15de1" },
                { name: "OR Raceway Grinding de 2", code: "B15de2" },
                { name: "IR Raceway Grinding Di 1", code: "B15Di1" },
                { name: "IR Raceway Grinding Di 2", code: "B15Di2" },
                { name: "IR Raceway Grinding Dk 1", code: "B15Dk1" },
                { name: "IR Bore Grinding 1", code: "B15do1" },
                { name: "IR Bore Grinding 2", code: "B15do2" },
                { name: "OD Check - Gauging", code: "B15Dm1" },
                { name: "Mandril", code: "B15Mn1" },
                { name: "Pairing OR", code: "B15PR1" },
                { name: "Pairing IR", code: "B15PR2" },
                { name: "Augrease Mandril - condition d1;d2;d3", code: "A15Mn4" },
            ],
            Pokayoke: [
                { name: "OD Check - Over", code: "A15AO1" },
                { name: "OD Check - Running", code: "A15AO2" },
                { name: "OD Check - OK", code: "A15AO3" },
                { name: "OD Check - Under", code: "A15AO4" },
                { name: "Bore Check - Over", code: "A15AI1" },
                { name: "Bore Check - OK", code: "A15AI2" },
                { name: "Bore Check - Under", code: "A15AI3" },
                { name: "Bore Check - Running", code: "A15AI4" },
                { name: "Pairing OR - Running", code: "A15PR1" },
                { name: "Pairing IR - Running", code: "A15PR2" },
                { name: "Rivet Tinggi", code: "A15RV1" },
                { name: "Rivet OK", code: "A15RV2" },
                { name: "Rivet - Missing Upper cage", code: "A15RV3" },
                { name: "Ausensitive - Smooth", code: "A15AS1" },
                { name: "Ausensitive - Unsmooth", code: "A15AS2" },
                { name: "Vibration Check - NG 1", code: "A15MV1" },
                { name: "Vibration Check - NG 2", code: "A15MV2" },
                { name: "Vibration Check - NG 3", code: "A15MV3" },
                { name: "Clearance Check - C2", code: "A15C21" },
                { name: "Clearance Check - Cn", code: "A15Cn1" },
                { name: "Clearance Check - C3", code: "A15C31" },
                { name: "Clearance Check - C4", code: "A15C41" },
                { name: "Clearance Check - C5", code: "A15C51" },
                { name: "Seal Height - Protrude Seal", code: "A15AG1" },
                { name: "Seal Height - OK Seal", code: "A15AG2" },
                { name: "Seal Height - Missing Seal", code: "A15AG3" },
                { name: "Pokayoke Cam - Missing Cage", code: "A15PO1" },
                { name: "Pokayoke Cam - Missing Ball", code: "A15PO2" },
                { name: "Pokayoke Cam - Missing Rivet", code: "A15PO3" },
                { name: "SHSE - Open Seal", code: "A15SH1" },
                { name: "SHSE - 1RS/1Z", code: "A15SH2" },
                { name: "SHSE - 2RS/2Z", code: "A15SH3" },
                { name: "Augrease Mandril - OK", code: "A15Mn2" },
                { name: "Augrease Mandril - NG", code: "A15Mn3" },
                ]
        }
    },

    16: {
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
                { name: "Pairing OR", code: "A12PR1" },
                { name: "Pairing IR", code: "A12PR2" },
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
                { name: "Seal Height - Protrude Seal", code: "A12AG1" },
                { name: "Seal Height - OK Seal", code: "A12AG2" },
                { name: "Seal Height - Missing Seal", code: "A12AG3" },
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

}); // END DARI DOMContentLoaded

 

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
