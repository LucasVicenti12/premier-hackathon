import mock from "./mock.json";
import {CityListResponse} from "../entities/entities.ts";

class CityRepository {
    async getPaginatedCities(page: number): Promise<CityListResponse> {
        console.log(page)
        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as CityListResponse)
            }, 1000)
        })
    }
}

export const cityRepository = new CityRepository()
