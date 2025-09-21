import {StateMetricListResponse} from "../entities/StateMetricEntities.ts";
import {http} from "../../../config/api/Http.ts";

class StateMetricsRepository {
    async getStateMetrics(page: number): Promise<StateMetricListResponse> {
        try {
            const response = await http.get(`/state/metric?page=${page}`)

            return response.data as StateMetricListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const stateMetricsRepository = new StateMetricsRepository()