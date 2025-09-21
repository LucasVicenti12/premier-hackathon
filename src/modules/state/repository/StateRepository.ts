import {StateListResponse} from "../entities/entities.ts";
import {http} from "../../../config/api/Http.ts";

class StateRepository {
    async getPaginatedState(page: number): Promise<StateListResponse> {
        try {
            const response = await http.get(`/states?page=${page}`)

            return response.data as StateListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const stateRepository = new StateRepository()
