import {CityListResponse} from "../entities/entities.ts";
import {http} from "../../../config/api/Http.ts";

class CityRepository {
    async getPaginatedCities(page: number): Promise<CityListResponse> {
        try {
            const response = await http.get(`/cities?page=${page}`)

            return response.data as CityListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const cityRepository = new CityRepository()
