
interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {
    const periodLength = hours.length;
    const trainingDays = hours.filter(h => h !== 0).length;
    const total = hours.reduce((acc, cur) => acc + cur, 0);
    const average = total / periodLength;
    const success = average > target;
    let rating = 2;
    let ratingDescription = "Not too bad";

    if(average - 1 > target) {
        rating = 3;
        ratingDescription = "Very good";
    } else if(average + 1 < target) {
        rating = 1;
        ratingDescription = "Not good";
    }

    return(
        {
            periodLength,
            trainingDays,
            success,
            rating,
            ratingDescription,
            target,
            average
        }
    );
};


const parseExerciseArguments = (args: string[]) => {
    const argsLength = args.length;
    if (argsLength < 4) throw new Error('Not enough arguments');
    if(isNaN(Number(args[argsLength - 1]))){
        throw new Error('Provided values were not numbers!');
    }

    const hours: number[] = [];
    const target = Number(args[argsLength - 1]);

    for(let i = 2; i < argsLength - 1; i++) {
        if(isNaN(Number(args[i]))) {
            throw new Error('Provided values were not numbers!');
        }
        hours.push(Number(args[i]));
    }
    return {
        hours,
        target
    };
};

try {
    const { hours, target} = parseExerciseArguments(process.argv);
    console.log(calculateExercises(hours, target));

} catch(error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}
