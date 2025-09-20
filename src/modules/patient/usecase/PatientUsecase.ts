import {PatientListResponse, PatientResponse} from "../entities/entities.ts"
import {patientRepository} from "../repository/PatientRepository.ts"

class PatientUseCase {
    async getPaginatedFiles(page: number): Promise<PatientListResponse> {
        return patientRepository.getPaginatedPatient(page)
    }

    async getPatientByCode(code: string): Promise<PatientResponse> {
        return patientRepository.getPatientByCode(code)
    }
}

export const patientUseCase = new PatientUseCase()