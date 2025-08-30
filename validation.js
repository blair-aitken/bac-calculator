// Input validation
function validateInput(input, min, max) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < min || value > max) {
        input.classList.add('invalid');
        return false;
    }
    input.classList.remove('invalid');
    return true;
}

// Add event listeners for input validation
document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');

    if (ageInput) {
        ageInput.addEventListener('input', function() {
            validateInput(this, 18, 120);
        });
    }

    if (heightInput) {
        heightInput.addEventListener('input', function() {
            validateInput(this, 100, 250);
        });
    }

    if (weightInput) {
        weightInput.addEventListener('input', function() {
            validateInput(this, 30, 300);
        });
    }
});
