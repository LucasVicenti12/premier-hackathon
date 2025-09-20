export interface FileToUpload {
    type: EntityType
    contentType?: string
    data?: string
}

export interface GetFileURLResponse {
    url?: string
    error?: string
}

export interface UploadFileResponse{
    status?: number
    error?: string
}

export enum EntityType {
    NONE = "NONE",
    PATIENT = "PATIENT",
    HOSPITAL = "HOSPITAL",
    STATE = "STATE",
    CITY = "CITY",
    DOCTOR = "DOCTOR",
    CID_TABLE = "CID_TABLE"
}

export interface File {
    fileName: string
    status: string
    createAt: string
    startedProcessing: string
}