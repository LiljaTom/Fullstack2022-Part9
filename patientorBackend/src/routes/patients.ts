/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../utils';
import { Fields } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitivePatients());
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(req.params.id);

    if(patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    try {
        const params: Fields = req.body;
        const newPatient = toNewPatient(params);

        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    } catch(error) {
        let message;
        if(error instanceof Error) {
            message = error.message;
        }
        res.status(400).send(message);
    }
});

export default router;