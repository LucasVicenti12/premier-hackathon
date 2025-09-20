import {HospitalListResponse} from "../entities/entities.ts";
import {hospitalsRepository} from "../repository/HospitalsRepository.ts";

class HospitalsUseCase {
    async getHospitals(page: number): Promise<HospitalListResponse> {
        return hospitalsRepository.getHospitals(page)
    }
}

export const hospitalsUseCase = new HospitalsUseCase();