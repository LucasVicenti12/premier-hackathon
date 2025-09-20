export interface Patient {
    code: string,
    codigoIbge: string,
    name: string,
    neighborhood: string,
    gender: string,
    bedCapacity: string
}

export interface PatientListResponse {
    items?: Patient[]
    count?: number,
    page?: number,
    totalCount?: number
    error?: string
}