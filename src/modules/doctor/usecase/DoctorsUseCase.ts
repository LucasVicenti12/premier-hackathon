import { DoctorListResponse } from "../entities/entities";
import { doctorsRepository } from "../repository/DoctorsRepository";

class DoctorsUseCase {
    async getDoctors(page: number): Promise<DoctorListResponse> {
        return doctorsRepository.getDoctors(page)
    }
}

export const doctorsUseCase = new DoctorsUseCase();