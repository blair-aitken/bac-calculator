# BAC Calculator

## Overview

The BAC calculator serves as a tool for determining alcohol dosing based on an adjusted Watson method. It's designed to assist in estimating the amount of alcohol required to reach a target BAC.

## Table of Contents

- [Overview](#overview)
- [How it Works](#how-it-works)
- [Setup](#setup)
  - [Web-based version](#web-based-version)
  - [Local version](#local-version)
- [How to use](#how-to-use)
- [Citing this work](#citing-this-work)
- [Disclaimer](#disclaimer)
- [Contact information](#contact-information)
- [References](#references)


## How it Works

The calculator employs an adapted Widmark formula (Widmark, 1932) that employs the Watson method (Watson et al., 1981) to calculate total body water (TBW):

**For Men**: `TBW (L) = 2.447 - (0.09516 × age) + (0.1074 × height) + (0.3362 × weight)`

**For Women**: `TBW (L) = -2.097 + (0.1069 × height) + (0.2466 × weight)`

The calculator also takes into account (a) drinking duration (10 minutes for 0.05% BAC, and 15 minutes for 0.08% BAC), (b) the expected time to reach peak BAC (30 minutes for 0.05% BAC, and 45 minutes for 0.08% BAC), (c) the rate at which alcohol is metabolized or eliminated from the body, typically at 20 mg/100ml/h, (d) a 0.8 conversion factor to translate the volume of alcohol to weight, and (e) the alcohol by volume of Vodka (40%). Using these assumptions, the alcohol dose to attain the target BAC is as follows:

`((TBW / .08) × (target BAC + 0.2 × ((drinking duration + expected peak) / 60)) / weight`

These parameters can be modified in the `script.js` JavaScript file.

## Setup

### Web-based version

For the web and mobile version, go to: https://blair-aitken.github.io/BAC_Calculator

### Local version 

For a local version, use `git clone` or download the project from this page. 

## How to use

After setting up, simply input your details into the calculator fields and it will estimate the amount of alcohol required to reach your desired BAC.

Reccomended dose of alcohol (and mixer) for a 'male', who is `21` years old, `180` cm tall and weighs `70` kg to reach a BAC of `0.05`.

<br><img src="https://github.com/blair-aitken/BAC_Calculator/assets/131508862/857fb674-e15e-47b6-8bea-e13b99cb4bc7" width="300" alt="Sample BAC calculation"><br><br>

## Citing this work

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

## Disclaimer

This calculator is intended for informational purposes only. Please remember that the actual BAC achieved can vary with individual metabolic rates, health status, and other factors. This calculator should not be used to determine whether it is safe to drive or perform other tasks. Always drink responsibly and never drink and drive.

## Contact information
For questions or additional information about this repository, please contact baitken@swin.edu.au.

## References

Watson, P. E., Watson, I. D. & Batt, R. D. (1981). Prediction of blood alcohol concentrations in human subjects. Updating the Widmark Equation. _Journal of Studies on Alcohol and Drugs, 42_(7), 547-556.

Widmark, E. M. P. (1932) _Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung._ Urban & Schwarzenberg.
