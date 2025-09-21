import {HospitalMetricListResponse, HospitalMetricResponse} from "../entities/HospitalMetricEntities.ts";
import {http} from "../../../config/api/Http.ts";

class HospitalMetricsRepository {
    async getHospitalMetrics(page: number): Promise<HospitalMetricListResponse> {
        try {
            const response = await http.get(`/hospitals/metric?page=${page}`)

            return response.data as HospitalMetricListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }

    async getHospitalMetricByCode(code: string): Promise<HospitalMetricResponse> {
        try {
            const response = await http.get(`/hospitalMetrics/${code}`)

            return response.data as HospitalMetricResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const hospitalMetricsRepository = new HospitalMetricsRepository()