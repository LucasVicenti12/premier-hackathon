import {
    PatientListResponse
} from "../entities/entities.ts";
import {http} from "../../../config/api/Http.ts";

class PatientRepository{
    async getPaginatedPatient(page: number): Promise<PatientListResponse> {
        try{
            const response = await http.get(`patient?page=${page}&count=10`)

            return response.data as PatientListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const patientRepository = new PatientRepository();
