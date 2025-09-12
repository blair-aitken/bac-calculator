## BAC Calculator

### Overview

The BAC calculator serves as a tool for determining alcohol dosing based on an adjusted Watson method. The calculator is pre-configured for Vodka as the treatment and includes the most common target BACs reported in the literature. However, you are welcome to modify the JavaScript to change these settings as needed.

---

### How it Works

This calculator estimates the alcohol dose needed to reach a target blood alcohol concentration (BAC) using an adapted Widmark equation (Widmark, 1932) combined with the Watson method for estimating total body water (TBW) (Watson et al., 1981).

#### Step 1: Estimate total body water (TBW)

The Watson equations use sex, age, height (cm), and weight (kg):

- **Men:** `TBW = 2.447 − (0.09516 × age) + (0.1074 × height) + (0.3362 × weight)`
- **Women:** `TBW = −2.097 + (0.1069 × height) + (0.2466 × weight)`

#### Step 2: Distribution volume

Ethanol distributes into body water. The distribution volume is: `Vd = 0.8 × TBW`

#### Step 3: Drinking pattern and metabolism

- Drinking duration: `10 min for 0.05% BAC, 15 min for 0.08% BAC`
- Time to peak BAC: `30 min for 0.05%, 45 min for 0.08%` 
- Elimination rate: β = `0.20 g/L/h (≈20 mg/100 mL/h)`  

Effective time for metabolism is taken as the midpoint of drinking plus the delay to peak BAC.

#### Step 4: Ethanol dose

The ethanol dose (grams) is: `Dose = (Target BAC + β × time) × Vd`  

Where Target BAC is expressed in g/L (e.g., 0.05% = 0.5 g/L).

#### Step 5: Convert to drinks

The ethanol dose is converted into a beverage volume assuming:  
- Ethanol density = `0.789 g/mL`  
- Vodka = `40% alcohol by volume (ABV)`  
- Mixer = `3 parts per 1 part vodka (optional)`  

`Vodka (mL) = Dose / (0.789 × 0.40)`

All parameters (elimination rate, drinking duration, correction factor, etc.) can be modified in the `script.js` file.

---

### Setup

#### Web-based version

For the web version, go to: https://blair-aitken.github.io/bac-calculator

#### Local version 

For a local version, use `git clone` or download the project from this page. 

---

### Citing this work

If you use this calculator in your research, please cite this repository. Here is an example citation:

```
@misc{Aitken2025,
  author = {Blair Aitken},
  title = {BAC Calculator},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://blair-aitken.github.io/bac-calculator}}
}
```
---

### Disclaimer

This calculator is intended for informational purposes only. Please remember that the actual BAC achieved can vary with individual metabolic rates, health status, and other factors. This calculator should not be used to determine whether it is safe to drive or perform other tasks.

---

### Contact information
For questions or additional information about this repository, please contact the author at baitken@swin.edu.au.

---

### References

Watson, P. E., Watson, I. D. & Batt, R. D. (1981). Prediction of blood alcohol concentrations in human subjects. Updating the Widmark Equation. _Journal of Studies on Alcohol and Drugs, 42_(7), 547-556.

Widmark, E. M. P. (1932) _Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung._ Urban & Schwarzenberg.
