import {HospitalListResponse, HospitalResponse} from "../entities/entities.ts";
import {hospitalsRepository} from "../repository/HospitalsRepository.ts";

class HospitalsUseCase {
    async getHospitals(page: number): Promise<HospitalListResponse> {
        return hospitalsRepository.getHospitals(page)
    }

    async getHospitalByCode(code: string): Promise<HospitalResponse> {
        return hospitalsRepository.getHospitalByCode(code)
    }
}

export const hospitalsUseCase = new HospitalsUseCase();