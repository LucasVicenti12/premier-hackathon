import {cityRepository} from "../repository/CityRepository.ts"
import {CityListResponse} from "../entities/entities.ts";

class CityUseCase {
    async getPaginatedCities(page: number): Promise<CityListResponse> {
        return cityRepository.getPaginatedCities(page)
    }
}

export const cityUseCase = new CityUseCase()