import {StateListResponse} from "../entities/entities.ts"
import {stateRepository} from "../repository/StateRepository.ts"

class StateUseCase {
    async getPaginatedStates(page: number): Promise<StateListResponse> {
        return stateRepository.getPaginatedState(page)
    }
}

export const stateUseCase = new StateUseCase()