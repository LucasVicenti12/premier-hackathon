export interface CidTable{
    code: string
    description: string
}

export interface CidTableListResponse{
    items?: CidTable[]
    count?: number
    page?: number
    totalCount?: number
    error?: string
}