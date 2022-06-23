
const calculateBmi = (height: number, weight: number): string => {
    let result;
    const bmi = weight / Math.pow((height * 0.01), 2);

    if(bmi < 16) {
        result = "Underweight (Severe thinness)";
    } else if(bmi <= 16.9 ) {
        result = "Underweight (Moderate thinness)";
    } else if(bmi <= 18.4 ) {
        result = "Underweight (Mild thinness)";
    } else if(bmi <= 24.9 ) {
        result = "Normal range";
    } else if(bmi <= 29.9 ) {
        result = "Overweight (Pre-obese)";
    } else if(bmi <= 34.9 ) {
        result = "Obese (Class I)";
    } else if(bmi <= 39.9 ) {
        result = "Obese (Class II)";
    } else {
        result = "Obese (Class III)"
    }

    return result;
}

console.log(calculateBmi(180, 74));
