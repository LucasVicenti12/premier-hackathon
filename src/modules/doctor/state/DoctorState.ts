import { atom } from "jotai"
import { doctorsUseCase } from "../usecase/DoctorsUseCase"
import { loadable } from "jotai/utils"

const Page = atom(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    return doctorsUseCase.getDoctors(page)
}))

export default {
    Page,
    List
}