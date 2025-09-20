import {loadable} from "jotai/utils";
import {atom} from "jotai";
import {hospitalsUseCase} from "../usecase/HospitalsUseCase.ts";

const Page = atom(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    return hospitalsUseCase.getHospitals(page)
}))

export default {
    Page,
    List
}