import {CidTableListResponse} from "../entities/entities.ts";
import {cidTableRepository} from "../repository/CidTableRepository.ts";

class CidTableUseCase {
    async getCidTableList(page: number): Promise<CidTableListResponse> {
        return cidTableRepository.getCidTableList(page)
    }
}

export const cidTableUseCase = new CidTableUseCase();