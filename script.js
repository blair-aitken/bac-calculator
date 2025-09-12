
// Global state
let currentCalculation = null;

function displayResults(alcoholDose, mixerDose) {
    // Update values
    const alcoholEl = document.getElementById("alcohol-dose-header");
    const mixerEl = document.getElementById("mixer-dose-header");
    
    alcoholEl.textContent = alcoholDose.toFixed(2);
    mixerEl.textContent = mixerDose.toFixed(2);
    
    // Store current calculation
    currentCalculation = {
        alcoholDose: alcoholDose,
        mixerDose: mixerDose,
        inputs: getCurrentInputs(),
        timestamp: new Date()
    };
}

function displayInstructions() {
    // Reset values to placeholders
    document.getElementById("alcohol-dose-header").textContent = "-";
    document.getElementById("mixer-dose-header").textContent = "-";
}



// Helper functions
function getCurrentInputs() {
    return {
        sex: document.getElementById('sex').value,
        age: document.getElementById('age').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        brac: document.getElementById('brac').value
    };
}




// Function to calculate alcohol and mixer dose
document.addEventListener('DOMContentLoaded', function() {
    // Set up input listeners
    document.querySelectorAll('.form-input').forEach(function (el) {
        el.addEventListener('input', function () {
            calculateDose();
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
            calculateDose();
        }
    });
});

function calculateDose() {
    const sex = document.getElementById('sex').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value); // cm
    const weight = parseFloat(document.getElementById('weight').value); // kg
    const brac = parseFloat(document.getElementById('brac').value);     // e.g. 0.05, 0.08

    if (sex && age && height && weight && brac) {
        // ----------------------------
        // Constants
        // ----------------------------
        const ethanolDensity = 0.789;   // g/mL
        const vodkaABV = 0.40;          // 40% vodka
        const beta = 0.30;              // g/L/h elimination (20 mg/100mL/h)
        
        // Target BAC in g/L
        const targetConc = brac * 10;   // 0.05 → 0.5 g/L, 0.08 → 0.8 g/L

        // Drinking duration & expected peak times (minutes)
        let drinkingDuration;
        let expectedPeak;
        if (brac === 0.10) {
            drinkingDuration = 30;
            expectedPeak = 55;
        } else if (brac === 0.08) {
            drinkingDuration = 15;
            expectedPeak = 45;
        } else if (brac === 0.06) {
            drinkingDuration = 10;
            expectedPeak = 40;
        } else {
            drinkingDuration = 10;
            expectedPeak = 30;
        }

        // ----------------------------
        // Watson TBW
        // ----------------------------
        let TBW;
        if (sex === 'male') {
            TBW = 2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight;
        } else {
            TBW = -2.097 + 0.1069 * height + 0.2466 * weight;
        }

        // Ethanol distribution volume (L)
        const Vd = 0.8 * TBW;

        // Effective time for elimination (h) 
        // midpoint of drinking + time after last sip
        const t = (drinkingDuration / 2 + expectedPeak) / 60;

        // ----------------------------
        // Dose calculation
        // ----------------------------
        const A_g = (targetConc + beta * t) * Vd; // grams of ethanol

        // Convert to mL of 40% vodka
        const vodka_mL = A_g / (ethanolDensity * vodkaABV);

        // Mixer: assume 3 parts mixer per 1 part vodka
        const mixer_mL = vodka_mL * 3;

        displayResults(vodka_mL, mixer_mL);
    } else {
        displayInstructions();
    }
}

function selectOption(field, value, button) {
    document.getElementById(field).value = value;

    // Update the active state of buttons within the same group
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    calculateDose();
}

