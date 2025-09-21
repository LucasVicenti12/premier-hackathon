import mock from "./mock.json";
import { Doctor, DoctorListResponse, DoctorResponse } from "../entities/entities";
class DoctorsRepository {
    async getDoctors(page: number): Promise<DoctorListResponse> {
        console.log(page)

        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as DoctorListResponse)
            }, 2000)
        })
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