import {atom} from "jotai";
import { loadable } from "jotai/utils";
import {fileManagerUseCase} from "../usecase/FileManagerUseCase.ts";

const Update = atom<boolean>(false)
const Page = atom<number>(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    get(Update)

    return fileManagerUseCase.getPaginatedFiles(page)
}))

export default {
    Update,
    Page,
    List
}