export interface StateMetric{
    code: string
    name: string
    quantitydoctors: number
    quantitypatient: number
    quantityhospital: number
    latitude: number
    longitude: number
}

export interface StateMetricListResponse{
    items?: StateMetric[]
    totalCount?: number
    error?: string
}

export interface StateMetricResponse {
    StateMetric?: StateMetric,
    error?: string
}