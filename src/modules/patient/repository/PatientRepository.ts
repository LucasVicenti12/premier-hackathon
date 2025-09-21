import {
    Patient,
    PatientListResponse, PatientResponse
} from "../entities/entities.ts";
import mock from "./mock.json";
import {http} from "../../../config/api/Http.ts";

class PatientRepository{
    async getPaginatedPatient(page: number): Promise<PatientListResponse> {
        try {
            const response = await http.get(`/patients?page=${page}`)

            return response.data as PatientListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }

    async getPatientByCode(code: string): Promise<PatientResponse> {
        const h = mock.items.find(x => x.code === code)
        const t = (h as unknown) as Patient

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({patient: t})
            }, 1000)
        })
    }
}

export const patientRepository = new PatientRepository();
