import {StateMetricListResponse} from "../entities/StateMetricEntities.ts";
import { stateMetricsRepository } from "../repository/StateMetricRepository.ts";

class StateMetricUseCase {
    async getStateMetric(page: number): Promise<StateMetricListResponse> {
        return stateMetricsRepository.getStateMetrics(page)
    }
}

export const stateMetricUseCase = new StateMetricUseCase();