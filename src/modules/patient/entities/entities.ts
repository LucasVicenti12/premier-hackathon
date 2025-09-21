import {City} from "../../../utils/entities/entities.ts";

export interface Patient {
    code: string
    codeIBGE: string
    name: string
    neighborhood: string
    gender: string
    bedCapacity: string
    city: City
}

export interface PatientListResponse {
    items?: Patient[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}

export interface PatientResponse {
    patient?: Patient
    error?: string
}