import {
    Patient,
    PatientListResponse, PatientResponse
} from "../entities/entities.ts";
import mock from "./mock.json";

class PatientRepository{
    async getPaginatedPatient(page: number): Promise<PatientListResponse> {
        console.log(page)
        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as PatientListResponse)
            }, 2000)
        })
    }

    async getPatientByCode(code: string): Promise<PatientResponse> {
        const h = mock.items.find(x => x.code === code)
        const t = (h as unknown) as Patient

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({patient: t})
            }, 2000)
        })
    }
}

export const patientRepository = new PatientRepository();
