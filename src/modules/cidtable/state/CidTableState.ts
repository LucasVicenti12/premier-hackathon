import {atom} from "jotai/index";
import {loadable} from "jotai/utils";
import {cidTableUseCase} from "../usecase/CidTableUseCase.ts";

const Page = atom(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    return cidTableUseCase.getCidTableList(page)
}))

export default {
    Page,
    List
}