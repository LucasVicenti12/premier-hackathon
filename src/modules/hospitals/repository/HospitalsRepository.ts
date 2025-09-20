import mock from "./mock.json"
import {HospitalListResponse} from "../entities/entities.ts";

class HospitalsRepository {
    async getHospitals(page: number): Promise<HospitalListResponse> {
        console.log(page)

        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as HospitalListResponse)
            }, 2000)
        })
    }
}

export const hospitalsRepository = new HospitalsRepository()