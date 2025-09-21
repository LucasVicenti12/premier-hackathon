import mock from "./mock.json";
import {CidTableListResponse} from "../entities/entities.ts";

class CidTableRepository{
    async getCidTableList(page: number): Promise<CidTableListResponse> {
        console.log(page)
        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as CidTableListResponse)
            }, 1000)
        })
    }
}

export const cidTableRepository = new CidTableRepository();