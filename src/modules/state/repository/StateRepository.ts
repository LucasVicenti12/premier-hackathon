import mock from "./mock.json";
import {StateListResponse} from "../entities/entities.ts";

class StateRepository {
    async getPaginatedState(page: number): Promise<StateListResponse> {
        console.log(page)
        const t = mock as unknown

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(t as StateListResponse)
            }, 1000)
        })
    }
}

export const stateRepository = new StateRepository()
