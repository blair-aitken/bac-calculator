function showContent(contentId) {
    // Hide all tabcontent elements
    this.hideElements(document.querySelectorAll(".tabcontent"))

    // Show the selected tabcontent
    this.showElement(contentId);

    // Remove active class from all buttons
    let buttons = document.querySelectorAll(".sidebar button");
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    // Add active class to the clicked button
    let clickedButton = document.querySelector(`.sidebar button[data-content="${contentId}"]`);
    clickedButton.classList.add("active");
}

function displayResults(alcoholDose, mixerDose) {
    this.showElement("calculator-results");
    this.hideElement("calculator-instructions");
    document.getElementById("calculator-results").classList.remove("hidden");
    document.getElementById("calculator-instructions").classList.add("hidden");
    document.getElementById("alcohol-dose").innerHTML = alcoholDose;
    document.getElementById("mixer-dose").innerHTML = mixerDose;
}

function displayInstructions() {
    this.hideElement("calculator-results");
    this.showElement("calculator-instructions");
}

// Hides all elements in a given NodeListOf<Element>
function hideElements(elementList) {
    elementList.forEach(function (content) {
        content.classList.add("hidden");
    });
}

// Shows all elements in a given NodeListOf<Element>
function showElements(elementList) {
    elementList.forEach(function (content) {
        content.classList.remove("hidden");
    });
}

// Hides an element by it's Id
function hideElement(elementId) {
    document.getElementById(elementId).classList.add("hidden");
}

// Shows an element by it's Id
function showElement(elementId) {
    document.getElementById(elementId).classList.remove("hidden");
}


// Initialize the first tabcontent and button as active
document.addEventListener("DOMContentLoaded", function () {
    showContent('calculator');
});


// Function to calculate alcohol and mixer dose
document.querySelectorAll('.input-field input, .input-field select').forEach(function (el) {
    el.addEventListener('change', function () {
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

        this.displayResults(alcohol40DoseGram.toFixed(2), mixerDose.toFixed(2));
    }
    else {
        this.displayInstructions();
    }
}

function selectOption(field, value, button) {
    document.getElementById(field).value = value;

    // Update the active state of buttons within the same group
    let buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    calculateDose();
}
