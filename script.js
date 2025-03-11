function showContent(contentId) {
    // Hide all tabcontent elements
    let tabcontents = document.querySelectorAll(".tabcontent");
    tabcontents.forEach(function(content) {
        content.classList.remove("active");
    });

    // Remove active class from all buttons
    let buttons = document.querySelectorAll(".sidebar button");
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Show the selected tabcontent
    document.getElementById(contentId).classList.add("active");

    // Add active class to the clicked button
    let clickedButton = document.querySelector(`.sidebar button[data-content="${contentId}"]`);
    clickedButton.classList.add("active");
}

// Initialize the first tabcontent and button as active
document.addEventListener("DOMContentLoaded", function() {
    showContent('calculator');
});

// Function to calculate alcohol and mixer dose
document.querySelectorAll('.input-field input, .input-field select').forEach(function(el) {
    el.addEventListener('change', function() {
        calculateDose();
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
            estimatedTotalBodyWater = -2.097 + 0.1069 * height + 0.2466 * weight;
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

        document.getElementById('result').innerHTML = `
            <p1>Vodka:<br><strong>${alcohol40DoseGram.toFixed(2)} g</strong></p1>
            <p2>Orange Juice:<br><strong>${mixerDose.toFixed(2)} g</strong></p2>`;
    }
}

function selectOption(field, value, button) {
    document.getElementById(field).value = value;

    // Update the active state of buttons within the same group
    let buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    calculateDose();
}
