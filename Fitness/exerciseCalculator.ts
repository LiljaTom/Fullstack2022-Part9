
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
        ratingDescription = "Very good"
    } else if(average + 1 < target) {
        rating = 1;
        ratingDescription = "Not good"
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
    )
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));