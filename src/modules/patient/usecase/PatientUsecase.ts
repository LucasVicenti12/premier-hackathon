import { PatientListResponse } from "../entities/entities.ts"
import { patientRepository } from "../repository/PatientRepository.ts"

class PatientUseCase {
    async getPaginatedFiles(page: number): Promise<PatientListResponse> {
            return patientRepository.getPaginatedPatient(page)
        }
}

export const patientUseCase = new PatientUseCase()