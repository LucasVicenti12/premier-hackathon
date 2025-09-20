import {City} from "../../../utils/entities/entities.ts";

export interface Hospital{
    code: string
    codeIBGE: string
    name: string
    badCapacity: number
    specialities: string[],
    neighborhood: string,
    city: City
}

export interface HospitalListResponse{
    items?: Hospital
    count?: number
    page?: number
    totalCount?: number
    error?: string
}