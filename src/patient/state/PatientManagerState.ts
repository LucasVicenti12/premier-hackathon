import {atom} from "jotai";
import { loadable } from "jotai/utils";
import { patientUseCase } from "../usecase/PatientUsecase";

const Update = atom<boolean>(false)
const Page = atom<number>(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    get(Update)

    return patientUseCase.getPaginatedFiles(page)
}))

export default {
    Page,
    List
}