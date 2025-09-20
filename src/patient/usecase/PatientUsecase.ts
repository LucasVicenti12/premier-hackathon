import { PatientListResponse } from "../entities/entities"
import { patientRepository } from "../repository/PatientRepository"

class PatientUseCase {
    async getPaginatedFiles(page: number): Promise<PatientListResponse> {
            return patientRepository.getPaginatedPatient(page)
        }
}

export const patientUseCase = new PatientUseCase()