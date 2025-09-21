import {State} from "../../../utils/entities/entities.ts"

export interface StateTotals extends State {
    quantityPatient: number
    quantityDoctors: number
    quantityHospitals: number
}

export interface StateListResponse {
    items?: StateTotals[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}