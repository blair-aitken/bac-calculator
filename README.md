## BAC Calculator

### Overview

The BAC calculator serves as a tool for determining alcohol dosing based on an adjusted Watson method. The calculator is pre-configured for Vodka as the treatment and includes the most common target BACs reported in the literature. However, you are welcome to modify the JavaScript to change these settings as needed.

---

### How it Works

This calculator estimates the alcohol dose needed to reach a target blood alcohol concentration (BAC) using an adapted version of Widmark’s equation (Widmark, 1932) combined with the Watson method for estimating total body water (TBW) (Watson et al., 1981).

#### Step 1: Estimate total body water (TBW)

The Watson equations use sex, age, height, and weight to estimate TBW in liters:

- **Men**  

  $$
  \text{TBW}_{men} = 2.447 - (0.09516 \times \text{age}) + (0.1074 \times \text{height}) + (0.3362 \times \text{weight})
  $$

- **Women**  

  $$
  \text{TBW}_{women} = -2.097 + (0.1069 \times \text{height}) + (0.2466 \times \text{weight})
  $$

(Height in cm, weight in kg, age in years.)

#### Step 2: Calculate distribution volume

Ethanol distributes into body water. The distribution volume is:

$$
V_d = 0.8 \times \text{TBW}
$$

#### Step 3: Adjust for drinking pattern and metabolism

- **Drinking duration:** 10 minutes for 0.05% BAC, 15 minutes for 0.08% BAC  
- **Time to peak BAC:** 30 minutes for 0.05%, 45 minutes for 0.08%  
- **Elimination rate:** $\beta = 0.20 \,\text{g/L/h}$ (≈ 20 mg/100 mL/h)  

The effective time available for metabolism is approximated as the midpoint of drinking plus the delay to peak BAC.

#### Step 4: Calculate ethanol dose

The ethanol dose in grams is:

$$
\text{Dose (g)} = \big(C_{\text{target}} + \beta \cdot t\big) \times V_d
$$

Where:  
- $C_{\text{target}}$ = target BAC (e.g., 0.05% = 0.5 g/L)  
- $\beta$ = elimination rate (0.20 g/L/h)  
- $t$ = effective time in hours  
- $V_d$ = distribution volume (0.8 × TBW)  

#### Step 5: Convert to drinks

The ethanol dose is converted to a beverage volume using:  

- Ethanol density = 0.789 g/mL  
- Vodka at 40% alcohol by volume (ABV)  
- Mixer = 3 parts per 1 part vodka (optional display)

$$
\text{Vodka (mL)} = \frac{\text{Dose (g)}}{0.789 \times 0.40}
$$

---

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
@misc{Aitken2023,
  author = {Blair Aitken},
  title = {BAC Calculator},
  year = {2023},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://blair-aitken.github.io/BAC_Calculator}}
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
