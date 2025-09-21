import {atom} from "jotai";
import { loadable } from "jotai/utils";
import {stateUseCase} from "../usecase/StateUseCase.ts";

const Update = atom<boolean>(false)
const Page = atom<number>(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    get(Update)

    return stateUseCase.getPaginatedStates(page)
}))

export default {
    Page,
    List
}