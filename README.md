# BAC Calculator

## Overview

The BAC calculator serves as a tool for determining alcohol dosing based on an adjusted Widmark formula. It's designed to assist in estimating the amount of alcohol required to reach a target BAC.

## Table of Contents

- [Overview](#overview)
- [How it Works](#how-it-works)
- [Setup](#setup)
  - [Web-based version](web-based-version)
  - [Local version](local-version)
- [How to use](#how-to-use)
- [Disclaimer](#disclaimer)
- [Contact information](contact-information)

## How it Works

The calculator is based on the Widmark formula, using calculations for estimated total body water (TBW) in men and women. The formulas used are as follows:

**For Men**: `TBW (L)=2.447-(0.09516 × age)+(0.1074 × height)+(0.3362 × weight)`

**For Women**: `TBW (L)=- 2.097+(0.1069 × height)+(0.2466 × weight)`

The tool assumes an alcohol by volume (ABC) of 40%, an elimination rate of 0.2, a blood to breath ratio of 1:2300, a drinking duration of 10 minutes for .05% BAC and 15 minutes for .08% BAC, and an expected peak of 30 minutes for .05% BAC and 45 minutes for .08% BAC. These parameters can be modified in the `script.js` JavaScript file.

## Setup

### Web-based version

Go to https://blair-aitken.github.io/BAC_Calculator/

### Local version 

1. Clone the repository: `git clone https://github.com/YOUR_GITHUB_USERNAME/BAC-Calculator.git`
2. Navigate to the repository's directory: `cd BAC-Calculator`
3. Open the `index.html` file in your browser to use the calculator.

## How to use

After setting up, simply input your details into the calculator fields and it will estimate the amount of alcohol required to reach your desired BAC.

Reccomended dose of alcohol (and mixer) for a '21' year old 'male' who is '180' cm tall and weighs '70' kg to reach a BAC of '0.05'.

<img width="300" alt="Screenshot 2023-05-26 at 7 23 57 pm" src="https://github.com/blair-aitken/BAC_Calculator/assets/131508862/9dc9f0e5-38ed-4a8b-88fc-3bf6b2fc9479">

## Disclaimer

This calculator is intended for informational purposes only. Please remember that the actual BAC achieved can vary with individual metabolic rates, health status, and other factors. This calculator should not be used to determine whether it is safe to drive or perform other tasks. Always drink responsibly and never drink and drive.

## Contact information
For questions or additional information about this repository, please contact baitken@swin.edu.au.
