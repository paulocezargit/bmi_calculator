function calculateBMI(weightKg, heightMeters) {

	if (weightKg <= 0 || heightMeters <= 0) {

		//return "Invalid input. Weight and height must be greater than zero.";

	}

	const bmi = weightKg / (heightMeters * heightMeters);
	let category = "";

	if (bmi < 18.5) {

		category = "Underweight";

	} else if (bmi < 24.9) {

		category = "Normal weight";

	} else if (bmi < 29.9) {

		category = "Overweight";

	} else {

		category = "Obesity";

	}

	return `Your BMI is ${bmi.toFixed(2)} (${category})`;

}
