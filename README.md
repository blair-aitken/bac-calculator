# BAC Calculator

Welcome to the BAC Calculator GitHub repository. This repository is dedicated to a Blood Alcohol Content (BAC) calculator based on the Widmark formula. It's designed to assist users in estimating the amount of alcohol required to reach a target BAC.

## Table of Contents

- [Overview](#overview)
- [How it Works](#how-it-works)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Disclaimer](#disclaimer)

## Overview

The BAC calculator hosted on this GitHub pages serves as a tool for determining alcohol dosing to reach a desired BAC. The calculations are based on estimated total body water (TBW) for both men and women. 

## How it Works

The calculator is based on the Widmark formula, using calculations for estimated TBW in men and women. The formulas used are as follows:

**For Men**: `TBW (L)=2.447-(0.09516 × age)+(0.1074 × height)+(0.3362 × weight)`

**For Women**: `TBW (L)=- 2.097+(0.1069 × height)+(0.2466 × weight)`

The tool assumes an elimination rate of 0.2, a blood to breath ratio of 1:2300, a drinking duration of 10 minutes for .05% BAC and 15 minutes for .08% BAC, and an expected peak of 30 minutes for .05% BAC and 45 minutes for .08% BAC. These parameters can be modified in the `script.js` JavaScript file.

## Setup

1. Clone the repository: `git clone https://github.com/YOUR_GITHUB_USERNAME/BAC-Calculator.git`
2. Navigate to the repository's directory: `cd BAC-Calculator`
3. Open the `index.html` file in your browser to use the calculator.

## Usage

After setting up, simply input your details into the calculator fields and it will estimate the amount of alcohol required to reach your desired BAC.

## Contributing

We welcome contributions to improve this calculator. If you would like to contribute, please follow the typical Git workflow:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Disclaimer

This calculator is intended for informational purposes only. Please remember that the actual BAC achieved can vary with individual metabolic rates, health status, and other factors. This calculator should not be used to determine whether it is safe to drive or perform other tasks. Always drink responsibly and never drink and drive.

## Contact Information

If you have any questions, please raise an issue on GitHub or contact the repository owner directly at: YOUR_EMAIL_ADDRESS.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
