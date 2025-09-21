import { DoctorListResponse, DoctorResponse } from "../entities/entities";
import { doctorsRepository } from "../repository/DoctorsRepository";

class DoctorsUseCase {
    async getDoctors(page: number): Promise<DoctorListResponse> {
        return doctorsRepository.getDoctors(page)
    }

    async getDoctorByCode(code: string): Promise<DoctorResponse> {
        return doctorsRepository.getDoctorByCode(code)
    }
}

export const doctorsUseCase = new DoctorsUseCase();