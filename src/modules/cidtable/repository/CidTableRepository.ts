import {CidTableListResponse} from "../entities/entities.ts";
import {http} from "../../../config/api/Http.ts";

class CidTableRepository{
    async getCidTableList(page: number): Promise<CidTableListResponse> {
        try {
            const response = await http.get(`/cidTable?page=${page}&count=10`)

            return response.data as CidTableListResponse
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const cidTableRepository = new CidTableRepository();