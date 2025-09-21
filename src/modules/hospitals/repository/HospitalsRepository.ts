import {HospitalListResponse, HospitalResponse} from "../entities/entities.ts";
import {http} from "../../../config/api/Http.ts";

class HospitalsRepository {
    async getHospitals(page: number): Promise<HospitalListResponse> {
        try {
            const response = await http.get(`/hospitals?page=${page}`)

            return response.data as HospitalListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }

    async getHospitalByCode(code: string): Promise<HospitalResponse> {
        try {
            const response = await http.get(`/hospitals/${code}`)

            return response.data as HospitalResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const hospitalsRepository = new HospitalsRepository()