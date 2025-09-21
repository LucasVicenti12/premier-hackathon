import {HospitalMetricListResponse, HospitalMetricResponse} from "../entities/HospitalMetricEntities.ts";
import { hospitalMetricsRepository } from "../repository/HospitalMetricRepository.ts";

class HospitalMetricUseCase {
    async getHospitalMetric(page: number): Promise<HospitalMetricListResponse> {
        return hospitalMetricsRepository.getHospitalMetrics(page)
    }

    async getHospitalMetricByCode(code: string): Promise<HospitalMetricResponse> {
        return hospitalMetricsRepository.getHospitalMetricByCode(code)
    }
}

export const hospitalMetricUseCase = new HospitalMetricUseCase();