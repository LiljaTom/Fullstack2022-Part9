
interface BmiParameters {
    height: number;
    weight: number;
}

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

const parseBmiArguments = (args: string[]): BmiParameters => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
          height: Number(args[2]),
          weight: Number(args[3])
        }
      } else {
        throw new Error('Provided values were not numbers!');
      }
}

try {
    const { height, weight } = parseBmiArguments(process.argv);
    console.log(calculateBmi(height, weight));
} catch(error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

