export interface HospitalMetric{
    code: string
    name: string
    quantitydoctors: number
    quantitypatient: number
    latitude: number
    longitude: number
}

export interface HospitalMetricListResponse{
    items?: HospitalMetric[]
    totalCount?: number
    error?: string
}

export interface HospitalMetricResponse {
    hospitalMetric?: HospitalMetric,
    error?: string
}