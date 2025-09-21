import { City } from "../../../utils/entities/entities"

export interface Doctor {
    code: string,
    fullName: string,
    expertise: string,
    city: City,
}

export interface DoctorListResponse {
    items?: Doctor[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}

export interface DoctorResponse {
    doctor?: Doctor,
    error?: string
}