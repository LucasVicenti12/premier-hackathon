export interface City {
    code: string
    name: string
    quantityPatient: number
    quantityDoctors: number
    quantityHospitals: number
}

export interface CityListResponse {
    items?: City[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}