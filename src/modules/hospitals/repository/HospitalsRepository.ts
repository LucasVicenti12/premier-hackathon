import mock from "./mock.json"
import {Hospital, HospitalListResponse, HospitalResponse} from "../entities/entities.ts";

class HospitalsRepository {
    async getHospitals(page: number): Promise<HospitalListResponse> {
        console.log(page)
        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as HospitalListResponse)
            }, 1000)
        })
    }

    async getHospitalByCode(code: string): Promise<HospitalResponse> {
        const h = mock.items.find(x => x.code === code)
        const t = (h as unknown) as Hospital

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({hospital: t})
            }, 1000)
        })
    }
}

export const hospitalsRepository = new HospitalsRepository()