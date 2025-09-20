export interface FileToUpload {
    type: EntityType
    contentType?: string
    data?: string
}

export interface GetFileURLResponse {
    url?: string
    error?: string
}

export interface UploadFileResponse {
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

export interface ProcessFile {
    fileName: string
    status: string
    createAt: string
    processedAt: string
    startedProcessingAt: string
}

export enum FileStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    ERROR = "ERROR",
    FINISHED = "FINISHED",
}

export interface FileListResponse {
    items?: ProcessFile[]
    count?: number,
    page?: number,
    totalCount?: number
    error?: string
}

export interface ProcessFileResponse {
    message?: string
    error?: string
}

export const convertFileStatus = (status: string) => {
    const key = status.toUpperCase() as keyof typeof FileStatus;
    const t = FileStatus[key];

    switch (t){
        case FileStatus.PENDING:
            return {color: "#e1982b", label: FileStatus.PENDING}
        case FileStatus.PROCESSING:
            return {color: "#107bd1", label: FileStatus.PROCESSING}
        case FileStatus.ERROR:
            return {color: "#c51e1e", label: FileStatus.ERROR}
        case FileStatus.FINISHED:
            return {color: "#31ca53", label: FileStatus.FINISHED}
        default:
            return null
    }
}