import mock from "./mock.json";
import { DoctorListResponse } from "../entities/entities";

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
}


export const doctorsRepository = new DoctorsRepository();