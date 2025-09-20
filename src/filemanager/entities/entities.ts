export interface FileToUpload {
    name: string,
    type: EntityType
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