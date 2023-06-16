$('.input-field input, .input-field select').on('change', function() {
    const sex = document.getElementById('sex').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const brac = parseFloat(document.getElementById('brac').value);

    if (sex && age && height && weight && brac) {
        const eliminationRate = 0.2; 
        const drinkingDuration = (brac == 0.05) ? 10 : 15;
        const expectedPeak = (brac == 0.05) ? 30 : 45;

        let estimatedTotalBodyWater;
        if (sex == 'male') {
            estimatedTotalBodyWater = 2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight;
        } else {
            estimatedTotalBodyWater = -2.097 + 0.1069 * height + 0.2466 * weight;
        }

        const variable2E = (brac == 0.05) ? 0.55 : 0.88;

        const alcohol100DoseGram = (variable2E * estimatedTotalBodyWater / 0.8) + (eliminationRate * (drinkingDuration / 60 + expectedPeak / 60) * (estimatedTotalBodyWater / 0.8));
        const alcohol100DoseGramPerKg = alcohol100DoseGram / weight;
    
        const alcohol40DoseGram = alcohol100DoseGram / 0.345;
        const alcohol40DoseGramPerKg = alcohol40DoseGram / weight;
    
        const mixerDose = alcohol40DoseGram * 3;

        const doseLabel = (brac == 0) ? 'Non-alcoholic vodka' : 'Vodka';

        
        document.getElementById('result').innerHTML = `
            <p>${doseLabel}: <strong>${alcohol40DoseGram.toFixed(2)} g</strong></p>
            <p>Orange juice: <strong>${mixerDose.toFixed(2)} g</strong></p>`;
    }

});
