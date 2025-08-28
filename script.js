
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
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const brac = parseFloat(document.getElementById('brac').value);

    if (sex && age && height && weight && brac) {
        const eliminationRate = 0.3; // Alcohol elimination rate

        let drinkingDuration;
        if (brac === 0.10) {
            drinkingDuration = 30;
        } else if (brac === 0.08) {
            drinkingDuration = 15;
        } else {
            drinkingDuration = 10;
        }

        let expectedPeak;
        if (brac === 0.10) {
            expectedPeak = 55;
        } else if (brac === 0.08) {
            expectedPeak = 45;
        } else if (brac === 0.06) {
            expectedPeak = 40;
        } else {
            expectedPeak = 35;
        }

        let estimatedTotalBodyWater;
        if (sex === 'male') {
            estimatedTotalBodyWater = 2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight;
        } else {
            estimatedTotalBodyWater = -2.097 - 0.1069 * age + 0.2466 * height + 0.3362 * weight;
        }

        let variable2E;
        if (brac === 0.08) {
            variable2E = 0.88;
        } else if (brac === 0.10) {
            variable2E = 1.10;
        } else if (brac === 0.06) {
            variable2E = 0.66;
        } else if (brac === 0.05) {
            variable2E = 0.55;
        }

        const alcohol100DoseGram = (variable2E * estimatedTotalBodyWater / 0.8) + (eliminationRate * (drinkingDuration / 60 + expectedPeak / 60) * (estimatedTotalBodyWater / 0.8));

        const alcohol40DoseGram = alcohol100DoseGram / 0.345;

        const alcohol40DoseGramg = alcohol40DoseGram / weight;

        const mixerDose = alcohol40DoseGram * 3;

        displayResults(alcohol40DoseGram, mixerDose);
    }
    else {
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
