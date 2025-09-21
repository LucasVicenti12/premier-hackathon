import {City} from "../../../utils/entities/entities.ts"

export interface CityTotals extends City {
    code: string
    name: string
    quantityPatient: number
    quantityDoctors: number
    quantityHospitals: number
}

export interface CityListResponse {
    items?: CityTotals[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}