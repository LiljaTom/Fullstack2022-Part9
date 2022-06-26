import express from 'express';
const app = express();

import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query;

    if(!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
        res.status(400).send({ error: "malformatted parameters"});
    } else {
        const result = calculateBmi(Number(height), Number(weight));
        res.json({
            weight: Number(weight),
            height: Number(height),
            bmi: result
        });
    }
});

app.get('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {daily_exercises, target} = req.body;

    // eslint-disable-next-line
    if(isNaN(Number(target)) || daily_exercises.some(d => isNaN(Number(d)))) {
        res.send({ error: 'malformatted parameters'}).status(400);
    }

    if(!daily_exercises || !target) {
        res.send({error: 'parameters missing'}).status(400);
    } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const result = calculateExercises(daily_exercises, target);
        res.send({ result });
    }
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});