export interface State {
    code: string
    name: string
    quantityPatient: number
    quantityDoctors: number
    quantityHospitals: number
}

export interface StateListResponse {
    items?: State[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}