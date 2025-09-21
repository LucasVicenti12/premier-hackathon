import {atom} from "jotai";
import {loadable} from "jotai/utils";
import {cityUseCase} from "../usecase/CityUseCase.ts";

const Update = atom<boolean>(false)
const Page = atom<number>(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    get(Update)

    return cityUseCase.getPaginatedCities(page)
}))

export default {
    Page,
    List
}