import mock from "./mock.json";
import { Doctor, DoctorListResponse, DoctorResponse } from "../entities/entities";
import {http} from "../../../config/api/Http.ts";

class DoctorsRepository {
    async getDoctors(page: number): Promise<DoctorListResponse> {
        try {
            const response = await http.get(`/doctors?page=${page}`)

            return response.data as DoctorListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }

    async getDoctorByCode(code: string): Promise<DoctorResponse> {
        const d = mock.items.find(x => x.code == code)
        const t = (d as unknown) as Doctor

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ doctor: t })
            }, 2000)
        })
    }
}


export const doctorsRepository = new DoctorsRepository();