import { v4 as uuidv4 } from 'uuid';

import patientData from '../../data/patients';
import { NonSensitivePatient, NewPatient, Patient } from '../types';

const patients: Patient[] = patientData;

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = ( entry: NewPatient ): Patient => {
    const id: string = uuidv4();
    const newPatient = {
        id,
        ...entry
    };

    patients.push(newPatient);

    return newPatient;
};

export default {
    addPatient,
    getNonSensitivePatients
};